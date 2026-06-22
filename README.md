# InAmigos Foundation — Landing Page

**InAmigos Foundation**, a registered Section 8 NGO based in Bilaspur, Chhattisgarh. The site showcases community projects, social impact stories, awards, testimonials, and a donation call-to-action — with no build step required for day-to-day updates.

**Repository:** [github.com/vermashobhit1994/inamigos-landing-page](https://github.com/vermashobhit1994/inamigos-landing-page)

---

## Features

- **Single source of content** — most copy, projects, stories, awards, FAQs, and contact details live in one file: `projects-data.js`
- **Responsive layout** — mobile-first design with sticky section breadcrumbs, mobile menu, and optimized hero images (WebP + JPEG fallbacks)
- **Project detail pages** — bento-grid tiles link to `project.html?p=<slug>`
- **Social impact stories** — featured stories on the homepage; full listing at `stories.html` and detail pages at `story.html?p=<slug>`
- **Donate flow** — all Donate buttons scroll to the in-page donation form (`#donate-form`)
- **Awards gallery** — View and Download actions per award card
- **Voices of Change** — testimonials with optional video links
- **Contact & licenses** — address, email, phone, and registration/certification cards

---

## Tech Stack

| Layer   | Choice                                                            |
| ------- | ----------------------------------------------------------------- |
| Markup  | HTML5                                                             |
| Styles  | Plain CSS (`styles.css`)                                          |
| Scripts | Vanilla JavaScript (no framework)                                 |
| Fonts   | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Build   | None — static files only                                          |

There is no `package.json`, bundler, or compile step. Open the folder in any static file server and you are ready to go.

---

## Project Structure

```
.
├── index.html              # Homepage
├── project.html            # Project detail page shell
├── stories.html            # All social impact stories
├── story.html              # Single story detail page
├── donation-calculator.html  # Standalone donation widget prototype
├── projects-data.js        # ★ Main content file — edit this for most updates
├── scripts.js              # Homepage renderers, nav, donate card, anchor scroll
├── project-page.js         # Renders project detail from URL ?p=slug
├── stories-page.js         # Renders stories listing
├── story-page.js           # Renders single story detail
├── styles.css              # All site styles
├── assets/
│   ├── hero/               # Responsive hero images (480–1536px)
│   ├── logo/               # Light/dark logos
│   ├── awards/             # Award photos
│   ├── stories/            # Story spotlight images
│   ├── licenses/           # Certificate scans
│   └── mixed/              # Miscellaneous section images
└── tools/
    └── generate-hero-images.py  # Optional: regenerate hero sizes from hero-1.png
```

---

## Setup & Local Development

### Prerequisites

- A modern web browser
- Any local static file server (recommended — `file://` URLs can break some links and fetches)

### Quick start

1. **Clone the repository**

    ```bash
    git clone https://github.com/vermashobhit1994/inamigos-landing-page.git
    cd inamigos-landing-page
    ```

2. **Serve the folder locally** (pick one method)

    **Python 3**

    ```bash
    python -m http.server 8080
    ```

    Open [http://localhost:8080](http://localhost:8080)

    **Node.js (npx)**

    ```bash
    npx serve .
    ```

    **VS Code / Cursor** — use the **Live Server** extension and open `index.html`.

3. **Edit content** in `projects-data.js`, save, and hard-refresh the browser (`Ctrl+Shift+R` / `Cmd+Shift+R`).

---

## Updating Content

Almost all site content is defined in **`projects-data.js`**. Each section exports a `window.*` global that `scripts.js` (or the detail-page scripts) reads and renders.

| Global                | Section                                 |
| --------------------- | --------------------------------------- |
| `window.PROJECTS`     | What We Do — bento project grid         |
| `window.ABOUT`        | Who We Are                              |
| `window.JOURNEY`      | How It Works (impact journey steps)     |
| `window.STORIES`      | Social Impact stories                   |
| `window.AWARDS`       | Awards & Achievements                   |
| `window.TESTIMONIALS` | Voices of Change                        |
| `window.FAQS`         | Frequently asked questions              |
| `window.CONTACT`      | Contact Us (address, email, phone)      |
| `window.LICENSES`     | Licenses & Certifications cards         |
| `window.SECTION_NAV`  | Sticky mobile section breadcrumb labels |

Each block in `projects-data.js` includes inline comments and copy-paste templates. Follow those when adding new entries.

### Validate after editing

A **syntax error in `projects-data.js` prevents the entire file from loading**, which can break multiple sections at once. Always check syntax before committing:

```bash
node --check projects-data.js
```

Common mistake: a missing comma after a `quote:` string in `TESTIMONIALS`.

### Adding images

1. Place files under `assets/` (e.g. `assets/awards/my-award.jpg`)
2. Reference them with a relative path: `"./assets/awards/my-award.jpg"`
3. For awards, optional `file` and `viewUrl` fields enable Download / View buttons

---

## Pages

| Page                | URL                        | Purpose                                            |
| ------------------- | -------------------------- | -------------------------------------------------- |
| Homepage            | `index.html`               | Full landing page with all sections                |
| Project detail      | `project.html?p=seva`      | Long-form project page (slug from `id` or title)   |
| Stories listing     | `stories.html`             | Grid of all social impact stories                  |
| Story detail        | `story.html?p=<slug>`      | Single story with full body text                   |
| Donation calculator | `donation-calculator.html` | Standalone widget (separate from main donate form) |

Internal anchor links (e.g. `#donate-form`, `#contact`, `#licenses`) use smooth in-page scrolling handled by `scripts.js`.

---

## Optional: Regenerate Hero Images

If you replace the source hero image at `assets/hero-1.png`, regenerate responsive variants:

```bash
pip install Pillow
python tools/generate-hero-images.py
```

This writes WebP and JPEG files to `assets/hero/` at widths 480, 640, 768, 1024, 1200, and 1536 px.

---

## Deployment

Because the site is fully static, deploy to any static host:

- **GitHub Pages** — enable Pages on the `main` branch root
- **Netlify / Vercel / Cloudflare Pages** — connect the repo; no build command needed (publish directory: `.`)
- **Any web server** — upload all files preserving the folder structure

Ensure `index.html` is the default document and that asset paths remain relative (`./assets/...`).

---

## Browser Support

Tested in current versions of Chrome, Firefox, Safari, and Edge. Uses standard CSS Grid/Flexbox, `scroll-behavior`, and responsive `<picture>` / `srcset` for the hero — no polyfills bundled.

---

## Contact

**InAmigos Foundation**

- Ward No. 5, Gram Post, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh — Pincode: 495555
- Email: [inamigosfoundation@gmail.com](mailto:inamigosfoundation@gmail.com)
- Phone: [+91 626 730 9902](tel:+916267309902)

---

## License

Content and branding © InAmigos Foundation. Source code in this repository is maintained for the foundation's official web presence. Contact the maintainers before reusing assets or copy for other projects.
