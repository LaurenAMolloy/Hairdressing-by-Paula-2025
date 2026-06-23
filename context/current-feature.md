# Current Feature: phase-1/contact-page

## Status

In Progress

## Goals

- Create `app/(public)/contact/page.tsx` as a Server Component (no form, no interactivity)
- Heading: "Contact us, because you all need great hair!"
- CTA button linking to `tel:07805287950` — same ShadCN `Button` custom variant as homepage
- Contact info block: Hours (Mon–Sat 9.30am–5.30pm, Sunday Closed), Phone, Email, Address
- Embedded Google Map iframe in a fixed aspect-ratio container
- No ShadCN Input/Textarea/Label needed — this page has no form

## Notes

- Source: `context/features/phase-1-spec.md` → Contact Page section (line ~688)
- Branch: `phase-1/contact-page`
- Server Component only — no `'use client'` needed
- Reuse the same ShadCN `Button` variant already used on the Hero CTA
- Map: plain `<iframe>` embed, wrapped in `aspect-video` or `h-80` div
- Contact info: Phone `07805 287950` (tel link), Email `paulafinchhair@aol.com` (mailto link), Address `B5106, Trefriw LL27 0JG`

## History

<!-- Keep this updated. Earliest to latest -->
- **phase-1/project-setup** — Next.js 16 scaffold, ShadCN init, globals.css, fonts, layout (complete)
- **phase-1/header-footer** — Header (ShadCN Sheet mobile nav) + Footer with dynamic copyright year (complete)
- **phase-1/homepage-sections** — All 7 homepage sections (Hero, WhoWeAre, Services, Products, Reviews carousel, SampleWork, SeeYouSoon marquee) + FadeInImage component; `embla-carousel-autoplay` added (complete)
- **phase-1/reviews-carousel** — Progress bar moved outside Carousel wrapper and synced to 5s; card centered with `margin: 0 auto`; removed double `padding-top` on `.testimonial`; added mobile responsive padding; added `.username` styles; removed `text-align: justify` to fix uneven word spacing (complete)
- **phase-1/gallery-before-after** — BeforeAfterGallery with react-compare-slider (7 pairs); /gallery page; GalleryPair type; gallery-data.ts; 7 testimonials added to Reviews carousel; FadeInImage height: auto fix (complete)
- **phase-1/gallery-freshest-hair** — FreshestHair Server Component with CSS masonry (2/3/4 cols); 16 images from gallery-data.ts; centering fix via flex on section; hero LCP fix with `priority` prop (complete)
