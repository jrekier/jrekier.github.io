import sys; sys.path.insert(0, '.')
from params_default import default_params
par = default_params(); par.timescale='rotation'; par.set_scales()
# the Sun's convection zone as a uniformly rotating Boussinesq shell (r_i = 0.713), stress-free walls: inertial eigenmodes
par.structure = 'Boussinesq'; par.thermal = 0; par.magnetic = 0
par.ricb = 0.713; par.m, par.symm = 1, 1
par.bci, par.bco = 0, 0
par.ViscosD = 1e-6
par.forcing = 0
par.rtau, par.itau = 0, 1.009
par.nev = 4; par.which_eigenpairs = 'TM'
par.N, par.lmax, par.ncpus = 100, 240, 2
