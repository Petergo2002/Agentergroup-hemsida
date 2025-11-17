'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'AI-Receptionist' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/#demo', label: 'Boka demo' },
]

export default function NavBarSimple() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [desktopOpen, setDesktopOpen] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)

      const lastScrollY = lastScrollYRef.current
      const delta = currentScrollY - lastScrollY

      if (delta > 5 && currentScrollY > 10) {
        // Scrolling nedåt
        setVisible(false)
      } else if (delta < -5 || currentScrollY <= 10) {
        // Scrolling uppåt eller nära toppen
        setVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ 
        y: visible ? 0 : -80,
        opacity: visible ? 1 : 0,
        transition: { duration: 0.3, ease: 'easeInOut' }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans`}
      style={{
        borderBottom: 'none',
        boxShadow: 'none',
        background: 'transparent'
      }}
    >
      <div className="container mx-auto h-20 px-5 max-w-7xl flex items-center justify-center">
        <div className="relative flex items-center justify-between w-full md:w-auto gap-3 md:gap-5 bg-white/95 backdrop-blur-md rounded-full border border-black/5 shadow-sm px-4 md:px-6 py-2 md:min-w-[520px]">
          <a href="/" className="flex-shrink-0 z-20">
            <div className="relative h-11 w-11 md:h-16 md:w-16">
              <img 
                src="/logo/ChatGPT%20Image%20Nov%2017%2C%202025%2C%2001_29_34%20PM.png" 
                alt="Agenter Group" 
                className="h-full w-full object-contain transform scale-[1.1] md:scale-[1.15]"
                style={{ transformOrigin: 'center' }}
                onError={(e) => { e.currentTarget.src = '/favicon/favicon-192x192%202.png' }}
              />
            </div>
          </a>

          {/* Desktop side menu toggle with attached dropdown */}
          <div className="hidden md:block relative">
            <button
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:text-brand-600 hover:bg-gray-100/60 transition z-30"
              onClick={(e) => {
                e.preventDefault();
                setDesktopOpen(v => !v);
              }}
              aria-label="Öppna meny"
              aria-expanded={desktopOpen}
            >
              {desktopOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="font-medium">Meny</span>
            </button>

            <AnimatePresence>
              {desktopOpen && (
                <motion.aside
                  key="panel"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: 'easeInOut' }}
                  className="absolute right-0 top-full mt-1 w-72 flex-col rounded-2xl bg-white/95 backdrop-blur-md border border-black/5 shadow-lg"
                  style={{ zIndex: 60 }}
                  aria-label="Sidomeny"
                >
                  <div className="p-2">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setTimeout(() => setDesktopOpen(false), 250)}
                        className="block w-full text-left px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors font-medium font-sans tracking-normal"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button 
            className="md:hidden p-2 -mr-2 text-gray-700 z-30 focus:outline-none" 
            onClick={(e) => {
              e.preventDefault();
              setOpen(v => !v);
            }} 
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* Mobile dropdown - right aligned within pill container */}
          <AnimatePresence mode="wait">
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: 'easeInOut' }}
                className="md:hidden absolute right-2 top-full mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-black/5 shadow-lg overflow-hidden min-w-60"
                style={{ zIndex: 60 }}
              >
                <div className="p-2 flex flex-col">
                  {links.map(l => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-left text-gray-800 hover:bg-gray-100 transition-colors w-full text-base font-medium rounded-lg font-sans tracking-normal"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  )
}
