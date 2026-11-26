// Everything about the site that isn't page content lives here.

export default {
  origin: "https://jrekier.github.io",
  base: "", // the site lives at the root of the domain

  // the home page: "journey" (the 3D journey through my research, from journey/) or "classic" (the page from templates.mjs)
  home: "journey",

  name: "Jérémy Rekier",
  description: "Research associate at UCLouvain and guest researcher at the Royal Observatory of Belgium, working on the dynamics of fluids inside rotating planets, moons and stars.",
  affiliation: { label: "UCLouvain", href: "https://uclouvain.be/en/" },
  lang: "en",

  // header navigation (full URLs for the other sites)
  nav: [
    { label: "Blog", href: "https://jrekier.github.io/bit-blog/" },
    // { label: "Notes", href: "/quartz" }, // (the Quartz notes are gone)
    { label: "About", href: "/about/" },
    { label: "CV", href: "/cv.pdf" }, // (src/static/cv.pdf: the public version, without personal contact details)
  ],

  // your email, shown first among the links below. The page puts the address together when it loads, so it
  // never appears whole in the HTML, where address harvesters look for it. (Work address only: never the Gmail.)
  email: { user: "jeremy.rekier", domain: "uclouvain.be" },

  // shown under your name and in the footer, in this order
  links: [
    // { label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" },          // TODO: your ORCID iD
    // { label: "Scholar", href: "https://scholar.google.com/citations?user=XXXX" }, // TODO: your Scholar profile
    { label: "ADS", href: "https://ui.adsabs.harvard.edu/search/q=author%3A%22Rekier%2C%20J.%22&sort=date%20desc" },
    { label: "GitHub", href: "https://github.com/jrekier" },
    { label: "Mastodon", href: "https://mathstodon.xyz/@jrekier" },
    { label: "Bluesky", href: "https://bsky.app/profile/jrekier.bsky.social" },
  ],

  // a CV linked from the about page: put the PDF in src/static/ and set e.g. "/cv.pdf"
  cv: "/cv.pdf",

  paths: {
    content: "src", // index.md, about.md, projects/*.md
    images: "src/assets/images", // served at /images/ (PNG/JPEG converted to WebP)
    static: "src/static", // copied as-is to the root (favicons, .nojekyll, cv.pdf)
    out: "_site",
    cache: ".cache",
  },

  // [@key] citations and the publications list come from your Zotero export
  citations: {
    files: ["src/bibliography.json"], // Better CSL JSON, "Keep updated"
    style: "geophysics.csl",
    heading: "References",
  },
  publications: {
    file: "src/data/publications.yml", // exceptions; the list itself comes from Zotero
    author: "Rekier", // every item with this author family name is listed
    highlight: ["Rekier, J.", "J. Rekier"], // shown in bold in author lists
    fullList: "https://ui.adsabs.harvard.edu/search/q=author%3A%22Rekier%2C%20J.%22&sort=date%20desc",
  },

  // old addresses -> new ones (e.g. blog posts that moved to bit-blog)
  redirects: "src/data/redirects.json",

  images: { maxWidth: 1600, quality: 80 },
};
