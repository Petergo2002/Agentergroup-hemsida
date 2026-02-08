'use client'
import { motion } from 'framer-motion'
import Threads from './Threads'

export default function Hero() {
  
  const handleDemoClick = () => {
    const element = document.querySelector('#booking-cta')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Threads
          amplitude={1.15}
          distance={0.45}
          enableMouseInteraction={true}
          color={[0.992, 0.427, 0.294]}
          className="h-full w-full"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/70 via-black/40 to-[#FD6D4B]/20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-20 container min-h-[calc(100vh-80px)] flex flex-col justify-center px-4 text-white pb-20 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center max-w-3xl mx-auto pt-36 sm:pt-40 md:pt-32"
          >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Aldrig missa ett samtal
          </motion.span>
          
          <motion.h1 
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold leading-tight sm:leading-[1.04] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Möt er nya
            </span>
            <span className="block text-brand-400 mt-2">AI‑receptionist</span>
          </motion.h1>
          
          
          <motion.div 
            className="mt-16 sm:mt-12 md:mt-12 flex flex-wrap justify-center gap-4 sm:gap-5 pt-5 sm:pt-6 md:pt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button 
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] hover:from-[#ff7b62] hover:to-[#ff8a1a] text-white font-semibold text-lg sm:text-xl transition-colors shadow-lg shadow-[rgba(253,109,75,0.3)] hover:shadow-[rgba(253,109,75,0.45)]"
            >
              Starta chatten
            </button>
            <a 
              href="#funktioner" 
              className="inline-flex items-center gap-2 px-8 sm:px-9 py-4 sm:py-4.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-lg sm:text-xl backdrop-blur-sm transition-colors"
            >
              Se funktioner
            </a>
          </motion.div>

          {/* Stats moved to separate component and placed elsewhere */}
        </motion.div>
      </div>
    </section>
  )
}
