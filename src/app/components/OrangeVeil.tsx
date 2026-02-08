'use client'

import { motion } from 'framer-motion'
import useShouldReduceMotion from './useShouldReduceMotion'

export default function OrangeVeil() {
    const shouldReduceMotion = useShouldReduceMotion()

    if (shouldReduceMotion) {
        return (
            <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,93,0,0.25)_0%,transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,93,0,0.16)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-black/55 z-10" />
            </div>
        )
    }

    return (
        <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none">
            {/* Primary Orange Glow - Top Left - Optimized */}
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, 25, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#FF5D00] rounded-full blur-[80px] mix-blend-screen opacity-35"
                style={{ willChange: 'transform' }}
            />

            {/* Secondary Orange Glow - Bottom Right - Optimized */}
            <motion.div
                animate={{
                    x: [0, -25, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[550px] h-[550px] bg-[#FF5D00] rounded-full blur-[70px] mix-blend-screen opacity-28"
                style={{ willChange: 'transform' }}
            />

            {/* Noise Texture Overlay for "Grit" */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("/noise.png")' }} />

            {/* Dark Fade Overlay - Ensures text readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
    )
}
