// Copied from the bit-blog engine (engine/dev.mjs).
#!/usr/bin/env node
// Local preview: builds the site, serves it, and rebuilds + reloads the
// browser whenever you save a post, an image, or a file of the engine.
//
//   node engine/dev.mjs          then open the printed address

import { createServer } from "node:http";
import { watch, existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join, extname, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import config from "./config.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, config.paths.out);
const base = config.base.replace(/\/$/, "");
const PORT = Number(process.env.PORT) || 4321;

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".xml": "application/xml", ".png": "image/png", ".webp": "image/webp", ".gif": "image/gif", ".svg": "image/svg+xml", ".jpg": "image/jpeg" };

const clients = new Set();
const RELOAD_JS = `new EventSource("/__events").onmessage = () => location.reload();`;

// --- build on demand ------------------------------------------------------

let building = false, again = false;
function build() {
  if (building) return void (again = true);
  building = true;
  const child = spawn(process.execPath, ["--no-deprecation", join(root, "engine/build.mjs"), "--dev"], { stdio: "inherit" });
  child.on("exit", (code) => {
    building = false;
    if (again) return (again = false), build();
    if (code === 0) for (const res of clients) res.write("data: reload\n\n");
  });
}

const watched = [config.paths.content, "engine", "geophysics.csl"];
let timer;
for (const p of watched) {
  const full = join(root, p);
  if (!existsSync(full)) continue;
  watch(full, { recursive: statSync(full).isDirectory() }, () => {
    clearTimeout(timer);
    timer = setTimeout(build, 100);
  });
}

// --- serve ----------------------------------------------------------------

createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  if (url.pathname === "/__events") {
    res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache" });
    clients.add(res);
    return req.on("close", () => clients.delete(res));
  }
  if (url.pathname === "/__reload.js") return res.writeHead(200, { "content-type": "text/javascript" }).end(RELOAD_JS);
  if (url.pathname === "/" && base) return res.writeHead(302, { location: `${base}/` }).end();

  let path = decodeURIComponent(url.pathname);
  if (base && path.startsWith(base)) path = path.slice(base.length);
  let file = join(out, path);
  if (!file.startsWith(out)) return res.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) {
    res.writeHead(404, { "content-type": TYPES[".html"] });
    return res.end(await readFile(join(out, "404.html")).catch(() => "Not found"));
  }
  res.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream", "cache-control": "no-store" });
  res.end(await readFile(file));
}).listen(PORT, () => console.log(`\n  Preview: http://localhost:${PORT}${base}/\n`));

build();
