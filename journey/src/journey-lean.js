// The journey page: start at the Earth and look inside it, apply the same ideas
// to Mercury, out to Jupiter and Saturn's moon Enceladus, and back to the Sun.
// Bundled with the parts of three.js it uses by esbuild at build time.
//
// The page is a column of text panels (<section data-stop="…">) over a fixed
// canvas. Each panel names a stop; as a panel reaches the middle of the screen
// the camera arrives at that stop's viewpoint (STOPS) and the effects listed for
// it are switched on (FX). Positions are artistic, not to scale.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Points, Sprite, Line, LineSegments, SphereGeometry, RingGeometry,
  CylinderGeometry, BufferGeometry, Float32BufferAttribute, MeshPhongMaterial, MeshBasicMaterial, MeshLambertMaterial, PointsMaterial,
  SpriteMaterial, LineBasicMaterial, LineDashedMaterial, TextureLoader, Texture, ShaderMaterial, CanvasTexture, Vector3, Color, PointLight, AmbientLight,
  SRGBColorSpace, AdditiveBlending, DoubleSide, MathUtils, Euler, Quaternion, Matrix4, RepeatWrapping, Vector2,
} from "three";
import { createPlanet } from "./planet.js";
import { createJuice, JUICE_SIZE } from "./juice.js";
import { createBepi, BEPI_SIZE } from "./bepi.js";

const v = (x, y, z) => new Vector3(x, y, z);
const UP = v(0, 1, 0);

// --- where things are --------------------------------------------------------
// Everything is to scale: sizes and distances in units of half an Earth radius
// (the Earth's radius is 2). Exceptions are drawn enlarged, and the captions say so.
const KM = 2 / 6371;
const AU = 149.6e6 * KM;
const METRE = KM / 1000;
const turn = (vec, deg) => vec.clone().applyAxisAngle(UP, (deg * Math.PI) / 180);
const EARTH = { center: v(0, 0, 0), radius: 2 };
const SUN_DIR = v(-40, 0, 62).normalize(); // the Sun as seen from the Earth
// the Moon: true distance and size; where on its orbit is chosen for the opening view (see below)
const MOON = { center: new Vector3(), radius: 1737.4 * KM };
const SUN = { center: SUN_DIR.clone().multiplyScalar(AU), radius: 695700 * KM };
const OUT = SUN_DIR.clone().negate(); // from the Sun, towards the Earth
const JUPITER = { center: SUN.center.clone().addScaledVector(turn(OUT, 70), 778.5e6 * KM), radius: 69911 * KM };
const SATURN = { center: SUN.center.clone().addScaledVector(turn(OUT, 110), 1433.5e6 * KM), radius: 58232 * KM };
const SATURN_TILT = new Euler(0.25, 0, (-26.7 * Math.PI) / 180);
// the Galilean moons: Io, Europa and Ganymede orbit in a 1:2:4 resonance (Callisto is outside it).
// Orbits, periods and sizes are real; in the overview the moons are drawn ten times larger, to be seen.
const MOON_ENLARGE = 16;
const BEPI_ENLARGE = 30; // BepiColombo is drawn 30 times larger: shorter zooms to and from it
const JUICE_ENLARGE = 30; // and so is JUICE
const GALILEANS = [
  { name: "io", orbit: 421700 * KM, radius: 1821.6 * KM, period: 1.769 },
  { name: "europa", orbit: 671034 * KM, radius: 1560.8 * KM, period: 3.551 },
  { name: "ganymede", orbit: 1070412 * KM, radius: 2634.1 * KM, period: 7.155 },
  { name: "callisto", orbit: 1882709 * KM, radius: 2410.3 * KM, period: 16.689 },
];
const SECONDS_PER_IO_ORBIT = 6;
// Enceladus orbits in Saturn's ring plane; it is placed on the side facing the Sun
const ENCELADUS = (() => {
  const normal = UP.clone().applyEuler(SATURN_TILT);
  const toSun = SUN.center.clone().sub(SATURN.center).normalize();
  const dir = toSun.addScaledVector(normal, -toSun.dot(normal)).normalize();
  return { center: SATURN.center.clone().addScaledVector(dir, 238042 * KM), radius: 252.1 * KM };
})();

// Mercury's orbit around the Sun. Perihelion points towards the Earth,
// and Mercury rests there except during the 3:2 step.
const ORBIT = { a: 57.91e6 * KM, e: 0.2056, secondsPerOrbit: 9 };
const PERI = EARTH.center.clone().sub(SUN.center).setY(0).normalize(); // towards perihelion
const ALONG = new Vector3().crossVectors(UP, PERI).normalize(); // direction of motion at perihelion
const MERCURY = { radius: 2439.7 * KM, enlarge: 1200, home: SUN.center.clone().addScaledVector(PERI, ORBIT.a * (1 - ORBIT.e)) };
// spin angle that lines Mercury's long (local x) axis up with the Sun–perihelion direction
// (rotating by θ about y takes local x to (cos θ, 0, −sin θ))
const PERIHELION_SPIN = Math.atan2(-PERI.z, PERI.x);

function orbitPosition(meanAnomaly, target = new Vector3()) {
  let E = meanAnomaly; // solve Kepler's equation M = E − e sin E
  for (let i = 0; i < 8; i++) E -= (E - ORBIT.e * Math.sin(E) - meanAnomaly) / (1 - ORBIT.e * Math.cos(E));
  const x = ORBIT.a * (Math.cos(E) - ORBIT.e);
  const y = ORBIT.a * Math.sqrt(1 - ORBIT.e ** 2) * Math.sin(E);
  return target.copy(SUN.center).addScaledVector(PERI, x).addScaledVector(ALONG, y);
}

// --- the camera's viewpoint at each stop ----------------------------------------
// `shift` moves the subject sideways on screen (world units), away from its
// caption card; the side is chosen from the card's position on the page.
// `narrowBack` (optional) moves the camera further back on phones (default 1.15×).
const fromMercury = (towardSun, along, up) => MERCURY.home.clone().addScaledVector(PERI, -towardSun).addScaledVector(ALONG, along).addScaledVector(UP, up);
const ORBIT_CENTRE = SUN.center.clone().addScaledVector(PERI, -ORBIT.a * ORBIT.e); // centre of the ellipse
// viewpoints that move with the scene, filled in once it exists
const views = {};
const Y_AXIS = new Vector3(0, 1, 0);
let KEEP = () => ({});

// Viewpoints near Enceladus, composed in a frame that turns with the direction to Saturn
// (offsets were first designed for an Enceladus of radius 0.6, with Saturn along (9, 2, -8))
const ENC_SCALE = ENCELADUS.radius / 0.6;
function nearEnceladus(x, y, z) {
  const basis = (u) => {
    const side = new Vector3().crossVectors(u, UP).normalize();
    return [u, new Vector3().crossVectors(side, u), side];
  };
  const [u0, up0, side0] = basis(v(9, 2, -8).normalize());
  const [u, up, side] = basis(SATURN.center.clone().sub(ENCELADUS.center).normalize());
  const o = v(x, y, z);
  return ENCELADUS.center.clone()
    .addScaledVector(u, o.dot(u0) * ENC_SCALE)
    .addScaledVector(up, o.dot(up0) * ENC_SCALE)
    .addScaledVector(side, o.dot(side0) * ENC_SCALE);
}

const STOPS = {
  earth: { pos: v(1.5, 1.2, 9.5), look: EARTH.center, shift: 2.4 },
  wobble: { pos: v(0.8, 8.5, 9.5), look: v(0, 1.2, 0), shift: 2.8 },
  cut: { pos: v(1.2, 0.6, 8), look: EARTH.center, shift: 2.2 },
  waves: { pos: v(0.6, 0.3, 6.6), look: EARTH.center, shift: 1.8 },
  field: { pos: v(3, 2.6, 14.5), look: EARTH.center, shift: 3.8 },
  core: { pos: v(-1.2, 2.2, 6.2), look: EARTH.center, shift: 1.7 },
  mercury: { pos: fromMercury(3.6, -1.5, 0.9), look: MERCURY.home, shift: 1.1, narrowBack: 0.85 },
  "mercury-orbit": { pos: ORBIT_CENTRE.clone().add(v(0, 100 * (ORBIT.a / 26), 0)).addScaledVector(PERI, 22 * (ORBIT.a / 26)), look: ORBIT_CENTRE, shift: 20 * (ORBIT.a / 26) },
  sun: { pos: SUN.center.clone().addScaledVector(v(24, 6, -20), SUN.radius / 9), look: SUN.center, shift: (7 * SUN.radius) / 9 },
  jupiter: (() => {
    // from the sunlit side, above the orbits
    const toSun = SUN.center.clone().sub(JUPITER.center).normalize();
    const side = new Vector3().crossVectors(toSun, UP).normalize();
    const pos = JUPITER.center.clone().addScaledVector(toSun, 760).addScaledVector(UP, 430).addScaledVector(side, -170);
    const base = { pos, look: JUPITER.center };
    // (once JUICE's real tour has arrived, the camera follows how far out its loops reach)
    return { pos, look: JUPITER.center, shift: 230, narrowBack: 1.3, follow: () => (views.jupiter ? views.jupiter(base) : base) };
  })(),
  // riding along with JUICE in its 500 km orbit around Ganymede (placed each frame)
  "juice-cruise": { follow: () => views.juiceRide(), shift: 9 * METRE * JUICE_ENLARGE, narrowBack: 1.2 },
  juice: { follow: () => (views.juiceDown ? views.juiceDown() : views.juice()), shift: 9 * METRE * JUICE_ENLARGE, narrowBack: 1.25 },
  // the whole of Ganymede, JUICE going round it, the map building up
  "juice-map": { follow: () => views.juiceMap(), shift: 0.5 * 2634 * KM, narrowBack: 1.2 },
  "juice-gravity": { follow: () => views.juiceMap(), shift: 0.5 * 2634 * KM, narrowBack: 1.2 },
  "juice-field": { follow: () => views.juiceField(), shift: 1.2 * 2634 * KM, narrowBack: 1.2 },
  // Ganymede whole, JUICE going round it in its mapping orbit (a cameo: no arrival, no descent)
  ganymede: { follow: () => views.juiceMap(), shift: 0.5 * 2634 * KM, narrowBack: 1.2 },
  // JUICE's tour of the Jupiter system, from above: its real path, drawn as it goes
  "juice-tour": { follow: () => views.tourTop(), narrowBack: 1.35 },
  // the icy Galileans in a row, compared
  "ocean-worlds": { follow: () => views.row(), shift: 0, narrowBack: 1.45 },
  "ocean-depth": { follow: () => views.row(), shift: 0, narrowBack: 1.45 },
  // Ganymede alone, close up, its interior cut open: how the ocean is probed
  "ocean-probes": { follow: () => views.probe(), shift: 0.55 * 2634 * KM, narrowBack: 1.3 },
  // riding along with BepiColombo from the Earth to Mercury (placed each frame)
  launch: { follow: () => views.launch, shift: 4.6, narrowBack: 1.15 },
  bepi: { follow: () => views.bepi(), shift: 9 * METRE * BEPI_ENLARGE, narrowBack: 1.2 },
  arrival: { follow: () => views.arrival, shift: 3, narrowBack: 1.25 },
  enceladus: { pos: nearEnceladus(-3, 0.7, 4), look: nearEnceladus(2.5, 0.4, -2.5), shift: 0 },
  "enceladus-ocean": { pos: nearEnceladus(1.4, 0.45, 2.85), look: ENCELADUS.center, shift: 1.1 * ENC_SCALE, narrowBack: 0.95 },
  "enceladus-resonance": { pos: nearEnceladus(0.9, 0.4, 3.05), look: ENCELADUS.center, shift: 1.1 * ENC_SCALE, narrowBack: 0.95 },
  // the whole map: far above the Sun, out to Saturn's orbit
  end: (() => {
    const away = turn(OUT, 90 + 180);
    return { pos: SUN.center.clone().addScaledVector(UP, 1.15e6).addScaledVector(away, 0.55e6), look: SUN.center.clone().addScaledVector(turn(OUT, 90), 1.2e5), shift: 2.4e5 };
  })(),
};

// In the opening view, the Moon sits in the open sky up and to the left of the Earth
{
  const C = STOPS.earth.pos, f = STOPS.earth.look.clone().sub(C).normalize();
  const right = new Vector3().crossVectors(f, UP).normalize(), up = new Vector3().crossVectors(right, f);
  const lookAt = STOPS.earth.look.clone().addScaledVector(right, -STOPS.earth.shift); // as framed with the caption on the left
  const fwd = lookAt.sub(C).normalize();
  const w = fwd.addScaledVector(up, 0.3).addScaledVector(right, -0.12).normalize();
  // the point along w at the Moon's distance from the Earth
  const b = C.dot(w), d = 384400 * KM;
  MOON.center.copy(C).addScaledVector(w, -b + Math.sqrt(b * b - C.lengthSq() + d * d));
}

// --- what is switched on at each stop ------------------------------------------
const FX = {
  wobble: { eWobble: 1 },
  cut: { eCut: 1 },
  waves: { eCut: 1, eWaves: 1 },
  field: { eCut: 1, eField: 1 },
  core: { eCore: 1 },
  mercury: { mCut: 1, mWaves: 1, mField: 1, mLibration: 1 }, // everything at once: the ideas are familiar by now
  "mercury-orbit": { mOrbit: 1 },
  jupiter: { jOrbits: 1 },
  juice: { jJuice: 1 },
  "juice-map": { gMap: 1 },
  ganymede: { gMap: 1 },
  "juice-tour": { jOrbits: 1 },
  "juice-gravity": { gMap: 1, gGrav: 1 },
  "juice-field": { gMap: 1, gField: 1 },
  "ocean-worlds": { gRow: 1 },
  "ocean-depth": { gRow: 1, gDepth: 1 },
  "ocean-probes": { gRow: 1, gDepth: 1, gProbe: 1 },
  arrival: { bOrbit: 1 },
  enceladus: { nPlume: 1 },
  "enceladus-ocean": { nPlume: 1, nCut: 1, nWaves: 1 },
  "enceladus-resonance": { nPlume: 1, nCut: 1, nWaves: 1, nHeat: 1 },
  end: { xMap: 1 },
};
const FX_KEYS = ["eWobble", "eCut", "eWaves", "eField", "eCore", "mCut", "mWaves", "mField", "mLibration", "mOrbit", "nCut", "nWaves", "nHeat", "nPlume", "jOrbits", "xMap", "jJuice", "bOrbit", "gMap", "gGrav", "gField", "gRow", "gDepth", "gProbe"];

// Radii relative to each planet's
const EARTH_LAYERS = [
  { top: 1221 / 6371, low: "#fff2c4", high: "#facc14" }, // inner core
  { top: 3480 / 6371, low: "#fa7317", high: "#fa913d" }, // liquid outer core
  { top: 0.985, low: "#9e1c1c", high: "#d94d1a" }, // mantle
  { top: 1, low: "#575450", high: "#575450" }, // crust (drawn thicker than it is)
];
// Enceladus (252 km): a porous rocky core, a global ocean some 40 km deep, ~20 km of ice on average
const ENCELADUS_LAYERS = [
  { top: 0.77, low: "#3f342b", high: "#6b5a4a" }, // rocky core
  { top: 0.92, low: "#0c3a66", high: "#1f6fae" }, // ocean
  { top: 1, low: "#b9d3e6", high: "#eaf4fb" }, // ice shell
];
// The icy Galilean moons, as representative models (illustrative where unknown): ice shell, ocean,
// high-pressure ice (Ganymede), rock, iron core. Radii as fractions of the moon's radius.
const GALILEAN_LAYERS = {
  // Europa, 1561 km: ice ~25 km, ocean ~100 km, rock, iron core ~600 km
  europa: [
    { top: 600 / 1561, low: "#7a3f22", high: "#b0602f" },
    { top: 1436 / 1561, low: "#3f342b", high: "#6b5a4a" },
    { top: 1536 / 1561, low: "#1258a8", high: "#3d95e6" },
    { top: 1, low: "#b9d3e6", high: "#eaf4fb" },
  ],
  // Ganymede, 2634 km: ice ~150 km, ocean ~100 km, high-pressure ice ~600 km, rock, iron core ~700 km
  ganymede: [
    { top: 700 / 2634, low: "#7a3f22", high: "#b0602f" },
    { top: 1780 / 2634, low: "#3f342b", high: "#6b5a4a" },
    { top: 2384 / 2634, low: "#6b7180", high: "#9aa1ae" },
    { top: 2484 / 2634, low: "#1258a8", high: "#3d95e6" },
    { top: 1, low: "#b9d3e6", high: "#eaf4fb" },
  ],
  // Callisto, 2410 km, the most debated: a cautious middle between partial differentiation (Kuskov & Kronrod:
  // ice I 135-150 km, water 120-180 km, ice-rock mantle, small rock-iron core) and the 2025-26 re-analyses
  // (Cochrane et al.: ice and ocean each tens of km; Petricca et al.: thin shell, ~300 km ocean, large core).
  // Ice ~100 km, ocean ~125 km, a mixed ice-rock mantle, a small rocky core ~600 km
  callisto: [
    { top: 600 / 2410, low: "#5a3f2c", high: "#80603f" },
    { top: 2185 / 2410, low: "#4a4640", high: "#6e685f" },
    { top: 2310 / 2410, low: "#1258a8", high: "#3d95e6" },
    { top: 1, low: "#b9d3e6", high: "#eaf4fb" },
  ],
};
const MERCURY_LAYERS = [
  { top: 0.33, low: "#fff2c4", high: "#facc14" }, // solid inner core (size uncertain)
  { top: 0.77, low: "#fa7317", high: "#fa913d" }, // liquid core
  { top: 2020 / 2440, low: "#b45309", high: "#c2560f" }, // possible stably stratified layer at the top of the core
  { top: 0.985, low: "#5c4a3d", high: "#7d6a5a" }, // mantle
  { top: 1, low: "#8a8580", high: "#8a8580" }, // crust
];

// --------------------------------------------------------------------------------
const canvas = document.querySelector(".journey-canvas");
const sections = [...document.querySelectorAll(".journey-step[data-stop]")];
if (canvas && sections.length && webglAvailable()) start();
else document.documentElement.classList.add("no-webgl");

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function glowTexture(inner, outer) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, inner);
  grad.addColorStop(0.35, outer);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

// Textures arrive as the reader approaches each body, in two steps: a small preview (512 px,
// a few kB) first, then the full map. Until a preview arrives a body shows a plain placeholder.
// Requested by their original names; served as WebP. "name#tag" gives another texture object
// of the same file (to tile it differently, say).
function textureQueue(base) {
  const loader = new TextureLoader();
  const entries = new Map(), byGroup = new Map(), started = new Map();
  const groupOf = (name) =>
    /^(earth|moon)/.test(name) ? "earth"
    : /^mercury/.test(name) ? "mercury"
    : /^sun/.test(name) ? "sun"
    : /^(jupiter|io|europa|ganymede|callisto)/.test(name) ? "jupiter"
    : "saturn";
  const isData = (name) => /normal|spec|bump/.test(name); // no preview for these: they wait for the full map
  const placeholder = (normal) => {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    const g = c.getContext("2d");
    g.fillStyle = normal ? "rgb(128,128,255)" : "rgb(46,46,50)";
    g.fillRect(0, 0, 1, 1);
    return c;
  };
  function get(name) {
    name = name.replace(/\.(jpg|png)(#|$)/, ".webp$2");
    if (entries.has(name)) return entries.get(name).t;
    const t = new Texture(placeholder(/normal/.test(name)));
    t.needsUpdate = true;
    if (!isData(name) && !/clouds/.test(name)) t.colorSpace = SRGBColorSpace;
    t.anisotropy = queue.anisotropy;
    const e = { t, file: name.split("#")[0], level: 0, preview: !isData(name) };
    entries.set(name, e);
    const g = groupOf(name);
    if (!byGroup.has(g)) byGroup.set(g, []);
    byGroup.get(g).push(e);
    return t;
  }
  /** level 1: previews; level 2: full maps */
  function load(group, level) {
    const key = group + level;
    if (!started.has(key)) {
      const todo = (byGroup.get(group) ?? []).filter((e) => e.level < level && (level === 2 || e.preview));
      started.set(key, Promise.all(todo.map((e) => new Promise((done) =>
        loader.load(base + (level === 1 ? e.file.replace(".webp", ".lo.webp") : e.file), (loaded) => {
          if (e.level < level) { // (a full map that arrived first wins)
            e.t.dispose(); // the storage was sized for the old image: start afresh
            e.t.image = loaded.image;
            e.t.needsUpdate = true;
            e.level = level;
          }
          done();
        }, undefined, done)))));
    }
    return started.get(key);
  }
  const queue = { get, load, anisotropy: 8, loader: { load: (url) => get(url.slice(base.length)) } };
  return queue;
}

function start() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let calm = 1; // 1 when the camera is settled, 0 while it moves (traces only show when it's calm)
  // things that depend on where the camera is this frame (traces: how big is the craft on screen?),
  // drawn once it has moved (a craft can cover thousands of units in a frame: last frame's camera won't do)
  const afterCamera = [];
  let mtmGone = false; const mtmAt = new Vector3();

  // reversed depth: keeps precision from a spacecraft metres away to planets millions of kilometres off
  const renderer = new WebGLRenderer({ canvas, antialias: true, reversedDepthBuffer: true });
  // full resolution (up to 2× for sharp screens); lowered only if frames stay slow once loading is over
  const maxRatio = Math.min(devicePixelRatio, 2);
  let pixelRatio = maxRatio;
  renderer.setPixelRatio(pixelRatio);
  const textures = canvas.dataset.textures;
  const queue = textureQueue(textures);
  const tex = queue.get;
  const loader = queue.loader; // for createPlanet
  queue.anisotropy = renderer.capabilities.getMaxAnisotropy(); // crisp surfaces seen at a slant
  renderer.localClippingEnabled = true;
  renderer.setClearColor(0x04050a);

  const scene = new Scene();
  const camera = new PerspectiveCamera(45, 1, 0.1, 1e8); // the near plane follows the nearest body

  // light: the Sun, plus a little ambient so night sides aren't pitch black
  scene.add(new AmbientLight(0xffffff, 0.22));
  const sunlight = new PointLight(0xfff4e0, 3, 0, 0);
  sunlight.position.copy(SUN.center);
  scene.add(sunlight);

  // the warp: stars stretched into streaks along the flight (drawn around the camera, like the stars)
  const STREAKS = 600;
  const streakBase = [], streakLength = [];
  for (let i = 0; i < STREAKS; i++) {
    streakBase.push(v(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(300 + Math.random() * 500));
    streakLength.push(0.3 + Math.random() * 0.7);
  }
  const streakGeometry = new BufferGeometry();
  streakGeometry.setAttribute("position", new Float32BufferAttribute(new Float32Array(STREAKS * 6), 3));
  {
    const c = new Float32Array(STREAKS * 6);
    for (let i = 0; i < STREAKS; i++) c.set([0.85, 0.92, 1, 0, 0, 0], i * 6); // bright head, dark tail
    streakGeometry.setAttribute("color", new Float32BufferAttribute(c, 3));
  }
  // (opaque pass, drawn first like the stars, so the bodies cover them; faded by colour)
  const streaks = new LineSegments(streakGeometry, new LineBasicMaterial({ vertexColors: true, blending: AdditiveBlending, depthWrite: false }));
  streaks.renderOrder = -1;
  streaks.frustumCulled = false;
  scene.add(streaks);
  function drawWarp() {
    streaks.visible = warp > 0.01;
    stars.material.color.setScalar(1 - 0.35 * warp);
    if (!streaks.visible) return;
    streaks.position.copy(camera.position);
    streaks.scale.copy(stars.scale);
    streaks.material.color.setScalar(0.6 * warp);
    const p = streakGeometry.attributes.position;
    for (let i = 0; i < STREAKS; i++) {
      const b = streakBase[i], len = 220 * streakLength[i] * warp;
      p.setXYZ(2 * i, b.x, b.y, b.z);
      p.setXYZ(2 * i + 1, b.x - flightDir.x * len, b.y - flightDir.y * len, b.z - flightDir.z * len);
    }
    p.needsUpdate = true;
  }

  // stars: random points on a shell around the camera
  let stars;
  {
    const pos = [], col = [];
    for (let i = 0; i < 5000; i++) {
      const dir = v(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize();
      dir.multiplyScalar(300 + Math.random() * 500);
      pos.push(dir.x, dir.y, dir.z);
      const tint = new Color().setHSL(0.58 + (Math.random() - 0.5) * 0.25, 0.4, 0.75 + Math.random() * 0.25);
      col.push(tint.r, tint.g, tint.b);
    }
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(pos, 3));
    g.setAttribute("color", new Float32BufferAttribute(col, 3));
    stars = new Points(g, new PointsMaterial({ size: 1.6, sizeAttenuation: false, vertexColors: true, depthWrite: false }));
    // Drawn first, behind everything: they travel with the camera, on a small shell around it, so
    // they must stay in the opaque pass (drawn before the bodies, which then cover them). Not
    // transparent: dimming is done by darkening their colour.
    stars.renderOrder = -1;
    stars.frustumCulled = false;
    scene.add(stars);
  }

  const spinning = [];
  const sphere = (r) => new SphereGeometry(r, 96, 48);

  // the Earth
  const earth = createPlanet({
    loader, textures, center: EARTH.center, radius: EARTH.radius,
    // 4K: day, relief, shininess (the seas), clouds and night lights
    maps: { map: "earthday4k.webp", bump: "earthbump4k.webp", bumpScale: 2.2, specular: "earthspec4k.webp", clouds: "earthclouds2k.webp", night: "earthnight4k.webp" },
    sunDir: SUN_DIR,
    layers: EARTH_LAYERS,
    waves: { inner: EARTH_LAYERS[0].top, outer: EARTH_LAYERS[1].top, omega: 1 }, // nutations: ω ≈ Ω
    field: { shells: [1.35, 1.8, 2.5, 3.4], inner: [0.8], offset: 0, coreTop: EARTH_LAYERS[1].top },
    wobble: { obliquity: 23.4, nutation: 2.5, nods: 11, seconds: 16 }, // real nutation ~9″; exaggerated
    coreField: EARTH_LAYERS[1].top,
    spinRate: 0.35,
  });
  scene.add(earth.root);

  // a thin atmosphere: a bright rim on the day side (hidden while the Earth is cut open)
  const atmosphereMat = new ShaderMaterial({
    uniforms: { uSun: { value: new Vector3() }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */ `
      varying vec3 vNormal, vView;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uSun; // view space
      uniform float uOpacity;
      varying vec3 vNormal, vView;
      void main() {
        float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), 2.6);
        float day = smoothstep(-0.25, 0.45, dot(vNormal, uSun));
        gl_FragColor = vec4(vec3(0.38, 0.62, 1.0) * rim * day * 1.4 * uOpacity, 1.0);
      }`,
    blending: AdditiveBlending, transparent: true, depthWrite: false,
  });
  const atmosphere = new Mesh(new SphereGeometry(EARTH.radius * 1.025, 96, 48), atmosphereMat);
  atmosphere.position.copy(EARTH.center);
  scene.add(atmosphere);

  // the Moon, at its true distance and size (somewhere on its orbit, near the Earth's view of the sky behind it)
  const moon = new Mesh(new SphereGeometry(MOON.radius, 96, 48), new MeshPhongMaterial({ map: tex("moonmap2k.jpg"), normalMap: tex("moonnormal2k.jpg"), shininess: 4 }));
  moon.position.copy(MOON.center);
  scene.add(moon);

  // Mercury: librations at the 88-day orbital period against a 58.65-day spin give ω/Ω ≈ 2/3
  const mercury = createPlanet({
    loader, textures, center: MERCURY.home, radius: MERCURY.radius,
    maps: { map: "mercurymap.jpg", normal: "mercurynormal.jpg" },
    layers: MERCURY_LAYERS,
    // forcing seen in Mercury's frame: librations at the orbital period, ω/Ω ≈ 2/3
    waves: { inner: MERCURY_LAYERS[0].top, outer: MERCURY_LAYERS[1].top, omega: 58.65 / 87.97 },
    field: { shells: [1.5, 2.1], offset: 0.2, coreTop: MERCURY_LAYERS[2].top, strength: 0.55, azimuths: 8 }, // dipole ~480 km north of the centre
    spinRate: 0.05,
  });
  scene.add(mercury.root);
  // its orbit
  const orbitPts = [];
  for (let i = 0; i <= 256; i++) orbitPosition((i / 256) * Math.PI * 2, (orbitPts[i] = new Vector3()));
  const orbitLine = new Line(new BufferGeometry().setFromPoints(orbitPts), new LineBasicMaterial({ color: 0xa0aec0, transparent: true, opacity: 0 }));
  scene.add(orbitLine);
  const counters = { orbits: document.querySelector("[data-orbits]"), spins: document.querySelector("[data-spins]") };

  // the Sun: unlit texture plus a soft additive glow
  const sun = new Mesh(sphere(SUN.radius), new MeshBasicMaterial({ map: tex("sunmap.jpg") }));
  sun.position.copy(SUN.center);
  scene.add(sun);
  spinning.push([sun, 0.02]);
  const glow = new Sprite(new SpriteMaterial({ map: glowTexture("rgba(255,214,140,0.9)", "rgba(255,140,40,0.35)"), blending: AdditiveBlending, depthWrite: false }));
  glow.scale.setScalar(SUN.radius * 4.2); // grown when seen from far away (set each frame)
  glow.position.copy(SUN.center);
  scene.add(glow);

  // Jupiter and the Galilean moons (the moons' surfaces are artist's impressions)
  const jupiterTilt = new Group();
  jupiterTilt.position.copy(JUPITER.center);
  jupiterTilt.rotation.z = (3.1 * Math.PI) / 180;
  scene.add(jupiterTilt);
  const jupiter = new Mesh(sphere(JUPITER.radius), new MeshPhongMaterial({ map: tex("jupitermap.jpg"), shininess: 4 }));
  jupiterTilt.add(jupiter);
  spinning.push([jupiter, 0.12]);
  // fine relief for close-ups (the maps themselves are 2K): the Moon's relief, tiled small
  const moonNormal = tex("moonnormal2k.jpg#detail");
  moonNormal.wrapS = moonNormal.wrapT = RepeatWrapping;
  moonNormal.repeat.set(10, 5);
  // phases: λIo − 3λEuropa + 2λGanymede = 180°, as in the Laplace resonance
  const startPhase = { io: Math.PI, europa: 0, ganymede: 0, callisto: 2.2 };
  const galileans = GALILEANS.map((m) => {
    const mesh = new Mesh(new SphereGeometry(m.radius, m.name === "ganymede" ? 384 : 96, m.name === "ganymede" ? 192 : 48), new MeshPhongMaterial({ map: tex(`${m.name}.jpg`), normalMap: moonNormal, normalScale: new Vector2(0.45, 0.45), shininess: 8 }));
    jupiterTilt.add(mesh);
    const pts = [];
    for (let i = 0; i <= 192; i++) {
      const a = (i / 192) * Math.PI * 2;
      pts.push(new Vector3(Math.cos(a) * m.orbit, 0, -Math.sin(a) * m.orbit));
    }
    const line = new Line(new BufferGeometry().setFromPoints(pts), new LineBasicMaterial({ color: 0xa0aec0, transparent: true, opacity: 0 }));
    jupiterTilt.add(line);
    return { ...m, mesh, line, phase: startPhase[m.name] };
  });

  // the map at the end: orbits, and markers where the planets are
  const mapLines = [];
  const circle = (centre, r) => {
    const pts = [];
    for (let i = 0; i <= 256; i++) {
      const a = (i / 256) * Math.PI * 2;
      pts.push(centre.clone().add(v(Math.cos(a) * r, 0, Math.sin(a) * r)));
    }
    return pts;
  };
  for (const body of [EARTH, JUPITER, SATURN]) {
    const line = new Line(new BufferGeometry().setFromPoints(circle(SUN.center, body.center.distanceTo(SUN.center))), new LineBasicMaterial({ color: 0xa0aec0, transparent: true, opacity: 0 }));
    scene.add(line);
    mapLines.push(line);
  }
  const markerBodies = [[EARTH.center, "#60a5fa"], [null, "#b8b0a8"], [JUPITER.center, "#e3c9a0"], [SATURN.center, "#f0dca0"]];
  const markers = new Points(
    new BufferGeometry().setAttribute("position", new Float32BufferAttribute(new Float32Array(12), 3)).setAttribute("color", new Float32BufferAttribute(markerBodies.flatMap(([, c]) => new Color(c).toArray()), 3)),
    new PointsMaterial({ size: 7, sizeAttenuation: false, vertexColors: true, transparent: true, opacity: 0, depthWrite: false }),
  );
  markers.frustumCulled = false;
  scene.add(markers);

  // JUICE, in three acts: met in deep space on its way out and ridden along (a sketch of a path),
  // seen looping through the Jovian system (its tour: 35 flybys of Ganymede, Europa and Callisto,
  // here a few shrinking loops), then spiralling down into a 500 km orbit around Ganymede.
  const ganymede = galileans.find((m) => m.name === "ganymede");
  let moonLatch = null; // the moons' phases when the tour began (they then follow the scroll)
  const juice = createJuice();
  juice.scale.setScalar(METRE * JUICE_ENLARGE);
  scene.add(juice);
  const juiceTracer = makeTracer();
  const moonScale = () => 1 + (MOON_ENLARGE - 1) * fx.jOrbits;
  const gPos = new Vector3(), jToSun = new Vector3(), jToJupiter = new Vector3(), jUp = new Vector3(), jAhead = new Vector3(), jSide = new Vector3();
  const juiceAxes = new Matrix4();
  // Ganymede's frame for the orbit: above its sunlit high northern latitudes, Jupiter on the horizon ahead
  function ganymedeFrame() {
    jupiterTilt.updateMatrixWorld(true);
    ganymede.mesh.getWorldPosition(gPos);
    jToSun.copy(SUN.center).sub(gPos).normalize();
    jToJupiter.copy(JUPITER.center).sub(gPos).normalize();
    jUp.copy(UP).addScaledVector(jToSun, 0.6).normalize();
    jAhead.copy(jToJupiter).addScaledVector(jUp, -jToJupiter.dot(jUp)).normalize();
    jSide.crossVectors(jAhead, jUp);
  }

  // 3. the descent: 1.5 turns, from 20,000 km above Ganymede down to 500 km
  function descent(w, out) {
    // (watched from afar with the real tour, it starts closer in, so the whole spiral is in view)
    const r = ganymede.radius * moonScale() + (500 + (real ? 5500 : 19500) * (1 - w) ** 1.5) * KM;
    const a = Math.PI * 3 * (1 - w);
    return out.copy(gPos).addScaledVector(jUp, r * Math.cos(a)).addScaledVector(jAhead, r * Math.sin(a));
  }
  // 4. mapping: the 500 km polar orbit, round and round (m − 3 orbits since the descent ended)
  const MAP_ORBIT_H = (2 * Math.PI * Math.sqrt((2634.1 + 500) ** 3 / 9887.8)) / 3600; // hours: ≈ 3.08
  const GANYMEDE_DAY_H = 7.1546 * 24;
  const MAP_SPIN = (2 * Math.PI * MAP_ORBIT_H) / GANYMEDE_DAY_H; // how far Ganymede turns per orbit (≈ 6.5°)
  // three stops of mapping (surface and tides, gravity, magnetic field), 24 passes each
  const MAP_STOPS = ["juice-map", "juice-gravity", "juice-field"];
  const MAP_PASSES = 24, MAP_SHARE = 0.75; // passes per stop; share of the scroll to the next stop spent on them
  // (a truly polar orbit: its plane holds Ganymede's spin axis and the point where the descent ended,
  // so it crosses both poles and, pass after pass, sees everything)
  const mapPole = new Vector3(), mapToward = new Vector3();
  function mapOrbit(k, out) {
    jupiterTilt.updateMatrixWorld();
    mapPole.set(0, 1, 0).applyQuaternion(jupiterTilt.getWorldQuaternion(new Quaternion()));
    mapToward.copy(mapPole).addScaledVector(jUp, -mapPole.dot(jUp)).normalize();
    const r = ganymede.radius * moonScale() + 500 * KM, a = Math.PI * 2 * k;
    return out.copy(gPos).addScaledVector(jUp, r * Math.cos(a)).addScaledVector(mapToward, r * Math.sin(a));
  }
  // 2. the tour, for real: ESA's planned trajectory (SPICE kernel crema 5.2) from arrival to capture
  //    by Ganymede, with the moons where JPL's ephemerides put them (see tools/juice_tour.py). The
  //    scroll is the clock, paced by distance from Jupiter (quick far out, slower close in). Until the
  //    file arrives (or if it can't), a sketch of the tour stands in (below).
  let real = null;
  const tourFrame = new Group(); // Jupiter's equator, turned so the Sun is where the scene has it
  jupiterTilt.add(tourFrame);
  const ease = (x) => x * x * (3 - 2 * x);
  fetch(`${textures}juice-tour.json`).then((r) => (r.ok ? r.json() : Promise.reject(r.status))).then(({ data }) => {
    const buffer = Uint8Array.from(atob(data), (c) => c.charCodeAt(0)).buffer;
    const head = new Float64Array(buffer, 0, 16);
    const [K, L, step, jd0] = head;
    const pos = new Float32Array(buffer, 128, K * 3);
    const res = new Int16Array(buffer, 128 + K * 12, 4 * L);
    // turn the data's frame about Jupiter's pole so its Sun lines up with the scene's
    jupiterTilt.updateMatrixWorld(true);
    const sunLocal = jupiterTilt.worldToLocal(SUN.center.clone());
    const delta = Math.atan2(-sunLocal.z, sunLocal.x) - Math.atan2(-head[14], head[12]);
    tourFrame.rotation.y = delta;
    // pacing (a share of the scroll for each sample) and how far out the loops reach (for the camera)
    const RJ = 71492, cum = new Float64Array(K), reach = new Float32Array(K), r = new Float32Array(K);
    for (let k = 0; k < K; k++) r[k] = Math.hypot(pos[3 * k], pos[3 * k + 1], pos[3 * k + 2]) / RJ;
    for (let k = 1; k < K; k++) cum[k] = cum[k - 1] + Math.max(r[k], 12) ** -0.75;
    for (let k = 0; k < K; k++) cum[k] /= cum[K - 1];
    for (let k = 0; k < K; k++) { let m = 0; for (let i = Math.max(0, k - 120); i <= Math.min(K - 1, k + 120); i++) m = Math.max(m, r[i]); reach[k] = m; }
    for (let k = 1; k < K; k++) reach[k] += (reach[k - 1] - reach[k]) * (1 - 1 / 240);
    for (let k = K - 2; k >= 0; k--) reach[k] += (reach[k + 1] - reach[k]) * (1 - 1 / 240);
    // the whole path, drawn as far as JUICE has got, brightest where it has just been
    // (smoothed between the 3-hourly samples, as JUICE itself moves: no corners at the tight perijoves)
    const geometry = new BufferGeometry();
    const SUB = 4, V = (K - 1) * SUB + 1, scaled = new Float32Array(V * 3);
    const at = (j, c) => pos[3 * Math.min(Math.max(j, 0), K - 1) + c];
    for (let v = 0; v < V; v++) {
      const i = Math.min(Math.floor(v / SUB), K - 2), t = v / SUB - i;
      for (let c = 0; c < 3; c++) scaled[3 * v + c] = cr(at(i - 1, c), at(i, c), at(i + 1, c), at(i + 2, c), t) * KM;
    }
    geometry.setAttribute("position", new Float32BufferAttribute(scaled, 3));
    geometry.setAttribute("color", new Float32BufferAttribute(new Float32Array(V * 3), 3));
    const trace = new Line(geometry, new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }));
    trace.frustumCulled = false;
    trace.visible = false;
    tourFrame.add(trace);
    real = { K, L, step, jd0, fits: [...head.slice(4, 12)], pos, res, cum, reach, delta, trace, SUB, shown: -1 };
    paceStale = true; // (JUICE's path changed: so does the camera's)
    // where the ride with JUICE ends, on its real way in: some 45 Jupiter radii out (the system already
    // filling the view behind it), a few days before it arrives
    let kIn = 0;
    while (kIn < K - 1 && r[kIn] > 45) kIn++;
    real.rideEnd = cum[kIn];
    real.rideEndDay = kIn * step;
    // ...and JUICE's first pass of Ganymede, a few days later (closest, in the data's own moon positions)
    let kG = kIn, best = Infinity;
    for (let k = kIn; k < Math.min(K, kIn + 400); k++) {
      const a = dataPhase(2, k) - delta, gx = Math.cos(a) * 1070400, gz = -Math.sin(a) * 1070400;
      const d = Math.hypot(pos[3 * k] - gx, pos[3 * k + 1], pos[3 * k + 2] - gz);
      if (d < best) { best = d; kG = k; }
    }
    real.flyby = cum[kG];
  }).catch(() => {});
  /** the tour's clock (0→1) → a fractional sample */
  function realIndex(s) {
    const { cum, K } = real;
    s = MathUtils.clamp(s, 0, 1);
    let lo = 0, hi = K - 1;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (cum[mid] <= s) lo = mid; else hi = mid; }
    return lo + (s - cum[lo]) / Math.max(cum[hi] - cum[lo], 1e-12);
  }
  /** where the data puts moon m at sample k (its phase in Jupiter's equator, scene convention) */
  function dataPhase(m, k) {
    const { fits, res, L, step } = real;
    const h = MathUtils.clamp(k / 4, 0, L - 1), i = Math.min(Math.floor(h), L - 2), f = h - i;
    return fits[2 * m] + fits[2 * m + 1] * k * step + 1e-6 * (res[m * L + i] * (1 - f) + res[m * L + i + 1] * f) + real.delta;
  }
  // the moons were somewhere else when the tour began: they ease onto their real places
  let tourOffset = null;
  const offsetShare = (s) => (tourOffset ? 1 - MathUtils.smoothstep(Math.abs(s - tourOffset.s0), 0, 0.08) : 0);
  // On the tour's own stop the moons go round slowly, not at their real (dizzying) pace over three and a
  // half years: a few turns of Io, in the true 1:2:4 step, ending exactly where they really are when
  // JUICE is caught by Ganymede (JUICE's last stretch is drawn relative to that Ganymede)
  const TOUR_IO_TURNS = 14;
  let ownTourOn = false;
  const TOUR_SECONDS = 130;
  const tourMoonPhase = (m) => dataPhase(m, real.K - 1) - Math.PI * 2 * TOUR_IO_TURNS * (GALILEANS[0].period / GALILEANS[m].period) * (1 - moonClock / TOUR_SECONDS);
  const scenePhase = (m, k, s) => (ownTourOn ? tourMoonPhase(m) : dataPhase(m, k) + (tourOffset ? tourOffset.phase[m] * offsetShare(s) : 0));
  const cr = (a, b, c, d, t) => b + 0.5 * t * (c - a + t * (2 * a - 5 * b + 4 * c - d + t * (3 * (b - c) + d - a)));
  const realLocal = new Vector3(), gModel = new Vector3(), gScene = new Vector3();
  // a joint's tangent: its own direction, but no longer than the gap it bridges allows (or it loops)
  function joint(d, chord) {
    const n = d.length();
    return n > 1.2 * chord ? d.multiplyScalar((1.2 * chord) / n) : d;
  }
  // (the real tour ends at capture; the descent is picked up there by the main story, JUICE hidden
  // in between, so the two need no joint, and the descent's trace never reaches back into the tour)
  function realTour(s, out) {
    const { pos, K } = real;
    const k = realIndex(s), i = Math.min(Math.floor(k), K - 2), t = k - i;
    const at = (j, c) => pos[3 * MathUtils.clamp(j, 0, K - 1) + c];
    realLocal.set(...[0, 1, 2].map((c) => cr(at(i - 1, c), at(i, c), at(i + 1, c), at(i + 2, c), t) * KM));
    realLocal.applyAxisAngle(UP, real.delta); // into Jupiter's frame (its pole is local y)
    // the last month: relative to Ganymede as the scene has it
    const w = MathUtils.smoothstep(k, K - 241, K - 41);
    if (w > 0) {
      const R = ganymede.orbit, a = dataPhase(2, k), b = scenePhase(2, k, s);
      gModel.set(Math.cos(a) * R, 0, -Math.sin(a) * R);
      gScene.set(Math.cos(b) * R, 0, -Math.sin(b) * R);
      realLocal.addScaledVector(gScene.sub(gModel), w);
    }
    return out.copy(realLocal).applyMatrix4(jupiterTilt.matrixWorld);
  }
  function realDate(k) {
    const d = new Date((real.jd0 + k * real.step - 2440587.5) * 864e5);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  }

  // 2. the tour (a sketch, until the real one arrives): shrinking loops around Jupiter, fixed in space, ending on Ganymede's orbit where
  //    JUICE meets Ganymede (at MEET; the moons are brought there in step with the scroll, below)
  const MEET = Math.atan2(-(SUN.center.z - JUPITER.center.z), SUN.center.x - JUPITER.center.x) + 1.05;
  const LOOPS = 3, TOUR_FAR = 850;
  const tourLocal = new Vector3();
  function tour(s, out) {
    if (real) return realTour(s, out);
    const rG = ganymede.orbit;
    const ra = rG + (TOUR_FAR - rG) * (1 - s) ** 1.6; // apojove, shrinking
    const rp = MathUtils.lerp(0.68 * rG, rG, MathUtils.smoothstep(s, 0.55, 1)); // perijove: inside Europa's orbit, then Ganymede's
    const theta = Math.PI + Math.PI * 2 * LOOPS * s; // from an apojove
    const r = (2 * ra * rp) / (ra + rp + (ra - rp) * Math.cos(theta));
    const psi = MEET + theta - (Math.PI + Math.PI * 2 * LOOPS);
    tourLocal.set(Math.cos(psi) * r, 0, -Math.sin(psi) * r);
    out.copy(tourLocal).applyMatrix4(jupiterTilt.matrixWorld);
    // the last stretch: onto the start of the descent
    return out.lerp(descent(0, new Vector3()), MathUtils.smoothstep(s, 0.9, 1));
  }
  // 1. the cruise: from 2.4 AU, spiralling out towards Jupiter, then lined up with the tour's start
  const jupiterAngle = Math.atan2(JUPITER.center.z - SUN.center.z, JUPITER.center.x - SUN.center.x);
  const CRUISE_START = { r: 2.4 * AU, angle: jupiterAngle - 0.9 };
  const jupiterR = Math.hypot(JUPITER.center.x - SUN.center.x, JUPITER.center.z - SUN.center.z);
  function outward(t, out) {
    const r = CRUISE_START.r * (jupiterR / CRUISE_START.r) ** t;
    const a = CRUISE_START.angle + 0.9 * t;
    return out.set(SUN.center.x + r * Math.cos(a), 0, SUN.center.z + r * Math.sin(a));
  }
  const JAPPROACH = 0.85;
  function cruiseOut(t, out) {
    if (real) {
      // One smooth curve all the way, from 2.4 AU out to where the real path begins (210 Jupiter radii
      // out, falling in): leaving along the outward spiral, arriving along the real way in, the turn
      // between them spread over the whole cruise (bent sharply at the end, it looked unphysical)
      const s0 = outward(0, new Vector3()), p1 = tour(0, new Vector3());
      const chord = s0.distanceTo(p1);
      const d0 = outward(1e-4, new Vector3()).sub(s0).normalize().multiplyScalar(chord * 0.9);
      const d1 = tour(1e-5, new Vector3()).sub(p1).normalize().multiplyScalar(chord * 0.9);
      return hermite(s0, d0, p1, d1, t, out);
    }
    if (t < JAPPROACH) return outward(t, out);
    const p0 = outward(JAPPROACH, new Vector3());
    const d0 = outward(JAPPROACH + 1e-4, new Vector3()).sub(outward(JAPPROACH - 1e-4, new Vector3())).multiplyScalar((1 - JAPPROACH) / 2e-4);
    const p1 = tour(0, new Vector3());
    const u = (t - JAPPROACH) / (1 - JAPPROACH);
    if (!real) {
      const d1 = tour(1e-4, new Vector3()).sub(tour(0, new Vector3())).normalize().multiplyScalar(p0.distanceTo(p1) * 0.6);
      return hermite(p0, d0, p1, d1, u, out);
    }
    // The real path arrives from the far side of Jupiter, falling almost straight in: the sketch swings
    // round to a point 45 million km out on that line, then follows it in (no hairpin at the end).
    const IN = 0.8, LEAD = 45e6 * KM;
    const dir = tour(1e-5, new Vector3()).sub(p1).normalize();
    const q = p1.clone().addScaledVector(dir, -LEAD);
    if (u >= IN) return out.copy(q).lerp(p1, (u - IN) / (1 - IN));
    const speed = LEAD / (1 - IN); // along the line, per unit u; matched at the waypoint
    joint(d0.multiplyScalar(IN), p0.distanceTo(q));
    return hermite(p0, d0, q, dir.multiplyScalar(speed * IN), u / IN, out);
  }
  // the whole mission, m: 0→1 cruise, 1→2 tour, 2→3 descent
  function juicePath(m, out) {
    if (m <= 1) return cruiseOut(Math.max(m, 0), out);
    if (m <= 2) return tour(m - 1, out);
    if (m <= 3) return descent(m - 2, out);
    return mapOrbit(m - 3, out);
  }

  const JUICE_RIDE = 0.78, TOUR = 0.62;
  // the Jupiter card: held on the system while JUICE flies in; "Down to Ganymede": held on Ganymede while
  // JUICE (years later) arrives and spirals down
  const JUP_HOLD = 0.7, DOWN_HOLD = 0.75; // (down in orbit before the camera arrives) // the Jupiter card: held; the jump to Ganymede // shares of the scroll: riding along; watching the tour
  // stops where, for a share of the scroll to the next one, the camera stays (riding along, or
  // watching something happen) and the effects wait too
  KEEP = () => ({ bepi: [BEPI_RIDE, true], "juice-cruise": [JUICE_RIDE, true], ...(real ? { jupiter: [JUP_HOLD, false], juice: [DOWN_HOLD, false] } : {}), ...Object.fromEntries(MAP_STOPS.map((n) => [n, [MAP_SHARE, false]])) });
  let juiceM = 0;
  let moonClock = 0; // (seconds the moons have gone round on the tour's stop: time, never the scroll)
  let tourT = 0; // (the tour's clock at its stop, 0 → 1: it plays by itself while the stop is in view)
  let cameoPasses = 0; // (passes flown so far at the Ganymede stop: one every few seconds while it's in view)
  // JUICE's tour is a side trip: at the Jupiter stop, a button opens a timeline scrolled sideways
  // (see the tour slider, below). While it's open the page stays at the stop and the slider is the clock.
  let tourMode = null; // { clock, target, ramp, closing }
  /** the moons' clock in the main story (0 at the Jupiter stop, 1 most of the way to Ganymede), or the slider's */
  function tourClockAt(u) {
    if (tourMode) return tourMode.clock;
    const J = names.indexOf("jupiter"), G = names.indexOf("juice");
    return J < 0 || G < 0 ? 0 : MathUtils.clamp((u - J) / (G - J) / TOUR, 0, 1);
  }
  /** JUICE in the main story, with the real tour: in along its real way to its first pass of Ganymede
   *  (at the Jupiter card), there while the camera closes in on Ganymede, then (cheating time) the
   *  descent, watched from Ganymede, then the mapping */
  function storyM(u) {
    const J = names.indexOf("jupiter"), G = names.indexOf("juice");
    const rideEnd = 1 + real.rideEnd, flyby = 1 + real.flyby;
    if (u < G) return MathUtils.lerp(rideEnd, flyby, ease(MathUtils.clamp((u - J) / (G - J) / JUP_HOLD, 0, 1)));
    if (u < mapStart()) return 2 + ease(MathUtils.clamp((u - G) / DOWN_HOLD, 0, 1));
    return 3 + mapPassesAt(u);
  }
  // (the moons hold their places through the mapping and the row of icy moons)
  const chapterEnd = () => Math.max(mapEnd(), names.indexOf("ocean-depth"), names.indexOf("ocean-probes"));
  const mapStart = () => { const M = names.indexOf(MAP_STOPS[0]); return M >= 0 ? M : names.indexOf("juice") + 1; };
  /** the moons' date in the main story (a share of the tour's clock), or −1 outside the Jupiter chapter */
  function storyClock(u) {
    const C = names.indexOf("juice-cruise"), J = names.indexOf("jupiter");
    if (!real || C < 0 || u < C - 0.3 || u > chapterEnd() + 0.6) return -1;
    if (u < J) return Math.max(0, juiceM - 1);
    return Math.min(storyM(Math.min(u, names.indexOf("juice") - 1e-6)) - 1, real.flyby);
  }
  function placeJuice(u) {
    ganymedeFrame();
    const T = names.indexOf("juice-tour");
    const onTour = real && T >= 0 ? 1 - MathUtils.smoothstep(Math.abs(u - T), 0.2, 0.55) : 0;
    if (onTour > 0.001) {
      // the tour, seen from above: JUICE a dot, its path so far behind it (brightest where it has just been)
      juiceM = 1 + tourT;
      juicePath(juiceM, juice.position);
      juice.visible = true;
      const at = juice.position.clone(), mNow = juiceM;
      afterCamera.push(() => juiceTracer.draw(at, juicePath, mNow, 1e-5, onTour, JUICE_SIZE * METRE * JUICE_ENLARGE, 1));
      const { SUB } = real, now = realIndex(tourT), n = Math.min(Math.ceil(now * SUB) + 1, (real.K - 1) * SUB + 1);
      real.trace.visible = n > 1;
      real.trace.geometry.setDrawRange(0, n);
      const col = real.trace.geometry.attributes.color;
      for (let v = 0; v < n; v++) {
        const a = onTour * (0.05 + 0.95 * Math.exp(-(now - v / SUB) / 400)); // (400 samples: 50 days; older loops just a faint haze)
        col.setXYZ(v, 0.32 * a, 0.42 * a, 0.55 * a);
      }
      col.needsUpdate = true;
      return;
    }
    if (names.includes("ganymede")) {
      // the cameo: in its mapping orbit, there while Ganymede is
      juiceM = 3 + cameoPasses;
      juicePath(juiceM, juice.position);
      const z = SUN.center.clone().sub(juice.position).normalize(), x = new Vector3().crossVectors(jUp, z).normalize(), y = new Vector3().crossVectors(z, x);
      juice.quaternion.setFromRotationMatrix(juiceAxes.makeBasis(x, y, z));
      const story = fx.gMap;
      juice.visible = story > 0.001;
      const at = juice.position.clone(), mNow = juiceM;
      afterCamera.push(() => {
        juice.scale.setScalar(METRE * JUICE_ENLARGE);
        juiceTracer.draw(at, juicePath, mNow, real ? Math.min(0.08, juiceM - 2) : 0.3, story, JUICE_SIZE * METRE * JUICE_ENLARGE, 1);
      });
      if (real) real.trace.visible = false;
      return;
    }
    const C = names.indexOf("juice-cruise"), J = names.indexOf("jupiter"), G = names.indexOf("juice");
    if (C < 0 || J < 0 || G < 0) return;
    const rideEnd = 1 + (real?.rideEnd ?? 0); // (the ride carries on along the real way in, when known)
    if (u < J) juiceM = ease(MathUtils.clamp((u - C) / JUICE_RIDE, 0, 1)) * rideEnd;
    else if (tourMode) juiceM = 1 + tourMode.clock;
    else if (real && u < mapStart()) juiceM = storyM(u);
    else if (u < G) {
      const f = (u - J) / (G - J);
      juiceM = f < 0.06 ? rideEnd : 2 + ease((f - 0.06) / 0.94);
    } else juiceM = 3 + mapPassesAt(u);
    juicePath(juiceM, juice.position);
    // dish (+z) towards the Sun, and so roughly towards the Earth; solar wings face it too
    const z = SUN.center.clone().sub(juice.position).normalize(), x = new Vector3().crossVectors(jUp, z).normalize(), y = new Vector3().crossVectors(z, x);
    juice.quaternion.setFromRotationMatrix(juiceAxes.makeBasis(x, y, z));
    // seen from afar a dot with its trace; close up, the model
    const skip = tourMode || real ? 0 : (() => { const f = (u - J) / (G - J); return MathUtils.smoothstep(f, 0, 0.05) * (1 - MathUtils.smoothstep(f, 0.3, 0.5)); })();
    const end = mapEnd();
    // (with the real tour, the time cheat between its first pass of Ganymede in 2031 and the descent in
    // 2034 isn't drawn as a jump: JUICE fades out after the pass and back in where the descent begins)
    const cheat = real && !tourMode ? (() => {
      const f = (u - J) / (G - J);
      return MathUtils.smoothstep(f, JUP_HOLD + 0.02, JUP_HOLD + 0.12) * (1 - MathUtils.smoothstep(u, G + 0.005, G + 0.08));
    })() : 0;
    const story = MathUtils.smoothstep(u, C - 0.7, C - 0.5) * (1 - MathUtils.smoothstep(u, end + 0.1, end + 0.5)) * (1 - skip) * (1 - cheat);
    juice.visible = story > 0.001;
    const span = juiceM <= 1 ? 0.035 : juiceM <= 2 ? (real ? (tourMode ? 0.008 : 0.02) : 0.22) : real ? Math.min(0.08, juiceM - 2) : 0.3; // (the real tour's loops are far too big to trail behind the descent)
    const bright = 1 + 0.8 * fx.jOrbits; // the tour is seen from far: a slightly brighter line
    // (settled in orbit, the camera rides just behind it on the same circle: no trace then, or it would
    // pass by the camera and fold into a sharp V on screen)
    // (mapping, seen from afar, it has one again: a short arc of its orbit)
    const settled = real ? 1 : juiceM > 3 ? MathUtils.smoothstep(juiceM, 3.02, 3.1) : 1 - MathUtils.smoothstep(juiceM, 2.8, 2.97);
    const at = juice.position.clone(), mNow = juiceM;
    afterCamera.push(() => {
      const k = cheatFactor(at);
      juice.scale.setScalar(METRE * JUICE_ENLARGE * k);
      juiceTracer.draw(at, juicePath, mNow, span, story * settled, JUICE_SIZE * METRE * JUICE_ENLARGE * k, bright);
    });
    // the real tour so far, fading with age (the last few weeks brightest)
    if (real) {
      const vis = tourMode ? fx.jOrbits * story * tourMode.ramp * MathUtils.smoothstep(juiceM, 1, 1.002) : 0;
      real.trace.visible = vis > 0.002;
      if (real.trace.visible) {
        const { SUB } = real, now = realIndex(juiceM - 1), n = Math.min(Math.ceil(now * SUB) + 1, (real.K - 1) * SUB + 1);
        real.trace.geometry.setDrawRange(0, n);
        const col = real.trace.geometry.attributes.color;
        for (let v = 0; v < n; v++) {
          const a = vis * (0.05 + 0.95 * Math.exp(-(now - v / SUB) / 320)); // (320 samples: 40 days)
          col.setXYZ(v, 0.32 * a, 0.42 * a, 0.55 * a);
        }
        col.needsUpdate = true;
      }
    }
  }
  // the Jupiter stop: further out while the loops reach far, closer in as they tighten
  /** the line the Jupiter overview is seen along: out from Jupiter through JUICE, raised and sunward */
  function arrivalLine(at) {
    const toSun = SUN.center.clone().sub(at).normalize();
    return at.clone().sub(JUPITER.center).normalize().addScaledVector(UP, 0.6).addScaledVector(toSun, 0.4).normalize();
  }
  // The overview sits on that line, beyond the end of the ride: leaving the ride, the camera dollies
  // straight back along it (JUICE shrinking in front, the system opening up behind), no turning.
  /** a view computed with JUICE put somewhere else for a moment (to know where a move begins or ends) */
  function viewWithJuiceAt(at, m, view) {
    const keepPos = juice.position.clone(), keepM = juiceM;
    juice.position.copy(at);
    juiceM = m;
    const v = view();
    juice.position.copy(keepPos);
    juiceM = keepM;
    return v;
  }
  /** the Jupiter card's view: the system, from beyond where the ride with JUICE ended, on the same line
   *  (leaving the ride is a straight pull back) */
  const rideEndView = () => {
    const end = juicePath(1 + real.rideEnd, new Vector3());
    return { pos: end.clone().addScaledVector(arrivalLine(end), 330), look: JUPITER.center.clone() };
  };
  views.jupiter = (base) => {
    if (!real) return base;
    const here = rideEndView();
    if (!tourMode) return here;
    // the tour: easing out from there to the overview, round Jupiter
    const k = realIndex(tourMode.clock);
    const over = JUPITER.center.clone().lerp(base.pos, MathUtils.clamp(real.reach[Math.round(k)], 26, 60) / 20);
    const w = ease(tourMode.ramp), a = here.pos.clone().sub(JUPITER.center), b = over.sub(JUPITER.center);
    const r = Math.exp(MathUtils.lerp(Math.log(a.length()), Math.log(b.length()), w));
    a.normalize().applyQuaternion(new Quaternion().slerp(new Quaternion().setFromUnitVectors(a.clone().normalize(), b.normalize()), w));
    const pos = JUPITER.center.clone().addScaledVector(a, r);
    const look = here.look.clone().lerp(base.look, w);
    return { pos, look };
  };
  /** passes flown in the mapping orbit at scroll position u (the camera holds while they build up) */
  function mapPassesAt(u) {
    if (names.includes("ganymede")) return cameoPasses;
    let k = 0;
    for (const [i, name] of MAP_STOPS.entries()) {
      const M = names.indexOf(name);
      if (M < 0 || u < M) break;
      k = MAP_PASSES * (i + MathUtils.clamp((u - M) / MAP_SHARE, 0, 1));
    }
    return k;
  }
  /** where the mapping ends (the last of its stops, its passes all flown) */
  const mapEnd = () => { const last = names.indexOf(MAP_STOPS.at(-1)); return last >= 0 ? last + MAP_SHARE : names.indexOf("juice"); };
  // Ganymede seen whole, the polar orbit face on around it, from the sunlit side
  views.juiceMap = () => {
    const R = ganymede.radius; // (its true size: the view mustn't move as the enlarged moons shrink back)
    // (from the sunlit side, looking across the orbit: the strips are seen sweeping over the face)
    const dir = jSide.clone().multiplyScalar(0.8).addScaledVector(jToSun, 0.55).addScaledVector(jUp, 0.15).normalize();
    return { pos: gPos.clone().addScaledVector(dir, R * 4.2), look: gPos.clone() };
  };
  // the whole system from above (a little to the sunward side, so the moons are lit), Callisto's orbit filling it
  views.tourTop = () => {
    const R = 2.7e6 * KM, tilt = MathUtils.degToRad(22);
    const side = jToSun.clone().addScaledVector(jUp, -jToSun.dot(jUp)).normalize();
    const dir = jUp.clone().multiplyScalar(Math.cos(tilt)).addScaledVector(side, Math.sin(tilt));
    return { pos: JUPITER.center.clone().addScaledVector(dir, R / Math.tan(MathUtils.degToRad(camera.fov / 2))), look: JUPITER.center.clone() };
  };
  // the magnetic field: further out, to take in the loops
  views.juiceField = () => {
    const v = views.juiceMap();
    return { pos: gPos.clone().lerp(v.pos, 1.75), look: v.look };
  };
  // the orbit, drawn as a faint ring
  const mapRing = new Line(new BufferGeometry().setAttribute("position", new Float32BufferAttribute(new Float32Array(129 * 3), 3)), new LineBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0, depthWrite: false }));
  mapRing.frustumCulled = false;
  scene.add(mapRing);
  // The map: strips painted onto a map of Ganymede's own surface (so they turn with it), one per pass,
  // where the instruments looked: pole to pole, each one further west as Ganymede turns beneath.
  const MAP_W = 1024, MAP_H = 512;
  const mapCanvas = document.createElement("canvas");
  mapCanvas.width = MAP_W;
  mapCanvas.height = MAP_H;
  const mapCtx = mapCanvas.getContext("2d");
  const mapTexture = new CanvasTexture(mapCanvas); // (a mask: where the instruments have looked)
  // Gravity, as a map of anomalies: the two largest terms as Galileo measured them (J2 = 127.5e-6 and
  // C22 = 38.3e-6, the moon squeezed at the poles and stretched towards Jupiter), and an illustrative
  // scatter of smaller ones on top. Blue: less gravity than average; red: more.
  const gravTexture = (() => {
    const W = 512, H = 256, c = document.createElement("canvas");
    c.width = W; c.height = H;
    const g = c.getContext("2d"), img = g.createImageData(W, H);
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const blobs = Array.from({ length: 18 }, () => {
      const th = Math.acos(2 * rand() - 1), ph = rand() * Math.PI * 2;
      return { x: Math.sin(th) * Math.cos(ph), y: Math.cos(th), z: Math.sin(th) * Math.sin(ph), a: (rand() * 2 - 1) * 0.35, w: 0.25 + rand() * 0.3 };
    });
    const values = new Float32Array(W * H);
    let max = 0;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      const th = ((j + 0.5) / H) * Math.PI, ph = ((i + 0.5) / W) * Math.PI * 2;
      const st = Math.sin(th), ct = Math.cos(th);
      // (longitude measured from the point facing Jupiter, in the map's own convention)
      let v = -127.5 * (1.5 * ct * ct - 0.5) + 38.3 * 3 * st * st * Math.cos(2 * ph);
      v /= 127.5;
      const x = -Math.cos(ph) * st, y = ct, z = Math.sin(ph) * st;
      for (const b of blobs) { const d = Math.acos(Math.min(1, x * b.x + y * b.y + z * b.z)); v += b.a * Math.exp(-(d * d) / (b.w * b.w)); }
      values[j * W + i] = v;
      max = Math.max(max, Math.abs(v));
    }
    const blue = [44, 98, 210], white = [236, 234, 226], red = [214, 84, 52];
    for (let k = 0; k < W * H; k++) {
      const t = values[k] / max, to = t < 0 ? blue : red, f = Math.min(1, Math.abs(t) * 1.3);
      for (let ch = 0; ch < 3; ch++) img.data[4 * k + ch] = white[ch] + (to[ch] - white[ch]) * f;
      img.data[4 * k + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const t = new CanvasTexture(c);
    t.colorSpace = SRGBColorSpace;
    return t;
  })();
  // The cover: Ganymede as known before mapping (blurred), coming into focus under the strips; then, at
  // the gravity stop, the gravity map shown there instead. (A shell just above the surface.)
  const mapCoverMaterial = new ShaderMaterial({
    uniforms: { surf: { value: null }, mask: { value: mapTexture }, grav: { value: gravTexture }, sun: { value: new Vector3(1, 0, 0) }, show: { value: 0 }, wGrav: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D surf, mask, grav;
      uniform vec3 sun;
      uniform float show, wGrav;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float seen = texture2D(mask, vUv).a;
        vec3 sharp = texture2D(surf, vUv).rgb, soft = texture2D(surf, vUv, 5.0).rgb;
        vec3 colour = mix(soft * 0.85, sharp, seen) + vec3(1.0, 0.72, 0.4) * 0.07 * seen * (1.0 - wGrav);
        colour = mix(colour, texture2D(grav, vUv).rgb * 0.75, wGrav * seen);
        float light = 0.12 + 0.95 * max(dot(normalize(vNormal), sun), 0.0);
        gl_FragColor = vec4(colour * light, show);
        #include <colorspace_fragment>
      }`,
    transparent: true, depthWrite: false,
  });
  const mapCover = new Mesh(new SphereGeometry(ganymede.radius * 1.004, 128, 64), mapCoverMaterial);
  mapCover.visible = false;
  ganymede.mesh.add(mapCover);
  let painted = 0; // passes painted so far
  const trackWorld = new Vector3(), tiltInverse = new Quaternion();
  /** where on Ganymede's surface (canvas x, y) JUICE is over after k passes */
  function trackPoint(k) {
    mapOrbit(k, trackWorld).sub(gPos);
    jupiterTilt.getWorldQuaternion(tiltInverse).invert();
    trackWorld.applyQuaternion(tiltInverse).applyAxisAngle(Y_AXIS, -(ganymede.phase + MAP_SPIN * k)).normalize();
    const theta = Math.acos(MathUtils.clamp(trackWorld.y, -1, 1));
    let phi = Math.atan2(trackWorld.z, -trackWorld.x);
    if (phi < 0) phi += Math.PI * 2;
    return [(phi / (Math.PI * 2)) * MAP_W, (theta / Math.PI) * MAP_H];
  }
  function paintTo(k) {
    if (k < painted - 1e-9) { mapCtx.clearRect(0, 0, MAP_W, MAP_H); painted = 0; }
    if (k - painted < 1e-6) return;
    mapCtx.lineCap = "round";
    mapCtx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    mapCtx.shadowColor = "white";
    mapCtx.shadowBlur = 6; // (soft edges)
    mapCtx.lineWidth = 10; // (≈ 3.5° wide: far wider than the instruments' real footprints)
    const steps = Math.max(1, Math.ceil((k - painted) * 160));
    let [x0, y0] = trackPoint(painted);
    for (let i = 1; i <= steps; i++) {
      const [x1, y1] = trackPoint(painted + ((k - painted) * i) / steps);
      if (Math.abs(x1 - x0) < MAP_W / 2) { mapCtx.beginPath(); mapCtx.moveTo(x0, y0); mapCtx.lineTo(x1, y1); mapCtx.stroke(); }
      x0 = x1; y0 = y1;
    }
    painted = k;
    mapTexture.needsUpdate = true;
  }
  // Magnetic field lines (a dipole: r = L sin²θ, in units of Ganymede's radius), in two sets: Ganymede's
  // own field, along its spin axis (made in its iron core); and the ocean's answer to Jupiter's field
  // sweeping past, along the line to Jupiter, swelling and fading every 10.5 hours.
  function dipoleLines(shells, planes, color) {
    const group = new Group(), material = new LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false });
    for (let p = 0; p < planes; p++) {
      const ph = (p / planes) * Math.PI * 2;
      for (const L of shells) {
        const th0 = Math.asin(Math.sqrt(1 / L)), pts = [];
        for (let i = 0; i <= 90; i++) {
          const th = th0 + ((Math.PI - 2 * th0) * i) / 90, r = L * Math.sin(th) ** 2;
          pts.push(new Vector3(r * Math.sin(th) * Math.cos(ph), r * Math.cos(th), r * Math.sin(th) * Math.sin(ph)));
        }
        group.add(new Line(new BufferGeometry().setFromPoints(pts), material));
      }
    }
    group.userData.material = material;
    return group;
  }
  const fieldGroup = new Group();
  const ownField = dipoleLines([1.7, 2.6, 4.0], 6, 0xbcd4ff), oceanField = dipoleLines([1.35, 1.9], 4, 0x5fe0cc);
  fieldGroup.add(ownField, oceanField);
  fieldGroup.visible = false;
  scene.add(fieldGroup);
  /** each frame: Ganymede's extra turn and tides, the ring, the strips and what they reveal, the fields */
  function drawMap(u) {
    const k = mapPassesAt(u), show = fx.gMap, hours = k * MAP_ORBIT_H, R = ganymede.radius * moonScale();
    mapCover.visible = show > 0.01;
    mapCoverMaterial.uniforms.show.value = show;
    mapCoverMaterial.uniforms.wGrav.value = fx.gGrav;
    mapCoverMaterial.uniforms.surf.value = ganymede.mesh.material.map;
    mapCoverMaterial.uniforms.sun.value.copy(SUN.center).sub(gPos).normalize();
    // the tide: Ganymede stretched towards Jupiter, more and less over its 7-day orbit (exaggerated
    // thousands of times: the real rise and fall is a few metres)
    if (show > 0.01) ganymede.mesh.scale.x *= 1 + 0.018 * show * Math.cos((2 * Math.PI * hours) / GANYMEDE_DAY_H);
    // the fields
    fieldGroup.visible = fx.gField > 0.01;
    if (fieldGroup.visible) {
      fieldGroup.position.copy(gPos);
      fieldGroup.scale.setScalar(R);
      ownField.quaternion.setFromUnitVectors(Y_AXIS, mapPole);
      oceanField.quaternion.setFromUnitVectors(Y_AXIS, jToJupiter);
      ownField.userData.material.opacity = 0.35 * fx.gField;
      oceanField.userData.material.opacity = 0.95 * fx.gField * Math.abs(Math.sin((2 * Math.PI * hours) / 10.53)) ** 0.7;
    }
    mapRing.material.opacity = 0.3 * show;
    mapRing.visible = show > 0.01;
    if (mapRing.visible) {
      const pos = mapRing.geometry.attributes.position;
      // (relative to Ganymede: out here, scene coordinates are too big for the GPU to place points
      // finely, and a circle drawn in them comes out jagged)
      mapRing.position.copy(gPos);
      for (let i = 0; i <= 128; i++) { mapOrbit(i / 128, trackWorld).sub(gPos); pos.setXYZ(i, trackWorld.x, trackWorld.y, trackWorld.z); }
      pos.needsUpdate = true;
    }
    if (mapCover.visible || k === 0) paintTo(k);
    drawPasses(k, show);
  }
  views.juice = juiceView;
  // with the real tour, "Down to Ganymede" is watched from the same place as the mapping: the whole moon
  views.juiceDown = () => (real ? views.juiceMap() : juiceView());
  function juiceView() {
    // from the sunlit side (to see the cells and the dish), looking roughly towards Jupiter
    const sunward = jToSun.clone().addScaledVector(jAhead, -jToSun.dot(jAhead)).normalize();
    const back = jAhead.clone().multiplyScalar(-0.75).addScaledVector(sunward, 0.65).addScaledVector(jUp, 0.12).normalize();
    const pos = juice.position.clone().addScaledVector(back, 50 * METRE * JUICE_ENLARGE);
    return { pos, look: juice.position.clone() };
  }
  // riding along on the way out: from the sunward side (the cells), a little above
  views.juiceRide = () => {
    const toSun = SUN.center.clone().sub(juice.position).normalize();
    const side = new Vector3().crossVectors(toSun, UP).normalize();
    const dir = side.multiplyScalar(0.55).addScaledVector(toSun, 0.7).addScaledVector(UP, 0.35).normalize();
    // the ride begins where the jump from Mercury ends: right behind JUICE, on the line flown in along;
    // it then eases round to the sunlit side
    const arrived = juice.position.clone().sub(STOPS.mercury.pos).normalize().negate();
    dir.copy(arrived.applyQuaternion(new Quaternion().slerp(new Quaternion().setFromUnitVectors(arrived.clone(), dir.clone()), MathUtils.smoothstep(juiceM, 0, 0.35))));
    // over the second half of the ride, ease round behind JUICE and a little above, Jupiter far ahead
    // beyond it: leaving the ride, the camera flies on towards Jupiter, JUICE sliding away beneath
    const toFar = arrivalLine(juice.position);
    const turn = new Quaternion().setFromUnitVectors(dir, toFar);
    dir.applyQuaternion(new Quaternion().slerp(turn, MathUtils.smoothstep(juiceM, 0.45, 1)));
    const pos = juice.position.clone().addScaledVector(dir, 50 * METRE * JUICE_ENLARGE);
    // towards the end, the shot widens to take in the Jupiter system beyond: aimed between the two, JUICE
    // low in the frame, the system on the horizon above it
    const toJuice = juice.position.clone().sub(pos).normalize(), toJupiter = JUPITER.center.clone().sub(pos);
    const far = toJupiter.length();
    toJupiter.normalize();
    const w = 0; // (the ride keeps JUICE in the middle: the system comes into view as the camera pulls back)
    if (w <= 0) return { pos, look: juice.position.clone() };
    const aim = toJuice.clone().applyQuaternion(new Quaternion().slerp(new Quaternion().setFromUnitVectors(toJuice, toJupiter), w));
    return { pos, look: pos.clone().addScaledVector(aim, MathUtils.lerp(pos.distanceTo(juice.position), far, w * 2)) };
  };

  // A spacecraft seen from afar: a bright dot that gives way to the model as the model grows past a few
  // pixels, and an evanescent trace behind it (the last stretch of its path, fading out).
  function makeTracer() {
    const dot = new Sprite(new SpriteMaterial({ map: glowTexture("rgba(225,238,255,0.9)", "rgba(150,190,255,0.12)"), blending: AdditiveBlending, depthWrite: false, sizeAttenuation: false, transparent: true }));
    dot.scale.setScalar(0.012);
    scene.add(dot);
    const N = 240;
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(new Float32Array(N * 3), 3));
    geometry.setAttribute("color", new Float32BufferAttribute(new Float32Array(N * 3), 3));
    const line = new Line(geometry, new LineBasicMaterial({ vertexColors: true, transparent: true, blending: AdditiveBlending, depthWrite: false }));
    line.frustumCulled = false;
    scene.add(line);
    // a soft glow along it, widest and brightest at the head
    const glowGeometry = new BufferGeometry();
    glowGeometry.setAttribute("position", geometry.attributes.position);
    glowGeometry.setAttribute("aFade", new Float32BufferAttribute(new Float32Array(N), 1));
    const glow = new Points(glowGeometry, new ShaderMaterial({
      uniforms: { uScale: { value: 1 } },
      vertexShader: /* glsl */ `
        attribute float aFade;
        uniform float uScale;
        varying float vFade;
        void main() {
          vFade = aFade;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = (1.5 + 3.5 * aFade * aFade) * uScale;
        }`,
      fragmentShader: /* glsl */ `
        varying float vFade;
        void main() {
          float d = length(gl_PointCoord - 0.5) * 2.0;
          float a = exp(-4.0 * d * d) * vFade;
          gl_FragColor = vec4(vec3(0.55, 0.75, 1.0) * a * 0.12, 1.0);
        }`,
      transparent: true, blending: AdditiveBlending, depthWrite: false,
    }));
    glow.frustumCulled = false;
    scene.add(glow);
    const point = new Vector3();
    let reveal = 0, lastDraw = 0; // how much of the trace is out (0: none; 1: all of it)
    return {
      /** head: where it is; path(m, out): its path; span: how far back the trace reaches (in m); size: half its size (world units) */
      draw(head, path, m, span, fade, size, bright = 1) {
        const distance = camera.position.distanceTo(head);
        const pixels = ((2 * size) / distance) * (renderer.domElement.height / (2 * Math.tan(MathUtils.degToRad(camera.fov / 2))));
        dot.position.copy(head);
        dot.material.opacity = fade * (1 - MathUtils.smoothstep(pixels, 3, 14));
        dot.visible = dot.material.opacity > 0.01;
        // The trace is for seeing where a distant dot goes: close up, with the model in view, there's none.
        // In between it unrolls from behind the craft as the camera pulls back (and rolls back up into it),
        // following how small the craft has become, eased so it never appears all at once.
        const now = performance.now(), dt = Math.min((now - lastDraw) / 1000, 0.1);
        lastDraw = now;
        const want = 1 - MathUtils.smoothstep(pixels, 5, 22);
        // (out slowly as the craft shrinks; back in at once when the camera closes in on it)
        reveal = reducedMotion || want < reveal ? want : reveal + (want - reveal) * (1 - Math.exp(-dt * 1.2));
        if (Math.abs(want - reveal) < 1e-3) reveal = want;
        span *= reveal ** 1.5;
        fade *= Math.min(1, reveal * 3) * calm;
        line.visible = glow.visible = fade > 0.01 && span > 1e-4;
        if (!line.visible) return;
        // positions relative to the head (kept small, so precise near the spacecraft)
        line.position.copy(head);
        glow.position.copy(head);
        glow.material.uniforms.uScale.value = renderer.getPixelRatio();
        const pos = geometry.attributes.position, col = geometry.attributes.color, fades = glowGeometry.attributes.aFade;
        for (let k = 0; k < N; k++) {
          const back = (k / (N - 1)) ** 1.8; // samples packed closer near the head
          path(m - span * back, point).sub(head);
          pos.setXYZ(k, point.x, point.y, point.z);
          const a = fade * (1 - back) ** 1.6;
          col.setXYZ(k, 0.32 * a * bright, 0.42 * a * bright, 0.55 * a * bright);
          fades.setX(k, a); // (the glow is never brightened: it would turn into a fireball)
        }
        pos.needsUpdate = col.needsUpdate = fades.needsUpdate = true;
      },
    };
  }

  // BepiColombo, in four acts: launched from the Earth (a bright dot rising away), ridden along
  // (one smooth curve in towards the Sun: a sketch, not its real path of 18 laps and nine flybys),
  // left again near Mercury, then seen as a dot captured into a polar orbit around it.
  const bepi = createBepi();
  bepi.group.scale.setScalar(METRE * BEPI_ENLARGE);
  scene.add(bepi.group);
  const bepiTracer = makeTracer();
  const BEPI_RIDE = 0.78; // share of the scroll from its stop to the arrival spent riding along

  // where it is captured: Mio's final polar orbit, 590 × 11,640 km above the surface
  const toSunM = SUN.center.clone().sub(MERCURY.home).normalize();
  const sideM = new Vector3().crossVectors(toSunM, UP).normalize();
  const arrivalDir = sideM.clone().multiplyScalar(0.7).addScaledVector(toSunM, 0.55).addScaledVector(UP, 0.3).normalize();
  const orbitNormal = arrivalDir.clone().setY(0).normalize(); // seen face on: a polar orbit, containing the spin axis
  const orbitH = new Vector3().crossVectors(UP, orbitNormal).normalize();
  const PERI_KM = 2440 + 590, APO_KM = 2440 + 11639;
  const ORB = { a: ((PERI_KM + APO_KM) / 2) * KM, e: (APO_KM - PERI_KM) / (APO_KM + PERI_KM), turn: -0.5, seconds: 8 };
  function mercuryOrbit(M, out) {
    let E = M;
    for (let k = 0; k < 8; k++) E -= (E - ORB.e * Math.sin(E) - M) / (1 - ORB.e * Math.cos(E));
    const x = ORB.a * (Math.cos(E) - ORB.e), y = ORB.a * Math.sqrt(1 - ORB.e * ORB.e) * Math.sin(E);
    const c = Math.cos(ORB.turn), s2 = Math.sin(ORB.turn);
    return out.copy(MERCURY.home).addScaledVector(orbitH, x * c - y * s2).addScaledVector(UP, x * s2 + y * c);
  }
  // arriving on the sunlit side (so Mercury looms lit behind it at the end of the ride)
  if (mercuryOrbit(Math.PI, new Vector3()).sub(MERCURY.home).dot(toSunM) < 0) orbitH.negate();
  const apoherm = mercuryOrbit(Math.PI, new Vector3());
  {
    const pts = [];
    for (let k = 0; k <= 256; k++) pts.push(mercuryOrbit((k / 256) * Math.PI * 2, new Vector3()));
    var captureOrbit = new Line(new BufferGeometry().setFromPoints(pts), new LineBasicMaterial({ color: 0xa5d4ff, transparent: true, opacity: 0 }));
    scene.add(captureOrbit);
  }

  // the cruise: from a point 30 units (~95,000 km) along the Earth's orbit, one lap in, to the apoherm
  const spiralStart = (() => {
    const out = EARTH.center.clone().sub(SUN.center);
    return { r: out.length(), angle: Math.atan2(out.z, out.x) + 30 / out.length() };
  })();
  const spiralStartPoint = new Vector3(SUN.center.x + spiralStart.r * Math.cos(spiralStart.angle), 0, SUN.center.z + spiralStart.r * Math.sin(spiralStart.angle));
  const launchDir = spiralStartPoint.clone().sub(EARTH.center).normalize();
  const launchPad = EARTH.center.clone().addScaledVector(launchDir, EARTH.radius * 1.01);
  const endRel = apoherm.clone().sub(SUN.center);
  const endR = Math.hypot(endRel.x, endRel.z);
  // the spiral itself: radius shrinking steadily, one lap round the Sun
  function spiral(t, out) {
    const r = spiralStart.r * (endR / spiralStart.r) ** t;
    const a = spiralStart.angle + Math.PI * 2 * t;
    return out.set(SUN.center.x + r * Math.cos(a), 0, SUN.center.z + r * Math.sin(a));
  }
  // smooth joints (no corners, so no sudden turns): Hermite curves matching position and direction
  function hermite(p0, d0, p1, d1, s, out) {
    const s2 = s * s, s3 = s2 * s;
    return out.copy(p0).multiplyScalar(2 * s3 - 3 * s2 + 1)
      .addScaledVector(d0, s3 - 2 * s2 + s)
      .addScaledVector(p1, -2 * s3 + 3 * s2)
      .addScaledVector(d1, s3 - s2);
  }
  const tangent = (f, x, h = 1e-4) => f(x + h, new Vector3()).sub(f(x - h, new Vector3())).normalize();
  // The approach: from the spiral (at 80 %) a smooth curve lines up with the capture orbit's
  // direction of travel; then a short straight glide in, slowing down (Mercury looms behind).
  const APPROACH = 0.8, GLIDE = 0.93, GLIDE_LENGTH = 40;
  const arriving = tangent(mercuryOrbit, Math.PI);
  const glideStart = apoherm.clone().addScaledVector(arriving, -GLIDE_LENGTH);
  // The cruise drawn: one smooth curve in from near the Earth to Mercury (which, here, lies in the same
  // direction from the Sun), setting off along the Earth's orbit bent sunwards, arriving along the
  // capture orbit. A sketch: it turns gently all the way, so the ride (and the sky behind it) is calm.
  const cruiseStartDir = tangent(spiral, 1e-4).lerp(SUN.center.clone().sub(spiralStartPoint).normalize(), 0.5).normalize();
  const approach = (() => {
    const L = spiralStartPoint.distanceTo(glideStart);
    return { d0: cruiseStartDir.clone().multiplyScalar(L * 0.9), d1: arriving.clone().multiplyScalar(L * 0.9) };
  })();
  function cruise(t, out) {
    if (t < GLIDE) return hermite(spiralStartPoint, approach.d0, glideStart, approach.d1, t / GLIDE, out);
    const w = (t - GLIDE) / (1 - GLIDE);
    return out.copy(glideStart).addScaledVector(arriving, GLIDE_LENGTH * (1 - (1 - w) ** 2));
  }
  // the launch: straight up from the pad, bending into the spiral's direction
  const launch = (() => {
    const span = launchPad.distanceTo(spiralStartPoint);
    return { d0: launchDir.clone().multiplyScalar(span * 0.8), d1: cruiseStartDir.clone().multiplyScalar(span * 0.8) };
  })();

  const chaseDir = new Vector3();
  // Earth from space, the launch rising off to one side: seen from the same side as the view before
  // (the core), so the camera barely turns on the way
  views.launch = (() => {
    const side = STOPS.core.pos.clone().sub(EARTH.center);
    side.addScaledVector(launchDir, -side.dot(launchDir)).normalize();
    const look = EARTH.center.clone().addScaledVector(launchDir, 3.5);
    return { pos: EARTH.center.clone().addScaledVector(side, 15).addScaledVector(launchDir, 1.5).addScaledVector(UP, 2), look };
  })();
  // The ride: the camera travels beside the craft, in its own frame (on the sunlit side of the cells, a
  // little above and ahead), so the craft holds still on screen; near the end it eases round to the
  // arrival view's direction, so leaving it is a straight pull back.
  const rideLocal = new Vector3(0.3, 0.3, 0.9).normalize(); // (across, forward, sunward)
  const chaseTo = arrivalDir.clone();
  // The craft's attitude along the cruise: a frame carried along the path without twisting (parallel
  // transport), starting with the cells towards the Sun. It turns only as the path bends: no flips where
  // the path points at the Sun and "towards the Sun" stops meaning anything sideways.
  const cruiseFrames = (() => {
    const N = 600, frames = [];
    const heading = (t) => cruise(Math.min(t + 1e-4, 1), new Vector3()).sub(cruise(Math.max(t - 1e-4, 0), new Vector3())).normalize();
    let y = heading(0);
    let z = SUN.center.clone().sub(spiralStartPoint).normalize();
    z.addScaledVector(y, -z.dot(y)).normalize();
    const turnStep = new Quaternion(), m4 = new Matrix4();
    for (let i = 0; i <= N; i++) {
      const yNext = heading(i / N);
      turnStep.setFromUnitVectors(y, yNext);
      z.applyQuaternion(turnStep).addScaledVector(yNext, -z.dot(yNext)).normalize();
      y = yNext;
      frames.push(new Quaternion().setFromRotationMatrix(m4.makeBasis(new Vector3().crossVectors(y, z), y, z)));
    }
    return frames;
  })();
  function cruiseAttitude(t, out) {
    const k = MathUtils.clamp(t, 0, 1) * (cruiseFrames.length - 1), i = Math.min(Math.floor(k), cruiseFrames.length - 2);
    return out.copy(cruiseFrames[i]).slerp(cruiseFrames[i + 1], k - i);
  }
  /** its attitude once in orbit: heading along the path, cells towards the Sun */
  function headingAttitude(p, ahead, out) {
    const y = ahead.clone().normalize();
    const z = SUN.center.clone().sub(p).normalize();
    z.addScaledVector(y, -z.dot(y)).normalize();
    return out.setFromRotationMatrix(new Matrix4().makeBasis(new Vector3().crossVectors(y, z), y, z));
  }
  const orbitAttitude = (() => {
    const p = missionPos(2, new Vector3()), ahead = missionPos(2.002, new Vector3()).sub(p);
    return headingAttitude(p, ahead, new Quaternion());
  })();
  // the camera stays rigidly mounted on the craft for the whole ride (blending its direction towards
  // the Solar System's flipped the view where the two pointed nearly opposite ways)
  function bepiChase(at, t, out) {
    return out.copy(rideLocal).applyQuaternion(bepi.group.quaternion);
  }
  // ...and the camera's "up" turns with the craft too (a rigid mount: with the Solar System's up, the
  // camera rolled against the craft as it turned along its path, and the craft seemed to rock), easing
  // back to the Solar System's up as the ride ends. At the start the two agree.
  const rideUpLocal = UP.clone().applyQuaternion(cruiseAttitude(0, new Quaternion()).invert());
  views.bepiUp = () => rideUpLocal.clone().applyQuaternion(bepi.group.quaternion);

  // One continuous path for the whole mission, m: 0→1 launch (from the pad, accelerating),
  // 1→2 the cruise, from 2 round and round the capture orbit (one orbit per unit).
  function missionPos(m, out) {
    if (m <= 1) return hermite(launchPad, launch.d0, spiralStartPoint, launch.d1, Math.max(m, 0) ** 1.6, out);
    if (m <= 2) return cruise(m - 1, out);
    return mercuryOrbit(Math.PI + Math.PI * 2 * (m - 2), out);
  }

  const bepiAhead = new Vector3(), bepiAxes = new Matrix4();
  const mpoFace = new Vector3(), mpoSide = new Vector3();
  /** the cameo's orbit round Mercury: polar, a circle 1.4 radii out, in the plane facing the Mercury stop */
  function mpoPath(m, out) {
    mpoFace.copy(STOPS.mercury.pos).sub(mercury.center);
    mpoFace.addScaledVector(UP, -mpoFace.dot(UP)).normalize();
    mpoSide.crossVectors(UP, mpoFace).normalize();
    const a = Math.PI * 2 * m, r = 1.4 * MERCURY.radius * mercuryScale();
    return out.copy(mercury.center).addScaledVector(UP, r * Math.cos(a)).addScaledVector(mpoSide, r * Math.sin(a));
  }
  let bepiT = 0, orbitClock = 0;
  function placeBepi(u, dt) {
    const L = names.indexOf("launch"), B = names.indexOf("bepi"), A = names.indexOf("arrival");
    if (L < 0 || B < 0 || A < 0) {
      // the cameo: going round Mercury, there while Mercury is
      const Mi = names.indexOf("mercury");
      if (Mi < 0) return;
      const story = 1 - MathUtils.smoothstep(Math.abs(u - Mi), 0.12, 0.28);
      bepi.group.visible = story > 0.001;
      if (!bepi.group.visible) { orbitClock = 0; return; }
      if (!reducedMotion) orbitClock += dt;
      // (MPO's low polar orbit, some 500 to 1500 km up, drawn as a circle seen face on from the stop)
      const m = orbitClock / 9;
      const p = mpoPath(m, bepi.group.position);
      bepi.group.quaternion.copy(orbitAttitude);
      const at = p.clone();
      afterCamera.push(() => {
        bepi.group.scale.setScalar(METRE * BEPI_ENLARGE);
        bepiTracer.draw(at, mpoPath, m, 0.3, story, BEPI_SIZE * METRE * BEPI_ENLARGE);
        captureOrbit.visible = false;
      });
      return;
    }
    // where along the mission: scroll-driven, except going round Mercury (time-driven, once it has arrived)
    let m;
    if (u < B) {
      m = MathUtils.clamp((u - (L - 0.6)) / (B - L + 0.6), 0, 1);
      bepiT = 0;
      orbitClock = 0;
    } else {
      const x = MathUtils.clamp((u - B) / BEPI_RIDE, 0, 1);
      bepiT = x * x * (3 - 2 * x);
      if (bepiT >= 1) {
        if (!reducedMotion) orbitClock += dt;
      } else orbitClock = 0;
      m = 1 + bepiT + orbitClock / ORB.seconds;
    }
    const p = missionPos(m, bepi.group.position);
    // heading from the path itself: orbiters in front, the transfer module and its engines behind;
    // the cells towards the Sun
    missionPos(m + 0.002, bepiAhead).sub(p);
    if (bepiAhead.lengthSq() < 1e-14) missionPos(m - 0.002, bepiAhead).sub(p).negate();
    if (m >= 1 && m <= 2) {
      // along the cruise its frame is carried along the path; over the second half of the ride it turns,
      // smoothly and the shortest way, into the attitude it will hold in orbit (cells to the Sun)
      cruiseAttitude(m - 1, bepi.group.quaternion);
      bepi.group.quaternion.slerp(orbitAttitude, MathUtils.smoothstep(m - 1, 0.5, 1));
    } else if (bepiAhead.lengthSq() > 1e-14) headingAttitude(p, bepiAhead, bepi.group.quaternion);
    // fading in at launch and out after the arrival
    const story = MathUtils.smoothstep(u, L - 0.6, L - 0.45) * (1 - MathUtils.smoothstep(u, A + 0.2, A + 0.7));
    bepi.group.visible = story > 0.001;
    // a bright dot from afar (the model close up), and an evanescent trace behind it.
    // How far back the trace reaches: once captured, only along the orbit (it grows from the arrival point).
    const span = m <= 1 ? Math.min(m, 0.35) : m <= 2 ? 0.035 : Math.min(0.22, 0.02 + (m - 2));
    const at = p.clone();
    afterCamera.push(() => {
      const k = cheatFactor(at);
      bepi.group.scale.setScalar(METRE * BEPI_ENLARGE * k);
      bepiTracer.draw(at, missionPos, m, span, story, BEPI_SIZE * METRE * BEPI_ENLARGE * k);
      // (only once the camera has pulled back to see the whole ellipse: riding along, the camera sits on
      // it and it would show as a line slicing past the spacecraft)
      const back = MathUtils.smoothstep(camera.position.distanceTo(orbitCentre), 8, 12);
      captureOrbit.material.opacity = 0.25 * fx.bOrbit * back;
      captureOrbit.visible = captureOrbit.material.opacity > 0.0025;
    });
  }
  views.bepi = () => {
    const pos = bepi.group.position.clone().addScaledVector(bepiChase(bepi.group.position, bepiT, chaseDir), 42 * METRE * BEPI_ENLARGE);
    return { pos, look: bepi.group.position.clone() };
  };
  // Earth from space, the launch rising off to one side
  // the whole capture orbit in view: centred on the ellipse rather than on Mercury
  const orbitCentre = apoherm.clone().add(mercuryOrbit(0, new Vector3())).multiplyScalar(0.5);
  views.arrival = { pos: orbitCentre.clone().addScaledVector(arrivalDir, 13), look: orbitCentre };

  // Saturn and its rings
  const saturnTilt = new Group();
  saturnTilt.position.copy(SATURN.center);
  saturnTilt.rotation.copy(SATURN_TILT);
  scene.add(saturnTilt);
  // shadows: the rings on Saturn, and Saturn on the rings. Offsets from Saturn's centre, in world axes.
  const saturnShadow = { uSunDir: { value: SUN.center.clone().sub(SATURN.center).normalize() }, uRingNormal: { value: UP.clone().applyEuler(SATURN_TILT) }, uR: { value: SATURN.radius } };
  const withShadow = (material, kind) => {
    material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, saturnShadow);
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nvarying vec3 vRel;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvRel = mat3(modelMatrix) * position;");
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", `#include <common>
          varying vec3 vRel;
          uniform vec3 uSunDir, uRingNormal;
          uniform float uR;
          // how much light the rings let through at a given radius (C ring, B ring, Cassini division, A ring)
          float ringOpacity(float r) {
            r /= uR;
            float o = 0.0;
            o += 0.25 * (smoothstep(1.23, 1.25, r) - smoothstep(1.52, 1.53, r));
            o += 0.85 * (smoothstep(1.52, 1.53, r) - smoothstep(1.94, 1.95, r));
            o += 0.12 * (smoothstep(1.94, 1.95, r) - smoothstep(2.02, 2.03, r));
            o += 0.6 * (smoothstep(2.02, 2.03, r) - smoothstep(2.26, 2.27, r));
            return o;
          }`)
        .replace("#include <dithering_fragment>", kind === "ring"
          ? `#include <dithering_fragment>
            { // in Saturn's shadow?
              float t = dot(-vRel, uSunDir);
              float d = length(vRel + t * uSunDir);
              float lit = t < 0.0 ? 1.0 : smoothstep(uR * 0.97, uR * 1.02, d);
              gl_FragColor.rgb *= mix(0.06, 1.0, lit);
            }`
          : `#include <dithering_fragment>
            { // under the rings' shadow?
              float dn = dot(uSunDir, uRingNormal);
              float t = -dot(vRel, uRingNormal) / (abs(dn) < 1e-4 ? 1e-4 : dn);
              if (t > 0.0) gl_FragColor.rgb *= 1.0 - 0.85 * ringOpacity(length(vRel + t * uSunDir));
            }`);
    };
    return material;
  };
  const saturn = new Mesh(sphere(SATURN.radius), withShadow(new MeshPhongMaterial({ map: tex("saturnmap.jpg"), shininess: 6 }), "planet"));
  saturnTilt.add(saturn);
  spinning.push([saturn, 0.05]);
  const ringTex = tex("saturnringcolortrans.png");
  ringTex.repeat.set(0.5, 1); // the image holds two copies of the ring; use the left one
  const ring = new Mesh(
    new RingGeometry(SATURN.radius * 1.1, SATURN.radius * 2.3, 160, 1),
    withShadow(new MeshPhongMaterial({ map: ringTex, transparent: true, side: DoubleSide, depthWrite: false, shininess: 0 }), "ring"),
  );
  ring.rotation.x = -Math.PI / 2;
  saturnTilt.add(ring);

  // Enceladus (artist's impression of the surface)
  const enceladus = createPlanet({
    loader, textures, center: ENCELADUS.center, radius: ENCELADUS.radius,
    maps: { map: "enceladus.jpg", normal: "moonnormal2k.jpg#enceladus" },
    layers: ENCELADUS_LAYERS,
    // synchronous rotation: tides and libration force the ocean once per orbit, ω = Ω
    waves: [
      { inner: ENCELADUS_LAYERS[0].top, outer: ENCELADUS_LAYERS[1].top, omega: 1, color: [0.85, 0.95, 1.0] },
      // the same shear layers, glowing where they dissipate (resonance step)
      { inner: ENCELADUS_LAYERS[0].top, outer: ENCELADUS_LAYERS[1].top, omega: 1, color: [1.0, 0.36, 0.06], speed: 4, width: 0.04 },
    ],
    spinRate: 0.04,
  });
  scene.add(enceladus.root);

  // --- the icy Galileans in a row (a pause in the flight, to compare them) -------------------------
  // Europa, Ganymede and Callisto, true relative sizes, side by side where Ganymede is; Ganymede is
  // swapped for its row twin in place, the other two glide in from the distance on either side.
  const ROW_ORDER = ["europa", "ganymede", "callisto"];
  const rowMoons = ROW_ORDER.map((name) => {
    const m = GALILEANS.find((g) => g.name === name);
    const planet = createPlanet({ loader, textures, center: new Vector3(), radius: m.radius, maps: { map: `${name}.jpg`, normal: `moonnormal2k.jpg#row-${name}` }, layers: GALILEAN_LAYERS[name], spinRate: 0.03, axis: jUp }); // (spinning about Jupiter's pole, as the real moons do)
    planet.root.visible = false;
    scene.add(planet.root);
    return { name, radius: m.radius, planet, at: new Vector3() };
  });
  const ROW_GAP = 6800 * KM, ROW_BACK = 27000 * KM; // (centre to centre; the camera's distance)
  const rowAxis = new Vector3(), rowView = new Vector3();
  function rowFrame() {
    rowView.copy(views.juiceMap().pos).sub(gPos).normalize(); // (the side the mapping was watched from)
    rowAxis.crossVectors(jUp, rowView).normalize();
  }
  views.row = () => {
    rowFrame();
    return { pos: gPos.clone().addScaledVector(rowView, ROW_BACK), look: gPos.clone() };
  };
  views.probe = () => {
    rowFrame();
    return { pos: gPos.clone().addScaledVector(rowView, 5.2 * GALILEANS[2].radius), look: gPos.clone() };
  };

  // ---- Probing the ocean: three measurements, shown one after another on the cut-open Ganymede ----
  // 0 magnetic induction: Jupiter's field at Ganymede varies (period ~10.5 h); the conducting ocean
  //   answers with an induced dipole, opposed and slightly delayed.
  // 1 tides: the moon's outline stretched towards Jupiter, more and less over the orbit; with an ocean
  //   (blue) far more than without (grey).
  // 2 rotation: the shell's rotation oscillating once per orbit, shown by a line on its surface against a
  //   fixed one; with an ocean beneath, the oscillation is larger.
  // All schematic and greatly exaggerated. The clock runs with time, while the stop is in view.
  const PROBE_S = 11; // seconds per measurement
  let probeClock = 0, probeShown = -1;
  const probeGroup = new Group();
  probeGroup.visible = false;
  scene.add(probeGroup);
  const N_EXT = 9;
  const extGeom = new BufferGeometry();
  extGeom.setAttribute("position", new Float32BufferAttribute(new Float32Array(N_EXT * 4 * 3), 3));
  const extLines = new LineSegments(extGeom, new LineBasicMaterial({ color: 0xc8d2e0, transparent: true, opacity: 0, depthWrite: false }));
  const induced = dipoleLines([1.3, 1.75, 2.4], 4, 0x5fd4f0);
  // (WebGL lines are one pixel wide: the outlines and the surface line are drawn three times, side by side)
  const thick = (n, color, dashed, copies = 3) => {
    const m = dashed ? new LineDashedMaterial({ color, dashSize: 0.05, gapSize: 0.04, transparent: true, opacity: 0, depthWrite: false })
      : new LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false });
    const group = new Group();
    for (let c = 0; c < copies; c++) {
      const g = new BufferGeometry();
      g.setAttribute("position", new Float32BufferAttribute(new Float32Array(n * 3), 3));
      group.add(new Line(g, m));
    }
    group.material = m;
    return group;
  };
  const outline = (color, dashed) => thick(129, color, dashed, dashed ? 1 : 3);
  const tideOcean = outline(0x7fb8ff), tideSolid = outline(0x9aa3ad), tideRef = outline(0xffffff, true);
  const meridian = (color, dashed) => thick(41, color, dashed, dashed ? 1 : 3);
  const libLine = meridian(0x7fb8ff), libRef = meridian(0xffffff, true);
  probeGroup.add(extLines, induced, tideOcean, tideSolid, tideRef, libLine, libRef);
  const probeCard = {
    items: [...document.querySelectorAll("[data-probe]")],
    groups: [...document.querySelectorAll("[data-probe-chart]")],
    cursor: document.querySelector("[data-probe-cursor]"),
  };
  // the charts: two periods across, drawn once
  {
    const wave = (f) => Array.from({ length: 121 }, (_, i) => `${(i * 2.5).toFixed(1)},${f(i / 120).toFixed(1)}`).join(" ");
    const set = (sel, f) => { const el = document.querySelector(sel); if (el) el.setAttribute("points", wave(f)); };
    const S = (x, lag = 0) => Math.sin(2 * Math.PI * (2 * x - lag));
    set("[data-probe-line='ext']", (x) => 32 - 24 * S(x));
    set("[data-probe-line='ind']", (x) => 32 + 13 * S(x, 0.06));
    set("[data-probe-line='tideOcean']", (x) => 32 - 25 * S(x + 0.125));
    set("[data-probe-line='tideSolid']", (x) => 32 - 4 * S(x + 0.125));
    set("[data-probe-line='libOcean']", (x) => 32 - 25 * S(x));
    set("[data-probe-line='libSolid']", (x) => 32 - 7 * S(x));
  }
  let rowSpin = 0; // (the row Ganymede's own turning, so the oscillation can be added to it without a jump)
  const pv = new Vector3(), pa = new Vector3(), pb = new Vector3(), pd = new Vector3(), pq = new Quaternion(), pm = new Matrix4();
  /** each frame, after the camera: which measurement, and its drawing */
  function drawProbes(dt) {
    const P = names.indexOf("ocean-probes"), show = fx.gProbe;
    if (P >= 0 && Math.abs(shown - P) < 0.5 && !reducedMotion) probeClock += dt;
    else if (P >= 0 && Math.abs(shown - P) >= 0.5) probeClock = 0;
    probeGroup.visible = show > 0.01;
    const k = Math.floor(probeClock / PROBE_S) % 3, tau = probeClock % PROBE_S;
    // each one fades in and out at its ends
    const w = show * MathUtils.smoothstep(tau, 0, 0.8) * (1 - MathUtils.smoothstep(tau, PROBE_S - 0.8, PROBE_S));
    const wk = [0, 1, 2].map((i) => (i === k ? w : 0));
    if (k !== probeShown) {
      probeShown = k;
      probeCard.items.forEach((el) => el.classList.toggle("active", +el.dataset.probe === k));
      probeCard.groups.forEach((el) => (el.style.display = +el.dataset.probeChart === k ? "" : "none"));
    }
    const R = GALILEANS[2].radius;
    probeGroup.position.copy(gPos);
    const view = pv.copy(camera.position).sub(gPos).normalize();
    const right = pa.crossVectors(jUp, view).normalize(), up = pb.crossVectors(view, right).normalize();
    // 0: the field. Jupiter's, mostly along the pole, its other part swinging to and fro (period 4 s here)
    const ph = (2 * Math.PI * tau) / 4.4;
    {
      const d = pd.copy(up).multiplyScalar(-1).addScaledVector(right, 0.55 * Math.sin(ph)).normalize();
      const across = new Vector3().crossVectors(d, view).normalize();
      const pos = extGeom.attributes.position, L = 3.4 * R;
      for (let i = 0; i < N_EXT; i++) {
        const o = (i - (N_EXT - 1) / 2) * 0.5 * R, c = Math.sqrt(Math.max(0, (1.08 * R) ** 2 - o * o));
        // two segments, outside the moon
        const a = across.clone().multiplyScalar(o);
        const seg = [[-L, -c], [c, L]];
        seg.forEach(([s0, s1], j) => {
          const p0 = a.clone().addScaledVector(d, s0), p1 = a.clone().addScaledVector(d, s1);
          pos.setXYZ(i * 4 + j * 2, p0.x, p0.y, p0.z);
          pos.setXYZ(i * 4 + j * 2 + 1, p1.x, p1.y, p1.z);
        });
      }
      pos.needsUpdate = true;
      extGeom.computeBoundingSphere();
      extLines.material.opacity = 0.75 * wk[0];
      // the ocean's induced dipole: along the swinging part, opposed to it and a little late
      const m = -Math.sin(ph - 0.35);
      induced.quaternion.setFromUnitVectors(Y_AXIS, right.clone().multiplyScalar(Math.sign(m) || 1));
      induced.scale.setScalar(R);
      induced.userData.material.opacity = 0.9 * wk[0] * Math.abs(m);
    }
    // 1: the tides, in the plane facing us, stretched towards Jupiter (one orbit in 5.5 s here)
    {
      // (drawn in the plane facing us, its long axis level on screen, on Jupiter's side)
      const toJ = right.clone().multiplyScalar(Math.sign(jToJupiter.dot(right)) || 1);
      tideJ = toJ;
      const side = new Vector3().crossVectors(view, toJ).normalize();
      const orbit = (2 * Math.PI * tau) / 5.5;
      const draw = (group, eps) => group.children.forEach((line, n) => {
        const pos = line.geometry.attributes.position;
        for (let i = 0; i <= 128; i++) {
          const a = (i / 128) * Math.PI * 2, c = Math.cos(a);
          const r = (1.06 + 0.004 * (n - 1)) * R * (1 + eps * (1.5 * c * c - 0.5));
          pos.setXYZ(i, r * c * toJ.x + r * Math.sin(a) * side.x, r * c * toJ.y + r * Math.sin(a) * side.y, r * c * toJ.z + r * Math.sin(a) * side.z);
        }
        pos.needsUpdate = true;
        line.geometry.computeBoundingSphere();
      });
      draw(tideOcean, 0.16 + 0.09 * Math.sin(orbit));
      draw(tideSolid, 0.02 + 0.012 * Math.sin(orbit));
      draw(tideRef, 0);
      tideRef.children[0].computeLineDistances();
      tideRef.material.dashSize = 0.06 * R; tideRef.material.gapSize = 0.05 * R;
      tideOcean.material.opacity = wk[1];
      tideSolid.material.opacity = 0.9 * wk[1];
      tideRef.material.opacity = 0.45 * wk[1];
    }
    // 2: the shell's rotation, oscillating (one orbit in 5.5 s here): a line on the surface, and the
    // same line where it would be without the oscillation
    {
      const lib = 0.3 * Math.sin((2 * Math.PI * tau) / 5.5) * Math.min(1, wk[2] / Math.max(show, 1e-3) * 1.2);
      rowLib = lib;
      pq.setFromUnitVectors(Y_AXIS, jUp);
      const local = view.clone().applyQuaternion(pq.clone().invert());
      const phiCam = Math.atan2(-local.z, local.x);
      const draw = (group, extra) => group.children.forEach((line, n) => {
        const pos = line.geometry.attributes.position;
        for (let i = 0; i <= 40; i++) {
          const th = 0.12 * Math.PI + (0.76 * Math.PI * i) / 40, ph2 = phiCam - 1.05 + extra + 0.004 * (n - 1);
          const v = new Vector3(Math.sin(th) * Math.cos(ph2), Math.cos(th), -Math.sin(th) * Math.sin(ph2)).multiplyScalar(1.006 * R).applyQuaternion(pq);
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        pos.needsUpdate = true;
        line.geometry.computeBoundingSphere();
      });
      draw(libLine, lib);
      draw(libRef, 0);
      libRef.children[0].computeLineDistances();
      libRef.material.dashSize = 0.05 * R; libRef.material.gapSize = 0.04 * R;
      libLine.material.opacity = wk[2];
      libLine.material.depthTest = libRef.material.depthTest = true;
      libRef.material.opacity = 0.85 * wk[2];
      probeRot = wk[2];
    }
    drawJupiterTag(wk[1]);
    if (probeCard.cursor && show > 0.01) {
      const x = ((tau % 5.5) / 5.5) * 150 + (k === 0 ? 0 : 0);
      probeCard.cursor.setAttribute("x1", x.toFixed(1));
      probeCard.cursor.setAttribute("x2", x.toFixed(1));
    }
    // (Europa and Callisto out of the way while Ganymede is alone)
    for (const m of rowMoons) if (m.name !== "ganymede" && show > 0.9) m.planet.root.visible = false;
  }
  let rowLib = 0, probeRot = 0, tideJ = null;
  const jupiterTag = document.createElement("div");
  jupiterTag.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;color:#cbd5e1;font-size:0.75rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;transition:opacity 0.3s";
  document.body.append(jupiterTag);
  function drawJupiterTag(w) {
    if (!tideJ || w < 0.02) { jupiterTag.style.opacity = "0"; return; }
    const p = gPos.clone().addScaledVector(tideJ, 1.55 * GALILEANS[2].radius).project(camera);
    const left = Math.sign(tideJ.dot(new Vector3(1, 0, 0).applyQuaternion(camera.quaternion))) < 0;
    jupiterTag.textContent = left ? "← Jupiter" : "Jupiter →";
    jupiterTag.style.opacity = w.toFixed(2);
    jupiterTag.style.transform = `translate(${((p.x + 1) / 2) * innerWidth}px, ${((1 - p.y) / 2) * innerHeight}px) translate(${left ? "-100%" : "0"}, -50%)`;
  }

  function drawRow() {
    const t = fx.gRow, on = t > 0.001;
    for (const [i, m] of rowMoons.entries()) {
      const real = galileans.find((g) => g.name === m.name);
      m.planet.root.visible = on;
      real.mesh.visible = !(t > 0.3 || (on && m.name !== "ganymede"));
      if (!on) continue;
      rowFrame();
      const slot = gPos.clone().addScaledVector(rowAxis, (i - 1) * ROW_GAP);
      if (m.name === "ganymede") {
        m.at.copy(gPos);
        m.fade = MathUtils.smoothstep(t, 0, 0.3); // (fading in over the real one)
      } else {
        // from far behind the row, on its own side, gliding forward into place
        const from = slot.clone().addScaledVector(rowView, -400000 * KM).addScaledVector(rowAxis, (i - 1) * 150000 * KM);
        m.at.copy(from).lerp(slot, 1 - (1 - MathUtils.clamp(t, 0, 1)) ** 3);
        m.fade = 1;
      }
      m.planet.setCenter(m.at);
    }
  }
  {
    const n = enceladus.surface.material.normalMap; // fine relief, tiled small
    n.wrapS = n.wrapT = RepeatWrapping;
    n.repeat.set(6, 3);
    enceladus.surface.material.normalScale.set(0.4, 0.4);
  }
  const OCEAN = { low: new Color(ENCELADUS_LAYERS[1].low), high: new Color(ENCELADUS_LAYERS[1].high), hotLow: new Color("#4a1d3a"), hotHigh: new Color("#b4532a") };
  const plumes = makePlumes(ENCELADUS.center, ENCELADUS.radius);
  scene.add(plumes.points);
  // schematic response of the ocean to tidal forcing: resonances with its inertial modes
  const PEAKS = [[0.2, 1], [0.47, 0.5], [0.66, 0.8], [0.85, 0.35]];
  const response = (x) => 0.06 + 0.04 * x + PEAKS.reduce((sum, [xk, a]) => sum + a / (1 + ((x - xk) / 0.022) ** 2), 0);
  // the sweep pauses on each peak, and between peaks, then moves on (and back)
  const SWEEP = [0.06, 0.2, 0.33, 0.47, 0.56, 0.66, 0.76, 0.85, 0.95];
  const sweepAt = (t) => {
    const legs = SWEEP.length - 1, leg = Math.floor(t / 2.4) % (2 * legs);
    const [i, j] = leg < legs ? [leg, leg + 1] : [2 * legs - leg, 2 * legs - leg - 1];
    return MathUtils.lerp(SWEEP[i], SWEEP[j], MathUtils.smoothstep((t / 2.4) % 1, 0.55, 1));
  };
  const chart = { curve: document.querySelector("[data-response]"), sweep: document.querySelector("[data-sweep]") };
  if (chart.curve) {
    const pts = [];
    for (let i = 0; i <= 300; i++) pts.push(`${i},${(88 - 80 * Math.min(response(i / 300), 1.05)).toFixed(1)}`);
    chart.curve.setAttribute("points", pts.join(" "));
  }

  // --- things drawn over the scene ----------------------------------------------
  const overlay = {
    date: document.querySelector(".journey-date"),
    passes: document.querySelector(".journey-passes"),
    labels: document.querySelector(".journey-labels"),
    chapters: [...document.querySelectorAll(".journey-chapters a")], // acts and their parts
  };
  // three acts: the Earth; space missions (BepiColombo, JUICE); beyond (Enceladus, the Sun), and their parts
  const PART_FULL = { launch: "bepi", bepi: "bepi", arrival: "bepi", mercury: "bepi", "mercury-orbit": "bepi", "juice-cruise": "juice", jupiter: "juice", juice: "juice", "juice-map": "juice", "juice-gravity": "juice", "juice-field": "juice", "ocean-worlds": "icy", "ocean-depth": "icy", enceladus: "enceladus", "enceladus-ocean": "enceladus", "enceladus-resonance": "enceladus", sun: "sun", end: "sun" };
  const PART = { "bepi-pass": "mercury", "juice-pass": "jupiter", "juice-tour": "jupiter", mercury: "mercury", ganymede: "jupiter", "ocean-worlds": "jupiter", "ocean-depth": "jupiter", "ocean-probes": "jupiter", "enceladus-ocean": "enceladus", "enceladus-resonance": "enceladus", sun: "sun", end: "sun" };
  const ACT = { mercury: "mercury", jupiter: "jupiter", enceladus: "enceladus", sun: "sun" };
  const parts = [...document.querySelectorAll(".journey-parts")];
  // (name, where, how the label sits against its point: inner planets are close together on the map)
  // (the moons' tags give way to JUICE's path soon after its tour begins)
  const mapTime = () => fx.xMap, moonTime = () => fx.jOrbits * (tourMode ? 1 - tourMode.ramp * MathUtils.smoothstep(tourMode.clock, 0.004, 0.025) : 1) * (1 - MathUtils.smoothstep(tourT, 0.004, 0.025)); // (names gone once the tour is under way)
  const moonAt = (name) => {
    const p = new Vector3();
    return () => galileans.find((m) => m.name === name).mesh.getWorldPosition(p);
  };
  const labelled = [
    ["Sun", () => SUN.center, "-50%, 60%", mapTime], ["Mercury", () => mercuryPos, "-115%, -50%", mapTime], ["Earth", () => EARTH.center, "15%, -50%", mapTime],
    ["Jupiter", () => JUPITER.center, "-50%, -170%", mapTime], ["Saturn", () => SATURN.center, "-50%, -170%", mapTime],
    // light name tags on the Galilean moons, in the Jupiter overview
    ...["Io", "Europa", "Ganymede", "Callisto"].map((n) => [n, moonAt(n.toLowerCase()), "-50%, -190%", moonTime, "moon"]),
    // and under the moons of the row
    ...rowMoons.map((m) => [m.name[0].toUpperCase() + m.name.slice(1), () => m.at.clone().addScaledVector(jUp, -m.radius * 1.25), "-50%, 0%", () => MathUtils.smoothstep(fx.gRow, 0.7, 1) * (1 - fx.gProbe), "moon"]),
  ].map(([name, at, anchor, when, kind]) => {
    const el = document.createElement("span");
    el.textContent = name;
    if (kind) el.className = kind;
    overlay.labels?.append(el);
    return { el, at, anchor, when };
  });
  const projected = new Vector3();
  let lastChapter = null;
  let lastDate = "";
  /** the date during JUICE's tour (k: the sample shown, or −1) */
  function drawDate(k) {
    if (!overlay.date) return;
    const vis = k >= 0 ? fx.jOrbits * (1 - inFlight) * (tourMode ? tourMode.ramp : 1) : 0;
    overlay.date.style.opacity = vis.toFixed(2);
    if (vis < 0.01) return;
    const text = realDate(k);
    if (text !== lastDate) overlay.date.firstElementChild.textContent = lastDate = text;
  }
  // --- JUICE's tour, a side trip: a timeline slider (days since 1 July 2031), with milestones -----
  // that fade in above it as the date nears them
  const tourUI = {
    panel: document.querySelector(".journey-tour"),
    range: document.querySelector(".journey-tour-range"),
    marks: document.querySelector(".journey-tour-marks"),
    open: document.querySelector(".journey-tour-open"),
    close: document.querySelector(".journey-tour-close"),
    milestones: [...document.querySelectorAll(".journey-tour-milestone")],
  };
  let placeMilestones = () => {};
  if (tourUI.panel && tourUI.range && tourUI.open) {
    const dayOf = (iso) => Date.parse(iso) / 864e5 + 2440587.5 - real.jd0;
    const clockAt = (day) => {
      const k = MathUtils.clamp(day / real.step, 0, real.K - 1), i = Math.min(Math.floor(k), real.K - 2);
      return MathUtils.lerp(real.cum[i], real.cum[i + 1], k - i);
    };
    let days = 0, ready = false;
    function setup() {
      days = (real.K - 1) * real.step;
      tourUI.range.max = String(days);
      // year ticks and milestone dots along the track
      const at = (d) => `${(100 * d) / days}%`;
      for (const y of [2032, 2033, 2034]) {
        const t = document.createElement("span");
        t.className = "year";
        t.style.left = at(dayOf(`${y}-01-01`));
        t.textContent = y;
        tourUI.marks.append(t);
      }
      for (const m of tourUI.milestones) {
        m.day = dayOf(m.dataset.date);
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.style.left = at(m.day);
        tourUI.marks.append(dot);
        m.dot = dot;
      }
      tourUI.open.hidden = false;
      ready = true;
    }
    const wait = setInterval(() => { if (real) { clearInterval(wait); setup(); } }, 300);
    function fromRange() {
      const d = Number(tourUI.range.value);
      if (tourMode && !tourMode.closing) tourMode.target = clockAt(d);
      tourUI.range.setAttribute("aria-valuetext", realDate(d / real.step));
      placeMilestones();
    }
    // each milestone shows while the date is near it (the first and last also before and after)
    placeMilestones = () => {
      if (!ready) return;
      const d = Number(tourUI.range.value), w = tourUI.marks.clientWidth;
      for (const [i, m] of tourUI.milestones.entries()) {
        let gap = Math.abs(d - m.day);
        if ((i === 0 && d < m.day) || (i === tourUI.milestones.length - 1 && d > m.day)) gap = 0;
        const o = 1 - MathUtils.smoothstep(gap, 25, 70);
        m.style.opacity = o.toFixed(2);
        m.style.visibility = o > 0.01 ? "visible" : "hidden";
        m.dot.classList.toggle("near", o > 0.5);
        // above its dot, kept on screen
        const half = m.offsetWidth / 2, x = (m.day / days) * w;
        m.style.left = `${MathUtils.clamp(x, half, w - half)}px`;
      }
    };
    tourUI.range.addEventListener("input", fromRange);
    addEventListener("resize", placeMilestones);
    function openTour() {
      if (!ready) return;
      const here = Math.max(0, storyClock(shown)); // (where the story has JUICE)
      tourMode = { clock: tourMode?.clock ?? here, target: here, ramp: tourMode?.ramp ?? 0, closing: false, back: here };
      document.documentElement.classList.add("journey-touring");
      tourUI.panel.hidden = false;
      tourUI.range.value = String(realIndex(tourMode.back) * real.step); // (where the story left JUICE)
      fromRange();
      tourUI.range.focus({ preventScroll: true });
    }
    function closeTour() {
      if (!tourMode) return;
      tourMode.closing = true;
      tourMode.target = tourMode.back; // JUICE flies its tour back to where the story left it, as the story resumes
      document.documentElement.classList.remove("journey-touring");
      tourUI.panel.hidden = true;
      tourUI.open.focus({ preventScroll: true });
    }
    tourUI.open.addEventListener("click", openTour);
    tourUI.close?.addEventListener("click", closeTour);
    addEventListener("keydown", (e) => { if (e.key === "Escape" && tourMode && !tourMode.closing) closeTour(); });
    // a mouse wheel or trackpad moves through time too (the page itself doesn't scroll meanwhile)
    addEventListener("wheel", (e) => {
      if (!tourMode || tourMode.closing) return;
      e.preventDefault();
      const step = (e.deltaX + e.deltaY) * (e.deltaMode === 1 ? 16 : 1) * 0.12; // days
      tourUI.range.value = String(MathUtils.clamp(Number(tourUI.range.value) + step, 0, days));
      fromRange();
    }, { passive: false });
  }

  let lastPasses = "";
  /** while mapping: which pass, and how long JUICE has been at it */
  function drawPasses(k, show) {
    if (!overlay.passes) return;
    const vis = k > 0.02 ? show * (1 - inFlight) : 0;
    overlay.passes.style.opacity = vis.toFixed(2);
    if (vis < 0.01) return;
    const hours = Math.round(k * MAP_ORBIT_H), days = Math.floor(hours / 24);
    const text = `Pass ${Math.min(MAP_PASSES * MAP_STOPS.length, Math.floor(k) + 1)} · ${days ? `${days} d ` : ""}${hours % 24} h`;
    if (text !== lastPasses) overlay.passes.firstElementChild.textContent = lastPasses = text;
  }
  function drawOverlay(u) {
    // chapter bar
    const part = PART[names[Math.round(u)]] ?? "earth", act = ACT[part] ?? "earth";
    if (part !== lastChapter) {
      for (const a of overlay.chapters) a.setAttribute("aria-current", String(a.dataset.chapter === act || a.dataset.part === part));
      for (const p of parts) { const open = p.dataset.act === act; p.classList.toggle("open", open); p.inert = !open; }
      lastChapter = part;
    }
    // labels on the map at the end
    const rect = canvas.getBoundingClientRect();
    for (const l of labelled) {
      const shown = l.when();
      if (shown < 0.01) {
        l.el.style.opacity = "0";
        continue;
      }
      projected.copy(l.at()).project(camera);
      const visible = projected.z < 1 && Math.abs(projected.x) < 1.1 && Math.abs(projected.y) < 1.1;
      l.el.style.opacity = visible ? shown.toFixed(2) : "0";
      l.el.style.transform = `translate(${((projected.x + 1) / 2) * rect.width}px, ${((1 - projected.y) / 2) * rect.height}px) translate(${l.anchor})`;
    }
  }

  // --- camera path -------------------------------------------------------------
  // Most stops are fixed points; a stop with `follow` is placed each frame (it rides along with something).
  const names = sections.map((s) => s.dataset.stop);
  const stops = names.map((name, i) => ({
    def: STOPS[name] ?? STOPS.earth,
    cardOnLeft: i % 2 === 0, // cards alternate left/right on wide screens (CSS :nth-child)
    fx: Object.fromEntries(FX_KEYS.map((k) => [k, FX[name]?.[k] ?? 0])),
    pos: new Vector3(), posNarrow: new Vector3(), lookWide: new Vector3(), lookNarrow: new Vector3(),
  }));

  // Mercury's state, which following stops depend on
  const mercuryPos = new Vector3();
  let mercuryAngle = 0;

  const forward = new Vector3(), right = new Vector3();
  function placeStops() {
    for (const s of stops) {
      const d = s.def;
      let pos = d.pos, look = d.look;
      if (d.follow) ({ pos, look } = d.follow());
      s.pos.copy(pos);
      (s.target ??= new Vector3()).copy(look);
      forward.copy(look).sub(pos).normalize();
      right.crossVectors(forward, UP).normalize();
      s.lookWide.copy(look); // (the captions have their own column now: the subject sits in the middle of the scene)
      s.lookNarrow.copy(look); // phones: the scene has its own window above the captions, so no shift
      s.posNarrow.copy(look).lerp(pos, d.narrowBack ?? 1.15); // a little further back in the phone's smaller window
    }
  }

  let narrow = innerWidth < 768;
  // which stop we're at, as a fractional index, from where the panels are.
  // Wide screens: a stop is reached when its panel is centred. Phones: when its
  // caption reaches the top of the text area (the panel's top is at the top of the screen).
  function stopIndex() {
    const middle = scrollY + innerHeight / 2;
    const centres = sections.map((s) => (narrow ? s.offsetTop + innerHeight / 2 : s.offsetTop + s.offsetHeight / 2));
    if (middle <= centres[0]) return 0;
    for (let i = 0; i < centres.length - 1; i++) {
      if (middle < centres[i + 1]) {
        const f = (middle - centres[i]) / (centres[i + 1] - centres[i]);
        // linger a little at each stop (longer on phones, where captions are read while scrolling)
        return i + (narrow ? MathUtils.smoothstep(f, 0.35, 0.95) : MathUtils.smoothstep(f, 0.15, 0.85));
      }
    }
    return centres.length - 1;
  }

  const fx = Object.fromEntries(FX_KEYS.map((k) => [k, 0]));
  function effectsAt(u) {
    const i = Math.min(Math.floor(u), stops.length - 1);
    const j = Math.min(i + 1, stops.length - 1);
    let f = u - i;
    const keep = KEEP()[names[i]];
    if (keep && j !== i) f = Math.max(0, (f - keep[0]) / (1 - keep[0]));
    // effects switch off in the first half of a transition and on in the second,
    // so one finishes (e.g. a cut closing) before the next begins
    for (const k of FX_KEYS) {
      const from = stops[i].fx[k], to = stops[j].fx[k];
      const g = to < from ? MathUtils.smoothstep(f, 0, 0.5) : to > from ? MathUtils.smoothstep(f, 0.5, 1) : f;
      fx[k] = MathUtils.lerp(from, to, g);
    }
  }

  // The camera between two stops. Short hops: a straight line. Long flights (between
  // bodies, across real distances): leave and arrive in proportion to the distance
  // (a zoom out, then in), turning towards the destination on the way.
  const wantPos = new Vector3(), wantLook = new Vector3();
  const dA = new Vector3(), dB = new Vector3(), q = new Quaternion(), qPart = new Quaternion();
  let inFlight = 0; // 0 at stops, up to 1 in the middle of a long flight
  let warp = 0; // up to 1 in the middle of an interplanetary flight
  let rideLock = false, rideUp = null, holding = false, zoomToGanymede = null; // (holding: the camera still at a stop while the story moves) // riding along: the camera aims exactly at the craft (smoothing its turn made it sway)
  let dissolve = 0, dissolveSide = -1, lastSide = -1, dissolving = false; // dimming between a close-up and a far view
  // a move between a spacecraft close up and a far view: a zoom of thousands of times or more
  const isBigZoom = (rA, rB) => Math.max(rA, rB) / Math.min(rA, rB) > 3000 && Math.min(rA, rB) < 0.02;
  const DISSOLVES = false; // (dissolving through black on those moves: tried, and it took the life out of them)
  const isDissolve = (rA, rB) => DISSOLVES && isBigZoom(rA, rB);
  // Instead, on those moves the spacecraft is drawn larger the further the camera is: so it shrinks on
  // screen gently (as the distance to the power 0.25, not 1) and stays there as the anchor while the
  // view opens up around it; the cheat eases off before the far view, where it's back to its true size.
  let craftCheat = 0, craftNear = 1;
  function cheatFactor(at) {
    if (craftCheat < 1e-3) return 1;
    const d = camera.position.distanceTo(at);
    return 1 + craftCheat * (Math.max(1, d / craftNear) ** 0.75 - 1);
  }
  const flightDir = new Vector3();
  function cameraAt(u) {
    inFlight = 0;
    warp = 0;
    dissolve = 0;
    dissolving = false;
    craftCheat = 0;
    rideLock = false;
    rideUp = null;
    // (the row of icy moons: Jupiter's pole up on screen, some 30° off the scene's up, so the row lies level)
    if (fx.gRow > 0.001) rideUp = camera.up.clone().lerp(jUp, fx.gRow).normalize();
    holding = false;
    zoomToGanymede = null;
    placeStops();
    let i = Math.min(Math.floor(u), stops.length - 1);
    let j = Math.min(i + 1, stops.length - 1);
    let f = u - i;
    // A spacecraft's own stop sits halfway along the flight between two worlds: the camera keeps to that
    // one flight, from the stop before to the stop after, and rests at its middle, the craft alongside.
    if (PASSES[names[i]] && i > 0 && j > i) { i -= 1; f = (1 + f) / 2; }
    else if (PASSES[names[j]] && j + 1 < stops.length) { j += 1; f /= 2; }
    // Riding along with a spacecraft (the camera stays with it, then lets it go), or staying put while
    // something happens (JUICE's tour): for that share of the scroll the camera keeps to the stop.
    const keep = KEEP()[names[i]];
    if (keep && j !== i) {
      const [share, riding] = keep;
      if (f < share) {
        wantPos.copy(narrow ? stops[i].posNarrow : stops[i].pos);
        wantLook.copy(narrow ? stops[i].lookNarrow : stops[i].lookWide);
        if (riding) inFlight = MathUtils.smoothstep(f, 0, 0.06) * (1 - MathUtils.smoothstep(f, share - 0.04, share));
        else holding = true;
        rideLock = riding;
        rideUp = names[i] === "bepi" ? views.bepiUp() : null;
        return;
      }
      f = (f - share) / (1 - share);
    }
    const A = stops[i], B = stops[j];
    const pA = narrow ? A.posNarrow : A.pos, pB = narrow ? B.posNarrow : B.pos;
    const lA = narrow ? A.lookNarrow : A.lookWide, lB = narrow ? B.lookNarrow : B.lookWide;
    const rA = pA.distanceTo(A.target), rB = pB.distanceTo(B.target);
    const D = pA.distanceTo(pB);
    // The jump from Mercury to JUICE: turn on the spot to face it (slowly, while still at Mercury), then
    // fly straight at it, never turning, the stars streaking past at speed, JUICE dead ahead and growing
    // (drawn larger with distance) until the camera arrives right behind it, where the ride begins.
    // In to Ganymede (cheating time): centre on it early, while still far out, then dolly straight in
    if (real && !tourMode && names[i] === "jupiter" && names[j] === "juice") {
      const g = gPos, a0 = pA.clone().sub(g), a1 = pB.clone().sub(g);
      const r = Math.exp(MathUtils.lerp(Math.log(a0.length()), Math.log(a1.length()), ease(f)));
      a0.normalize().applyQuaternion(new Quaternion().slerp(new Quaternion().setFromUnitVectors(a0.clone().normalize(), a1.normalize()), ease(f)));
      wantPos.copy(g).addScaledVector(a0, r);
      wantLook.copy(lA).lerp(g, MathUtils.smoothstep(f, 0, 0.3));
      zoomToGanymede = { d0: pA.distanceTo(g), d1: pB.distanceTo(g) };
      return;
    }
    if (names[i] === "mercury" && names[j] === "juice-cruise") {
      const PIVOT = 0.22;
      flightDir.copy(lB).sub(pA).normalize();
      craftCheat = 1;
      craftNear = rB;
      if (f < PIVOT) {
        const w = ease(f / PIVOT);
        wantPos.copy(pA);
        dA.copy(lA).sub(pA);
        const dist = Math.exp(MathUtils.lerp(Math.log(dA.length()), Math.log(lB.distanceTo(pA)), w));
        q.setFromUnitVectors(dA.normalize(), flightDir);
        qPart.identity().slerp(q, w);
        wantLook.copy(dA.applyQuaternion(qPart)).multiplyScalar(dist).add(pA);
        return;
      }
      const g = (f - PIVOT) / (1 - PIVOT), L = pA.distanceTo(pB);
      // out of Mercury's view and in behind JUICE, each at a steady rate in log distance
      const x = g < 0.5 ? rA * ((L / (2 * rA) + 1) ** (g / 0.5) - 1) : L - rB * ((L / (2 * rB) + 1) ** ((1 - g) / 0.5) - 1);
      wantPos.copy(pA).addScaledVector(flightDir, x);
      wantLook.copy(lB);
      warp = MathUtils.smoothstep(g, 0.12, 0.3) * (1 - MathUtils.smoothstep(g, 0.7, 0.88));
      inFlight = warp;
      return;
    }
    // (when the far view lies beyond the craft, seen from the close-up, the camera flies past the craft
    // on towards it instead: an ordinary flight, below, with the craft enlarged as it falls behind)
    const flyPast = false && isBigZoom(rA, rB) && (() => { // (tried: the craft is lost too soon)
      const closeIsA = rA < rB, C = (closeIsA ? A : B).target, pF = closeIsA ? pB : pA, lF = closeIsA ? lB : lA;
      return pF.distanceTo(lF) < C.distanceTo(lF);
    })();
    if (flyPast) {
      const closeIsA = rA < rB, g = closeIsA ? f : 1 - f;
      craftCheat = 1 - MathUtils.smoothstep(g, 0.5, 0.9);
      craftNear = Math.min(rA, rB);
      // the way there: out of the close-up slowly, then faster, steady in log distance from each end
      const x = f < 0.5 ? rA * ((D / (2 * rA) + 1) ** (f / 0.5) - 1) : D - rB * ((D / (2 * rB) + 1) ** ((1 - f) / 0.5) - 1);
      // (on a curve: setting off towards the far view's subject, arriving straight along its line of
      // sight, a dolly in, so the subject stays ahead all the way and the camera never has to swing)
      const lFar = closeIsA ? lB : lA, pClose = closeIsA ? pA : pB, pFar = closeIsA ? pB : pA;
      const t0 = lFar.clone().sub(pClose).normalize().multiplyScalar(D * 0.7), t1 = lFar.clone().sub(pFar).normalize().multiplyScalar(D * 0.7);
      if (closeIsA) hermite(pA, t0, pB, t1, x / D, wantPos);
      else hermite(pA, t1.negate(), pB, t0.negate(), x / D, wantPos);
      // looking at the craft at first, then early on at the far view's subject, tracked all the way in
      const C = (closeIsA ? A : B).target, lF = closeIsA ? lB : lA;
      const toCraft = C.clone().sub(wantPos), toFar = lF.clone().sub(wantPos);
      const look = MathUtils.smoothstep(g, 0.04, 0.4), dist = Math.exp(MathUtils.lerp(Math.log(toCraft.length()), Math.log(toFar.length()), look));
      q.setFromUnitVectors(toCraft.normalize(), toFar.normalize());
      qPart.identity().slerp(q, look);
      wantLook.copy(toCraft.applyQuaternion(qPart)).multiplyScalar(dist).add(wantPos);
      return;
    }
    if (isBigZoom(rA, rB) && !DISSOLVES && !flyPast) {
      // A pull back from a spacecraft (or the reverse, closing in on one): the camera backs away from
      // the craft keeping it in the middle, swinging round to the far view's side as it goes; only in
      // the last stretch does it turn to the far view's own subject.
      const closeIsA = rA < rB, g = closeIsA ? f : 1 - f;
      const C = (closeIsA ? A : B).target, pC = closeIsA ? pA : pB, pF = closeIsA ? pB : pA, lF = closeIsA ? lB : lA;
      dA.copy(pC).sub(C);
      dB.copy(pF).sub(C);
      const r0 = dA.length(), r1 = dB.length();
      q.setFromUnitVectors(dA.normalize(), dB.normalize());
      qPart.identity().slerp(q, MathUtils.smoothstep(g, 0.05, 0.95));
      const r = Math.exp(MathUtils.lerp(Math.log(r0), Math.log(r1), ease(g)));
      wantPos.copy(C).addScaledVector(dA.applyQuaternion(qPart), r);
      // looking at the craft, then (towards the far end) at the far view's subject
      const toCraft = C.clone().sub(wantPos), toFar = lF.clone().sub(wantPos);
      const look = MathUtils.smoothstep(g, 0.62, 1), dist = MathUtils.lerp(toCraft.length(), toFar.length(), look);
      q.setFromUnitVectors(toCraft.normalize(), toFar.normalize());
      qPart.identity().slerp(q, look);
      wantLook.copy(toCraft.applyQuaternion(qPart)).multiplyScalar(dist).add(wantPos);
      craftCheat = 1 - MathUtils.smoothstep(g, 0.8, 1);
      craftNear = Math.min(rA, rB);
      return;
    }
    // Between a spacecraft close up and a far view (a zoom of thousands of times or more, no flight can
    // make that gentle), dissolve instead: dim out on one view, come back on the other.
    if (isDissolve(rA, rB)) {
      const B2 = f >= 0.5;
      wantPos.copy(B2 ? pB : pA);
      wantLook.copy(B2 ? lB : lA);
      dissolve = MathUtils.smoothstep(f, 0.25, 0.45) * (1 - MathUtils.smoothstep(f, 0.55, 0.75));
      dissolveSide = B2 ? j : i;
      dissolving = true;
      return;
    }
    // The view turns once, steadily, from where it looked at the start to where it will look at the end
    // (re-aiming at the targets from the moving camera made close things swing the whole view around).
    dA.copy(lA).sub(pA);
    dB.copy(lB).sub(pB);
    const lookFrom = dA.length(), lookTo = dB.length();
    q.setFromUnitVectors(dA.normalize(), dB.normalize());
    const steady = (w) => {
      qPart.identity().slerp(q, w);
      wantLook.copy(dA).applyQuaternion(qPart).multiplyScalar(Math.exp(MathUtils.lerp(Math.log(lookFrom + 1e-9), Math.log(lookTo + 1e-9), w))).add(wantPos);
    };
    if (D < 4 * Math.min(rA, rB)) {
      wantPos.lerpVectors(pA, pB, f);
      // short hops around one body keep it centred, unless the view has a long way to turn
      if (q.angleTo(qPart.identity()) < 0.6) wantLook.lerpVectors(lA, lB, f);
      else steady(MathUtils.smoothstep(f, 0, 1));
    } else {
      // out from A and in to B at a steady rate in log distance
      const g = f; // (distance grows by a constant factor per step: an even zoom out, and an even zoom in)
      const x = g < 0.5
        ? rA * ((D / (2 * rA) + 1) ** (g / 0.5) - 1) // distance from A
        : D - rB * ((D / (2 * rB) + 1) ** ((1 - g) / 0.5) - 1);
      inFlight = MathUtils.smoothstep(f, 0.12, 0.3) * (1 - MathUtils.smoothstep(f, 0.7, 0.88));
      wantPos.lerpVectors(pA, pB, x / D);
      // between planets: a warp through the empty middle
      // (not on flights to, from or with a spacecraft: there, the craft itself is the sense of motion)
      if (D > 5000) {
        warp = MathUtils.smoothstep(f, 0.2, 0.36) * (1 - MathUtils.smoothstep(f, 0.64, 0.8));
        flightDir.copy(pB).sub(pA).normalize();
      }
      // turn towards the destination slowly, over the whole flight
      steady(MathUtils.smoothstep(f, 0.04, 0.96));
    }
  }

  // On the way to Mercury we overtake BepiColombo, and on the way to Ganymede JUICE: halfway there, in
  // the warp, the craft slides past close by, heading the same way, with its name. A cheat (the craft
  // is placed around the camera, not on its real way), but it puts each mission in the story, in passing.
  const PASSES = { "bepi-pass": { name: "BepiColombo", note: "ESA · JAXA, on its way to Mercury" }, "juice-pass": { name: "JUICE", note: "ESA, on its way to Jupiter" } };
  const flybyLabel = document.createElement("div");
  flybyLabel.className = "journey-flyby";
  flybyLabel.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;color:#e5e7eb;font-size:0.8rem;letter-spacing:0.08em;text-transform:uppercase;white-space:nowrap;opacity:0;z-index:2;text-shadow:0 0 6px #000";
  document.body.append(flybyLabel);
  let flybyNear = Infinity;
  const flyAt = new Vector3(), flyFwd = new Vector3(), flyRight = new Vector3(), flyUp = new Vector3();
  function flyby(u) {
    flybyNear = Infinity;
    // s: from −1 (the world before) through 0 (the craft's own stop) to 1 (the world after)
    const i = Math.floor(u), f = u - i;
    const at = PASSES[names[i]] ? names[i] : PASSES[names[i + 1]] ? names[i + 1] : null;
    const s = at === names[i] ? f : f - 1;
    const which = PASSES[at];
    if (!which || Math.abs(s) >= 0.6) { flybyLabel.style.opacity = "0"; return; }
    const isBepi = at === "bepi-pass";
    const craft = isBepi ? bepi.group : juice;
    const L = isBepi ? BEPI_SIZE * METRE * BEPI_ENLARGE : JUICE_SIZE * METRE * JUICE_ENLARGE;
    afterCamera.push(() => {
      camera.updateMatrixWorld();
      flyFwd.set(0, 0, -1).applyQuaternion(camera.quaternion);
      flyRight.set(1, 0, 0).applyQuaternion(camera.quaternion);
      flyUp.set(0, 1, 0).applyQuaternion(camera.quaternion);
      // in from far ahead to alongside, slightly to the right and below, where it keeps pace with us
      // at its stop (bobbing gently), then on past and behind as we pull ahead
      const w = ease(Math.min(Math.abs(s) / 0.6, 1));
      const ahead = L * (s < 0 ? MathUtils.lerp(5.5, 30, w) : MathUtils.lerp(5.5, -10, w));
      const side = L * MathUtils.lerp(narrow ? 0.3 : 0.95, 2.6, w), bob = reducedMotion ? 0 : 0.06 * L * Math.sin(performance.now() / 1600);
      flyAt.copy(camera.position).addScaledVector(flyFwd, ahead).addScaledVector(flyRight, side).addScaledVector(flyUp, -0.3 * L + bob);
      craft.position.copy(flyAt);
      craft.visible = true;
      if (isBepi) {
        headingAttitude(flyAt, flightDir, bepi.group.quaternion);
        bepi.group.scale.setScalar(METRE * BEPI_ENLARGE);
        bepiTracer.draw(flyAt, mpoPath, 0, 0, 0, L);
      } else {
        const z = SUN.center.clone().sub(flyAt).normalize(), x = new Vector3().crossVectors(jUp, z).normalize(), y = new Vector3().crossVectors(z, x);
        juice.quaternion.setFromRotationMatrix(juiceAxes.makeBasis(x, y, z));
        juice.scale.setScalar(METRE * JUICE_ENLARGE);
        juiceTracer.draw(flyAt, juicePath, 0, 0, 0, L);
      }
      flybyNear = Math.max(camera.position.distanceTo(flyAt) - L, 0.2 * L);
      // its name, under it, while it's ahead
      const scr = flyAt.clone().addScaledVector(flyUp, -0.8 * L).project(camera);
      const show = 1 - MathUtils.smoothstep(Math.abs(s), 0.3, 0.45);
      flybyLabel.innerHTML = `${which.name} <span style="opacity:.6;text-transform:none;letter-spacing:0">· ${which.note}</span>`;
      flybyLabel.style.opacity = ahead > 0 && !narrow ? show.toFixed(3) : "0"; // (on phones the caption already names it)
      flybyLabel.style.transform = `translate(${((scr.x + 1) / 2) * innerWidth}px, ${((1 - scr.y) / 2) * innerHeight}px) translate(-50%, 0)`;
    });
  }

  // bodies, for keeping the camera out of them and setting its near plane
  const bodyCentre = new Vector3();
  function bodies() {
    return [
      [EARTH.center, EARTH.radius], [mercury.center, MERCURY.radius * mercuryScale() * 1.5], [SUN.center, SUN.radius],
      [JUPITER.center, JUPITER.radius], [SATURN.center, SATURN.radius * 2.3], [ENCELADUS.center, ENCELADUS.radius],
      [gPos, ganymede.radius * moonScale()], [juice.position, juice.visible ? JUICE_SIZE * METRE * JUICE_ENLARGE : 0], [MOON.center, MOON.radius],
      [bepi.group.position, bepi.group.visible ? BEPI_SIZE * METRE * BEPI_ENLARGE : 0],
    ];
  }
  function keepOut(p) {
    let nearest = Infinity;
    for (const [c, r] of bodies()) {
      bodyCentre.copy(p).sub(c);
      const d = bodyCentre.length();
      if (d < 1.12 * r) p.copy(c).addScaledVector(bodyCentre.normalize(), 1.12 * r);
      nearest = Math.min(nearest, Math.max(p.distanceTo(c) - r, 0.02 * r));
    }
    return nearest;
  }

  // How fast the story may move at each point, so that what's seen turns at most about 40° a second and
  // zooms at most a factor ten a second (long flights excepted: see below), however fast the page is scrolled. Worked out from
  // the camera's own path (with the nearest thing in view, planet or spacecraft, as the measure of zoom).
  const TURN_PER_S = 0.7, ZOOM_PER_S = Math.log(10), PACE_STEP = 0.01, PACE_MAX = 1.1, STRETCH_MAX = 3.5, RIDE_PACE = 0.2, WATCH_PACE = 0.12; // (watching the map build up: slower still)
  let pace = null, paceStale = true; // (rebuilt when the layout or the data change)
  function buildPace() {
    paceStale = false;
    const n = Math.round((stops.length - 1) / PACE_STEP) + 1, dirs = [], logs = [], dissolves = [];
    const keep = tourMode;
    tourMode = null;
    for (let i = 0; i < n; i++) {
      const u = i * PACE_STEP;
      effectsAt(u); placeJuice(u); placeBepi(u, 0); cameraAt(u);
      const p = wantPos.clone();
      let near = keepOut(p);
      if (bepi.group.visible) near = Math.min(near, p.distanceTo(bepi.group.position));
      if (juice.visible) near = Math.min(near, p.distanceTo(juice.position));
      dirs.push(wantLook.clone().sub(p).normalize());
      dissolves.push(dissolving);
      logs.push(Math.log(Math.max(near, 1e-9)));
    }
    tourMode = keep;
    afterCamera.length = 0; // (nothing to draw from these trial placements)
    // time needed per unit of story at each point, so that turning and zooming are spread evenly...
    const need = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1), du = (b - a) * PACE_STEP;
      const t = Math.max(dirs[a].angleTo(dirs[b]) / du / TURN_PER_S, Math.abs(logs[b] - logs[a]) / du / ZOOM_PER_S);
      need[i] = MathUtils.clamp(t, 1 / PACE_MAX, 40); // (a jump in the path is no reason to stop dead)
      if (dissolves[i]) need[i] = 1 / 0.45; // (a dissolve: a steady couple of seconds, whatever the jump)
    }
    // ...smoothed (no sudden braking), and no stretch longer than a few seconds (the long flights, out of a
    // close-up and into another one, would otherwise take a quarter of a minute: they speed up, evenly)
    pace = new Float32Array(n);
    const smooth = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      let sum = 0, w = 0;
      for (let j = Math.max(0, i - 3); j <= Math.min(n - 1, i + 3); j++) { sum += need[j]; w++; }
      smooth[i] = sum / w;
    }
    const per = 1 / PACE_STEP;
    for (let s0 = 0; s0 < n - 1; s0 += per) {
      let total = 0;
      for (let i = s0; i < Math.min(s0 + per, n); i++) total += smooth[i] * PACE_STEP;
      const squeeze = Math.max(1, total / STRETCH_MAX);
      for (let i = s0; i < Math.min(s0 + per, n); i++) pace[i] = Math.min(PACE_MAX, squeeze / smooth[i]);
    }
    pace[n - 1] = pace[n - 2];
    // Riding along, the camera hardly moves, but things happen (the module letting go, the craft turning
    // in): a ride is watched, at no more than a fifth of a stop a second.
    const holds = KEEP();
    for (let i = 0; i < n; i++) {
      const u = i * PACE_STEP, at = Math.floor(u), ride = holds[names[at]];
      if (ride && u - at < ride[0] + 0.05) pace[i] = Math.min(pace[i], ride[1] ? RIDE_PACE : WATCH_PACE);
    }
  }
  const paceAt = (u) => Math.min(pace ? pace[MathUtils.clamp(Math.round(u / PACE_STEP), 0, pace.length - 1)] : PACE_MAX, flybyPace(u));
  // (slower past an overtaken spacecraft: some 4 seconds to see it go by, whatever the scroll)
  function flybyPace(u) {
    const i = Math.floor(u), f = u - i;
    return (PASSES[names[i]] && f < 0.6) || (PASSES[names[i + 1]] && f > 0.4) ? 0.26 : Infinity;
  }

  function resize() {
    if (narrow !== innerWidth < 768) paceStale = true;
    narrow = innerWidth < 768; // matches the CSS breakpoint (48rem)
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = camera.aspect < 1 ? 52 : 45; // a little wider in a tall window
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(canvas);
  resize();

  // in the orbit view Mercury is drawn enlarged, or it would be far too small to see
  const mercuryScale = () => 1 + (MERCURY.enlarge - 1) * fx.mOrbit;

  // Mercury's own clock: orbit (mean anomaly) and spin
  let orbitPhase = 0, mercurySpin = 0;

  function moveMercury(dt, now) {
    // it travels its orbit in the 3:2 step
    const w = fx.mOrbit;
    if (w < 0.001) orbitPhase = 0;
    else if (!reducedMotion) orbitPhase += (dt * Math.PI * 2 * w) / ORBIT.secondsPerOrbit;
    const M = orbitPhase * MathUtils.smoothstep(w, 0, 1);
    orbitPosition(M, mercuryPos);
    if (!reducedMotion) mercurySpin = (mercurySpin + dt * 0.05 * (1 - w)) % (Math.PI * 2);
    // librations: the spin rocks back and forth, hugely exaggerated
    const rock = reducedMotion ? 0 : 0.35 * fx.mLibration * Math.sin((now / 1000) * ((Math.PI * 2) / 3));
    // 3:2 resonance: the long axis points at the Sun at every perihelion (alternating ends).
    // On the way in, Mercury turns to that orientation.
    let toAligned = PERIHELION_SPIN - mercurySpin;
    toAligned = Math.atan2(Math.sin(toAligned), Math.cos(toAligned)); // shortest way round
    mercuryAngle = mercurySpin + toAligned * MathUtils.smoothstep(w, 0, 1) + 1.5 * M + rock;
    return M;
  }

  // Textures: the Earth's previews first (the page asks for them early); the scene fades in once
  // the Earth has its colours, then its full maps follow. Everything else loads as the reader
  // approaches it: previews three stops ahead, full maps a stop and a half ahead.
  const reveal = () => canvas.classList.add("ready");
  queue.load("earth", 1).then(() => {
    reveal();
    return queue.load("earth", 2);
  });
  setTimeout(reveal, 3000); // in case the previews are slow: show the scene anyway
  const chapterStart = { mercury: names.indexOf("bepi-pass"), sun: names.indexOf("sun"), jupiter: names.indexOf("juice-pass"), saturn: names.indexOf("enceladus-ocean") };
  function loadAhead(u) {
    for (const [group, at] of Object.entries(chapterStart)) {
      if (at < 0) continue;
      if (u > at - 3) queue.load(group, 1);
      if (u > at - 1.5) queue.load(group, 2);
    }
  }

  // pause while the journey is scrolled out of view
  let onScreen = true;
  new IntersectionObserver(([e]) => (onScreen = e.isIntersecting)).observe(document.querySelector(".journey"));

  // If frames stay slow, render fewer pixels (and more again when they recover). Not during the
  // first seconds, when textures are still arriving and frames are always slow.
  const startedAt = performance.now();
  let slowTime = 0, frames = 0;
  function adapt(dt) {
    if (performance.now() - startedAt < 10000) return;
    frames++;
    slowTime += dt;
    if (frames < 120) return;
    const average = slowTime / frames;
    frames = 0;
    slowTime = 0;
    const next = average > 1 / 24 ? Math.max(1.25, pixelRatio - 0.25) : average < 1 / 55 ? Math.min(maxRatio, pixelRatio + 0.25) : pixelRatio;
    if (next !== pixelRatio) {
      pixelRatio = next;
      renderer.setPixelRatio(pixelRatio);
      resize();
    }
  }

  // the scroll position, eased: everything (camera and effects) follows it, so they stay in step
  let shown = stopIndex(), shownSpeed = 0;
  // Wide screens: the captions sit still in their column, one at a time; the one for where the scene is
  // shows, and hands over to the next halfway between their stops (fading out with a slight rise, the
  // next fading in from slightly below). Phones keep their captions scrolling with the page.
  const cardEls = sections.map((s) => s.querySelector(".journey-card")), cardShown = cardEls.map(() => -1);
  function dimCards(u) {
    // (where the scene is: at a stop that holds, it stays there until its hold is over)
    const at = Math.floor(u), hold = KEEP()[names[at]];
    if (hold && u - at < hold[0]) u = at;
    else if (hold) u = at + (u - at - hold[0]) / (1 - hold[0]);
    for (const [i, card] of cardEls.entries()) {
      if (!card) continue;
      if (narrow) {
        if (cardShown[i] !== 1) { card.style.opacity = ""; card.style.visibility = ""; card.style.transform = ""; cardShown[i] = 1; }
        continue;
      }
      const d = u - i;
      const o = 1 - MathUtils.smoothstep(Math.abs(d), 0.38, 0.5); // (one out, then the other in: never both)
      if (Math.abs(o - cardShown[i]) < 0.005) continue;
      cardShown[i] = o;
      card.style.opacity = o.toFixed(3);
      card.style.visibility = o > 0.01 ? "visible" : "hidden";
      card.style.pointerEvents = o > 0.5 ? "" : "none";
      card.style.transform = `translateY(calc(-50% + ${((d >= 0 ? -1 : 1) * 14 * (1 - o)).toFixed(1)}px))`;
    }
  }
  const SPRING = 2.4; // (how briskly the story follows the page: about half a second to settle)

  // Chapter buttons cut rather than scroll: a quick fade to black, a jump straight to the chapter
  // (camera snapped into place), and a fade back in. No flight through everything in between.
  const dissolveVeil = document.createElement("div");
  dissolveVeil.className = "journey-dissolve";
  dissolveVeil.setAttribute("aria-hidden", "true");
  canvas.after(dissolveVeil); // (over the scene, under the captions)
  const veil = document.createElement("div");
  veil.className = "journey-veil";
  veil.setAttribute("aria-hidden", "true");
  document.body.append(veil);
  let cutting = false;
  for (const a of overlay.chapters) {
    a.addEventListener("click", (e) => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target || cutting) return;
      e.preventDefault();
      const jump = () => {
        // where stopIndex() puts this stop: its panel centred (wide) or its top at the top (phones)
        const top = narrow ? target.offsetTop : target.offsetTop + target.offsetHeight / 2 - innerHeight / 2;
        scrollTo({ top, behavior: "instant" });
        shown = stopIndex();
        shownSpeed = 0;
        firstFrame = true;
        history.replaceState(null, "", a.getAttribute("href"));
        loadAhead(shown);
      };
      cut(jump);
    });
  }
  // The mouse wheel glides the page rather than stepping it, and moves it about half as far a notch
  // (a notched wheel otherwise jolts story and cards alike). Touch, keys and the scroll bar are left as
  // they are. (While JUICE's tour is open, the wheel moves its timeline instead: see there.)
  const WHEEL_GAIN = 0.5;
  let wheelTo = null, wheelLast = 0;
  addEventListener("wheel", (e) => {
    if (tourMode || e.ctrlKey || reducedMotion) return;
    e.preventDefault();
    const unit = e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1;
    const top = document.documentElement.scrollHeight - innerHeight;
    wheelTo = MathUtils.clamp((wheelTo ?? scrollY) + e.deltaY * unit * WHEEL_GAIN, 0, top);
    if (!wheelLast) { wheelLast = performance.now(); requestAnimationFrame(glide); }
  }, { passive: false });
  function glide(now) {
    if (wheelTo === null) { wheelLast = 0; return; }
    const dt = Math.min((now - wheelLast) / 1000, 0.1);
    wheelLast = now;
    const y = scrollY + (wheelTo - scrollY) * (1 - Math.exp(-dt * 7));
    scrollTo({ top: Math.abs(wheelTo - y) < 0.5 ? wheelTo : y, behavior: "instant" });
    if (Math.abs(wheelTo - scrollY) < 0.5) { wheelTo = null; wheelLast = 0; return; }
    requestAnimationFrame(glide);
  }
  // (anything else moving the page meanwhile, a key or the scroll bar, takes over from the wheel)
  addEventListener("keydown", () => { wheelTo = null; });
  addEventListener("pointerdown", () => { wheelTo = null; });

  /** fade to black, do the jump, and fade back in once the new view has drawn */
  function cut(jump) {
    cutting = true;
    if (reducedMotion) { jump(); cutting = false; return; }
    veil.classList.add("on");
    setTimeout(() => {
      jump();
      requestAnimationFrame(() => requestAnimationFrame(() => { veil.classList.remove("on"); cutting = false; }));
    }, 320);
  }
  // A long way to go at once (the scroll bar dragged, a link into the page, a big fling): cut there too,
  // rather than flying through everything in between at the speed limit.
  function cutToScroll() {
    cut(() => { shown = stopIndex(); shownSpeed = 0; firstFrame = true; loadAhead(shown); });
  }
  effectsAt(shown);
  moveMercury(0, performance.now());
  window.__probe = () => ({ fly: [bepi.group.visible, +camera.position.distanceTo(bepi.group.position).toFixed(3), +camera.near.toExponential(2), flybyLabel.style.opacity], bepi: [bepi.group.visible, ...bepi.group.position.toArray().map((x) => +x.toFixed(2))], merc: mercury.center.toArray().map((x) => +x.toFixed(2)), cam: camera.position.toArray().map((x) => +x.toFixed(2)), shown, goal: stopIndex(), at: names[Math.floor(shown)], pace: paceAt(shown) });

  const lookMatrix = new Matrix4(), wantTurn = new Quaternion();
  let firstFrame = true;
  let last = performance.now();
  function frame(now) {
    const dt = Math.min(now - last, 100) / 1000;
    last = now;
    if (!onScreen) {
      requestAnimationFrame(frame);
      return;
    }
    adapt(dt);
    const time = reducedMotion ? 0 : now / 1000;
    const k = reducedMotion ? 1 : 1 - Math.exp(-dt * 3);
    if (paceStale) buildPace();
    const goal = tourMode ? names.indexOf("jupiter") : stopIndex();
    if (!cutting && !tourMode && Math.abs(goal - shown) > 2.5) cutToScroll();
    // (with a speed limit, set by what is seen: a hard fling down the page still travels, never whips)
    // The story follows the page like a critically damped spring: its speed never jumps, so a notched
    // wheel's steps (or any sudden scroll) become one smooth glide.
    const limit = paceAt(shown), before = shown;
    if (reducedMotion) { shown += (goal - shown) * k; shownSpeed = 0; }
    else {
      const w = SPRING;
      shownSpeed += (w * w * (goal - shown) - 2 * w * shownSpeed) * dt;
      shownSpeed = MathUtils.clamp(shownSpeed, -limit, limit);
      shown += shownSpeed * dt;
      if (Math.abs(goal - shown) < 1e-4 && Math.abs(shownSpeed) < 1e-3) { shown = goal; shownSpeed = 0; }
    }
    // calm when the story moves at less than a fifth of its limit there (traces fade out at once when not)
    const busy = dt > 0 ? Math.abs(shown - before) / dt / limit : 0;
    const calmWant = holding ? 1 : 1 - MathUtils.smoothstep(busy, 0.05, 0.2);
    calm = calmWant < calm ? calmWant : calm + (calmWant - calm) * (1 - Math.exp(-dt * 1.5));
    if (tourMode) {
      tourMode.clock += (tourMode.target - tourMode.clock) * (reducedMotion ? 1 : 1 - Math.exp(-dt * (tourMode.closing ? 5 : 2.2)));
      tourMode.ramp = MathUtils.clamp(tourMode.ramp + (tourMode.closing ? -dt : dt) / 0.8, 0, 1);
      if (tourMode.closing && tourMode.ramp === 0 && Math.abs(tourMode.clock - tourMode.back) < 0.002) tourMode = null;
    }
    effectsAt(shown);
    cameoPasses = fx.gMap > 0.01 ? Math.min(cameoPasses + (reducedMotion ? 0 : dt * 0.8 * fx.gMap), 200) : 0;
    loadAhead(shown);
    dimCards(shown);
    const M = moveMercury(dt, now);
    mercury.setCenter(mercuryPos);
    // During JUICE's tour (and its descent, and at Ganymede) the scroll is the clock: the moons move
    // with it, in step (Io, Europa, Ganymede: 4, 2 and 1 orbits), Ganymede doing four laps and a bit
    // so that it reaches MEET just as JUICE ends its loops there. Otherwise they run with time.
    const tourJ = names.indexOf("jupiter"), tourG = names.indexOf("juice");
    const tourEnd = chapterEnd();
    const touring = tourJ >= 0 && shown > tourJ - 0.02 && shown < tourEnd + 0.6;
    const clock = tourClockAt(shown);
    // with the real tour: the moons where they really are on the date (easing there from where they were)
    const story = tourMode ? -1 : storyClock(shown);
    // (from the tour's stop through the icy moons: the moons where they are on the tour's date)
    const T = names.indexOf("juice-tour"), lastJ = Math.max(names.indexOf("ganymede"), names.indexOf("ocean-depth"), names.indexOf("ocean-probes"));
    if (real && T >= 0) {
      // Both clocks run with time while the tour is in view, and simply stop when it isn't: scrolling
      // never winds them on. (Back before it, out of sight, they start over for the next visit.)
      if (shown < T - 0.6) { tourT = 0; moonClock = 0; }
      else if (reducedMotion) { tourT = 1; moonClock = TOUR_SECONDS; }
      else if (Math.abs(shown - T) < 0.5) { tourT = Math.min(1, tourT + dt / TOUR_SECONDS); moonClock += dt; }
    }
    const ownTour = real && T >= 0 && shown > T - 0.6 && shown < lastJ + 0.7;
    ownTourOn = ownTour;
    const realK = ownTour ? realIndex(tourT) : real && tourMode ? realIndex(clock) : story >= 0 ? realIndex(story) : -1;
    if (realK < 0) tourOffset = null;
    else if (!tourMode) tourOffset = { s0: 0, phase: [0, 0, 0, 0], story: true }; // (in the story: just where they are)
    else if (!tourOffset || tourOffset.story) {
      const wrap = (a) => a - Math.PI * 2 * Math.round(a / (Math.PI * 2));
      tourOffset = { s0: clock, phase: galileans.map((m, i) => wrap(m.phase - dataPhase(i, realK))) };
    }
    drawDate(realK);
    const gStop = names.indexOf("ganymede"), rowEnd = Math.max(names.indexOf("ocean-depth"), names.indexOf("ocean-probes"));
    // (and from Ganymede through the row of icy moons: they hold still while we look)
    const still = (real && touring && !tourMode) || (gStop >= 0 && shown > gStop - 0.7 && shown < Math.max(gStop, rowEnd) + 0.7);
    if (!touring || realK >= 0 || still) moonLatch = null;
    else if (!moonLatch) {
      const lag = (((MEET - ganymede.phase) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
      moonLatch = { start: galileans.map((m) => m.phase), advance: lag + Math.PI * 2 };
    }
    const tourClock = touring ? ease(clock) : 0;

    // the Galilean moons go round, in step (always: they can be seen from afar)
    for (const m of galileans) {
      if (realK >= 0) m.phase = scenePhase(galileans.indexOf(m), realK, tourMode ? clock : 0);
      else if (moonLatch) m.phase = moonLatch.start[galileans.indexOf(m)] + moonLatch.advance * (GALILEANS[2].period / m.period) * tourClock;
      else if (!reducedMotion && !still) m.phase += (dt * Math.PI * 2 * (GALILEANS[0].period / m.period)) / SECONDS_PER_IO_ORBIT;
      // (through the Jupiter card, the scroll turns them too: Ganymede once round, Europa twice, Io four times)
      if (realK < 0 && !moonLatch && tourJ >= 0) {
        const s = MathUtils.clamp(shown - tourJ, -0.4, JUP_HOLD);
        m.phase += Math.PI * 2 * (GALILEANS[2].period / m.period) * (s - (m.scrollTurn ?? s));
        m.scrollTurn = s;
      }
      m.mesh.scale.setScalar(moonScale());
      if (m === ganymede && zoomToGanymede) {
        const { d0, d1 } = zoomToGanymede, d = MathUtils.clamp(camera.position.distanceTo(gPos), d1, d0);
        const L = Math.log(d0 / d) / Math.log(d0 / d1);
        m.mesh.scale.setScalar(MOON_ENLARGE ** (1 - L));
      }
      const p = m.phase;
      m.shown = p;
      m.mesh.position.set(Math.cos(p) * m.orbit, 0, -Math.sin(p) * m.orbit);
      m.mesh.rotation.y = p; // tidally locked: the same face towards Jupiter
      if (m === ganymede) m.mesh.rotation.y += MAP_SPIN * mapPassesAt(shown); // (turning under JUICE's orbit)
      m.line.material.opacity = 0.35 * fx.jOrbits;
      m.line.visible = fx.jOrbits > 0.001;
    }

    placeJuice(shown);
    drawMap(shown);
    placeBepi(shown, dt);
    flyby(shown);
    // engines off, then the module lets go, mid-ride (so it can be watched drifting away)
    const separation = Math.max(0, (bepiT - 0.52) / 0.3); // (it keeps coasting until it's out of sight)
    bepi.update({ thrust: 1 - MathUtils.smoothstep(bepiT, 0.42, 0.5), separation, time });
    // the module, once let go, is only removed when it has left the view or shrunk to a few pixels
    afterCamera.push(() => {
      // (decided afresh each frame, so scrolling back brings it back into view, drifting the other way)
      mtmGone = false;
      if (separation > 0) {
        bepi.group.updateMatrixWorld(true);
        bepi.mtm.getWorldPosition(mtmAt);
        camera.updateMatrixWorld();
        const px = (BEPI_SIZE * METRE * BEPI_ENLARGE * 1.2 / camera.position.distanceTo(mtmAt)) * renderer.domElement.height / Math.tan(MathUtils.degToRad(camera.fov / 2));
        // out of view? (in the camera's own space: in front is −z, whatever the depth buffer does)
        mtmAt.applyMatrix4(camera.matrixWorldInverse);
        const t = Math.tan(MathUtils.degToRad(camera.fov / 2)), ahead = -mtmAt.z;
        const outside = ahead <= 0 || Math.abs(mtmAt.x / ahead) > 1.15 * t * camera.aspect || Math.abs(mtmAt.y / ahead) > 1.15 * t;
        if (px < 3 || outside) mtmGone = true;
      }
      bepi.mtm.visible = !mtmGone;
    });
    cameraAt(shown);
    const clearance = keepOut(wantPos);
    camera.position.copy(wantPos);
    // turn smoothly, never faster than about 45° a second (unless reduced motion asks for none)
    lookMatrix.lookAt(camera.position, wantLook, rideUp ?? camera.up);
    wantTurn.setFromRotationMatrix(lookMatrix);
    // (switching views under a dissolve: the camera faces the new view at once)
    if (dissolve > 0 && dissolveSide !== lastSide && lastSide !== -1) firstFrame = true;
    lastSide = dissolve > 0 ? dissolveSide : -1;
    dissolveVeil.style.opacity = dissolve.toFixed(3);
    if (reducedMotion || firstFrame || rideLock) camera.quaternion.copy(wantTurn);
    else {
      const angle = camera.quaternion.angleTo(wantTurn);
      camera.quaternion.rotateTowards(wantTurn, Math.min(angle * (1 - Math.exp(-dt * 6)), dt * 0.8));
    }
    firstFrame = false;
    camera.near = MathUtils.clamp(0.05 * clearance, 1e-7, 5e3);
    camera.updateProjectionMatrix();
    for (const draw of afterCamera) draw();
    afterCamera.length = 0;
    // (a spacecraft overtaken mid-flight, close by: the near plane must not cut it)
    if (flybyNear < Infinity) { camera.near = Math.min(camera.near, 0.05 * flybyNear); camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();
    stars.position.copy(camera.position);
    stars.scale.setScalar(camera.near * 0.25);
    drawWarp();

    earth.update({ dt, time, camera, wobble: fx.eWobble, cut: fx.eCut, waves: fx.eWaves, field: fx.eField, core: fx.eCore, animate: !reducedMotion });

    // in the orbit view: drawn bigger, to be seen, and stretched, to show which way it faces
    mercury.update({
      dt, time, camera, cut: fx.mCut, waves: fx.mWaves, field: fx.mField, animate: !reducedMotion,
      spinAngle: mercuryAngle, scale: mercuryScale(), stretch: 1 + 0.45 * fx.mOrbit,
    });
    if (counters.orbits && fx.mOrbit > 0.5) {
      const orbits = M / (Math.PI * 2);
      counters.orbits.textContent = orbits.toFixed(1);
      counters.spins.textContent = (1.5 * orbits).toFixed(1);
    }

    // Enceladus: the forcing frequency sweeps across the response; the shear layers glow at resonance
    const x = reducedMotion ? PEAKS[0][0] : sweepAt(now / 1000);
    const heat = MathUtils.clamp((response(x) - 0.1) / 0.8, 0, 1);
    drawRow();
    for (const m of rowMoons) {
      if (!m.planet.root.visible) continue;
      const isG = m.name === "ganymede";
      if (isG && !reducedMotion) rowSpin += dt * 0.03;
      m.planet.update({
        dt, time, camera, cut: fx.gDepth * (isG ? 1 - 0.55 * probeRot : 1), cutTurn: (35 * Math.PI) / 180, animate: !reducedMotion, scale: isG ? 1.003 : 1,
        spinAngle: isG ? rowSpin + rowLib : undefined,
      });
      m.planet.surface.material.opacity = m.fade ?? 1;
    }
    drawProbes(dt);
    enceladus.update({
      dt, time, camera, cut: fx.nCut, cutTurn: (35 * Math.PI) / 180, animate: !reducedMotion,
      waves: [fx.nWaves * (1 - 0.6 * heat * fx.nHeat), fx.nHeat * heat],
    });
    plumes.update(time, fx.nPlume);
    // the ocean warms where the waves dissipate (illustrative)
    const warm = heat * fx.nHeat;
    enceladus.layerColors.uLow.value[1].set(OCEAN.low).lerp(OCEAN.hotLow, warm);
    enceladus.layerColors.uHigh.value[1].set(OCEAN.high).lerp(OCEAN.hotHigh, warm);
    if (chart.sweep && fx.nHeat > 0.5) {
      chart.sweep.setAttribute("x1", (x * 300).toFixed(1));
      chart.sweep.setAttribute("x2", (x * 300).toFixed(1));
    }

    // the map at the end
    for (const line of mapLines) {
      line.material.opacity = 0.35 * fx.xMap;
      line.visible = fx.xMap > 0.001;
    }
    orbitLine.material.opacity = Math.max(0.6 * fx.mOrbit, 0.35 * fx.xMap);
    markers.visible = fx.xMap > 0.001;
    markers.material.opacity = fx.xMap;
    markerBodies.forEach(([c], i) => markers.geometry.attributes.position.setXYZ(i, ...(c ?? mercuryPos).toArray()));
    markers.geometry.attributes.position.needsUpdate = true;

    drawOverlay(shown);

    // the Sun stays a bright star from far away
    glow.scale.setScalar(Math.max(SUN.radius * 4.2, camera.position.distanceTo(SUN.center) * 0.05));
    // the atmosphere fades while the Earth is cut open or see-through
    atmosphereMat.uniforms.uOpacity.value = 1 - Math.max(fx.eCut, fx.eCore, fx.eField * 0.6);
    atmosphere.visible = atmosphereMat.uniforms.uOpacity.value > 0.01;
    atmosphereMat.uniforms.uSun.value.copy(SUN_DIR).transformDirection(camera.matrixWorldInverse);

    if (!reducedMotion) for (const [body, speed] of spinning) body.rotation.y += dt * speed;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// Jets of vapour and ice from the fractures near Enceladus's south pole
function makePlumes(center, radius, count = 700) {
  const seeds = [], dirs = [], starts = [];
  for (let i = 0; i < count; i++) {
    // start: along one of four parallel fractures near the south pole
    const stripe = (i % 4) - 1.5;
    const along = (Math.random() - 0.5) * 0.9;
    const sx = along * 0.5, sz = stripe * 0.13 + along * 0.08;
    const start = new Vector3(sx, -Math.sqrt(Math.max(0, 1 - sx * sx - sz * sz)), sz).multiplyScalar(radius);
    const dir = new Vector3((Math.random() - 0.5) * 0.5 + sx * 0.6, -1, (Math.random() - 0.5) * 0.5 + sz * 0.6).normalize();
    starts.push(start.x, start.y, start.z);
    dirs.push(dir.x, dir.y, dir.z);
    seeds.push(Math.random());
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(starts, 3));
  g.setAttribute("aDir", new Float32BufferAttribute(dirs, 3));
  g.setAttribute("aSeed", new Float32BufferAttribute(seeds, 1));
  const mat = new ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uLength: { value: radius * 2.2 }, uScale: { value: innerHeight * 0.5 }, uSize: { value: radius / 0.6 } },
    vertexShader: /* glsl */ `
      attribute vec3 aDir;
      attribute float aSeed;
      uniform float uTime, uLength, uScale, uSize;
      varying float vAge;
      void main() {
        float age = fract(aSeed + uTime * (0.12 + 0.06 * aSeed));
        vAge = age;
        vec3 p = position + aDir * uLength * age * (0.6 + 0.4 * aSeed);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (0.02 + 0.07 * age) * uSize * uScale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying float vAge;
      void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float a = (1.0 - smoothstep(0.0, 1.0, d)) * pow(1.0 - vAge, 2.0) * smoothstep(0.0, 0.05, vAge);
        gl_FragColor = vec4(vec3(0.85, 0.93, 1.0), a * 0.55 * uOpacity);
      }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
  });
  const points = new Points(g, mat);
  points.position.copy(center);
  points.frustumCulled = false;
  return {
    points,
    update(time, amount) {
      points.visible = amount > 0.001;
      mat.uniforms.uTime.value = time;
      mat.uniforms.uOpacity.value = amount;
      mat.uniforms.uScale.value = innerHeight * 0.5;
    },
  };
}
