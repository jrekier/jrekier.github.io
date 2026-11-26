# Mercury's liquid core (Boussinesq), forced at the orbital frequency n = (2/3) Ω of the 3:2 spin-orbit resonance.
def mercury(par, kind, Ek=1e-7, N=300, lmax=None, ncpus=2, N0=0.0, rc=0.7, h=0.1, Pr=0.1, ricb=None):
    """kind: 'tide22r' the (2,2) tide moving westward (w = +2/3, the largest term: 1 - 5e²/2 of the circular tide),
    'tide22p' the (2,2) tide moving eastward (w = -2/3, 17e²/2), 'tide20' the (2,0) eccentricity tide (w = 2/3),
    'libration' the libration of the mantle in longitude (forcing 7, m = 0). Unit amplitudes: the radial velocity
    of the outer wall (tides), the libration angle (libration). The inner core is held at rest (its own tide and
    libration left out)."""
    par.structure = 'Boussinesq'
    par.thermal = 0
    par.ricb = 0.33/(2020/2440) if ricb is None else ricb   # inner core 0.33 R, liquid core to 2020 km
    if N0 > 0:
        # Seuren et al. (2023): N = N0 sqrt((1 + tanh(2 (r - rc)/h))/2), neutral below rc; Boussinesq g = r, so
        # N² = Beyonce r dS/dr with Beyonce = N0²; Pr = 0.1, no heat flux through the walls
        par.thermal = 1
        par.Beyonce = N0**2
        par.stratification = 'user'
        par.stratification_profile = f"0.5*(1 + tanh(2*(r - {rc})/{h}))/r"
        par.ThermaD = Ek/Pr
        par.bci_thermal, par.bco_thermal = 1, 1
    par.bci, par.bco = 1, 1
    par.ViscosD = Ek
    w = 2/3
    if kind == 'tide22r':   par.m, par.symm, par.forcing, par.forcing_frequency = 2, 1, 14, w
    elif kind == 'tide22p': par.m, par.symm, par.forcing, par.forcing_frequency = 2, 1, 14, -w
    elif kind == 'tide20':  par.m, par.symm, par.forcing, par.forcing_frequency = 0, 1, 14, w
    elif kind == 'libration': par.m, par.symm, par.forcing, par.forcing_frequency = 0, 1, 7, w
    par.forcing_amplitude_cmb = 1.0
    par.forcing_amplitude_icb = 0.0
    if lmax is None:
        lmax = 501 if par.m == 2 else 499   # lmax - m + 1 a multiple of 2 ncpus
    par.N, par.lmax, par.ncpus = N, lmax, ncpus
