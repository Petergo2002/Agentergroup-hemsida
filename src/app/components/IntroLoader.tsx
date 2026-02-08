'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

interface IntroLoaderProps {
    onComplete: () => void
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
    // We use internal state to control the exit animation timing
    const [isVisible, setIsVisible] = useState(true)
    const hasCompletedRef = useRef(false)

    const completeOnce = useCallback(() => {
        if (hasCompletedRef.current) return
        hasCompletedRef.current = true
        onComplete()
    }, [onComplete])

    useEffect(() => {
        // Hold the black screen briefly, then trigger exit animation.
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 450)

        // Safety net: avoid getting stuck on a black overlay if animation callbacks fail.
        const safetyTimer = setTimeout(() => {
            completeOnce()
        }, 1700)

        return () => {
            clearTimeout(timer)
            clearTimeout(safetyTimer)
        }
    }, [completeOnce])

    return (
        <AnimatePresence
            onExitComplete={() => {
                // Signal to parent that loader is fully gone
                completeOnce()
            }}
        >
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[60] bg-black flex items-center justify-center pointer-events-none"
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
