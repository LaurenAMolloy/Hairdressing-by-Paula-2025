import { FadeInImage } from '@/components/salon/FadeInImage'

export function Products() {
  return (
    <section className="flex justify-center bg-white font-medium">
      <div className="w-[90%] mx-auto max-w-275 relative mb-8">
        <h2 className="text-center text-brand-primary font-semibold text-[2.5rem] py-[1.4rem]">Products We Use...</h2>
        <div className="flex flex-wrap">
          <div className="mb-5">
            <p className="m-0 p-[0.9rem] text-left">
              At Angie&apos;s hair salon we are not tied in to using any specific brand, this enables us to
              use the best products from a wide range of top brands to achieve the best results. Here is a
              selection of products we use:
            </p>
            <ul className="[&>li]:pl-[0.8rem] [&>li]:leading-[2] [&>li]:font-bold [&>li]:text-[#131313]">
              <li>L&apos;Oreal Professional</li>
              <li>Wella</li>
              <li>Mood</li>
              <li>Muk &amp; Amp</li>
              <li>Maria Nila vegan products</li>
            </ul>
          </div>
          <figure>
            <FadeInImage
              src="/img/products/muk-social.png"
              alt="muk shampoo logo"
              width={300}
              height={300}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
