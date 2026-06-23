import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] grid grid-cols-1 md:grid-cols-2">

      {/* Left — text content on grey + pink corner gradient */}
      <div
        className="flex flex-col justify-center px-10 lg:px-20 py-20"
        style={{ background: 'radial-gradient(ellipse at 0% 110%, #f3b0e6 0%, #e6e6e6 55%)' }}
      >
        <p className="text-xs tracking-[0.25em] uppercase text-brand-primary mb-8">
          Modern Hair Studio
        </p>

        <h1 className="font-playfair font-bold text-5xl lg:text-6xl leading-tight text-brand-dark mb-1">
          Hairdressing by{' '}
          <span className="text-brand-primary">Paula Lorraine</span>
        </h1>

        <p className="font-dancing text-3xl text-brand-primary mt-3 mb-8">
          Love is in the hair
        </p>

        <p className="text-brand-dark/70 text-base leading-relaxed mb-10 max-w-sm">
          Feel special and new — be you. If it&apos;s about hair, we care.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="tel:+447805287950"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book an Appointment <span aria-hidden>→</span>
          </a>
          <Link
            href="/services"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-brand-dark/30 text-brand-dark text-sm font-medium hover:border-brand-dark transition-colors"
          >
            View Services
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 text-sm text-brand-dark/60">
          <span className="text-brand-primary tracking-widest">★★★★★</span>
          <span>Loved by local clients</span>
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative min-h-[60vh] md:min-h-full">
        <Image
          src="/img/hair/hero-hair.jpg"
          alt="back view of long styled hair"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  )
}
