
from params_default import default_params
import numpy as np
par = default_params()
par.timescale = 'rotation'
par.set_scales()
par.m = 7; par.symm = 1; par.ricb = 0.5/0.985; par.thermal = 1
par.structure = 'old model S prototype'; par.solar_density_window = 'sun'; par.r_out = 0.985
par.stratification = 'solar_rz'; par.diffusivity = 'solar_rz'
par.aux1 = 0.0; par.aux2 = 0.1; par.aux3 = 0.68; par.aux4 = 0.06; par.aux5 = 0.0   # used only if rz = 0
par.solar_rz_dSdr = 2.61539363583815
par.visc0 = 0.01; par.therm0 = 0.04; par.visc_pow = 0.0; par.therm_pow = 0.0
par.diff_rot = 1; par.diff_rot_type = 'solar_P4'; par.diff_rot_frame = 456.0
par.diff_rot_file = ''; par.diff_rot_nmax = 12; par.diff_rot_window = 'sun'
par.thermal_wind = 0; par.thermal_wind_radial = 0
par.Gaspard = 1.0; par.Beyonce = 48618.6968261404; par.ViscosD = 7.426374198525704e-05; par.ThermaD = 7.426374198525704e-05
par.bci = 0; par.bco = 0; par.bci_thermal = 1; par.bco_thermal = 0
par.ncpus = 1; par.N = 128; par.lmax = 70
par.rtau = 0; par.itau = 1.0; par.nev = 20; par.which_eigenpairs = 'TM'
import units; units.set_target(par, omega=-240.068, sigma=-25.593); par.nev = 8; par.which_eigenpairs = 'TM'
