import { COMPANY_NAME, SITE_LANGUAGE, SITE_NAME, getSiteUrl } from '@/lib/seo'

export default function StructuredData() {
  const siteUrl = getSiteUrl()

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: 'AI front desk software that responds instantly, qualifies leads, and books meetings for businesses.',
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@agentergroup.com',
      availableLanguage: ['English'],
    },
    sameAs: ['https://www.linkedin.com/company/agentergroup', 'https://www.instagram.com/agentergroup'],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    inLanguage: SITE_LANGUAGE,
    publisher: {
      '@type': 'Organization',
      name: COMPANY_NAME,
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      target: `${siteUrl}/#booking-cta`,
      name: 'Start a chat with Maja',
    },
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Maja AI Front Desk',
    serviceType: 'AI front desk and AI chatbot for businesses',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    availableLanguage: ['en'],
    description:
      'AI chatbot for website conversations, customer support, lead qualification, and automated meeting booking 24/7.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `${siteUrl}/#booking-cta`,
    },
  }

  return (
    <>
      <script
        id="ld-json-organization"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        id="ld-json-website"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        id="ld-json-service"
        suppressHydrationWarning
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
    </>
  )
}
