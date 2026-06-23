'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import type { GalleryPair } from '@/types'

interface Props {
  pairs: GalleryPair[]
}

export function BeforeAfterGallery({ pairs }: Props) {
  return (
    <section className="py-16">
      <div className="w-[90%] max-w-275 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pairs.map((pair, i) => (
            <div key={i}>
              {/* Slider card */}
              <div className="rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage src={pair.before.src} alt={pair.before.alt} />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={pair.after.src} alt={pair.after.alt} />
                  }
                />
              </div>

              {/* Card metadata */}
              <div className="mt-3 px-1">
                <div className="flex items-baseline justify-between gap-3">
                  {pair.title && (
                    <p className="font-playfair text-brand-dark text-base leading-snug">
                      <span className="text-brand-dark/30 mr-1 text-sm">{i + 1}.</span>
                      {pair.title}
                    </p>
                  )}
                  {pair.category && (
                    <p className="text-[10px] tracking-[0.15em] uppercase text-brand-dark/50 font-semibold shrink-0">
                      {pair.category}
                    </p>
                  )}
                </div>
                {pair.description && (
                  <p className="mt-1 text-xs text-brand-dark/50 leading-relaxed">
                    {pair.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
