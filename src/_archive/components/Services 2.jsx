'use client'
import { motion } from 'framer-motion'
import { Clock, CalendarCheck, MessageSquare, PiggyBank, Calendar, Languages } from 'lucide-react'

const services = [
  {
    icon: Clock,
    title: '24/7 Tillgänglighet',
    desc: 'Er kundservice är alltid öppen med vår AI-receptionist.',
    img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Svarar samtal dygnet runt',
      'Hanterar vanliga frågor',
      'Bokar möten automatiskt',
      'Skickar bekräftelser'
    ],
    bgGradient: 'from-purple-500/10 to-blue-500/10',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10'
  },
  {
    icon: CalendarCheck,
    title: 'Smart Mötesbokning',
    desc: 'Automatisk bokning som sparar tid för alla inblandade.',
    img: 'https://images.unsplash.com/photo-1505373876331-7d4d1a8d3ea8?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Synkroniserar med Google/Outlook',
      'Hindrar dubbelbokning',
      'Skickar påminnelser',
      'Anpassningsbara tidsluckor'
    ],
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10'
  },
  {
    icon: MessageSquare,
    title: 'Kundsupport',
    desc: 'Snabba och effektiva svar på alla kundfrågor.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
    features: [
      'AI-driven FAQ-system',
      'Direktöverföring till rätt avdelning',
      'Stöd för flera kanaler',
      'Analys av kundfrågor'
    ],
    bgGradient: 'from-cyan-500/10 to-emerald-500/10',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10'
  },
  {
    icon: PiggyBank,
    title: 'Kostnadsbesparingar',
    desc: 'Effektivisera er kundservice med smart automatisering.',
    img: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Minskar behovet av personal',
      'Högre effektivitet',
      'Skalbar lösning',
      'Mätbara resultat'
    ],
    bgGradient: 'from-emerald-500/10 to-lime-500/10',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10'
  },
  {
    icon: Calendar,
    title: 'Integrationer',
    desc: 'Sömlös koppling till era befintliga system.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Google Workspace',
      'Microsoft 365',
      'CRM-system',
      'E-post och chattverktyg'
    ],
    bgGradient: 'from-lime-500/10 to-amber-500/10',
    iconColor: 'text-lime-400',
    iconBg: 'bg-lime-500/10'
  },
  {
    icon: Languages,
    title: 'Flerspråkig',
    desc: 'Stöd för flera språk för en global närvaro.',
    img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop',
    features: [
      'Svenska och engelska',
      'Fler språk på begäran',
      'Kulturanpassade svar',
      'Automatisk språkigenkänning'
    ],
    bgGradient: 'from-amber-500/10 to-pink-500/10',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10'
  }
]

const stats = [
  { number: '24/7', label: 'Dygnet runt support' },
  { number: '99.9%', label: 'Uptime' },
  { number: '5+', label: 'Plattformar' },
  { number: '2+', label: 'Språk' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Services() {
  return (
    <section id="funktioner" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/5 via-transparent to-transparent"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16 px-4">
          <motion.h2 
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Våra <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">nyckelfunktioner</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            En kraftfull plattform med alla verktyg du behöver för att automatisera och förbättra din kundservice.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl px-6 py-3 min-w-[120px] hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, type: 'spring', stiffness: 300 }}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-brand-200 group-hover:from-white group-hover:to-brand-100 transition-colors">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map(({ icon: Icon, title, desc, img, features, bgGradient, iconColor, iconBg }, idx) => (
              <motion.article
                key={title}
                variants={item}
                className="group relative overflow-hidden rounded-2xl h-full border border-white/5 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px 0px" }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.1, 0.4) }}
              >
                <div className={`absolute inset-0 ${bgGradient} opacity-30`}></div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/70 mb-5">{desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <ul className="space-y-2">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-brand-400 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={img} 
                    alt={title} 
                    className="absolute inset-0 h-full w-full object-cover" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-slate-900/30" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
            Boka kostnadsfri demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.currentTarget === e.target) setSelected(null)
              }}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="w-full max-w-4xl rounded-2xl overflow-hidden bg-slate-900/95 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {selected?.img && (
                  <div className="h-64 w-full overflow-hidden">
                    <img 
                      src={selected.img} 
                      alt={selected.title}
                      className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                      }}
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-6 mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                      {selected?.title}
                    </h3>
                    <button
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors"
                      onClick={() => setSelected(null)}
                      aria-label="Stäng"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-white/80 mb-8">
                    {selected?.details.longDesc}
                  </p>
                  
                  {selected?.details.process && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-brand-500/30 to-transparent"></div>
                        <h4 className="text-sm font-semibold text-brand-300 uppercase tracking-wider">Vår process</h4>
                        <div className="h-px flex-1 bg-gradient-to-l from-brand-500/30 to-transparent"></div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {selected.details.process.map((step, i) => (
                          <div 
                            key={i} 
                            className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-colors group"
                          >
                            <div className="flex items-start gap-4">
                              <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-500/10 text-brand-300 text-sm font-medium flex-shrink-0 mt-0.5 group-hover:bg-brand-500/20 transition-colors">
                                {i + 1}
                              </span>
                              <span className="text-white/90">{step}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <a 
                      href="#demo" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
                      onClick={() => setSelected(null)}
                    >
                      Boka demo
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

