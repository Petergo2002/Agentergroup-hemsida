import type { Metadata } from 'next'

import HomePageClient from './HomePageClient'
import { createFaqPageJsonLd, createPageMetadata } from '@/lib/seo'
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

const homeFaqJsonLd = createFaqPageJsonLd({
  pagePath: '/',
  faqs: [
    {
      q: 'What does Maja AI Front Desk do?',
      a: 'Maja answers customer chats instantly, qualifies inbound leads, and helps book meetings for your team.',
    },
    {
      q: 'Can Maja integrate with CRM tools?',
      a: 'Yes, Maja is built to connect with CRM workflows so your team can track lead conversations and handoffs.',
    },
    {
      q: 'Is Maja suitable for US small businesses?',
      a: 'Yes, Maja is designed for service businesses that need faster response times and more booked demos.',
    },
    {
      q: 'How quickly can we go live?',
      a: 'Most teams can launch quickly once knowledge sources and booking workflows are connected.',
    },
  ],
})

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <HomePageClient />
    </>
  )
}
