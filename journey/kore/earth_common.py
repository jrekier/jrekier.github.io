# The Earth's liquid outer core (Boussinesq, inner core 1221/3480), forced at the diurnal frequency.
def earth(par, Ek=1e-6, w=1.0, forcing=14, N=160, lmax=240, ncpus=2, icb=None):
    """Forcing 14 with (m, symm) = (1, -1): the radial velocity Y_2^1 at both walls, at frequency w (units of Ω,
    positive retrograde). In the mantle frame a tilted, flattened boundary moving past the fluid gives this pattern at
    one cycle per day (retrograde): the topographic part of the forcing by precession and nutation. The amplitude at
    each wall goes as its radius (same flattening and tilt): ICB/CMB = ricb."""
    par.structure = 'Boussinesq'
    par.thermal = 0
    par.ricb = 1221/3480
    par.m, par.symm = 1, -1
    par.bci, par.bco = 1, 1
    par.ViscosD = Ek
    par.forcing = forcing
    par.forcing_frequency = w
    par.forcing_amplitude_cmb = 1.0
    par.forcing_amplitude_icb = par.ricb if icb is None else icb
    par.N, par.lmax, par.ncpus = N, lmax, ncpus
