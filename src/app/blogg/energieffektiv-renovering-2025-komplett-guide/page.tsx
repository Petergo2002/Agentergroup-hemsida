import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Energieffektiv renovering 2025 – komplett guide | ByggFutur'
const description =
  'En praktisk guide till hur du renoverar energieffektivt 2025: isolering, fönster, värmepump, solceller och smart styrning – plus hur du planerar, budgeterar och maximerar avkastningen.'
const url = '/blogg/energieffektiv-renovering-2025-komplett-guide'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'energieffektiv renovering',
    'renovering 2025',
    'isolering',
    'fönsterbyte',
    'värmepump',
    'solceller',
    'smart hem',
    'ROT-avdrag',
    'bygg blogg',
    'ByggFutur',
    'energieffektivisering',
    'energirenovering',
    'byggföretag Stockholm',
    'renovera Stockholm',
    'byggentreprenör'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Energieffektiv renovering', 'Guide 2025']
  }
}

const PUBLISHED = '2025-08-31'
const UPDATED = '2025-08-31'

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
      name: 'ByggFutur AB'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ByggFutur AB'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Blogg',
        item: '/blogg'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Energieffektiv renovering 2025 – komplett guide',
        item: url
      }
    ]
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  )
}

export default function ArticlePage() {
  return (
    <main>
      <JsonLd />

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
        <div className="container py-20 md:py-28 relative">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link href="/blogg" className="hover:text-white">Blogg</Link>
            <span>›</span>
            <span className="text-white/80">Energieffektiv renovering 2025 – komplett guide</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mt-4">
            Guide
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Energieffektiv renovering 2025 – komplett guide
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Sänk dina energikostnader, öka komforten och framtidssäkra ditt hem i Stockholm. I den här guiden går vi igenom
            de mest effektiva åtgärderna – från isolering och fönster till värmepump, solceller och smart styrning. Utforska
            även <Link href="/#tjanster" className="underline decoration-white/30 hover:decoration-white">våra tjänster</Link>
            {' '}för rätt åtgärder i rätt ordning.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-secondary">Hem</Link>
            <Link href="/#offert" className="btn btn-primary">Begär offert</Link>
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
            {/* TOC */}
            <div className="glass rounded-2xl p-5 mb-8">
              <div className="font-semibold">Innehåll</div>
              <ul className="mt-3 space-y-1 text-white/70">
                <li><a href="#prioritera">Prioritera rätt – börja här</a></li>
                <li><a href="#atgarder">Viktiga åtgärder 2025</a></li>
                <li><a href="#stod">Stöd och avdrag</a></li>
                <li><a href="#budget">Budget & avkastning</a></li>
                <li><a href="#checklista">Checklista</a></li>
              </ul>
            </div>

            <h2 id="prioritera" className="font-display text-2xl md:text-3xl font-bold">Prioritera rätt – börja här</h2>
            <p className="text-white/80">
              Den billigaste kilowattimmen är den du aldrig använder. Därför bör du alltid börja med att minska energibehovet
              innan du investerar i ny produktion (t.ex. solceller). En typisk ordning är:
            </p>
            <ol className="list-decimal list-inside text-white/80 space-y-1">
              <li>Täta klimatskalet: isolering och fönster/dörrar</li>
              <li>Effektivisera uppvärmning: modern värmepump</li>
              <li>Styrning och mätning: smart termostat/energistyrning</li>
              <li>Produktion: solceller (och ev. batteri)</li>
            </ol>

            <h2 id="atgarder" className="mt-10 font-display text-2xl md:text-3xl font-bold">Viktiga åtgärder 2025</h2>

            <h3 className="mt-4 text-xl font-semibold">1) Isolering och klimatskal</h3>
            <p className="text-white/80">
              Tilläggsisolering av vind och fasad ger ofta störst effekt per krona. Se över köldbryggor, vindskydd och
              fuktbalans. Rätt utfört ger det jämnare inomhusklimat och lägre effektbehov vintertid.
            </p>

            <h3 className="mt-4 text-xl font-semibold">2) Energiglas och täta fönster</h3>
            <p className="text-white/80">
              Moderna 3-glasfönster med varmkant distans minskar värmeförluster och drag. Komplettera med korrekt justerade
              tätningslister och ventilationsstrategi för att säkerställa god luftkvalitet.
            </p>

            <h3 className="mt-4 text-xl font-semibold">3) Värmepump – rätt dimensionering</h3>
            <p className="text-white/80">
              En luft-vatten- eller bergvärmepump kan sänka uppvärmningskostnaderna avsevärt. Nyckeln är korrekt
              dimensionering utifrån husets effektbehov och befintligt radiatorsystem.
            </p>

            <h3 className="mt-4 text-xl font-semibold">4) Solceller och smart styrning</h3>
            <p className="text-white/80">
              Solceller i kombination med smart styrning (t.ex. lastbalansering, tidsstyrd uppvärmning och varmvatten) ökar
              egenanvändningen och kortar återbetalningstiden. Ett mindre batteri kan ge extra flexibilitet.
            </p>

            <div className="glass rounded-xl p-5 mt-6 border border-white/10">
              <div className="font-semibold text-brand-300">Tips</div>
              <p className="text-white/80 mt-1">
                Börja med en energikartläggning. En kort besiktning identifierar var du får bäst effekt. Vi hjälper dig gärna
                att prioritera åtgärder efter budget och mål.
              </p>
            </div>

            <h2 id="stod" className="mt-10 font-display text-2xl md:text-3xl font-bold">Stöd och avdrag</h2>
            <p className="text-white/80">
              Kontrollera aktuella svenska stöd och avdrag för 2025 innan du startar projektet. Exempelvis kan ROT-avdrag och
              avdrag för grön teknik vara aktuella för vissa åtgärder. Regler och nivåer uppdateras över tid – säkerställ
              alltid villkor hos Skatteverket och din kommun.
            </p>

            <h2 id="budget" className="mt-10 font-display text-2xl md:text-3xl font-bold">Budget & avkastning</h2>
            <p className="text-white/80">
              Titta på både investeringskostnad och driftbesparing. En vanlig strategi är att kombinera åtgärder med kort
              återbetalning (t.ex. tätning/isolering) med långsiktiga investeringar (t.ex. värmepump och solceller) för en
              balanserad helhet.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-white/60">Kort sikt</div>
                <div className="font-semibold">Tätning & isolering</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-white/60">Medellång sikt</div>
                <div className="font-semibold">Värmepump</div>
              </div>
              <div className="glass rounded-xl p-4">
                <div className="text-sm text-white/60">Lång sikt</div>
                <div className="font-semibold">Solceller + styrning</div>
              </div>
            </div>

            <h2 id="checklista" className="mt-10 font-display text-2xl md:text-3xl font-bold">Checklista innan start</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Mål: kostnad, komfort, klimat – vad prioriterar du?</li>
              <li>Byggnadens skick: läckage, fukt, ventilation, el</li>
              <li>Energi: årsanvändning, effekttoppar, elnätsabonnemang</li>
              <li>Budget och tidsplan</li>
              <li>Offerter från behöriga entreprenörer</li>
            </ul>

            {/* CTA */}
            <div className="glass rounded-2xl p-6 mt-10 border border-white/10">
              <div className="font-semibold text-lg">Redo att energieffektivisera ditt hem?</div>
              <p className="text-white/80 mt-1">
                Vi hjälper dig från idé till färdig installation – tryggt, snyggt och hållbart.
              </p>
              <a href="/#offert" className="btn btn-primary mt-4">Begär offert</a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Snabbfakta</div>
              <ul className="mt-3 text-white/70 space-y-1 text-sm">
                <li>Guiden uppdaterad: {new Date(UPDATED).toLocaleDateString('sv-SE')}</li>
                <li>Svårighetsgrad: Medel</li>
                <li>Passar: Villa, radhus, BRF</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Relaterade ämnen</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li><a className="hover:text-white" href="#atgarder">Viktiga åtgärder</a></li>
                <li><a className="hover:text-white" href="#stod">Stöd och avdrag</a></li>
                <li><a className="hover:text-white" href="#budget">Budget & avkastning</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
