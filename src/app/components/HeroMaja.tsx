'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import useShouldReduceMotion from './useShouldReduceMotion'
import { trackSeoEvent } from '@/lib/analytics'
import { openMajaWidget } from '@/lib/maja-widget'

interface HeroMajaProps {
  startAnimation: boolean
}

export default function HeroMaja({ startAnimation }: HeroMajaProps) {
  const shouldReduceMotion = useShouldReduceMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-44">
      <div className={`absolute inset-0 bg-glow-green pointer-events-none ${shouldReduceMotion ? 'opacity-20' : 'opacity-30'}`} style={{ willChange: 'opacity' }} />

      <div className="container relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF5D00] animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-white/80">AI Front Desk MAJA</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          The Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Front Desk is</span>{' '}
          <span className="text-[#FF5D00]">AI</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed text-balance"
        >
          Maja handles customer chats, qualifies leads, and syncs with your CRM.
          <span className="block mt-2 font-medium">No more missed opportunities.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() =>
              openMajaWidget({
                sourcePage: 'home',
                sourceSection: 'hero',
                ctaType: 'button',
                keywordCluster: 'ai front desk for businesses',
              })
            }
            className="px-8 py-4 rounded-full bg-[#FF5D00] text-black font-bold text-lg hover:bg-[#00C455] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Start chat
            <ArrowRight size={20} />
          </button>
          <a
            href="#booking-cta"
            onClick={() =>
              trackSeoEvent('internal_cta_click', {
                source_page: 'home',
                source_section: 'hero',
                cta_type: 'link',
                keyword_cluster: 'ai front desk for businesses',
              })
            }
            className="px-8 py-4 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center"
          >
            See next step
          </a>
        </motion.div>


      </div>
    </section>
  )
}
