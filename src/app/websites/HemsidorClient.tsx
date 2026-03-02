'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import OrangeVeil from '../components/OrangeVeil'
import { Sparkles, ArrowRight, Globe, Zap, Calendar, ArrowDownRight } from 'lucide-react'
import { openMajaWidget } from '@/lib/maja-widget'
import useShouldReduceMotion from '../components/useShouldReduceMotion'

export default function HemsidorClient() {
  const shouldReduceMotion = useShouldReduceMotion()
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main>
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <OrangeVeil />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none z-10" />

          <div className="container relative px-6 sm:px-4 mx-auto z-20 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20 mb-6">
                <Sparkles className="w-4 h-4" />
                Add-on service
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Modern Business Websites</span>
                <span className="text-[#FF5D00]">with AI Integration</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
                Custom-built websites that integrate seamlessly with Maja, our AI front desk.
                Delivered in <span className="text-[#FF5D00] font-semibold">1 week</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <button
                  onClick={() => document.getElementById('booking-cta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF5D00] hover:bg-[#FF7A33] text-black font-semibold rounded-lg transition-colors duration-200"
                >
                  Book consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 transition-colors duration-200"
                >
                  View packages
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#FF5D00]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="container px-4 mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
                Everything you need. <span className="text-[#FF5D00]">Nothing you don't.</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">A modern website is not just design. It is a growth system.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-[#FF5D00]" />,
                  title: 'Modern Design',
                  desc: 'Clean, conversion-focused design tailored to your brand and your ideal customer journey.',
                },
                {
                  icon: <Zap className="w-8 h-8 text-[#FF5D00]" />,
                  title: 'AI Ready',
                  desc: 'Built for AI workflows from day one with seamless integration points for Maja and your stack.',
                },
                {
                  icon: <Calendar className="w-8 h-8 text-[#FF5D00]" />,
                  title: 'Fast Delivery',
                  desc: 'From kickoff to launch in one week, with clear milestones and no unnecessary delays.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 h-full rounded-3xl bg-[#0F0F0F] border border-white/5 hover:border-[#FF5D00]/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF5D00]/10 flex items-center justify-center mb-6 border border-[#FF5D00]/20 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20" />

          <div className="container relative px-4 mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-[#FF5D00] font-mono text-sm tracking-widest uppercase mb-4 block">Complete package</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Website + AI.<br />
                  <span className="text-white/40">Your new standard.</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="p-3 rounded-lg bg-[#FF5D00]/10 shrink-0">
                      <Globe className="text-[#FF5D00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Premium Website</h3>
                      <p className="text-white/50">Responsive, SEO-ready, and built to convert. Hosting setup, domain connection, and design are included.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="p-3 rounded-lg bg-[#FF5D00]/10 shrink-0">
                      <Sparkles className="text-[#FF5D00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Maja AI Front Desk</h3>
                      <p className="text-white/50">Maja handles conversations 24/7, answers key questions, and books meetings directly into your flow.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => document.getElementById('booking-cta')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 bg-[#FF5D00] hover:bg-[#FF7A33] text-black font-bold rounded-full transition-all hover:scale-105"
                  >
                    Book consultation
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[500px] w-full bg-[#0F0F0F] rounded-[40px] border border-white/10 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D00]/20 via-transparent to-transparent opacity-50" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-video bg-[#1A1A1A] rounded-xl border border-white/10 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
                  <div className="h-8 bg-[#222] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-8 w-1/3 bg-white/10 rounded-lg animate-pulse" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-white/5 rounded-lg" />
                      <div className="h-24 bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 right-10 flex items-center gap-3 backdrop-blur-md bg-black/40 p-4 rounded-2xl border border-white/10">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#FF5D00] flex items-center justify-center border-2 border-[#0F0F0F] z-10">
                      <Sparkles size={16} className="text-black" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#0F0F0F]">
                      <Globe size={16} className="text-black" />
                    </div>
                  </div>
                  <div className="text-xs font-mono">
                    <span className="text-white block">Systems</span>
                    <span className="text-[#00C455]">Connected</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 relative">
          <div className="container px-4 mx-auto max-w-7xl">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">From idea to launch</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5D00]/30 to-transparent" />

              {[
                { step: '01', title: 'Strategy', text: 'We map goals, audience, and conversion priorities.' },
                { step: '02', title: 'Build', text: 'We design and implement the website with AI-ready foundations.' },
                { step: '03', title: 'Launch', text: 'We deploy, optimize, and hand over with clear next actions.' },
              ].map((item, i) => (
                <div key={i} className="relative pt-8 text-center group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#FF5D00] rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_20px_rgba(255,93,0,0.5)]" />
                  <div className="text-8xl font-bold text-white/[0.03] absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                  <p className="text-white/50 max-w-xs mx-auto relative z-10">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking-cta" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            onViewportEnter={() => !shouldReduceMotion && setShowPopup(true)}
            onViewportLeave={() => !shouldReduceMotion && setShowPopup(false)}
            viewport={{ amount: 0.3 }}
          />

          <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-20" />
          <div className="container relative px-4 mx-auto text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Ready to scale faster?</h2>
            <p className="text-xl text-white/60">Open the widget in the corner and Maja will help you book a meeting with our team.</p>
          </div>

          {!shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={showPopup ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className={`fixed bottom-24 right-4 md:right-8 z-50 cursor-pointer ${showPopup ? 'pointer-events-auto' : 'pointer-events-none'}`}
              onClick={openMajaWidget}
            >
              <div className="bg-white text-black px-6 py-4 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center gap-4 relative group hover:scale-105 transition-transform">
                <div className="absolute -bottom-6 -right-2 transform rotate-12">
                  <ArrowDownRight className="w-8 h-8 text-[#FF5D00] animate-bounce" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight">Talk to Maja here!</span>
                  <span className="text-xs text-black/60 font-medium">We answer instantly</span>
                </div>
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C455] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C455]"></span>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
