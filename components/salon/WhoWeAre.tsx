import Image from 'next/image'
import Link from 'next/link'

export function WhoWeAre() {
  return (
    <section className="bg-white py-20">
      <div className="w-[90%] max-w-275 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image — left */}
          <div className="relative rounded-2xl overflow-hidden aspect-4/5">
            <Image
              src="/img/hair/curling.jpg"
              alt="hair being styled with curling tongs"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Text — right */}
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-rose mb-3">The Studio</p>
            <h2 className="text-brand-dark text-3xl md:text-4xl leading-snug mb-6">
              Who We Are
            </h2>
            <p className="text-brand-dark/70 mb-4">
              With 20 years of salon experience, I am a fully qualified and insured hair stylist providing
              top-quality hairdressing services in Conwy, Llandudno, Deganwy, Rhos on Sea, Trefriw, and
              the surrounding areas.
            </p>
            <p className="text-brand-dark/70 mb-4">
              Whether you&apos;re visiting our friendly salon, Angies Hair, in Trefriw or enjoying the
              convenience of a home visit, you can rest assured you are in safe hands. My services begin
              with a professional consultation where I guide you to create the perfect style tailored to
              your needs and lifestyle.
            </p>
            <p className="text-brand-dark/70 mb-4">
              My goal is to ensure you leave 100% happy with your hair and confident in your ability to
              recreate the style at home. I offer expert advice on aftercare and recommend specific
              products to keep your hair looking its best.
            </p>
            <p className="text-brand-dark/70 mb-8">
              Experience salon-quality hairdressing wherever you are with a full range of services and
              personalised care. Book your appointment today!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-brand-dark font-medium text-sm hover:gap-3 transition-all"
            >
              Our Story <span aria-hidden>→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
