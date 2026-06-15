import { FadeInImage } from '@/components/salon/FadeInImage'

export function Hero() {
  return (
    <section className="hero content">
      <div className="content-wrapper">
        <div className="hero-text">
          <h1>
            Hairdressing by <span>Paula Lorraine</span>
          </h1>
          <h2>
            Feel special and new
            <br />
            BE YOU!
            <br />
            <span>Love</span> is in the <span>hair</span>
            <br />
            If it&apos;s about hair we care
          </h2>
          <a className="btn" href="tel:+447805287950">
            Book An Appointment
          </a>
          <h3 className="number">07805 287950</h3>
          <h3>
            <a href="mailto:paulafinchhair@aol.com">paulafinchhair@aol.com</a>
          </h3>
          <address>B5106, Trefriw LL27 0JG</address>
        </div>
        <figure className="hero-img">
          <FadeInImage
            src="/img/hair/hero-hair.jpg"
            alt="back view of long styled hair"
            width={600}
            height={800}
          />
        </figure>
      </div>
    </section>
  )
}
