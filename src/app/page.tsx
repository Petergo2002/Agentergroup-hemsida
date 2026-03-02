import type { Metadata } from 'next'

import HomePageClient from './HomePageClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_HOME_KEYWORDS } from '@/lib/keyword-strategy'

const title = 'AI Front Desk for Businesses That Books More Meetings'
const description =
  'Maja is an AI front desk that answers instantly, qualifies leads, and books meetings 24/7. Start a chat and request a live demo.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/',
  keywords: MAJA_HOME_KEYWORDS,
  ogImageAlt: 'Maja AI Front Desk by Agenter Group',
})

export default function HomePage() {
  return <HomePageClient />
}
