import type { MetadataRoute } from 'next'

import { indexableBlogPosts } from '@/content/blog-posts'
import { getSiteUrl } from '@/lib/seo'

const baseUrl = getSiteUrl().replace(/\/$/, '')
const buildDate = new Date().toISOString()

const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0, lastModified: buildDate },
  { path: '/blogg/', changeFrequency: 'weekly', priority: 0.8, lastModified: buildDate },
  { path: '/hemsidor/', changeFrequency: 'monthly', priority: 0.8, lastModified: buildDate },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
      priority: route.priority,
    })),
    ...indexableBlogPosts.map((post) => ({
      url: `${baseUrl}/blogg/${post.slug}/`,
      lastModified: post.updated,
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'],
      priority: 0.7,
    })),
  ]
}
