"""Regenerate responsive hero images from assets/hero.png.

Run: python tools/generate-hero-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "hero.png"
OUT = ROOT / "assets" / "hero"
WIDTHS = [480, 640, 768, 1024, 1200, 1536]


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC)
    orig_w, orig_h = src.size

    for w in WIDTHS:
        if w > orig_w:
            w = orig_w
        ratio = w / orig_w
        h = int(orig_h * ratio)
        im = src.resize((w, h), Image.Resampling.LANCZOS)
        im.save(OUT / f"hero-{w}.webp", "WEBP", quality=72, method=6)
        im.save(
            OUT / f"hero-{w}.jpg",
            "JPEG",
            quality=78,
            optimize=True,
            progressive=True,
        )
        print(f"hero-{w}: webp + jpg")


if __name__ == "__main__":
    main()
