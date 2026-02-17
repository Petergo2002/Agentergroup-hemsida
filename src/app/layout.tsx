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
    default: 'AI Chat för företag | Maja AI Chat Frontdesk | Agenter Group',
    template: '%s | Agenter Group',
  },
  applicationName: 'Agenter Group',
  icons: {
    icon: brandFavicon,
    apple: brandFavicon,
  },
  description:
    'Maja är en AI chattbot och chat frontdesk för företag som svarar direkt, kvalificerar leads och bokar möten dygnet runt.',
  keywords: MAJA_CORE_KEYWORDS,
  alternates: {
    canonical: '/',
    languages: {
      'sv-SE': '/',
    },
  },
  openGraph: {
    title: 'AI Chat för företag | Maja AI Chat Frontdesk',
    description:
      'Få fler bokade möten med Maja, en AI chattbot för företag som hanterar kunddialog, kvalificerar leads och svarar 24/7.',
    url: '/',
    siteName: 'Agenter Group',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'Agenter Group AI Frontdesk Maja',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chat för företag | Maja AI Chat Frontdesk',
    description:
      'Maja AI chattbot svarar direkt, bokar möten och kvalificerar fler leads i chatten.',
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
    <html lang="sv" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
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
