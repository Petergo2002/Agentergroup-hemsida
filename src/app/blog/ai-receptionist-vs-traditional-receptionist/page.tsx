import type { Metadata } from 'next'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleBreadcrumbJsonLd, createArticleJsonLd, createArticleMetadata } from '@/lib/seo'
import BlogArticlePage from '../BlogArticlePage'

const post = blogPostsBySlug['ai-receptionist-vs-traditional-receptionist']
export const metadata: Metadata = createArticleMetadata(post)

function JsonLd() {
  const articleData = createArticleJsonLd(post)
  const breadcrumbData = createArticleBreadcrumbJsonLd(post)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  )
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <BlogArticlePage post={post} />
    </>
  )
}
