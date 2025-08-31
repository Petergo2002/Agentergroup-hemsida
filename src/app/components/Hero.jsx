'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const onLoaded = () => {
      try {
        // Skip initial black frame and try to play
        if (v.currentTime < 0.1) v.currentTime = 0.1
        const p = v.play()
        if (p && typeof p.then === 'function') {
          p.catch(() => {/* ignore */})
        }
      } catch {}
    }

    v.addEventListener('loadedmetadata', onLoaded)
    return () => v.removeEventListener('loadedmetadata', onLoaded)
  }, [])

  return (
    <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/video/videohero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Subtle overlays */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-950/60" />
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-20 container h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex items-center pt-24 md:pt-32 px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full text-center md:text-left"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            BYGGNADSFÖRETAG I VÄRLDSKLASS
          </motion.span>
          
          <motion.h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.04] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Vi bygger
            </span>
            <span className="block text-brand-400 mt-2">din framtid</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-white/80 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Från renovering till nyproduktion – vi levererar kvalitet, precision och trygghet i varje projekt.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#tjanster" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-lg transition-colors shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
            >
              Våra tjänster
            </a>
            <a 
              href="/#offert" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-lg backdrop-blur-sm transition-colors"
            >
              Begär offert
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { number: "500+", label: "projekt" },
              { number: "15+", label: "års erfarenhet" },
              { number: "100%", label: "nöjda kunder" },
              { number: "5-års", label: "garanti" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors group"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-500 group-hover:from-brand-200 group-hover:to-brand-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
