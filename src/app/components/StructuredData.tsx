export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agenter Group',
    description: 'AI-receptionist som aldrig missar ett samtal. Intelligenta AI-agenter för automatisk telefonhantering och mötesbokning 24/7.',
    url: 'https://www.agentergroup.se',
    logo: 'https://www.agentergroup.se/logo/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Swedish', 'English'],
    },
    sameAs: [
      "https://www.linkedin.com/company/agentergroup",
      "https://www.instagram.com/agentergroup",
    ],
    offers: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'AI-Receptionist',
        description: 'Intelligent AI-receptionist som hanterar samtal, bokar möten och svarar på frågor 24/7',
        provider: {
          '@type': 'Organization',
          name: 'Agenter Group',
        },
      },
    },
  }

  return (
    <>
      <script
        id="ld-json-organization"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}
