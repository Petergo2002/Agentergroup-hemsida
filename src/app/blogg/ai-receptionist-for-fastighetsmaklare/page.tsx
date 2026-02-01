import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för fastighetsmäklare: Sälj fler objekt med 24/7 tillgänglighet | Agenter Group'
const description =
  'Missar du samtal under visningar? En AI-receptionist svarar dygnet runt, bokar visningar och svarar på frågor om objekt. Sälj mer och stressa mindre.'
const url = '/blogg/ai-receptionist-for-fastighetsmaklare'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist fastighetsmäklare',
    'telefonpassning mäklare',
    'automatisera visningsbokning',
    'fastighetsbranschen AI',
    'missade samtal mäklare',
    'Agenter Group',
    'kundservice fastighet'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Fastighet', 'Mäklare', 'Försäljning', 'Automatisering']
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
                Fastighet
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Mäklare
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
            AI-receptionist för fastighetsmäklare: Sälj fler objekt med 24/7 tillgänglighet
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Som mäklare är din tid din viktigaste valuta. Men när du står i en visning eller sitter i ett kundmöte ringer telefonen.
            Svarar du? Eller låter du en potentiell budgivare gå till röstbrevlådan? Det finns ett sätt att vara tillgänglig dygnet runt utan att bränna ut sig.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Fastighetsbranschen rör sig snabbt. Spekulanter förväntar sig svar direkt, oavsett om det är tisdag förmiddag eller söndag kväll.
              Samtidigt kräver jobbet som mäklare fullt fokus i mötet med människor. Denna ekvation går sällan ihop med en traditionell telefonlösning.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mäklarens dilemma: Nås eller sälja?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Varje missat samtal är en missad affärsmöjlighet. Det kan vara en spekulant som vill boka en extravisning, en budgivare som har en avgörande fråga,
              eller en säljare som letar efter rätt mäklare.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Många mäklare försöker lösa detta genom att alltid ha telefonen i handen, även på kvällar och helger. Resultatet? Stress och splittrat fokus.
              Andra anlitar traditionell telefonpassning, men de kan ofta bara ta emot meddelanden, inte svara på specifika frågor om objektet eller boka in visningar.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Så förändrar AI spelplanen</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist anpassad för fastighetsbranschen är inte bara en röstbrevlåda. Det är en intelligent assistent som kan hantera hela den inledande kontakten.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">Bokning av visningar</h3>
                <p className="text-white/80">
                  Istället för att spela telefonpingis kan AI:n boka in spekulanter direkt på öppna eller privata visningar.
                  Den synkar i realtid med din kalender och skickar bekräftelser automatiskt.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">Objektfrågor</h3>
                <p className="text-white/80">
                  &quot;Vad är avgiften på Storgatan 5?&quot;, &quot;Finns det hiss?&quot;.
                  Genom att ha tillgång till din objektsdatabas kan AI:n svara på faktabaserade frågor direkt, dygnet runt.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Filtrera samtal smartare</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Inte alla samtal är värda din omedelbara uppmärksamhet. En AI-receptionist kan sålla bort telefonförsäljare och prioritera heta leads.
              Om en säljare ringer och vill ha en värdering kan AI:n boka in ett intagsmöte direkt. Om det är en enkel fråga hanterar den det själv.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">För fastighetsförvaltning</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Tekniken är inte bara för mäklare. För fastighetsförvaltare är felanmälan och hyresgästfrågor en stor tidstjuv.
            </p>
             <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Felanmälan dygnet runt:</strong> Hyresgästen kan ringa in en vattenläcka kl 02:00. AI:n registrerar ärendet, kategoriserar det som akut och larmar jouren.</li>
              <li><strong>Vanliga frågor:</strong> &quot;Hur ställer jag mig i kö?&quot;, &quot;Var finns tvättstugan?&quot;. AI:n svarar direkt och avlastar kundtjänst.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Jämförelse: AI vs Traditionell service</h2>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-white/80 border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 font-semibold text-white">Funktion</th>
                    <th className="py-4 font-semibold text-white">Traditionell Svarsservice</th>
                    <th className="py-4 font-semibold text-brand-300">AI-Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4 font-medium">Öppettider</td>
                    <td className="py-4">Kontorstid (helg dyrt)</td>
                    <td className="py-4 text-brand-200">24/7/365</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Objektkunskap</td>
                    <td className="py-4">Ingen/Begränsad</td>
                    <td className="py-4 text-brand-200">Full tillgång till fakta</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Bokning</td>
                    <td className="py-4">Tar meddelande</td>
                    <td className="py-4 text-brand-200">Direkt i kalender</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Pris</td>
                    <td className="py-4">Hög rörlig kostnad</td>
                    <td className="py-4 text-brand-200">Låg fast kostnad</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Sälj mer med mindre stress</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att vara tillgänglig är avgörande i fastighetsbranschen, men det ska inte ske på bekostnad av din hälsa eller kvaliteten på dina möten.
              Genom att implementera en AI-receptionist säkerställer du att varje samtal tas om hand professionellt, att visningar fylls på automatiskt
              och att du kan fokusera på det du är bäst på: att stänga affärer.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Redo att automatisera?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Låt oss visa hur en AI-receptionist kan skräddarsys för din mäklarfirma eller fastighetsförvaltning.
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
                href="/blogg/varfor-foretag-missar-samtal"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Varför Företag Missar 34% av Jobbmöjligheter
                </h4>
                <p className="text-white/70 text-sm">
                  Läs om kostnaden av missade samtal.
                </p>
              </Link>

               <Link
                href="/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                  Guide till AI-driven schemaläggning
                </h4>
                <p className="text-white/70 text-sm">
                  Så fungerar automatisk mötesbokning.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
