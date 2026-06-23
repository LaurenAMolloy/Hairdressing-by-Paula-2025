'use client'

import { useState } from 'react'
import { BeforeAfterGalleryClient } from './BeforeAfterGalleryClient'
import { FreshestHair } from './FreshestHair'
import { cn } from '@/lib/utils'
import type { GalleryPair } from '@/types'

type Filter = 'all' | 'before-after' | 'freshest'

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'before-after', label: 'Before & After' },
  { value: 'freshest', label: 'Freshest Hair' },
]

interface HairImage {
  src: string
  alt: string
}

interface Props {
  pairs: GalleryPair[]
  images: HairImage[]
}

export function GalleryContent({ pairs, images }: Props) {
  const [filter, setFilter] = useState<Filter>('all')

  return (
    <div className="bg-white">

      {/* Category filter bar */}
      <div className="py-8 border-b border-brand-dark/10">
        <div className="w-[90%] max-w-275 mx-auto flex flex-wrap gap-3 justify-center">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-colors border',
                filter === value
                  ? 'bg-brand-rose text-white border-brand-rose'
                  : 'border-brand-dark/15 text-brand-dark/70 hover:border-brand-rose hover:text-brand-rose'
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Before & After section */}
      {(filter === 'all' || filter === 'before-after') && (
        <BeforeAfterGalleryClient pairs={pairs} />
      )}

      {/* Divider between sections when showing all */}
      {filter === 'all' && (
        <div className="w-[90%] max-w-275 mx-auto">
          <hr className="border-brand-dark/10" />
        </div>
      )}

      {/* Freshest Hair section */}
      {(filter === 'all' || filter === 'freshest') && (
        <FreshestHair images={images} />
      )}

    </div>
  )
}
