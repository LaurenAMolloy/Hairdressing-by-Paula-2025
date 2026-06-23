import { FadeInImage } from '@/components/salon/FadeInImage'

export function WhoWeAre() {
  return (
    <section className="flex justify-center items-center text-left bg-white">
      <div className="w-[90%] mx-auto max-w-275 relative">
        <h2 className="text-center font-bold text-brand-primary py-[1.4rem] text-[2.5rem]">Who We Are</h2>
        <div className="m-2.5">
          <figure>
            <FadeInImage
              src="/img/hair/curling.jpg"
              alt="hair being styled with curling tongs"
              width={800}
              height={600}
            />
          </figure>
          <div className="w-full h-0.5 my-5 bg-brand-primary"></div>
          <div className="md:flex">
            <div className="md:w-1/2">
              <p className="m-0 pl-4 pb-4 font-medium">
                With 20 years of salon experience, I am a fully qualified and insured hair stylist providing
                top-quality hairdressing services in Conwy, Llandudno, Deganwy, Rhos on Sea, Trefriw, and
                the surrounding areas.
              </p>
              <p className="m-0 pl-4 pb-4 font-medium">
                Whether you&apos;re visiting our friendly salon, Angies Hair, in Trefriw or enjoying the
                convenience of a home visit, you can rest assured you are in safe hands. My services begin
                with a professional consultation where I guide you to create the perfect style tailored to
                your needs and lifestyle.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-4">
              <p className="m-0 pl-4 pb-4 font-medium">
                My goal is to ensure you leave 100% happy with your hair and confident in your ability to
                recreate the style at home. I offer expert advice on aftercare and recommend specific
                products to keep your hair looking its best.
              </p>
              <p className="m-0 pl-4 pb-4 font-medium">
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
