'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import useShouldReduceMotion from './useShouldReduceMotion'

export default function ScrollReveal() {
  const shouldReduceMotion = useShouldReduceMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  const introOpacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1])
  const majaOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1])
  const majaY = useTransform(smoothProgress, [0.4, 0.7], [40, 0])
  const subtextOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1])
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.05, 0])

  if (shouldReduceMotion) {
    return (
      <section className="relative bg-[#050505] py-24 md:py-32 font-sans">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">Your AI Front Desk.</h2>
          <h1 className="text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] font-black text-[#FF5D00] tracking-tighter">MAJA</h1>
          <p className="mt-10 text-lg md:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed">
            Maja bridges the gap between your customers and your team.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section ref={containerRef} className="h-[180vh] md:h-[200vh] relative bg-[#050505] font-sans">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ opacity: glowOpacity, willChange: 'opacity' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[60vw] md:h-[60vw] bg-[#FF5D00] rounded-full blur-[30px] md:blur-[60px]"
          />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 will-change-opacity" style={{ opacity: introOpacity }}>
            Your AI Front Desk.
          </motion.h2>

          <motion.div className="will-change-transform" style={{ opacity: majaOpacity, y: majaY }}>
            <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] font-black text-[#FF5D00] tracking-tighter">MAJA</h1>
          </motion.div>

          <motion.p className="mt-16 text-lg md:text-2xl text-white/50 font-medium max-w-xl mx-auto leading-relaxed will-change-opacity" style={{ opacity: subtextOpacity }}>
            Maja bridges the gap between your customers and your team.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
