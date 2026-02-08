import { getSiteUrl } from '@/lib/seo'

export default function StructuredData() {
  const siteUrl = getSiteUrl()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agenter Group',
    description: 'AI chat frontdesk som svarar direkt, bokar möten och kvalificerar leads dygnet runt.',
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@agentergroup.com',
      availableLanguage: ['Swedish', 'English'],
    },
    sameAs: ['https://www.linkedin.com/company/agentergroup', 'https://www.instagram.com/agentergroup'],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI Chat Frontdesk Maja',
        description: 'AI-frontdesk som hanterar chat, mötesbokning och kunddialog 24/7 med snabb implementation.',
        provider: {
          '@type': 'Organization',
          name: 'Agenter Group',
        },
      },
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      target: `${siteUrl}/#booking-cta`,
      name: 'Starta chatten med Maja',
    },
  }

  return (
    <script
      id="ld-json-organization"
      suppressHydrationWarning
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
