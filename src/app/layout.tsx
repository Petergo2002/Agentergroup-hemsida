import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'
import StructuredData from './components/StructuredData'
import SmoothScrollWrapper from './components/SmoothScrollWrapper'
import MajaWidgetLoader from './components/MajaWidgetLoader'
import { getSiteUrl } from '@/lib/seo'

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
  title: {
    default: 'AI Chat Frontdesk för företag | Maja svarar 24/7 | Agenter Group',
    template: '%s | Agenter Group',
  },
  applicationName: 'Agenter Group',
  icons: {
    icon: brandFavicon,
    apple: brandFavicon,
  },
  description:
    'Maja är en AI chat frontdesk som svarar direkt, bokar möten och kvalificerar leads dygnet runt. Starta chatten och boka en kostnadsfri demo.',
  keywords: [
    'AI chat frontdesk',
    'AI frontdesk Sverige',
    'AI receptionist',
    'AI chattbot företag',
    'chatbot för företag',
    'automatiserad kundservice',
    'mötesbokning med AI',
    'leadkvalificering AI',
    'telefonhantering AI',
    'kundtjänst 24/7',
    'Maja AI',
    'Agenter Group',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI Chat Frontdesk för företag | Maja svarar 24/7',
    description:
      'Få fler bokade möten och färre missade affärer med Maja AI Frontdesk. Starta chatten och se hur snabbt ni kan komma igång.',
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
    title: 'AI Chat Frontdesk för företag | Maja svarar 24/7',
    description:
      'Maja AI Frontdesk svarar direkt, bokar möten och konverterar fler leads. Starta chatten och boka demo.',
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
