'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollStoryProps {
    title: string
    subtitle: string
    description: string
    features: string[]
    align?: 'left' | 'right'
    imageSrc?: string
}

export default function ScrollStory({
    title,
    subtitle,
    description,
    features,
    align = 'left',
    imageSrc
}: ScrollStoryProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Animation values
    const yText = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacityText = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0])
    const scaleVisual = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex flex-col justify-center">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl w-full">
                    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                        {/* Text Side */}
                        <motion.div
                            style={{ opacity: opacityText, y: yText }}
                            className="flex-1 space-y-8 relative z-20"
                        >
                            <div>
                                <span className="text-[#00EA64] font-mono tracking-widest text-sm uppercase mb-2 block">
                                    {subtitle}
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                                    {title}
                                </h2>
                                <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                                    {description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass-panel border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-[#00EA64] animate-pulse" />
                                        <span className="text-white/80 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Visual Side */}
                        <motion.div
                            style={{ scale: scaleVisual }}
                            className="flex-1 w-full aspect-[4/3] relative z-10"
                        >
                            <div className="w-full h-full rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden group">
                                {imageSrc ? (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />
                                        <img
                                            src={imageSrc}
                                            alt={title}
                                            className="w-full h-full object-cover object-left-top transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </>
                                ) : (
                                    // Fallback Placeholder
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                        <div className="absolute inset-0 opacity-20"
                                            style={{
                                                backgroundImage: 'radial-gradient(circle at 1px 1px, #333 1px, transparent 0)',
                                                backgroundSize: '20px 20px'
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center p-8 border border-dashed border-white/20 rounded-xl">
                                                <p className="text-white/40 font-mono text-sm mb-2">DASHBOARD SCREENSHOT</p>
                                                <p className="text-[#00EA64] text-xs uppercase tracking-widest">To be uploaded</p>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Decorative Elements */}
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00EA64]/10 rounded-full blur-3xl group-hover:bg-[#00EA64]/20 transition-colors duration-1000 z-0" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}
