import { Hero } from '@/components/salon/Hero'
import { WhoWeAre } from '@/components/salon/WhoWeAre'
import { Services } from '@/components/salon/Services'
import { Products } from '@/components/salon/Products'
import { Reviews } from '@/components/salon/Reviews'
import { SampleWork } from '@/components/salon/SampleWork'
import { SeeYouSoon } from '@/components/salon/SeeYouSoon'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <Services />
      <Products />
      <Reviews />
      <SampleWork />
      <SeeYouSoon />
    </main>
  )
}
