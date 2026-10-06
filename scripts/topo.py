"""Generate public/topo.svg, the contour-line page background.

Run: uv run --with numpy --with matplotlib python scripts/topo.py
Knobs: SEED (terrain shape), LEVELS (line density), COLOR / opacities below.
"""
from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np

SEED = 7
W, H = 1600, 1000
LEVELS = 34
COLOR = "#34d77b"
MINOR_OPACITY, MAJOR_OPACITY = 0.10, 0.20  # every 5th line is an index contour

rng = np.random.default_rng(SEED)
x, y = np.meshgrid(np.linspace(0, 1.6, 320), np.linspace(0, 1, 200))

# A ridge across the top third with a few peaks on it, plus rolling foothills.
z = 1.2 * np.exp(-((y - 0.28) ** 2) / 0.03)
for _ in range(7):
    px, py = rng.uniform(0, 1.6), rng.uniform(0.1, 0.5)
    z += rng.uniform(0.4, 1.0) * np.exp(-((x - px) ** 2 + (y - py) ** 2) / rng.uniform(0.01, 0.05))
for f in (3, 5, 9, 15):
    a, b = rng.uniform(0, 2 * np.pi, 2)
    z += (0.6 / f) * np.sin(f * x * 2.1 + a) * np.cos(f * y * 2.7 + b)

cs = plt.contour(x * W / 1.6, y * H, z, levels=LEVELS)
paths = []
for i, segs in enumerate(cs.allsegs):
    major = i % 5 == 0
    for seg in segs:
        if len(seg) < 4:
            continue
        d = "M" + "L".join(f"{px:.0f} {py:.0f}" for px, py in seg[::2])
        paths.append(
            f'<path d="{d}" stroke-opacity="{MAJOR_OPACITY if major else MINOR_OPACITY}"'
            f'{" stroke-width=\"1.4\"" if major else ""}/>'
        )

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice">'
    f'<g fill="none" stroke="{COLOR}" stroke-width="0.8" stroke-linejoin="round">{"".join(paths)}</g></svg>'
)
out = Path(__file__).resolve().parent.parent / "public" / "topo.svg"
out.write_text(svg)
print(f"{out} — {len(paths)} paths, {len(svg) // 1024} KB")
