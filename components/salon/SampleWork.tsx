import Link from 'next/link'
import { FadeInImage } from '@/components/salon/FadeInImage'

const images = [
  { src: '/img/square-img/square-1.png', alt: 'brunette curly hair' },
  { src: '/img/square-img/square-red-bob.png', alt: 'short white hair' },
  { src: '/img/square-img/square-bridal.png', alt: 'blonde hair style' },
  { src: '/img/square-img/square-4.png', alt: 'bronde hair style' },
]

export function SampleWork() {
  return (
    <section className="bg-brand-cream py-20">
      <div className="w-[90%] max-w-275 mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/50 mb-2">Portfolio</p>
            <h2 className="text-brand-dark text-3xl md:text-4xl">A Sample of our Work</h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-brand-dark/60 hover:text-brand-dark transition-colors"
          >
            Full gallery <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.src} className="rounded-xl overflow-hidden aspect-square">
              <FadeInImage
                src={img.src}
                alt={img.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
