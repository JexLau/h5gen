import { CallToAction } from '@/components/CallToAction'
import { DataFieldSection } from '@/components/DataFieldSection'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HowToWorkSection } from '@/components/HowToWorkSection'
import { Meta } from '@/components/Meta'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { baseurl, getHrefLang } from '@/utils/constants'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Index')
  return (
    <>
      <Meta title={t('title')} description={t('description')} locale={locale} />
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
