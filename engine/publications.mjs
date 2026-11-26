// The publications on /about/, generated from your Zotero export.
//
// Every item in src/bibliography.json with you as an author is listed,
// newest first, so adding a paper to Zotero is enough: Better BibTeX keeps
// the export updated and the next build picks it up. Items are sorted into
// sections by their Zotero item type:
//   thesis            -> theses
//   computer program  -> software
//   arXiv preprint    -> preprints
//   anything else     -> papers
// A preprint whose title matches (or nearly matches) a published paper is not listed on its own:
// its arXiv number becomes a link on the paper instead.
//
// src/data/publications.yml holds the few exceptions. It refers to items by
// DOI or arXiv number, not by citation key, because Better BibTeX renames keys
// when the library changes. Authors, titles and journals come from Zotero and
// are formatted with the site's citation style.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";
import { Cite, plugins } from "@citation-js/core";
import "@citation-js/plugin-csl"; // adds CSL formatting to citation-js

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// identifiers: "10.xxxx/…" for a DOI, "arXiv:NNNN.NNNNN" for arXiv
const ARXIV = /(?:arxiv[:.\/]|arxiv\.org\/abs\/)(\d{4}\.\d{4,5}|[a-z-]+\/\d{7})(?:v\d+)?/i;
const arxivOf = (item) => {
  for (const field of [item.number, item.URL, item.DOI, item.note, item.archive_location]) {
    const m = field && String(field).match(ARXIV);
    if (m) return m[1];
  }
};
const normDoi = (doi) => doi && String(doi).trim().toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, "");
const isArxivDoi = (doi) => /^10\.48550\//i.test(doi ?? "");
const ids = (item) => {
  const out = [];
  if (item.DOI) out.push(normDoi(item.DOI));
  const a = arxivOf(item);
  if (a) out.push(`arxiv:${a.toLowerCase()}`);
  return out;
};
const normId = (id) => {
  const s = String(id).trim().toLowerCase();
  return /^arxiv:/.test(s) ? s.replace(/v\d+$/, "") : normDoi(s);
};
const normTitle = (t) => String(t ?? "").toLowerCase().normalize("NFKD").replace(/[^a-z0-9]+/g, " ").trim();

function sectionOf(item) {
  if (item.type === "thesis") return "theses";
  if (item.type === "software" || item.type === "dataset") return "software";
  const preprint =
    item.type === "article" || /^arxiv$/i.test(item["container-title"] ?? "") || isArxivDoi(item.DOI);
  return preprint ? "preprints" : "papers";
}

const date = (item) => {
  const [y = 0, m = 0, d = 0] = item.issued?.["date-parts"]?.[0] ?? [];
  return Number(y) * 10000 + Number(m) * 100 + Number(d);
};

export async function renderPublications({ root, config }) {
  const { file, author, highlight = [] } = config.publications;
  const rules = yaml.load(await readFile(join(root, file), "utf8")) ?? {};
  const library = [];
  for (const f of config.citations.files) library.push(...JSON.parse(await readFile(join(root, f), "utf8")));

  const exclude = new Set((rules.exclude ?? []).map(normId));
  const arxivLinks = new Map(Object.entries(rules.arxiv ?? {}).map(([id, a]) => [normId(id), String(a)]));
  const published = new Map(Object.entries(rules.published ?? {}).map(([pre, pub]) => [normId(pre), normId(pub)]));
  const used = new Set(); // rule identifiers that matched an item

  const isMine = (item) => (item.author ?? []).some((a) => a.family === author);
  const matches = (item, set) => ids(item).filter((id) => set.has(id));

  // 1. your items, without the excluded ones and without duplicate DOIs
  const items = [];
  const seenDoi = new Map();
  for (const item of library) {
    if (!isMine(item)) continue;
    const ex = matches(item, exclude);
    if (ex.length) {
      ex.forEach((id) => used.add(id));
      continue;
    }
    const doi = item.DOI && normDoi(item.DOI);
    if (doi && seenDoi.has(doi)) {
      // keep the journal-article record of the two
      const other = seenDoi.get(doi);
      if (other.type !== "article-journal" && item.type === "article-journal") items[items.indexOf(other)] = item;
      continue;
    }
    if (doi) seenDoi.set(doi, item);
    items.push(item);
  }

  // 2. preprints of published papers become arXiv links on the paper
  const papers = items.filter((i) => sectionOf(i) === "papers");
  // same first author and nearly the same title words (titles often change a little on publication)
  const words = (t) => new Set(normTitle(t).split(" "));
  const similar = (a, b) => {
    const A = words(a.title), B = words(b.title);
    const common = [...A].filter((w) => B.has(w)).length;
    return a.author?.[0]?.family === b.author?.[0]?.family && common / (A.size + B.size - common) >= 0.75;
  };
  const sameAs = (pre) => papers.find((p) => normTitle(p.title) === normTitle(pre.title)) ?? papers.find((p) => similar(p, pre));
  const byId = new Map(papers.flatMap((p) => ids(p).map((id) => [id, p])));
  const arxivFor = new Map();
  const listed = [];
  for (const item of items) {
    if (sectionOf(item) === "preprints") {
      const pre = ids(item).find((id) => published.has(id));
      if (pre) used.add(pre);
      const paper = pre ? byId.get(published.get(pre)) : sameAs(item);
      if (pre && paper) used.add(published.get(pre));
      if (paper) {
        const a = arxivOf(item);
        if (a && !arxivFor.has(paper)) arxivFor.set(paper, a);
        continue;
      }
    }
    listed.push(item);
  }

  // register the site's citation style with citation-js
  const styleName = "site-style";
  const csl = plugins.config.get("@csl");
  if (!csl.templates.has(styleName)) csl.templates.add(styleName, await readFile(join(root, config.citations.style), "utf8"));
  const bold = highlight.length ? new RegExp(highlight.map((h) => esc(h).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g") : null;

  const result = { papers: [], preprints: [], theses: [], software: [] };
  for (const item of listed.sort((a, b) => date(b) - date(a))) {
    let html = new Cite(item)
      .format("bibliography", { format: "html", template: styleName, lang: "en-US" })
      .replace(/^\s*<div class="csl-bib-body">\s*<div[^>]*class="csl-entry"[^>]*>|<\/div>\s*<\/div>\s*$/g, "")
      .trim();
    html = html
      .replace(/:\s*\.(\s*)$/, ".$1") // no journal yet (preprints): "title: ." -> "title."
      .replace(/([a-zà-ÿ])\.([A-ZÀ-Þ])/g, "$1. $2"); // the style omits a space before thesis genres
    if (bold) html = html.replace(bold, (m) => `<strong>${m}</strong>`);
    const manual = ids(item).find((id) => arxivLinks.has(id));
    if (manual) used.add(manual);
    const arxiv = arxivFor.get(item) ?? (manual && arxivLinks.get(manual)) ?? arxivOf(item);
    // arXiv DOIs (10.48550/…) are shown as arXiv links instead
    const doi = item.DOI && !isArxivDoi(item.DOI) ? item.DOI : undefined;
    const year = Number(item.issued?.["date-parts"]?.[0]?.[0] ?? 0);
    result[sectionOf(item)].push({ key: item["citation-key"] ?? item.id, html, year, doi, arxiv });
  }

  const stale = [...exclude, ...arxivLinks.keys(), ...published.keys()].filter((id) => !used.has(id));
  if (stale.length) console.warn(`  ! publications.yml: these match nothing in your Zotero export: ${stale.join(", ")}`);
  return result;
}
