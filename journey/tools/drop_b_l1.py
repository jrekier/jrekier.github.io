#!/usr/bin/env python3
"""Remove the poloidal degree-1 part of a kore solution's magnetic field (the part that reaches outside as a dipole).

  drop_b_l1.py RUN_DIR    (RUN_DIR has bin/parameters.py and magnetic.npy, ricb > 0)

Writes RUN_DIR/magnetic_full.npy (the original, once) and replaces magnetic.npy by the field without the poloidal l = 1
coefficients. Restore with: mv magnetic_full.npy magnetic.npy
"""
import os, sys
import numpy as np
run = os.path.abspath(sys.argv[1])
sys.path.insert(0, os.path.join(run, 'bin'))
os.chdir(run)
from parameters import par
import utils as ut
full = 'magnetic_full.npy'
if not os.path.exists(full):
    os.rename('magnetic.npy', full)
sol = np.load(full)
lp, lt, _ = ut.ell(par.m, par.lmax, ut.bsymm)
out = sol.copy()
for k, l in enumerate(lp):                     # the poloidal coefficients come first, one row of N per l
    if l == 1:
        out[k*par.N:(k + 1)*par.N, ...] = 0
        print('dropped poloidal l = 1 (row %d)' % k)
np.save('magnetic.npy', out)
