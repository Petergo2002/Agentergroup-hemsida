import { Shield, Lock, KeyRound } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900/90" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '22px 22px'
        }} />
      </div>

      <div className="container px-4 mx-auto relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            SÄKERHET I FOKUS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 mb-4">
            Er Säkerhet, Vår Prioritet
          </h2>
          <p className="text-white/70 text-lg">
            Vi bygger med säkerhet först. Dataskydd, konfidentialitet och regelefterlevnad är grundkrav i varje implementation.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="glass p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-300 grid place-items-center mb-4">
              <Shield size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Strikt konfidentialitet</h3>
            <p className="text-white/70">All kundinformation hanteras under strikt konfidentialitet och delas aldrig utanför överenskomna ramar.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-300 grid place-items-center mb-4">
              <Lock size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-2">GDPR‑uppfyllande dataskydd</h3>
            <p className="text-white/70">Vi följer GDPR och bästa praxis för personuppgiftshantering, inklusive samtycke, ändamålsbegränsning och dataminimering.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-300 grid place-items-center mb-4">
              <KeyRound size={22} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Säker lagring & överföring</h3>
            <p className="text-white/70">Data lagras och överförs krypterat. Åtkomst loggas och granskas för att förebygga obehörig användning.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
