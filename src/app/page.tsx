import type { Metadata } from 'next'

import HomePageClient from './HomePageClient'
import { createPageMetadata } from '@/lib/seo'

const title = 'AI Chat Frontdesk som bokar fler möten'
const description =
  'Maja AI Frontdesk svarar direkt, kvalificerar leads och bokar möten 24/7. Starta chatten idag och boka en kostnadsfri demo.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/',
  keywords: [
    'AI chat frontdesk',
    'AI receptionist företag',
    'mötesbokning AI',
    'leadkvalificering AI',
    'kundservice 24/7',
    'Agenter Group',
  ],
  ogImageAlt: 'AI Chat Frontdesk Maja från Agenter Group',
})

export default function HomePage() {
  return <HomePageClient />
}
