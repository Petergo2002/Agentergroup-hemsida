import type { Metadata } from 'next'

import HomePageClient from './HomePageClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_HOME_KEYWORDS } from '@/lib/keyword-strategy'

const title = 'AI Chat för företag som bokar fler möten'
const description =
  'Maja är en AI chattbot för företag som svarar direkt, kvalificerar leads och bokar möten 24/7. Starta chatten och boka en kostnadsfri demo.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/',
  keywords: MAJA_HOME_KEYWORDS,
  ogImageAlt: 'AI Chat Frontdesk Maja från Agenter Group',
})

export default function HomePage() {
  return <HomePageClient />
}
