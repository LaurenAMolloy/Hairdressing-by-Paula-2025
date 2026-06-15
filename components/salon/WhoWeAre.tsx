import { FadeInImage } from '@/components/salon/FadeInImage'

export function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="content-wrapper">
        <h2>Who We Are</h2>
        <div className="who-we-are-content">
          <figure className="who-we-are-img">
            <FadeInImage
              src="/img/hair/curling.jpg"
              alt="hair being styled with curling tongs"
              width={800}
              height={600}
            />
          </figure>
          <div className="wwa-divider"></div>
          <div className="who-we-are-text">
            <div className="who-we-are-col-1">
              <p>
                With 20 years of salon experience, I am a fully qualified and insured hair stylist providing
                top-quality hairdressing services in Conwy, Llandudno, Deganwy, Rhos on Sea, Trefriw, and
                the surrounding areas.
              </p>
              <p>
                Whether you&apos;re visiting our friendly salon, Angies Hair, in Trefriw or enjoying the
                convenience of a home visit, you can rest assured you are in safe hands. My services begin
                with a professional consultation where I guide you to create the perfect style tailored to
                your needs and lifestyle.
              </p>
            </div>
            <div className="who-we-are-col-2">
              <p>
                My goal is to ensure you leave 100% happy with your hair and confident in your ability to
                recreate the style at home. I offer expert advice on aftercare and recommend specific
                products to keep your hair looking its best.
              </p>
              <p>
                Experience salon-quality hairdressing wherever you are with a full range of services and
                personalised care. Book your appointment today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
