import sys; sys.path.insert(0, '.')
from params_default import default_params
from giant_common import giant
par = default_params(); par.timescale='rotation'; par.set_scales()
giant(par, core=0.45, Ek=1e-6, N=560, lmax=241, ncpus=2)
