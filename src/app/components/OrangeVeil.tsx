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
            {/* Primary Orange Glow - Top Left */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 30, -30, 0],
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#FF5D00] rounded-full blur-[60px] md:blur-[120px] mix-blend-normal md:mix-blend-screen opacity-40"
            />

            {/* Secondary Orange Glow - Bottom Right */}
            <motion.div
                animate={{
                    x: [0, -30, 30, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.1, 0.9, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF5D00] rounded-full blur-[50px] md:blur-[100px] mix-blend-normal md:mix-blend-screen opacity-30"
            />

            {/* Accent Glow - Center/Moving */}
            <motion.div
                animate={{
                    x: [-100, 100, -50, 100, -100],
                    y: [-50, 50, 100, -100, -50],
                    scale: [1, 1.3, 0.8, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-[#FF8C00] rounded-full blur-[60px] md:blur-[120px] mix-blend-normal md:mix-blend-screen opacity-20"
            />

            {/* Noise Texture Overlay for "Grit" */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("/noise.png")' }} />

            {/* Dark Fade Overlay - Ensures text readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
    )
}
