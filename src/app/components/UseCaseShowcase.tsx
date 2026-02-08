'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MessageCircle, Globe, Instagram, Facebook, Link as LinkIcon, Sparkles, Linkedin, Twitter, Ghost } from 'lucide-react'
import { MouseEvent } from 'react'
import useShouldReduceMotion from './useShouldReduceMotion'

export default function UseCaseShowcase() {
    const shouldReduceMotion = useShouldReduceMotion()

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Ambient Background - Optimized for Safari */}
            <div className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ${shouldReduceMotion ? 'hidden' : ''}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF5D00]/5 rounded-full blur-[60px]" style={{ willChange: 'opacity' }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[50px]" style={{ willChange: 'opacity' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <Sparkles size={14} className="text-[#FF5D00]" />
                        <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Total Flexibilitet</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-8 tracking-tight"
                    >
                        Maja är överallt <br className="hidden md:block" /> där dina kunder är.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed"
                    >
                        Ingen röst. Inga samtal. Bara smart, textbaserad AI som möter dina kunder direkt i deras naturliga flöde.
                    </motion.p>
                </div>

                {/* Showcases Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <SpotlightCard delay={0.3} shouldReduceMotion={shouldReduceMotion}>
                        <div className="mb-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF5D00] to-[#FF9D00] flex items-center justify-center mb-6 shadow-2xl shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500">
                                <Globe className="text-white" size={28} />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FF5D00] transition-colors duration-300">En del av din hemsida</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Maja integreras som en elegant AI Frontdesk-widget direkt på din webbplats. Alltid redo, dygnet runt, utan att störa designen.
                            </p>
                        </div>

                        {/* Interactive Widget Visual */}
                        <div className="mt-auto relative rounded-t-2xl bg-[#0A0A0A] border border-white/10 border-b-0 h-[300px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_-20px_60px_-15px_rgba(255,93,0,0.15)]">
                            {/* Browser Bar */}
                            <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 backdrop-blur-sm">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <div className="ml-4 h-5 bg-white/5 rounded-full w-48" />
                            </div>

                            {/* Website UI Mockup */}
                            <div className="p-6 relative opacity-80">
                                <div className="h-32 rounded-xl bg-gradient-to-b from-white/10 to-transparent p-4 mb-4 border border-white/5">
                                    <div className="h-4 w-1/3 bg-white/20 rounded mb-2" />
                                    <div className="h-3 w-1/2 bg-white/10 rounded" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-24 rounded-lg bg-white/5 border border-white/5" />
                                    ))}
                                </div>
                            </div>

                            {/* Floating Widget Animation */}
                            <motion.div
                                className="absolute bottom-6 right-6 z-20"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#FF5D00] blur-2xl opacity-40 animate-pulse-slow" />
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-[#FF5D00] to-[#FF8000] rounded-full flex items-center justify-center shadow-lg border border-white/20 cursor-pointer">
                                        <MessageCircle className="text-white fill-white/20" size={32} />
                                    </div>
                                    {/* Chat Bubble Popup */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, x: -10, y: 10 }}
                                        whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                                        transition={{ delay: 0.5, type: "spring" }}
                                        className="absolute bottom-full right-full mb-3 mr-1 bg-white text-black px-5 py-3 rounded-2xl rounded-tr-sm shadow-xl min-w-[180px]"
                                    >
                                        <p className="text-sm font-semibold">Hej där! 👋</p>
                                        <p className="text-xs text-gray-500">Hur kan jag hjälpa dig?</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </SpotlightCard>

                    <SpotlightCard delay={0.4} shouldReduceMotion={shouldReduceMotion}>
                        <div className="mb-10">
                            <div className="flex gap-4 mb-8 flex-wrap">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                    <Instagram className="text-white" size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-[#0077b5] flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                    <Linkedin className="text-white" size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                    <Twitter className="text-white" size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-[#FFFC00] flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                    <Ghost className="text-black" size={24} />
                                </div>
                                <div className="w-12 h-12 rounded-2xl bg-[#1877F2] flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                                    <Facebook className="text-white" size={24} />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Länk i dina kanaler</h3>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Gör dina sociala medier till säljkanaler. Dela din unika länk och låt kunderna chatta direkt från Instagram, LinkedIn eller mail.
                            </p>
                        </div>

                        {/* Mobile Interface Visual - Social Profile Style */}
                        <div className="mt-auto relative mx-auto w-[280px] rounded-t-[2.5rem] bg-[#0A0A0A] border border-white/10 border-b-0 h-[300px] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[0_-20px_60px_-15px_rgba(168,85,247,0.15)]">
                            {/* Notch & Status Bar */}
                            <div className="h-8 w-full flex justify-center pt-3 mb-2">
                                <div className="w-20 h-1.5 bg-white/10 rounded-full" />
                            </div>

                            <div className="p-6 flex flex-col items-center">
                                {/* Social Profile Header */}
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 p-[2px] mb-3">
                                    <div className="w-full h-full rounded-full bg-[#151515] flex items-center justify-center border-4 border-[#0A0A0A] overflow-hidden">
                                        {/* Abstract Avatar */}
                                        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
                                    </div>
                                </div>
                                <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                                <div className="h-3 w-48 bg-white/10 rounded mb-8 text-center" />

                                {/* The "Link in Bio" Button */}
                                <motion.div
                                    className="w-full bg-[#1F1F1F] hover:bg-[#252525] border border-white/10 hover:border-white/20 rounded-full py-3 px-6 flex items-center justify-between cursor-pointer group/link transition-all shadow-lg"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-[#FF5D00] flex items-center justify-center text-black">
                                        <Sparkles size={16} fill="black" />
                                    </div>
                                    <span className="font-semibold text-white tracking-wide">Länk i bio</span>
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <LinkIcon size={16} className="text-white/40" />
                                    </div>
                                </motion.div>
                                <div className="mt-3 text-[10px] text-white/20 uppercase tracking-widest font-bold">
                                    Maja AI Link
                                </div>
                            </div>



                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}

function SpotlightCard({ children, delay = 0, shouldReduceMotion = false }: { children: React.ReactNode, delay?: number, shouldReduceMotion?: boolean }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const orangeSpotlight = useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 93, 0, 0.1),
                            transparent 80%
                        )
                    `;
    const whiteSpotlight = useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.1),
                            transparent 80%
                        )
                    `;

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        if (shouldReduceMotion) return
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden"
            onMouseMove={shouldReduceMotion ? undefined : handleMouseMove}
        >
            {/* Spotlight Effect */}
            {!shouldReduceMotion && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: orangeSpotlight,
                    }}
                />
            )}
            {!shouldReduceMotion && (
                <motion.div
                    className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: whiteSpotlight,
                    }}
                />
            )}

            <div className="relative z-10 h-full flex flex-col p-8 md:p-12">
                {children}
            </div>
        </motion.div>
    );
}
