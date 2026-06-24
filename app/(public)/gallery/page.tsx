import Link from 'next/link'
import { GalleryContent } from '@/components/gallery/GalleryContent'
import { beforeAfterPairs, freshestHairImages } from '@/lib/gallery-data'

export default function GalleryPage() {
  return (
    <main>

      {/* Page hero */}
      <section className="bg-brand-cream py-20 text-center">
        <div className="w-[90%] max-w-275 mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-dark/50 mb-5">
            Gallery
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-brand-dark leading-tight mb-5">
            Before <span className="text-brand-rose">&amp;</span> After
          </h1>
          <p className="text-brand-dark/60 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            A look at real client transformations — drag the slider to reveal the result.
          </p>
        </div>
      </section>

      {/* Gallery sections with category filter */}
      <GalleryContent pairs={beforeAfterPairs} images={freshestHairImages} />

      {/* Bottom CTA */}
      <section
        className="py-24 text-center"
        style={{ background: 'var(--gradient-cta)' }}
      >
        <div className="w-[90%] max-w-275 mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-brand-dark mb-8 leading-tight">
            Love what you see?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-dark"
          >
            Book an appointment <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
