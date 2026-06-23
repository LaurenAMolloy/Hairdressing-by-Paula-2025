import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Ladies Cut & Blow Dry',
    description:
      "Whether you're looking for a subtle trim or a bold transformation, Hairdressing by Paula Lorraine is your destination for quality cuts.",
    src: '/img/hair/blow-dry.jpg',
    alt: 'hair being sectioned and blow-dry',
  },
  {
    title: 'Colour & Balayage',
    description:
      'From full-head foils to balayage, we offer a wide range of colouring options to perfectly suit your style.',
    src: '/img/hair/foils.jpg',
    alt: 'hair being coloured with foils',
  },
  {
    title: 'Bridal & Occasion',
    description:
      'From wedding hair to prom night we can provide a style to take your hair to the next level!',
    src: '/img/hair/hair-up-bridal.jpg',
    alt: 'side view of bridal hair',
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

export function Services() {
  return (
    <section className="bg-white py-20">
      <div className="w-[90%] max-w-275 mx-auto">

        {/* Section header */}
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-brand-dark text-3xl md:text-5xl font-playfair">Popular Services</h2>
          <Link
            href="/services"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-brand-primary hover:opacity-75 transition-opacity font-medium"
          >
            View all services <span aria-hidden>→</span>
          </Link>
        </div>

        {/* 3 full-image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-3xl overflow-hidden h-115"
            >
              {/* Background image */}
              <Image
                src={service.src}
                alt={service.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent" />

              {/* Text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair font-semibold text-brand-primary text-2xl leading-tight mb-3">
                  {service.title}
                </h3>
                <p className="text-white/85 text-sm leading-relaxed">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Other services list */}
        <div className="border-t border-brand-dark/10 pt-10">
          <h3 className="text-brand-dark/50 text-xs tracking-widest uppercase mb-6">
            Other Services Available
          </h3>
          <ul className="flex flex-wrap gap-3">
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

        {/* Mobile "view all" link */}
        <div className="sm:hidden mt-8 text-center">
          <Link href="/services" className="text-sm text-brand-primary font-medium">
            View all services →
          </Link>
        </div>

      </div>
    </section>
  )
}
