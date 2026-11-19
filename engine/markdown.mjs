// Copied from the bit-blog engine (engine/markdown.mjs) and trimmed: no math here.
// Markdown -> HTML. Each .use(...) line is one transformation.

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";
import { visit } from "unist-util-visit";
import { toString } from "hast-util-to-string";
import { rehypeCitations } from "./citations.mjs";

/** id="..." on headings, so you can link to #a-section. */
function rehypeHeadingIds() {
  return (tree) => {
    const slugger = new GithubSlugger();
    visit(tree, "element", (node) => {
      if (/^h[1-6]$/.test(node.tagName) && !node.properties.id) node.properties.id = slugger.slug(toString(node));
    });
  };
}

/**
 * An image alone in its paragraph, with a title, becomes a captioned figure:
 *   ![alt](/images/x.png "Caption")  ->  <figure><img …><figcaption>Caption</figcaption></figure>
 */
function rehypeFigures() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "p") return;
      const kids = node.children.filter((c) => !(c.type === "text" && !c.value.trim()));
      const img = kids[0];
      if (kids.length !== 1 || img.tagName !== "img" || !img.properties.title) return;
      const caption = img.properties.title;
      delete img.properties.title;
      node.tagName = "figure";
      node.children = [img, { type: "element", tagName: "figcaption", properties: {}, children: [{ type: "text", value: caption }] }];
    });
  };
}

/** Hands every local <img src> to `resolveImage`, which copies/optimizes it and returns its URL and size. */
function rehypeImages({ resolveImage }) {
  return async (tree, file) => {
    const imgs = [];
    visit(tree, "element", (node) => {
      if (node.tagName === "img" && !/^(https?:|data:)/.test(node.properties.src ?? "")) imgs.push(node);
    });
    for (const img of imgs) {
      const res = await resolveImage(img.properties.src, file.path);
      if (!res) {
        file.message(`image not found: ${img.properties.src}`);
        continue;
      }
      img.properties.src = res.url;
      if (res.width) Object.assign(img.properties, { width: res.width, height: res.height });
      img.properties.loading = "lazy";
      img.properties.decoding = "async";
    }
  };
}

export function createRenderer({ root, config, resolveImage }) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm) // tables, footnotes, autolinked URLs
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // keep inline HTML
    .use(rehypeHeadingIds)
    .use(rehypeFigures)
    .use(rehypeImages, { resolveImage })
    .use(rehypeCitations, { root, ...config.citations })
    .use(rehypeStringify);

  return async function render(markdown, { path, frontmatter }) {
    const file = await processor.process({ value: markdown, path, data: { frontmatter } });
    for (const m of file.messages) console.warn(`  ! ${path}: ${m.reason}`);
    return String(file);
  };
}
