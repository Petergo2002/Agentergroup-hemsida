'use client'
import { ReactLenis } from 'lenis/react'
import useShouldReduceMotion from './useShouldReduceMotion'

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    const shouldReduceMotion = useShouldReduceMotion(true)
    const smoothScrollEnabled = !shouldReduceMotion

    if (!smoothScrollEnabled) {
        return <>{children}</>
    }

    return (
        <ReactLenis root options={{
            touchMultiplier: 2,
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        }}>
            {children}
        </ReactLenis>
    )
}
