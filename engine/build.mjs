#!/usr/bin/env node
// The site engine. Reads src/, writes the static site to _site/.
// Started as a copy of the bit-blog engine (github.com/jrekier/bit-blog, engine/), trimmed for this site.
//
//   node engine/build.mjs        full build
//   node engine/dev.mjs          local preview with live reload
//
// Reading order: main() at the bottom, then the helpers it calls.

import { readFile, writeFile, mkdir, rm, readdir, copyFile, stat, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname, resolve, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import yaml from "js-yaml";
import sharp from "sharp";
import config from "./config.mjs";
import { createRenderer } from "./markdown.mjs";
import { renderPublications } from "./publications.mjs";
import * as T from "./templates.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DEV = process.argv.includes("--dev");
const P = Object.fromEntries(Object.entries(config.paths).map(([k, v]) => [k, join(root, v)]));

const write = async (path, content) => {
  const file = join(P.out, path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content);
};

// ---------------------------------------------------------------------------
// Images: src/assets/images/x -> /images/x (PNG/JPEG converted to WebP, cached in .cache/)
// ---------------------------------------------------------------------------

const imageMemo = new Map();

/** For Markdown: `src` is "/images/x.png" or a path relative to the Markdown file. */
function resolveImage(src, fromFile) {
  const clean = decodeURI(src.split(/[?#]/)[0]);
  const file = clean.startsWith("/images/") ? join(P.images, clean.slice("/images/".length)) : resolve(dirname(fromFile), clean);
  return processImage(file);
}

function processImage(file) {
  if (!imageMemo.has(file)) imageMemo.set(file, doProcessImage(file));
  return imageMemo.get(file);
}

async function doProcessImage(file) {
  if (!existsSync(file)) return null;
  const rel = relative(P.images, file);
  if (rel.startsWith("..")) throw new Error(`images must live in ${config.paths.images}: ${file}`);
  const ext = extname(file).toLowerCase();

  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    const { mtimeMs, size } = await stat(file);
    const { maxWidth, quality } = config.images;
    const key = createHash("sha1").update(`${rel}|${mtimeMs}|${size}|${maxWidth}|${quality}`).digest("hex").slice(0, 16);
    const cached = join(P.cache, "images", `${key}.webp`);
    const meta = cached + ".json";
    if (!existsSync(meta)) {
      await mkdir(dirname(cached), { recursive: true });
      const info = await sharp(file).resize({ width: maxWidth, withoutEnlargement: true }).webp({ quality }).toFile(cached);
      await writeFile(meta, JSON.stringify({ width: info.width, height: info.height }));
    }
    const outRel = join("images", rel.replace(/\.(png|jpe?g)$/i, ".webp"));
    await mkdir(dirname(join(P.out, outRel)), { recursive: true });
    await copyFile(cached, join(P.out, outRel));
    return { url: `/${outRel}`, ...JSON.parse(await readFile(meta, "utf8")) };
  }

  const outRel = join("images", rel);
  await mkdir(dirname(join(P.out, outRel)), { recursive: true });
  await copyFile(file, join(P.out, outRel));
  const dims = ext === ".gif" ? await sharp(file).metadata().catch(() => ({})) : {};
  return { url: `/${outRel}`, width: dims.width, height: dims.pageHeight ?? dims.height };
}

/** Templates call site.image("mypic.jpg"); main() prepares those images first. */
const templateImages = new Map();
async function useImage(name) {
  const res = await processImage(join(P.images, name));
  if (!res) throw new Error(`image not found: ${config.paths.images}/${name}`);
  templateImages.set(name, res);
  return res;
}

const site = {
  config,
  dev: DEV,
  version: Date.now().toString(36),
  abs: (p = "") => `${config.origin}${config.base}/${p}`,
  image: (name) => {
    if (!templateImages.has(name)) throw new Error(`template uses image "${name}" that main() didn't prepare`);
    return templateImages.get(name).url;
  },
};

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? { data: yaml.load(m[1]) ?? {}, body: src.slice(m[0].length) } : { data: {}, body: src };
}

async function loadPage(path) {
  const file = join(P.content, path);
  const { data, body } = parseFrontmatter(await readFile(file, "utf8"));
  return { file, data, body };
}

// ---------------------------------------------------------------------------

async function main() {
  const t0 = performance.now();
  await rm(P.out, { recursive: true, force: true });
  await mkdir(P.out, { recursive: true });

  const render = createRenderer({ root, config, resolveImage });
  for (const name of ["mypic.jpg", "geology.svg"]) await useImage(name);

  // projects: src/projects/*.md -> /projects/<FileName>/, ordered by their `order` field
  const projects = [];
  for (const name of (await readdir(join(P.content, "projects"))).filter((f) => f.endsWith(".md"))) {
    const { file, data, body } = await loadPage(`projects/${name}`);
    if (data.show === false) continue;
    const id = name.replace(/\.md$/, "");
    const image = data.featured_image ? await useImage(data.featured_image) : null;
    projects.push({
      ...data,
      id,
      path: `projects/${id}/`,
      image,
      imageFile: data.featured_image,
      order: data.order ?? Infinity,
      html: await render(body, { path: file, frontmatter: data }),
    });
  }
  projects.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
  for (const p of projects) await write(`${p.path}index.html`, T.projectPage(site, p));

  // home and about
  const home = await loadPage("index.md");
  await write("index.html", T.homePage(site, { intro: await render(home.body, { path: home.file, frontmatter: home.data }), projects }));

  const about = await loadPage("about.md");
  await write(
    "about/index.html",
    T.aboutPage(site, {
      content: await render(about.body, { path: about.file, frontmatter: about.data }),
      publications: await renderPublications({ root, config }),
    }),
  );

  await write("404.html", T.notFoundPage(site));
  await write("sitemap.xml", T.sitemap(site, ["", "about/", ...projects.map((p) => p.path)]));

  // redirects for old addresses
  const redirects = existsSync(join(root, config.redirects)) ? JSON.parse(await readFile(join(root, config.redirects), "utf8")) : {};
  for (const [from, to] of Object.entries(redirects)) await write(join(from, "index.html"), T.redirectPage(to));

  // static files and stylesheet
  await cp(P.static, P.out, { recursive: true });
  await copyFile(join(root, "engine/assets/style.css"), join(P.out, "style.css"));

  console.log(`Built home, about, ${projects.length} projects, ${Object.keys(redirects).length} redirects in ${Math.round(performance.now() - t0)} ms → ${relative(root, P.out)}/`);
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
