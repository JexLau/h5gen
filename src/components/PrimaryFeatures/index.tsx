import screenshotApp from '@/images/screenshots/project-app-screenshot.png'
import screenshotData from '@/images/screenshots/data-csv-file-page.png'
import screenshotResults from '@/images/screenshots/export-your-results.png'
import { useTranslations } from 'next-intl'
import { FeatureClient } from './FeatureClient'

export function PrimaryFeatures() {
  const t = useTranslations('PrimaryFeatures')
  const features = [
    {
      title: t('t3'),
      description:
        t("t4"),
      image: screenshotData,
    },
    {
      title: t('t5'),
      description:
        t("t6"),
      image: screenshotResults,
    },
    {
      title: t("t7"),
      description:t("t8"),
      image: screenshotApp,
    },
  ]

  return (
    <FeatureClient features={features}>
      <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            {t("h2")}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            {t("t1")}
          </p>
          <p className="mt-2 text-lg tracking-tight text-blue-100">
            {t("t2")}
          </p>
        </div>
    </FeatureClient>
  )
}
