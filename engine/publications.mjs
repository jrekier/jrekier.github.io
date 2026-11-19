// The publications on /about/, generated from your Zotero export.
//
// src/data/publications.yml says which items to show, in sections
// (papers, preprints, theses, software), by citation key. Everything else
// (authors, title, journal, DOI) comes from Zotero and is formatted with the
// site's citation style.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";
import { Cite, plugins } from "@citation-js/core";
import "@citation-js/plugin-csl"; // adds CSL formatting to citation-js

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

export async function renderPublications({ root, config }) {
  const { file, highlight = [] } = config.publications;
  const sections = yaml.load(await readFile(join(root, file), "utf8")) ?? {};
  const library = [];
  for (const f of config.citations.files) library.push(...JSON.parse(await readFile(join(root, f), "utf8")));
  const byKey = new Map(library.map((item) => [item["citation-key"] ?? item.id, item]));

  // register the site's citation style with citation-js
  const styleName = "site-style";
  const csl = plugins.config.get("@csl");
  if (!csl.templates.has(styleName)) csl.templates.add(styleName, await readFile(join(root, config.citations.style), "utf8"));
  const bold = highlight.length ? new RegExp(highlight.map((h) => esc(h).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g") : null;

  const missing = [];
  const result = {};
  for (const [section, list] of Object.entries(sections)) {
    const entries = [];
    for (const [i, { key, arxiv }] of (list ?? []).entries()) {
      const item = byKey.get(key);
      if (!item) {
        missing.push(key);
        continue;
      }
      let html = new Cite(item)
        .format("bibliography", { format: "html", template: styleName, lang: "en-US" })
        .replace(/^\s*<div class="csl-bib-body">\s*<div[^>]*class="csl-entry"[^>]*>|<\/div>\s*<\/div>\s*$/g, "")
        .trim();
      html = html
        .replace(/:\s*\.(\s*)$/, ".$1") // no journal yet (preprints): "title: ." -> "title."
        .replace(/([a-z\u00e0-\u00ff])\.([A-Z\u00c0-\u00de])/g, "$1. $2"); // the style omits a space before thesis genres
      if (bold) html = html.replace(bold, (m) => `<strong>${m}</strong>`);
      const year = item.issued?.["date-parts"]?.[0]?.[0] ?? 0;
      // arXiv DOIs (10.48550/…) are shown as arXiv links instead
      const doi = item.DOI && !/^10\.48550\//i.test(item.DOI) ? item.DOI : undefined;
      entries.push({ key, html, year: Number(year), doi, arxiv, i });
    }
    // newest first; the same year keeps the order of publications.yml
    result[section] = entries.sort((a, b) => b.year - a.year || a.i - b.i);
  }
  if (missing.length) console.warn(`  ! publications.yml: not in your Zotero export: ${missing.join(", ")}`);
  return result;
}
