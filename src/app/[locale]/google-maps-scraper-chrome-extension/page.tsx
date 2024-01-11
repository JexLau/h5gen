import { Container } from '@/components/Container'
import { FreeToTry } from '@/components/DownloadBtn'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Meta } from '@/components/Meta'
import { useTranslations } from 'next-intl'

const DownloadPage = ({ params }: { params: Record<string, string> }) => {
  const tm = useTranslations('Download')
  const t = useTranslations('DownloadPage')
  const { locale = 'en' } = params;
  
  return (
    <>
      <Meta title={tm('title')} description={tm('description')} locale={locale} pageurl="/google-maps-scraper-chrome-extension" />
      <Header downloadText={t("Download now") + " 2.2.5"} href='https://www.freemapsscraper.com/Map_Leads_Scraper 2.2.5.zip' />
      <main>
        <section
          aria-label="Download the Free Maps Scraper Chrome Extension"
          className="relative pb-28 pt-20 sm:py-32"
        >
          <Container>
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl mt-20">
                {t('h1')}
              </h1>
              <p className="text-xl text-gray-500">
                {t('h1sub')}
              </p>
            </div>
            <div className="mt-10">
                  <h2 className="text-2xl font-semibold text-gray-900 my-4">{t("Installation Guide")}</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ol className="list-decimal list-inside space-y-6 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center">{t("Step 1")}</h3>
                    <li>{t("desc1")}</li>
                    <li>{t("desc2")}</li>

                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">{t("Step 2")}</h3>
                    <li>{t("desc3")}</li>
                    <li>{t("desc4")}</li>
                    <li>{t("desc5")}</li>

                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">{t("Step 3")}</h3>
                    <li>{t("desc6")}</li>
                    <li>{t("desc7")}</li>
                  </ol>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 flex items-center">{t("Note")}</h3>
                <p>{t("Note1")}</p>
                <p>{t("Note2")}</p>

                <div className="text-center">
                  <FreeToTry text={t("Download now")+" (2.2.5)"} isDownload href='https://www.freemapsscraper.com/Map_Leads_Scraper 2.2.5.zip' />
                </div>

                <h2 className="text-2xl my-6 font-semibold text-gray-900">{t("Feedback")}</h2>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
                  <p className="text-gray-700">
                    {t("desc8")}
                  </p>
                  <p className="text-gray-700">{t("desc9")}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default DownloadPage
