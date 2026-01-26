import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för kliniker: Mer tid för patienter | Agenter Group'
const description =
  'Driver du klinik? Låt en AI-receptionist hantera tidsbokning och frågor dygnet runt. Säker, effektiv och alltid tillgänglig för dina patienter.'
const url = '/blogg/ai-receptionist-for-kliniker'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist klinik',
    'telefonpassning tandläkare',
    'tidsbokning vårdmottagning',
    'minska no-shows',
    'effektiv mottagning',
    'Agenter Group',
    'GDPR säker AI'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Vård', 'Klinik', 'Effektivisering', 'Patientfokus']
  }
}

const PUBLISHED = '2025-01-24'
const UPDATED = '2025-01-24'

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
                Klinik & Hälsa
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Administration
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
            AI-receptionist för kliniker: Mer tid för patienter
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Telefonen ringer. Du står mitt i en behandling eller konsultation. Svarar du? Avbryter du patienten framför dig? För många tandläkare, fysioterapeuter och privata vårdgivare är detta ett dagligt dilemma.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Att driva en framgångsrik klinik handlar om balans. Balans mellan att ge vård i världsklass och att hantera den administrativa röran som krävs för att verksamheten ska gå runt. Missade samtal är ofta lika med förlorade patienter, men att agera telefonist stjäl tid från kärnverksamheten.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Utmaningen: Vård eller administration?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Många kliniker löser detta genom att ha telefontid (vilket frustrerar patienter) eller anställa administrativ personal (vilket är dyrt).
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Idag förväntar sig patienter tillgänglighet. De vill boka tid när de kommer på det – ofta på kvällen eller helgen. Om de möts av en telefonsvarare som säger &quot;Vi har stängt, återkom imorgon kl 08.00&quot;, är risken stor att de vänder sig till en annan aktör med smidigare bokning.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3 sätt AI avlastar din mottagning</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist är inte bara en telefonsvarare. Det är en intelligent assistent som kan integreras med dina befintliga system.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">1. Bokning & Avbokning</h3>
                <p className="text-white/70 text-sm">
                  AI:n kopplas till din kalender. Patienten kan ringa in, föreslå en tid, och få den bokad direkt. Även avbokningar hanteras automatiskt, vilket frigör tider för andra.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">2. Svara på frågor</h3>
                <p className="text-white/70 text-sm">
                  &quot;Vad kostar en undersökning?&quot;, &quot;Har ni avtal med regionen?&quot;, &quot;Var ligger ni?&quot;. AI:n svarar på rutinfrågor direkt, så du slipper upprepa dig.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">3. Triage & Akutfall</h3>
                <p className="text-white/70 text-sm">
                  AI:n kan ställa frågor för att bedöma ärendets art. Om någon ringer med akut tandvärk kan samtalet prioriteras eller skicka en akut-notis till dig.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Säkerhet och Trygghet (GDPR)</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Inom vård och hälsa är sekretess A och O. En professionell AI-lösning för kliniker måste vara byggd med &quot;Privacy by Design&quot;.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-white/80 mb-6">
              <li><strong>Ingen lagring av känsliga data i onödan:</strong> Samtalsloggar kan anonymiseras eller raderas automatiskt efter hantering.</li>
              <li><strong>Krypterad kommunikation:</strong> All dataöverföring sker krypterat.</li>
              <li><strong>Tydlighet:</strong> AI:n informerar alltid om att det är en automatiserad assistent, vilket skapar transparens mot patienten.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Minska &quot;No-shows&quot;</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Uteblivna besök kostar enorma summor varje år. Människor glömmer. En AI-agent kan inte bara ta emot samtal, utan också ringa upp eller skicka SMS för att påminna patienter dagen innan.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Om en patient behöver avboka, kan AI:n enkelt erbjuda en ny tid direkt i samtalet, istället för att patienten bara struntar i att dyka upp för att det är krångligt att ringa receptionen.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Passar detta min klinik?</h2>

            <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-white mb-2">Idealisk för:</h4>
              <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5 text-white/70 text-sm">
                <li>Tandläkarmottagningar</li>
                <li>Fysioterapeuter & Kiropraktorer</li>
                <li>Privata läkarmottagningar</li>
                <li>Psykologer & Terapeuter</li>
                <li>Skönhetskliniker</li>
                <li>Veterinärer</li>
              </ul>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              Om du har hög patientgenomströmning och tidsbokning är centralt för din intjäning, är en AI-receptionist en investering som ofta betalar sig redan första månaden genom räddade bokningar och minskad administration.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Fokusera på patienterna</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Låt tekniken hantera telefonkön. Vi hjälper dig sätta upp en AI-lösning som passar just din kliniks behov och system.
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
                href="/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Mötesbokning 24/7
                </h4>
                <p className="text-white/70 text-sm">
                  Djupdykning i hur automatisk schemaläggning fungerar.
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
