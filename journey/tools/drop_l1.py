#!/usr/bin/env python3
"""Remove the toroidal degree-1 part (the spin-over, a uniform-vorticity flow and its Ekman layers) of a kore solution.

  drop_l1.py RUN_DIR    (run from anywhere; RUN_DIR has bin/parameters.py and flow.npy, ricb > 0)

Writes RUN_DIR/flow_full.npy (the original, once) and replaces flow.npy by the solution without the toroidal l = 1
coefficients. Restore with: mv flow_full.npy flow.npy
"""
import os, sys
import numpy as np
run = os.path.abspath(sys.argv[1])
sys.path.insert(0, os.path.join(run, 'bin'))
os.chdir(run)
from parameters import par
import utils as ut
full = 'flow_full.npy'
if not os.path.exists(full):
    os.rename('flow.npy', full)
sol = np.load(full)
assert par.ricb > 0, 'written for a shell'
lp, lt, _ = ut.ell(par.m, par.lmax, par.symm)
n = len(lp)*par.N            # poloidal coefficients (one row of N per l), then the toroidal ones
out = sol.copy()
for k, l in enumerate(lt):
    if l == 1:
        out[n + k*par.N: n + (k + 1)*par.N, ...] = 0
        print('dropped toroidal l = 1 (row %d)' % k)
np.save('flow.npy', out)
