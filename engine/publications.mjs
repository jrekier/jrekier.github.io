// The publications list on /about/, generated from your Zotero export.
//
// src/data/publications.yml lists which items to show (by citation key);
// everything else (authors, title, journal, DOI) comes from Zotero and is
// formatted with the same citation style as the rest of the site.

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import yaml from "js-yaml";
import { Cite, plugins } from "@citation-js/core";
import "@citation-js/plugin-csl"; // adds CSL formatting to citation-js

export async function renderPublications({ root, config }) {
  const wanted = yaml.load(await readFile(join(root, config.publications), "utf8")) ?? [];
  const library = [];
  for (const f of config.citations.files) library.push(...JSON.parse(await readFile(join(root, f), "utf8")));
  const byKey = new Map(library.map((item) => [item["citation-key"] ?? item.id, item]));

  // register the site's citation style with citation-js
  const styleName = "site-style";
  const csl = plugins.config.get("@csl");
  if (!csl.templates.has(styleName)) csl.templates.add(styleName, await readFile(join(root, config.citations.style), "utf8"));

  const missing = [];
  const entries = [];
  for (const { key, arxiv } of wanted) {
    const item = byKey.get(key);
    if (!item) {
      missing.push(key);
      continue;
    }
    const html = new Cite(item)
      .format("bibliography", { format: "html", template: styleName, lang: "en-US" })
      .replace(/^\s*<div class="csl-bib-body">\s*<div[^>]*class="csl-entry"[^>]*>|<\/div>\s*<\/div>\s*$/g, "")
      .trim();
    const year = item.issued?.["date-parts"]?.[0]?.[0] ?? 0;
    entries.push({ key, html, year, doi: item.DOI, arxiv });
  }
  if (missing.length) console.warn(`  ! publications.yml: not in your Zotero export: ${missing.join(", ")}`);

  // newest first; same year keeps the order of publications.yml
  return entries.map((e, i) => ({ ...e, i })).sort((a, b) => b.year - a.year || a.i - b.i);
}
