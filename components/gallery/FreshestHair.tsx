import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HairImage {
  src: string
  alt: string
}

interface Props {
  images: HairImage[]
}

const HEIGHTS = [
  'h-56', 'h-72', 'h-48', 'h-80',
  'h-64', 'h-44', 'h-72', 'h-56',
  'h-80', 'h-52', 'h-64', 'h-48',
  'h-[17rem]', 'h-[19rem]', 'h-52', 'h-60',
]

export function FreshestHair({ images }: Props) {
  return (
    <section className="py-16">
      <div className="w-[90%] max-w-275 mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/50 mb-4 text-center">
          Portfolio
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-brand-dark text-center mb-12">
          Freshest Hair
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={cn(
                'relative break-inside-avoid mb-4 rounded-xl overflow-hidden group',
                HEIGHTS[i] ?? 'h-64'
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Caption overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-4">
                <p className="text-white text-sm font-playfair text-center leading-snug">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
