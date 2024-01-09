import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Umami } from '@/components/Umami'

export const metadata: Metadata = {
  title: {
    template: '%s | freemapsscraper',
    default: 'Google Maps Scraper: Free & Easy to Use - Free Maps Scraper',
  },
  description:
    'Free Maps Scraper: an efficient, easy-to-use tool for extracting business leads from Google Maps. Quickly gather phone numbers, emails, and more. Free to try!',
  alternates: { canonical: "https://www.freemapsscraper.com/", }
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Record<string, string>
}) {
  const { locale } = params
  return (
    <html
      lang={locale}
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <Umami />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
