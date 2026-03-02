import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'
import StructuredData from './components/StructuredData'
import SmoothScrollWrapper from './components/SmoothScrollWrapper'
import MajaWidgetLoader from './components/MajaWidgetLoader'
import { getSiteUrl } from '@/lib/seo'
import { MAJA_CORE_KEYWORDS } from '@/lib/keyword-strategy'

const brandFavicon = '/favicon/favicon-192x192.png'
const siteUrl = getSiteUrl()
const ogImage = '/logo/logo.png'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/site.webmanifest',
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  title: {
    default: 'AI Front Desk for Businesses | Maja by Agenter Group',
    template: '%s | Agenter Group',
  },
  applicationName: 'Agenter Group',
  icons: {
    icon: brandFavicon,
    apple: brandFavicon,
  },
  description:
    'Maja is an AI front desk for businesses that answers instantly, qualifies leads, and books meetings around the clock.',
  keywords: MAJA_CORE_KEYWORDS,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'AI Front Desk for Businesses | Maja by Agenter Group',
    description:
      'Capture more qualified leads and booked meetings with Maja, an AI front desk built for fast-moving teams.',
    url: '/',
    siteName: 'Agenter Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Maja AI Front Desk by Agenter Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Front Desk for Businesses | Maja by Agenter Group',
    description:
      'Maja answers instantly, qualifies leads, and books meetings for your team 24/7.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`} suppressHydrationWarning>
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <MajaWidgetLoader />
      </body>
    </html>
  )
}
