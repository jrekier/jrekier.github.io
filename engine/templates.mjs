// HTML templates: plain functions returning strings.
// `html` joins arrays, so you can map() inside ${}. Text that isn't HTML goes through esc().

export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const html = (strings, ...values) =>
  strings.reduce((out, s, i) => out + s + (i < values.length ? [values[i]].flat().join("") : ""), "");

/** the email link, with the address in two halves; EMAIL_JS joins them when the page loads (without
 *  JavaScript the link leads to the About page) */
export const emailLink = (c) =>
  c.email ? `<a href="/about/" data-u="${esc(c.email.user)}" data-d="${esc(c.email.domain)}">Email</a>` : "";
export const EMAIL_JS = `<script>for (const a of document.querySelectorAll("a[data-u][data-d]")) { const e = a.dataset.u + String.fromCharCode(64) + a.dataset.d; a.href = "mailto:" + e; a.title = e; }</script>`;

/** Email · ADS · GitHub · … (rel="me" lets Mastodon verify the link back to this site) */
const links = (site) =>
  html`<p class="links">${[emailLink(site.config), ...site.config.links.map((l) => html`<a href="${l.href}" rel="me">${esc(l.label)}</a>`)].filter(Boolean).join(' <span aria-hidden="true">·</span> ')}</p>`;

const affiliation = (site) => {
  const a = site.config.affiliation;
  return a ? html`<p class="affiliation"><a href="${a.href}">${esc(a.label)}</a></p>` : "";
};

// ---------------------------------------------------------------------------

export function layout(site, { title, description, path, body, image = "mypic.jpg" }) {
  const c = site.config;
  const fullTitle = title ? `${title} · ${c.name}` : c.name;
  return html`<!doctype html>
<html lang="${c.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description ?? c.description)}">
<link rel="canonical" href="${site.abs(path)}">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="stylesheet" href="/style.css?v=${site.version}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(c.name)}">
<meta property="og:title" content="${esc(title ?? c.name)}">
<meta property="og:description" content="${esc(description ?? c.description)}">
<meta property="og:url" content="${site.abs(path)}">
<meta property="og:image" content="${site.abs(site.image(image).slice(1))}">
</head>
<body>
<header class="site-header">
  <a class="brand" href="/"><img src="${site.image("geology.svg")}" alt="" width="36" height="36"> ${esc(c.name)}</a>
  <nav>${c.nav.map((n) => html`<a href="${n.href}"${site.abs(path) === site.abs(n.href.replace(/^\//, "")) ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`)}</nav>
</header>
<main>
${body}
</main>
<footer class="site-footer">
  <p>© ${new Date().getFullYear()} ${esc(c.name)}</p>
  ${links(site)}
</footer>
${site.config.email ? EMAIL_JS : ""}
${site.dev ? '<script src="/__reload.js"></script>' : ""}
</body>
</html>
`;
}

// ---------------------------------------------------------------------------

/** The scroll-driven Earth cutaway (engine/assets/earth.js draws it). */
const earthSection = (site, { steps, fallback }) =>
  steps?.length
    ? html`
<section class="earth" data-textures="/textures/" aria-labelledby="earth-title">
  <div class="earth-stage">
    <canvas aria-hidden="true"></canvas>
    ${fallback ? html`<img class="earth-fallback" src="${fallback.url}" width="${fallback.width}" height="${fallback.height}" alt="Cutaway of the Earth showing the mantle, the liquid outer core and the solid inner core">` : ""}
  </div>
  <div class="earth-steps">
  ${steps.map(
    (s, i) => html`
    <div class="earth-step"><div class="earth-card">
      <h2${i === 0 ? ' id="earth-title"' : ""}>${esc(s.title)}</h2>
      <p>${esc(s.text)}</p>
    </div></div>`,
  )}
    <p class="credit">Surface textures: <a href="https://www.solarsystemscope.com/textures/">Solar System Scope</a>, <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a></p>
  </div>
</section>
<script type="module" src="/js/earth.js?v=${site.version}"></script>`
    : "";

export function homePage(site, { intro, projects, earth = {} }) {
  const c = site.config;
  return layout(site, {
    path: "",
    body: html`
<section class="hero">
  <img class="portrait" src="${site.image("mypic.jpg")}" alt="Portrait of ${esc(c.name)}" width="240" height="240">
  <h1 class="name">${esc(c.name)}</h1>
  ${affiliation(site)}
  <div class="rule"></div>
  <div class="prose">${intro}</div>
  ${links(site)}
</section>
${earthSection(site, earth)}
<section class="projects">
  <h2>Some of my projects</h2>
  <p>Things I’ve been working on.</p>
  <ul class="cards">
  ${projects.map(
    (p) => html`
    <li>
      <a href="/${p.path}">
        ${p.image ? html`<img src="${p.image.url}" alt="" width="${p.image.width}" height="${p.image.height}" loading="lazy">` : ""}
        <h3>${esc(p.title)}</h3>
      </a>
      ${p.description ? html`<p>${esc(p.description)}</p>` : ""}
    </li>`,
  )}
  </ul>
</section>`,
  });
}

const pubLinks = (p) =>
  [p.doi && html`<a href="https://doi.org/${esc(p.doi)}">doi:${esc(p.doi)}</a>`, p.arxiv && html`<a href="https://arxiv.org/abs/${esc(p.arxiv)}">arXiv:${esc(p.arxiv)}</a>`]
    .filter(Boolean)
    .join(" · ");

const pubList = (entries) =>
  html`<ul class="pubs">${entries.map((p) => html`<li id="${esc(p.key)}">${p.html} ${pubLinks(p)}</li>`)}</ul>`;

const SECTION_TITLES = { preprints: "Preprints", theses: "Theses and monographs", software: "Software" };

export function aboutPage(site, { content, publications }) {
  const c = site.config;
  const { papers = [], ...others } = publications;
  const years = [...new Set(papers.map((p) => p.year))];

  return layout(site, {
    title: "About",
    path: "about/",
    body: html`
<section class="about">
  <aside>
    <img class="portrait small" src="${site.image("mypic.jpg")}" alt="Portrait of ${esc(c.name)}" width="96" height="96">
    <h1 class="name">${esc(c.name)}</h1>
    ${affiliation(site)}
    <div class="rule"></div>
    ${links(site)}
    ${c.cv ? html`<p><a class="button" href="${c.cv}">CV (PDF)</a></p>` : ""}
  </aside>
  <div class="prose">${content}</div>
</section>

<section class="publications prose">
  <h2 id="publications">Publications</h2>
  ${years.map((y) => html`<h3 class="year">${y}</h3>${pubList(papers.filter((p) => p.year === y))}`)}
  ${Object.entries(others)
    .filter(([, entries]) => entries.length)
    .map(([name, entries]) => html`<h2 id="${esc(name)}">${esc(SECTION_TITLES[name] ?? name)}</h2>${pubList(entries)}`)}
  ${c.publications.fullList ? html`<p class="full-list"><a href="${c.publications.fullList}">Full list on NASA ADS</a></p>` : ""}
</section>`,
  });
}

export function projectPage(site, project) {
  return layout(site, {
    title: project.title,
    description: project.description || undefined,
    path: project.path,
    image: project.imageFile,
    body: html`
<article class="project">
  <h1>${esc(project.title)}</h1>
  <div class="prose">
${project.html}
  </div>
</article>`,
  });
}

export function notFoundPage(site) {
  return layout(site, {
    title: "Not found",
    path: "404.html",
    body: html`<article class="project"><h1>Not found</h1><p>That page doesn’t exist. <a href="/">Back to the home page</a>.</p></article>`,
  });
}

export function redirectPage(to) {
  return html`<!doctype html><meta charset="utf-8"><title>Moved</title><meta http-equiv="refresh" content="0; url=${esc(to)}"><link rel="canonical" href="${esc(to)}"><p>Moved to <a href="${esc(to)}">${esc(to)}</a>.</p>`;
}

export function sitemap(site, paths) {
  return html`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => html`<url><loc>${site.abs(p)}</loc></url>\n`)}</urlset>
`;
}
