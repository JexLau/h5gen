import { Container } from "./Container";
import { MapIcon, ArrowDownLeftIcon,  ExclamationCircleIcon, ArrowDownIcon, FolderOpenIcon} from '@heroicons/react/24/outline';

export const HowToWorkSection = () => {
  return (
    <section
      id="howtowork"
      aria-label="How to Use Free Maps Scraper Chrome Extension"
      className="bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How to Use Free Maps Scraper Chrome Extension
          </h2>
          <div className="mt-12">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><MapIcon className="h-8 w-8 mr-2 text-blue-600" />Search on Google Maps</h3>
              <p className="mt-2 text-lg text-gray-600">
              {`Start by pinpointing the exact business locations you're interested in with our search feature. Type in relevant keywords, and our Free Maps Scraper will comb through Google Maps to find every potential lead. `}
              </p>
            </div>

            <div className="mb-10">
              
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><FolderOpenIcon className="h-8 w-8 mr-2 text-blue-600" />Open The Chrome Extension</h3>
              <p className="mt-2 text-lg text-gray-600">
              {`Navigate to the area of interest on Google Maps, then activate the freemapsscraper Chrome extension with a single click. It's that simple—no complex setup or configuration needed. Just a few seconds and you're on your way to compiling a robust database of leads.`}
              </p>
            </div>

            <div>
              
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><ArrowDownIcon className="h-8 w-8 mr-2 text-blue-600" />Export Your Results</h3>
              <p className="mt-2 text-lg text-gray-600">
                {`Once the scraping is complete, you can export the data into a CSV or XLS file for easy analysis and integration. With support for an unlimited number of exports, freemapsscraper ensures that you have continuous access to the latest data. The export includes essential information like phone numbers, email addresses, exact locations, and social media profiles—everything you need to connect with your targeted audience effectively.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
