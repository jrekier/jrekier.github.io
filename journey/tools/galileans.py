import sys
import numpy as np
from PIL import Image, ImageFilter
W,H=2048,1024
rng=np.random.default_rng(7)
lon=(np.arange(W)+0.5)/W*2*np.pi-np.pi
lat=np.pi/2-(np.arange(H)+0.5)/H*np.pi
LON,LAT=np.meshgrid(lon,lat)
P=np.stack([np.cos(LAT)*np.cos(LON),np.cos(LAT)*np.sin(LON),np.sin(LAT)],-1)

def noise(octaves=7, base=2.0, waves=20, seed=0):
    r=np.random.default_rng(seed); out=np.zeros((H,W))
    amp=1.0; k=base
    for o in range(octaves):
        for _ in range(waves):
            d=r.normal(size=3); d/=np.linalg.norm(d)
            out+=amp*np.sin(k*(P@d)+r.uniform(0,2*np.pi))
        amp*=0.5; k*=2.1
    out-=out.min(); return out/out.max()

def spots(n, rmin, rmax, seed):
    r=np.random.default_rng(seed); m=np.zeros((H,W)); halo=np.zeros((H,W))
    for _ in range(n):
        d=r.normal(size=3); d/=np.linalg.norm(d)
        ang=np.arccos(np.clip(P@d,-1,1)); rad=r.uniform(rmin,rmax)
        m=np.maximum(m,np.exp(-(ang/rad)**2)); halo=np.maximum(halo,np.exp(-(ang/(r.uniform(2.5,6)*rad))**2)*r.uniform(0.2,0.9))
    return m,halo

def mix(a,b,t): return a*(1-t[...,None])+b*t[...,None]
def col(h): return np.array([int(h[i:i+2],16) for i in (1,3,5)],float)/255
moon=np.roll(np.asarray(Image.open(sys.argv[1]).convert('L').resize((W,H)),float)[::-1],W//3,axis=1)/255
moon_hp=moon-np.asarray(Image.fromarray((moon*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(8)),float)/255

def save(rgb,name):
    Image.fromarray((np.clip(rgb,0,1)*255).astype(np.uint8)).save(sys.argv[2]+'/'+name,quality=86)

# Io: sulphur yellows, orange and white patches, dark volcanic centres with red rings
n1=noise(5,2,24,1); n2=noise(4,3,24,2)
img=mix(np.broadcast_to(col('#d8c45c'),(H,W,3)),np.broadcast_to(col('#c8843a'),(H,W,3)),np.clip((n1-0.45)*3,0,1))
img=mix(img,np.broadcast_to(col('#efe8c8'),(H,W,3)),np.clip((n2-0.6)*3.5,0,1))
polar=np.clip((np.abs(LAT)-0.9)*2.2,0,1); img=mix(img,np.broadcast_to(col('#8a6a4a'),(H,W,3)),polar*0.7)
fine=noise(4,24,20,4)
img=img*(0.88+0.24*fine[...,None])+moon_hp[...,None]*0.25
v,halo=spots(45,0.006,0.02,3)
img=mix(img,np.broadcast_to(col('#b8402a'),(H,W,3)),halo*0.55)
img=mix(img,np.broadcast_to(col('#1c1410'),(H,W,3)),v)
save(img,'io.jpg')

# Europa: ivory ice, mottled darker terrain, reddish-brown lineae
n1=noise(5,2,24,11)
img=mix(np.broadcast_to(col('#e4dccb'),(H,W,3)),np.broadcast_to(col('#b08a64'),(H,W,3)),np.clip((n1-0.55)*2.5,0,1)*0.8)
lines=np.zeros((H,W)); r=np.random.default_rng(12)
for _ in range(38):
    d=r.normal(size=3); d/=np.linalg.norm(d)  # great circle: points with P·d ≈ 0, on an arc
    width=r.uniform(0.003,0.008); band=np.exp(-((P@d)/width)**2)
    c=r.normal(size=3); c/=np.linalg.norm(c); arc=np.clip((P@c-r.uniform(-0.2,0.5))*6,0,1)
    lines=np.maximum(lines,band*arc*r.uniform(0.5,1))
img=mix(img,np.broadcast_to(col('#8a4a2c'),(H,W,3)),lines*0.55)
fine=noise(4,20,20,13)
img=mix(img,np.broadcast_to(col('#a07858'),(H,W,3)),np.clip((fine-0.6)*3,0,1)*0.45)
img=img+moon_hp[...,None]*0.18
save(img,'europa.jpg')

# Ganymede: dark old terrain cut by lighter grooved bands, bright craters
n1=noise(4,1.6,24,21); grooves=0.5+0.5*np.sin(240*(P@np.array([0.3,0.8,0.5]))+40*noise(4,2,16,22))
light=np.clip((n1-0.48)*4,0,1)
img=mix(np.broadcast_to(col('#5f554b'),(H,W,3)),np.broadcast_to(col('#a9a196'),(H,W,3)),light)
img=img*(1+0.12*(grooves[...,None]-0.5)*light[...,None])+moon_hp[...,None]*0.7
polar=np.clip((np.abs(LAT)-1.0)*2.5,0,1); img=mix(img,np.broadcast_to(col('#d8d8d8'),(H,W,3)),polar*0.6)
save(img,'ganymede.jpg')

# Callisto: dark, heavily cratered, speckled with bright fresh craters
n1=noise(4,2,24,31)
img=mix(np.broadcast_to(col('#3e342b'),(H,W,3)),np.broadcast_to(col('#6b5d4e'),(H,W,3)),n1)
img=img+moon_hp[...,None]*0.9
sp,_=spots(400,0.002,0.006,32); img=mix(img,np.broadcast_to(col('#e8e4dc'),(H,W,3)),sp*0.9)
d=np.array([0.2,-0.9,0.3]); d/=np.linalg.norm(d); ang=np.arccos(np.clip(P@d,-1,1))
img=mix(img,np.broadcast_to(col('#8c7f70'),(H,W,3)),np.exp(-(ang/0.12)**2)*0.8+0.15*(0.5+0.5*np.cos(ang*60))*np.exp(-(ang/0.4)**2))  # a multi-ring basin
save(img,'callisto.jpg')
print('ok')
