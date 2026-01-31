import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för fastighetsförvaltning: Automatisera felanmälan och jour | Agenter Group'
const description =
  'Sänk era jourkostnader och öka servicen för hyresgästerna. En AI-receptionist hanterar felanmälan, frågor och bokningar dygnet runt.'
const url = '/blogg/ai-receptionist-for-fastighetsforvaltning'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI fastighetsförvaltning',
    'felanmälan automatisk',
    'fastighetsjour telefon',
    'telefonpassning fastighetsbolag',
    'AI kundtjänst hyresgäster',
    'Agenter Group',
    'digital fastighetsförvaltning'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Fastighetsförvaltning', 'AI-lösningar', 'Effektivisering', 'Kundservice']
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function BlogPost() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Tillbaka till startsidan
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          {/* Meta info */}
          <div className="mb-8">
            <Link
              href="/blogg"
              className="inline-block text-sm text-brand-400 hover:text-brand-300 mb-4 transition-colors"
            >
              ← Alla artiklar
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Fastighet
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Effektivisering
              </span>
            </div>
            <time className="text-sm text-white/50" dateTime={PUBLISHED}>
              Publicerad: {new Date(PUBLISHED).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI-receptionist för fastighetsförvaltning: Automatisera felanmälan och jour
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            &quot;Vattnet rinner inte undan&quot;, &quot;Jag har tappat min nyckel&quot;, &quot;Tvättmaskinen är trasig&quot;.
            För fastighetsförvaltare ringer telefonen konstant. Men måste varje samtal hanteras manuellt?
            Här är hur AI kan ta hand om rutinerna och sänka era jourkostnader.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Fastighetsbranschen är unik. Ni hanterar människors hem och arbetsplatser, vilket betyder att tillgänglighet inte är en lyx – det är ett krav. Men att ha personal redo att svara i telefon dygnet runt är dyrt, och traditionella jourtjänster tar ofta hutlöst betalt per samtal, även för enkla frågor.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Problemet med manuell felanmälan</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Måndag morgon. Telefonväxeln går varm. Hyresgäster ringer om allt från kalla element till frågor om hyresavin.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Långa väntetider:</strong> Frustrerade hyresgäster får vänta i telefonkö.</li>
              <li><strong>Otydliga felanmälningar:</strong> &quot;Det är fel i köket&quot; säger hyresgästen till svarsservice, men glömmer berätta <em>vad</em> som är fel eller vilken lägenhet det gäller.</li>
              <li><strong>Höga kostnader:</strong> Jourutryckningar beställs i onödan för att den som svarade inte hade kunskap att bedöma allvaret.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Så fungerar en AI-receptionist för fastigheter</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist är inte en enkel knappvalstjänst. Det är en intelligent röstassistent som svarar omedelbart, dygnet runt, och kan föra en konversation med hyresgästen.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold mb-4 text-white">Detta kan AI:n hantera:</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">1. Mottagning av felanmälan</span>
                  <span>AI:n ställer följdfrågor: &quot;Gäller det el eller vatten?&quot;, &quot;Är det akut?&quot;, &quot;Får vi gå in med huvudnyckel?&quot;. Sedan skapas ett ärende direkt i ert fastighetssystem.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">2. Triage av jourärenden</span>
                  <span>AI:n kan skilja på akut (vattenläcka) och icke-akut (droppande kran). Vid akuta fall skickas SMS/samtal direkt till jouren. Vid icke-akuta sparas ärendet till nästa arbetsdag.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">3. Svar på vanliga frågor</span>
                  <span>&quot;Vad är portkoden?&quot;, &quot;Var slänger jag grovsopor?&quot;, &quot;Har ni lediga p-platser?&quot;. AI:n svarar direkt baserat på er kunskapsbank.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Scenario: Vattenläckan</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-2">Traditionell Jour</h3>
                <p className="text-white/70 text-sm">
                  Hyresgästen ringer en extern larmcentral. Operatören har ingen specifik kunskap om fastigheten. De skickar ut en jourbil för säkerhets skull.
                  <br /><br />
                  <strong>Kostnad:</strong> 3 500 kr + (framkörning).
                </p>
              </div>
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Med AI-receptionist</h3>
                <p className="text-white/70 text-sm">
                  AI:n ber hyresgästen beskriva läckan. &quot;Det droppar långsamt under vasken&quot;. AI:n bedömer att det inte är akut risk för skada på fastigheten just nu. Den instruerar hyresgästen att ställa en hink under och skapar en arbetsorder till fastighetsskötaren som kommer 07:00 dagen efter.
                  <br /><br />
                  <strong>Kostnad:</strong> 0 kr i jour.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Integration med era system</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Oavsett om ni använder Momentum, Vitec, Fastighetssystemet eller egna lösningar, kan en modern AI-lösning ofta integreras via API eller e-post-kopplingar. Det innebär att felanmälan hamnar rätt direkt – inga gula lappar eller missade mail.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Nöjdare hyresgäster</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Det handlar inte bara om att spara pengar. Det handlar om service. Hyresgäster idag förväntar sig att kunna anmäla fel när de upptäcker dem – kl 22 på en söndag eller 06 på en tisdag. Att mötas av en hjälpsam röst som bekräftar att &quot;Vi har tagit emot din anmälan, en fastighetsskötare tittar på det imorgon&quot; skapar trygghet.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Vill ni effektivisera er felanmälan?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Boka en demo med Agenter Group så visar vi hur en AI-receptionist kan avlasta er förvaltning och minska jourkostnaderna.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Boka Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Author & Date */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-white/50">Författare</p>
                <p className="text-white font-medium">Agenter Group AB</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/50">Senast uppdaterad</p>
                <time className="text-white font-medium" dateTime={UPDATED}>
                  {new Date(UPDATED).toLocaleDateString('sv-SE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">Läs mer</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Automatisera telefonhantering
                </h4>
                <p className="text-white/70 text-sm">
                  Guide för att komma igång med AI-agenter.
                </p>
              </Link>

               <Link
                href="/blogg/ai-receptionist-vs-traditionell-receptionist"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   AI vs Traditionell Receptionist
                </h4>
                <p className="text-white/70 text-sm">
                  Jämförelse av kostnader och funktioner.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
