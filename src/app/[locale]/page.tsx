import { CallToAction } from '@/components/CallToAction'
import { DataFieldSection } from '@/components/DataFieldSection'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowToWorkSection } from '@/components/HowToWorkSection'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | freemapsscraper',
    default: 'Google Maps Scraper: Free & Easy to Use - Free Maps Scraper',
  },
  description:
    'Free Maps Scraper: an efficient, easy-to-use tool for extracting business leads from Google Maps. Quickly gather phone numbers, emails, and more. Free to try!',
    alternates: { canonical: "https://www.freemapsscraper.com/", } 
}


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
