// Everything about the site that isn't page content lives here.

export default {
  origin: "https://jrekier.github.io",
  base: "", // the site lives at the root of the domain

  title: "Globally Warm",
  name: "Jérémy Rekier",
  description: "I am a scientist working on the physics of the Earth's core and magnetic field at the Royal Observatory of Belgium.",
  lang: "en",

  // header navigation (full URLs for the other sites)
  nav: [
    { label: "Blog", href: "https://jrekier.github.io/bit-blog/" },
    { label: "Notes", href: "/quartz" },
    { label: "About", href: "/about/" },
  ],

  // shown under the photo and in the footer; icons live in src/assets/images/socialmedia/
  social: [
    { label: "Mastodon", href: "https://mathstodon.xyz/@jrekier", icon: "socialmedia/051-mastodon.svg" },
    { label: "Bluesky", href: "https://bsky.app/profile/jrekier.bsky.social", icon: "socialmedia/052-bluesky.svg" },
    { label: "GitHub", href: "https://github.com/jrekier", icon: "socialmedia/038-github.svg" },
  ],

  paths: {
    content: "src", // index.md, about.md, projects/*.md
    images: "src/assets/images", // served at /images/ (PNG/JPEG converted to WebP)
    static: "src/static", // copied as-is to the root (favicons, .nojekyll)
    out: "_site",
    cache: ".cache",
  },

  // [@key] citations and the publications list come from your Zotero export
  citations: {
    files: ["src/bibliography.json"], // Better CSL JSON, "Keep updated"
    style: "geophysics.csl",
    heading: "References",
  },
  publications: "src/data/publications.yml",

  // old addresses -> new ones (e.g. blog posts that moved to bit-blog)
  redirects: "src/data/redirects.json",

  images: { maxWidth: 1600, quality: 80 },
};
