import type { Metadata } from 'next'

import BlogIndexClient from './BlogIndexClient'
import { createPageMetadata } from '@/lib/seo'
import { MAJA_BLOG_KEYWORDS } from '@/lib/keyword-strategy'

const title = 'AI Front Desk Blog: Guides, Strategy, and Practical Playbooks'
const description =
  'Explore practical guides on AI front desk automation, customer support workflows, lead qualification, and meeting booking optimization.'

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  canonicalPath: '/blog/',
  keywords: MAJA_BLOG_KEYWORDS,
  ogImageAlt: 'Agenter Group AI front desk blog',
})

export default function BlogIndexPage() {
  return <BlogIndexClient />
}
