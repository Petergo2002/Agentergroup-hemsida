'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Code2 } from 'lucide-react'

export default function ChooseAdventure() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Välj Din <span className="text-[#00EA64]">Väg</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Vi bygger elit-team för företag och ger superkrafter till din kundtjänst.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card 1: Business */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-12 overflow-hidden hover:border-[#00EA64]/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00EA64]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-[#00EA64]/10 flex items-center justify-center text-[#00EA64]">
                                <Building2 size={32} />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">För Företag</h3>
                            <p className="text-[#00EA64] font-medium mb-6">Automatisera & Skala</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {['Missar du samtal?', 'Boka möten 24/7', 'Full CRM-synk', 'Ökad kundnöjdhet'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#00EA64]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl bg-[#00EA64] text-black font-bold text-lg hover:bg-[#00C455] transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                                Skaffa Maja
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 2: Developers/Partners */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-12 overflow-hidden hover:border-[#00EA64]/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                <Code2 size={32} />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-2">För Utvecklare</h3>
                            <p className="text-white/60 font-medium mb-6">Bygg & Integrera</p>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {['White Label lösningar', 'Robusta API:er', 'Anpassade workflows', 'Partnerprogram'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/70">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
                                Utforska API
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
