# Current Feature

## Status

In Progress

## Goals

- Create /services page with hero, alternating image+text service sections, other services list, and bottom CTA
- Add Services link to the Header nav
- Match existing design system (Playfair headings, brand tokens, cream/white backgrounds, rounded-3xl images)

## Notes

- Branch: feature/homepage-redesign
- 3 services with images (Cut & Blow Dry, Colour & Balayage, Bridal & Occasion) use alternating flex-row / flex-row-reverse layout at md+
- Other Services Available rendered as pill tags (matching Services.tsx pattern)
- Bottom CTA uses same radial-gradient as the hero section on the homepage
- "Services" nav link added between logo and Gallery in Header.tsx

## History

<!-- Keep this updated. Earliest to latest -->
- **phase-1/project-setup** — Next.js 16 scaffold, ShadCN init, globals.css, fonts, layout (complete)
- **phase-1/header-footer** — Header (ShadCN Sheet mobile nav) + Footer with dynamic copyright year (complete)
- **phase-1/homepage-sections** — All 7 homepage sections (Hero, WhoWeAre, Services, Products, Reviews carousel, SampleWork, SeeYouSoon marquee) + FadeInImage component; `embla-carousel-autoplay` added (complete)
- **phase-1/reviews-carousel** — Progress bar moved outside Carousel wrapper and synced to 5s; card centered with `margin: 0 auto`; removed double `padding-top` on `.testimonial`; added mobile responsive padding; added `.username` styles; removed `text-align: justify` to fix uneven word spacing (complete)
- **phase-1/gallery-before-after** — BeforeAfterGallery with react-compare-slider (7 pairs); /gallery page; GalleryPair type; gallery-data.ts; 7 testimonials added to Reviews carousel; FadeInImage height: auto fix (complete)
- **phase-1/gallery-freshest-hair** — FreshestHair Server Component with CSS masonry (2/3/4 cols); 16 images from gallery-data.ts; centering fix via flex on section; hero LCP fix with `priority` prop (complete)
- **phase-1/contact-page** — Server Component at /contact; heading, Book An Appointment CTA (tel link), contact info block (hours/phone/email/address), embedded Google Map iframe; map CSS added to globals.css (complete)
- **phase-1.5/css-to-tailwind** — Migrated all vanilla CSS from globals.css to inline Tailwind; global element styles moved to @layer base; h2 span (dancing script) and figcaption added to @layer base; marquee keyframes + complex selectors retained in CSS; old vanilla JS site files and unused ShadCN components (input, label, textarea) deleted (complete)
