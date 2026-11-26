import sys; sys.path.insert(0, '.')
from params_default import default_params
par = default_params(); par.timescale='rotation'; par.set_scales()
# a star a little heavier than the Sun, simplified: a convective core (r < 0.15) under a stably stratified envelope
# (Boussinesq, g = r, uniform N = N0 Omega), forced by the (2,2) tide of a close-in planet: the radial velocity Y22 at
# the surface, at frequency w = 1 (rotating frame); no-slip walls (forcing 14)
par.structure = 'Boussinesq'; par.magnetic = 0
par.ricb = 0.15
par.thermal = 1
par.Beyonce = 3**2
par.stratification = 'user'
par.stratification_profile = "1/r"
Ek = 1e-5
par.ViscosD = Ek; par.ThermaD = Ek
par.bci_thermal, par.bco_thermal = 1, 1
par.bci, par.bco = 1, 1
par.m, par.symm, par.forcing, par.forcing_frequency = 2, 1, 14, 1.0
par.forcing_amplitude_cmb = 1.0; par.forcing_amplitude_icb = 0.0
par.N, par.lmax, par.ncpus = 120, 301, 2
