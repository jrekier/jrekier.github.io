// BepiColombo in cruise, simplified, to scale, in metres (ESA factsheet dimensions).
// The stack, bottom to top: the Mercury Transfer Module (MTM, with its two long solar
// wings, ~30 m tip to tip, and ion engines), ESA's Mercury Planetary Orbiter (MPO:
// 2.4 × 2.2 × 1.7 m, a 3.7 m wide radiator, a 7.5 m solar wing, a high-gain dish), and
// the sunshield (MOSIF) carrying JAXA's Mio (an octagon 1.8 m across).
//
// Axes: y along the stack (engines at -y), x along the MTM's wings.
import {
  Group, Mesh, BoxGeometry, CylinderGeometry, ConeGeometry, LatheGeometry, MeshPhongMaterial, MeshBasicMaterial,
  CanvasTexture, SRGBColorSpace, DoubleSide, AdditiveBlending, Vector2, Vector3, Quaternion, Color,
} from "three";

function canvasTexture(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

// MTM and MPO panels: rows of cells interleaved with mirror strips (they run hot near the Sun)
const stripedCells = () =>
  canvasTexture(256, 200, (g, w, h) => {
    g.fillStyle = "#b9bec6";
    g.fillRect(0, 0, w, h);
    const pad = 6, rows = 16, rowH = (h - 2 * pad) / rows;
    for (let r = 0; r < rows; r++) {
      const y = pad + r * rowH;
      if (r % 2 === 0) {
        for (let x = pad; x < w - pad; x += 14) {
          g.fillStyle = `hsl(222 50% ${18 + Math.random() * 8}%)`;
          g.fillRect(x, y + 1, 12, rowH - 2);
        }
      } else {
        g.fillStyle = `hsl(210 12% ${74 + Math.random() * 10}%)`; // optical solar reflectors
        g.fillRect(pad, y + 1, w - 2 * pad, rowH - 2);
      }
    }
  });

const blanket = (base, flecks) =>
  canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = base;
    g.fillRect(0, 0, w, h);
    for (let i = 0; i < 700; i++) {
      g.fillStyle = flecks(Math.random());
      const x = Math.random() * w, y = Math.random() * h, s = 3 + Math.random() * 14;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + s, y + s * (Math.random() - 0.5));
      g.lineTo(x + s * (Math.random() - 0.5), y + s);
      g.fill();
    }
    g.strokeStyle = "rgba(0,0,0,0.12)"; // seams
    for (let k = 1; k < 4; k++) {
      g.beginPath();
      g.moveTo((k * w) / 4, 0);
      g.lineTo((k * w) / 4, h);
      g.stroke();
    }
  });

const radiatorTexture = () =>
  canvasTexture(256, 256, (g, w, h) => {
    g.fillStyle = "#d9dde2";
    g.fillRect(0, 0, w, h);
    g.strokeStyle = "#aab1ba";
    for (let x = 0; x < w; x += 16) {
      g.beginPath();
      g.moveTo(x, 0);
      g.lineTo(x, h);
      g.stroke();
    }
    g.fillStyle = "#c3c9d0";
    for (let y = 24; y < h; y += 48) g.fillRect(0, y, w, 4);
  });

function rod(a, b, radius, material) {
  const d = new Vector3().subVectors(b, a);
  const m = new Mesh(new CylinderGeometry(radius, radius, d.length(), 8), material);
  m.position.copy(a).addScaledVector(d, 0.5);
  m.quaternion.copy(new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), d.normalize()));
  return m;
}

export function createBepi() {
  const v = (x, y, z) => new Vector3(x, y, z);
  const cells = new MeshPhongMaterial({ map: stripedCells(), shininess: 70, specular: new Color(0x556677) });
  const panelBack = new MeshPhongMaterial({ color: 0x55595f, shininess: 8 });
  const mtmSkin = new MeshPhongMaterial({ map: blanket("#8c8f95", (r) => `hsla(${30 + r * 20} 20% ${45 + r * 35}% / 0.35)`), shininess: 40, specular: new Color(0x444444) });
  const mpoSkin = new MeshPhongMaterial({ map: blanket("#d8d2c4", (r) => `hsla(40 18% ${70 + r * 20}% / 0.35)`), shininess: 12 });
  const shieldSkin = new MeshPhongMaterial({ map: blanket("#eceae4", (r) => `hsla(45 10% ${80 + r * 15}% / 0.3)`), shininess: 10, side: DoubleSide });
  const metal = new MeshPhongMaterial({ color: 0x9aa0a8, shininess: 60, specular: new Color(0x777777) });
  const dark = new MeshPhongMaterial({ color: 0x24262b, shininess: 20 });
  const panel = (w, h) => new Mesh(new BoxGeometry(w, h, 0.05), [panelBack, panelBack, panelBack, panelBack, cells, panelBack]);

  // --- the Mercury Transfer Module (dropped before arrival) -----------------------------
  const mtm = new Group();
  const MTM_H = 2.3;
  const mtmBody = new Mesh(new BoxGeometry(3.9, MTM_H, 3.6), mtmSkin);
  mtmBody.position.y = MTM_H / 2;
  mtm.add(mtmBody);
  // launch adapter ring and ion engines underneath
  const ring = new Mesh(new CylinderGeometry(1.1, 1.3, 0.35, 32, 1, true), new MeshPhongMaterial({ color: 0x6f747b, side: DoubleSide, shininess: 30 }));
  ring.position.y = -0.17;
  mtm.add(ring);
  const engines = [];
  for (const [x, z] of [[-0.9, -0.9], [0.9, -0.9], [-0.9, 0.9], [0.9, 0.9]]) {
    const e = new Mesh(new CylinderGeometry(0.16, 0.2, 0.3, 20), dark);
    e.position.set(x, -0.1, z);
    mtm.add(e);
    engines.push(e.position);
  }
  // the ion beam: a faint blue plume from one engine pair, streaming out behind
  const glowMat = new MeshBasicMaterial({ color: 0x6d9cff, transparent: true, opacity: 0.0, blending: AdditiveBlending, depthWrite: false });
  const plume = new Group();
  for (const e of engines.slice(0, 2)) {
    const cone = new Mesh(new ConeGeometry(0.4, 4, 24, 1, true), glowMat);
    cone.rotation.x = Math.PI; // widening downwards
    cone.position.set(e.x, -2.2, e.z);
    plume.add(cone);
  }
  mtm.add(plume);
  // two long solar wings: five panels each
  for (const side of [-1, 1]) {
    const wing = new Group();
    wing.add(rod(v(side * 1.95, MTM_H / 2, 0), v(side * 3.2, MTM_H / 2, 0), 0.06, metal));
    for (let i = 0; i < 5; i++) {
      const p = panel(2.25, 1.85);
      p.position.set(side * (3.2 + 1.15 + i * 2.3), MTM_H / 2, 0);
      wing.add(p);
    }
    wing.rotation.x = -0.55; // the wings are kept at a slant to the Sun near Mercury, to keep cool
    mtm.add(wing);
  }

  // --- the Mercury Planetary Orbiter -------------------------------------------------------
  const mpo = new Group();
  const MPO_Y = MTM_H, MPO_H = 1.7;
  const mpoBody = new Mesh(new BoxGeometry(2.4, MPO_H, 2.2), mpoSkin);
  mpoBody.position.y = MPO_Y + MPO_H / 2;
  mpo.add(mpoBody);
  // the big radiator, on the side kept away from the Sun
  const radiator = new Mesh(new BoxGeometry(3.7, 2.6, 0.06), new MeshPhongMaterial({ map: radiatorTexture(), shininess: 50 }));
  radiator.position.set(0, MPO_Y + 1.2, -1.2);
  mpo.add(radiator);
  // its single solar wing (three panels), on a boom
  const mpoWing = new Group();
  mpoWing.add(rod(v(0, MPO_Y + MPO_H / 2, 1.1), v(0, MPO_Y + MPO_H / 2, 2.0), 0.05, metal));
  for (let i = 0; i < 3; i++) {
    const p = panel(1.6, 1.85);
    p.rotation.y = Math.PI / 2;
    p.position.set(0, MPO_Y + MPO_H / 2, 2.0 + 0.95 + i * 1.9);
    mpoWing.add(p);
  }
  mpoWing.rotation.z = 0.35;
  mpo.add(mpoWing);
  // high-gain antenna: a 1 m dish on a short mast
  const R = 0.5, depth = 0.14, profile = [];
  for (let i = 0; i <= 12; i++) {
    const r = (i / 12) * R;
    profile.push(new Vector2(r, (depth * r * r) / (R * R)));
  }
  const dish = new Mesh(new LatheGeometry(profile, 36), new MeshPhongMaterial({ color: 0xf4f2ec, side: DoubleSide, shininess: 30 }));
  dish.position.set(1.9, MPO_Y + MPO_H + 0.25, 0.5);
  dish.rotation.z = -0.9;
  mpo.add(dish);
  mpo.add(rod(v(1.2, MPO_Y + MPO_H - 0.2, 0.5), dish.position, 0.04, metal));

  // --- the sunshield (MOSIF) with Mio inside ---------------------------------------------
  const top = new Group();
  const SH_Y = MPO_Y + MPO_H, SH_H = 2.3;
  const shield = new Mesh(new CylinderGeometry(1.25, 1.6, SH_H, 8, 1, true), shieldSkin);
  shield.position.y = SH_Y + SH_H / 2;
  top.add(shield);
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 + Math.PI / 8;
    top.add(rod(v(Math.cos(a) * 1.6, SH_Y, Math.sin(a) * 1.6), v(Math.cos(a) * 1.25, SH_Y + SH_H, Math.sin(a) * 1.25), 0.03, metal));
  }
  // Mio's top deck, half cells, seen through the open top
  const mio = new Mesh(new CylinderGeometry(0.97, 0.97, 0.9, 8), [
    new MeshPhongMaterial({ map: stripedCells(), shininess: 60 }), // sides
    new MeshPhongMaterial({ color: 0x3a3d44, shininess: 30 }), // top
    dark, // bottom
  ]);
  mio.position.y = SH_Y + SH_H - 0.55;
  top.add(mio);

  const stack = new Group(); // what arrives: MPO and Mio, still together
  stack.add(mpo, top);
  const bepi = new Group();
  bepi.add(mtm, stack);
  // centre the whole on its middle
  for (const part of [mtm, stack]) part.position.y -= 3.1;

  return {
    group: bepi,
    mtm,
    /** cruise (ion engines on: thrust) → MTM separated (0→1: pushed off, then left behind); time for the beam's flicker */
    update({ separation = 0, thrust = 1, time = 0 }) {
      // (the ion engines are off before the module lets go: no thrust after separation)
      glowMat.opacity = 0.07 * thrust * (separation > 0 ? 0 : 1) * (0.9 + 0.1 * Math.sin(time * 17));
      plume.visible = glowMat.opacity > 0.005;
      // Pushed off backwards by springs, the MTM then simply coasts: no forces, so a steady drift
      // (distance growing in proportion) and a steady slow tumble, falling behind the orbiters.
      const d = 50 * separation;
      mtm.position.set(0, -3.1 - d, 0);
      mtm.rotation.set(0.5 * separation, 0, 0.2 * separation);
      // (whether it's still to be seen is decided by the scene: once out of view, it's gone)
    },
  };
}

/** half its size, in metres: for keeping the camera clear */
export const BEPI_SIZE = 15;
