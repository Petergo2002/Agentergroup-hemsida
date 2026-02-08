import type { Metadata } from 'next'

import BlogIndexClient from './BlogIndexClient'
import { createPageMetadata } from '@/lib/seo'

const title = 'Blogg om AI Chat Frontdesk, mötesbokning och kundservice'
const description =
  'Praktiska guider om AI chat frontdesk, kundservice 24/7, leadkvalificering och smart mötesbokning. Läs, inspireras och starta chatten med Maja.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/blogg/',
  keywords: [
    'AI chat frontdesk blogg',
    'AI kundservice guider',
    'mötesbokning AI',
    'leadkvalificering',
    'AI receptionist tips',
    'Agenter Group blogg',
  ],
  ogImageAlt: 'Agenter Group blogg om AI Frontdesk',
})

export default function BlogIndexPage() {
  return <BlogIndexClient />
}
