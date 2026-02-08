import type { Metadata } from 'next'

import HemsidorClient from './HemsidorClient'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Hemsida med AI Chat Frontdesk | Fler leads från dag 1',
  description:
    'Få en modern hemsida med inbyggd AI chat frontdesk. Maja svarar direkt, fångar leads och bokar möten automatiskt. Starta chatten och boka kostnadsfri konsultation.',
  canonicalPath: '/hemsidor/',
  keywords: [
    'hemsida med AI chat',
    'AI chat frontdesk hemsida',
    'hemsida med AI receptionist',
    'konverterande företagshemsida',
    'responsiv webbdesign Sverige',
    'SEO-optimerad hemsida',
    'webbplats med mötesbokning',
    'Agenter Group',
  ],
  ogImageAlt: 'Agenter Group - Hemsidor med AI-Integration',
})

export default function HemsidorPage() {
  return <HemsidorClient />
}
