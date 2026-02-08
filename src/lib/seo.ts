import type { Metadata } from 'next'
import type { BlogPost } from '@/content/blog-posts'

export const SITE_NAME = 'Agenter Group'
export const DEFAULT_SITE_URL = 'https://www.agentergroup.se'
export const DEFAULT_OG_IMAGE = '/logo/logo.png'

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (raw) {
    return raw.replace(/\/$/, '')
  }

  if (process.env.NODE_ENV === 'production') {
    return DEFAULT_SITE_URL
  }

  return 'http://localhost:3000'
}

export function createPageMetadata(input: {
  title: string
  description: string
  canonicalPath: string
  keywords?: string[]
  ogImageAlt?: string
}): Metadata {
  const imageAlt = input.ogImageAlt ?? `${input.title} | ${SITE_NAME}`

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: { canonical: input.canonicalPath },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.canonicalPath,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'sv_SE',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export function createArticleMetadata(post: BlogPost): Metadata {
  const canonical = `/blogg/${post.slug}/`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonical,
      siteName: SITE_NAME,
      locale: 'sv_SE',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: post.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}

export function createArticleJsonLd(post: BlogPost) {
  const canonical = `/blogg/${post.slug}/`
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    image: [`${siteUrl}${DEFAULT_OG_IMAGE}`],
    author: {
      '@type': 'Organization',
      name: 'Agenter Group AB',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agenter Group AB',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}${DEFAULT_OG_IMAGE}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${canonical}`,
    },
  }
}
