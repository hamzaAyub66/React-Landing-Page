# Agent guidance — WinnyWeb

Use this file when editing this codebase with automated assistants so changes stay consistent with the project.

## What this project is

Single-page marketing site for WinnyWeb, built with **Create React App** (`react-scripts`). Sections include navigation, hero header, about, services (card grid), portfolio gallery, testimonials, and contact. Content for several sections is driven by **`src/data/data.json`**.

## Repository layout

| Path | Role |
|------|------|
| `src/App.jsx` | URL path selects **Home** vs **`FbrDigitalInvoicing`**; SmoothScroll export |
| `src/pages/` | Full-page views (`Home.jsx`, `FbrDigitalInvoicing.jsx`) |
| `src/components/` | React components (`navigation`, `header`, `about`, `services`, `gallery`, `testimonials`, `contact`) |
| `src/data/data.json` | Copy and structured lists for About, Services, Gallery, Testimonials, Contact, etc. |
| `public/` | Static assets copied verbatim into the build: `index.html`, `css/`, `img/`, `fonts/`, `.htaccess` |
| `public/css/style.css` | Primary theme and section styles (Bootstrap-era layout patterns) |
| `build/` | Default CRA output when `BUILD_PATH` is not set (local artifacts; usually gitignored) |

## Build and deploy

- Install: `npm install`
- Dev server: `npm start`
- Production build: `npm run build`

Output directory is configured in **`.env.production`** as `BUILD_PATH=../server/web/browser`, so the bundle is written to **`../server/web/browser`** relative to this repo (next to the server deploy tree). No Windows-only `set` command is required.

**Apache hosting:** `public/.htaccess` is copied into the build for SPA-style fallback to `index.html` where `mod_rewrite` is enabled. The service URL **`/services/fbr-digital-invoicing`** must resolve to `index.html` (same as other client-rendered paths).

**Service page sprint:** See **`docs/SPRINT-FBR-DIGITAL-INVOICING.md`** for the FBR Digital Invoicing Integration deliverable and QA notes.
Do not point production builds at folders that must keep unrelated files unless the team agrees; clearing the output directory is standard for static exports.

## Editing conventions

- Prefer **data changes** in `data.json` for text, lists, and service items before hardcoding strings in components.
- Keep **component changes** focused: match existing JSX style, imports, and section structure.
- **Styling:** Section-specific rules live in `public/css/style.css` under comments like `/* Services Section */`. Reuse existing color and gradient variables in spirit (`#6372ff`, `#5ca9fb`) unless the design is intentionally changing.
- **Images:** Add files under `public/img/` and reference them with paths like `img/...` as used elsewhere.
- **Icons:** Font Awesome 4 classes (`fa fa-*`) are loaded from `public/fonts/font-awesome/`.
- **Accessibility:** Preserve or improve semantic headings, link text, and image `alt` attributes when touching UI.

## What to avoid

- Broad refactors or dependency upgrades unless the task explicitly requires them.
- Removing or relocating the build output path without coordinating with whoever deploys from `server/web`.
- Committing `node_modules` or local `build/` unless the project policy says otherwise.

## Related worktree

A sibling folder **`N:\Work\WinnyWeb\server`** may host the server and the **`web/browser`** static output. This repo (`web`) is the source; the server tree is the deployment target for the built files.
