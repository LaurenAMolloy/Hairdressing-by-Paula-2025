import { BeforeAfterGalleryClient } from '@/components/gallery/BeforeAfterGalleryClient'
import { FreshestHair } from '@/components/gallery/FreshestHair'
import { beforeAfterPairs, freshestHairImages } from '@/lib/gallery-data'

export default function GalleryPage() {
  return (
    <>
      <BeforeAfterGalleryClient pairs={beforeAfterPairs} />
      <FreshestHair images={freshestHairImages} />
    </>
  )
}
