# LET THERE BE SOURCE — Website

A responsive, static website for PROJECT GUT.

## Contents

- `index.html` — website structure and metadata
- `styles.css` — responsive visual design
- `projects.js` — project catalog and publication status
- `app.js` — search, filters, sorting, and responsive navigation
- `assets/opossum-fleet-alliance.png` — supplied insignia

## Run locally

No build tools or package manager are required. Open `index.html` in a browser, or serve the folder locally:

```sh
cd let_there_be_source_website
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create or open the intended website repository.
2. Copy the contents of this folder into the repository root.
3. Commit and push the files.
4. In GitHub, open **Settings → Pages** and choose the appropriate branch and root folder.
5. Open the Pages URL GitHub provides and test it on desktop and mobile.

## Project publication policy

The inventory deliberately distinguishes public repositories from projects still in progress. An entry is marked **PUBLISHED ON GITHUB** only when its `projects.js` record has `status: "published"` and an exact repository URL in the expected `https://github.com/OWNER/REPOSITORY` format. Other entries show **IN PROGRESS** and do not show a repository link.

The Lamer & Buddy Music Archive is the sole published entry currently configured with a repository link. Other projects are intentionally marked in progress because their public repository URLs have not been verified for this build. Update each entry only after confirming the repository is public and the URL opens correctly.

## Notes

- The design uses Google Fonts when internet access is available; system fonts remain as fallbacks.
- The supplied logo is stored locally in `assets/`.
- No frameworks, analytics, tracking scripts, or third-party JavaScript libraries are used.
- This is a static website; it does not automatically query GitHub. The catalog is manually maintained to avoid presenting unverified repositories as published.
