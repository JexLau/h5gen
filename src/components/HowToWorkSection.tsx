import { Container } from "./Container";
import { MapIcon, ArrowDownIcon, FolderOpenIcon} from '@heroicons/react/24/outline';
import { FreeToTry } from "./DownloadBtn";
import { useTranslations } from "next-intl";

export const HowToWorkSection = () => {
  const t = useTranslations("HowToWorkSection")
  // const ct = useTranslations("Common")
  // console.log('ct', ct)
  return (
    <section
      id="howtowork"
      aria-label={t("How to Use Free Maps Scraper Chrome Extension")}
      className="bg-white py-20 sm:py-24 relative"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {t("How to Use Free Maps Scraper Chrome Extension")}
          </h2>
          <div className="mt-12">
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><MapIcon className="h-8 w-8 mr-2 text-blue-600" />
              {t("Search on Google Maps")}
              </h3>
              <p className="mt-2 text-lg text-gray-600">
              {t("Start by pinpointing the exact business locations")}
              </p>
            </div>

            <div className="mb-10">
              
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><FolderOpenIcon className="h-8 w-8 mr-2 text-blue-600" />{t("Open The Chrome Extension")}</h3>
              <p className="mt-2 text-lg text-gray-600">
              {t("Navigate to the area of interest on Google Maps")}
              </p>
            </div>

            <div>
              
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center"><ArrowDownIcon className="h-8 w-8 mr-2 text-blue-600" />{t("Export Your Results")}</h3>
              <p className="mt-2 text-lg text-gray-600">
                {t("Once the scraping is complete")}
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <FreeToTry  />
      </div>
    </section>
  );
}
