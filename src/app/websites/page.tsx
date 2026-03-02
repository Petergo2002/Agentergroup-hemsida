import type { Metadata } from 'next'

import HemsidorClient from './HemsidorClient'
import { createFaqPageJsonLd, createPageMetadata } from '@/lib/seo'
import { MAJA_WEBSITE_KEYWORDS } from '@/lib/keyword-strategy'

export const metadata: Metadata = createPageMetadata({
  title: 'Business Websites with AI Chatbot Integration',
  description:
    'Launch a high-converting business website with built-in AI chat. Maja engages visitors instantly, captures leads, and books meetings automatically.',
  canonicalPath: '/websites/',
  keywords: MAJA_WEBSITE_KEYWORDS,
  ogImageAlt: 'Agenter Group websites with AI front desk integration',
})

const websitesFaqJsonLd = createFaqPageJsonLd({
  pagePath: '/websites/',
  faqs: [
    {
      q: 'Do you build websites with AI chat built in?',
      a: 'Yes, we build business websites with Maja AI chat integrated for lead qualification and meeting booking.',
    },
    {
      q: 'How long does delivery take?',
      a: 'Most website and AI integration projects are delivered quickly with a clear launch roadmap.',
    },
    {
      q: 'Will the website be SEO ready?',
      a: 'Yes, our website builds are structured for SEO, crawlability, and conversion-focused messaging.',
    },
    {
      q: 'Can you connect the chatbot with our existing tools?',
      a: 'Yes, we can connect your setup to CRM and workflow systems used by your team.',
    },
  ],
})

export default function WebsitesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websitesFaqJsonLd) }} />
      <HemsidorClient />
    </>
  )
}
