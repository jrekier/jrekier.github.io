# shared by the giant-planet runs (imported by their parameter files)
import numpy as np
def giant(par, core, Nmax=2.5, Ek=1e-4, w=1.5, N=64, lmax=61, ncpus=2):
    """(2,2) tide at frequency w (units of Ω, positive = retrograde) on the outer wall of an n = 1 polytrope
    with a stably stratified dilute core out to `core` (in planet radii) under a convective envelope (N = 0).
    N/Ω rises roughly linearly outward through the core to Nmax and drops to 0 at its edge (cf. Mankovich &
    Fuller 2021 for Saturn). dS/dr = N²/(Beyonce g) with Beyonce = 1, g the polytrope's (1 at x = 1)."""
    par.ricb = 0.0
    par.m, par.symm = 2, 1
    par.structure = 'polytrope'; par.polytrope_n = 1.0
    par.r_out = 0.99
    par.thermal = 1
    par.Beyonce = 1.0
    # N/Ω profile in x = r r_out (planet radii); g(x) of the n = 1 polytrope: θ'(πx)/θ'(π), θ'(ξ) = (ξ cos ξ - sin ξ)/ξ²
    Nx = f"{Nmax}*(x/{core})*0.5*(1-erf((x-{0.94*core})/{0.035*core}))"
    gx = "maximum(-(pi*x*cos(pi*x)-sin(pi*x))/(pi*x+1e-30)**2*pi, 1e-30)"
    par.stratification = 'user'
    par.stratification_profile = f"({Nx})**2/{gx}"
    par.ViscosD = Ek; par.ThermaD = Ek
    par.bco = 1; par.bco_thermal = 0
    par.forcing = 14
    par.forcing_frequency = w
    par.forcing_amplitude_cmb = 1.0
    par.forcing_amplitude_icb = 0.0
    par.N, par.lmax, par.ncpus = N, lmax, ncpus
