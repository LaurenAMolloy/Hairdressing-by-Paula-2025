# HBP Phase 1 — Migration Spec
### Vanilla JS → Next.js (Static Replicate)

> Derived from the live source at github.com/LaurenAMolloy/Hairdressing-by-Paula-2025
> Goal: the new Next.js site must look and behave **identically** to the current site before Phase 2 begins.
> No database. No auth. No R2. Static only.

---

## ShadCN Decision Guide

Use ShadCN for UI **patterns** (interactive, reusable, accessibility-sensitive). Keep custom Tailwind for **branded layouts and sections** — dropping ShadCN cards into the hero or services section would make it look generic and break Paula's aesthetic.

| Component | Approach | ShadCN component | Reason |
|---|---|---|---|
| Mobile nav drawer | ✅ ShadCN | `Sheet` | Slide-out panel is exactly what Sheet is for |
| CTA "Book An Appointment" button | ✅ ShadCN | `Button` (custom variant) | Consistent interactive states, easy to restyle |
| Reviews / testimonial carousel | ✅ ShadCN | `Carousel` (built on Embla) | Replaces vanilla JS progress bar logic cleanly |
| Contact form fields | ✅ ShadCN | `Input`, `Textarea`, `Label`, `Button` | Accessible, consistent form pattern |
| Hero section | ❌ Custom Tailwind | — | Bespoke branded layout — ShadCN would genericise it |
| Service cards | ❌ Custom Tailwind | — | Brand-specific layout; ShadCN `Card` would look wrong |
| Who We Are section | ❌ Custom Tailwind | — | Two-column branded layout, no interactivity needed |
| Products section | ❌ Custom Tailwind | — | Simple text + image layout |
| Sample Work grid | ❌ Custom Tailwind | — | CSS grid of images, no component needed |
| "See You Soon" marquee | ❌ Custom CSS | — | Pure CSS animation, nothing in ShadCN for this |
| Fade-in image wrapper | ❌ Custom | — | Custom `IntersectionObserver` hook |
| Footer | ❌ Custom Tailwind | — | Branded layout, no interactivity |

---

## 📄 Pages (3 pages + 1 error page)

| Vanilla JS file | Next.js route | Notes |
|---|---|---|
| `index.html` | `app/(public)/page.tsx` | Homepage — all sections below |
| `gallery/index.html` | `app/(public)/gallery/page.tsx` | Gallery page — needs auditing (see below) |
| `contact/index.html` | `app/(public)/contact/page.tsx` | Contact page — needs auditing (see below) |
| `404.html` | `app/not-found.tsx` | Next.js built-in 404 handling |

---

## 🏗️ Shared Layout

Extracted from the repeated `<header>` and `<footer>` in index.html.

### File: `app/(public)/layout.tsx`
Wraps all public pages. Contains:
- `<Header />` component
- `{children}`
- `<Footer />` component
- Google Fonts imports (move to `next/font` — see Fonts section)
- FontAwesome script (keep as `<Script>` from `next/script` with `strategy="lazyOnload"`)
- iubenda Privacy/Cookie Policy scripts (keep as `next/script` with `strategy="afterInteractive"`)

---

## 🧩 Components to Build

### `components/salon/Header.tsx` — `'use client'` + ShadCN `Sheet`

Replace the vanilla JS hamburger toggle with ShadCN's `Sheet` component. This gives you a proper accessible slide-out drawer with no custom state management needed for the open/close logic.

```tsx
'use client'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div className="content-wrapper row header">
        {/* Mobile: Sheet trigger replaces .nav-toggle button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="open navigation">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav>
              <ul>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <Image src="/logo/paula-lorraine-pink.png" alt="pink paula lorraine logo" width={120} height={60} />
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden md:block">
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
```

**ShadCN components to install:**
```bash
npx shadcn@latest add sheet button
```

---

### `components/salon/Footer.tsx` — Server Component, custom Tailwind

No ShadCN needed — purely branded layout.

Sections:
- **Opening Hours:** Monday–Saturday 9.30am–5.30pm, Sunday: Closed
- **Contact Us:** 07805 287950 / paulafinchhair@aol.com / B5106, Trefriw LL27 0JG
- **Copyright:** `new Date().getFullYear()` inline — replaces the old `document.getElementById('copyright-year')` hack
- **Links:** iubenda Privacy Policy + Cookie Policy (external scripts — use `next/script`)
- **Credit:** "Made with ❤ by Lauren M" → LinkedIn link

---

### `components/salon/Hero.tsx` — Server Component, custom Tailwind + ShadCN `Button`

Use ShadCN `Button` for the CTA — style it with a custom variant to match the existing `.btn` class appearance.

Content:
- H1: `Hairdressing by <span>Paula Lorraine</span>`
- H2 tagline: "Feel special and new / BE YOU! / Love is in the hair / If it's about hair we care" (spans on "Love" and "hair")
- CTA: `<Button asChild><a href="tel:+447805287950">Book An Appointment</a></Button>`
- Phone: `07805 287950`
- Email: `paulafinchhair@aol.com`
- Address: `B5106, Trefriw LL27 0JG`
- Hero image: `/img/hair/hero-hair.jpg` — alt: "back view of long styled hair"
- Image uses `<FadeInImage>` wrapper (see Animations section)

**ShadCN components to install:**
```bash
npx shadcn@latest add button
```

---

### `components/salon/WhoWeAre.tsx` — Server Component, custom Tailwind

No ShadCN — this is a bespoke branded two-column layout.

Content:
- H2: "Who We Are"
- Image: `/img/hair/curling.jpg` — uses `<FadeInImage>`
- Two-column text:
  - Col 1: 20 years experience, fully qualified, areas served (Conwy, Llandudno, Deganwy, Rhos on Sea, Trefriw), salon "Angies Hair" in Trefriw / home visits available
  - Col 2: 100% satisfaction goal, aftercare advice, book today CTA

---

### `components/salon/Services.tsx` — Server Component, custom Tailwind

No ShadCN — the service cards have a specific branded style. ShadCN `Card` would override that.

Content:
- H2: "Popular Services"
- 4 service cards (custom `<article>` elements):

| Card | Image | Alt |
|---|---|---|
| Ladies Cut & Blow Dry | `/img/hair/blow-dry.jpg` | "hair being sectioned and blow-dry" |
| Colour | `/img/hair/foils.jpg` | "hair being coloured with foils" |
| Special Occasion Hair | `/img/hair/hair-up-bridal.jpg` | "side view of bridal hair" |
| Other Services | *(list only, no image)* | — |

Other Services list: Blow dry, Ladies wet cuts, Cut and blow dry, Full head tint, Half head foils, Full head foils, Ombre, Hair up/prom styles, Gents cuts/styles, Childrens cuts, Wedding packages, Perms, Balayage

---

### `components/salon/Products.tsx` — Server Component, custom Tailwind

No ShadCN — simple text + image branded section.

Content:
- H2: "Products We Use..."
- Text: "At Angie's hair salon we are not tied in to using any specific brand..."
- Products list: L'Oreal Professional, Wella, Mood, Muk & Amp, Maria Nila vegan products
- Image: `/img/products/muk-social.png` — uses `<FadeInImage>`

---

### `components/salon/Reviews.tsx` — `'use client'` + ShadCN `Carousel`

Replace the vanilla JS progress bar + testimonial with ShadCN `Carousel` (built on Embla). This is a clean swap — Embla handles touch, keyboard, and auto-play natively.

```tsx
'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const reviews = [
  {
    text: `"I had an incredible experience at Hairdressing by Paula Lorraine!..."`,
    stars: '★★★★★',
    author: 'Lauren, Dolgarrog',
  },
  // add more reviews here as you get them
]

export function Reviews() {
  return (
    <section className="reviews">
      <div className="content-wrapper">
        <h2>Happy Clients</h2>
        <Carousel plugins={[Autoplay({ delay: 5000 })]}>
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
                <p className="testimonial">{review.text}</p>
                <p className="stars">{review.stars}</p>
                <h4 className="username">{review.author}</h4>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
```

**ShadCN components to install:**
```bash
npx shadcn@latest add carousel
```

**Note:** The progress bar from the original can either be dropped (the Carousel dots serve the same purpose) or recreated as a CSS animation on top of the Carousel.

---

### `components/salon/SampleWork.tsx` — Server Component, custom Tailwind

No ShadCN — a simple CSS grid of images.

Content:
- H2: "A Sample of our Work"
- 4 square images, all using `<FadeInImage>`:

| Image | Alt |
|---|---|
| `/img/square-img/square-1.png` | "brunette curly hair" |
| `/img/square-img/square-red-bob.png` | "short white hair" |
| `/img/square-img/square-bridal.png` | "blonde hair style" |
| `/img/square-img/square-4.png` | "bronde hair style" |

---

### `components/salon/SeeYouSoon.tsx` — Server Component, custom CSS

No ShadCN. Pure CSS `@keyframes` marquee — no JS or state needed so this stays a Server Component.

Current behaviour:
- Scrolling marquee of "See You Soon!" × 5
- Speed: `20s`, direction: left
- CSS custom properties `--marquee-speed` and `--direction` from original

**Tailwind approach:** Add a custom `@keyframes marquee` in `globals.css` and apply via `animate-[marquee_20s_linear_infinite]`.

---

### `components/contact/ContactForm.tsx` — `'use client'` + ShadCN form components

> Pending audit of `contact/index.html` — but anticipate this will need:

```bash
npx shadcn@latest add input textarea label button
```

Likely form fields: Name, Phone/Email, Message, Submit button. All accessible via ShadCN's form primitives.

---

## 🎬 Animations (`fade-in-image`)

### `components/salon/FadeInImage.tsx` — `'use client'`, custom

Multiple images use a `.fade-in-image` scroll trigger. In vanilla JS this is an `IntersectionObserver` in `main.js`.

```tsx
'use client'
import { useEffect, useRef } from 'react'
import Image, { ImageProps } from 'next/image'

export function FadeInImage(props: ImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('opacity-100', 'translate-y-0')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="opacity-0 translate-y-4 transition-all duration-700">
      <Image {...props} />
    </div>
  )
}
```

Use `<FadeInImage>` everywhere the original HTML had `.fade-in-image` on an `<img>`.

---

## 🖼️ Images

Move all from `img/` → `public/img/`. Rename files to remove spaces:

```
public/
  img/
    hair/
      hero-hair.jpg
      curling.jpg
      blow-dry.jpg
      foils.jpg
      hair-up-bridal.jpg
    products/
      muk-social.png          ← was "muk-social copy.png"
    square-img/
      square-1.png
      square-red-bob.png
      square-bridal.png
      square-4.png
  logo/
    paula-lorraine-pink.png   ← was "Paula Lorraine-New-Pink.png"
```

Always use `<Image>` or `<FadeInImage>` — no raw `<img>` tags.

---

## 🔤 Fonts

Move from render-blocking Google Fonts `<link>` tags → `next/font/google` (self-hosted, faster):

```tsx
// app/layout.tsx
import { Dancing_Script, Montserrat, Pacifico, Platypi } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-dancing' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const pacifico = Pacifico({ subsets: ['latin'], weight: '400', variable: '--font-pacifico' })
const platypi = Platypi({ subsets: ['latin'], variable: '--font-platypi' })
```

Then in `tailwind.config.ts`:
```ts
fontFamily: {
  dancing: ['var(--font-dancing)'],
  montserrat: ['var(--font-montserrat)'],
  pacifico: ['var(--font-pacifico)'],
  platypi: ['var(--font-platypi)'],
}
```

---

## 🎨 CSS Migration Strategy

1. **Copy `css/main.css` → `app/globals.css` as-is first** — site should look right immediately
2. Convert to Tailwind component-by-component as you build each section
3. Extract colour tokens from `main.css` into `tailwind.config.ts` brand palette before starting

---

## 📦 Third-party Scripts

| Script | Current | Next.js approach |
|---|---|---|
| FontAwesome | CDN `<script>` in `<head>` | `next/script` `strategy="lazyOnload"` in layout |
| iubenda Privacy | CDN `<script>` in `<head>` | `next/script` `strategy="afterInteractive"` in layout |
| iubenda Cookie | Inline `<script>` in footer | `next/script` `strategy="afterInteractive"` in Footer |
| Modernizr | `<script>` at body end | **Remove** — not needed in modern Next.js |
| Google Analytics | Commented out | Leave commented — wire up in Phase 2 |
| particles.js | Commented out | Leave commented — modal also commented out |

---

## 📋 Homepage Section Order

```tsx
// app/(public)/page.tsx
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Services />
      <Products />
      <Reviews />
      <SampleWork />
      <SeeYouSoon />
    </>
  )
}
```

---

## 📦 Full ShadCN Install List for Phase 1

Run these once after Next.js project setup:

```bash
npx shadcn@latest init
npx shadcn@latest add sheet      # mobile nav drawer
npx shadcn@latest add button     # CTA + form submit
npx shadcn@latest add carousel   # reviews/testimonials
npx shadcn@latest add input      # contact form (pending audit)
npx shadcn@latest add textarea   # contact form (pending audit)
npx shadcn@latest add label      # contact form (pending audit)
```

---

## ✅ Phase 1 Done When

- [ ] All 3 pages render without errors
- [ ] Visual appearance matches the original site (check side-by-side)
- [ ] Mobile nav opens/closes via ShadCN Sheet
- [ ] Reviews carousel auto-plays via ShadCN Carousel + Embla
- [ ] Fade-in scroll animations work on images
- [ ] Marquee "See You Soon!" scrolls correctly
- [ ] All fonts load via `next/font` (no Google Fonts `<link>` tags)
- [ ] `<Image>` or `<FadeInImage>` used everywhere — no raw `<img>` tags
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No ShadCN components used for branded layout sections (Hero, Services, WhoWeAre, Products, SampleWork)
- [ ] Deployed to Vercel on a preview URL
- [ ] iubenda Privacy + Cookie Policy links work
- [ ] Footer copyright year is dynamic

---

## ⚠️ Still Needs Auditing

These files weren't accessible during spec generation — clone the repo and review before building:

- `gallery/index.html` — unknown structure, likely has a Swiper gallery → may need ShadCN `Carousel` or a dedicated Swiper React component
- `contact/index.html` — unknown structure, likely a contact form → ShadCN form components confirmed above but fields TBC
- `js/main.js` — contains mobile nav logic (replaced by Sheet), fade-in observer (replaced by FadeInImage), possibly review carousel logic (replaced by Carousel)
- `css/main.css` — source of all colour tokens — extract these before starting Tailwind migration

---

## 🌿 Git Branches for Phase 1

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

---

*Last updated: June 2026 — generated from source at github.com/LaurenAMolloy/Hairdressing-by-Paula-2025*
