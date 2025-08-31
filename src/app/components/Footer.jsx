import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-16 pb-10 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
      <div className="container grid md:grid-cols-3 gap-10 items-start">
        <div>
          <a href="#hero" className="flex items-center gap-2 font-extrabold tracking-tight">
            <div className="h-8 w-8 rounded-md bg-brand-600 grid place-items-center shadow-soft">
              <span className="text-white text-sm">BF</span>
            </div>
            <span className="text-white/90">Bygg<span className="text-white/70 hover:text-brand-400 transition-colors">Futur</span></span>
          </a>
          <p className="mt-4 text-white/70 max-w-sm">
            Vi skapar hållbara och vackra byggprojekt – från idé till färdigt resultat.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-white/80 font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#tjanster" className="hover:text-white">Tjänster</a></li>
              <li><a href="#omoss" className="hover:text-white">Om oss</a></li>
              <li><a href="#omdomen" className="hover:text-white">Omdömen</a></li>
              <li><a href="/#offert" className="hover:text-white">Begär offert</a></li>
              <li><a href="/blogg" className="hover:text-white">Blogg</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white/80 font-semibold">Kontakt</div>
            <ul className="mt-3 space-y-2 text-white/70">
              <li className="flex gap-2 items-center"><Phone size={16}/> 012-345 67 89</li>
              <li className="flex gap-2 items-center"><Mail size={16}/> offert@byggfutur.se</li>
              <li className="flex gap-2 items-center"><MapPin size={16}/> Stockholm, Sverige</li>
            </ul>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <div className="font-semibold">Redo att börja?</div>
          <p className="mt-2 text-white/70">Skicka en offertförfrågan så hör vi av oss inom 24 timmar.</p>
          <a href="/#offert" className="btn btn-primary mt-4">Begär offert</a>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-white/10 text-sm text-white/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} ByggFutur AB. Alla rättigheter reserverade.</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Integritet</a>
          <a href="#" className="hover:text-white">Cookies</a>
          <a href="#" className="hover:text-white">Villkor</a>
        </div>
      </div>
    </footer>
  )
}
