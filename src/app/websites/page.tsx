import type { Metadata } from 'next'

import HemsidorClient from './HemsidorClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_WEBSITE_KEYWORDS } from '@/lib/keyword-strategy'

export const metadata: Metadata = createPageMetadata({
  title: 'Business Websites with AI Chatbot Integration',
  description:
    'Launch a high-converting business website with built-in AI chat. Maja engages visitors instantly, captures leads, and books meetings automatically.',
  canonicalPath: '/websites/',
  keywords: MAJA_WEBSITE_KEYWORDS,
  ogImageAlt: 'Agenter Group websites with AI front desk integration',
})

export default function WebsitesPage() {
  return <HemsidorClient />
}
