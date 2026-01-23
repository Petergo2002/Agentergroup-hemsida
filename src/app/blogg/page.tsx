import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blogg – Agenter Group',
  description:
    'Guider och insikter om AI‑receptionister, automatisering, kundservice, säkerhet och implementering. Lär dig hur ni bokar fler möten och ger bättre service – dygnet runt.',
  keywords: [
    'AI receptionist',
    'AI kundservice',
    'mötesbokning automatisk',
    'GDPR AI',
    'säker datahantering',
    'Agenter Group',
  ],
  alternates: { canonical: '/blogg' },
  openGraph: {
    title: 'Blogg – Agenter Group',
    description:
      'Guider och insikter om AI‑receptionister, automatisering, kundservice, säkerhet och implementering.',
    url: '/blogg',
    type: 'website'
  }
}

export default function BlogIndexPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container py-24 md:py-32 relative">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300">
            Vår kunskapsbank
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1.04] tracking-tight">
            Blogg
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Praktiska guider för dig som vill förbättra kundservice och bokningar med AI. Utforska{' '}
            <Link href="/#funktioner" className="underline decoration-white/30 hover:decoration-white">våra funktioner</Link>{' '}
            och lär dig hur en AI‑receptionist kan avlasta teamet, boka fler möten och höja kundnöjdheten.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-secondary">Hem</Link>
            <Link href="/#demo" className="btn btn-primary">Boka demo</Link>
          </div>
        </div>
      </section>

      {/* Posts list */}
      <section className="section">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article: AI-telefonist vs Knappval */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Jämförelse</span>
              <span className="text-white/50">24 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/ai-telefonist-vs-knappval">
                AI-telefonist vs Knappval: Varför det är dags att skrota &quot;Tryck 1&quot;
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Trött på krångliga knappval? Upptäck hur en AI-telefonist ger snabbare hjälp och nöjdare kunder.
            </p>
            <div className="mt-4">
              <Link href="/blogg/ai-telefonist-vs-knappval" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Article: Hemsida med AI-integration */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Trend</span>
              <span className="text-white/50">22 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/hemsida-med-ai-integration">
                Hemsida med AI-integration: Framtidens kundservice
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Din hemsida är ditt digitala skyltfönster. Lär dig hur du förvandlar den till en säljande assistent med AI.
            </p>
            <div className="mt-4">
              <Link href="/blogg/hemsida-med-ai-integration" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Article: Mötesbokning 24/7 */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Guide</span>
              <span className="text-white/50">22 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning">
                Mötesbokning 24/7: Guide till AI-driven schemaläggning
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Låt kunderna boka möten när det passar dem. En guide till automatisk schemaläggning.
            </p>
            <div className="mt-4">
              <Link href="/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Article: Så automatiserar du telefonhantering */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Guide</span>
              <span className="text-white/50">22 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter">
                Så automatiserar du telefonhantering med AI-agenter
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Steg för steg-guide: Från val av lösning till implementation och optimering.
            </p>
            <div className="mt-4">
              <Link href="/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Article: AI vs Traditionell */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Jämförelse</span>
              <span className="text-white/50">22 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/ai-receptionist-vs-traditionell-receptionist">
                AI-receptionist vs Traditionell receptionist
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Vi jämför kostnader, tillgänglighet och funktioner för att hjälpa dig välja rätt.
            </p>
            <div className="mt-4">
              <Link href="/blogg/ai-receptionist-vs-traditionell-receptionist" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Existing Article: Missa aldrig ett samtal */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Insikt</span>
              <span className="text-white/50">21 jan 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/varfor-foretag-missar-samtal">
                Varför Företag Missar 34% av Jobbmöjligheter
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Upptäck varför missade samtal kostar företag enorma summor och hur AI-receptionister kan lösa problemet.
            </p>
            <div className="mt-4">
              <Link href="/blogg/varfor-foretag-missar-samtal" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>

          {/* Existing Article: AI-receptionist 2025 guide */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Guide</span>
              <span className="text-white/50">3 sep 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/ai-receptionist-2025-komplett-guide">
                AI‑receptionist 2025 – komplett guide
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Allt du behöver för att komma igång: implementation, systemkopplingar, säkerhet, GDPR och hur du mäter effekt.
            </p>
            <div className="mt-4">
              <Link href="/blogg/ai-receptionist-2025-komplett-guide" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
