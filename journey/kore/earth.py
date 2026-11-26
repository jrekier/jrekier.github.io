import sys; sys.path.insert(0, '.')
from params_default import default_params
from earth_common import earth
par = default_params(); par.timescale='rotation'; par.set_scales()
earth(par, Ek=1e-7, N=400, lmax=640)
