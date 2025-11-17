'use client'
import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Boka möte & behovsanalys',
      desc: 'Vi lär känna er verksamhet, mål och system. Tillsammans sätter vi ramarna för er AI‑receptionist.'
    },
    {
      number: 2,
      title: 'Vi bygger agenten',
      desc: 'Vi kopplar rätt system (kalender, CRM, telefoni), tränar svar och flöden – och testar i realistiska scenarion.'
    },
    {
      number: 3,
      title: 'Lansering till kund',
      desc: 'Vi går live, följer upp kvalitet och finjusterar löpande för maximal effekt och kundnöjdhet.'
    }
  ]

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5" />
      </div>

      <div className="container px-4 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            SÅ FUNKAR DET
          </span>
          <motion.h2 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Så ser samarbetet
            <span className="block text-brand-400">ut</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            En tydlig process från första möte till lansering – snabb implementering, trygg leverans.
          </motion.p>
        </div>
        {/* Steps - Responsive layout */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:block">
            <div className="relative flex justify-center gap-12 md:gap-[120px] mb-12">
              {/* Connecting line - spans from first to last icon */}
              <div className="absolute top-10 left-[calc(10%+40px)] right-[calc(10%+40px)] h-px bg-[#94a3b8] opacity-50" />

              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-brand-400 text-white flex items-center justify-center text-2xl font-semibold bg-brand-400 relative z-10">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-xl md:text-2xl font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-white/70 max-w-xs text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 relative"
              >
                <div className="w-16 h-16 rounded-full border-2 border-brand-400 text-white flex items-center justify-center text-xl font-semibold bg-brand-400 flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {/* Connecting line for mobile */}
                {i < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-px h-8 bg-[#94a3b8] opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="/#demo" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FD6D4B] to-[#FF6E00] hover:from-[#ff7b62] hover:to-[#ff8a1a] text-white font-medium text-lg transition-colors shadow-lg shadow-[rgba(253,109,75,0.3)] hover:shadow-[rgba(253,109,75,0.45)]"
          >
            Boka kostnadsfri demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
