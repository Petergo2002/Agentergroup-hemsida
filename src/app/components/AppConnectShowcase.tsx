'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { Check, Search, Plus, PlugZap } from 'lucide-react'
import useShouldReduceMotion from './useShouldReduceMotion'
import usePageVisibility from './usePageVisibility'

const apps = [
    { name: 'HubSpot', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg', color: '#FF7A59' },
    { name: 'Salesforce', logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg', color: '#00A1E0' },
    { name: 'Pipedrive', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg', color: '#26292C' },
    { name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', color: '#4A154B' },
    { name: 'Zapier', logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg', color: '#FF4F00' },
    { name: 'Google Cal', logo: 'https://cdn.worldvectorlogo.com/logos/google-calendar.svg', color: '#4285F4' },
]

export default function AppConnectShowcase() {
    const shouldReduceMotion = useShouldReduceMotion()
    const isPageVisible = usePageVisibility()
    const [step, setStep] = useState<0 | 1 | 2>(0)
    const [connected, setConnected] = useState(false)
    const [activeApp, setActiveApp] = useState<string | null>(null)
    const cursorControls = useAnimation()

    // Performance: Pause when not visible
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { margin: "0px 0px -200px 0px" })

    // Simulation loop
    useEffect(() => {
        if (shouldReduceMotion) return;
        if (!isInView || !isPageVisible) return;

        let isMounted = true

        const loop = async () => {
            if (!isMounted) return

            // Reset
            setStep(0)
            setConnected(false)
            setActiveApp(null)
            cursorControls.set({ opacity: 0, x: 100, y: 100 })

            // Step 1: Open Dialog (Wait 1.5s)
            await new Promise(r => setTimeout(r, 1500))
            if (!isMounted) return
            setStep(1) // "Välj App"

            // Step 2: Show Cursor & Move to HubSpot
            // Start moving cursor immediately when dialog opens
            await cursorControls.start({ opacity: 1, x: 150, y: 150, transition: { duration: 0 } })

            // Move to HubSpot
            await new Promise(r => setTimeout(r, 500))
            if (!isMounted) return
            await cursorControls.start({ x: 0, y: -40, transition: { duration: 1, ease: 'easeOut' } })

            // "Click" HubSpot
            await cursorControls.start({ scale: 0.8, transition: { duration: 0.1 } })
            await cursorControls.start({ scale: 1, transition: { duration: 0.1 } })
            if (!isMounted) return
            setActiveApp('HubSpot')

            // Move to Connect Button
            await new Promise(r => setTimeout(r, 500))
            await cursorControls.start({ x: 120, y: 140, transition: { duration: 0.8, ease: 'easeInOut' } })

            // "Click" Connect
            await cursorControls.start({ scale: 0.8, transition: { duration: 0.1 } })
            if (!isMounted) return
            setConnected(true)
            await cursorControls.start({ scale: 1, transition: { duration: 0.1 } })

            // Fade out cursor
            await new Promise(r => setTimeout(r, 500))
            cursorControls.start({ opacity: 0, transition: { duration: 0.5 } })

            // Step 3: Wait for animation sequence completion
            await new Promise(r => setTimeout(r, 4000))

            // Step 4: Close/Reset
            // Loop restarts
        }

        const interval = setInterval(loop, 10000)
        loop() // Start immediately

        return () => {
            isMounted = false
            clearInterval(interval)
        }
    }, [cursorControls, isInView, isPageVisible, shouldReduceMotion])

    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center p-4">
            {/* Main Container - The "Dashboard" */}
            <div className="relative w-full bg-[#0F0F0F] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#141414]">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FF5D00]/10">
                            <PlugZap size={18} className="text-[#FF5D00]" />
                        </div>
                        <span className="font-medium text-white/90">Integrationer</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 relative min-h-[400px]">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                    />

                    {/* Intro Text */}
                    <div className="mb-8 relative z-10">
                        <h3 className="text-xl font-semibold text-white mb-2">Anslut dina verktyg</h3>
                        <p className="text-white/40 text-sm">Automatisera dina flöden genom att koppla Maja till dina favoriter.</p>
                    </div>

                    {/* Active Integrations List (Background) */}
                    <div className="space-y-3 relative z-10 opacity-40 blur-[1px]">
                        {['Google Calendar', 'Stripe'].map((app) => (
                            <div key={app} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-white/10" />
                                    <span className="text-white font-medium">{app}</span>
                                </div>
                                <span className="text-xs text-green-400 font-mono px-2 py-1 bg-green-500/10 rounded">Active</span>
                            </div>
                        ))}
                    </div>

                    {/* --- THE FLOATING DIALOG (Main Actor) --- */}
                    <AnimatePresence mode="wait">
                        {step >= 1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-sm p-4"
                            >
                                <div className="w-full max-w-md bg-[#1A1A1A] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
                                    {/* Modal Header */}
                                    <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
                                        <span className="text-white font-medium">Lägg till integration</span>
                                        <Search size={16} className="text-white/40" />
                                    </div>

                                    {/* App Grid */}
                                    <div className="p-6 grid grid-cols-3 gap-4">
                                        {apps.map((app) => {
                                            const isTarget = app.name === 'HubSpot';
                                            const isSelected = activeApp === 'HubSpot' && isTarget;

                                            return (
                                                <div
                                                    key={app.name}
                                                    className={`
                              relative flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-300
                              ${isSelected ? 'bg-[#FF5D00]/10 border-[#FF5D00] scale-105' : 'bg-white/5 border-white/5'}
                            `}
                                                >
                                                    {/* App Logo Placeholder */}
                                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden p-1">
                                                        {app.logo && (
                                                            <img
                                                                src={app.logo}
                                                                alt={app.name}
                                                                className="w-full h-full object-contain"
                                                                loading="lazy"
                                                                decoding="async"
                                                                width="40"
                                                                height="40"
                                                            />
                                                        )}
                                                    </div>
                                                    <span className="text-xs text-white/70">{app.name}</span>

                                                    {isSelected && (
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            className="absolute top-1 right-1 w-4 h-4 bg-[#FF5D00] rounded-full flex items-center justify-center"
                                                        >
                                                            <Check size={10} className="text-white" />
                                                        </motion.div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* Modal Footer */}
                                    <div className="px-6 py-4 border-t border-white/5 bg-[#141414] flex justify-end">
                                        <motion.button
                                            animate={activeApp ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
                                            className={`
                          px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors
                          ${connected
                                                    ? 'bg-green-500 text-black'
                                                    : 'bg-[#FF5D00] text-black hover:bg-[#FF7A33]'}
                        `}
                                        >
                                            {connected ? (
                                                <>
                                                    <Check size={16} /> Ansluten
                                                </>
                                            ) : (
                                                <>
                                                    <Plus size={16} /> Anslut
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </div>

                                {/* --- MOUSE CURSOR SIMULATION --- */}
                                <motion.div
                                    className="absolute pointer-events-none z-50 text-white drop-shadow-xl"
                                    animate={cursorControls}
                                    initial={{ opacity: 0, x: 100, y: 100 }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="black" strokeWidth="2" />
                                    </svg>
                                </motion.div>

                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}
