import type { Metadata } from 'next'

import HemsidorClient from './HemsidorClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_WEBSITE_KEYWORDS } from '@/lib/keyword-strategy'

export const metadata: Metadata = createPageMetadata({
  title: 'Hemsida med AI Chattbot för företag | Fler leads från dag 1',
  description:
    'Få en modern hemsida med inbyggd AI chattbot. Maja svarar direkt i chatten, fångar leads och bokar möten automatiskt.',
  canonicalPath: '/hemsidor/',
  keywords: MAJA_WEBSITE_KEYWORDS,
  ogImageAlt: 'Agenter Group - Hemsidor med AI-Integration',
})

export default function HemsidorPage() {
  return <HemsidorClient />
}
