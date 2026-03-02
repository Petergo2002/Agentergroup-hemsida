'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import useShouldReduceMotion from './useShouldReduceMotion'
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
            onClick={openMajaWidget}
            className="px-8 py-4 rounded-full bg-[#FF5D00] text-black font-bold text-lg hover:bg-[#00C455] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Start chat
            <ArrowRight size={20} />
          </button>
          <a
            href="#booking-cta"
            className="px-8 py-4 rounded-full glass-panel text-white font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center"
          >
            See next step
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={startAnimation ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 w-full max-w-6xl relative z-10"
        >
          <motion.div className="relative group transition-all duration-500 ease-out" whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }} style={{ willChange: 'transform' }}>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-[#FF5D00] opacity-20 rounded-full -z-10 ${shouldReduceMotion ? 'blur-[20px]' : 'blur-[40px] animate-pulse-slow'}`} style={{ willChange: 'opacity' }} />

            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/40 via-white/10 to-transparent shadow-2xl shadow-black/50">
              <div className="relative rounded-2xl bg-black/40 backdrop-blur-xl overflow-hidden border border-white/5">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80" />

                <Image
                  src="/agentergroupdashboardimages/Dashboard_overview.png"
                  alt="Agenter Group Dashboard"
                  width={1400}
                  height={900}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
                  className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-black/20 to-transparent via-20%" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
