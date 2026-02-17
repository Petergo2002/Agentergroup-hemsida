import type { MetadataRoute } from 'next'

import { indexableBlogPosts } from '@/content/blog-posts'
import { getSiteUrl } from '@/lib/seo'

const baseUrl = getSiteUrl().replace(/\/$/, '')
const latestBlogUpdate = indexableBlogPosts
  .map((post) => post.updated)
  .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]
const fallbackDate = new Date().toISOString().slice(0, 10)
const defaultLastModified = latestBlogUpdate ?? fallbackDate

const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0, lastModified: defaultLastModified },
  { path: '/blogg/', changeFrequency: 'weekly', priority: 0.9, lastModified: defaultLastModified },
  { path: '/hemsidor/', changeFrequency: 'monthly', priority: 0.8, lastModified: defaultLastModified },
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
