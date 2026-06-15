import { BeforeAfterGallery } from '@/components/gallery/BeforeAfterGallery'
import { FreshestHair } from '@/components/gallery/FreshestHair'
import { beforeAfterPairs, freshestHairImages } from '@/lib/gallery-data'

export default function GalleryPage() {
  return (
    <>
      <BeforeAfterGallery pairs={beforeAfterPairs} />
      <FreshestHair images={freshestHairImages} />
    </>
  )
}
