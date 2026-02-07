'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollStoryVerticalProps {
    title: string
    subtitle: string
    description: string
    features: string[]
    imageSrc: string
}

export default function ScrollStoryVertical({
    title,
    subtitle,
    description,
    features,
    imageSrc
}: ScrollStoryVerticalProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Vertical Animation values
    const yText = useTransform(scrollYProgress, [0, 0.4], [50, 0])
    const opacityText = useTransform(scrollYProgress, [0, 0.3], [0, 1])
    const scaleImage = useTransform(scrollYProgress, [0.1, 0.6], [0.9, 1])
    const opacityImage = useTransform(scrollYProgress, [0.1, 0.4], [0.5, 1])

    return (
        <section ref={containerRef} className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Text Section (Top) */}
                <motion.div
                    style={{ opacity: opacityText, y: yText }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <span className="text-[#FF5D00] font-mono tracking-widest text-sm uppercase mb-4 block">
                        {subtitle}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-xl text-white/60 leading-relaxed mb-10">
                        {description}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-white/5 bg-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5D00]" />
                                <span className="text-white/80 font-medium text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Section (Bottom - Full Width) */}
                <motion.div
                    style={{ scale: scaleImage, opacity: opacityImage }}
                    className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                >
                    {/* Bottom Fade Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-20 pointer-events-none" />

                    <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />

                    {/* Decorative Grid */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />
                </motion.div>

            </div>
        </section>
    )
}
