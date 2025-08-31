'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hammer, Building2, Ruler, Wrench, Paintbrush, HardHat, X, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Hammer,
    title: 'Renovering',
    desc: 'Köks-, badrums- och totalrenoveringar med fokus på detaljer, kvalitet och hållbara material.',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Vi tar helhetsansvar från rivning till slutbesiktning och säkerställer tydlig kommunikation, fasta tidplaner och hög kvalitet i varje steg. Du får en kontaktperson och full transparens kring budget och material.',
      process: [
        'Kostnadsfri konsultation och offert',
        'Planering, ritningar och materialval',
        'Genomförande med löpande kvalitetskontroller',
        'Slutstädning, egenkontroll och överlämning'
      ]
    }
  },
  {
    icon: Building2,
    title: 'Nyproduktion',
    desc: 'Från idé till färdigt hus – totalentreprenad med hög precision och tydlig kommunikation.',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Vi leder hela resan från tomtanalys och projektering till inflyttning. Vårt nätverk av certifierade yrkesgrupper säkrar tid, budget och kvalitet – utan överraskningar.',
      process: [
        'Projektering och bygglovshandlingar',
        'Markarbete, grund och stomme',
        'Klimatskal, installationer och ytskikt',
        'Slutbesiktning och inflyttning'
      ]
    }
  },
  {
    icon: Ruler,
    title: 'Tillbyggnader',
    desc: 'Utöka boytan med uterum, ny våning eller altan – smarta lösningar som smälter in.',
    img: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Vi integrerar tillbyggnaden med befintlig arkitektur och konstruktion så att helheten blir både vacker och hållbar över tid.',
      process: [
        'Behovsanalys, skiss och bygglov',
        'Konstruktion och anpassning mot befintligt hus',
        'Ytskikt, el/VVS och slutfinish'
      ]
    }
  },
  {
    icon: Wrench,
    title: 'Service & underhåll',
    desc: 'Löpande service, felsökning och snabba åtgärder – proaktivt underhåll som lönar sig.',
    img: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92f?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Vi erbjuder avtal för förebyggande underhåll, akuta insatser och planerade åtgärder som förlänger fastighetens livslängd och sänker driftskostnaderna.',
      process: [
        'Felsökning och bedömning',
        'Åtgärd och funktionskontroll',
        'Serviceplan och uppföljning'
      ]
    }
  },
  {
    icon: Paintbrush,
    title: 'Måleri',
    desc: 'Invändig och utvändig målning med premiumfärger. Noggrant underarbete för lång hållbarhet.',
    img: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Rätt metod, rätt färg och noggrann maskering ger en slitstark finish som håller. Vi tar hand om underarbete, målning och städning.',
      process: [
        'Underarbete: spackling och slipning',
        'Grundning och målning i flera skikt',
        'Egenkontroll och avetablering'
      ]
    }
  },
  {
    icon: HardHat,
    title: 'Projektledning',
    desc: 'Strukturerad planering och tydlig budget som håller både tidsplan och kvalitet.',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
    details: {
      longDesc:
        'Vi ansvarar för planering, koordinering av leverantörer och uppföljning mot tid och budget. Du får löpande status och en trygg leverans.',
      process: [
        'Projektplan och budget',
        'Styrning av resurser och leverantörer',
        'Kvalitetskontroll och rapportering'
      ]
    }
  },
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
  const [selected, setSelected] = useState(null)
  
  return (
    <section id="tjanster" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            VÅRA TJÄNSTER
          </span>
          <motion.h2 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Bygga framtidens
            <span className="block text-brand-400">hem med omsorg</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professionella byggtjänster där kvalitet, pålitlighet och kundnöjdhet står i fokus.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {services.map(({ icon: Icon, title, desc, img, details }, idx) => (
            <motion.article
              key={title}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl h-[420px] shadow-2xl/10 border border-white/5 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={img} 
                  alt={title} 
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110" 
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-500/10 text-brand-300 mb-6">
                    <Icon size={24} className="opacity-90" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {desc}
                  </p>
                </div>
                
                <div className="mt-6">
                  <button
                    onClick={() => setSelected({ title, img, details })}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-brand-300 group transition-colors"
                  >
                    <span className="font-medium">Läs mer</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <motion.a
            href="#offert"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-lg transition-colors shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Begär kostnadsfri offert
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
                      href="#offert" 
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors"
                      onClick={() => setSelected(null)}
                    >
                      Boka kostnadsfri konsultation
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

