export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-bg py-20 border-b border-brand-dark/10">
        <div className="w-[90%] mx-auto max-w-275">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-primary mb-4">Get in touch</p>
          <h1 className="font-playfair font-bold text-5xl lg:text-6xl leading-tight text-brand-dark mb-6 max-w-lg">
            Book your next <span className="text-brand-primary">appointment</span>
          </h1>
          <p className="text-brand-dark/70 text-base leading-relaxed mb-10 max-w-md">
            We&apos;d love to hear from you. Contact by phone is preferable.
          </p>
          <a
            href="tel:+447805287950"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-primary text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Call to Book <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Details + map */}
      <section className="py-20">
        <div className="w-[90%] mx-auto max-w-275 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/40 mb-2">Opening Hours</p>
              <p className="text-brand-dark">Monday–Saturday: 9.30am–5.30pm</p>
              <p className="text-brand-dark">Sunday: Closed</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/40 mb-2">Phone</p>
              <a href="tel:+447805287950" className="text-brand-dark hover:text-brand-primary transition-colors">
                07805 287950
              </a>
              <p className="text-sm text-brand-dark/50 mt-1">Contact by phone is preferable</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/40 mb-2">Email</p>
              <a href="mailto:paulafinchhair@aol.com" className="text-brand-dark hover:text-brand-primary transition-colors">
                paulafinchhair@aol.com
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-dark/40 mb-2">Address</p>
              <address>B5106, Trefriw LL27 0JG</address>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden relative h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.7175712181115!2d-3.8271357237308266!3d53.15116308931032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865108fffffffff%3A0xc12e70113ee704f6!2sAngie&#39;s%20Hair!5e0!3m2!1sen!2suk!4v1722782696403!5m2!1sen!2suk"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hair by Paula salon location"
            />
          </div>

        </div>
      </section>
    </main>
  )
}
