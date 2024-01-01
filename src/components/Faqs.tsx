import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      "question": "How can the tool obtain email addresses if they are not visible on Google Maps?",
      "answer": "Our Google Maps scraper extends its search beyond Maps by visiting each business's official website found through Google Maps. It searches for contact pages or directly listed email addresses, thereby providing you with email details not typically found on Google Maps itself."
    },
    {
      "question": "Is the Google Maps extractor compatible with Mac or is it Windows exclusive?",
      "answer": "Our browser-based Google Maps extractor is versatile and runs on any operating system that supports Chrome browser, including but not limited to Windows, macOS, and Linux. Simply install it as an extension to your Chrome browser."
    },
  ],
  [
    {
      "question": "Why am I not seeing all results when I search across large regions?",
      "answer": "To optimize search efficiency and accuracy, it's recommended to focus on smaller areas, particularly for extensive regions. Instead of searching for 'California restaurants', narrow it down to 'Los Angeles restaurants' or specific ZIP codes to get more precise results."
    }, {
      "question": "Can this tool extract data from maps other than Google Maps?",
      "answer": "While our tool is currently specialized for Google Maps data extraction, we acknowledge the diverse needs of our users. Should you require scraping services for other map sources, we are equipped to develop customized solutions upon request."
    },],
  [

    {
      "question": "What distinguishes the free version from the paid version of the tool?",
      "answer": "The free version of our tool provides a glimpse into the efficient scraping capabilities, allowing up to 15 listings per search. On the other hand, the paid version offers unlimited records, advanced functionalities, and supports automatic batch extraction, providing a comprehensive and streamlined experience."
    },
    {
      "question": "How can I cancel my subscription?",
      "answer": "To cancel your subscription, simply go to the settings menu within the extractor app and select 'Manage Subscription'. If you prefer, you can also reach out to our customer support via email with a request to cancel your subscription, and we'll assist you promptly."
    }]
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Have a different question about Map Lead Scraper and can’t find the answer you’re looking for? Reach out to our support team by <a href="mailto:freemapsscraper@gmail.com" className="text-indigo-600"> sending us an email</a> and we’ll get back to you as soon as we can.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
