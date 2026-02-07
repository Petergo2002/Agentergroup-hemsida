import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.agentergroup.se'
const baseUrl = siteUrl.replace(/\/$/, '')

const routes = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/blogg/', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/hemsidor/', changeFrequency: 'monthly', priority: 0.8 },
]

const blogSlugs = [
  'ai-receptionist-2025-komplett-guide',
  'ai-receptionist-vs-traditionell-receptionist',
  'energieffektiv-renovering-2025-komplett-guide',
  'hemsida-med-ai-integration',
  'motesbokning-24-7-guide-till-ai-driven-schemalaggning',
  'sa-automatiserar-du-telefonhantering-med-ai-agenter',
  'varfor-foretag-missar-samtal',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
      priority: route.priority,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blogg/${slug}/`,
      lastModified,
      changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'],
      priority: 0.7,
    })),
  ]
}
