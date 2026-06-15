'use client'

import dynamic from 'next/dynamic'
import type { GalleryPair } from '@/types'

const BeforeAfterGallery = dynamic(
  () => import('./BeforeAfterGallery').then(m => m.BeforeAfterGallery),
  { ssr: false }
)

interface Props {
  pairs: GalleryPair[]
}

export function BeforeAfterGalleryClient({ pairs }: Props) {
  return <BeforeAfterGallery pairs={pairs} />
}
