'use client'

import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const reviews = [
  {
    text: `"I had an incredible experience at Hairdressing by Paula Lorraine! My hair colour was in desperate need of correction, and the talented colourist performed a root tap and added highlights. The results are stunning. My hair looks more natural, is easier to style, and is so much easier to maintain. The service was professional and personalised, making me feel valued and confident in their expertise. I could not be happier with my new look. Highly recommend this service for anyone seeking top-quality hair care!"`,
    stars: '★★★★★',
    author: 'Lauren, Dolgarrog',
  },
]

export function Reviews() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }))

  return (
    <section className="reviews">
      <div className="content-wrapper">
        <h2>Happy Clients</h2>
        <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
                <div className="testimonial-container">
                  <p className="testimonial">{review.text}</p>
                  <p className="stars">{review.stars}</p>
                  <div className="user-details">
                    <h4 className="username">{review.author}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="progress-bar" />
      </div>
    </section>
  )
}
