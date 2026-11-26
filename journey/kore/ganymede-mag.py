# Ganymede: the obliquity tide on the page's ocean, with Ganymede's own dipole field and a conducting ocean (kinematic
# in effect: Le ~ 1e-6, the Lorentz force negligible); insulating ice above and below. Em = eta/(Omega R^2) for
# sigma ~ 3 S/m (eta = 1/(mu0 sigma) ~ 2.7e5 m^2/s, Omega = 1.016e-5 s^-1, R = 2484 km): ~ 4e-3.
from params_default import default_params
par = default_params(); par.timescale = 'rotation'
par.Ek = 1e-8
par.Le = 1e-6
par.Em = 4e-3
par.set_scales()
par.structure = 'Boussinesq'; par.thermal = 0
par.ricb = 2384/2484
par.bci, par.bco = 1, 1
par.m, par.symm = 1, -1
par.forcing = 14; par.forcing_frequency = 1.0
par.forcing_amplitude_cmb = 1.0; par.forcing_amplitude_icb = 0.0
par.magnetic = 1
par.B0 = 'dipole'
par.innercore = 'insulator'; par.mantle = 'insulator'
par.N, par.lmax, par.ncpus = 128, 1200, 2
