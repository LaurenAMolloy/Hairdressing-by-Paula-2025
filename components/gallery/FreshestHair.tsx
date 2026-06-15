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
  'h-68', 'h-76', 'h-52', 'h-60',
]

export function FreshestHair({ images }: Props) {
  return (
    <section className="gallery-freshest">
      <div className="w-[90%] max-w-[1100px] mx-auto relative">
        <h2>Browse Our Freshest Hair Designs</h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, i) => (
            <div key={i} className={cn('relative break-inside-avoid mb-4 rounded-xl overflow-hidden', HEIGHTS[i] ?? 'h-64')}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
