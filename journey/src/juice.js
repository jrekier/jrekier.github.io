// ESA's Jupiter Icy Moons Explorer, simplified, to scale, in metres.
// Main body 2.86 × 4.35 × 4.09 m; two cross-shaped solar wings of five 2.5 × 3.5 m panels each
// (27.1 m tip to tip); a 2.5 m high-gain dish; the 16 m RIME radar antenna across the top;
// the 10.6 m magnetometer boom (J-MAG, RPWI); four 3 m RPWI probe booms; the main engine.
//
// Axes: x along the solar wings, y up (RIME on top, engine below), z towards the dish.
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, SphereGeometry, LatheGeometry, ConeGeometry,
  MeshPhongMaterial, CanvasTexture, SRGBColorSpace, DoubleSide, Vector2, Vector3, Quaternion, Color,
} from "three";

function panelTexture() {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 184; // 3.5 × 2.5 m
  const g = c.getContext("2d");
  g.fillStyle = "#c9ccd1"; // frame
  g.fillRect(0, 0, c.width, c.height);
  const cols = 14, rows = 10, pad = 6, gap = 2;
  const w = (c.width - 2 * pad - (cols - 1) * gap) / cols, h = (c.height - 2 * pad - (rows - 1) * gap) / rows;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const shade = 22 + Math.random() * 10;
      g.fillStyle = `hsl(226 55% ${shade}%)`;
      g.fillRect(pad + i * (w + gap), pad + j * (h + gap), w, h);
    }
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function foilTexture() {
  // crinkled gold multi-layer insulation
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#b8862b";
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * 256, y = Math.random() * 256, r = 4 + Math.random() * 18;
    g.fillStyle = `hsla(${38 + Math.random() * 8} ${60 + Math.random() * 25}% ${40 + Math.random() * 30}% / 0.35)`;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + r, y + r * (Math.random() - 0.5));
    g.lineTo(x + r * (Math.random() - 0.5), y + r);
    g.fill();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

// a thin rod from a to b
function rod(a, b, radius, material) {
  const d = new Vector3().subVectors(b, a);
  const m = new Mesh(new CylinderGeometry(radius, radius, d.length(), 8), material);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.copy(new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), d.normalize()));
  return m;
}

export function createJuice() {
  const juice = new Group();
  const v = (x, y, z) => new Vector3(x, y, z);
  const foil = new MeshPhongMaterial({ map: foilTexture(), shininess: 60, specular: new Color(0x886622) });
  const white = new MeshPhongMaterial({ color: 0xe8e8e4, shininess: 20 });
  const metal = new MeshPhongMaterial({ color: 0x9aa0a8, shininess: 50, specular: new Color(0x777777) });
  const dark = new MeshPhongMaterial({ color: 0x2a2a2e, shininess: 10 });
  const cells = new MeshPhongMaterial({ map: panelTexture(), shininess: 70, specular: new Color(0x445577) });
  const panelBack = new MeshPhongMaterial({ color: 0x6b6f75, shininess: 10 });

  // main body
  const BX = 2.86, BY = 4.35, BZ = 4.09;
  juice.add(new Mesh(new BoxGeometry(BX, BY, BZ), foil));

  // solar wings: three panels in a row, and one above and one below the middle one
  for (const side of [-1, 1]) {
    const wing = new Group();
    juice.add(wing);
    const root = BX / 2;
    wing.add(rod(v(side * root, 0, 0), v(side * (root + 1.3), 0, 0), 0.06, metal)); // yoke
    const PW = 3.5, PH = 2.5, T = 0.05;
    const place = (cx, cy) => {
      const panel = new Group();
      const front = new Mesh(new BoxGeometry(PW, PH, T), [panelBack, panelBack, panelBack, panelBack, cells, panelBack]);
      panel.add(front);
      panel.position.set(side * cx, cy, 0);
      wing.add(panel);
    };
    const x0 = root + 1.3 + PW / 2;
    for (let i = 0; i < 3; i++) place(x0 + i * (PW + 0.08), 0);
    place(x0 + PW + 0.08, PH + 0.08);
    place(x0 + PW + 0.08, -(PH + 0.08));
    wing.rotation.x = -0.35; // turned towards the Sun
  }

  // high-gain antenna: a 2.5 m dish on the +z face, with its feed
  const R = 1.25, depth = 0.38;
  const profile = [];
  for (let i = 0; i <= 16; i++) {
    const r = (i / 16) * R;
    profile.push(new Vector2(r, (depth * r * r) / (R * R)));
  }
  const dish = new Mesh(new LatheGeometry(profile, 48), new MeshPhongMaterial({ color: 0xf2f2ee, shininess: 30, side: DoubleSide }));
  dish.rotation.x = Math.PI / 2; // open towards +z
  dish.position.set(0, 0.4, BZ / 2 + 0.25);
  juice.add(dish);
  const focus = v(0, 0.4, BZ / 2 + 0.25 + (R * R) / (4 * depth) * 0.9);
  for (let k = 0; k < 3; k++) {
    const a = (k / 3) * Math.PI * 2;
    juice.add(rod(v(Math.cos(a) * R * 0.95, 0.4 + Math.sin(a) * R * 0.95, BZ / 2 + 0.25 + depth), focus, 0.02, white));
  }
  const feed = new Mesh(new ConeGeometry(0.12, 0.3, 12), white);
  feed.rotation.x = -Math.PI / 2;
  feed.position.copy(focus);
  juice.add(feed);

  // RIME: the 16 m radar antenna, across the top
  juice.add(rod(v(0, BY / 2 + 0.25, -8), v(0, BY / 2 + 0.25, 8), 0.035, white));
  juice.add(rod(v(0, BY / 2, 0), v(0, BY / 2 + 0.25, 0), 0.08, metal));

  // J-MAG: the 10.6 m magnetometer boom, out from a lower corner, with sensors along it
  const magStart = v(-BX / 2, -BY / 2 + 0.5, -BZ / 2);
  const magEnd = magStart.clone().add(v(-0.35, -0.25, -1).normalize().multiplyScalar(10.6));
  juice.add(rod(magStart, magEnd, 0.04, metal));
  for (const t of [0.55, 0.8, 1]) {
    const s = new Mesh(new BoxGeometry(0.18, 0.18, 0.18), white);
    s.position.lerpVectors(magStart, magEnd, t);
    juice.add(s);
  }

  // RPWI: four 3 m booms with spherical probes
  for (const [x, y, z] of [[1, 1, 1], [-1, 1, -1], [1, -1, -1], [-1, -1, 1]]) {
    const a = v((x * BX) / 2, (y * BY) / 2, (z * BZ) / 2);
    const b = a.clone().add(v(x * 0.7, y * 0.5, z * 0.5).normalize().multiplyScalar(3));
    juice.add(rod(a, b, 0.015, metal));
    const probe = new Mesh(new SphereGeometry(0.05, 10, 8), dark);
    probe.position.copy(b);
    juice.add(probe);
  }

  // main engine nozzle, below
  const nozzle = new Mesh(new CylinderGeometry(0.18, 0.42, 0.8, 24, 1, true), new MeshPhongMaterial({ color: 0x5b5d63, shininess: 40, side: DoubleSide }));
  nozzle.position.y = -BY / 2 - 0.4;
  juice.add(nozzle);

  return juice;
}

/** half the deployed span, in metres: for keeping the camera clear */
export const JUICE_SIZE = 13.6;
