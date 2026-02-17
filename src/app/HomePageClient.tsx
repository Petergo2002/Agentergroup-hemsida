'use client'

import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroMaja from './components/HeroMaja'
import AppConnectShowcase from './components/AppConnectShowcase'
import KnowledgeBaseShowcase from './components/KnowledgeBaseShowcase'
import FeatureSection from './components/FeatureSection'
import IntegrationShowcase from './components/IntegrationShowcase'
import ScrollReveal from './components/ScrollReveal'
import UseCaseShowcase from './components/UseCaseShowcase'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'
import IntroLoader from './components/IntroLoader'
import useShouldReduceMotion from './components/useShouldReduceMotion'
import PricingTiers from './components/PricingTiers'

export default function HomePageClient() {
  const shouldReduceMotion = useShouldReduceMotion()
  const [introFinished, setIntroFinished] = useState(false)
  const startAnimation = shouldReduceMotion || introFinished

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00EA64] selection:text-black">
      {!shouldReduceMotion && <IntroLoader onComplete={() => setIntroFinished(true)} />}
      <NavBar />
      <main>
        <HeroMaja startAnimation={startAnimation} />
        <IntegrationShowcase />
        <ScrollReveal />
        <UseCaseShowcase />

        <FeatureSection
          title="Full Kontroll via Dashboard"
          subtitle="Överblick & Insikt"
          description="Koppla dina favoritverktyg med ett klick. Maja integrerar sömlöst med Hubspot, Salesforce, Pipedrive och över 500 andra system. Få en total överblick över alla inkommande samtal, leads och bokningar."
          features={["1-klick-integration", "Realtidsöversikt", "Export till CRM", "Smart Analytics"]}
          component={<AppConnectShowcase />}
        />

        <FeatureSection
          title="Bygg Din Egen Hjärna"
          subtitle="Konfiguration & RAG"
          description="Maja är en intelligent AI Frontdesk. Ladda upp era dokument, prislistor och FAQ:s. Maja lär sig allt om ert företag och svarar alltid korrekt."
          features={["RAG-system", "GDPR-säkrad", "Självlärande", "Live-uppdatering"]}
          component={<KnowledgeBaseShowcase />}
        />

        <PricingTiers />

        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}
