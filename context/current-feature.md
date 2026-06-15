# Current Feature: Reviews Carousel (phase-1/reviews-carousel)

## Status

In Progress

## Goals

- Replace the vanilla JS progress bar + testimonial logic with ShadCN `Carousel` (built on Embla)
- `Reviews.tsx` uses `'use client'`, ShadCN `Carousel`, and `embla-carousel-autoplay` with a 5-second delay
- Reviews auto-play on load without any user interaction required
- Each `CarouselItem` renders: testimonial text, star rating, and author name
- Progress bar from the original site can be dropped (Carousel handles navigation natively) or optionally recreated as a CSS animation overlay

## Notes

- ShadCN Carousel wraps Embla — install with `npx shadcn@latest add carousel`
- `embla-carousel-autoplay` is already installed (added during `phase-1/homepage-sections`)
- Component lives at `components/salon/Reviews.tsx`
- Branch: `phase-1/reviews-carousel`
- Starter reviews data from spec: one review from Lauren, Dolgarrog — add more as Paula collects them

## History

<!-- Keep this updated. Earliest to latest -->
- **phase-1/project-setup** — Next.js 16 scaffold, ShadCN init, globals.css, fonts, layout (complete)
- **phase-1/header-footer** — Header (ShadCN Sheet mobile nav) + Footer with dynamic copyright year (complete)
- **phase-1/homepage-sections** — All 7 homepage sections (Hero, WhoWeAre, Services, Products, Reviews carousel, SampleWork, SeeYouSoon marquee) + FadeInImage component; `embla-carousel-autoplay` added (complete)
