import type { Metadata } from 'next'
import type { BlogPost } from '@/content/blog-posts'

export const SITE_NAME = 'Agenter Group'
export const COMPANY_NAME = 'Agenter Group AB'
export const DEFAULT_SITE_URL = 'https://www.agentergroup.com'
export const DEFAULT_OG_IMAGE = '/logo/logo.png'
export const SITE_LOCALE = 'en_US'
export const SITE_LANGUAGE = 'en-US'

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (raw) {
    return raw.replace(/\/$/, '')
  }

  return DEFAULT_SITE_URL
}

function normalizeCanonicalPath(path: string): string {
  if (!path.startsWith('/')) {
    return `/${path}`
  }

  return path
}

export function toAbsoluteUrl(path: string): string {
  return `${getSiteUrl()}${normalizeCanonicalPath(path)}`
}

export function createPageMetadata(input: {
  title: string
  description: string
  canonicalPath: string
  keywords?: string[]
  ogImageAlt?: string
}): Metadata {
  const canonical = normalizeCanonicalPath(input.canonicalPath)
  const imageAlt = input.ogImageAlt ?? `${input.title} | ${SITE_NAME}`

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    authors: [{ name: COMPANY_NAME }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    alternates: {
      canonical,
      languages: {
        [SITE_LANGUAGE]: canonical,
      },
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: 'website',
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
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
  const canonical = `/blog/${post.slug}/`

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: COMPANY_NAME }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    category: post.category,
    alternates: {
      canonical,
      languages: {
        [SITE_LANGUAGE]: canonical,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonical,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      publishedTime: post.published,
      modifiedTime: post.updated,
      tags: post.keywords,
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
  const canonical = `/blog/${post.slug}/`
  const canonicalUrl = toAbsoluteUrl(canonical)
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: canonicalUrl,
    datePublished: post.published,
    dateModified: post.updated,
    inLanguage: SITE_LANGUAGE,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    isAccessibleForFree: true,
    image: [`${siteUrl}${DEFAULT_OG_IMAGE}`],
    author: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}${DEFAULT_OG_IMAGE}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_NAME} Blog`,
      url: `${siteUrl}/blog/`,
    },
    about: [
      { '@type': 'Thing', name: 'AI front desk' },
      { '@type': 'Thing', name: 'AI chat for businesses' },
      { '@type': 'Thing', name: 'Lead qualification in chat' },
      { '@type': 'Thing', name: 'Automated meeting booking' },
    ],
  }
}
