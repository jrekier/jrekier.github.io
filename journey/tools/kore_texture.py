#!/usr/bin/env python3
"""Bake a kore solution, or a weighted sum of several, into a texture for the journey page's cut faces.

  kore_texture.py RUN_DIR OUT.png [options]            one solution
  kore_texture.py --spec SPEC.json OUT.png [options]   a sum: SPEC = {"phi0": 0, "terms": [{"run": DIR, "weight": [re, im]}, ...]}

Each run holds kore_solution.json (koreviz/export_web.py). The texture covers one meridional half-plane: s from 0 to
rmax (planet radii, across the axis) left to right, z from -rmax to rmax bottom to top; height = 2 width. The fluid
lies between rin and rout planet radii (kore's radius 1 is rout planet radii).

A run's field goes as Re[F(s, z) e^{i(m phi + w t)}]. In a sum, every term must have the same |w|: a term is scaled by
its complex weight and taken at the longitude phi0; a term with w < 0 is conjugated, so that the sum is the amplitude of
e^{i |w| t} (its own m is used for its derivatives). Each component c of the vorticity is then Re[F_c e^{i|w|t}], so
    |curl u|^2 = A + Re[C e^{2 i |w| t}],   A = (1/2) sum |F_c|^2,   C = (1/2) sum F_c^2   (|C| <= A),
exactly. The texture stores, weighted by sqrt(rho) (the vorticity's share of the viscous heating goes as rho |w|^2):
    R  sqrt(A), log-compressed: 1 at the reference value (pct-th percentile), 0 at `decades` decades below it;
    G, B  c = C/A as (Re c, Im c)/2 + 1/2;
    A  1 inside the fluid, 0 outside.
The page reconstructs |w| = 10^(decades (R - 1)) sqrt(max(0, 1 + Re(c e^{2 i omega t}))).
Writes OUT.json beside it.
"""
import argparse, base64, json, os
import numpy as np
from scipy.interpolate import RegularGridInterpolator
from PIL import Image


def arr(s):
    return np.frombuffer(base64.b64decode(s), dtype='<f4').astype(float)


def load(run, key='u'):
    doc = json.load(open(os.path.join(run, 'kore_solution.json')))
    th = arr(doc['theta'])
    f = next(f for f in doc['fields'] if f['key'] == key)
    r = arr(f['r'])
    U = {c: (arr(v['re']) + 1j*arr(v['im'])).reshape(r.size, th.size) for c, v in f['comps'].items()}
    return doc['meta'], r, th, U


def vorticity(run, S, Z):
    """complex cylindrical vorticity (w_s, w_phi, w_z) of a run at points (S, Z) (kore units, regular grid), and meta"""
    meta, r, th, U = load(run)
    m = meta['m']
    thp = np.r_[0.0, th, np.pi]
    R = np.hypot(S, Z); T = np.arctan2(S, Z)
    pts = np.c_[np.clip(R, r.min(), r.max()).ravel(), T.ravel()]
    u = {}
    for c, F in U.items():
        Fp = np.c_[F[:, :1], F, F[:, -1:]]
        u[c] = (RegularGridInterpolator((r, thp), Fp.real)(pts) + 1j*RegularGridInterpolator((r, thp), Fp.imag)(pts)).reshape(S.shape)
    st, ct = np.sin(T), np.cos(T)
    us = u['r']*st + u['t']*ct; uz = u['r']*ct - u['t']*st; up = u['p']
    ds, dz = S[0, 1] - S[0, 0], Z[1, 0] - Z[0, 0]
    d_s = lambda F: np.gradient(F, ds, axis=1)
    d_z = lambda F: np.gradient(F, dz, axis=0)
    ws = 1j*m/S*uz - d_z(up)
    wp = d_z(us) - d_s(uz)
    wz = d_s(S*up)/S - 1j*m/S*us
    return (ws, wp, wz), meta


def fields_at(run, S, Z, h=2e-4, key='u'):
    """complex (u_s, u_phi, u_z) and vorticity (w_s, w_phi, w_z) of a run at arbitrary points (kore units), the
    derivatives by central differences of step h; key 'b' for the magnetic field (and its curl, the current)"""
    meta, r, th, U = load(run, key)
    m = meta['m']
    thp = np.r_[0.0, th, np.pi]
    itp = {c: (RegularGridInterpolator((r, thp), np.c_[F[:, :1], F, F[:, -1:]].real),
               RegularGridInterpolator((r, thp), np.c_[F[:, :1], F, F[:, -1:]].imag)) for c, F in U.items()}
    def cyl(Sx, Zx):
        R = np.hypot(Sx, Zx); T = np.arctan2(Sx, Zx)
        pts = np.c_[np.clip(R, r.min(), r.max()).ravel(), T.ravel()]
        u = {c: (fr(pts) + 1j*fi(pts)).reshape(Sx.shape) for c, (fr, fi) in itp.items()}
        st, ct = np.sin(T), np.cos(T)
        return u['r']*st + u['t']*ct, u['p'], u['r']*ct - u['t']*st
    us, up, uz = cyl(S, Z)
    d_s = lambda k: (cyl(S + h, Z)[k] - cyl(S - h, Z)[k])/(2*h)
    d_z = lambda k: (cyl(S, Z + h)[k] - cyl(S, Z - h)[k])/(2*h)
    ws = 1j*m/S*uz - d_z(1)
    wp = d_z(0) - d_s(2)
    wz = (cyl(S + h, Z)[1]*(S + h) - cyl(S - h, Z)[1]*(S - h))/(2*h)/S - 1j*m/S*us
    return (us, up, uz), (ws, wp, wz), meta


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('run', nargs='?'); ap.add_argument('out')
    ap.add_argument('--spec', default=None)
    ap.add_argument('--width', type=int, default=512)
    ap.add_argument('--rho', default='polytrope1')
    ap.add_argument('--rout', type=float, default=0.99, help='outer wall, planet radii (kore r = 1)')
    ap.add_argument('--rin', type=float, default=0.0, help='inner wall, planet radii')
    ap.add_argument('--rmax', type=float, default=1.0, help='half-size of the texture, planet radii')
    ap.add_argument('--decades', type=float, default=2.5)
    ap.add_argument('--pct', type=float, default=99.7)
    ap.add_argument('--trim', type=float, default=0.0, help='planet radii next to the walls left dark (Ekman layers)')
    ap.add_argument('--quantity', default='vort', help="'vort' (the vorticity), 'u' (the velocity) or 'b' (the magnetic field)")
    ap.add_argument('--polar', type=int, nargs=2, default=None, metavar=('NTH', 'NR'),
                    help='polar layout for a thin shell: NTH colatitudes (columns, north pole first) by NR radii '
                         '(rows, the outer wall at the top), between rin and rout')
    a = ap.parse_args()
    if a.polar:
        return polar(a)

    W, H = a.width, 2*a.width
    k = a.rout
    s = (np.arange(W) + 0.5)/W*a.rmax/k
    z = (np.arange(H) + 0.5)/H*2*a.rmax/k - a.rmax/k
    S, Z = np.meshgrid(s, z)
    R = np.hypot(S, Z)
    if a.spec:
        spec = json.load(open(a.spec))
        phi0 = spec.get('phi0', 0.0)
        comps = [0, 0, 0]; omegas = set(); sources = []
        for t in spec['terms']:
            wv, meta = vorticity(t['run'], S, Z)
            wgt = complex(*t['weight'])*np.exp(1j*meta['m']*phi0)
            w = meta.get('forcing_frequency', 0.0)
            omegas.add(round(abs(w), 9))
            for i in range(3):
                comps[i] = comps[i] + (wgt*wv[i] if w >= 0 else np.conj(wgt*wv[i]))
            sources.append(os.path.basename(os.path.abspath(t['run'])))
        assert len(omegas) == 1, 'terms at different frequencies'
        info_m, omega = 'sum', omegas.pop()
        N, lmax = meta['N'], meta['lmax']
    else:
        wv, meta = vorticity(a.run, S, Z)
        comps = list(wv); info_m = meta['m']; omega = meta.get('forcing_frequency', 0.0)
        N, lmax = meta['N'], meta['lmax']; sources = [os.path.basename(os.path.abspath(a.run))]
    if a.rho == 'polytrope1':
        wr = np.sqrt(np.sinc(np.clip(R*k, 0, 1)))
    elif a.rho.endswith('.npy'):
        # a table of (r, rho) in kore's radius (e.g. Model S, sampled from kore's own profile)
        tab = np.load(a.rho)
        wr = np.sqrt(np.interp(np.clip(R, tab[0, 0], tab[0, -1]), tab[0], tab[1]))
    else:
        wr = np.ones_like(R)
    comps = [wr*c for c in comps]
    A = 0.5*sum(abs(c)**2 for c in comps)
    C = 0.5*sum(c**2 for c in comps)
    inside = (R*k <= a.rout) & (R*k >= a.rin)
    lit = inside & (R*k <= a.rout - a.trim) & (R*k >= a.rin + (a.trim if a.rin > 0 else 0))
    amp = np.sqrt(A)
    ref = np.percentile(amp[lit], a.pct)
    Rch = np.clip(1 + np.log10(np.maximum(amp, 1e-300)/ref)/a.decades, 0, 1)
    Rch[~lit] = 0
    c = np.where(A > 0, C/np.maximum(A, 1e-300), 0)
    img = np.zeros((H, W, 4), np.uint8)
    img[..., 0] = np.round(255*Rch)
    img[..., 1] = np.round(255*np.clip(0.5 + 0.5*c.real, 0, 1))
    img[..., 2] = np.round(255*np.clip(0.5 + 0.5*c.imag, 0, 1))
    img[..., 3] = np.where(inside, 255, 0)
    Image.fromarray(img[::-1]).save(a.out)           # row 0 at the top (z = +rmax)
    info = dict(m=info_m, omega=abs(omega), decades=a.decades, rin=a.rin, rout=a.rout, rmax=a.rmax,
                ref=float(ref), N=N, lmax=lmax, source=sources)
    json.dump(info, open(os.path.splitext(a.out)[0] + '.json', 'w'), indent=1)
    print(a.out, info)


def polar(a):
    nth, nr = a.polar
    k = a.rout
    th = (np.arange(nth) + 0.5)/nth*np.pi
    rr = a.rin + (np.arange(nr) + 0.5)/nr*(a.rout - a.rin)          # planet radii
    T, Rp = np.meshgrid(th, rr)
    S, Z = Rp/k*np.sin(T), Rp/k*np.cos(T)                             # kore units
    terms = json.load(open(a.spec))['terms'] if a.spec else [{'run': a.run, 'weight': [1, 0]}]
    phi0 = json.load(open(a.spec)).get('phi0', 0.0) if a.spec else 0.0
    comps = [0, 0, 0]; omegas = set(); sources = []
    for t in terms:
        u, w, meta = fields_at(t['run'], S, Z, key='b' if a.quantity == 'b' else 'u')
        q = u if a.quantity in ('u', 'b') else w
        wgt = complex(*t['weight'])*np.exp(1j*meta['m']*phi0)
        f = meta.get('forcing_frequency', 0.0); omegas.add(round(abs(f), 9))
        for i in range(3):
            comps[i] = comps[i] + (wgt*q[i] if f >= 0 else np.conj(wgt*q[i]))
        sources.append(os.path.basename(os.path.abspath(t['run'])))
    assert len(omegas) == 1
    A = 0.5*sum(abs(c)**2 for c in comps); C = 0.5*sum(c**2 for c in comps)
    amp = np.sqrt(A)
    lit = (Rp <= a.rout - a.trim) & (Rp >= a.rin + a.trim)
    ref = np.percentile(amp[lit], a.pct)
    Rch = np.clip(1 + np.log10(np.maximum(amp, 1e-300)/ref)/a.decades, 0, 1); Rch[~lit] = 0
    c = np.where(A > 0, C/np.maximum(A, 1e-300), 0)
    img = np.zeros((nr, nth, 4), np.uint8)
    img[..., 0] = np.round(255*Rch)
    img[..., 1] = np.round(255*np.clip(0.5 + 0.5*c.real, 0, 1))
    img[..., 2] = np.round(255*np.clip(0.5 + 0.5*c.imag, 0, 1))
    img[..., 3] = 255
    Image.fromarray(img[::-1]).save(a.out)                           # the outer wall on the top row
    info = dict(layout='polar', quantity=a.quantity, omega=omegas.pop(), decades=a.decades, rin=a.rin, rout=a.rout,
                ref=float(ref), N=meta['N'], lmax=meta['lmax'], source=sources)
    json.dump(info, open(os.path.splitext(a.out)[0] + '.json', 'w'), indent=1)
    print(a.out, info)


if __name__ == '__main__':
    main()
