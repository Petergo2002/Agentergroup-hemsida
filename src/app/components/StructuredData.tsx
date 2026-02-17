import { COMPANY_NAME, SITE_LANGUAGE, SITE_NAME, getSiteUrl } from '@/lib/seo'

export default function StructuredData() {
  const siteUrl = getSiteUrl()

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: 'AI chattbot och chat frontdesk för företag som svarar direkt, kvalificerar leads och bokar möten.',
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@agentergroup.com',
      availableLanguage: ['Swedish', 'English'],
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
      name: 'Starta chatten med Maja',
    },
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Chat Frontdesk Maja',
    serviceType: 'AI chat frontdesk och AI chattbot för företag',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
    availableLanguage: ['sv', 'en'],
    description:
      'AI chattbot som hanterar webbchat, kunddialog, leadkvalificering och mötesbokning 24/7 för svenska företag.',
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
