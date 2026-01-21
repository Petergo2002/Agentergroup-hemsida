import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist vs Traditionell receptionist: Komplett guide 2025 | Agenter Group'
const description =
  'Står du i valet mellan en AI-receptionist och en traditionell receptionist? Vi jämför kostnader, tillgänglighet och funktioner för att hjälpa dig ta rätt beslut för ditt företag.'
const url = '/blogg/ai-receptionist-vs-traditionell-receptionist'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI-receptionist',
    'virtuell receptionist',
    'receptionstjänst pris',
    'automatisk telefonpassning',
    'kostnadsjämförelse receptionist',
    'Agenter Group',
    'kundservice 2025'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['AI-receptionist', 'Kostnadsjämförelse', 'Företagstips', 'Automatisering']
  }
}

const PUBLISHED = '2025-01-22' // Assuming today or near future
const UPDATED = '2025-01-22'

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
                AI-Receptionist
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Jämförelse
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
            AI-receptionist vs Traditionell receptionist: Komplett guide 2025
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Ska du anställa en receptionist eller investera i en AI-lösning? Svaret är inte alltid självklart.
            I denna guide går vi igenom allt du behöver veta för att fatta rätt beslut för ditt företag.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Rollerna på arbetsplatsen förändras i takt med teknologin. Receptionisten har länge varit företagets ansikte utåt – den första rösten en kund hör. Men med framväxten av avancerad AI, står många företagsledare inför ett vägskäl: Ska man hålla fast vid det traditionella eller omfamna det nya?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kostnadsjämförelse: Vad skiljer sig?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En av de mest påtagliga skillnaderna är kostnaden. Låt oss bryta ner siffrorna.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">Traditionell Receptionist</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex justify-between">
                    <span>Månadslön (snitt):</span>
                    <span className="font-semibold">28 000 kr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Arbetsgivaravgifter:</span>
                    <span className="font-semibold">~8 800 kr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Semesterersättning:</span>
                    <span className="font-semibold">~3 300 kr</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-2 text-white">
                    <span><strong>Total månadskostnad:</strong></span>
                    <span className="font-bold text-brand-300">~40 100 kr</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-white/50 italic">
                  Tillkommer kostnader för sjukfrånvaro, utrustning, utbildning och personalförmåner.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-brand-500 text-white text-xs font-bold rounded-bl-lg">
                  Kostnadseffektivt
                </div>
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">AI-Receptionist</h3>
                 <ul className="space-y-3 text-white/80">
                  <li className="flex justify-between">
                    <span>Månadsavgift:</span>
                    <span className="font-semibold">Från 1 500 kr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Startavgift:</span>
                    <span className="font-semibold">Engångskostnad</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Underhåll:</span>
                    <span className="font-semibold">Ingår</span>
                  </li>
                  <li className="flex justify-between border-t border-white/10 pt-2 text-white">
                    <span><strong>Total månadskostnad:</strong></span>
                    <span className="font-bold text-brand-300">~1 500 - 5 000 kr</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-white/50 italic">
                  Inga dolda kostnader, ingen semester, ingen sjuklön.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Tillgänglighet: När svarar ni?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Kunder förväntar sig service dygnet runt. Här blir skillnaden mellan människa och maskin tydligast.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-white/80 border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 font-semibold text-white">Egenskap</th>
                    <th className="py-4 font-semibold text-white">Mänsklig Receptionist</th>
                    <th className="py-4 font-semibold text-brand-300">AI-Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4 font-medium">Öppettider</td>
                    <td className="py-4">Vanligtvis 08-17 (40h/vecka)</td>
                    <td className="py-4 text-brand-200">24/7 (168h/vecka)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Svarstid</td>
                    <td className="py-4">Beror på belastning</td>
                    <td className="py-4 text-brand-200">Omedelbart</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Kapacitet</td>
                    <td className="py-4">1 samtal åt gången</td>
                    <td className="py-4 text-brand-200">Obegränsat antal samtidiga samtal</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Frånvaro</td>
                    <td className="py-4">Semester, sjukdom, raster</td>
                    <td className="py-4 text-brand-200">Aldrig (99.9% upptid)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Funktionalitet och &quot;Den mänskliga touchen&quot;</h3>

            <p className="text-white/80 leading-relaxed mb-6">
              Många oroar sig för att en AI ska kännas robotaktig och opersonlig. Det var sant för några år sedan, men dagens AI-röster är nästintill omöjliga att skilja från en människa. De kan intonera, pausa naturligt och till och med visa empati.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Där AI vinner:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Precision:</strong> Glömmer aldrig att ställa en fråga eller ta ett namn.</li>
              <li><strong>Integration:</strong> Bokar möten direkt i kalendern och uppdaterar CRM-systemet i realtid.</li>
              <li><strong>Språk:</strong> Kan växla mellan svenska, engelska och andra språk omedelbart.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Där människan vinner:</h3>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Komplex problemlösning:</strong> Situationer som kräver kreativitet eller &quot;utanför boxen&quot;-tänkande.</li>
              <li><strong>Fysisk närvaro:</strong> Att ta emot gäster på kontoret, bjuda på kaffe och hantera post.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vem bör välja vad?</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">Välj Traditionell Receptionist om:</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                  <li>Du har mycket fysiska besök på kontoret.</li>
                  <li>Dina samtal kräver komplex emotionell hantering (t.ex. krissamtal).</li>
                  <li>Du behöver hjälp med diverse kontorssysslor utöver telefonen.</li>
                </ul>
              </div>

              <div className="bg-brand-500/10 border border-brand-500/20 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-2">Välj AI-Receptionist om:</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/70 text-sm">
                  <li>Du missar samtal på grund av hög belastning eller utanför kontorstid.</li>
                  <li>Du vill sänka dina fasta kostnader drastiskt.</li>
                  <li>Ditt primära behov är att boka möten, svara på vanliga frågor och koppla samtal.</li>
                  <li>Du är ett tillväxtbolag som behöver skala upp snabbt.</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Slutsats: Hybriden kan vara framtiden</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Det behöver inte vara antingen eller. Många företag väljer en hybridlösning: En AI-receptionist hanterar &quot;overflow&quot; (samtal när linjen är upptagen), kvällar och helger, medan den ordinarie personalen tar hand om samtal under kontorstid. På så sätt maximerar man tillgängligheten utan att tappa den personliga kontakten på kontoret.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Men för företag som opererar helt digitalt eller har stram budget, är AI-receptionisten år 2025 en &quot;no-brainer&quot;. Tekniken är nu så pass mogen att den inte bara ersätter, utan i många fall överträffar, den traditionella upplevelsen över telefon.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Testa en AI-receptionist själv</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Är du nyfiken på hur det låter? Boka en demo med oss på Agenter Group så visar vi hur naturligt och effektivt det kan vara.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Boka Demo Nu
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
                href="/blogg/varfor-foretag-missar-samtal"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Varför Företag Missar 34% av Jobbmöjligheter
                </h4>
                <p className="text-white/70 text-sm">
                  Om kostnaden av missade samtal och hur du undviker dem.
                </p>
              </Link>

               <Link
                href="/blogg/ai-receptionist-2025-komplett-guide"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                  AI‑receptionist 2025 – komplett guide
                </h4>
                <p className="text-white/70 text-sm">
                  Allt du behöver för att komma igång med implementationen.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
