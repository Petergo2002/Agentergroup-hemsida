import { Mail, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#FF5D00]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block group" aria-label="Till startsidan">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative bg-white/5 rounded-lg border border-white/10 p-1.5 overflow-hidden group-hover:border-[#FF5D00]/30 transition-colors">
                  <img
                    src="/favicon/favicon-192x192.png"
                    alt="Agenter Group Logo"
                    className="object-contain w-full h-full"
                    width="32"
                    height="32"
                  />
                </div>
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-white/90 transition-colors">
                  Agenter <span className="text-[#FF5D00]">Group</span>
                </span>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Vi skapar intelligenta AI-lösningar som automatiserar kundhantering och bokningar.
              Tillgänglighet dygnet runt, utan krångel.
            </p>
          </div>

          {/* Solutions Column - New to fill space */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Lösningar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  AI Frontdesk
                </Link>
              </li>
              <li>
                <Link href="/hemsidor" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  Hemsidor & Design
                </Link>
              </li>
              <li>
                <Link href="/#integrations" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  CRM-integrering
                </Link>
              </li>
              <li>
                <Link href="/#booking-cta" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  Mötesbokning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Företaget</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/blogg" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  Blogg & Insikter
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="text-sm text-white/60 hover:text-[#FF5D00] transition-colors flex items-center gap-2 w-fit">
                  Case
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@agentergroup.com" className="group flex items-center gap-3 text-sm text-white/60 hover:text-[#FF5D00] transition-colors w-fit">
                  <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#FF5D00]/10 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span>info@agentergroup.com</span>
                </a>
              </li>
              <li>
                <div className="group flex items-center gap-3 text-sm text-white/60">
                  <div className="p-2 rounded-full bg-white/5">
                    <MapPin size={14} />
                  </div>
                  <span>Borås, Sverige</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} Agenter Group AB. Alla rättigheter reserverade.
          </p>

          <div className="flex items-center gap-6">
            {/* Optional: Add simple policy links if needed in future, keeping it clean for now */}
            <span className="text-xs text-white/20">Driven av Maja AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
