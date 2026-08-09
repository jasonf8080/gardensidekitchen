# Gardenside Kitchen & Coffee Bar — v2

Vite + React 18 + Tailwind rebuild, v2. New UI/section layout, real client
photos, and an actual Food/Drinks menu page (replacing the "coming soon"
notice from v1).

## Getting started

```bash
npm install
npm run dev
```

Build for production with `npm run build` (outputs to `dist/`).

## What's new vs. v1

- **New section layouts** — full-bleed photo hero, split welcome section,
  overlay-card menu highlights, two-panel partner cross-promotion, varied-height
  gallery strip. Not a re-skin of v1's structure.
- **Real photos** — all 11 photos you sent (café counter, greenhouse, nursery
  exterior, focaccia, pastries, wine bottles, the latte+scone HEIC) are placed
  by content, not left as placeholders. A few images are intentionally reused
  in more than one spot (e.g. the counter shot appears in the hero and in
  "Visit Us") since you mentioned more photos are coming later.
- **New color palette** — warm charcoal (`primary`), cream (`secondary`), and
  terracotta (`accent`) in `tailwind.config.js`, pulled from the actual food
  and wood tones in your photos rather than the original site's olive/gold.
- **Real Menu page** — 10 filler food items + 5 filler drink items, split into
  separate Food and Drinks sections. **This is placeholder content per your
  request** — swap in the real menu and prices in `src/data/data.js`
  (`menuFood` / `menuDrinks`) whenever you're ready.

## Before you launch — read this

1. **Menu is filler.** Every item name, description, and price under
   `menuFood` and `menuDrinks` in `src/data/data.js` is a placeholder built
   from what's visible in your photos (focaccia varieties, boards, bakery
   case items) — not a confirmed menu. Replace before publishing.
2. **No staff/team photos.** You didn't send headshots this round, so the
   "About" page pairs the chef and winemaker bios with food/wine photos
   instead of portraits. Send headshots later and I'll swap them in.
3. **Logo is still a recreation**, not the original file — `src/components/main/Logo.jsx`
   and the favicon set in `public/` are the same recreated cherry-blossom mark
   from v1, since the real logo file has never been available to us.
4. **Contact email** is blank (`contact.email` in `data.js`) — never published
   anywhere we could find.
5. **`npm install` was not run in the build sandbox** (no registry access
   there). Every file was verified with esbuild — all 30 source files parse
   individually and the whole app bundles with zero errors, every image
   reference resolves to a real file on disk — but run `npm install && npm run dev`
   locally as your first real test.

## Structure

- `src/data/data.js` — every piece of site copy, including the filler menu
- `src/components/Home`, `src/components/About`, `src/components/Menu` — page-specific sections
- `src/components/main` — shared layout (Navbar, Footer, SEO, Logo)
- `src/pages` — route-level composition + per-page SEO
- `public/images/` — your real photos, already sized down for the web (~350–630KB each, from multi-MB originals)
