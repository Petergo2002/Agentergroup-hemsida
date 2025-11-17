'use client'

import { motion } from 'framer-motion'
import { Globe, Sparkles, Zap, ArrowRight } from 'lucide-react'

export default function WebsiteDevelopment() {
  return (
    <section id="hemsidor" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none" aria-hidden="true" />
      
      <div className="container relative px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
            <Sparkles className="w-4 h-4" />
            Tillägstjänst
          </span>
          <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              HEMSIDOR MED
            </span>
            <span className="text-brand-400">AI-INTEGRATION</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Vi skapar moderna, responsiva hemsidor som kan integreras sömlöst med vår AI-receptionist. Ge dina besökare en komplett upplevelse från webbplats till intelligent kundservice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Feature Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.08] border border-white/10 hover:border-brand-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Modern Webbdesign</h3>
              <p className="text-white/70 leading-relaxed">
                Skräddarsydda hemsidor med modern design, snabb laddningstid och perfekt mobilanpassning. Vi bygger med de senaste teknologierna för bästa prestanda.
              </p>
            </div>
          </motion.div>

          {/* Feature Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.08] border border-white/10 hover:border-brand-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">AI-Receptionist Integration</h3>
              <p className="text-white/70 leading-relaxed">
                Kombinera din nya hemsida med vår AI-receptionist för en komplett digital närvaro. Besökare kan direkt boka möten eller få svar på frågor via intelligent chat eller telefon.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-left">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Komplett Paketlösning</h4>
              <p className="text-white/70 text-sm sm:text-base">
                Få både hemsida och AI-receptionist i ett paket – perfekt för företag som vill ha en komplett digital lösning.
              </p>
            </div>
            <a
              href="/hemsidor"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors duration-200 group"
            >
              Läs mer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
