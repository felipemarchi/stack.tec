import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'
import { Hero } from '@/components/site/hero'
import { Nav } from '@/components/site/nav'
import { Segments } from '@/components/site/segments'
import { SolutionsGallery } from '@/components/site/solutions-gallery'
import { TwoAudiences } from '@/components/site/two-audiences'
import { WhyStack } from '@/components/site/why-stack'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SolutionsGallery />
        <Segments />
        <TwoAudiences />
        <WhyStack />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
