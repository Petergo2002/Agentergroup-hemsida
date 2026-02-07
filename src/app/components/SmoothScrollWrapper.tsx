'use client'
import { ReactLenis } from 'lenis/react'

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={{
            smoothTouch: false, // Use native scroll on touch devices for better performance
            touchMultiplier: 2,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        }}>
            {children}
        </ReactLenis>
    )
}
