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
    text: 'I had an incredible experience at Hairdressing by Paula Lorraine! My hair colour was in desperate need of correction, and the talented colourist performed a root tap and added highlights. The results are stunning. My hair looks more natural, is easier to style, and is so much easier to maintain. The service was professional and personalised, making me feel valued and confident in their expertise. I could not be happier with my new look. Highly recommend this service for anyone seeking top-quality hair care!',
    stars: '★★★★★',
    author: 'Lauren, Dolgarrog',
  },
  {
    text: 'I recently visited Paula at the salon in Trefriw, and I am thrilled with the outcome! Paula was professional and attentive, making me feel comfortable and well cared for throughout the process. I am absolutely delighted with my new look and highly recommend Paula for anyone needing expert hair care.',
    stars: '★★★★★',
    author: 'Alyson, Rhyd-Y-Foel',
  },
  {
    text: 'We love Paula! I remember feeling nervous when she first suggested foils, but my hair looks amazing. Paula always does her best to accomodate me and my family. Always professional. Patient with family',
    stars: '★★★★★',
    author: 'Lil, Conwy',
  },
  {
    text: 'Paula has been doing my hair for years. I trust her 100%. She is great at giving advice on how to look after your hair and very nice and polite. I wouldn not have anyone else!',
    stars: '★★★★★',
    author: 'Mona, Trefriw',
  },
  {
    text: 'I can not speak highly enough of Paula. It is so convinient when she comes to my house to do mine and my sisters hair. She manages to keep our thick curls under control somehow and we have a chance for a gossip and a catch up at the same time. What more could we ask for?',
    stars: '★★★★★',
    author: 'J, Conwy',
  },
  {
    text: 'Absolutely amazing hairdresser. Lovely lady who did a fantastic job on my wedding hair in April 2025. Thank you so much Paula. Xx I would highly recommend.',
    stars: '★★★★★',
    author: 'Jo, Leicester',
  },
  {
    text: 'Had my hair done today by Paula and absolutely love it, she is amazing!! Helped me decide how I wanted it and just a lovely person if I could give higher than 5* I would x',
    stars: '★★★★★',
    author: 'Katie Malpas',
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
