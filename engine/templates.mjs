// HTML templates: plain functions returning strings.
// `html` joins arrays, so you can map() inside ${}. Text that isn't HTML goes through esc().

export const esc = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const html = (strings, ...values) =>
  strings.reduce((out, s, i) => out + s + (i < values.length ? [values[i]].flat().join("") : ""), "");

const social = (site) =>
  html`<ul class="social">${site.config.social.map(
    (s) => html`<li><a href="${s.href}" rel="me" title="${esc(s.label)}"><img src="${site.image(s.icon)}" alt="${esc(s.label)}" width="24" height="24"></a></li>`,
  )}</ul>`;

// ---------------------------------------------------------------------------

export function layout(site, { title, description, path, body, image = "mypic.jpg" }) {
  const c = site.config;
  const fullTitle = title ? `${title} · ${c.name}` : `${c.name} · ${c.title}`;
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
  <a class="brand" href="/"><img src="${site.image("geology.svg")}" alt="" width="40" height="40"> ${esc(c.title)}</a>
  <nav>${c.nav.map((n) => html`<a href="${n.href}"${site.abs(path) === site.abs(n.href.replace(/^\//, "")) ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`)}</nav>
</header>
<main>
${body}
</main>
<footer class="site-footer">
  <div>
    <p>© ${new Date().getFullYear()} <a href="/about/">${esc(c.name)}</a></p>
    <p class="small">Icons by <a href="https://www.flaticon.com/authors/freepik">Freepik</a> from <a href="https://www.flaticon.com/">flaticon.com</a></p>
  </div>
  ${social(site)}
</footer>
${site.dev ? '<script src="/__reload.js"></script>' : ""}
</body>
</html>
`;
}

// ---------------------------------------------------------------------------

export function homePage(site, { intro, projects }) {
  const c = site.config;
  return layout(site, {
    path: "",
    body: html`
<section class="hero">
  <img class="portrait" src="${site.image("mypic.jpg")}" alt="Portrait of ${esc(c.name)}" width="240" height="240">
  <h1 class="name">${esc(c.name)}, PhD.</h1>
  <div class="rule"></div>
  <div class="prose">${intro}</div>
  ${social(site)}
</section>

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

export function aboutPage(site, { content, bio, publications }) {
  const c = site.config;
  return layout(site, {
    title: "About",
    path: "about/",
    body: html`
<section class="about">
  <aside>
    <img class="portrait small" src="${site.image("mypic.jpg")}" alt="Portrait of ${esc(c.name)}" width="80" height="80">
    <h1 class="name">${esc(c.name)}</h1>
    <div class="rule"></div>
    <p>${esc(bio)}</p>
    ${social(site)}
  </aside>
  <div class="prose">${content}</div>
</section>

<section class="publications prose">
  <h2 id="publications">List of scientific publications</h2>
  <ol reversed>
  ${publications.map(
    (p) => html`
    <li id="${esc(p.key)}">${p.html}
      ${p.doi ? html`<a href="https://doi.org/${esc(p.doi)}">doi:${esc(p.doi)}</a>` : ""}
      ${p.arxiv ? html` · <a href="https://arxiv.org/abs/${esc(p.arxiv)}">arXiv:${esc(p.arxiv)}</a>` : ""}
    </li>`,
  )}
  </ol>
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
