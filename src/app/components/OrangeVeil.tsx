'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function OrangeVeil() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

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
                className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#FF5D00] rounded-full blur-[120px] mix-blend-screen opacity-40"
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
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FF5D00] rounded-full blur-[100px] mix-blend-screen opacity-30"
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
                className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-[#FF8C00] rounded-full blur-[120px] mix-blend-screen opacity-20"
            />

            {/* Noise Texture Overlay for "Grit" */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: 'url("/noise.png")' }} />

            {/* Dark Fade Overlay - Ensures text readability */}
            <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
    )
}
