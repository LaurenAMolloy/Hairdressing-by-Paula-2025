export default function ContactPage() {
  return (
    <main>
      <section className="flex justify-center">
        <div className="w-[90%] mx-auto max-w-275 relative mb-10">
          <h1 className="pb-12">
            Contact us, because you all need <span className="text-[3rem] text-brand-primary">great hair!</span>
          </h1>
          <div>
            <a
              className="block bg-brand-accent text-white text-[1.2rem] px-4 py-4 no-underline rounded-[60px] transition-[background] duration-500 ease hover:bg-brand-dark mb-8 w-2/5 text-center"
              href="tel:+447805287950"
            >
              Book An Appointment
            </a>
          </div>
          <div className="contact-info">
            <h2>Monday-Saturday: 9.30am-5.30pm</h2>
            <h2>Sunday: Closed</h2>
            <h3>
              <a href="tel:+447805287950">07805 287950</a>
            </h3>
            <h3>Contact by phone is preferable</h3>
            <h3>
              <a href="mailto:paulafinchhair@aol.com">paulafinchhair@aol.com</a>
            </h3>
            <address>B5106, Trefriw LL27 0JG</address>
          </div>
        </div>
      </section>
      <section className="md:flex md:justify-center md:items-center md:pb-5">
        <figure className="w-full h-0 pb-[125%] overflow-hidden relative md:w-4/5 md:h-auto md:pb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.7175712181115!2d-3.8271357237308266!3d53.15116308931032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865108fffffffff%3A0xc12e70113ee704f6!2sAngie&#39;s%20Hair!5e0!3m2!1sen!2suk!4v1722782696403!5m2!1sen!2suk"
            width="600"
            height="450"
            className="w-full h-full absolute top-0 left-0 md:static md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Angie's Hair salon location"
          />
        </figure>
      </section>
    </main>
  )
}
