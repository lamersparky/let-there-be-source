(() => {
  const grid = document.getElementById('projectGrid');
  const search = document.getElementById('searchInput');
  const status = document.getElementById('statusFilter');
  const category = document.getElementById('categoryFilter');
  const sort = document.getElementById('sortSelect');
  const count = document.getElementById('visibleCount');
  const label = document.getElementById('resultsLabel');
  const empty = document.getElementById('emptyState');
  const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  const categories = [...new Set(projects.map(p => p.category))].sort((a,b)=>a.localeCompare(b));
  categories.forEach(name => {
    const option = document.createElement('option'); option.value = name; option.textContent = name; category.append(option);
  });
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const card = p => {
    const isPublished = p.status === 'published' && /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(p.repo || '');
    const pill = isPublished
      ? '<span class="status-pill published">PUBLISHED ON GITHUB</span>'
      : '<span class="status-pill progress">IN PROGRESS</span>';
    const tags = (p.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    const action = isPublished
      ? `<a class="repo-link" href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">View repository ↗</a>`
      : '<span class="in-progress-note">Not yet published</span>';
    return `<article class="project-card">
      <div class="card-top"><div class="project-symbol">${escapeHtml(p.symbol || '◇')}</div>${pill}</div>
      <h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p>
      <div class="card-meta"><span class="tag">${escapeHtml(p.category)}</span><span class="tag">${escapeHtml(p.language)}</span>${tags}</div>
      <div class="card-footer"><span>${isPublished ? 'PUBLIC REPOSITORY' : 'WORKSHOP STATUS'}</span>${action}</div>
    </article>`;
  };
  function render() {
    const q = search.value.trim().toLowerCase();
    let list = projects.filter(p => {
      const published = p.status === 'published' && /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(p.repo || '');
      const searchable = [p.name,p.description,p.category,p.language,...(p.tags||[])].join(' ').toLowerCase();
      return (!q || searchable.includes(q)) &&
        (status.value === 'all' || (status.value === 'published' ? published : !published)) &&
        (category.value === 'all' || p.category === category.value);
    });
    if (sort.value === 'name') list.sort((a,b)=>a.name.localeCompare(b.name));
    else if (sort.value === 'status') list.sort((a,b)=>(a.status === 'published' ? 0 : 1)-(b.status === 'published' ? 0 : 1) || a.name.localeCompare(b.name));
    else list.sort((a,b)=>(a.featured||999)-(b.featured||999));
    grid.innerHTML = list.map(card).join('');
    count.textContent = String(list.length).padStart(2,'0');
    label.textContent = `SHOWING ${list.length} OF ${projects.length} ENTRIES`;
    empty.hidden = list.length !== 0;
    grid.hidden = list.length === 0;
  }
  [search,status,category,sort].forEach(el=>el.addEventListener(el===search?'input':'change',render));
  function reset(){search.value='';status.value='all';category.value='all';sort.value='featured';render();}
  document.getElementById('resetFilters').addEventListener('click',reset);
  document.getElementById('emptyReset').addEventListener('click',reset);
  const menu = document.getElementById('menuToggle');
  const nav = document.querySelector('.topbar nav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  render();
})();