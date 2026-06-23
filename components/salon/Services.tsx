import { FadeInImage } from '@/components/salon/FadeInImage'

export function Services() {
  return (
    <section className="flex justify-center bg-[#dddddd] mb-10 items-center">
      <div className="w-[90%] mx-auto max-w-275 relative">
        <h2 className="text-center font-semibold text-[2.5rem] py-6">Popular Services</h2>
        <div className="flex justify-center flex-wrap">
          <article className="w-[95%] text-left mt-5 bg-brand-dark border-2 border-white flex flex-col text-white">
            <h3 className="px-4">Ladies Cut and Blow Dry</h3>
            <p className="px-4 pb-4">
              Whether you&apos;re looking for a subtle trim or a bold transformation, Hairdressing by Paula
              Lorraine is your destination for quality cuts.
            </p>
            <FadeInImage
              wrapperClassName="w-4/5 self-center mb-8 border-2 border-white"
              src="/img/hair/blow-dry.jpg"
              alt="hair being sectioned and blow-dry"
              width={400}
              height={300}
            />
          </article>

          <article className="w-[95%] text-left mt-5 bg-brand-dark border-2 border-white flex flex-col text-white">
            <h3 className="px-4">Colour</h3>
            <p className="px-4 pb-4">
              From full-head foils to balayage, we offer a wide range of colouring options to perfectly suit
              your style.
            </p>
            <FadeInImage
              wrapperClassName="w-4/5 self-center mb-8 border-2 border-white"
              src="/img/hair/foils.jpg"
              alt="hair being coloured with foils"
              width={400}
              height={300}
            />
          </article>

          <article className="w-[95%] text-left mt-5 bg-brand-dark border-2 border-white flex flex-col text-white">
            <h3 className="px-4">Special Occasion Hair</h3>
            <p className="px-4 pb-4">
              From wedding hair to prom night we can provide a style to take your hair to the next level!
            </p>
            <FadeInImage
              wrapperClassName="w-4/5 self-center mb-8 border-2 border-white"
              src="/img/hair/hair-up-bridal.jpg"
              alt="side view of bridal hair"
              width={400}
              height={300}
            />
          </article>

          <article className="w-[95%] text-left mt-5 bg-brand-dark border-2 border-white flex flex-col text-white">
            <h3 className="px-4">Other Services Available:</h3>
            <ul className="[&>li]:p-2">
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
