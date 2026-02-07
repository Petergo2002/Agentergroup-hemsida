'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IntroLoaderProps {
    onComplete: () => void
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
    // We use internal state to control the exit animation timing
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Hold the black screen for 0.5s, then trigger exit
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence
            onExitComplete={() => {
                // Signal to parent that loader is fully gone
                onComplete()
            }}
        >
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 1.0, ease: "circOut" }
                    }}
                >
                    {/* Optional: Add a subtle logo or text pulse here if desired later */}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
