'use client'

import { motion } from 'framer-motion'
import NavBarSimple from '../components/NavBarSimple'
import Footer from '../components/Footer'
import DarkVeil from '../components/DarkVeil'
import { Sparkles, ArrowRight, CheckCircle2, Globe, Zap, Calendar } from 'lucide-react'

export default function HemsidorClient() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBarSimple />

      <main>
        {/* Hero Section - Med DarkVeil effekt */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* DarkVeil Background - Properly centered */}
          <div className="absolute top-0 left-0 w-full h-full z-0" style={{ position: 'absolute' }}>
            <DarkVeil
              hueShift={222}
              noiseIntensity={0}
              scanlineIntensity={0.05}
              speed={0.4}
              scanlineFrequency={0.3}
              warpAmount={0.4}
              resolutionScale={1}
            />
          </div>

          {/* Gradient overlay för bättre läsbarhet */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-10" />

          <div className="container relative px-6 sm:px-4 mx-auto z-20 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20 mb-6">
                <Sparkles className="w-4 h-4" />
                Tillägstjänst
              </span>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                  Moderna Hemsidor
                </span>
                <span className="text-brand-400">med AI-Integration</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
                Skräddarsydda hemsidor som integreras sömlöst med vår AI-receptionist.
                Färdiga på <span className="text-brand-400 font-semibold">1 vecka</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
                <button
                  onClick={() => window.location.href = '/#demo'}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Boka Konsultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#paket"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 transition-colors duration-200"
                >
                  Se Paket
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vad Vi Erbjuder - Professional Design */}
        <section className="py-16 md:py-24 relative">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Vad Ingår?
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Allt du behöver för en professionell digital närvaro
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                {/* Decorative background element */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-brand-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                  {/* Icon with subtle background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-500/10 rounded-2xl blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-brand-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">Modern Design</h3>
                  <p className="text-white/60 leading-relaxed">
                    Ren, professionell design som speglar ditt varumärke och engagerar besökare.
                    Vi skapar hemsidor som både ser bra ut och fungerar perfekt.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative"
              >
                {/* Decorative background element */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-brand-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                  {/* Icon with subtle background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-500/10 rounded-2xl blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-brand-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">AI-Integration</h3>
                  <p className="text-white/60 leading-relaxed">
                    Sömlös koppling med AI-receptionist för automatisk kundservice direkt från hemsidan.
                    Besökare kan boka möten och få svar omedelbart.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                {/* Decorative background element */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-brand-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                  {/* Icon with subtle background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-brand-500/10 rounded-2xl blur-xl" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-brand-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white">Snabb Leverans</h3>
                  <p className="text-white/60 leading-relaxed">
                    Din hemsida är klar på 1 vecka. Från idé till färdig webbplats på rekordtid.
                    Vi jobbar effektivt utan att kompromissa på kvalitet.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Komplett Paket - Professional Design */}
        <section id="paket" className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none" />

          <div className="container relative px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20 mb-6">
                  Rekommenderat
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Komplett Paketlösning
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                  Hemsida + AI-receptionist i ett paket
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Hemsida */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-brand-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Hemsida</h3>
                    </div>

                    <ul className="space-y-3">
                      {[
                        'Modern, responsiv design',
                        'Upp till 10 sidor',
                        'SEO-optimering',
                        'Kontaktformulär',
                        'Google Analytics',
                        'Hosting första året',
                        'Färdig på 1 vecka'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* AI-Receptionist */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-500/20 to-brand-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-brand-500/30 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-brand-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">AI-Receptionist</h3>
                    </div>

                    <ul className="space-y-3">
                      {[
                        '24/7 telefonhantering',
                        'Automatisk mötesbokning',
                        'Integration med hemsidan',
                        'Anpassad röst',
                        'Dashboard med statistik',
                        'Obegränsade samtal',
                        'Svensk support'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto"
              >
                <div className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10">
                  <div className="text-center mb-6">
                    <p className="text-sm text-white/60 mb-2">Komplett paket från</p>
                    <p className="text-3xl md:text-4xl font-bold text-brand-400 mb-2">
                      Kontakta oss
                    </p>
                    <p className="text-white/60">för skräddarsydd offert</p>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => window.location.href = '/#demo'}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200 group"
                    >
                      Boka Konsultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Process - Förenklad till 3 steg */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Så Fungerar Det
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                Från idé till färdig hemsida på 1 vecka
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '01',
                    title: 'Konsultation',
                    description: 'Vi diskuterar dina behov, målgrupp och önskemål för hemsidan.'
                  },
                  {
                    step: '02',
                    title: 'Design & Utveckling',
                    description: 'Vi skapar en skräddarsydd hemsida med modern design och AI-integration.'
                  },
                  {
                    step: '03',
                    title: 'Lansering',
                    description: 'Din hemsida går live med full support och AI-receptionist redo att ta emot besökare.'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
                        <span className="text-2xl font-bold text-brand-400">{step.step}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enklare */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20"
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Redo att Komma Igång?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Boka en kostnadsfri konsultation så diskuterar vi hur vi kan hjälpa ditt företag.
              </p>
              <button
                onClick={() => window.location.href = '/#demo'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
              >
                Boka Konsultation Nu
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
