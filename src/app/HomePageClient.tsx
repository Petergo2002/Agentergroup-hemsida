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
          title="Complete Control in One Dashboard"
          subtitle="Visibility & Insights"
          description="Connect your favorite tools in one click. Maja integrates with HubSpot, Salesforce, Pipedrive, and more so your team can see every lead, chat, and booking in real time."
          features={['1-click integrations', 'Real-time overview', 'CRM exports', 'Smart analytics']}
          component={<AppConnectShowcase />}
        />

        <FeatureSection
          title="Build Your AI Brain"
          subtitle="Configuration & RAG"
          description="Maja is a configurable AI front desk. Upload your docs, pricing sheets, and FAQs, and Maja will answer with brand-aligned, context-aware responses."
          features={['RAG system', 'GDPR-ready', 'Continuous learning', 'Live updates']}
          component={<KnowledgeBaseShowcase />}
        />

        <PricingTiers />

        <BookingCTA />
      </main>
      <Footer />
    </div>
  )
}
