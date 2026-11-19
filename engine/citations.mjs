// Copied from the bit-blog engine (engine/citations.mjs).
// [@key] citations from your Zotero export (Better BibTeX, "Keep updated").
//
//   [@key]            (Author, 2020)
//   [@key, p. 3]      (Author, 2020, p. 3)
//   [@a; @b]          several at once
//   @key showed       Author (2020) showed
//   [-@key]           (2020)
//
// The bibliography goes at the end, or where you put [^ref] on its own line.
// Per-post frontmatter: `csl: chicago`, `noCite: ["@key"]`.

import { existsSync } from "node:fs";
import rehypeCitation from "rehype-citation";
import { visit } from "unist-util-visit";

export function rehypeCitations({ root, files, style, heading }) {
  const bibliography = files.filter((f) => existsSync(`${root}/${f}`));

  return async function (tree, file) {
    if (bibliography.length === 0) return;
    const fm = file.data.frontmatter ?? {};

    await rehypeCitation({
      bibliography: [...bibliography], // (the plugin rewrites this array in place)
      path: root,
      csl: fm.csl ?? style,
      linkCitations: true,
      showTooltips: true,
    })(tree, file);

    visit(tree, "text", (node, _, parent) => {
      if (parent?.tagName === "code") return;
      const missing = node.value.match(/\[-?@[\w:./-]+[^\]]*\]/g);
      if (missing) file.message(`citation not in your Zotero export: ${missing.join(", ")}`);
    });

    // rehype-citation double-escapes entities in tooltips
    visit(tree, "element", (node) => {
      const t = node.properties?.title;
      if (typeof t === "string" && t.includes("&#"))
        node.properties.title = t.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
    });

    visit(tree, "element", (node, index, parent) => {
      if (node.properties?.id !== "refs" || !parent) return;
      parent.children.splice(index, 0, {
        type: "element",
        tagName: "h2",
        properties: { id: "references" },
        children: [{ type: "text", value: heading }],
      });
      return index + 2;
    });
  };
}
