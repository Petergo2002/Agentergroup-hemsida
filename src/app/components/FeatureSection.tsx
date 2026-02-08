'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Check } from 'lucide-react'
import useShouldReduceMotion from './useShouldReduceMotion'

interface FeatureSectionProps {
    title: string
    subtitle: string
    description: string
    features: string[]
    component: ReactNode
    align?: 'center' | 'left'
}

export default function FeatureSection({
    title,
    subtitle,
    description,
    features = [],
    component,
    align = 'center'
}: FeatureSectionProps) {
    const shouldReduceMotion = useShouldReduceMotion(true)

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* Text Content */}
                <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16 lg:mb-24`}>
                    <motion.div
                        initial={false}
                        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-[#FF5D00] font-mono tracking-widest text-sm uppercase mb-4 inline-block">
                            {subtitle}
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                            {title}
                        </h2>

                        <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 md:mb-10">
                            {description}
                        </p>

                        {/* Feature List */}
                        {features.length > 0 && (
                            <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                        <div className="text-[#FF5D00]">
                                            <Check size={16} strokeWidth={3} />
                                        </div>
                                        <span className="text-white/90 font-medium text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Visual Component */}
                <motion.div
                    initial={false}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative w-full"
                >
                    {/* Glow Effect - Optimized for Safari */}
                    {!shouldReduceMotion && (
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF5D00]/5 blur-[60px] rounded-full pointer-events-none" style={{ willChange: 'opacity' }} />
                    )}

                    {/* Component Wrapper - Frameless */}
                    <div className="relative z-10 w-full">
                        <div className="w-full flex justify-center">
                            {component}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
