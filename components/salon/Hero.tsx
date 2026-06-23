import { FadeInImage } from '@/components/salon/FadeInImage'

export function Hero() {
  return (
    <section className="flex justify-center items-center w-full mt-[30px] mb-10 bg-brand-bg">
      <div className="w-[90%] mx-auto max-w-275 relative md:flex md:flex-row md:justify-between">
        <div className="text-center md:flex md:flex-col md:items-center md:basis-[45%]">
          <h1 className="leading-[1.2]">
            Hairdressing by <span className="text-brand-primary">Paula Lorraine</span>
          </h1>
          <h2 className="leading-[1.5] text-center pb-12 md:leading-[1.2] md:mt-0 md:pb-8">
            Feel special and new
            <br />
            BE YOU!
            <br />
            <span>Love</span> is in the <span>hair</span>
            <br />
            If it&apos;s about hair we care
          </h2>
          <a
            className="block bg-brand-accent text-white text-[1.2rem] px-4 py-4 no-underline rounded-[60px] transition-[background] duration-500 ease hover:bg-brand-dark md:w-1/2"
            href="tel:+447805287950"
          >
            Book An Appointment
          </a>
          <h3 className="font-montserrat text-center font-bold pt-[60px] md:mb-0 md:pt-4">07805 287950</h3>
          <h3 className="font-montserrat text-center font-bold">
            <a href="mailto:paulafinchhair@aol.com">paulafinchhair@aol.com</a>
          </h3>
          <address className="pb-5 md:pb-0">B5106, Trefriw LL27 0JG</address>
        </div>
        <figure className="md:flex md:basis-[50%]">
          <FadeInImage
            src="/img/hair/hero-hair.jpg"
            alt="back view of long styled hair"
            width={600}
            height={800}
            priority
          />
        </figure>
      </div>
    </section>
  )
}
