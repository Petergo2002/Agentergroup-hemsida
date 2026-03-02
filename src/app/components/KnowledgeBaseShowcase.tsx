'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { UploadCloud, FileText, Globe, BrainCircuit, Link as LinkIcon, PlugZap } from 'lucide-react'
import useShouldReduceMotion from './useShouldReduceMotion'
import usePageVisibility from './usePageVisibility'

const initialSources = [
  { type: 'file', name: 'Company_Policy_2024.pdf', size: '2.3 MB', status: 'Learned', date: '2/2/2026' },
  { type: 'file', name: 'Service_Pricing_Q1.xlsx', size: '152 KB', status: 'Learned', date: '1/30/2026' },
  { type: 'link', name: 'https://agentergroup.com/about', size: '--', status: 'Learned', date: '1/25/2026' },
]

export default function KnowledgeBaseShowcase() {
  const shouldReduceMotion = useShouldReduceMotion(true)
  const isPageVisible = usePageVisibility()
  const [sources, setSources] = useState(initialSources)
  const [typingText, setTypingText] = useState('')
  const [isScraping, setIsScraping] = useState(false)
  const cursorControls = useAnimation()

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: '0px 0px -200px 0px' })
  const shouldRunAnimation = !shouldReduceMotion && isInView && isPageVisible
  const displaySources = shouldRunAnimation ? sources : initialSources
  const displayTypingText = shouldRunAnimation ? typingText : ''
  const displayIsScraping = shouldRunAnimation ? isScraping : false

  useEffect(() => {
    if (shouldRunAnimation) return
    try {
      cursorControls.stop()
      cursorControls.set({ opacity: 0, x: 200, y: 300, scale: 1 })
    } catch {
      // no-op
    }
  }, [cursorControls, shouldRunAnimation])

  useEffect(() => {
    if (!shouldRunAnimation) return

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
        // no-op
      }
    }
    const safeStart = async (definition: Parameters<typeof cursorControls.start>[0]) => {
      if (!isMounted) return
      try {
        await cursorControls.start(definition)
      } catch {
        // no-op
      }
    }

    const loop = async () => {
      if (!isMounted) return

      setTypingText('')
      setIsScraping(false)
      setSources(initialSources)
      safeSet({ opacity: 0, x: 200, y: 300 })

      await wait(1000)
      if (!isMounted) return
      await waitForNextPaint()
      if (!isMounted) return

      await safeStart({ opacity: 1, x: 300, y: 250, transition: { duration: 0 } })
      await safeStart({ x: 50, y: -20, transition: { duration: 1, ease: 'easeOut' } })

      const urlToType = 'https://agentergroup.com'
      for (let i = 0; i < urlToType.length; i += 1) {
        if (!isMounted) return
        setTypingText((prev) => prev + urlToType[i])
        await wait(50 + Math.random() * 50)
      }

      await safeStart({ x: 50, y: 60, transition: { duration: 0.6, ease: 'easeInOut' } })
      await safeStart({ scale: 0.8, transition: { duration: 0.1 } })
      await safeStart({ scale: 1, transition: { duration: 0.1 } })
      if (!isMounted) return
      setIsScraping(true)

      await wait(800)

      if (!isMounted) return
      setSources((prev) => [{ type: 'link', name: 'https://agentergroup.com', size: '--', status: 'Learned', date: 'Just now' }, ...prev])
      setIsScraping(false)
      setTypingText('')

      await safeStart({ opacity: 0, transition: { duration: 0.5 } })
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
  }, [cursorControls, shouldRunAnimation])

  return (
    <div ref={containerRef} className="w-full min-h-[620px] md:min-h-[760px] flex items-center justify-center p-4 font-inter text-white">
      <div className="relative w-full bg-[#090909] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col font-sans min-h-[620px] md:min-h-[760px]">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/5 bg-[#0C0C0C]">
          <div className="flex gap-2 md:gap-8 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-white/90 whitespace-nowrap">
              <BrainCircuit size={16} className="text-[#FF5D00]" />
              <span className="text-sm font-medium">Brain</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/40 font-medium text-sm whitespace-nowrap">
              <PlugZap size={16} /> <span>Workflows</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/40 font-medium text-sm whitespace-nowrap">
              <span>Rules</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-white/40 text-sm">
            <span>Widget</span>
          </div>
        </div>

        <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col gap-6 md:gap-8 bg-[#090909]">
          <div>
            <h3 className="text-base md:text-lg font-medium text-white mb-1">Knowledge Sources</h3>
            <p className="text-sm md:text-sm text-white/40 leading-relaxed">Upload files or crawl your website so Maja can answer accurately.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="p-6 md:p-8 rounded-xl border border-white/5 bg-[#0F0F0F] hover:bg-[#141414] transition-colors flex flex-col gap-4 text-center items-center justify-center min-h-[200px] border-dashed">
              <div className="w-12 h-12 rounded-full bg-[#FF5D00]/10 flex items-center justify-center mb-2">
                <UploadCloud size={24} className="text-[#FF5D00]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-white">Upload files</h4>
                <p className="text-xs text-white/40">PDF, DOCX, or TXT</p>
              </div>
              <button className="mt-2 px-6 py-3 md:px-4 md:py-2 h-11 md:h-auto rounded-lg bg-white/5 text-sm md:text-xs font-medium hover:bg-white/10 transition-colors">Choose files</button>
            </div>

            <div className="p-6 md:p-8 rounded-xl border border-white/5 bg-[#0F0F0F] flex flex-col gap-3 min-h-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-white/40" />
                <h4 className="text-sm font-medium text-white">Paste text</h4>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-lg border border-white/5 h-11 md:h-8 px-3 flex items-center">
                <span className="text-sm md:text-xs text-white/30">Title (optional)</span>
              </div>
              <div className="flex-1 bg-[#1A1A1A] rounded-lg border border-white/5 p-3 min-h-[80px]">
                <span className="text-sm md:text-xs text-white/30">Paste your text here...</span>
              </div>
              <button className="self-start px-6 py-3 md:px-4 md:py-1.5 h-11 md:h-auto rounded-lg bg-[#FF5D00]/20 text-[#FF5D00] text-sm md:text-xs font-medium">Save text</button>
            </div>

            <div className="relative p-6 md:p-8 rounded-xl border border-white/10 bg-[#0F0F0F] flex flex-col gap-4 min-h-[200px] overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center gap-2 mb-1">
                <Globe size={16} className="text-white/80" />
                <h4 className="text-sm font-medium text-white">Crawl website</h4>
              </div>
              <p className="text-xs text-white/40 mb-2">Paste a URL to ingest your site content</p>

              <div className="relative w-full bg-[#1A1A1A] rounded-lg border border-white/10 h-11 md:h-10 px-3 flex items-center overflow-hidden">
                <LinkIcon size={14} className="text-white/20 mr-2 flex-shrink-0" />
                <span className="text-sm md:text-xs text-white/90 whitespace-nowrap">
                  {displayTypingText}
                  <span className="animate-pulse">|</span>
                </span>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#1A1A1A] to-transparent pointer-events-none" />
              </div>

              <button
                className={`
                  mt-auto self-start px-6 py-3 md:px-4 md:py-2 h-11 md:h-auto rounded-lg text-sm md:text-xs font-medium flex items-center gap-2 transition-all
                  ${displayIsScraping ? 'bg-white/10 text-white/50' : 'bg-[#FF5D00] text-black hover:bg-[#FF7A33]'}
                `}
              >
                {displayIsScraping ? 'Crawling...' : 'Crawl website'}
              </button>

              <motion.div animate={cursorControls} initial={{ opacity: 0 }} className="absolute z-50 pointer-events-none text-white drop-shadow-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="currentColor" stroke="black" strokeWidth="2" />
                </svg>
              </motion.div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs md:text-xs font-medium text-white/60 uppercase tracking-wider">Learned sources</h4>
              <span className="text-xs text-white/30">{displaySources.length} sources</span>
            </div>

            <div className="md:hidden space-y-3">
              <AnimatePresence>
                {displaySources.map((source, i) => (
                  <motion.div key={source.name + i} initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="p-2 rounded bg-white/5 text-[#FF5D00] flex-shrink-0">{source.type === 'file' ? <FileText size={16} /> : <Globe size={16} />}</div>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm text-white/90 font-medium truncate">{source.name}</span>
                          <span className="text-xs text-white/30">Uploaded {source.date}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#FF5D00] bg-[#FF5D00]/10 px-2 py-1 rounded-full border border-[#FF5D00]/20 whitespace-nowrap flex-shrink-0">
                        {source.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="hidden md:block">
              <div className="grid grid-cols-12 gap-4 px-4 text-xs text-white/30 pb-2 border-b border-white/5">
                <div className="col-span-6">Source</div>
                <div className="col-span-2 text-center">Type</div>
                <div className="col-span-2">Size</div>
                <div className="col-span-2">Status</div>
              </div>

              <div className="space-y-1">
                <AnimatePresence>
                  {displaySources.map((source, i) => (
                    <motion.div key={source.name + i} initial={{ opacity: 0, y: -10, height: 0 }} animate={{ opacity: 1, y: 0, height: 'auto' }} className="grid grid-cols-12 gap-4 items-center p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                      <div className="col-span-6 flex items-center gap-3 overflow-hidden">
                        <div className="p-2 rounded bg-white/5 text-[#FF5D00]">{source.type === 'file' ? <FileText size={14} /> : <Globe size={14} />}</div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm text-white/90 truncate font-medium">{source.name}</span>
                          <span className="text-xs text-white/30">Uploaded {source.date}</span>
                        </div>
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <span className="text-[10px] uppercase font-bold text-white/20 bg-white/5 px-2 py-0.5 rounded-full">{source.type === 'file' ? 'FILE' : 'LINK'}</span>
                      </div>

                      <div className="col-span-2 text-xs text-white/50">{source.size}</div>

                      <div className="col-span-2">
                        <span className="inline-flex items-center gap-1 text-[10px] text-[#FF5D00] bg-[#FF5D00]/10 px-2 py-1 rounded-full border border-[#FF5D00]/20">{source.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
