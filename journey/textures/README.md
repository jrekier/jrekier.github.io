# Textures for the journey page

All served as WebP. Built from the originals in `textures-src/` by `tools/textures.py`
(and `tools/galileans.py` for the generated maps).

## Solar System Scope — CC BY 4.0
https://www.solarsystemscope.com/textures/ — see `LICENSE.txt`, `qt_attribution.json`.

- `earthday4k`, `earthbump4k`, `earthspec4k`, `earthclouds2k`, `earthnight4k` — the Earth, from the
  4K versions in the three.js examples (credited there to Solar System Scope, resized from 8K).
  Relief, shininess (inverted roughness) and clouds are split out of one packed image.
- `moonmap2k`, `moonnormal2k` — the Moon (the normal map, tiled small, also adds fine relief to the moons below)
- `mercurymap`, `mercurynormal`, `sunmap`, `jupitermap`, `saturnmap`, `saturnringcolortrans` — via the Qt 3D planets example

## NASA — NASA 3D Resources (https://github.com/nasa/NASA-3D-Resources)
- `io` — Galileo mosaic, natural colour; the polar gaps filled from surrounding colours
- `europa`, `ganymede` — Galileo/Voyager mosaics (greyscale), tinted to natural hues
- `enceladus` — Cassini global mosaic, NASA PIA14937 (December 2011), brightened, slight blue tint
  (`tools/enceladus.py`)

## Generated (artist's impressions; derived in part from the Solar System Scope Moon map, so CC BY 4.0)
- `callisto` — NASA's map has large gaps, so this one is generated (`tools/galileans.py`)
