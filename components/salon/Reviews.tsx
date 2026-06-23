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
    <section className="flex justify-center">
      <div className="w-[90%] mx-auto max-w-275 relative">
        <h2 className="text-center text-black font-semibold text-[2.5rem] py-[1.4rem]">Happy Clients</h2>
        <Carousel plugins={[plugin.current]} opts={{ loop: true }}>
          <CarouselContent>
            {reviews.map((review, i) => (
              <CarouselItem key={i}>
                <div className="bg-white rounded-2xl px-6 py-8 max-w-3xl mx-auto min-[600px]:px-20 min-[600px]:py-12">
                  <p className="leading-8">{review.text}</p>
                  <p className="text-center pb-[0.9rem] text-brand-primary">{review.stars}</p>
                  <div>
                    <h4 className="mt-2 text-base text-[#555]">{review.author}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="bg-brand-primary h-1 w-full mt-6 animate-[grow_5s_linear_infinite] origin-left" />
      </div>
    </section>
  )
}
