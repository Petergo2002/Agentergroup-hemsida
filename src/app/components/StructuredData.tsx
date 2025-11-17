export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Agenter Group',
    description: 'AI-receptionist som aldrig missar ett samtal. Intelligenta AI-agenter för automatisk telefonhantering och mötesbokning 24/7.',
    url: 'https://www.agentergroup.se',
    logo: 'https://www.agentergroup.se/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Swedish', 'English'],
    },
    sameAs: [
      // Add your social media links here
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

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad är en AI-receptionist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En AI-receptionist är en intelligent virtuell assistent som hanterar telefonsamtal, bokar möten och svarar på kundförfrågningar automatiskt, 24 timmar om dygnet, 7 dagar i veckan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hur kan AI-receptionisten hjälpa mitt företag?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI-receptionisten säkerställer att ni aldrig missar ett viktigt samtal, automatiserar mötesbokning, hanterar kundservice dygnet runt och frigör tid för er personal att fokusera på kärnverksamheten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan AI-receptionisten integreras med våra befintliga system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, vi erbjuder flexibel integration. Vi kan antingen koppla AI-receptionisten till era befintliga system (CRM, kalender, etc.) eller så kan ni använda vårt färdiga system.',
        },
      },
    ],
  }

  return (
    <>
      <script
        id="ld-json-organization"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        id="ld-json-faq"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  )
}
