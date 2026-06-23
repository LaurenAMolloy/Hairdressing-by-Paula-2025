import Image from 'next/image'

export function Products() {
  return (
    <section className="bg-white py-20">
      <div className="w-[90%] max-w-275 mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-brand-rose mb-3">In The Salon</p>
        <h2 className="text-brand-dark text-3xl md:text-4xl mb-10">Products We Use...</h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <p className="text-brand-dark/70 mb-6">
              At Angie&apos;s hair salon we are not tied in to using any specific brand, this enables us to
              use the best products from a wide range of top brands to achieve the best results. Here is a
              selection of products we use:
            </p>
            <ul className="space-y-2">
              {["L'Oreal Professional", 'Wella', 'Mood', 'Muk & Amp', 'Maria Nila vegan products'].map((product) => (
                <li key={product} className="flex items-center gap-3 text-brand-dark/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-rose shrink-0" />
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <figure className="shrink-0">
            <Image
              src="/img/products/muk-social.png"
              alt="muk shampoo logo"
              width={240}
              height={240}
              className="rounded-xl w-60 h-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
