'use client'
import { ReactLenis } from 'lenis/react'

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            // smoothTouch: false, // Removed as it is not a valid option in current lenis types
            touchMultiplier: 2,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        }}>
            {children}
        </ReactLenis>
    )
}
