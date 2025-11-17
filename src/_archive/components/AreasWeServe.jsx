'use client'
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const areas = [
  {
    id: 1,
    name: 'Stockholm',
    description: 'Huvudstadsregionen med både nyproduktion och renoveringar',
    image: 'https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Upplands Väsby',
    description: 'Förortsmiljö med många villor och radhus',
    image: 'https://images.unsplash.com/photo-1600585154526-990dcedcd622?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Sollentuna',
    description: 'Bostadsområden med höga krav på kvalitet',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Norrtälje',
    description: 'Skärgårdsnära boende med unik karaktär',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Vallentuna',
    description: 'Natur- och barnvänliga bostadsområden',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Övriga Mälardalen',
    description: 'Vi tar oss an projekt i hela regionen',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function AreasWeServe() {
  return (
    <section id="omraden" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 left-1/2 w-[1200px] h-[1200px] bg-glow -translate-x-1/2" />
      </div>
      
      <div className="container px-4 mx-auto relative">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            VÅRA OMRÅDEN
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Vi bygger i hela
            </span>
            <span className="block text-brand-400">Stockholms län</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Med kontor i Upplands Väsby täcker vi hela Stockholmsområdet med våra professionella byggtjänster.
          </p>
        </motion.div>

        {/* Areas grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              className="relative h-[420px] rounded-2xl overflow-hidden bg-slate-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-slate-800">
                  <img
                    src={area.image}
                    alt={area.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-500/10 text-brand-300 mb-4">
                    <MapPin size={24} className="opacity-90" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{area.name}</h3>
                  <p className="text-white/80">{area.description}</p>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-white/90 group-hover:text-brand-300 transition-colors">
                    <span className="font-medium">Visa projekt</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xl text-white/80 mb-6">Behöver du byggtjänster utanför dessa områden?</p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-medium text-lg transition-colors shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
          >
            Kontakta oss för mer information
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/>
              <path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
