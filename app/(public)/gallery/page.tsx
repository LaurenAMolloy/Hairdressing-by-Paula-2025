import { BeforeAfterGallery } from '@/components/gallery/BeforeAfterGallery'
import { beforeAfterPairs } from '@/lib/gallery-data'

export default function GalleryPage() {
  return (
    <>
      <BeforeAfterGallery pairs={beforeAfterPairs} />
    </>
  )
}
