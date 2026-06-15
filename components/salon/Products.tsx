import { FadeInImage } from '@/components/salon/FadeInImage'

export function Products() {
  return (
    <section className="products">
      <div className="content-wrapper">
        <h2>Products We Use...</h2>
        <div className="products-content">
          <div className="products-text">
            <p>
              At Angie&apos;s hair salon we are not tied in to using any specific brand, this enables us to
              use the best products from a wide range of top brands to achieve the best results. Here is a
              selection of products we use:
            </p>
            <ul>
              <li>L&apos;Oreal Professional</li>
              <li>Wella</li>
              <li>Mood</li>
              <li>Muk &amp; Amp</li>
              <li>Maria Nila vegan products</li>
            </ul>
          </div>
          <figure className="products-img">
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
