'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { useState } from 'react'
import useShouldReduceMotion from './useShouldReduceMotion'
import { openMajaWidget } from '@/lib/maja-widget'

export default function BookingCTA() {
    const shouldReduceMotion = useShouldReduceMotion()
    const [showPopup, setShowPopup] = useState(false)

    return (
        <section id="booking-cta" className="relative py-32 overflow-hidden bg-black">
            {/* Viewport Detection for Popup */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                onViewportEnter={() => !shouldReduceMotion && setShowPopup(true)}
                onViewportLeave={() => !shouldReduceMotion && setShowPopup(false)}
                viewport={{ amount: 0.3 }}
            />

            {/* Background Effects - Optimized for Safari */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,93,0,0.08)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF5D00]/5 rounded-full blur-[60px]" style={{ willChange: 'opacity' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5D00]/10 border border-[#FF5D00]/20 backdrop-blur-md mb-8"
                    >
                        <span className="text-sm font-bold text-[#FF5D00] tracking-wider uppercase">Inga Säljare. Bara Resultat.</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
                    >
                        Vi skippar <span className="text-white/20 line-through decoration-[#FF5D00]/50 decoration-4">säljsnacket.</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5D00] to-[#FF9D00]">Snacka med Maja.</span>
                    </motion.h2>

                    {/* Copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
                    >
                        Testa Maja kostnadsfritt – starta chatten direkt.
                    </motion.p>

                    {/* Action Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center justify-center gap-8"
                    >
                        <div className="flex items-center gap-2 text-white/30 text-sm uppercase tracking-widest font-semibold">
                            <span>Hon finns där nere</span>
                            <ArrowDownRight className="w-4 h-4 text-[#FF5D00] animate-bounce" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Contextual Popup */}
            {!shouldReduceMotion && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={showPopup ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`fixed bottom-24 right-4 md:right-8 z-50 ${showPopup ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                    <div className="bg-white text-black px-6 py-4 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center gap-4 relative group hover:scale-105 transition-transform">

                        {/* Floating Arrow (Bottom Right, pointing to widget) */}
                        <div className="absolute -bottom-6 -right-2 transform rotate-12">
                            <ArrowDownRight className="w-8 h-8 text-[#FF5D00] animate-bounce" strokeWidth={2.5} />
                        </div>


                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-tight">Prata med Maja här!</span>
                            <span className="text-xs text-black/60 font-medium">Vi svarar direkt</span>
                        </div>
                        {/* Pulsing Dot */}
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C455] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C455]"></span>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    )
}
