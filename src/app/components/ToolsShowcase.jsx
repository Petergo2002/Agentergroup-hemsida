'use client'

import { motion } from 'framer-motion'
import CardSwap, { Card } from './ui/CardSwap'
import { LayoutDashboard, CalendarDays, Puzzle } from 'lucide-react'

export default function ToolsShowcase() {
  return (
    <section id="verktyg" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-glow opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="container relative px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-8 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-brand-500/10 text-brand-300 rounded-full">
              Verktyg i fokus
            </span>
            <h2 className="mt-4 sm:mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-none sm:leading-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                SE PLATTFORMENS
              </span>
              <span className="text-brand-400">NYCKELVERKTYG</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-md">
              Utforska dashboarden, kalendern och integrationerna – elegant presenterade i ett dynamiskt kortflöde.
            </p>
            <div className="mt-6 p-4 rounded-lg bg-brand-500/5 border border-brand-500/20">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                <span className="font-semibold text-brand-300">Flexibel integration:</span> Vi kopplar antingen till era befintliga system (CRM, kalender, etc.) om det är möjligt, eller så använder ni vårt färdiga system – ni väljer vad som passar er verksamhet bäst.
              </p>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 mt-4 sm:mt-6 lg:mt-0">
            <div className="h-[500px] sm:h-[550px] md:h-[600px] relative w-full">
          <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
            <Card className="scale-[1.15] sm:scale-105 lg:scale-110">
              <div className="w-full h-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.02] to-white/[0.06] border border-white/10 rounded-xl flex flex-col justify-between">
                <div>
                  <LayoutDashboard className="w-8 h-8 text-brand-400" />
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">Dashboard</h3>
                  <p className="mt-2 text-white/70">Översikt av samtal, KPI:er och prestanda i realtid.</p>
                </div>
                <div className="text-sm text-white/60">Insikter och rapporter</div>
              </div>
            </Card>
            <Card className="scale-[1.15] sm:scale-105 lg:scale-110">
              <div className="w-full h-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.02] to-white/[0.06] border border-white/10 rounded-xl flex flex-col justify-between">
                <div>
                  <CalendarDays className="w-8 h-8 text-brand-400" />
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">Kalendersystem</h3>
                  <p className="mt-2 text-white/70">Smart AI‑bokning, tillgänglighet och synk med era verktyg.</p>
                </div>
                <div className="text-sm text-white/60">Automatiserad schemaläggning</div>
              </div>
            </Card>
            <Card className="scale-[1.15] sm:scale-105 lg:scale-110">
              <div className="w-full h-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white/[0.02] to-white/[0.06] border border-white/10 rounded-xl flex flex-col justify-between">
                <div>
                  <Puzzle className="w-8 h-8 text-brand-400" />
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">Integrationer</h3>
                  <p className="mt-2 text-white/70">Koppla ihop CRM, kalender och fler system på ett smidigt sätt.</p>
                </div>
                <div className="text-sm text-white/60">5+ integrationer</div>
              </div>
            </Card>
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
