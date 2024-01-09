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
import { useTranslations } from 'next-intl'

export default function Home({ params }: { params: Record<string, string> }) {
  const { locale = 'en' } = params;
  const t = useTranslations('Index')
  const ct = useTranslations('Common')
  return (
    <>
      <Meta title={t('title')} description={t('description')} locale={locale} />
      <Header downloadText={ct("Free to try")} />
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
