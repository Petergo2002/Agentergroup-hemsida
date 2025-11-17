import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI‑receptionist 2025 – komplett guide | Agenter Group'
const description =
  'En praktisk guide till hur du inför en AI‑receptionist: implementering, systemkopplingar (kalender/CRM/telefoni), säkerhet & GDPR, mätning och uppföljning.'
const url = '/blogg/ai-receptionist-2025-komplett-guide'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist',
    'AI kundservice',
    'mötesbokning',
    'telefoni koppling AI',
    'GDPR AI',
    'säker datahantering',
    'Agenter Group'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['AI‑receptionist', 'Implementering', 'Säkerhet']
  }
}

const PUBLISHED = '2025-09-03'
const UPDATED = '2025-09-03'

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
      '@id': url
    }
  }
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blogg', item: '/blogg' },
      { '@type': 'ListItem', position: 2, name: 'AI‑receptionist 2025 – komplett guide', item: url }
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
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container py-20 md:py-28 relative">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link href="/blogg" className="hover:text-white">Blogg</Link>
            <span>›</span>
            <span className="text-white/80">AI‑receptionist 2025 – komplett guide</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mt-4">
            Guide
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            AI‑receptionist 2025 – komplett guide
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Allt du behöver för att komma igång – från behovsanalys och implementation till integrationer, säkerhet & GDPR
            samt hur du mäter effekten i verksamheten.
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
            {/* TOC */}
            <div className="glass rounded-2xl p-5 mb-8">
              <div className="font-semibold">Innehåll</div>
              <ul className="mt-3 space-y-1 text-white/70">
                <li><a href="#varfor">Varför AI‑receptionist?</a></li>
                <li><a href="#implementering">Implementering</a></li>
                <li><a href="#integrationer">Integrationer</a></li>
                <li><a href="#sakerhet">Säkerhet & GDPR</a></li>
                <li><a href="#matning">Mät resultat</a></li>
                <li><a href="#checklista">Checklista</a></li>
              </ul>
            </div>

            <h2 id="varfor" className="font-display text-2xl md:text-3xl font-bold">Varför AI‑receptionist?</h2>
            <p className="text-white/80">
              En AI‑receptionist svarar dygnet runt, bokar möten, besvarar FAQ och kopplar vidare svåra ärenden. Resultatet är
              fler bokningar, kortare svarstider och bättre kundupplevelse – utan att öka bemanningen.
            </p>

            <h2 id="implementering" className="mt-10 font-display text-2xl md:text-3xl font-bold">Implementering</h2>
            <ol className="list-decimal list-inside text-white/80 space-y-1">
              <li>Behovsanalys och mål</li>
              <li>Träning av svar och tonalitet</li>
              <li>Regler för handöverföring</li>
              <li>Test i pilotmiljö</li>
            </ol>

            <h2 id="integrationer" className="mt-10 font-display text-2xl md:text-3xl font-bold">Integrationer</h2>
            <p className="text-white/80">Koppla kalender (Google/Outlook/Apple), CRM och telefoni. Synka i realtid och undvik dubbelbokningar.</p>

            <h2 id="sakerhet" className="mt-10 font-display text-2xl md:text-3xl font-bold">Säkerhet & GDPR</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Strikt konfidentialitet för all kundinformation</li>
              <li>GDPR‑uppfyllande dataskydd</li>
              <li>Säker datalagring och överföring</li>
            </ul>

            <h2 id="matning" className="mt-10 font-display text-2xl md:text-3xl font-bold">Mät resultat</h2>
            <p className="text-white/80">Följ upp KPI:er som bokningsgrad, svarstid, NPS och handöverföringar. Justera löpande.</p>

            <h2 id="checklista" className="mt-10 font-display text-2xl md:text-3xl font-bold">Checklista</h2>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li>Mål och förväntningar</li>
              <li>System och integrationer</li>
              <li>Säkerhet och regelefterlevnad</li>
              <li>Mätning och uppföljning</li>
            </ul>

            {/* CTA */}
            <div className="glass rounded-2xl p-6 mt-10 border border-white/10">
              <div className="font-semibold text-lg">Redo att se hur det fungerar i praktiken?</div>
              <p className="text-white/80 mt-1">Boka en kostnadsfri demo – vi visar hur AI‑receptionisten kan anpassas för er.</p>
              <Link href="/#demo" className="btn btn-primary mt-4">Boka demo</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Snabbfakta</div>
              <ul className="mt-3 text-white/70 space-y-1 text-sm">
                <li>Guiden uppdaterad: {new Date(UPDATED).toLocaleDateString('sv-SE')}</li>
                <li>Implementeringstid: 1–3 veckor</li>
                <li>Integrationer: Kalender, CRM, telefoni</li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Relaterat</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li><Link className="hover:text-white" href="/#funktioner">Funktioner</Link></li>
                <li><Link className="hover:text-white" href="/#security">Säkerhet</Link></li>
                <li><Link className="hover:text-white" href="/#demo">Boka demo</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
