import clsx from 'clsx'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
