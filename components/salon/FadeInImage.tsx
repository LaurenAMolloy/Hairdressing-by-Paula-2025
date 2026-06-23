'use client'

import { useEffect, useRef } from 'react'
import Image, { type ImageProps } from 'next/image'

interface FadeInImageProps extends ImageProps {
  wrapperClassName?: string
}

export function FadeInImage({ wrapperClassName, ...props }: FadeInImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add('opacity-100', 'translate-y-0')
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`w-full h-full opacity-0 translate-y-4 transition-all duration-700${wrapperClassName ? ` ${wrapperClassName}` : ''}`}>
      <Image {...props} />
    </div>
  )
}
