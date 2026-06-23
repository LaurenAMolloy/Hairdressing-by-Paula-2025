import { FadeInImage } from '@/components/salon/FadeInImage'

const images = [
  { src: '/img/square-img/square-1.png', alt: 'brunette curly hair' },
  { src: '/img/square-img/square-red-bob.png', alt: 'short white hair' },
  { src: '/img/square-img/square-bridal.png', alt: 'blonde hair style' },
  { src: '/img/square-img/square-4.png', alt: 'bronde hair style' },
]

export function SampleWork() {
  return (
    <section className="flex justify-center bg-[#aaaaaa] text-black">
      <div className="w-[90%] mx-auto max-w-275 relative mb-8">
        <h2 className="text-center text-[2.5rem] py-[1.4rem]">A Sample of our Work</h2>
        <div className="flex justify-center flex-wrap">
          {images.map((img) => (
            <div key={img.src} className="flex items-center flex-col flex-wrap basis-2/5 p-2.5">
              <FadeInImage
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="w-full border-[3px] border-brand-primary"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
