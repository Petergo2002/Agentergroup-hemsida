'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#tjanster', label: 'Tjänster' },
  { href: '#omoss', label: 'Om oss' },
  { href: '#omraden', label: 'Områden' },
  { href: '#omdomen', label: 'Omdömen' },
  { href: '/#offert', label: 'Begär offert' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 ${scrolled ? 'glass' : 'bg-transparent'}`}
    >
      <div className="container flex items-center justify-center h-16 relative">
        <a href="#hero" className="flex items-center gap-2 font-extrabold tracking-tight absolute left-4 md:left-8">
          <div className="h-8 w-8 rounded-md bg-brand-600 grid place-items-center shadow-soft">
            <span className="text-white text-sm">BF</span>
          </div>
          <span className="text-white/90 hidden sm:inline">Bygg<span className="text-white/70 hover:text-brand-400 transition-colors">Futur</span></span>
        </a>

        <div className="hidden md:flex items-center justify-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a href="tel:+46123456789" className="hidden md:flex items-center gap-2 text-white/80 hover:text-white transition-colors absolute right-4 md:right-8">
          <Phone size={18} />
          <span className="hidden lg:inline">012-345 67 89</span>
        </a>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/10 absolute right-4" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="glass rounded-xl p-4 flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href="/#offert" onClick={() => setOpen(false)} className="btn btn-primary flex-1">Offert</a>
                <a href="tel:+46123456789" className="btn btn-secondary flex-1">Ring oss</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
