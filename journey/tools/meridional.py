#!/usr/bin/env python3
"""Meridional maps of a kore solution, from the JSON of koreviz/export_web.py.

  meridional.py RUN_DIR [--out PNG] [--ngrid 600]

Reads RUN_DIR/kore_solution.json and draws, on a Cartesian (s, z) grid of the meridional plane:
  - the energy density amplitude, log10(sqrt(rho) |u|), normalised to its maximum;
  - a snapshot of sqrt(rho) u_phi at phase 0.
Also returns the gridded arrays through grid() for the texture exporter.
"""
import argparse, base64, json, os, sys
import numpy as np
from scipy.interpolate import RegularGridInterpolator


def arr(s):
    return np.frombuffer(base64.b64decode(s), dtype='<f4').astype(float)


def load(run):
    doc = json.load(open(os.path.join(run, 'kore_solution.json')))
    th = arr(doc['theta'])
    f = next(f for f in doc['fields'] if f['key'] == 'u')
    r = arr(f['r'])
    comps = {c: (arr(v['re']) + 1j*arr(v['im'])).reshape(r.size, th.size) for c, v in f['comps'].items()}
    ent = next((f for f in doc['fields'] if f['key'] == 't'), None)
    s = None
    if ent is not None:
        rs = arr(ent['r'])
        s = (arr(ent['comps']['s']['re']) + 1j*arr(ent['comps']['s']['im'])).reshape(rs.size, th.size)
    return doc['meta'], r, th, comps, s


def grid(run, ngrid=600, rho=None):
    """complex u_r, u_theta, u_phi (and sqrt(rho)-weighted |u|) on an (s, z) grid over the right half-plane"""
    meta, r, th, U, S = load(run)
    # pad theta to the poles so the interpolator covers [0, pi]
    thp = np.r_[0.0, th, np.pi]
    def pad(F):
        return np.c_[F[:, :1], F, F[:, -1:]]
    s = np.linspace(0, r.max(), ngrid)
    z = np.linspace(-r.max(), r.max(), 2*ngrid)
    S2, Z2 = np.meshgrid(s, z)
    R2 = np.hypot(S2, Z2)
    T2 = np.arctan2(S2, Z2)
    inside = (R2 <= r.max()) & (R2 >= r.min())
    pts = np.c_[np.clip(R2, r.min(), r.max()).ravel(), T2.ravel()]
    out = {}
    for c in 'rtp':
        F = pad(U[c])
        re = RegularGridInterpolator((r, thp), F.real)(pts).reshape(S2.shape)
        im = RegularGridInterpolator((r, thp), F.imag)(pts).reshape(S2.shape)
        out[c] = np.where(inside, re + 1j*im, 0)
    w = np.ones_like(R2) if rho is None else np.sqrt(rho(np.clip(R2, 0, r.max())))
    amp = w*np.sqrt(sum(abs(out[c])**2 for c in 'rtp'))
    # cylindrical components and the vorticity (fields go as exp(i m phi))
    m = meta['m']
    st, ct = np.sin(T2), np.cos(T2)
    us = out['r']*st + out['t']*ct
    uz = out['r']*ct - out['t']*st
    up = out['p']
    ds, dz = s[1] - s[0], z[1] - z[0]
    Ss = np.maximum(S2, ds)
    d_s = lambda F: np.gradient(F, ds, axis=1)
    d_z = lambda F: np.gradient(F, dz, axis=0)
    ws = 1j*m/Ss*uz - d_z(up)
    wp = d_z(us) - d_s(uz)
    wz = d_s(Ss*up)/Ss - 1j*m/Ss*us
    inner = inside & (R2 < r.max() - 3*ds)
    vort = np.where(inner, w*np.sqrt(abs(ws)**2 + abs(wp)**2 + abs(wz)**2), 0)
    return dict(meta=meta, s=s, z=z, R=R2, inside=inside, u=out, w=w, amp=amp, us=us, uz=uz, up=up,
                vort=vort, vort_c=(ws, wp, wz))


def polytrope_rho(r_out):
    return lambda r: np.sinc(r*r_out)   # n = 1: sin(pi x)/(pi x), np.sinc includes the pi


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('run')
    ap.add_argument('--out', default=None)
    ap.add_argument('--ngrid', type=int, default=500)
    ap.add_argument('--rout', type=float, default=0.99)
    ap.add_argument('--boussinesq', action='store_true')
    ap.add_argument('--core', type=float, default=None, help='mark the edge of the stratified core (planet radii)')
    a = ap.parse_args()
    import matplotlib; matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    g = grid(a.run, a.ngrid, None if a.boussinesq else polytrope_rho(a.rout))
    amp = g['amp']/g['amp'].max()
    snap = (g['w']*g['u']['p'].real)
    snap /= np.abs(snap).max()
    vort = g['vort']/np.percentile(g['vort'][g['inside']], 99.9)
    fig, ax = plt.subplots(1, 3, figsize=(13, 8.5), facecolor='k')
    ext = [g['s'][0], g['s'][-1], g['z'][0], g['z'][-1]]
    im0 = np.where(g['inside'], np.log10(amp + 1e-12), np.nan)
    ax[0].imshow(im0, origin='lower', extent=ext, cmap='inferno', vmin=-2.5, vmax=0)
    ax[1].imshow(np.where(g['inside'], snap, np.nan), origin='lower', extent=ext, cmap='RdBu_r', vmin=-0.5, vmax=0.5)
    ax[2].imshow(np.where(g['inside'], np.log10(vort + 1e-12), np.nan), origin='lower', extent=ext, cmap='inferno', vmin=-2, vmax=0)
    ax[2].set_title('log10 sqrt(rho)|curl u|', color='w')
    t = np.linspace(-np.pi/2, np.pi/2, 200)
    for x in ax:
        x.set_facecolor('k'); x.set_aspect('equal'); x.axis('off')
        if a.core:
            x.plot(a.core/a.rout*np.cos(t), a.core/a.rout*np.sin(t), 'w:', lw=0.6)
    m = g['meta']
    fig.suptitle(f"{os.path.basename(os.path.abspath(a.run))}: Ek {m.get('Ek', '')}, w {m.get('forcing_frequency')}, "
                 f"N {m['N']}, lmax {m['lmax']}", color='w')
    ax[0].set_title('log10 sqrt(rho)|u|', color='w'); ax[1].set_title('sqrt(rho) u_phi, phase 0', color='w')
    fig.tight_layout()
    fig.savefig(a.out or os.path.join(a.run, 'meridional.png'), dpi=110, facecolor='k')


if __name__ == '__main__':
    main()
