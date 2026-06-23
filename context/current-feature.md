# Current Feature

## Status

In Progress

## Goals

Fix high-priority UI issues identified by the ui-reviewer agent.

## Notes

Branch: fix/ui-high-priority

Fixes:
- Hero CTA "View Services" was linking to /gallery → fixed to /services
- Services homepage section "View all services" links (desktop + mobile) were linking to /contact → fixed to /services
- Contact page restyled from legacy unstyled markup to match site visual language (hero + contact grid + map)
- SeeYouSoon marquee: duplicated strip for seamless loop; keyframe changed from -100% to -50%; removed invalid role="marquee", added aria-hidden="true"
- FadeInImage: wrapper div now has w-full h-full so it fills aspect-square containers; removed bogus height:auto inline style override

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
- **feature/homepage-redesign** — Full homepage redesign: rebuilt Hero, WhoWeAre, Services, Products, Reviews, SampleWork, SeeYouSoon, Header, Footer with refined Tailwind layouts and brand tokens; added /services page with cream hero, alternating image/text cards (grey bg + shadow), other services pill list, and warm CTA; added Services link to nav (complete)
