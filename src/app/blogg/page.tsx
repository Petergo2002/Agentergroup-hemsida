import type { Metadata } from 'next'

import BlogIndexClient from './BlogIndexClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_BLOG_KEYWORDS } from '@/lib/keyword-strategy'

const title = 'Blogg om AI Chattbot för företag, chat support och leadflöden'
const description =
  'Praktiska guider om AI chattbot för företag, chat support 24/7, leadkvalificering i chatt och smart mötesbokning.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/blogg/',
  keywords: MAJA_BLOG_KEYWORDS,
  ogImageAlt: 'Agenter Group blogg om AI Frontdesk',
})

export default function BlogIndexPage() {
  return <BlogIndexClient />
}
