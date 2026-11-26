# Ganymede: the obliquity tide on the page's ocean, Ek = 1e-8 (N = 128, lmax = 1200: energy residual 3e-7)
from params_default import default_params
par = default_params(); par.timescale = 'rotation'; par.set_scales()
par.structure = 'Boussinesq'; par.thermal = 0
par.ricb = 2384/2484            # the page's Ganymede ocean: 100 km of water under ~150 km of ice
par.bci, par.bco = 1, 1
par.m, par.symm = 1, -1         # the obliquity tide, degree 2 order 1
par.forcing = 14; par.forcing_frequency = 1.0   # westward (retrograde), one cycle per orbit = per rotation
par.forcing_amplitude_cmb = 1.0; par.forcing_amplitude_icb = 0.0
par.ViscosD = 1e-8
par.N, par.lmax, par.ncpus = 128, 1200, 2
