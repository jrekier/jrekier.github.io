# jrekier.github.io

My personal site: home page, about page with publications, and project pages.
The blog lives in a separate repo ([bit-blog](https://github.com/jrekier/bit-blog)).

```sh
npm ci           # install exactly what package-lock.json lists
npm run dev      # preview at http://localhost:4321/ with live reload
npm run build    # build into _site/
```

Pushing to `main` builds the site and publishes it to the `gh-pages` branch, which GitHub Pages serves.

## Where things are

| What | Where |
|---|---|
| Home page text | `src/index.md` |
| About page text and bio | `src/about.md` |
| Projects (cards on the home page, one page each) | `src/projects/*.md`, ordered by their `date` |
| Publications list | `src/data/publications.yml` (citation keys) + `src/bibliography.json` (Zotero) |
| Images | `src/assets/images/` → served at `/images/` |
| Favicons and other files served as-is | `src/static/` |
| Old addresses that moved | `src/data/redirects.json` |
| Site settings: navigation, social links, citation style | `engine/config.mjs` |
| Look | `engine/assets/style.css` |
| Page structure | `engine/templates.mjs` |
| Private archive (never built or published) | `archive/` |

## Zotero

`src/bibliography.json` is a **Better CSL JSON** export from Zotero (Better BibTeX add-on) with **Keep updated** ticked.
It feeds two things, both formatted with `geophysics.csl`:

- `[@key]` citations in project pages, with a reference list at the end;
- the publications list on `/about/`: add a paper by adding its key to `src/data/publications.yml`
  (plus its arXiv id, if any). The list is sorted newest first.

## The engine

`engine/` is a copy of the [bit-blog](https://github.com/jrekier/bit-blog) engine, trimmed for this site
(no math, posts, search or feeds) and extended with figures and the publications list.
The two copies are independent on purpose; files copied unchanged say so at the top.
`.npmrc` disables install scripts, and Dependabot proposes updates weekly (ignoring releases less than a week old).
