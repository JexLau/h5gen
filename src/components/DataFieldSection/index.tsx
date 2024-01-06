import { Container } from "../Container";
import { DataFieldClient } from "./DataFieldClient";

export const DataFieldSection = () => {
  const dataFields = {
    "Name": "Name of the place on Google Maps, this is usually the canonicalized business name.",
    "Phone": "The place's phone number in its local format.",
    "Email address": "The place's email scraped from the internet.",
    "Social Medias": "The social media profile URLs found from the internet (Facebook, Instagram, LinkedIn, Youtube, Yelp, Twitter, and so on).",
    "Website": "The authoritative website for this place, such as a business' homepage.",
    "Domain": "The web domain associated with the place.",
    "Fulladdress": "The complete, readable address of the place.",
    "Street": "The specific street where the place is located.",
    "Municipality": "The governing municipality where the place is situated.",
    "Categories": "The categories associated with the place on Google My Business.",
    "Claimed": "Indicates if the Google My Business profile has been claimed, allowing verification and editing of business information on Google.",
    "Price": "The price range of the place, rated from $ (lowest) to $$$$ (highest).",
    "Plus code": "Plus codes serve as alternative addressing in areas lacking traditional addresses, such as unnumbered buildings or unnamed streets.",
    "Review Count": "The cumulative count of reviews for the place.",
    "Reviews": "User-written reviews about the place.",
    "Photos": "User-uploaded photos related to the place.",
    "Average Rating": "The overall rating of the place, ranging from 1.0 to 5.0, determined by user reviews.",
    "Review URL": "The dedicated URL where customers can leave reviews for the place.",
    "Google Maps URL": "The official Google Maps link for the place.",
    "Google Knowledge URL": "The URL for the Google Knowledge Panel associated with the place, which provides information when searching for entities in the Google Knowledge Graph.",
    "Latitude": "The geographic latitude of the place, expressed in decimal degrees.",
    "Longitude": "The geographic longitude of the place, expressed in decimal degrees.",
    "Opening hours": "The specified hours during which the place is open to the public.",
    "Featured image": "A highlighted photo representing the place or business.",
    "Cid": "A unique identifier assigned by Google to a specific business entity.",
    "Place Id": "A unique textual identifier that distinguishes a specific place.",
    "Kgmid": "An identifier used specifically for the Google Knowledge Graph API."
  }

  return <section
    id="datafields"
    aria-label="What our customers are saying"
    className="bg-slate-50 py-20 sm:py-20"
  >
    <Container>
      <div className="mx-auto max-w-2xl md:text-center">
        <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          What Data Can You Scrape Using Free Maps Scraper
        </h2>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          The following table lists all supported data fields.
        </p>
      </div>
      <DataFieldClient dataFields={dataFields} />
    </Container>
  </section>
}


