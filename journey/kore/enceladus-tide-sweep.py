# Enceladus: the ocean between the rocky core (0.77 R) and the ice shell (0.92 R), Boussinesq, no-slip walls, forced by
# the libration of the ice shell in longitude (forcing 7, m = 0); the core held still. Frequency in units of Omega.
from params_default import default_params
par = default_params(); par.timescale = 'rotation'
par.Ek = 1e-7
par.set_scales()
par.structure = 'Boussinesq'; par.thermal = 0
par.ricb = 0.77/0.92
par.bci, par.bco = 1, 1
par.m, par.symm = 2, 1
par.forcing = 2; par.forcing_frequency = 0.29  # swept from 0.1 to 1.9 (60 values), tools/sweep_tex.sh
par.forcing_amplitude_cmb = 1.0; par.forcing_amplitude_icb = 0.0
par.N, par.lmax, par.ncpus = 120, 601, 2
