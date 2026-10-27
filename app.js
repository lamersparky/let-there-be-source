(() => {
  'use strict';
  const byId = id => document.getElementById(id);
  const grid = byId('projectGrid');
  const search = byId('searchInput');
  const status = byId('statusFilter');
  const category = byId('categoryFilter');
  const sort = byId('sortSelect');
  const count = byId('visibleCount');
  const label = byId('resultsLabel');
  const empty = byId('emptyState');
  const resetButton = byId('resetFilters');
  const emptyReset = byId('emptyReset');
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS.filter(p => p && typeof p.name === 'string') : null;

  if (![grid, search, status, category, sort, count, label, empty, resetButton, emptyReset].every(Boolean)) {
    console.error('LET THERE BE SOURCE: required catalog elements are missing.');
    return;
  }
  const validRepo = p => typeof p.repo === 'string' && /^https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9._-]+\/?$/.test(p.repo);
  const published = p => p.status === 'published' && validRepo(p);
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  if (!projects) {
    count.textContent = '—';
    label.textContent = 'INVENTORY ERROR · PROJECT DATA DID NOT LOAD';
    empty.hidden = false;
    grid.hidden = true;
    empty.querySelector('h3').textContent = 'Project inventory unavailable';
    empty.querySelector('p').textContent = 'The catalog data could not be loaded. Check that projects.js is present and loads before app.js.';
    emptyReset.hidden = true;
    return;
  }
  const categories = [...new Set(projects.map(p => p.category).filter(v => typeof v === 'string' && v.trim()))].sort((a,b)=>a.localeCompare(b));
  categories.forEach(name => {
    const option = document.createElement('option'); option.value = name; option.textContent = name; category.append(option);
  });
  const card = p => {
    const isPublished = published(p);
    const pill = isPublished ? '<span class="status-pill published">PUBLISHED ON GITHUB</span>' : '<span class="status-pill progress">IN PROGRESS</span>';
    const tags = (Array.isArray(p.tags) ? p.tags : []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    const action = isPublished ? `<a class="repo-link" href="${escapeHtml(p.repo)}" target="_blank" rel="noopener noreferrer">View repository ↗</a>` : '<span class="in-progress-note">Not yet published</span>';
    return `<article class="project-card"><div class="card-top"><div class="project-symbol">${escapeHtml(p.symbol || '◇')}</div>${pill}</div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description || 'Project details have not yet been added.')}</p><div class="card-meta"><span class="tag">${escapeHtml(p.category || 'Uncategorized')}</span><span class="tag">${escapeHtml(p.language || 'Not specified')}</span>${tags}</div><div class="card-footer"><span>${isPublished ? 'PUBLIC REPOSITORY' : 'WORKSHOP STATUS'}</span>${action}</div></article>`;
  };
  function render() {
    const q = search.value.trim().toLocaleLowerCase();
    let list = projects.filter(p => {
      const isPublic = published(p);
      const searchable = [p.name,p.description,p.category,p.language,...(Array.isArray(p.tags)?p.tags:[])].join(' ').toLocaleLowerCase();
      return (!q || searchable.includes(q)) && (status.value === 'all' || (status.value === 'published' ? isPublic : !isPublic)) && (category.value === 'all' || p.category === category.value);
    });
    if (sort.value === 'name') list.sort((a,b)=>a.name.localeCompare(b.name));
    else if (sort.value === 'status') list.sort((a,b)=>(published(a)?0:1)-(published(b)?0:1)||a.name.localeCompare(b.name));
    else list.sort((a,b)=>(Number(a.featured)||999)-(Number(b.featured)||999)||a.name.localeCompare(b.name));
    grid.innerHTML = list.map(card).join('');
    count.textContent = String(list.length).padStart(2,'0');
    label.textContent = `SHOWING ${list.length} OF ${projects.length} ENTRIES`;
    empty.hidden = list.length !== 0;
    grid.hidden = list.length === 0;
  }
  [search,status,category,sort].forEach(el=>el.addEventListener(el === search ? 'input' : 'change', render));
  function reset(){search.value='';status.value='all';category.value='all';sort.value='featured';render();}
  resetButton.addEventListener('click',reset); emptyReset.addEventListener('click',reset);
  const menu = byId('menuToggle'); const nav = document.querySelector('.topbar nav');
  if (menu && nav) {
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  }
  render();
})();
