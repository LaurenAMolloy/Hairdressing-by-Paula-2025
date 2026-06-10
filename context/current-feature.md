# Current Feature: Phase 1 — Vanilla JS → Next.js Static Migration

## Status

In Progress

## Goals

- All 3 pages (homepage, gallery, contact) render without errors, plus `not-found.tsx`
- Visual appearance matches the original site (check side-by-side)
- Mobile nav opens/closes via ShadCN `Sheet`
- Reviews carousel auto-plays via ShadCN `Carousel` + Embla
- Fade-in scroll animations work on images (`FadeInImage` component)
- Marquee "See You Soon!" scrolls correctly (CSS `@keyframes`, no JS)
- All fonts load via `next/font` — no render-blocking Google Fonts `<link>` tags
- `<Image>` or `<FadeInImage>` used everywhere — no raw `<img>` tags
- No TypeScript errors (`npx tsc --noEmit`)
- No ShadCN components used for branded layout sections (Hero, Services, WhoWeAre, Products, SampleWork)
- iubenda Privacy + Cookie Policy scripts wired via `next/script`
- Footer copyright year is dynamic
- Deployed to Vercel on a preview URL

## Notes

- **Static only** — no database, no auth, no R2
- ShadCN for interactive/accessible UI patterns; custom Tailwind for all branded sections
- ShadCN components needed: `sheet`, `button`, `carousel`, `input`, `textarea`, `label`
- Modernizr script should be removed (not needed in Next.js)
- Google Analytics and particles.js remain commented out (wire up in Phase 2)

### Planned branches
```
phase-1/project-setup         ← Next.js init, shadcn init, globals.css, fonts, layout
phase-1/header-footer         ← Header (Sheet) + Footer
phase-1/homepage-sections     ← Hero through SeeYouSoon
phase-1/reviews-carousel      ← ShadCN Carousel swap
phase-1/gallery-page          ← gallery/index.html conversion (post-audit)
phase-1/contact-page          ← contact/index.html + ShadCN form (post-audit)
phase-1/animations            ← FadeInImage component, marquee CSS
phase-1/images-optimisation   ← swap all <img> → <Image>/<FadeInImage>, rename files
phase-1/vercel-preview        ← deploy + smoke test
```

### Still needs auditing before building
- `gallery/index.html` — likely has Swiper gallery; may need ShadCN `Carousel` or Swiper React component
- `contact/index.html` — likely a contact form; fields TBC
- `js/main.js` — mobile nav logic, fade-in observer, possibly carousel logic
- `css/main.css` — extract colour tokens before starting Tailwind migration

## History

<!-- Keep this updated. Earliest to latest -->
