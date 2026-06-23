import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Ladies Cut & Blow Dry',
    description:
      "Whether you're looking for a subtle trim or a bold transformation, Hairdressing by Paula Lorraine is your destination for quality cuts.",
    src: '/img/hair/blow-dry.jpg',
    alt: 'hair being sectioned and blow-dry',
    eyebrow: 'Cut & Style',
  },
  {
    title: 'Colour & Balayage',
    description:
      'From full-head foils to balayage, we offer a wide range of colouring options to perfectly suit your style.',
    src: '/img/hair/foils.jpg',
    alt: 'hair being coloured with foils',
    eyebrow: 'Colour',
  },
  {
    title: 'Bridal & Occasion',
    description:
      'From wedding hair to prom night we can provide a style to take your hair to the next level!',
    src: '/img/hair/hair-up-bridal.jpg',
    alt: 'side view of bridal hair',
    eyebrow: 'Bridal',
  },
]

const otherServices = [
  'Blow dry',
  'Ladies wet cuts',
  'Cut and blow dry',
  'Full head tint',
  'Half head foils',
  'Full head foils',
  'Ombre',
  'Hair up/prom styles',
  'Gents cuts/styles',
  'Childrens cuts',
  'Wedding packages',
  'Perms',
  'Balayage',
]

export default function ServicesPage() {
  return (
    <main>

      {/* Page hero */}
      <section className="bg-brand-cream py-24 text-center">
        <div className="w-[90%] max-w-275 mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-dark/50 mb-6">
            Services &amp; Products
          </p>
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-brand-dark leading-tight mb-6">
            Crafted services.<br />Honest pricing.
          </h1>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto leading-relaxed">
            Every appointment is tailored to you — from a classic cut to a full colour transformation.
          </p>
        </div>
      </section>

      {/* Alternating service sections */}
      <div className="bg-white">
        {services.map((service, i) => {
          const isReversed = i % 2 !== 0
          return (
            <div key={service.title}>
              {i > 0 && (
                <div className="w-[90%] max-w-275 mx-auto py-2">
                  <hr className="border-brand-dark/10" />
                </div>
              )}
              <section className="py-10">
                <div className="w-[90%] max-w-275 mx-auto">
                  {/* Card */}
                  <div
                    className={`flex flex-col overflow-hidden rounded-3xl shadow-md bg-gray-50 ${
                      isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    {/* Image — flush with card edge, ~45% on desktop */}
                    <div className="w-full md:w-[45%] shrink-0 relative min-h-[280px]">
                      <Image
                        src={service.src}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Text — padded inside card, ~55% on desktop */}
                    <div className="flex flex-col justify-center md:w-[55%] p-8 md:p-12 lg:p-16">
                      <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/50 mb-3">
                        {service.eyebrow}
                      </p>
                      <h2 className="text-brand-dark text-3xl md:text-4xl leading-snug mb-6">
                        {service.title}
                      </h2>
                      <p className="text-brand-dark/70 mb-8 text-base leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-brand-dark font-medium text-sm hover:gap-3 transition-all w-fit"
                      >
                        Book this service <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
        })}

        {/* Other services list */}
        <div className="w-[90%] max-w-275 mx-auto">
          <hr className="border-brand-dark/10" />
        </div>
        <section className="py-20">
          <div className="w-[90%] max-w-275 mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/50 mb-4">Full Menu</p>
            <h2 className="text-brand-dark text-3xl md:text-4xl mb-10">Other Services Available</h2>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              {otherServices.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 rounded-full border border-brand-dark/15 text-sm text-brand-dark/70 hover:border-brand-primary hover:text-brand-primary transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section
        className="py-24 text-center"
        style={{ background: 'radial-gradient(ellipse at 50% 120%, #f3b0e6 0%, #FAF8F5 65%)' }}
      >
        <div className="w-[90%] max-w-275 mx-auto">
          <h2 className="font-playfair text-3xl md:text-5xl text-brand-dark mb-8 leading-tight">
            Book your appointment
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
