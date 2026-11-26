// Inertial-wave shear layers in the outer core, traced as rays in a meridional plane.
//
// For forcing at frequency ω in a fluid rotating at Ω (ω < 2Ω), energy travels
// along straight characteristics inclined at angle β to the equator, with
// tan β = √(4Ω²/ω² − 1). Shear layers are launched from the critical latitude
// sin λc = ω / 2Ω on each boundary. They reflect off the boundaries keeping
// their angle to the rotation axis (switching to the other family of
// characteristics, and carrying on in the same sense along the boundary).
//
// Nutations force the core at nearly one cycle per day: ω ≈ Ω, so β = 60° and
// λc = 30°. Coordinates are in units of the core's radius: x across the axis,
// z along it.

export function shearLayers({ rInner, omega = 1, reflections = 10 }) {
  const beta = Math.atan(Math.sqrt(4 / (omega * omega) - 1));
  const lam = Math.asin(omega / 2);
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1];

  function hit(p, d, R) {
    const b = dot(p, d), c = dot(p, p) - R * R, disc = b * b - c;
    if (disc < 0) return null;
    const s = [-b - Math.sqrt(disc), -b + Math.sqrt(disc)].filter((x) => x > 1e-6);
    return s.length ? Math.min(...s) : null;
  }

  function follow(p, d) {
    let len = Math.hypot(d[0], d[1]);
    d = [d[0] / len, d[1] / len];
    const path = [p];
    for (let i = 0; i < reflections; i++) {
      const so = hit(p, d, 1), si = hit(p, d, rInner);
      const inner = si !== null && si < so;
      const s = inner ? si : so;
      p = [p[0] + s * d[0], p[1] + s * d[1]];
      path.push(p);
      const r = Math.hypot(p[0], p[1]);
      const n = inner ? [p[0] / r, p[1] / r] : [-p[0] / r, -p[1] / r]; // into the fluid
      const t = [-n[1], n[0]];
      const options = [[-d[0], d[1]], [d[0], -d[1]]].filter((c) => dot(c, n) > 1e-9);
      if (!options.length) break;
      d = options.find((c) => Math.sign(dot(c, t)) === Math.sign(dot(d, t))) ?? options[0];
    }
    return path;
  }

  const rays = [];
  const cb = Math.cos(beta), sb = Math.sin(beta);
  for (const sx of [1, -1]) {
    for (const sz of [1, -1]) {
      // from the inner core, tangent to it, both ways
      const pi = [sx * rInner * Math.cos(lam), sz * rInner * Math.sin(lam)];
      const t = [-sx * sz * Math.sin(lam), Math.cos(lam)];
      rays.push(follow(pi, t), follow(pi, [-t[0], -t[1]]));
      // from the core–mantle boundary, along the characteristic that enters the fluid
      const po = [sx * Math.cos(lam), sz * Math.sin(lam)];
      for (const d of [[cb, sb], [cb, -sb], [-cb, sb], [-cb, -sb]]) {
        const inward = -dot(d, po);
        const tangential = Math.abs(d[0] * -po[1] + d[1] * po[0]);
        if (inward > 1e-6 && tangential < 0.999) rays.push(follow(po, d));
      }
    }
  }
  return rays;
}

// Gravito-inertial waves in a rotating, stably stratified sphere (gravity radial, Boussinesq; rotation
// rate Ω = 1, frequencies in units of Ω). A plane wave of wave vector k = (cos φ, sin φ) in the
// meridional plane (s across the axis, z along it) obeys
//     ω² = 4 sin²φ + N(r)² (cos φ · z/r − sin φ · s/r)²,
// and its energy travels at right angles to k. Where N varies, so does that direction: the
// characteristics curve (Dintrans, Rieutord & Valdettaro 1999). Where N = 0 (a convective region)
// they are the straight lines of pure inertial waves. Where no φ solves the relation the wave is
// evanescent, and the ray turns back at that surface.
//
// rInner, rOuter: the fluid's boundaries (units of the planet's radius); N(r): the buoyancy frequency;
// starts: [s, z] points on the outer boundary the rays leave from, inward. Returns paths of [s, z].
export function gravitoInertialRays({ rInner = 0.1, rOuter = 1, omega, N, starts, length = 9, step = 0.004 }) {
  const F = (phi, s, z) => {
    const r = Math.hypot(s, z) || 1e-9, n = N(r);
    const c = Math.cos(phi), si = Math.sin(phi);
    const x = c * (z / r) - si * (s / r);
    return 4 * si * si + n * n * x * x - omega * omega;
  };
  // the directions energy can travel in, at (s, z): from every root φ of F, both ways
  const directions = (s, z, samples = 180) => {
    const out = [];
    let a = 0, fa = F(0, s, z);
    for (let i = 1; i <= samples; i++) {
      const b = (Math.PI * i) / samples, fb = F(b, s, z);
      if (fa === 0 || fa * fb < 0) {
        let lo = a, hi = b, flo = fa;
        for (let k = 0; k < 30; k++) {
          const mid = (lo + hi) / 2, fm = F(mid, s, z);
          if (flo * fm <= 0) hi = mid; else { lo = mid; flo = fm; }
        }
        const phi = (lo + hi) / 2;
        out.push([-Math.sin(phi), Math.cos(phi)], [Math.sin(phi), -Math.cos(phi)]);
      }
      a = b; fa = fb;
    }
    return out;
  };
  const dot = (u, v) => u[0] * v[0] + u[1] * v[1];
  const inside = (p) => { const r = Math.hypot(p[0], p[1]); return r < rOuter && r > rInner; };

  function follow(p, d) {
    const path = [p.slice()];
    path.bends = new Set();
    let travelled = 0, sinceTurn = 0;
    while (travelled < length) {
      const q = [p[0] + step * d[0], p[1] + step * d[1]];
      const opts = inside(q) ? directions(q[0], q[1]) : [];
      if (opts.length && inside(q)) {
        // carry on along the same family: the direction nearest the one we had
        let best = opts[0];
        for (const o of opts) if (dot(o, d) > dot(best, d)) best = o;
        if (dot(best, d) > 0.6) { p = q; d = best; travelled += step; sinceTurn += step; if (sinceTurn > 0.02) { path.push(p.slice()); sinceTurn = 0; } continue; }
      }
      // a boundary, or a turning surface: switch to the other family, the one that stays in the
      // propagating region and keeps the same sense along the boundary
      const here = directions(p[0], p[1]);
      const r = Math.hypot(p[0], p[1]);
      const n = r > (rInner + rOuter) / 2 ? [-p[0] / r, -p[1] / r] : [p[0] / r, p[1] / r]; // into the fluid
      const t = [-n[1], n[0]];
      const cand = here.filter((o) => dot(o, d) < 0.98).filter((o) => {
        const q2 = [p[0] + 3 * step * o[0], p[1] + 3 * step * o[1]];
        return inside(q2) && directions(q2[0], q2[1]).length;
      });
      if (!cand.length) break;
      cand.sort((u, v) => (Math.sign(dot(v, t)) === Math.sign(dot(d, t))) - (Math.sign(dot(u, t)) === Math.sign(dot(d, t))) || dot(v, d) - dot(u, d));
      d = cand[0];
      path.push(p.slice());
      path.bends.add(path.length - 1);
      sinceTurn = 0;
    }
    path.push(p.slice());
    return path;
  }

  const rays = [];
  for (const [s, z] of starts) {
    const r = Math.hypot(s, z), p = [(s / r) * rOuter * 0.999, (z / r) * rOuter * 0.999];
    for (const d of directions(p[0], p[1])) if (dot(d, p) < -0.05) rays.push(follow(p, d));
  }
  return rays;
}
