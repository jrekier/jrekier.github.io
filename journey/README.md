# The journey page: handover (25 Nov 2026)

A 3D scroll journey through Jérémy Rekier's research (three.js), the home page of jrekier.github.io. This
folder is kept outside the site's `src/`; the site's engine builds the home page from it (see the end of this file).

## What's current

**The working version is `journey-kore`** (landing page + journey, with the flows computed with Kore); `journey-home` is
the same page before Kore. The others are earlier variants, kept
on purpose; don't delete them.

| Variant | Code | Page | Notes |
|---|---|---|---|
| **journey-home** (current) | `src/journey-home.js` | `harness/journey-home/index.html` + `harness/home.css`, `harness/lean.css` | welcome page with photo and "launch" button; then the journey |
| journey-kore | `src/journey-kore.js` | `harness/journey-kore/index.html` | copy of journey-home; the Earth's, Mercury's (three states: neutral core, weakly then strongly stratified layer, new stops `mercury-layer`, `mercury-strong`), Jupiter's and Saturn's cut faces show flows computed with Kore; Enceladus's ocean (libration flow; the resonance chart simplified, over computed flows at 60 frequencies); new stops `ganymede-ocean` (Ganymede cut open: the obliquity-tide flow in its ocean) and `ganymede-field` (close up, with field lines of the induced magnetic field above the ice) (`kore/`, `textures/kore-*`) instead of traced rays |
| journey-lean | `src/journey-lean.js` | `harness/journey-lean/` | streamlined journey, Ganymede ocean-probes stop |
| journey-trips | `src/journey-trips.js` | `harness/journey-trips/` + `harness/trips.css` | side-trips layout (rejected by the author) |
| journey (original) | `src/journey.js` | `harness/journey/` | first long version |

Shared modules: `src/planet.js` (layered planets with cut-aways, waves, fields), `src/rays.js` (wave ray
tracers: straight inertial shear layers, and curved gravito-inertial rays), `src/bepi.js`, `src/juice.js`.
`harness/js/*.js` are the built bundles; `harness/style.css` the base styles.

## Run it

```
npm install
npx esbuild src/journey-home.js --bundle --minify --format=esm --target=es2020 --outfile=harness/js/journey-home.js
cd harness && python3 -m http.server 8770      # then open http://127.0.0.1:8770/journey-home/
```
`harness/textures` is a link to `../textures`. Pages use absolute paths (`/style.css`, `/textures/…`),
so serve `harness/` as the root.

`tests/` holds the Playwright scripts used to check the page (headless Chrome, swiftshader): frame
captures of particular stops and transitions, card heights, wheel stepping. They expect the server on port
8770 and write PNGs to a `shots/` folder; adjust paths. Headless timing is slow and unreliable for anything
time-based. In the page, `window.__probe()` returns the scroll state (shown, goal, pace, …).

## The story (journey-home)

Welcome → Earth (core, inertial waves) → **BepiColombo** (Mercury: flyby, mapping orbit coverage,
gravity and magnetic field mapping) → **JUICE** (flight, top-view tour of the Jovian system, Ganymede
mapping orbit, the three icy moons in a row, cut open: oceans) → **Beyond** (Enceladus: Cassini's
discovery of the jets in 2005 and the heat puzzle; its ocean; resonance; going back (L4 mission);
Jupiter and Saturn side by side, cut open, with gravito-inertial waves in their stratified dilute cores)
→ resonance locking ("Moons pushed by waves": Saturn slides away and the camera pulls back over Jupiter's moons on
their orbits, to scale; a blue ring, the orbit in tune with one of Jupiter's modes, drifts out, catches Callisto and
carries it out) → "Around other stars" (the same view: once there, Jupiter fades into a hypothetical star; central bodies
stay whole in orbital views, so Jupiter's cut closes as the camera pulls back at `locking`; the moons become planets b–e on the same orbits, in
stellar radii, the inner three still 4:2:1; the in-tune ring comes in and pulls planet b inward; mean-motion resonances
and resonance locking, hedged; `morphT` in the JS) → a fade back to the Sun ("Our star": no resonance locking in the Solar System;
the Sun arrives whole, then opens on a mode computed with Kore that is coupled to its radiative interior
(Mukhopadhyay et al. 2026 set-up, kore/README.md); its modes found
2018-2021 and used to probe its deep layers; Triana et al. 2022) → end ("Rotating fluids": the Sun, open, a little
further back; Kore; credits). The fade from `exo` to `sun` is listed in `FADES` in the JS. The Solar System orbit map (`xMap`) is no longer used.

Stops are `<section data-stop="…">` in the HTML; their camera definitions are `STOPS` in the JS, the
per-stop effects `FX`, the chapter map `PART`/`ACT`.

## Rules from the author (keep these)

- **Plain, clear language.** No whimsy, no personification ("Jupiter does it for us" is the kind of
  thing to avoid). Scientific accuracy first; say what is illustrative.
- **Never put the email address back** on the page.
- The old posts and reading notes in the site's `archive/` were removed on purpose: keep them private,
  never publish them.
- **Make copies; don't delete working features.** Change one thing at a time and check it with frame
  captures. Don't reinterpret requests.
- Don't commit, push or merge unless asked. Commits are made as the author.
- Smooth, comprehensible transitions: no whiplash.

## Science notes behind recent choices

- Giant planets: dilute stably stratified cores (Saturn to ~0.6 R, Mankovich & Fuller 2021, ring
  seismology; Jupiter ~0.45 R, Juno, less certain). Illustrative N(r) ≈ 2Ω in the core, 0 in the
  envelope; rays at ω = 1.5Ω from the critical latitude. In the convective envelope (N = 0) rays are
  straight: density variation enters only lower-order terms. Jupiter is shown moved next to Saturn.
- Enceladus: ~500 km; south-polar heat ~15.8 GW (Howett et al. 2011) vs ≲1.1 GW sustainable tidal
  heating (Meyer & Wisdom 2007) + ~0.3 GW radiogenic. Map: Cassini PIA14937 (`tools/enceladus.py`).
- Titan migration ~11 cm/yr (Lainey et al. 2020); resonance locking (Fuller et al. 2016).
- Callisto's map is an artist's impression; its interior follows the cautious model.

## Kore fields (journey-kore)

`planet.js` accepts `waves` entries with a `texture`: a meridional field baked by `tools/kore_texture.py` (R: log amplitude of
the vorticity ×√ρ; G, B: the complex ratio that gives its exact oscillation; A: the fluid), animated in the shader.
Entries without `texture` draw ribbons as before. Runs and how to redo them: `kore/README.md`.

## Text pass (25 Nov 2026)

All card texts were streamlined in one pass, in the author's voice (his project pages: first person, "our team", short
declarative sentences), adding his published results where they belong (spin-over = Free Core Nutation; Mercury's
induced field after Seuren et al. 2023; Enceladus's inertial modes amplify dissipation, Rekier et al. 2019), removing
repeats (Mercury's field offset, the 1:2:4 resonance) and updating BepiColombo (in orbit since 21 November 2026). The
page before the pass is kept as `harness/journey-kore/index-before-textpass.html`.
Then, card by card with the author: placeholder links to the project pages removed; `mercury-strong` merged into
`mercury-layer` (the flow alternates between the two stratifications, `mercAltT`); `ocean-worlds` merged into
`ocean-depth` (the moons arrive whole and open after a moment, `depthT`). The old stops' FX and camera entries remain
in the JS, unused.

## Open items

- A report of "weird artifacts" on the welcome page that I couldn't reproduce headless (needs a real GPU
  and a screenshot from the author).
- Tune the long flight from Saturn to the end; phone checks; possibly Mercury's measured gravity map.
- Wired into the site (26 Nov 2026): with `home: "journey"` in `engine/config.mjs`, `engine/build.mjs`
  (`buildJourneyHome`) makes the home page from `harness/journey-kore/index.html`, with the site's navigation and
  profile links put in, and builds its script and copies its styles and textures under `/journey/` (`"classic"` brings
  back the old home page).

## Textures

`textures/` are the maps the pages load (WebP, credits in `textures/README.md`) and `juice-tour.json`
(JUICE's planned tour, ESA SPICE crema 5.2, and the moons from JPL Horizons). `textures-src/` holds the
originals; `tools/` the scripts that make `textures/` (`textures.py`, `galileans.py`, `juice_tour.py`,
`enceladus.py`).

## Scrolling (26 Nov 2026)

On wide screens the page moves from stop to stop. One trackpad swipe (momentum included), one mouse-wheel click or one arrow/Page/Space key moves one stop, and the picture plays the leg at its own pace. The page never runs more than two stops ahead of the picture. Touch and the scroll bar scroll freely, then the page settles on the nearest stop. Phones keep free scrolling. The version before this change is kept in `src/journey-kore.before-snap.js`.
