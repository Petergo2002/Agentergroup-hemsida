import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för fastighetsbranschen: Effektivare förvaltning och fler affärer | Agenter Group'
const description =
  'Optimera din fastighetsverksamhet med en AI-receptionist. Automatisera bokning av visningar, hantera felanmälan dygnet runt och missa aldrig en affärsmöjlighet.'
const url = '/blogg/ai-receptionist-for-fastighetsbranschen'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist fastighetsmäklare',
    'telefonpassning fastighetsjour',
    'felanmälan fastighet',
    'bokningssystem visning',
    'AI kundtjänst fastighetsbolag',
    'Agenter Group',
    'effektivisering fastighetsförvaltning'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Fastighet', 'Mäklare', 'Förvaltning', 'AI-lösningar']
  }
}

const PUBLISHED = '2025-01-28'
const UPDATED = '2025-01-28'

function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: PUBLISHED,
    dateModified: UPDATED,
    author: {
      '@type': 'Organization',
      name: 'Agenter Group AB'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agenter Group AB'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.agentergroup.se${url}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default function BlogPost() {
  return (
    <main>
      <JsonLd />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container py-20 md:py-28 relative">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link href="/blogg" className="hover:text-white">Blogg</Link>
            <span>›</span>
            <span className="text-white/80">AI-receptionist för fastighetsbranschen</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mt-4">
            Fastighet & Förvaltning
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            AI-receptionist för fastighetsbranschen: Effektivare förvaltning och fler affärer
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Oavsett om du säljer bostäder eller förvaltar fastigheter är tillgänglighet nyckeln. Låt AI hantera visningsbokningar och felanmälan dygnet runt.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-secondary">Hem</Link>
            <Link href="/#demo" className="btn btn-primary">Boka demo</Link>
          </div>
          <div className="mt-4 text-xs text-white/50">
            Publicerad {new Date(PUBLISHED).toLocaleDateString('sv-SE')} · Uppdaterad {new Date(UPDATED).toLocaleDateString('sv-SE')}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Article body */}
          <article className="prose prose-invert max-w-none">
            {/* Lead paragraph */}
            <p className="lead text-xl text-white/90">
              Fastighetsbranschen sover aldrig. Intressenter letar bostad på kvällarna, och hyresgäster upptäcker vattenläckor på helgerna.
              För mäklare och fastighetsförvaltare innebär detta en ständig balansgång mellan att vara tillgänglig och att få arbetsro.
              En AI-receptionist kan vara lösningen som ger dig både och.
            </p>

            <p className="text-white/80">
              Genom att integrera en intelligent röstassistent i din verksamhet kan du säkerställa att varje samtal besvaras professionellt, oavsett tid på dygnet.
              Det handlar inte bara om att ta emot meddelanden – det handlar om att lösa ärenden direkt.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">För Mäklare: Missa aldrig en spekulant</h2>
            <p className="text-white/80">
              Som fastighetsmäklare är du ofta upptagen i möten, visningar eller kontraktsskrivning. Samtidigt ringer telefonen varm.
              Varje missat samtal kan vara en potentiell köpare eller säljare som går vidare till en konkurrent.
            </p>
            <div className="glass rounded-xl p-6 border border-white/10 my-6">
              <h3 className="font-bold text-lg text-white mb-2">Så hjälper AI dig sälja mer:</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li><strong>Boka visningar:</strong> AI:n har tillgång till din kalender och kan boka in intressenter på öppna eller privata visningar direkt.</li>
                <li><strong>Objektinformation:</strong> &quot;Vad är driftkostnaden för Storgatan 1?&quot; AI:n kan svara på detaljfrågor om dina objekt genom att läsa av dina beskrivningar.</li>
                <li><strong>Lead-kvalificering:</strong> Innan samtalet kopplas vidare eller loggas kan AI:n ställa frågor om finansiering och tidsplan, så du vet vilka som är heta leads.</li>
              </ul>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">För Förvaltning: Effektivare felanmälan</h2>
            <p className="text-white/80">
              Fastighetsförvaltning handlar till stor del om service. Hyresgäster förväntar sig snabba svar när något går sönder.
              Men att ha personal som svarar i telefon dygnet runt är kostsamt. Många jourtjänster är dyra och har dålig insyn i era specifika system.
            </p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Smart triage av ärenden</h3>
            <p className="text-white/80">
              En AI-receptionist kan tränas att bedöma allvaret i ett samtal.
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-1 mt-2">
              <li><strong>Akut (Vattenläcka/Elfel):</strong> AI:n kopplar samtalet direkt till jourhavande tekniker eller skickar larm via SMS.</li>
              <li><strong>Icke-akut (Droppande kran):</strong> AI:n tar emot felanmälan, skapar ett ärende i ert fastighetssystem och informerar hyresgästen om att det hanteras under kontorstid.</li>
              <li><strong>Admin (Hyresavi/Parkering):</strong> AI:n svarar på vanliga frågor eller hänvisar till &quot;Mina sidor&quot;.</li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Jämförelse: AI vs Traditionell Jour</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-white/80 border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 font-semibold text-white">Funktion</th>
                    <th className="py-3 pr-4 font-semibold text-white">Traditionell Jour</th>
                    <th className="py-3 font-semibold text-brand-300">AI-Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Kostnad</td>
                    <td className="py-3 pr-4">Hög startavgift + per samtal</td>
                    <td className="py-3 text-brand-200">Fast låg månadskostnad</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Systemintegration</td>
                    <td className="py-3 pr-4">Ingen/Låg (Mailar ofta bara)</td>
                    <td className="py-3 text-brand-200">Full (Skapar ärenden direkt)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Svarstid</td>
                    <td className="py-3 pr-4">Köbildning vanlig</td>
                    <td className="py-3 text-brand-200">Svarar direkt</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Kunskap om objekt</td>
                    <td className="py-3 pr-4">Generell</td>
                    <td className="py-3 text-brand-200">Specifik för era fastigheter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">En modern kundupplevelse</h2>
            <p className="text-white/80">
              Dagens kunder är vana vid digitala tjänster. Att mötas av en smart AI som faktiskt kan lösa problemet direkt upplevs ofta som mer positivt än att hamna i en telefonkö eller en röstbrevlåda.
              Dessutom kan AI:n hantera flera språk, vilket är en enorm tillgång i många bostadsområden.
            </p>

            <div className="glass rounded-2xl p-6 mt-10 border border-white/10">
              <div className="font-semibold text-lg">Redo att effektivisera er hantering?</div>
              <p className="text-white/80 mt-1">
                Boka en demo så visar vi hur en AI-receptionist kan skräddarsys för just ert mäkleri eller fastighetsbolag.
              </p>
              <Link href="/#demo" className="btn btn-primary mt-4">Boka demo</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Snabbfakta</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Passar:</span>
                  <span className="text-white">Mäklare, Förvaltare, BRF</span>
                </li>
                <li className="flex justify-between">
                  <span>Tillgänglighet:</span>
                  <span className="text-white">24/7/365</span>
                </li>
                <li className="flex justify-between">
                  <span>Integrationer:</span>
                  <span className="text-white">Vitec, FasAd, Momentum m.fl.*</span>
                </li>
              </ul>
              <p className="text-xs text-white/40 mt-2">*via API/anpassning</p>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Relaterat</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li>
                  <Link href="/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning" className="hover:text-white flex items-center gap-2">
                    <span>→</span> Automatisk bokning
                  </Link>
                </li>
                <li>
                  <Link href="/blogg/varfor-foretag-missar-samtal" className="hover:text-white flex items-center gap-2">
                    <span>→</span> Missade samtal
                  </Link>
                </li>
                <li>
                  <Link href="/#demo" className="hover:text-white flex items-center gap-2">
                    <span>→</span> Boka demo
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
