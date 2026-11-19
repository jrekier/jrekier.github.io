// The Earth cutaway on the home page.
// Bundled with the parts of three.js it uses by esbuild at build time (see build.mjs).
//
// How the cut works: three clipping planes remove the octant facing the camera
// (x > c, y > c, z > c). As you scroll, c goes from 0.6 (nothing removed) to 0
// (a full octant). Three flat "caps" fill the faces of the cut and are coloured
// by distance from the centre, which draws the layers.

import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, SphereGeometry, PlaneGeometry,
  MeshPhongMaterial, ShaderMaterial, TextureLoader, Plane, Vector3, Color,
  DirectionalLight, AmbientLight, SRGBColorSpace,
} from "three";

// Radii relative to the Earth's (6,371 km)
const R_INNER = 1221 / 6371; // inner core
const R_OUTER = 3480 / 6371; // core–mantle boundary
const R_CRUST = 0.985; // crust drawn a little thicker than it is, to be visible

const section = document.querySelector(".earth");
const canvas = section?.querySelector("canvas");
if (section && canvas && webglAvailable()) start();

function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function start() {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const textures = section.dataset.textures;

  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.localClippingEnabled = true;

  const scene = new Scene();
  const camera = new PerspectiveCamera(28, 1, 0.1, 100);
  camera.position.set(2.6, 1.9, 3.6);
  camera.lookAt(0, -0.05, 0);

  scene.add(new AmbientLight(0xffffff, 0.35));
  const sun = new DirectionalLight(0xffffff, 2.2);
  sun.position.set(-2, 2.5, 4);
  scene.add(sun);

  // --- the cut ---------------------------------------------------------------
  const planes = [new Plane(new Vector3(-1, 0, 0), 1), new Plane(new Vector3(0, -1, 0), 1), new Plane(new Vector3(0, 0, -1), 1)];

  // --- the surface: textured sphere, tilted, spinning ------------------------
  const loader = new TextureLoader();
  const map = loader.load(textures + "earthmap2k.jpg", () => section.classList.add("is-live"));
  map.colorSpace = SRGBColorSpace;
  map.anisotropy = 4;
  const surface = new Mesh(
    new SphereGeometry(1, 128, 64),
    new MeshPhongMaterial({
      map,
      normalMap: loader.load(textures + "earthnormal2k.jpg"),
      specularMap: loader.load(textures + "earthspec2k.jpg"),
      specular: new Color(0x333333),
      shininess: 18,
      clippingPlanes: planes,
      clipIntersection: true, // remove only what is cut by all three planes
    }),
  );
  const tilt = new Group();
  tilt.rotation.z = (-23.4 * Math.PI) / 180;
  tilt.add(surface);
  scene.add(tilt);

  // --- the caps: three quarter-discs coloured by radius ----------------------
  const capMaterial = (shade) =>
    new ShaderMaterial({
      uniforms: {
        uShade: { value: shade },
        uInner: { value: new Color("#fff3c4") },
        uInnerEdge: { value: new Color("#facc15") },
        uOuter: { value: new Color("#fb923c") },
        uOuterEdge: { value: new Color("#f97316") },
        uMantleLow: { value: new Color("#b91c1c") },
        uMantleHigh: { value: new Color("#ea580c") },
        uCrust: { value: new Color("#57534e") },
        uR: { value: new Vector3(R_INNER, R_OUTER, R_CRUST) },
      },
      vertexShader: /* glsl */ `
        varying vec3 vPos;
        void main() {
          vPos = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        uniform float uShade;
        uniform vec3 uInner, uInnerEdge, uOuter, uOuterEdge, uMantleLow, uMantleHigh, uCrust, uR;
        varying vec3 vPos;
        void main() {
          float r = length(vPos);
          if (r > 1.0) discard;
          vec3 c;
          if (r < uR.x)      c = mix(uInner, uInnerEdge, r / uR.x);
          else if (r < uR.y) c = mix(uOuterEdge, uOuter, (r - uR.x) / (uR.y - uR.x));
          else if (r < uR.z) c = mix(uMantleLow, uMantleHigh, (r - uR.y) / (uR.z - uR.y));
          else               c = uCrust;
          // thin dark lines at the boundaries between layers
          float d = min(min(abs(r - uR.x), abs(r - uR.y)), abs(r - uR.z));
          c *= mix(0.75, 1.0, smoothstep(0.0, 0.006, d));
          gl_FragColor = vec4(c * uShade, 1.0);
        }`,
    });

  // each cap is a unit quad, moved and scaled to cover its face of the cut
  const caps = [
    { shade: 1.0, orient: (m) => m.rotation.set(0, Math.PI / 2, 0) }, // face x = c (normal +x)
    { shade: 0.9, orient: (m) => m.rotation.set(-Math.PI / 2, 0, 0) }, // face y = c (normal +y)
    { shade: 0.8, orient: (m) => m.rotation.set(0, 0, 0) }, // face z = c (normal +z)
  ].map(({ shade, orient }) => {
    const m = new Mesh(new PlaneGeometry(1, 1), capMaterial(shade));
    orient(m);
    scene.add(m);
    return m;
  });

  function setCut(c) {
    for (const p of planes) p.constant = c;
    const size = Math.max(1 - c, 0.0001);
    const mid = c + size / 2;
    const [cx, cy, cz] = caps;
    cx.position.set(c, mid, mid);
    cy.position.set(mid, c, mid);
    cz.position.set(mid, mid, c);
    for (const m of caps) {
      m.scale.set(size, size, 1);
      m.visible = c < 0.58; // the cut only reaches inside the sphere below 1/√3
    }
  }

  // --- scroll, size and animation --------------------------------------------
  const ease = (t) => t * t * (3 - 2 * t);
  const clamp = (x) => Math.min(1, Math.max(0, x));

  function progress() {
    const rect = section.getBoundingClientRect();
    return clamp(-rect.top / Math.max(1, rect.height - innerHeight));
  }

  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  let last = performance.now();
  function frame(now = performance.now()) {
    const dt = Math.min(now - last, 100) / 1000;
    last = now;
    if (!reducedMotion) surface.rotation.y += dt * 0.08;
    // the cut opens over the first half of the section
    setCut(reducedMotion ? 0 : 0.6 * (1 - ease(clamp((progress() - 0.12) / 0.33))));
    renderer.render(scene, camera);
  }

  // only animate while the section is on screen
  let running = false;
  function loop(now) {
    if (!running) return;
    frame(now);
    requestAnimationFrame(loop);
  }
  new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting && !reducedMotion;
    if (running) {
      last = performance.now();
      requestAnimationFrame(loop);
    }
  }).observe(section);

  new ResizeObserver(() => {
    resize();
    frame();
  }).observe(canvas);
  if (reducedMotion) addEventListener("scroll", () => frame(), { passive: true });

  resize();
  setCut(0.6);
  frame();
}
