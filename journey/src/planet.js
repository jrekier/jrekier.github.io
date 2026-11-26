// A planet for the journey page: textured, spinning, and able to show what is
// inside it. Used for the Earth and for Mercury.
//
// Driven each frame by update(), with a few numbers between 0 and 1 set from the
// scroll position:
//   wobble  show the spin axis precessing and nutating (Earth only, exaggerated)
//   cut     slide away the half facing the camera, along a plane through the axis
//   waves   show the inertial-wave shear layers in the liquid core
//   field   show the magnetic field lines (a dipole, simplified)
//   core    fade the crust and mantle away to show the flow at the top of the core,
//           with field lines dragged by it (Earth only; an illustration, not a model)

import {
  Group, Mesh, Line, SphereGeometry, CircleGeometry, PlaneGeometry, CylinderGeometry, TubeGeometry, BufferGeometry,
  Float32BufferAttribute, CatmullRomCurve3, MeshPhongMaterial, MeshBasicMaterial, LineBasicMaterial,
  ShaderMaterial, Plane, Vector3, Quaternion, Matrix4, Color, SRGBColorSpace, AdditiveBlending,
} from "three";
import { shearLayers } from "./rays.js";

const UP = new Vector3(0, 1, 0);
const CUT_TURN = (55 * Math.PI) / 180; // angle between the cut face and the camera
const MAX_LAYERS = 6;

// ---------------------------------------------------------------------------
// Geometry helpers

/**
 * Dipole field line r = L sin²θ around a dipole centred `offset` along the axis,
 * cut to the parts whose distance from the planet's centre lies in [rMin, rMax].
 * Returns polylines of [x, y] in a meridional plane (y along the axis), running
 * from south to north, the direction the field points outside the planet.
 */
function fieldLines(L, offset, rMin, rMax, n = 160) {
  const lines = [];
  let current = null;
  const t0 = 0.02;
  for (let i = 0; i <= n; i++) {
    const th = t0 + ((Math.PI - 2 * t0) * i) / n;
    const r = L * Math.sin(th) ** 2;
    const x = r * Math.sin(th);
    const y = -r * Math.cos(th) + offset;
    const d = Math.hypot(x, y);
    if (d >= rMin && d <= rMax) {
      if (!current) lines.push((current = []));
      current.push([x, y]);
    } else current = null;
  }
  return lines.filter((l) => l.length > 2);
}

/** Flat ribbons along 2D polylines, for drawing in the cut face. With `fade`, each segment after a reflection is dimmer. */
function ribbons(lines, width, scale = 1, fade = false) {
  const pos = [], along = [], side = [], gen = [], idx = [];
  for (const ray of lines) {
    let s = 0, bounce = 0;
    for (let k = 0; k < ray.length - 1; k++) {
      // (a traced ray marks its reflections in ray.bends; otherwise every vertex is one)
      if (ray.bends) { if (ray.bends.has(k)) bounce++; } else bounce = k;
      const [x0, z0] = ray[k], [x1, z1] = ray[k + 1];
      const len = Math.hypot(x1 - x0, z1 - z0);
      if (len === 0) continue;
      const nx = (-(z1 - z0) / len) * width, nz = ((x1 - x0) / len) * width;
      const base = pos.length / 3;
      for (const [x, z, a, sd] of [[x0 + nx, z0 + nz, s, 1], [x0 - nx, z0 - nz, s, -1], [x1 + nx, z1 + nz, s + len, 1], [x1 - nx, z1 - nz, s + len, -1]]) {
        pos.push(x * scale, z * scale, 0);
        along.push(a);
        side.push(sd);
        gen.push(fade ? bounce : 0);
      }
      idx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
      s += len;
    }
  }
  const g = new BufferGeometry();
  g.setAttribute("position", new Float32BufferAttribute(pos, 3));
  g.setAttribute("aAlong", new Float32BufferAttribute(along, 1));
  g.setAttribute("aSide", new Float32BufferAttribute(side, 1));
  g.setAttribute("aGen", new Float32BufferAttribute(gen, 1));
  g.setIndex(idx);
  return g;
}

// ---------------------------------------------------------------------------
// Shaders

const layerShader = {
  vertexShader: /* glsl */ `
    varying vec3 vPos;
    void main() {
      // in view space: world coordinates are too large for single precision far from the origin
      vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * vec4(vPos, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    #define MAX_LAYERS ${MAX_LAYERS}
    uniform float uRadius;
    uniform vec3 uCenter; // view space
    uniform float uTop[MAX_LAYERS];     // outer radius of each layer, innermost first
    uniform vec3 uLow[MAX_LAYERS];      // colour at the bottom of each layer
    uniform vec3 uHigh[MAX_LAYERS];     // colour at the top
    uniform int uCount;
    varying vec3 vPos;
    void main() {
      vec3 d = vPos - uCenter;
      float r = length(d) / uRadius;
      if (r > 1.0) discard;
      vec3 c = uHigh[0];
      float bottom = 0.0, line = 1.0;
      for (int i = 0; i < MAX_LAYERS; i++) {
        if (i >= uCount) break;
        float top = uTop[i];
        if (r <= top) { c = mix(uLow[i], uHigh[i], (r - bottom) / max(top - bottom, 1e-4)); break; }
        bottom = top;
      }
      for (int i = 0; i < MAX_LAYERS; i++) {
        if (i >= uCount - 1) break;
        line = min(line, smoothstep(0.0, 0.006, abs(r - uTop[i])));
      }
      gl_FragColor = vec4(c * mix(0.72, 1.0, line), 1.0); // thin lines between layers
    }`,
};

const ribbonShader = {
  vertexShader: /* glsl */ `
    attribute float aAlong, aSide, aGen;
    varying float vAlong, vSide, vGen;
    void main() {
      vAlong = aAlong; vSide = aSide; vGen = aGen;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform float uTime, uOpacity, uSpeed;
    uniform vec3 uColor;
    varying float vAlong, vSide, vGen;
    void main() {
      float edge = pow(1.0 - abs(vSide), 1.6);
      float pulse = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(9.0 * vAlong - uSpeed * uTime), 4.0);
      float fade = pow(0.82, vGen);
      vec3 c = mix(uColor, vec3(1.0), pulse * 0.6);
      gl_FragColor = vec4(c * edge * pulse * fade * uOpacity, 1.0);
    }`,
};

// A computed flow in the cut face (a kore solution baked by tools/kore_texture.py): R, the log of the amplitude of the
// vorticity; G, B, the complex ratio c = C/A with |w|² = A (1 + Re(c e^{2iωt})), exact at any longitude; alpha, the fluid.
// The texture covers one meridional half-plane; the other half of the face shows the same magnitude.
const fieldShader = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D uMap;
    uniform float uTime, uOpacity, uPeriod, uDecades, uGain, uShow, uPolar, uRin, uFrames, uFrame;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      vec2 p = vUv * 2.0 - 1.0;                     // in units of the texture's half-size (the outer wall, if polar)
      float r = length(p);
      float ph = 12.566370614 * uTime / uPeriod;    // 2ωt, one period of the forcing every uPeriod seconds
      float w;
      if (uPolar > 0.5) {                           // a thin shell: colatitude across, radius from uRin to 1 up
        if (r > 1.0 || r < uRin) discard;
        // (a stack of uFrames frames, frame 0 at the bottom: two neighbours blended at uFrame)
        float u = acos(clamp(p.y / r, -1.0, 1.0)) / 3.14159265, v = clamp((r - uRin) / (1.0 - uRin), 0.02, 0.98);
        float f0 = floor(uFrame), f1 = min(f0 + 1.0, uFrames - 1.0), k = uFrame - f0;
        vec4 t0 = texture2D(uMap, vec2(u, (f0 + v) / uFrames)), t1 = texture2D(uMap, vec2(u, (f1 + v) / uFrames));
        float a0 = t0.r > 0.004 ? pow(10.0, uDecades * (t0.r - 1.0)) : 0.0, a1 = t1.r > 0.004 ? pow(10.0, uDecades * (t1.r - 1.0)) : 0.0;
        vec2 c0 = t0.gb * 2.0 - 1.0, c1 = t1.gb * 2.0 - 1.0;
        float w0 = a0 * sqrt(max(0.0, 1.0 + c0.x * cos(ph) - c0.y * sin(ph))), w1 = a1 * sqrt(max(0.0, 1.0 + c1.x * cos(ph) - c1.y * sin(ph)));
        w = mix(w0, w1, k);
      } else {
        vec4 t = texture2D(uMap, vec2(abs(p.x), 0.5 + 0.5 * p.y));
        if (t.a < 0.5 || r > 1.0) discard;
        float amp = t.r > 0.004 ? pow(10.0, uDecades * (t.r - 1.0)) : 0.0;
        vec2 c = t.gb * 2.0 - 1.0;
        w = amp * sqrt(max(0.0, 1.0 + c.x * cos(ph) - c.y * sin(ph)));
      }
      float g = clamp(1.0 + log(max(w * uGain, 1e-6)) / (2.302585 * uShow), 0.0, 1.0); // the top uShow decades
      g = g * g * (3.0 - 2.0 * g);
      vec3 col = mix(uColor, vec3(1.0), g * g * 0.55);
      gl_FragColor = vec4(col * g * uOpacity, 1.0);
    }`,
};

const tubeShader = {
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(22.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.85, 1.0);
    }`,
};

// ---------------------------------------------------------------------------
// Flow at the top of the Earth's core: an illustration, not a flow model.
//
// The flow is tangential and divergence-free, u = r̂ × ∇ψ, from a stream function
// ψ made of two large gyres (symmetric about the equator, as for columnar
// flows in a rapidly rotating core), smaller eddies drifting westward, and waves
// along the equator. The same ψ is written twice, in GLSL for the colours and in
// JavaScript to move the field lines' footpoints: keep the two in sync.

const PSI_GLSL = /* glsl */ `
  vec3 dirAt(float lat, float lon) { return vec3(cos(lat) * cos(lon), sin(lat), -cos(lat) * sin(lon)); }
  float blob(vec3 p, float lat, float lon, float size) { vec3 d = p - dirAt(radians(lat), radians(lon)); return exp(-dot(d, d) / size); }
  float psi(vec3 p, float t) {
    float lat = asin(clamp(p.y, -1.0, 1.0));
    float lon = atan(-p.z, p.x);
    float w = -40.0 + 10.0 * sin(0.11 * t);
    float s = 0.9 * (blob(p, 35.0, w, 0.5) + blob(p, -35.0, w, 0.5));
    s -= 0.6 * (blob(p, 30.0, 120.0, 0.4) + blob(p, -30.0, 120.0, 0.4));
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      float la = (mod(fi, 2.0) < 1.0 ? 1.0 : -1.0) * (20.0 + 8.0 * sin(fi * 1.7));
      s += (mod(fi, 3.0) < 1.5 ? 0.35 : -0.35) * blob(p, la, fi * 60.0 - 8.0 * t, 0.06);
    }
    s += 0.18 * exp(-pow(lat / 0.3, 2.0)) * cos(6.0 * lon + 0.9 * t);
    return s;
  }`;

function psiJS([x, y, z], t) {
  const dirAt = (lat, lon) => [Math.cos(lat) * Math.cos(lon), Math.sin(lat), -Math.cos(lat) * Math.sin(lon)];
  const blob = (lat, lon, size) => {
    const d = dirAt((lat * Math.PI) / 180, (lon * Math.PI) / 180);
    return Math.exp(-((x - d[0]) ** 2 + (y - d[1]) ** 2 + (z - d[2]) ** 2) / size);
  };
  const lat = Math.asin(Math.max(-1, Math.min(1, y)));
  const lon = Math.atan2(-z, x);
  const w = -40 + 10 * Math.sin(0.11 * t);
  let s = 0.9 * (blob(35, w, 0.5) + blob(-35, w, 0.5));
  s -= 0.6 * (blob(30, 120, 0.4) + blob(-30, 120, 0.4));
  for (let i = 0; i < 6; i++) {
    const la = (i % 2 < 1 ? 1 : -1) * (20 + 8 * Math.sin(i * 1.7));
    s += (i % 3 < 1.5 ? 0.35 : -0.35) * blob(la, i * 60 - 8 * t, 0.06);
  }
  s += 0.18 * Math.exp(-((lat / 0.3) ** 2)) * Math.cos(6 * lon + 0.9 * t);
  return s;
}

/** Eastward flow speed at latitude/longitude (radians): u_east = −∂ψ/∂(northward distance). */
function eastward(lat, lon, t) {
  const h = 0.01;
  const at = (la) => [Math.cos(la) * Math.cos(lon), Math.sin(la), -Math.cos(la) * Math.sin(lon)];
  return -(psiJS(at(lat + h), t) - psiJS(at(lat - h), t)) / (2 * h);
}

const coreFlowShader = {
  vertexShader: /* glsl */ `
    varying vec3 vDir, vNormal;
    void main() {
      vDir = normalize(position);
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform float uTime, uOpacity;
    varying vec3 vDir, vNormal;
    ${PSI_GLSL}

    float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
    float noise(vec3 x) {
      vec3 i = floor(x), f = fract(x);
      f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                 mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
    }
    // noise stretched along the flow, so its features look like streaks
    float streaks(vec3 q, vec3 dir) { return noise((q - dir * dot(q, dir) * 0.75) * 9.0); }

    void main() {
      vec3 p = normalize(vDir);
      float t = uTime;
      vec3 east = normalize(cross(vec3(0.0, 1.0, 0.0), p) + vec3(1e-5, 0.0, 0.0));
      vec3 north = cross(p, east);
      const float h = 0.01;
      float gE = (psi(normalize(p + h * east), t) - psi(normalize(p - h * east), t)) / (2.0 * h);
      float gN = (psi(normalize(p + h * north), t) - psi(normalize(p - h * north), t)) / (2.0 * h);
      vec3 u = gE * north - gN * east; // u = r̂ × ∇ψ
      float ue = -gN;                   // eastward component
      vec3 dir = length(u) > 1e-4 ? normalize(u) : east;

      // two layers of streaks carried along the flow, cross-faded so they never jump
      float ph0 = fract(t * 0.25), ph1 = fract(t * 0.25 + 0.5);
      float n0 = streaks(p - u * ph0 * 0.6, dir), n1 = streaks(p - u * ph1 * 0.6, dir);
      float n = mix(n0, n1, abs(2.0 * ph0 - 1.0));

      float v = clamp(ue * 0.9, -1.0, 1.0);
      vec3 slate = vec3(0.20, 0.25, 0.33), amber = vec3(0.96, 0.62, 0.04), teal = vec3(0.18, 0.83, 0.75);
      vec3 c = v > 0.0 ? mix(slate, amber, pow(v, 0.7)) : mix(slate, teal, pow(-v, 0.7));
      c *= 0.55 + 0.9 * pow(n, 2.5) * (0.4 + 0.6 * min(1.0, length(u)));
      // streamlines: contours of ψ
      float f = fract(psi(p, t) * 6.0);
      c += 0.18 * (1.0 - smoothstep(0.0, 0.05, min(f, 1.0 - f)));
      float light = 0.7 + 0.3 * max(dot(vNormal, normalize(vec3(-0.4, 0.5, 0.8))), 0.0);
      gl_FragColor = vec4(c * light, uOpacity);
    }`,
};

// Field lines anchored in the core: their footpoints are carried by the flow
// (the field is nearly frozen into the liquid iron), and the twist fades along
// the line away from each footpoint.
const coreLineShader = {
  vertexShader: /* glsl */ `
    uniform float uShiftS, uShiftN;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      float s = uv.x; // 0 at the southern footpoint, 1 at the northern one
      float d = uShiftS * pow(1.0 - s, 2.0) + uShiftN * pow(s, 2.0);
      vec3 q = position;
      q.xz = vec2(q.x * cos(d) + q.z * sin(d), q.z * cos(d) - q.x * sin(d)); // turn eastward by d about the axis
      gl_Position = projectionMatrix * modelViewMatrix * vec4(q, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform float uTime, uOpacity;
    uniform vec3 uColor;
    varying vec2 vUv;
    void main() {
      float pulse = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(26.0 * vUv.x - 3.0 * uTime), 6.0);
      gl_FragColor = vec4(mix(uColor, vec3(1.0), pulse * 0.5) * pulse * uOpacity * 0.9, 1.0);
    }`,
};

const additive = { transparent: true, blending: AdditiveBlending, depthWrite: false };

// ---------------------------------------------------------------------------

/**
 * @param o.maps       { map, normal, specular? } texture file names
 * @param o.layers     [{ top, low, high }] from the centre out; top in planet radii
 * @param o.waves      { inner, outer, omega, paths?, color?, speed?, width? }, or a list of them: the fluid shell
 *                    (planet radii), the forcing frequency / spin rate, and how the family is drawn
 * @param o.field      { shells: [L…], offset, strength } dipole lines; offset along the axis in planet radii
 * @param o.wobble     { obliquity, nutation, nods, seconds } precession and nutation (degrees, exaggerated)
 * @param o.coreField  radius (planet radii) of a core-surface field map, or 0
 * @param o.spinRate   radians per second when the planet spins on its own
 * @param o.axis       optional unit vector (read each frame): the spin axis, when not the scene's up
 */
export function createPlanet(o) {
  const { loader, textures, radius } = o;
  const center = o.center.clone();
  const root = new Group();
  const clip = new Plane(new Vector3(0, 0, -1), 1e6);

  // the planet, oriented so its local y axis is the spin axis
  const tilt = new Group();
  root.add(tilt);
  const tex = (name, color = true) => {
    const t = loader.load(textures + name);
    if (color) t.colorSpace = SRGBColorSpace;
    t.anisotropy = 4;
    return t;
  };
  const M = o.maps;
  const surface = new Mesh(
    new SphereGeometry(radius, 192, 96),
    new MeshPhongMaterial({
      map: tex(M.map),
      normalMap: M.normal ? tex(M.normal, false) : null,
      bumpMap: M.bump ? tex(M.bump, false) : null,
      bumpScale: M.bumpScale ?? 1,
      specularMap: M.specular ? tex(M.specular, false) : null,
      specular: new Color(M.specular ? 0x3a3a3a : 0x111111),
      shininess: M.specular ? 22 : 4,
      emissiveMap: M.night ? tex(M.night) : null,
      emissive: new Color(M.night ? 0xffd9a0 : 0x000000),
      clippingPlanes: [clip],
      transparent: true, // can fade out to reveal the core
    }),
  );
  tilt.add(surface);
  // night lights: only on the night side
  const night = { uSunView: { value: new Vector3(1, 0, 0) } };
  if (M.night) {
    surface.material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, night);
      shader.fragmentShader = shader.fragmentShader
        .replace("#include <common>", "#include <common>\nuniform vec3 uSunView;")
        .replace("#include <emissivemap_fragment>", `#include <emissivemap_fragment>
          totalEmissiveRadiance *= smoothstep(0.12, -0.18, dot(normal, uSunView));`);
    };
  }
  // clouds: a thin shell turning slowly over the surface
  let clouds = null;
  if (M.clouds) {
    clouds = new Mesh(
      new SphereGeometry(radius * 1.006, 192, 96),
      new MeshPhongMaterial({ color: 0xffffff, alphaMap: tex(M.clouds, false), transparent: true, depthWrite: false, shininess: 2, clippingPlanes: [clip] }),
    );
    surface.add(clouds);
  }


  // spin axis
  const axisMat = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false });
  tilt.add(new Mesh(new CylinderGeometry(radius * 0.012, radius * 0.012, radius * 3.1, 8), axisMat));

  // precession and nutation (optional)
  const W = o.wobble;
  const axisAt = (phi, target = new Vector3()) => {
    if (!W) return target.copy(o.axis?.lengthSq() > 0.5 ? o.axis : UP); // (o.axis: a spin axis other than the scene's up, followed live)
    const obl = (W.obliquity * Math.PI) / 180, nut = (W.nutation * Math.PI) / 180;
    const eps = obl + nut * Math.cos(W.nods * phi);
    const psi = phi + (nut / Math.sin(obl)) * Math.sin(W.nods * phi);
    return target.set(Math.sin(eps) * Math.cos(psi), Math.cos(eps), -Math.sin(eps) * Math.sin(psi));
  };
  let reference, track;
  if (W) {
    reference = new Line(
      new BufferGeometry().setFromPoints([new Vector3(0, -1.6 * radius, 0), new Vector3(0, 1.6 * radius, 0)]),
      new LineBasicMaterial({ color: 0x8899aa, transparent: true, opacity: 0 }),
    );
    root.add(reference);
    const pts = [];
    for (let i = 0; i <= 900; i++) pts.push(axisAt((i / 900) * Math.PI * 2).multiplyScalar(radius * 1.55));
    track = new Line(new BufferGeometry().setFromPoints(pts), new LineBasicMaterial({ color: 0xbfe6ff, transparent: true, opacity: 0 }));
    root.add(track);
  }

  // the cut face, with the layers, the shear layers and the field lines in it
  const face = new Group();
  root.add(face);
  const L = o.layers;
  const pad = (arr, fill) => [...arr, ...Array(MAX_LAYERS - arr.length).fill(fill)];
  const capUniforms = {
    uCenter: { value: center.clone() },
    uRadius: { value: radius },
    uTop: { value: pad(L.map((l) => l.top), 1) },
    uLow: { value: pad(L.map((l) => new Color(l.low)), new Color()) },
    uHigh: { value: pad(L.map((l) => new Color(l.high)), new Color()) },
    uCount: { value: L.length },
  };
  face.add(new Mesh(new CircleGeometry(radius * 1.5, 128), new ShaderMaterial({ ...layerShader, uniforms: capUniforms })));

  // shear layers: one family per forcing frequency
  const waveSets = (Array.isArray(o.waves) ? o.waves : o.waves ? [o.waves] : []).map(({ inner, outer, omega, paths, color = [0.75, 0.95, 1.0], speed = 2.6, width = 0.011, texture, rmax = 1, decades = 2.5, period = 4, gain = 1, show = 1.3, rin = 0, frames = 1 }, i) => {
    if (texture) {
      // a computed flow (kore), drawn over the whole face; rmax: the texture's half-size in planet radii
      const fmat = new ShaderMaterial({
        ...fieldShader, ...additive,
        uniforms: {
          uMap: { value: tex(texture, false) }, uTime: { value: 0 }, uOpacity: { value: 0 }, uPeriod: { value: period },
          uDecades: { value: decades }, uGain: { value: gain }, uShow: { value: show },
          uPolar: { value: rin > 0 ? 1 : 0 }, uRin: { value: rin / rmax }, uFrames: { value: frames }, uFrame: { value: 0 }, uColor: { value: new Color(...color) },
        },
      });
      const plane = new Mesh(new PlaneGeometry(2 * rmax * radius, 2 * rmax * radius), fmat);
      plane.position.z = radius * (0.004 + 0.0005 * i);
      face.add(plane);
      return fmat;
    }
    const mat = new ShaderMaterial({
      ...ribbonShader, ...additive,
      uniforms: {
        uTime: { value: 0 }, uOpacity: { value: 0 }, uSpeed: { value: speed }, uColor: { value: new Color(...color) },
      },
    });
    // (paths: rays already traced, in units of `outer`, e.g. curved ones in a stratified fluid)
    const beams = new Mesh(ribbons(paths ?? shearLayers({ rInner: inner / outer, omega }), width, outer, true), mat);
    beams.scale.setScalar(radius);
    beams.position.z = radius * (0.004 + 0.0005 * i); // just in front of the cut face
    face.add(beams);
    return mat;
  });

  // magnetic field: lines crossing the mantle in the cut face, and looping out into space
  const F = o.field;
  const fieldColor = new Color(0.45, 0.78, 1.0);
  const faceFieldMat = new ShaderMaterial({ ...ribbonShader, ...additive, uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uSpeed: { value: 2.6 }, uColor: { value: fieldColor } } });
  const fieldMat = new ShaderMaterial({ ...tubeShader, ...additive, uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uColor: { value: fieldColor } } });
  const field = new Group();
  tilt.add(field);
  if (F) {
    const coreTop = F.coreTop;
    const inMantle = [];
    for (const Lv of [...(F.inner ?? []), ...F.shells])
      for (const line of fieldLines(Lv, F.offset, coreTop, 1)) inMantle.push(line, line.map(([x, y]) => [-x, y]));
    const faceField = new Mesh(ribbons(inMantle, 0.006), faceFieldMat);
    faceField.scale.setScalar(radius);
    faceField.position.z = radius * 0.005;
    face.add(faceField);
    const AZIMUTHS = F.azimuths ?? 10;
    for (const Lv of F.shells) {
      for (const line of fieldLines(Lv, F.offset, 1, Infinity, 180)) {
        for (let k = 0; k < AZIMUTHS; k++) {
          const phi = (k / AZIMUTHS) * Math.PI * 2 + Lv; // stagger the shells
          const pts = line.map(([sx, y]) => new Vector3(sx * Math.cos(phi) * radius, y * radius, sx * Math.sin(phi) * radius));
          field.add(new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 90, radius * 0.007, 5, false), fieldMat));
        }
      }
    }
  }

  // Earth only: the flow at the top of the core, and field lines dragged by it
  let coreField, coreFieldMat;
  const coreLines = [];
  if (o.coreField) {
    coreFieldMat = new ShaderMaterial({ ...coreFlowShader, uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 } }, transparent: true });
    coreField = new Mesh(new SphereGeometry(radius * o.coreField, 128, 64), coreFieldMat);
    coreField.renderOrder = -1; // draw before the translucent surface
    surface.add(coreField);
    const rc = radius * o.coreField;
    const PER_SHELL = 5;
    [1.25, 1.6, 2.1, 2.8].forEach((Lv, shell) => {
      const [line] = fieldLines(Lv, 0, 1, Infinity, 160); // in core radii
      for (let k = 0; k < PER_SHELL; k++) {
        const phi = ((k + 0.5 * (shell % 2)) / PER_SHELL) * Math.PI * 2;
        const pts = line.map(([sx, y]) => new Vector3(sx * Math.cos(phi) * rc, y * rc, -sx * Math.sin(phi) * rc));
        const mat = new ShaderMaterial({
          ...coreLineShader, ...additive,
          uniforms: { uTime: { value: 0 }, uOpacity: { value: 0 }, uColor: { value: new Color(0.6, 0.85, 1.0) }, uShiftS: { value: 0 }, uShiftN: { value: 0 } },
        });
        const mesh = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 140, radius * 0.0045, 5, false), mat);
        const [sx0, y0] = line[0], [sx1, y1] = line[line.length - 1];
        coreLines.push({ mesh, mat, phi, latS: Math.atan2(y0, sx0), latN: Math.atan2(y1, sx1), shiftS: 0, shiftN: 0 });
        coreField.add(mesh);
      }
    });
  }

  // --- state and update ----------------------------------------------------
  let phi = 0.6; // precession angle
  let spin = 0;
  const a = new Vector3(), n = new Vector3(), across = new Vector3();
  const basis = new Matrix4();
  const q = new Quaternion();

  function setCenter(c) {
    center.copy(c);
  }

  /**
   * waves:   one number for all wave families, or one per family
   * cutTurn: angle between the cut face and the camera
   */
  function update({ dt, time, camera, wobble = 0, cut = 0, waves = 0, cutTurn = CUT_TURN, field: fieldOn = 0, core = 0, animate, spinAngle, scale = 1, stretch = 1 }) {
    const R = radius * scale; // drawn radius (a planet can be shown enlarged)
    if (animate) {
      if (W) phi += ((dt * Math.PI * 2) / W.seconds) * wobble;
      spin += dt * (o.spinRate ?? 0.35);
    }
    tilt.position.copy(center);
    capUniforms.uCenter.value.copy(center).applyMatrix4(camera.matrixWorldInverse);
    tilt.scale.setScalar(scale);
    face.scale.setScalar(scale);
    capUniforms.uRadius.value = R;
    axisAt(phi, a);
    q.setFromUnitVectors(UP, a);
    tilt.quaternion.copy(q);
    surface.rotation.y = spinAngle ?? spin;
    surface.scale.set(stretch, 1, 1); // elongated along its local x axis (an equatorial long axis)

    axisMat.opacity = 0.9 * Math.max(wobble, cut * 0.6);
    if (W) {
      reference.position.copy(center);
      track.position.copy(center);
      track.material.opacity = 0.8 * wobble;
      reference.material.opacity = 0.5 * wobble;
    }

    // cutting plane: contains the axis, turned a little away from the camera
    n.copy(camera.position).sub(center);
    n.addScaledVector(a, -n.dot(a)).normalize();
    n.applyAxisAngle(a, cutTurn);
    const k = (1 - cut) * R; // offset of the plane from the centre
    clip.normal.copy(n).negate(); // remove points with n·(p − c) > k
    clip.constant = cut > 0.001 ? n.dot(center) + k : 1e6; // closed: clip nothing
    face.visible = cut > 0.001;
    across.crossVectors(a, n).normalize();
    basis.makeBasis(across, a, n);
    face.quaternion.setFromRotationMatrix(basis);
    face.position.copy(center).addScaledVector(n, k);

    for (const m of [...waveSets, faceFieldMat, fieldMat]) m.uniforms.uTime.value = time;
    waveSets.forEach((m, i) => (m.uniforms.uOpacity.value = (Array.isArray(waves) ? waves[i] ?? 0 : waves) * cut));

    const strength = F?.strength ?? 1;
    faceFieldMat.uniforms.uOpacity.value = fieldOn * cut * strength;
    fieldMat.uniforms.uOpacity.value = fieldOn * strength;
    field.visible = fieldOn > 0.001;

    if (o.sunDir) night.uSunView.value.copy(o.sunDir).transformDirection(camera.matrixWorldInverse);
    if (clouds) {
      if (animate) clouds.rotation.y += dt * 0.012;
      clouds.material.opacity = 0.95 * (1 - core);
      clouds.visible = core < 0.99;
    }
    if (coreField) {
      surface.material.opacity = 1 - 0.88 * core;
      surface.material.depthWrite = core < 0.01;
      coreField.visible = core > 0.001;
      coreFieldMat.uniforms.uOpacity.value = Math.min(1, core * 1.5);
      const tc = time * 0.6;
      coreFieldMat.uniforms.uTime.value = tc;
      for (const l of coreLines) {
        l.mesh.visible = core > 0.001;
        if (animate && core > 0.001) {
          // footpoints drift with the eastward flow, with a slight pull back so the lines don't wind up forever
          const rate = (lat, shift) => (0.5 * eastward(lat, l.phi + shift, tc)) / Math.max(Math.cos(lat), 0.2);
          l.shiftS += dt * 0.6 * (rate(l.latS, l.shiftS) - 0.25 * l.shiftS);
          l.shiftN += dt * 0.6 * (rate(l.latN, l.shiftN) - 0.25 * l.shiftN);
        }
        l.mat.uniforms.uShiftS.value = l.shiftS;
        l.mat.uniforms.uShiftN.value = l.shiftN;
        l.mat.uniforms.uTime.value = time;
        l.mat.uniforms.uOpacity.value = 0.7 * core;
      }
    }
  }

  return { root, surface, update, setCenter, center, clip, layerColors: capUniforms, waveMaterials: waveSets };
}
