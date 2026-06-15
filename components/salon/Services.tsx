import { FadeInImage } from '@/components/salon/FadeInImage'

export function Services() {
  return (
    <section className="services">
      <div className="content-wrapper">
        <h2>Popular Services</h2>
        <div className="service-cards">
          <article className="card-body">
            <h3>Ladies Cut and Blow Dry</h3>
            <p className="card-text">
              Whether you&apos;re looking for a subtle trim or a bold transformation, Hairdressing by Paula
              Lorraine is your destination for quality cuts.
            </p>
            <FadeInImage
              wrapperClassName="card-img"
              src="/img/hair/blow-dry.jpg"
              alt="hair being sectioned and blow-dry"
              width={400}
              height={300}
            />
          </article>

          <article className="card-body">
            <h3>Colour</h3>
            <p className="card-text">
              From full-head foils to balayage, we offer a wide range of colouring options to perfectly suit
              your style.
            </p>
            <FadeInImage
              wrapperClassName="card-img"
              src="/img/hair/foils.jpg"
              alt="hair being coloured with foils"
              width={400}
              height={300}
            />
          </article>

          <article className="card-body">
            <h3>Special Occasion Hair</h3>
            <p className="card-text">
              From wedding hair to prom night we can provide a style to take your hair to the next level!
            </p>
            <FadeInImage
              wrapperClassName="card-img"
              src="/img/hair/hair-up-bridal.jpg"
              alt="side view of bridal hair"
              width={400}
              height={300}
            />
          </article>

          <article className="card-body">
            <h3>Other Services Available:</h3>
            <ul>
              <li>Blow dry</li>
              <li>Ladies wet cuts</li>
              <li>Cut and blow dry</li>
              <li>Full head tint</li>
              <li>Half head foils</li>
              <li>Full head foils</li>
              <li>Ombre</li>
              <li>Hair up/prom styles</li>
              <li>Gents cuts/styles</li>
              <li>Childrens cuts</li>
              <li>Wedding packages</li>
              <li>Perms</li>
              <li>Balayage</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
