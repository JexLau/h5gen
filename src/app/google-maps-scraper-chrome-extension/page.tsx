import { Container } from '@/components/Container'
import { FreeToTry } from '@/components/DownloadBtn'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Download the Free Maps Scraper Chrome Extension',
  description:
    'Step into the world of effortless data extraction with the Free Maps Scraper, a Chrome extension that streamlines your lead generation process. Download our free and easy-to-use tool today and start harvesting valuable data from Google Maps.',
  alternates: { canonical: "https://www.freemapsscraper.com/google-maps-scraper-chrome-extension", }
}

const DownloadPage = () => {
  return (
    <>
      <Header downloadText={"Download now"} />
      <main>
        <section
          aria-label="Download the Free Maps Scraper Chrome Extension"
          className="relative pb-28 pt-20 sm:py-32"
        >
          <Container>
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl mt-20">
                Download Free Maps Scraper Chrome Extension
              </h1>
              <p className="text-xl text-gray-500">
                Free Maps Scraper is a chrome browser extension that helps users to scrape and extract information from Google Maps. Please follow the instructions below to install and get started.
              </p>
            </div>
            <div className="mt-10">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-900 my-4">Installation Guide</h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>{`Click the "Download Extension" button to initiate the installation. You'll be redirected to the Chrome Web Store. Or Search "freemapsscraper" in Chrome Web Store`}</li>
                    <li>Select “Add to Chrome” to begin the process.</li>
                    <li>{`Click on the Free Maps Scraper icon and visit the 'Options' to customize your scraping settings.`}</li>
                    <li>Head over to Google Maps in your browser and perform a search.</li>
                    <li>Activate Free Maps Scraper by clicking its icon when your search results are loaded.</li>
                    <li>{`Export your data by clicking the 'Export' button after the scraper finishes.`}</li>
                  </ol>
                </div>

                <div className="text-center">
                  <FreeToTry text='Download now' />
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Support and Feedback</h2>
                  <p className="text-gray-700">
                    {`Your experience is important to us. If you have any issues or suggestions, our support team is eager to assist. Contact us through our support page, and we'll help you make the most out of Free Maps Scraper.`}
                  </p>
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
