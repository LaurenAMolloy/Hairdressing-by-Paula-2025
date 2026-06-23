export default function ContactPage() {
  return (
    <main>
      <section className="contact-page">
        <div className="content-wrapper">
          <h1>
            Contact us, because you all need <span>great hair!</span>
          </h1>
          <div>
            <a className="btn contact-btn" href="tel:+447805287950">
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
      <section className="map">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.7175712181115!2d-3.8271357237308266!3d53.15116308931032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865108fffffffff%3A0xc12e70113ee704f6!2sAngie&#39;s%20Hair!5e0!3m2!1sen!2suk!4v1722782696403!5m2!1sen!2suk"
            width="600"
            height="450"
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
