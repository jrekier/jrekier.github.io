# Kore runs behind the journey-kore variant

The giants' cut faces show flows computed with Kore (github.com/repepo/kore, main at 22e46d37).

Model (`giant_common.py`): an n = 1 polytrope, wall at 0.99 R (no-slip), full sphere; the (2, 2) tide on the outer
wall (forcing 14) at ω = 1.5 Ω, retrograde in the rotating frame; Ek = ν/(ΩR²) = 1e-6, Pr = 1. A stably stratified
dilute core under a convective envelope (N = 0): N/Ω rises linearly outward to 2.5 and drops to 0 at the core's edge
(Saturn 0.62 R, Jupiter 0.45 R; illustrative shapes, after Mankovich & Fuller 2021 for Saturn).

| run | N | lmax | energy residual | time, memory (2 cores) |
|---|---|---|---|---|
| saturn.py | 450 | 241 | 2e-5 | 21 s, 4 GB |
| jupiter.py | 560 | 241 | 1e-2 | 29 s, 5.5 GB |

Radial resolution is the limit (the density falls to 1 % at the wall): N = 300 is under-resolved at Ek 1e-6.

## The Earth (`earth_common.py`, `earth.py`)

The liquid outer core, Boussinesq, inner core at 1221/3480, no-slip walls; forcing 14 with (m, symm) = (1, -1): the
radial velocity Y_2^1 at both walls (ICB amplitude = ricb × CMB's), at ω = Ω retrograde. In the mantle frame this is
what a tilted, flattened boundary does to the fluid once a day: the topographic part of the forcing by precession and
nutation. Ek = 1e-7, N = 400, lmax = 640 (23 s, 3.6 GB); against N = 300, lmax = 500 the interior vorticity agrees to
1e-5. The response is dominated by the spin-over (toroidal l = 1, a uniform vorticity, resonant at ω = Ω in a sphere);
`tools/drop_l1.py` removes it before export, so the face shows the waves. Texture covers the core only:
`kore_texture.py ear_e7b textures/kore-earth.png --rho uniform --rout 0.54623 --rin 0.19165 --rmax 0.54623 --trim 0.002 --width 640`.

## Mercury (`mercury_common.py`)

The liquid core to 2020 km, Boussinesq, inner core 0.33 R (ricb = 0.3986), no-slip walls, forced at the orbital
frequency n = (2/3) Ω of the 3:2 spin-orbit resonance. In Mercury's frame the solar tide has three terms at n (a Fourier
analysis of the Keplerian orbit, e = 0.2056): order 2 moving westward (relative size 0.90, the largest time-varying
term), order 2 eastward (0.33), order 0 (0.32 each way); the static bulge (0.65) holds the resonance. The libration
(38.5″, Margot et al. 2012) acts at the same frequency. One run per term, unit forcing:

| run | kind | forcing | (m, w) |
|---|---|---|---|
| `_tide22r` | tide, order 2, westward | 14 | (2, +2/3) |
| `_tide22p` | tide, order 2, eastward | 14 | (2, −2/3) |
| `_tide20` | tide, order 0 | 14 | (0, 2/3) |
| `_libration` | drag of the librating walls | 7 | (0, 2/3) |

`tools/mercury_weights.py PREFIX spec.json` gives each run its complex weight (physical wall velocity over the run's,
time from perihelion, φ = 0 the subsolar meridian at perihelion): the tide as the equilibrium displacement of the CMB,
h2 = 0.8 times r_c/R of the surface (rough); the libration ζ = γ sin M, whose triaxial push (α2 = 5e-4, Seuren et al.
2023; r = 1 + (α2/2) sin²θ cos 2(φ − ζ)) is a standing order-2 wave added to the two order-2 runs. The relative sign of
the triaxial push and the tide rests on ζ = +γ sin M with the long axis at the subsolar point at perihelion.
`kore_texture.py --spec spec.json OUT --rho uniform --rout 0.82787 --rin 0.33 --rmax 0.82787 --trim 0.002 --width 640`.

Three states on the page (stops `mercury`, `mercury-layer`, `mercury-strong`):
- **neutral core** (`mercury-neutral-spec.json`): Ek = 1e-7, N = 300, lmax = 499/501;
- **weakly stratified layer** (`mercury-mid-spec.json`): the same profile with N0 = 3 Ω (chosen from
  `mercury-strat-sweep2.png`, N0 = 1, 2, 3, 5 at Ek = 1e-6: the rays bend in the layer and stay out of its polar
  regions); Ek = 1e-7, N = 360, lmax = 399/401, out of core; agrees with N = 480, lmax = 501 to 1e-8;
- **strongly stratified layer** (`mercury-strat-spec.json`): the profile of Seuren et al. (2023), N = N0 √((1 + tanh(2(r − 0.7)/0.1))/2),
  N0 = 100 Ω, Pr = 0.1, no heat flux through the walls; Ek = 1e-7, N = 360, lmax = 399/401. Needs MUMPS out of core in
  7 GB: `solve.py -mat_mumps_icntl_14 50 -mat_mumps_icntl_22 1 -mat_mumps_ooc_tmpdir DIR` (2.8 GB, 45 s). The layer agrees
  with N = 480, lmax = 501 to 3e-10; the deep core is 1e-9 of the layer (round-off).

Checks: `mercury-tide-vs-libration.png` (each alone, neutral, Ek 1e-8): the same 70.5° network. At Ek = 1e-6, 1e-7,
1e-8 the libration's interior vorticity is 134, 63, 23 times the tide's: the tide's grows as Ek drops, the libration's
hardly changes, so at Mercury's Ek (~1e-12) they are comparable. `mercury-strat-sweep.png`: N0 = 0, 1, 10, 100 at
Ek = 1e-6, the regimes of Seuren et al. (inertial, equatorially trapped, confined to the layer).

## Ganymede (`ganymede.py`, stop `ganymede-ocean`)

The page's ocean (100 km of water under ~150 km of ice: ricb = 2384/2484), Boussinesq, no-slip walls, forced by the
obliquity tide: forcing 14 with (m, symm) = (1, -1) at ω = Ω, westward (retrograde). Ek = 1e-8, N = 128, lmax = 1200
(15 s, 1.6 GB; energy residual 3e-7; N = 80 left 2.5e-2). The response is dominated by the spin-over mode (toroidal
ℓ = 1, toroidal/poloidal energy ≈ 300), resonant at ω = Ω, as in the Earth's core; the rest is inertial waves in thin
shear layers bouncing between the walls (`ganymede-meridional.png`: |u| and the waves' vorticity).
On the page the row's Ganymede is cut open, close up, with two polar textures in the ocean (planet.js `rin`: colatitude
across, depth up): `kore-ganymede-flow` (|u| of the whole response, a soft glow) and `kore-ganymede-waves` (vorticity
without the spin-over, `tools/drop_l1.py`):
`kore_texture.py RUN OUT --rho uniform --rout 0.94305 --rin 0.90509 --polar 2048 64 [--quantity u | --trim 0.0004]`.
A further stop, `ganymede-field`, comes close to the ocean under the ice and shows the magnetic field the flow
induces, computed with kore (`ganymede-mag.py`): the same run with Ganymede's own field as a dipole at the centre
(B0 'dipole'), a conducting ocean (Em = η/(ΩR²) ≈ 4e-3 for ≈ 3 S/m) and insulating ice above and below; Le = 1e-6, so
the field does not act back on the flow (the flow is that of the hydrodynamic run; induction residual 2e-8). Its
outside part, from b_r at the ocean top: 99.95 % of b_r² is degree 1 there, the rest mostly ℓ ≥ 3, each falling as
(r_ocean/r)^(ℓ+2): 99.996 % dipolar at the surface. So:
On the page (close to the ocean under the ice, the ocean's flow and waves still shown; lines drawn whole as thin tubes, dimmed where they pass over the half cut away, which is drawn as a faint glass ghost so that every loop lands on a surface; Ganymede's own field only outside the close-up): the induced field as the dipole it is above the ice, lying in the
equatorial plane (order m = 1), turning westward relative to the moon once per orbit, in step with the ocean's
animation (one orbit per 6 s) and with kore's phase (arg c1 = −2.747); Ganymede's own axial dipole faint for comparison.
The in-ocean texture `kore-ganymede-b` (|b| without its poloidal ℓ = 1 part, `tools/drop_b_l1.py`: the field's fine
structure, which stays in the ocean) is kept but not shown.
The gravity signature is mentioned in the text only.

## Enceladus (stops `enceladus-ocean`, `enceladus-resonance`)

The page's ocean between the rocky core (0.77 R) and the ice (0.92 R): ricb = 0.837, Boussinesq, no-slip walls.
- `enceladus-ocean`: the libration of the ice shell in longitude (forcing 7, m = 0) at ω = Ω, Ek = 1e-8, N = 200,
  lmax = 999 (energy residual 2e-5; N = 96 or 128 left 2-5 %): shear layers from the critical latitude (30°)
  zigzagging in the shell (`enceladus-libration.py`, `enceladus-meridional.png`; texture `kore-enceladus-lib`, polar).
- `enceladus-resonance`: the eccentricity tide (forcing 2, Rekier et al. 2019's wall motion), order 2, at 60
  frequencies from 0.1 to 1.9 Ω, Ek = 1e-7, N = 120, lmax = 601 (residual 1e-6 at ω = 0.29; `enceladus-tide-sweep.py`,
  `tools/sweep_tex.sh`), one polar frame each, stacked in `kore-enceladus-sweep` (frame 0 at the bottom; planet.js
  `frames`). Spectra at Ek = 1e-6 (`enceladus-spectra.png`): the libration's is smooth (it acts through the walls'
  friction), the tide's (orders 0 and 2) spiky. The chart on the page is simplified, a few Lorentzian peaks placed at the
  sweep's clearest resonances (ω = 0.28, 0.80, 1.44, 1.72 Ω) with tidied heights; the cut shows the computed flow at the
  marker's frequency (frames blended), warm near a peak.

## The Sun (stops `sun`, `end`)

The convection zone as a uniformly rotating Boussinesq shell, ricb = 0.713, stress-free walls, no stratification: an
eigenvalue problem (forcing 0), m = 1, equatorially symmetric. A scan at Ek = 1e-5 (targets 0.2, 0.5, 1.0 Ω) found
modes near each; the least damped near 0.28 Ω (the range of the observed modes) is nearly featureless on a cut, so the
page shows the clearest one with shear layers, at ω = 1.010 Ω (damping 7e-4), recomputed at Ek = 1e-6, N = 100,
lmax = 240 (`sun.py`, solution 0; `sun-meridional.png`; texture `kore-sun`, Cartesian, rin 0.713). It is one inertial
mode of a shell of the convection zone's proportions, not one of the observed modes; the card says so.

## The Sun, coupled to its radiative interior (stops `sun`, `end`; texture `kore-sun-mixed`)

Replaces the convection-zone-only mode above on the page (that texture is kept). Built with kore's own script for the
set-up of Mukhopadhyay et al. 2026 (A&A 708, A253; convection zone and stably stratified radiative interior, Model S,
their rotation 'solar_P4', thermal wind off, rin 0.5 R☉, N 128, lmax 70):
`tests/diff_rot/mk_rz.py mix7 m=7 symm=1 rin=0.5 tw=0`, then `bin/solve.py` with the target of their Table 2
(`units.set_target(par, omega=-240.068, sigma=-25.593)`, 8 eigenpairs; `sun-mixed.py` is the resulting parameters.py).
Solution 0: −240.090 nHz, growth −25.593 nHz (paper −240.068, −25.593), residσ 2e-5: the mixed m = 7 mode of the
high-frequency retrograde class, with 99 % of its kinetic energy below 0.71 R☉ (the convection-zone HFR mode, solution 6
at −248.37 nHz, paper −248.5, has 1 %). Texture: `tools/kore_texture.py RUN OUT --rho kore/sun-mixed-rho.npy --rout
0.985 --rin 0.5 --rmax 0.985 --trim 0.004 --decades 4` (`--rho` now takes a table of ρ(r), here Model S from kore's
profile); `sun-mixed-meridional.png`. On the page: gain 0.8, show 2.2, so the convection-zone part shows beside the
radiative-zone ring.

Also tried: kore's whole-Sun example (`examples/smooth_sun`, m = 8 HFR mode, the HMI rotation) at N 320 and 480,
lmax 55 (the example's N 640 needs 21 GB): at N 480 the mode is at −271.2 nHz, growth −33.1 (the example −271.19,
−33.18), but only 0.01 % of its energy lies below 0.68 R☉, so it does not show the radiative interior's part; at N 320
the radiative zone held spurious fine rings (residσ 0.17).

## A hypothetical star (stop `exo`)

Illustrative: a convective core (ricb = 0.15) under a stably stratified envelope, Boussinesq (g = r), uniform N = 3 Ω
('user' profile 1/r, Beyonce = 9), Pr = 1, no-slip walls, forced by the (2,2) tide (forcing 14) at ω = 1.0 Ω,
Ek = 1e-5, N = 120, lmax = 301 (energy residual 7e-9; `star.py`, `star-meridional.png`; texture `kore-star`). With
Pr = 0.1 the waves were damped before they formed; Ek = 1e-6 (N = 180-240) gave NaNs in MUMPS whatever the options
tried, and N = 120 there was under-resolved. The waves gather near the equator and are guided towards the core, as
gravito-inertial waves are. Not shown on the page any more (the author: central bodies stay whole in orbital views; texture `kore-star` kept). On
the page the star takes Jupiter's place (Jupiter fades into it) and its planets the moons' orbits; planet b's lock
uses the same simplified model as Callisto's (`lockTrack`), with the in-tune orbit moving inward (Ma & Fuller 2021: the
star's mode frequencies rise as it evolves).

To rebuild a texture: in a run folder (bin/parameters.py = one of these files, with giant_common.py importable)
```
./bin/submatrices.py 2; mpiexec -n 2 ./bin/assemble.py; mpiexec -n 2 ./bin/solve.py; ./bin/spin_doctor.py 2
python3 koreviz/export_web.py --ntheta 481 --nr 400
python3 tools/kore_texture.py RUN textures/kore-saturn.png     # then to lossless WebP
python3 tools/meridional.py RUN --core 0.62                     # check figure (*-meridional.png here)
```
