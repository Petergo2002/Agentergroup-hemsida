import type { Metadata } from 'next'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleJsonLd, createArticleMetadata } from '@/lib/seo'
import BlogArticlePage from '../BlogArticlePage'

const post = blogPostsBySlug['ai-receptionist-vs-traditional-receptionist']
export const metadata: Metadata = createArticleMetadata(post)

function JsonLd() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createArticleJsonLd(post)) }} />
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <BlogArticlePage post={post} />
    </>
  )
}
