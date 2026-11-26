"""Build the journey's textures (WebP) from their sources.

Sources (see textures/README.md for credits):
  sss/   Solar System Scope, CC BY 4.0 (the Qt 3D copies; Earth 4K from the three.js examples)
  nasa/  NASA 3D Resources (Galileo and Cassini mosaics)
  gen/   generated here (tools/galileans.py)
Usage: python3 tools/textures.py SRC_DIR OUT_DIR
"""
import sys, os
import numpy as np
from PIL import Image, ImageFilter
Image.MAX_IMAGE_PIXELS = None
src, out = sys.argv[1], sys.argv[2]
P = lambda *p: os.path.join(src, *p)

def save(img, name, q=90):
    img.save(os.path.join(out, name), "WEBP", quality=q, method=6)
    print(f"{name:28s} {img.size}  {os.path.getsize(os.path.join(out, name)) // 1024} KB")

def tint(gray, dark, light, gamma=1.0):
    g = (np.asarray(gray.convert("L"), float) / 255) ** gamma
    d, l = np.array(dark, float), np.array(light, float)
    return Image.fromarray((d + (l - d) * g[..., None]).clip(0, 255).astype(np.uint8))

up = lambda im, w=2048: im.resize((w, w // 2), Image.LANCZOS)

# --- the Earth, 4K: day; relief, roughness and clouds packed in one image (R, G, B); night lights
day = Image.open(P("earth_day_4096.jpg")).convert("RGB")
save(day, "earthday4k.webp", 90)
brc = Image.open(P("earth_bump_roughness_clouds_4096.jpg")).convert("RGB")
bump, rough, clouds = brc.split()
save(bump.convert("RGB"), "earthbump4k.webp", 88)
save(Image.eval(rough, lambda x: 255 - x).convert("RGB"), "earthspec4k.webp", 80)  # shiny where smooth (the seas)
save(clouds.convert("RGB"), "earthclouds4k.webp", 85)
save(Image.open(P("earth_night_4096.jpg")).convert("RGB"), "earthnight4k.webp", 82)

# --- Jupiter's moons: NASA mosaics (Io in natural colour; Europa and Ganymede are greyscale: tinted)
def fill_gaps(img, mask, radius=40):
    """Fill masked pixels from the surrounding colours (normalised blur), softly."""
    a = np.asarray(img, float)
    w = (~mask).astype(float)
    blur = lambda x: np.asarray(Image.fromarray(x.clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(radius)), float)
    num = np.stack([blur(a[..., c] * w) for c in range(3)], -1)
    den = blur(w * 255)[..., None] / 255 + 1e-6
    filled = num / den
    soft = np.asarray(Image.fromarray((mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(4)), float)[..., None] / 255
    return Image.fromarray((a * (1 - soft) + filled * soft).clip(0, 255).astype(np.uint8))

io = up(Image.open(P("Jupiter - Io (A).jpg")).convert("RGB"))
rows = np.abs(np.linspace(90, -90, io.size[1]))[:, None] > 55
io_mask = (np.asarray(io.convert("L"), float) < 45) & rows  # no data (black) near the poles
save(fill_gaps(io, io_mask), "io.webp", 90)
save(up(tint(Image.open(P("Jupiter - Europa.jpg")), (110, 70, 48), (242, 234, 220), 0.9)), "europa.webp", 90)
save(up(tint(Image.open(P("Jupiter - Ganymede.jpg")), (58, 50, 44), (214, 206, 194))), "ganymede.webp", 90)
save(Image.open(P("callisto.jpg")).convert("RGB"), "callisto.webp", 88)  # NASA's map has large gaps: generated

# --- Enceladus: Cassini mosaic; where it has no data (flat white), the generated map
nasa = np.asarray(up(Image.open(P("Saturn - Enceladus.jpg")).convert("L")), float) / 255
gen = np.asarray(Image.open(P("enceladus.jpg")).convert("RGB").resize((2048, 1024), Image.LANCZOS), float) / 255
local = np.asarray(Image.fromarray((nasa * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(3)), float) / 255
flat = np.abs(nasa - local) < 0.015
gap = (nasa > 0.9) & flat
mask = np.asarray(Image.fromarray((gap * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(10)), float) / 255
# brighten the mosaic to match the fill (Enceladus is nearly white), keeping its contrast
valid = ~gap
level = 0.88 - nasa[valid].mean()
bright = np.clip(nasa + level, 0, 1)
ice = np.stack([bright * 0.94 + 0.03, bright * 0.97 + 0.02, bright], -1)  # a faint blue tint
# brighten the mosaic to match the fill (Enceladus is nearly white), keeping its contrast
valid = ~gap
level = 0.88 - nasa[valid].mean()
bright = np.clip(nasa + level, 0, 1)
ice = np.stack([bright * 0.94 + 0.03, bright * 0.97 + 0.02, bright], -1)  # a faint blue tint
# fill: plain bright ice with a little texture; near the south pole, the generated map (its tiger stripes)
rng = np.random.default_rng(5)
grain = np.asarray(Image.fromarray((rng.random((256, 512)) * 255).astype(np.uint8)).resize((2048, 1024), Image.BICUBIC).filter(ImageFilter.GaussianBlur(2)), float) / 255
g = np.clip(0.86 + 0.06 * (grain - 0.5) + 0.02, 0, 1)
plain = np.stack([g * 0.94 + 0.03, g * 0.97 + 0.02, g], -1)  # same tint as the mosaic
lat = np.linspace(90, -90, 1024)[:, None, None]
south = np.clip((-lat - 62) / 8, 0, 1)
fill = plain * (1 - south) + gen * south
mixed = ice * (1 - mask[..., None]) + fill * mask[..., None]
save(Image.fromarray((mixed.clip(0, 1) * 255).astype(np.uint8)), "enceladus.webp", 90)

# --- small previews (512 px) of the colour maps, shown first while the full ones arrive
for name in sorted(os.listdir(out)):
    if name.endswith(".webp") and ".lo." not in name and not any(k in name for k in ("normal", "bump", "spec")):
        im = Image.open(os.path.join(out, name))
        im.resize((512, 512 * im.size[1] // im.size[0]), Image.LANCZOS).save(os.path.join(out, name.replace(".webp", ".lo.webp")), "WEBP", quality=80, method=6)
