import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
      <div className="container grid md:grid-cols-3 gap-10 items-start">
        <div>
          <a href="#hero" className="flex items-center gap-2 font-extrabold tracking-tight">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-white border-2 border-white/80 p-1.5 shadow">
              <img 
                src="/favicon/favicon-192x192.png" 
                alt="Agenter Group Favicon" 
                className="h-full w-full object-contain"
              />
            </div>
          </a>
          <p className="mt-4 text-white/70 max-w-sm">
            Vi hjälper er att aldrig missa ett samtal. Vår AI‑receptionist bokar möten, svarar på frågor och tar emot kunder 24/7.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-white/80 font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#funktioner" className="hover:text-white">Funktioner</a></li>
              <li><a href="#omoss" className="hover:text-white">Om oss</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#process" className="hover:text-white">Process</a></li>
              <li><a href="/#demo" className="hover:text-white">Boka demo</a></li>
              <li><a href="/hemsidor" className="hover:text-white">Hemsidor</a></li>
              <li><a href="/blogg" className="hover:text-white">Blogg</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white/80 font-semibold">Kontakt</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li className="flex gap-2 items-center"><Mail size={16}/> info@agentergroup.com</li>
              <li className="flex gap-2 items-center"><MapPin size={16}/> Borås, Sverige</li>
            </ul>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold">Redo att se en demo?</div>
          <p className="mt-2 text-white/70">Boka en kostnadsfri demo – vi visar hur AI‑receptionisten fungerar för er.</p>
          <a href="/#demo" className="btn btn-primary mt-4">Boka demo</a>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-white/10 text-sm text-white/50">
        <div>© {new Date().getFullYear()} Agenter Group. Alla rättigheter reserverade.</div>
      </div>
    </footer>
  )
}
