import { CallToAction } from '@/components/CallToAction'
import { DataFieldSection } from '@/components/DataFieldSection'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowToWorkSection } from '@/components/HowToWorkSection'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <HowToWorkSection />
        <DataFieldSection />
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <Pricing />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
