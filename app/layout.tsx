import type { Metadata, Viewport } from 'next'
import {
  Gilda_Display,
  Cormorant_Garamond,
  Great_Vibes,
  Amiri,
  Josefin_Sans,
} from 'next/font/google'
import './globals.css'

const cormorant = Gilda_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfair = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-amiri',
  display: 'swap',
})

const inter = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Unais & Nasma — August 9, 2026',
  description:
    'Together with their families, Unais Ibrahim C.K and Nasma Sherin V joyfully invite you to celebrate their wedding on Sunday, 9 August 2026.',
  openGraph: {
    title: 'Unais & Nasma — August 9, 2026',
    description:
      'Join us as we begin a new chapter of life together. Sunday, 9 August 2026.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unais & Nasma — August 9, 2026',
    description: 'Islamic wedding invitation — Sunday, 9 August 2026',
  },
  keywords: ['wedding', 'Islamic wedding', 'Nikah', 'invitation', 'Unais Nasma'],
  robots: 'noindex, nofollow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${greatVibes.variable} ${amiri.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="antialiased bg-ivory font-inter">{children}</body>
    </html>
  )
}
