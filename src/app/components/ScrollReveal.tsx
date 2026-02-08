'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import useShouldReduceMotion from './useShouldReduceMotion'

export default function ScrollReveal() {
    const shouldReduceMotion = useShouldReduceMotion()
    const containerRef = useRef<HTMLDivElement>(null)

    // Track scroll progress within this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        restDelta: 0.001
    })

    // Simple Opacity Mappings
    // 0 -> 0.4: "Din Egna Assistent." fades in
    const introOpacity = useTransform(smoothProgress, [0.1, 0.4], [0, 1])

    // 0.4 -> 0.7: "MAJA" fades in and moves up slightly
    const majaOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1])
    const majaY = useTransform(smoothProgress, [0.4, 0.7], [40, 0])

    // 0.7 -> 0.9: Subtext fades in
    const subtextOpacity = useTransform(smoothProgress, [0.75, 0.95], [0, 1])
    const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.05, 0])
    // REMOVED: blur filter causes heavy lag on Safari
    // const subtextBlur = useTransform(smoothProgress, [0.75, 0.95], ["blur(10px)", "blur(0px)"])

    if (shouldReduceMotion) {
        return (
            <section className="relative bg-[#050505] py-24 md:py-32 font-sans">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
                        Din Egna Assistent.
                    </h2>
                    <h1 className="text-[4rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] font-black text-[#FF5D00] tracking-tighter">
                        MAJA
                    </h1>
                    <p className="mt-10 text-lg md:text-2xl text-white/60 font-medium max-w-xl mx-auto leading-relaxed">
                        Maja överbryggar klyftan mellan dina kunder och din data.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section ref={containerRef} className="h-[180vh] md:h-[200vh] relative bg-[#050505] font-sans">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Very Subtle Background Glow - Barely visible to keep it clean */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        style={{ opacity: glowOpacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[60vw] md:h-[60vw] bg-[#FF5D00] rounded-full blur-[40px] md:blur-[100px] translate-z-0 will-change-transform"
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-10 text-center px-4 flex flex-col items-center">

                    {/* Part 1: Intro */}
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 will-change-opacity"
                        style={{ opacity: introOpacity }}
                    >
                        Din Egna Assistent.
                    </motion.h2>

                    {/* Part 2: MAJA (Hero) */}
                    <motion.div
                        className="will-change-transform"
                        style={{
                            opacity: majaOpacity,
                            y: majaY
                        }}
                    >
                        <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] leading-[0.85] font-black text-[#FF5D00] tracking-tighter">
                            MAJA
                        </h1>
                    </motion.div>

                    {/* Part 3: Subtext */}
                    <motion.p
                        className="mt-16 text-lg md:text-2xl text-white/50 font-medium max-w-xl mx-auto leading-relaxed will-change-opacity"
                        style={{
                            opacity: subtextOpacity,
                            // filter: subtextBlur // Removed for performance
                        }}
                    >
                        Maja överbryggar klyftan mellan dina kunder och din data.
                    </motion.p>

                </div>
            </div>
        </section>
    )
}
