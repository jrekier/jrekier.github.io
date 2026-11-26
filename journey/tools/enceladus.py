"""Enceladus's colour map from Cassini's global mosaic (NASA PIA14937, December 2011, simple cylindrical).

The published JPEG has a frame, labels and a scale bar around the map: the map itself is the region
cropped below. Its left edge is 180°, its centre 0°. Brightened (Enceladus is nearly white), with a
faint blue tint, keeping the mosaic's contrast.
Usage: python3 tools/enceladus.py PIA14937.jpg OUT_DIR
"""
import sys, os
import numpy as np
from PIL import Image

src, out = sys.argv[1], sys.argv[2]
MAP = (56, 48, 2536, 1284)  # left, top, right, bottom of the map inside the frame (2480 × 1236 px)
g = np.asarray(Image.open(src).convert("L").crop(MAP).resize((2048, 1024), Image.LANCZOS), float) / 255
bright = np.clip(0.78 + 1.25 * (g - g.mean()), 0, 1)
ice = np.stack([bright * 0.94 + 0.03, bright * 0.97 + 0.02, bright], -1)
img = Image.fromarray((ice * 255).astype(np.uint8))
img.save(os.path.join(out, "enceladus.webp"), "WEBP", quality=84, method=6)
img.resize((512, 256), Image.LANCZOS).save(os.path.join(out, "enceladus.lo.webp"), "WEBP", quality=80, method=6)
print("enceladus.webp", os.path.getsize(os.path.join(out, "enceladus.webp")) // 1024, "KB")
