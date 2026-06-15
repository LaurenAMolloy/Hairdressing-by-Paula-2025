import { FadeInImage } from '@/components/salon/FadeInImage'

const images = [
  { src: '/img/square-img/square-1.png', alt: 'brunette curly hair' },
  { src: '/img/square-img/square-red-bob.png', alt: 'short white hair' },
  { src: '/img/square-img/square-bridal.png', alt: 'blonde hair style' },
  { src: '/img/square-img/square-4.png', alt: 'bronde hair style' },
]

export function SampleWork() {
  return (
    <section className="sample">
      <div className="content-wrapper">
        <div>
          <h2>A Sample of our Work</h2>
          <div className="square-img-container">
            {images.map((img) => (
              <div key={img.src} className="square-img">
                <FadeInImage src={img.src} alt={img.alt} width={300} height={300} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
