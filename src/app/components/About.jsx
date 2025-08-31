'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Hammer, Users, Award, Home } from 'lucide-react'

export default function About() {
  return (
    <section id="omoss" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            VÅRT UPPDRAG
          </span>
          <motion.h2 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Bygga drömmar,\n            <span className="block text-brand-400">skapa verklighet</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sedan 2010 har vi förverkligat tusentals byggprojekt med passion, expertis och en outsinlig strävan efter perfektion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400">
              <Hammer className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Expertis</h3>
            <p className="text-white/70">Certifierade hantverkare med gedigen erfarenhet och ständig kompetensutveckling.</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Kundfokus</h3>
            <p className="text-white/70">Din vision är vår utgångspunkt. Vi lyssnar, rådgör och levererar utefter dina önskemål.</p>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Kvalitet</h3>
            <p className="text-white/70">Endast bästa material och arbetsmetoder för hållbara och vackra resultat.</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 bg-gradient-to-r from-brand-500/10 to-brand-500/5 rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-400/10 blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2.5 rounded-lg bg-brand-400/20 text-brand-300">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Vår vision</h3>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl">
              Att vara den självklara byggpartnern som genom innovation, hållbarhet och hög kvalitet skapar mervärde för våra kunder och samhället.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/5 px-4 py-2 rounded-full text-sm">
                <span className="text-brand-300 font-medium">15+</span> års erfarenhet
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-full text-sm">
                <span className="text-brand-300 font-medium">500+</span> nöjda kunder
              </div>
              <div className="bg-white/5 px-4 py-2 rounded-full text-sm">
                <span className="text-brand-300 font-medium">100%</span> garanti
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
