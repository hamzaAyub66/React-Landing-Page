# WinnyWeb

Marketing site for WinnyWeb (React, Create React App). Section copy and lists live in `src/data/data.json`.

## Production URL

Canonical site: **https://winnyweb.com/**  
Align `homepage` in `package.json`, `<link rel="canonical">`, Open Graph `og:url`, `public/sitemap.xml`, and `public/robots.txt` if the domain ever changes.

## Install and run

```bash
npm install
npm start
```

Development server: [http://localhost:3000](http://localhost:3000).

## Production build

Output directory is set in **`.env.production`** (`BUILD_PATH=../server/web/browser`), so static files are written next to the server deploy tree:

```text
WinnyWeb/web     →  npm run build  →  WinnyWeb/server/web/browser/
```

```bash
npm run build
```

Serve `server/web/browser` behind HTTPS. Apache can use the copied **`.htaccess`** for SPA fallback to `index.html`.

## Deploy checklist

1. Run `npm run build`.
2. Deploy contents of `server/web/browser/` (or your host’s web root).
3. Confirm `https://your-domain/sitemap.xml` and `https://your-domain/robots.txt` respond.
4. **Google Search Console** (manual): add the property for `winnyweb.com`, verify ownership (DNS or HTML file), then submit **Sitemap**: `https://winnyweb.com/sitemap.xml`.
5. Optional: add the site in **Bing Webmaster Tools** and submit the same sitemap.

## SEO assets in this repo

| File | Purpose |
|------|---------|
| `public/index.html` | Title, meta description, canonical, Open Graph, Twitter Card, JSON-LD |
| `public/sitemap.xml` | Single-page URL list |
| `public/robots.txt` | Crawl rules + `Sitemap:` discovery |

## Image performance (audit summary)

Largest assets under `public/img` are portfolio JPGs (~24–60 KB each), hero `intro-bg.jpg` (~85 KB), and `team/02.jpeg` (~128 KB). Further wins: run images through a compressor, prefer WebP with a fallback where supported, and lazy-load below-the-fold gallery images if you later add routing or heavier pages.

## Lighthouse

After build, serve the output locally and run Lighthouse (Chrome DevTools → Lighthouse, or `npx lighthouse http://localhost:PORT --view`). Fix regressions in Performance, SEO, and Accessibility as scores drop.
