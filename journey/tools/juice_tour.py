"""JUICE's real tour of the Jovian system, packed for the journey page: textures/juice-tour.json

Sources (in textures-src/juice/):
  juice_3h.bin  JUICE every 3 h from 2031-07-01 00:00 TDB, Int32 km, J2000 equatorial, relative to
                the centre of each segment of ESA's SPICE kernel juice_crema_5_2_v01.bsp (Jupiter,
                Ganymede or Callisto: see RUNS)
  moons_3h.bin  Io, Europa, Ganymede, Callisto on the same grid, Int32 km relative to Jupiter
                (JPL Horizons, ICRF)

Output: Jupiter-equatorial frame, mapped to the scene's (x = node, y = Jupiter's pole, z = −(pole × node)),
  a header of 16 Float64: K, L, step (days), JD0, then 4 × (phase at JD0, rad/day), then the Sun's direction
  at the end (x, y, z), 0 — then K × 3 Float32 JUICE (km), from arrival to Ganymede capture —
  then 4 × L Int16 the moons' phase residuals from the linear fit (µrad), every 12 h.
"""
import math
import os
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "..", "textures-src", "juice")
OUT = os.path.join(HERE, "..", "textures", "juice-tour.json")  # the binary below, base64 in JSON (served everywhere)
N, JD0, STEP = 10481, 2463048.5, 0.125
RUNS = [[599,1767],[503,1],[599,742],[503,1],[599,192],[503,1],[599,144],[504,1],[599,304],[504,2],[599,132],[504,1],[599,215],[504,2],[599,132],[504,1],[599,132],[504,2],[599,132],[504,1],[599,132],[504,2],[599,331],[504,2],[599,132],[504,1],[599,399],[504,2],[599,399],[504,1],[599,132],[504,1],[599,200],[504,1],[599,132],[504,2],[599,132],[504,1],[599,132],[504,2],[599,132],[504,1],[599,666],[504,2],[599,200],[503,2],[599,386],[503,2],[599,248],[504,3],[599,603],[504,3],[599,281],[503,2],[599,140],[504,5],[599,1020],[503,744]]
GM_GANYMEDE = 9887.8  # km³/s²

J = np.fromfile(os.path.join(SRC, "juice_3h.bin"), dtype="<i4").reshape(N, 3).astype(float)
M = np.fromfile(os.path.join(SRC, "moons_3h.bin"), dtype="<i4").reshape(4, N, 3).astype(float)
centre = np.concatenate([[c] * n for c, n in RUNS])
assert len(centre) == N
for k in range(N):  # all relative to Jupiter
    if centre[k] != 599:
        J[k] += M[centre[k] - 501, k]

# where JUICE is captured by Ganymede for good (two-body energy turns negative)
rel = J - M[2]
vel = np.gradient(rel, axis=0) / (STEP * 86400)
energy = 0.5 * (vel * vel).sum(1) - GM_GANYMEDE / np.linalg.norm(rel, axis=1)
unbound = np.where(energy >= 0)[0]
K = unbound[-1] + 2

# Jupiter's equator (IAU pole), in the scene's axes
ra, dec = math.radians(268.056595), math.radians(64.495303)
pole = np.array([math.cos(dec) * math.cos(ra), math.cos(dec) * math.sin(ra), math.sin(dec)])
node = np.cross([0, 0, 1], pole); node /= np.linalg.norm(node)
third = np.cross(pole, node)
local = lambda X: np.stack([X @ node, X @ pole, -(X @ third)], -1)
JL, ML = local(J[:K]), local(M[:, :K])

t = np.arange(K) * STEP
fits, residuals = [], []
L = (K - 1) // 4 + 2
for m in range(4):
    angle = np.unwrap(np.arctan2(-ML[m, :, 2], ML[m, :, 0]))
    n, phase0 = np.polyfit(t, angle, 1)
    res = angle - (n * t + phase0)
    idx = np.minimum(np.arange(L) * 4, K - 1)
    residuals.append(np.round(res[idx] * 1e6).astype("<i2"))
    fits += [phase0, n]
    print(["Io", "Europa", "Ganymede", "Callisto"][m], f"period {2 * math.pi / n:.4f} d, residual ≤ {abs(res).max() * 1e3:.1f} mrad")

# the Sun seen from Jupiter at the end (Horizons, ICRF, km), interpolated
s0, s1 = np.array([2464128.5, -741755535.67, 11713578.17, 23075202.79]), np.array([2464308.5, -715706990.32, -181805869.66, -60505991.91])
jd = JD0 + (K - 1) * STEP
f = (jd - s0[0]) / (s1[0] - s0[0])
sun = local((s0[1:] * (1 - f) + s1[1:] * f)[None])[0]
sun /= np.linalg.norm(sun)

header = np.array([K, L, STEP, JD0, *fits, *sun, 0], dtype="<f8")
assert len(header) == 16
import base64, json
blob = header.tobytes() + JL.astype("<f4").tobytes() + b"".join(r.tobytes() for r in residuals)
with open(OUT, "w") as fh:
    json.dump({"source": "ESA SPICE juice_crema_5_2_v01.bsp; JPL Horizons (moons); see tools/juice_tour.py", "data": base64.b64encode(blob).decode()}, fh)
print(f"K={K} (to JD {jd:.2f}), {os.path.getsize(OUT)} bytes")
