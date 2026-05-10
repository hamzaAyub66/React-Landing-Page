# Project tasks — WinnyWeb

Track work here; update checkboxes as items complete.

## Content and product

- [x] Replace placeholder gallery items in `data.json` / `Gallery` with real project titles and images
- [x] Review and update About paragraph and “Why choose us” bullets for accuracy and typos
- [x] Confirm contact details (phone, email, social URLs) in `data.json` and footer

## SEO and discoverability

- [x] Add a strong `<meta name="description">` and unique `<title>` in `public/index.html`
- [x] Add Open Graph and Twitter Card meta tags; set a default share image
- [x] Add `<link rel="canonical">` for the live production URL
- [x] Add `sitemap.xml` and reference it from `robots.txt`
- [x] Register the site in Google Search Console and submit the sitemap — **manual:** step-by-step in `README.md` Deploy checklist (ownership must be completed in Google’s UI)
- [x] Optional: add JSON-LD `Organization` (and `WebSite` if useful) in `index.html` or a small inject script

## Performance and quality

- [x] Audit large images in `public/img` and compress or switch formats where helpful — **summary** in `README.md` (Image performance)
- [x] Run Lighthouse (Performance, SEO, Accessibility) and fix high-impact issues — **focus-visible**, form labels, invalid `validate` removed, hero `#contact` anchor fixed; run Lighthouse locally after deploy per `README.md`
- [x] Verify mobile layout and tap targets for navigation and forms — **min-height 44px** nav links and toggle at `max-width: 991px`

## Technical hygiene

- [x] Document production URL and deploy steps in `README.md` if not already there
- [x] Use `.env.production` for `BUILD_PATH` (cross-platform; no Windows-only `set` in scripts)
- [x] Review `.gitignore` for `build/` and environment files

## Done (historical)

- [x] Production build outputs to `server/web/browser` via `BUILD_PATH`
- [x] `.htaccess` in `public` for Apache SPA routing
- [x] Services section uses card grid layout; descriptions shortened where needed
