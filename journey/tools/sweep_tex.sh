#!/bin/bash
# sweep_tex.sh NAME W0 W1 NW [I0 I1]: for frequency indices I0..I1 of linspace(W0, W1, NW): assemble, solve, budget, export
# and a polar texture frame frames/fNN.png; dissipation to frames/sweep.dat
# (RUNS: the folder of kore runs; KORE: kore's clone; KORE_ENV: a script setting up kore's Python environment)
RUNS=${RUNS:-$HOME/runs}; KORE=${KORE:-$HOME/kore}
cd "$RUNS/$1" && { [ -z "$KORE_ENV" ] || source "$KORE_ENV"; }
export OPTS="-mat_mumps_icntl_14 50 -mat_mumps_icntl_22 1 -mat_mumps_ooc_tmpdir ${TMPDIR:-/tmp}/ooc"
mkdir -p frames
[ -f submatrices.npz ] || python bin/submatrices.py 2 > sub.log 2>&1
I0=${5:-0}; I1=${6:-$(($4-1))}
for i in $(seq $I0 $I1); do
  w=$(python -c "import numpy as np; print(f'{np.linspace($2,$3,$4)[$i]:.6f}')")
  python - <<PY
import re
p='bin/parameters.py'; s=open(p).read()
s=re.sub(r'par\.forcing_frequency = [-0-9.e]+', 'par.forcing_frequency = $w', s); open(p,'w').write(s)
PY
  mpiexec -n 2 python bin/assemble.py > asm.log 2>&1 && mpiexec -n 2 python bin/solve.py $OPTS > solve.log 2>&1 && python bin/spin_doctor.py 2 > sd.log 2>&1
  python -c "
import numpy as np
f=np.loadtxt('flow.dat',ndmin=2)[-1]
print($i, $w, f[25])" >> frames/sweep.dat
  python "$KORE/koreviz/export_web.py" --ntheta 1201 --nr 120 --fields u > /dev/null
  python ../tools/kore_texture.py . frames/f$(printf %02d $i).png --rho uniform --rout 0.92 --rin 0.77 --polar 1024 32 --trim 0.0015 > /dev/null
done
