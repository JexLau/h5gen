import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import mapplace from '@/images/mapplace.svg'
import mail from '@/images/mail.svg'
import phone from '@/images/phone.svg'
import social from '@/images/social.svg'
import domain from '@/images/domain.svg'
import review from '@/images/review.svg'

export function Hero() {
  return (
    <Container className="pb-16 pt-10 text-center lg:pt-20 mt-24">
      <h1 className="mx-auto max-w-4xl font-display text-4xl md:text-7xl font-medium tracking-tight text-slate-900 overflow-hidden">
        Easy to Use
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative text-4xl md:text-7xl "> Free Maps Scraper </span>
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        This scraping tool is perfect for businesses, providing a fast and efficient way to extract Google Maps data.
      </p>
      <p className="mx-auto mt-2 max-w-2xl text-lg tracking-tight text-slate-700">
        With its easy-to-use interface, you can easily extract phone numbers, email addresses, social media accounts, local data, and much more, all of which can be exported to a csv file for convenient management.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <button
          className="
          relative py-3 px-8 text-white font-bold rounded-full transition duration-150 ease-in-out 
          bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.blue.700)_0%,theme(colors.blue.300)_10%,theme(colors.blue.700)_20%)] 
          animate-[shimmer_2.5s_linear_infinite] 
          after:flex after:absolute after:bg-blue-700 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
          after:items-center after:justify-center
        "
          aria-label="Free To Try"
        >
          {/* <span><svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#4285F4" d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"/><path fill="#34A853" d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"/><path fill="#FBBC04" d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"/><path fill="#EA4335" d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"/></svg></span> */}
          <span className="opacity-0">Free To Try</span>
        </button>


        {/* <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button> */}
      </div>
      <div className="mt-28 lg:mt-32">
        <p className="font-display text-base text-slate-900">
          We have 5000+ happy customers and have extracted
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: '14M+ Domains', logo: domain },
              { name: '14M+ Places', logo: mapplace },
              { name: '6M+ Social Medias', logo: social },
            ],
            [
              { name: '2M+ Emails', logo: mail },
              { name: '1M+ Reviews', logo: review },
              { name: '10M+ Phone Numbers', logo: phone },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex items-center gap-x-2">
                    <Image src={company.logo} alt={company.name} unoptimized width={48} height={48} />
                    <span className='text-slate-500 text-lg'>{company.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
