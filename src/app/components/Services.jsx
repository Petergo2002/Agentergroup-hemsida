'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, CalendarCheck, MessageSquare, PiggyBank, Calendar, Languages } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24/7 Tillgänglighet',
    description: 'Er kundservice är alltid öppen med vår AI-receptionist',
    detailedInfo: 'Vår AI-receptionist arbetar dygnet runt, 365 dagar om året utan pauser eller semester. Den hanterar inkommande samtal även utanför kontorstid, säkerställer att viktiga kunder aldrig möts av en telefonkö eller voicemail. Systemet kan hantera flera samtal samtidigt och ger konsekvent professionell service oavsett tid på dygnet.',
    features: ['Dygnet runt-service', 'Inga väntetider', 'Samtidiga samtal', 'Konsekvent kvalitet']
  },
  {
    icon: CalendarCheck,
    title: 'Smart Mötesbokning',
    description: 'Automatisk bokning som sparar tid för alla inblandade',
    detailedInfo: 'Avancerad bokningsfunktion som automatiskt hanterar hela mötesprocessen. Systemet kan skicka påminnelser via SMS och e-post, hantera ombokning och avbokning, samt uppdatera befintliga bokningar. Integrerar sömlöst med era kalendersystem för realtidssynkronisering.',
    features: ['Automatiska påminnelser', 'SMS & e-post notifikationer', 'Ombokning & avbokning', 'Kalendersynkronisering', 'Konflikthantering']
  },
  {
    icon: MessageSquare,
    title: 'Kundsupport',
    description: 'Snabba och effektiva svar på alla kundfrågor',
    detailedInfo: 'AI-receptionist tränad på er specifika kunskapsbas och företagsinformation. Kan svara på vanliga frågor, ge produktinformation, hantera reklamationer och eskalera komplexa ärenden till rätt person. Systemet lär sig kontinuerligt från interaktioner för att förbättra svaren.',
    features: ['Företagsspecifik kunskapsbas', 'Automatisk ärendehantering', 'Smart eskalering', 'Kontinuerlig inlärning', 'Personaliserade svar']
  },
  {
    icon: PiggyBank,
    title: 'Kostnadsbesparingar',
    description: 'Effektivisera er kundservice med smart automatisering',
    detailedInfo: 'Dramatisk minskning av personalkostnader genom att automatisera rutinuppgifter. Eliminerar behovet av nattpersonal och minskar belastningen på befintlig personal. ROI uppnås vanligtvis inom 3-6 månader genom minskade lönekostnader och ökad effektivitet.',
    features: ['Minskade personalkostnader', 'Eliminerad nattpersonal', 'Snabb ROI (3-6 månader)', 'Ökad produktivitet']
  },
  {
    icon: Calendar,
    title: 'Integrationer',
    description: 'Sömlös koppling till era befintliga system',
    detailedInfo: 'Omfattande integrationsmöjligheter med era befintliga affärssystem. Stöder Google Calendar, Microsoft Outlook, Gmail, samt populära CRM-system som Salesforce, HubSpot och Pipedrive. API-baserade anslutningar säkerställer realtidssynkronisering av data.',
    features: ['Google Calendar', 'Microsoft Outlook', 'Gmail integration', 'Salesforce CRM', 'HubSpot', 'Pipedrive', 'Custom API:er']
  },
  {
    icon: Languages,
    title: 'Flerspråkig',
    description: 'Stöd för flera språk för en global närvaro',
    detailedInfo: 'Naturlig språkförståelse på flera språk för att betjäna internationella kunder. Automatisk språkdetektering och svar på kundens föredragna språk. Kulturellt anpassade svar och lokala affärsseder.',
    features: ['Svenska', 'Engelska', 'Tyska', 'Franska', 'Spanska', 'Norska', 'Danska', 'Med mera...']
  }
]

export default function Services() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeFeature, setActiveFeature] = useState(null)

  // Close modal on scroll when open (mobile-friendly behavior)
  useEffect(() => {
    if (!isOpen) return
    const handleScroll = () => setIsOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])
  return (
    <section id="funktioner" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5" />
        {/* Orange glow accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-400/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-500/3 blur-3xl"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            VÅRA NYCKELFUNKTIONER
          </span>
          <motion.h2
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Kraftfulla funktioner för
            <span className="block text-brand-400">modern kundservice</span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Upptäck hur vår AI-receptionist revolutionerar er kundservice med intelligenta lösningar som arbetar dygnet runt.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.07] transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400 group-hover:bg-brand-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <button
                  type="button"
                  onClick={() => { setActiveFeature(feature); setIsOpen(true) }}
                  className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium"
                >
                  Läs mer
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-brand-500/10 to-brand-500/5 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-400/10 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Redo att komma igång?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Testa vår demo för att se hur vår AI-assistent låter.
            </p>
            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="#booking-cta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-lg backdrop-blur-sm transition-colors"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Overlay for Läs mer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/15 p-6 text-white shadow-xl max-h-[80vh] overflow-y-auto pointer-events-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <h4 className="text-2xl font-bold">{activeFeature?.title}</h4>
                <p className="mt-2 text-white/70 leading-relaxed">
                  {activeFeature?.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1 text-sm flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="mb-6">
              <p className="text-white/80 leading-relaxed text-sm">
                {activeFeature?.detailedInfo}
              </p>
            </div>

            <div className="mb-6">
              <h5 className="text-lg font-semibold text-white mb-3">Funktioner:</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeFeature?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0"></div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm"
              >
                Stäng
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
