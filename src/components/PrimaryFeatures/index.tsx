import screenshotApp from '@/images/screenshots/project-app-screenshot.png'
import screenshotData from '@/images/screenshots/data-csv-file-page.png'
import screenshotResults from '@/images/screenshots/export-your-results.png'
import { useTranslations } from 'next-intl'
import { FeatureClient } from './FeatureClient'

export function PrimaryFeatures() {
  const t = useTranslations('PrimaryFeatures')
  const features = [
    {
      title: t('Get Leads with Our Free Google Maps Scraper'),
      description:
        t("Your simple choice for navigating Google Maps for business info"),
      image: screenshotData,
    },
    {
      title: t('Easy to Extract Business Locations and Contacts'),
      description:
        t("Make your marketing smoother with our easy-to-use freemapsscraper"),
      image: screenshotResults,
    },
    {
      title: t("Boots Your Sales with Accurate Local Business Data"),
      description:t("freemapsscraper boosts your sales with fresh"),
      image: screenshotApp,
    },
  ]

  return (
    <FeatureClient features={features}>
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {t("With Easy Google Maps Data Scraper for Accurate Business Leads")}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {t("Enhance your lead generation strategy with our Google Maps Scraper with a single click")}
          </p>
          <p className="mt-2 text-lg tracking-tight text-blue-100">
            {t("With our efficient scraping tool, tap into a wealth of local business data to power up your sales and marketing efforts")}
          </p>
        </div>
    </FeatureClient>
  )
}
