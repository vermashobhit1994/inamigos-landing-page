"""Regenerate responsive hero images from assets/hero-1.png.

Run: python tools/generate-hero-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "assets" / "hero-1.png"
OUT = ROOT / "assets" / "hero"
WIDTHS = [480, 640, 768, 1024, 1200, 1536]


def main():
    if not SRC.exists():
        raise SystemExit(f"Source not found: {SRC}")

    OUT.mkdir(parents=True, exist_ok=True)
    src = Image.open(SRC).convert("RGB")
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
        webp_kb = (OUT / f"hero-{w}.webp").stat().st_size // 1024
        jpg_kb = (OUT / f"hero-{w}.jpg").stat().st_size // 1024
        print(f"hero-{w}: webp {webp_kb}KB, jpg {jpg_kb}KB")


if __name__ == "__main__":
    main()
