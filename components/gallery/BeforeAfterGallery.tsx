'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import type { GalleryPair } from '@/types'

interface Props {
  pairs: GalleryPair[]
}

export function BeforeAfterGallery({ pairs }: Props) {
  return (
    <section className="flex justify-center pb-12">
      <div className="w-[90%] mx-auto max-w-275 relative flex justify-center items-start flex-wrap">
        <h1 className="text-center leading-[1.2] w-full pb-6">View Our Latest Hair Transformations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pairs.map((pair, i) => (
            <div key={i} className="rounded-xl overflow-hidden">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage src={pair.before.src} alt={pair.before.alt} />
                }
                itemTwo={
                  <ReactCompareSliderImage src={pair.after.src} alt={pair.after.alt} />
                }
              />
              <div className="flex justify-between text-sm px-2 pt-1 text-muted-foreground">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
