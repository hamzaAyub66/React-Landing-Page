# Sprint: FBR Digital Invoicing Integration page

**Goal:** Ship a conversion-focused service page at `/services/fbr-digital-invoicing` for Pakistani businesses, ERPs, accountants, and platforms—aligned with Winny Web branding (not a standalone unrelated landing).

**Status:** Implemented in codebase (see checklist).

---

## Delivered scope

| Item | Notes |
|------|--------|
| Route | `/services/fbr-digital-invoicing` — path routing in `App.jsx` (no extra deps) |
| Hero | Heading, supporting copy, WhatsApp + Email CTAs |
| Service explanation | API/ERP integration, validation & submission workflows, sandbox/production, backend security |
| Sections | Who it’s for, what we integrate, benefits, mid-page CTA, implementation process, why Winny Web, FAQ, final CTA |
| Compliance | Disclaimer banner; no FBR endorsement; no government logos |
| Visual | **Simple** single-column page: hero + white content + **one** gradient CTA band (`#6372ff` → `#5ca9fb`), headings with gradient underline accent |
| SEO | Title, description, keywords, canonical updated in-page (`useEffect` on `FbrDigitalInvoicing.jsx`) |
| Navigation | “FBR Integration” nav item; logo returns home from subpages |
| Home cross-link | Under “Our Services” heading → dedicated link |
| Sitemap | `public/sitemap.xml` includes service URL |
| Contact data | Uses `Contact` from `data.json` (WhatsApp `wa.me`, email); display `phoneDisplayLocal` |

---

## Dependencies

No new npm packages. Routing uses pathname checks in `App.jsx`. Deploy behind SPA fallback (Apache `.htaccess`) so `/services/fbr-digital-invoicing` loads `index.html`.

---

## Optional upgrade

Add **`react-router-dom`** later if you want client-side transitions without full reloads.

## Follow-up (optional)

- [ ] Add structured data (`Service` or `WebPage`) for the FBR URL only if marketing agrees  
- [ ] Replace generic gallery imagery if you want stronger “invoice / ERP” visuals on the homepage  
- [ ] Legal review of disclaimer and FAQ wording  
- [ ] Search Console: inspect new URL after deploy  

---

## QA checklist

- [ ] Desktop: hero CTAs, nav, footer link home  
- [ ] Mobile: navbar collapse, touch targets on `.fbr-btn`  
- [ ] Navigate Home → FBR → Home; confirm document title and canonical reset  
- [ ] Production: deep link `/services/fbr-digital-invoicing` works with Apache `.htaccess` SPA fallback  
