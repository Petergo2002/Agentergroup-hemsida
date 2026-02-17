'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import useShouldReduceMotion from './useShouldReduceMotion'

const links = [
  { href: '/', label: 'AI Frontdesk' },
  { href: '/hemsidor', label: 'Hemsidor' },
]

export default function NavBar() {
  const shouldReduceMotion = useShouldReduceMotion()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -100 }}
        animate={shouldReduceMotion ? undefined : { y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className={`
             mx-auto flex items-center justify-between px-6 py-3 rounded-full 
             md:backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-300
             ${scrolled ? 'bg-black/80 max-w-2xl' : 'bg-transparent border-transparent max-w-full'}
          `}>

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              {/* Logo Image */}
              <div className="relative h-24 w-24">
                <img
                  src="/logo/logo.png"
                  alt="Agenter Group"
                  className="h-full w-full object-contain brightness-0 invert"
                  loading="eager"
                  decoding="async"
                  width="96"
                  height="96"
                  onError={(e) => { e.currentTarget.src = '/favicon/favicon-192x192.png' }}
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://dashboard.agentergroup.com/auth/login"
                className="ml-2 px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
              >
                Logga in
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 md:backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col gap-6 text-center">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-medium text-white hover:text-[#FF5D00] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://dashboard.agentergroup.com/auth/login"
                className="text-2xl font-medium text-white hover:text-[#FF5D00] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Logga in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
