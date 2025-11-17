import type { Metadata } from 'next'
import HemsidorClient from './HemsidorClient'

export const metadata: Metadata = {
  title: 'Hemsidor med AI-Integration | Moderna Webbplatser – Agenter Group',
  description:
    'Professionella hemsidor med sömlös AI-receptionist integration. Modern design, SEO-optimering och snabb leverans på 1 vecka. Komplett digital närvaro för ditt företag.',
  keywords: [
    'hemsida med AI',
    'AI-integration hemsida',
    'modern webbdesign Sverige',
    'hemsida AI-receptionist',
    'professionell hemsida',
    'webbplats med AI',
    'hemsida snabb leverans',
    'SEO-optimerad hemsida',
    'responsiv webbdesign',
    'AI kundservice hemsida',
    'webbplats mötesbokning',
    'digital närvaro företag',
    'hemsida paketlösning',
    'Agenter Group hemsidor'
  ],
  alternates: { canonical: '/hemsidor' },
  openGraph: {
    title: 'Hemsidor med AI-Integration | Moderna Webbplatser – Agenter Group',
    description:
      'Professionella hemsidor med sömlös AI-receptionist integration. Modern design, SEO-optimering och snabb leverans på 1 vecka.',
    url: '/hemsidor',
    type: 'website',
    images: [
      {
        url: '/logo/Purple and Orange Modern Letter A Initial Logo copy.png',
        width: 1200,
        height: 630,
        alt: 'Agenter Group - Hemsidor med AI-Integration'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hemsidor med AI-Integration | Moderna Webbplatser',
    description:
      'Professionella hemsidor med sömlös AI-receptionist integration. Modern design och snabb leverans.',
    images: ['/logo/Purple and Orange Modern Letter A Initial Logo copy.png']
  }
}

export default function HemsidorPage() {
  return <HemsidorClient />
}
