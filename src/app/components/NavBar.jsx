'use client'
import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Smooth scroll to element with dynamic offset for fixed header (mobile + desktop)
const scrollToSection = (targetId) => {
  const cleanId = targetId.startsWith('/#') ? targetId.substring(1) : targetId;
  const element = document.querySelector(cleanId);
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const links = [
  { href: '#demo', label: 'Boka demo' },
  { href: '/blogg', label: 'Blogg', separator: true, external: true },
  { href: '/hemsidor', label: 'Hemsidor', external: true },
]

// Simplified links for mobile hamburger menu
const mobileLinks = [
  { href: '#demo', label: 'Boka demo' },
  { href: '/blogg', label: 'Blogg' },
  { href: '/hemsidor', label: 'Hemsidor' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [desktopOpen, setDesktopOpen] = useState(false)
  const lastScrollYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)

      // Hide/show navbar on scroll with small threshold
      const lastScrollY = lastScrollYRef.current
      const delta = currentScrollY - lastScrollY

      if (delta > 5 && currentScrollY > 10) {
        // Scrolling down
        setVisible(false)
      } else if (delta < -5 || currentScrollY <= 10) {
        // Scrolling up or close to the top
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
        <a href="#hero" className="flex-shrink-0 z-20">
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
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-200/80 transition z-30"
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
                    <div key={l.href}>
                      {l.separator && (
                        <div className="my-2 border-t border-gray-200/60"></div>
                      )}
                      <button
                        onClick={(e) => {
                          if (l.href.startsWith('/')) {
                            // Navigate to other pages like /blogg or /hemsidor
                            window.location.href = l.href
                          } else {
                            e.preventDefault()
                            scrollToSection(l.href)
                          }
                          setTimeout(() => setDesktopOpen(false), 250)
                        }}
                        className="w-full text-left px-4 py-3 rounded-lg text-gray-900 hover:bg-gray-200/80 transition-colors font-medium font-sans tracking-normal flex items-center justify-between group"
                      >
                        <span>{l.label}</span>
                        {l.external && (
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </button>
                    </div>
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
                {mobileLinks.map(l => (
                  <button
                    key={l.href}
                    onClick={(e) => {
                      if (l.href.startsWith('#') || l.href.startsWith('/#')) {
                        e.preventDefault()
                        scrollToSection(l.href)
                      } else {
                        window.location.href = l.href
                      }
                      setOpen(false)
                    }}
                    className="px-4 py-3 text-left text-gray-900 hover:bg-gray-200/80 transition-colors w-full text-base font-medium rounded-lg font-sans tracking-normal flex items-center justify-between"
                  >
                    <span>{l.label}</span>
                    {l.href.startsWith('/') && !l.href.startsWith('/#') && (
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </button>
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
