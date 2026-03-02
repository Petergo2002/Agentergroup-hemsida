import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleMetadata } from '@/lib/seo'

const post = blogPostsBySlug['energieffektiv-renovering-2025-komplett-guide']
const target = post.redirectTo ?? '/blog/ai-receptionist-2025-complete-guide/'

export const metadata: Metadata = {
  ...createArticleMetadata(post),
  alternates: { canonical: target },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LegacyRedirectPage() {
  permanentRedirect(target)
}
