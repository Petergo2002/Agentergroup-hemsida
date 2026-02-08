'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { UploadCloud, FileText, Globe, BrainCircuit, Link as LinkIcon, PlugZap } from 'lucide-react'
import useShouldReduceMotion from './useShouldReduceMotion'
import usePageVisibility from './usePageVisibility'

// Mock Data for "Inlärda källor"
const initialSources = [
    { type: 'file', name: 'Företagspolicy_2024.pdf', size: '2.3 MB', status: 'Inlärd', date: '2/2/2026' },
    { type: 'file', name: 'Prislista_tjänster_Q1.xlsx', size: '152 KB', status: 'Inlärd', date: '1/30/2026' },
    { type: 'link', name: 'https://agentergroup.com/om-oss', size: '—', status: 'Inlärd', date: '1/25/2026' },
]

export default function KnowledgeBaseShowcase() {
    const shouldReduceMotion = useShouldReduceMotion()
    const isPageVisible = usePageVisibility()
    const [sources, setSources] = useState(initialSources)
    const [typingText, setTypingText] = useState('')
    const [isScraping, setIsScraping] = useState(false)
    const cursorControls = useAnimation()

    // Performance
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { margin: "0px 0px -200px 0px" })

    // Animation Loop
    useEffect(() => {
        if (shouldReduceMotion) return;
        if (!isInView || !isPageVisible) return;

        let isMounted = true
        const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
        const waitForNextPaint = () =>
            new Promise<void>((resolve) => {
                requestAnimationFrame(() => resolve())
            })
        const safeSet = (definition: Parameters<typeof cursorControls.set>[0]) => {
            if (!isMounted) return
            try {
                cursorControls.set(definition)
            } catch {
                // Ignore when controls are not mounted yet.
            }
        }
        const safeStart = async (definition: Parameters<typeof cursorControls.start>[0]) => {
            if (!isMounted) return
            try {
                await cursorControls.start(definition)
            } catch {
                // Ignore when controls are not mounted yet.
            }
        }
        const loop = async () => {
            if (!isMounted) return

            // Reset
            setTypingText('')
            setIsScraping(false)
            setSources(initialSources)
            safeSet({ opacity: 0, x: 200, y: 300 })

            // Wait start
            await wait(1000)
            if (!isMounted) return
            await waitForNextPaint()
            if (!isMounted) return

            // 1. Move Cursor to URL Input
            await safeStart({ opacity: 1, x: 300, y: 250, transition: { duration: 0 } }) // Jump to general area
            await safeStart({ x: 50, y: -20, transition: { duration: 1, ease: 'easeOut' } }) // Relative move to input

            // 2. Type URL
            const urlToType = 'https://agentergroup.com'
            for (let i = 0; i < urlToType.length; i++) {
                if (!isMounted) return
                setTypingText(prev => prev + urlToType[i])
                await wait(50 + Math.random() * 50)
            }

            // 3. Move to "Läs in" button
            await safeStart({ x: 50, y: 60, transition: { duration: 0.6, ease: 'easeInOut' } })

            // 4. Click
            await safeStart({ scale: 0.8, transition: { duration: 0.1 } })
            await safeStart({ scale: 1, transition: { duration: 0.1 } })
            if (!isMounted) return
            setIsScraping(true)

            // 5. Simulate Loading/Scraping
            await wait(800)

            // 6. Add to list
            if (!isMounted) return
            setSources(prev => [
                { type: 'link', name: 'https://agentergroup.com', size: '—', status: 'Inlärd', date: 'Just nu' },
                ...prev
            ])
            setIsScraping(false)
            setTypingText('')

            // 7. Fade out cursor
            await safeStart({ opacity: 0, transition: { duration: 0.5 } })

            // Wait before restart
            await wait(4000)
        }

        const LOOP_MS = 9000
        const runLoop = async () => {
            while (isMounted) {
                const startedAt = Date.now()
                await loop()
                const elapsed = Date.now() - startedAt
                const remaining = Math.max(0, LOOP_MS - elapsed)
                if (remaining > 0) {
                    await wait(remaining)
                }
            }
        }

        void runLoop()

        return () => {
            isMounted = false
        }
    }, [cursorControls, isInView, isPageVisible, shouldReduceMotion])

    return (
        <div ref={containerRef} className="w-full h-full flex items-center justify-center p-4 font-inter text-white">
            {/* The Dashboard Container */}
            <div className="relative w-full h-full max-h-[800px] bg-[#090909] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-sans">

                {/* Top Nav (Mock) */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0C0C0C]">
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/90">
                            <BrainCircuit size={16} className="text-[#FF5D00]" />
                            <span className="text-sm font-medium">Hjärnan</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 font-medium text-sm">
                            <PlugZap size={16} /> <span>Jobbet</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/40 font-medium text-sm">
                            <span>Regler</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                        <span>Widget</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col gap-8 bg-[#090909]">

                    {/* Header Text */}
                    <div>
                        <h3 className="text-lg font-medium text-white mb-1">Kunskapskällor</h3>
                        <p className="text-white/40 text-sm">Ladda upp filer eller läs in en hemsida så att Maja kan svara korrekt på frågor.</p>
                    </div>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Card 1: Upload (Inactive) */}
                        <div className="p-6 rounded-xl border border-white/5 bg-[#0F0F0F] hover:bg-[#141414] transition-colors flex flex-col gap-4 text-center items-center justify-center min-h-[200px] border-dashed">
                            <div className="w-12 h-12 rounded-full bg-[#FF5D00]/10 flex items-center justify-center mb-2">
                                <UploadCloud size={24} className="text-[#FF5D00]" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-medium text-white">Ladda upp filer</h4>
                                <p className="text-xs text-white/40">PDF, DOCX eller TXT</p>
                            </div>
                            <button className="mt-2 px-4 py-2 rounded-lg bg-white/5 text-xs font-medium hover:bg-white/10 transition-colors">Välj filer</button>
                        </div>

                        {/* Card 2: Paste Text (Inactive) */}
                        <div className="p-6 rounded-xl border border-white/5 bg-[#0F0F0F] flex flex-col gap-3 min-h-[200px]">
                            <div className="flex items-center gap-2 mb-2">
                                <FileText size={16} className="text-white/40" />
                                <h4 className="text-sm font-medium text-white">Klistra in text</h4>
                            </div>
                            <div className="w-full bg-[#1A1A1A] rounded-lg border border-white/5 h-8 px-3 flex items-center">
                                <span className="text-xs text-white/30">Titel (valfritt)</span>
                            </div>
                            <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-white/5 p-3">
                                <span className="text-xs text-white/30">Skriv eller klistra in text här...</span>
                            </div>
                            <button className="self-start px-4 py-1.5 rounded-lg bg-[#FF5D00]/20 text-[#FF5D00] text-xs font-medium">Spara text</button>
                        </div>

                        {/* Card 3: Website (Active Animation Target) */}
                        <div className="relative p-6 rounded-xl border border-white/10 bg-[#0F0F0F] flex flex-col gap-4 min-h-[200px] overflow-hidden group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div className="flex items-center gap-2 mb-1">
                                <Globe size={16} className="text-white/80" />
                                <h4 className="text-sm font-medium text-white">Läs in hemsida</h4>
                            </div>
                            <p className="text-xs text-white/40 mb-2">Klistra in en länk till din hemsida</p>

                            {/* Animated Input */}
                            <div className="relative w-full bg-[#1A1A1A] rounded-lg border border-white/10 h-10 px-3 flex items-center overflow-hidden">
                                <LinkIcon size={14} className="text-white/20 mr-2 flex-shrink-0" />
                                <span className="text-xs text-white/90 whitespace-nowrap">
                                    {typingText}<span className="animate-pulse">|</span>
                                </span>
                                {/* Cursor Simulation Anchor */}
                                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none" />
                            </div>

                            {/* Button */}
                            <button className={`
                                mt-auto self-start px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition-all
                                ${isScraping ? 'bg-white/10 text-white/50' : 'bg-[#FF5D00] text-black hover:bg-[#FF7A33]'}
                            `}>
                                {isScraping ? (
                                    <>Läser in...</>
                                ) : (
                                    <>Läs in</>
                                )}
                            </button>

                            {/* Cursor Overlay */}
                            <motion.div
                                animate={cursorControls}
                                initial={{ opacity: 0 }}
                                className="absolute z-50 pointer-events-none text-white drop-shadow-xl"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="black" strokeWidth="2" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>

                    {/* List Section */}
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-medium text-white/60 uppercase tracking-wider">Inlärda källor</h4>
                            <span className="text-xs text-white/30">{sources.length} källor</span>
                        </div>

                        {/* List Header */}
                        <div className="grid grid-cols-12 gap-4 px-4 text-xs text-white/30 pb-2 border-b border-white/5">
                            <div className="col-span-6">Källa</div>
                            <div className="col-span-2 text-center">Typ</div>
                            <div className="col-span-2">Storlek</div>
                            <div className="col-span-2">Status</div>
                        </div>

                        {/* Rows */}
                        <div className="space-y-1">
                            <AnimatePresence>
                                {sources.map((source, i) => (
                                    <motion.div
                                        key={source.name + i}
                                        initial={{ opacity: 0, y: -10, height: 0 }}
                                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                                        className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                                    >
                                        <div className="col-span-6 flex items-center gap-3 overflow-hidden">
                                            <div className="p-2 rounded bg-white/5 text-[#FF5D00]">
                                                {source.type === 'file' ? <FileText size={14} /> : <Globe size={14} />}
                                            </div>
                                            <div className="flex flex-col min-w-0">
                                                <span className="text-sm text-white/90 truncate font-medium">{source.name}</span>
                                                <span className="text-xs text-white/30">Uppladdad {source.date}</span>
                                            </div>
                                        </div>

                                        <div className="col-span-2 flex justify-center">
                                            <span className="text-[10px] uppercase font-bold text-white/20 bg-white/5 px-2 py-0.5 rounded-full">
                                                {source.type === 'file' ? 'FIL' : 'LÄNK'}
                                            </span>
                                        </div>

                                        <div className="col-span-2 text-xs text-white/50">{source.size}</div>

                                        <div className="col-span-2">
                                            <span className="inline-flex items-center gap-1 text-[10px] text-[#FF5D00] bg-[#FF5D00]/10 px-2 py-1 rounded-full border border-[#FF5D00]/20">
                                                {source.status}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
