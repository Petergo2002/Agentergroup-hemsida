export type BlogPost = {
  slug: string
  title: string
  description: string
  excerpt: string
  category: string
  published: string
  updated: string
  readTimeMinutes: number
  ogAlt: string
  keywords: string[]
  indexable: boolean
  redirectTo?: string
}

const posts: BlogPost[] = [
  {
    slug: 'ai-receptionist-for-kliniker',
    title: 'AI-receptionist för kliniker: Maximera patienttid och minimera admin',
    description:
      'Driver du klinik? Se hur en AI chat frontdesk hanterar bokningar, ombokningar och frågor 24/7. Fokusera på patienter och boka en demo.',
    excerpt:
      'Driver du klinik? Lär dig hur en AI-receptionist kan avlasta teamet och öka tillgängligheten för dina patienter.',
    category: 'Klinik',
    published: '2025-01-24',
    updated: '2025-01-24',
    readTimeMinutes: 10,
    ogAlt: 'AI-receptionist för kliniker',
    keywords: [
      'AI receptionist klinik',
      'AI chat frontdesk vård',
      'telefonpassning klinik',
      'bokningssystem vård',
      'automatisk tidsbokning',
      'kundservice vård 24/7',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'telefonpassning-for-hantverkare',
    title: 'Telefonpassning för hantverkare: Missa aldrig ett jobb igen',
    description:
      'Är du hantverkare och missar samtal i fält? Se hur en AI chat frontdesk svarar direkt, fångar leads och bokar jobb åt dig.',
    excerpt:
      'Är du hantverkare? Lär dig varför en AI-receptionist är en bättre och mer kostnadseffektiv lösning än traditionell telefonpassning.',
    category: 'Hantverkare',
    published: '2025-01-23',
    updated: '2025-01-23',
    readTimeMinutes: 10,
    ogAlt: 'Telefonpassning för hantverkare med AI',
    keywords: [
      'telefonpassning hantverkare',
      'AI chat frontdesk hantverkare',
      'svarsservice hantverkare',
      'missade samtal byggföretag',
      'AI receptionist',
      'bokningssystem hantverkare',
      'Agenter Group',
      'telefonservice bygg',
    ],
    indexable: true,
  },
  {
    slug: 'hemsida-med-ai-integration',
    title: 'Hemsida med AI-integration: Framtidens kundservice',
    description:
      'Lär dig hur du bygger en hemsida med AI chat frontdesk som svarar direkt, fångar leads och bokar möten. Praktiska råd och tydlig plan.',
    excerpt:
      'Din hemsida är ditt digitala skyltfönster. Lär dig hur du förvandlar den till en säljande assistent med AI.',
    category: 'Trend',
    published: '2025-01-22',
    updated: '2025-01-22',
    readTimeMinutes: 7,
    ogAlt: 'Hemsida med AI chat frontdesk',
    keywords: [
      'AI integration hemsida',
      'AI chat frontdesk',
      'chattbot för företag',
      'hemsida med AI',
      'konvertering webbplats',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'motesbokning-24-7-guide-till-ai-driven-schemalaggning',
    title: 'Mötesbokning 24/7: Guide till AI-driven schemaläggning',
    description:
      'Guide till AI-driven mötesbokning 24/7. Lär dig hur en AI chat frontdesk fyller kalendern automatiskt och minskar manuellt arbete.',
    excerpt:
      'Låt kunderna boka möten när det passar dem. En guide till automatisk schemaläggning.',
    category: 'Guide',
    published: '2025-01-22',
    updated: '2025-01-22',
    readTimeMinutes: 8,
    ogAlt: 'Mötesbokning 24/7 med AI',
    keywords: [
      'mötesbokning AI',
      'AI chat frontdesk',
      'automatisk mötesbokning',
      'schemaläggning online',
      'kalendersynkronisering AI',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'sa-automatiserar-du-telefonhantering-med-ai-agenter',
    title: 'Så automatiserar du telefonhantering med AI-agenter',
    description:
      'Steg-för-steg guide till automatiserad telefonhantering med AI chat frontdesk. Från strategi till implementation, integration och resultat.',
    excerpt:
      'Steg för steg-guide: Från val av lösning till implementation och optimering.',
    category: 'Guide',
    published: '2025-01-22',
    updated: '2025-01-22',
    readTimeMinutes: 9,
    ogAlt: 'Automatisera telefonhantering med AI',
    keywords: [
      'automatisk telefonhantering',
      'AI chat frontdesk',
      'AI agenter',
      'telefonpassning',
      'AI receptionist företag',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'ai-receptionist-vs-traditionell-receptionist',
    title: 'AI-receptionist vs Traditionell receptionist: Komplett guide 2025',
    description:
      'Jämför AI chat frontdesk mot traditionell receptionist: kostnad, tillgänglighet och kundupplevelse. Få beslutsunderlag och boka en demo.',
    excerpt:
      'Vi jämför kostnader, tillgänglighet och funktioner för att hjälpa dig välja rätt.',
    category: 'Jämförelse',
    published: '2025-01-22',
    updated: '2025-01-22',
    readTimeMinutes: 8,
    ogAlt: 'AI-receptionist vs traditionell receptionist',
    keywords: [
      'AI-receptionist',
      'AI chat frontdesk',
      'virtuell receptionist',
      'receptionstjänst kostnad',
      'automatisk telefonpassning',
      'kostnadsjämförelse receptionist',
      'Agenter Group',
      'kundservice 2025',
    ],
    indexable: true,
  },
  {
    slug: 'varfor-foretag-missar-samtal',
    title: 'Varför Företag Missar 34% av Jobbmöjligheter – och Hur AI Kan Hjälpa',
    description:
      'Varför tappar företag affärer på missade samtal? Se hur en AI chat frontdesk svarar direkt, kvalificerar leads och hjälper dig boka fler möten.',
    excerpt:
      'Upptäck varför missade samtal kostar företag enorma summor och hur AI-receptionister kan lösa problemet.',
    category: 'Insikt',
    published: '2025-01-21',
    updated: '2025-01-21',
    readTimeMinutes: 6,
    ogAlt: 'Varför företag missar samtal och hur AI hjälper',
    keywords: [
      'missa aldrig ett samtal',
      'AI chat frontdesk',
      'AI receptionist',
      'missade samtal företag',
      'automatisk telefonhantering',
      'AI agenter',
      'kundservice 24/7',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'ai-receptionist-2025-komplett-guide',
    title: 'AI‑receptionist 2025 – komplett guide',
    description:
      'Komplett guide till AI chat frontdesk 2025: implementation, CRM/kalender-kopplingar, GDPR och KPI:er. Läs guiden och starta chatten med Maja.',
    excerpt:
      'Allt du behöver för att komma igång: implementation, systemkopplingar, säkerhet, GDPR och hur du mäter effekt.',
    category: 'Guide',
    published: '2025-01-03',
    updated: '2025-01-03',
    readTimeMinutes: 12,
    ogAlt: 'AI-receptionist 2025 komplett guide',
    keywords: [
      'AI receptionist guide 2025',
      'AI chat frontdesk',
      'AI kundservice',
      'mötesbokning AI',
      'GDPR AI',
      'Agenter Group',
    ],
    indexable: true,
  },
  {
    slug: 'energieffektiv-renovering-2025-komplett-guide',
    title: 'AI‑receptionist 2025 – komplett guide',
    description:
      'Sidan är flyttad till vår guide om AI chat frontdesk. Läs hur Maja hjälper företag att svara snabbare, boka fler möten och öka konverteringen.',
    excerpt: '',
    category: 'Redirect',
    published: '2025-01-03',
    updated: '2025-01-03',
    readTimeMinutes: 0,
    ogAlt: 'AI-receptionist 2025 komplett guide',
    keywords: ['AI chat frontdesk', 'AI receptionist', 'kundservice 24/7', 'Agenter Group'],
    indexable: false,
    redirectTo: '/blogg/ai-receptionist-2025-komplett-guide/',
  },
]

export const blogPosts = posts

export const blogPostsBySlug = Object.fromEntries(
  posts.map((post) => [post.slug, post])
) as Record<string, BlogPost>

export const indexableBlogPosts = posts.filter((post) => post.indexable)
