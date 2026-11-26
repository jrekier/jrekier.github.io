#!/usr/bin/env python3
"""Weights that combine kore runs into Mercury's core flow at the orbital frequency n = (2/3) Omega (3:2 resonance).

  mercury_weights.py PREFIX OUT.json      runs PREFIX_tide22r, PREFIX_tide22p, PREFIX_tide20, PREFIX_libration

Forcing of the core, all at frequency n, time from perihelion, longitude phi from the subsolar meridian at perihelion:
- the solar tide, degree 2: the equilibrium displacement of the CMB, h2 (r_c/R) V/g, its three terms at n
  (Fourier coefficients of the Keplerian orbit, e = 0.2056): order 2 westward and eastward, order 0;
- the libration in longitude, zeta = gamma sin M (gamma = 38.5 arcsec, Margot et al. 2012): the drag of the walls
  (m = 0) and the push of the triaxial CMB, r = 1 + alpha sin^2(theta) cos 2(phi - zeta), whose radial velocity
  2 alpha zeta' sin^2(theta) sin 2phi is a standing order-2 wave: half westward, half eastward. alpha = alpha2/2 with
  alpha2 = 5e-4 the equatorial flattening of Seuren et al. (2023).
Each run has unit forcing; its weight is the physical wall velocity over the run's, at the place where the pattern peaks.
Units: lengths in CMB radii, times in 1/Omega (kore's).
"""
import json, sys, os, base64
import numpy as np

e, GM, R, a, g, h2 = 0.2056, 1.32712e20, 2.4397e6, 5.7909e10, 3.70, 0.8
Rc = 2.020e6
gamma = 38.5/206265
alpha = 5e-4/2
w = 2/3
W0 = GM*R**2/a**3
H = h2*(Rc/R)/g                       # CMB displacement per unit potential (rough: the CMB moves as r_c/R of the surface)

# Fourier coefficients of r^-3 and r^-3 e^{-2i lambda} over the orbit (units: n; lambda = sun's longitude seen from the body)
N = 4096; T = 4*np.pi; t = np.arange(N)*T/N
M = t.copy(); E = M.copy()
for _ in range(60): E = M + e*np.sin(E)
f = 2*np.arctan2(np.sqrt(1 + e)*np.sin(E/2), np.sqrt(1 - e)*np.cos(E/2)); r = 1 - e*np.cos(E)
lam = f - 1.5*t
k = np.round(np.fft.fftfreq(N, T/N)*2*np.pi).astype(int)
c2 = dict(zip(k, np.fft.fft(r**-3*np.exp(-2j*lam))/N))
d0 = dict(zip(k, np.fft.fft(r**-3)/N))

# desired complex wall velocity (kore units) of each run, in the run's own convention Re[D e^{i(m phi + w_run t)}]
D = {
    # r at the equator: tide (3/4) W0 c2 sin^2 theta, times i w_run H/Rc; plus the triaxial push -i alpha gamma w
    'tide22r': 1j*w*H*0.75*W0*c2[1]/Rc - 1j*alpha*gamma*w,
    'tide22p': -1j*w*H*0.75*W0*c2[-1]/Rc - 1j*alpha*gamma*w,
    # r at the pole: -(1/4) W0 (3cos^2 - 1) * 2 d0[1] -> -W0 d0[1] at the pole
    'tide20': 1j*w*H*(-W0*d0[1])/Rc,
    # phi at the equator: gamma w cos(w t)
    'libration': gamma*w + 0j,
}
where = {'tide22r': ('r', np.pi/2), 'tide22p': ('r', np.pi/2), 'tide20': ('r', 0.0), 'libration': ('p', np.pi/2)}

def arr(s): return np.frombuffer(base64.b64decode(s), dtype='<f4').astype(float)

prefix, out = sys.argv[1], sys.argv[2]
terms = []
for name in ['tide22r', 'tide22p', 'tide20', 'libration']:
    run = f'{prefix}_{name}'
    doc = json.load(open(os.path.join(run, 'kore_solution.json')))
    th = arr(doc['theta']); fu = next(x for x in doc['fields'] if x['key'] == 'u'); rr = arr(fu['r'])
    comp, th0 = where[name]
    F = (arr(fu['comps'][comp]['re']) + 1j*arr(fu['comps'][comp]['im'])).reshape(rr.size, th.size)[-1]
    j = np.argmin(abs(th - th0))
    wgt = D[name]/F[j]
    terms.append({'run': run, 'weight': [wgt.real, wgt.imag], 'wall_velocity': abs(D[name])})
    print(f"{name:10s} wall velocity {abs(D[name]):.3e} (Omega Rc)  weight {wgt:.3e}")
json.dump({'phi0': 0.0, 'terms': terms}, open(out, 'w'), indent=1)
