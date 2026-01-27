import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Telefonpassning för kliniker: Så ökar ni beläggningen med AI | Agenter Group'
const description =
  'Driver du klinik? Missade samtal är förlorade patienter. Lär dig hur en AI-receptionist kan sköta tidsbokning och frågor dygnet runt – säkert och kostnadseffektivt.'
const url = '/blogg/telefonpassning-for-kliniker'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'telefonpassning kliniker',
    'telefonpassning tandläkare',
    'AI receptionist vård',
    'svarsservice klinik',
    'automatisk tidsbokning',
    'Agenter Group',
    'missade samtal tandläkare'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Klinik', 'Telefonpassning', 'AI-lösningar', 'Vård']
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
                Klinik
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Telefonpassning
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
            Telefonpassning för kliniker: Så ökar ni beläggningen med AI
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Ljudet av en telefon som ringer oavbrutet kan vara stressande för vilken mottagning som helst.
            Men tystnaden när ingen ringer är värre. För tandläkare, kiropraktorer och andra kliniker är varje missat samtal
            inte bara en missad intäkt – det är en patient som kanske aldrig återvänder.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Att driva en framgångsrik klinik handlar om balans. Du måste ge dina patienter hundraprocentig uppmärksamhet
              i behandlingsrummet, samtidigt som receptionen måste fungera felfritt. Men att ha en receptionist på plats
              heltid är en stor kostnad, och traditionell telefonpassning har ofta begränsningar i vad de faktiskt kan göra.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Problemet med traditionell bokning</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Många kliniker brottas med samma utmaningar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Begränsade öppettider:</strong> Patienter ringer ofta före eller efter jobbet, när er reception är stängd.</li>
              <li><strong>Telefontid stjäl tid från vård:</strong> Om du arbetar ensam eller i litet team, måste du avbryta behandlingar för att svara.</li>
              <li><strong>Avbokningar:</strong> En sen avbokning lämnar en lucka i schemat som är svår att fylla manuellt med kort varsel.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Lösningen: En specialiserad AI-receptionist</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Föreställ dig en receptionist som aldrig tar lunch, aldrig blir sjuk och kan prata med obegränsat antal
              patienter samtidigt. En AI-receptionist för kliniker är tränad att hantera just era specifika behov.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Fyller tomma luckor</h3>
                <p className="text-white/80">
                  När en patient ringer för att avboka, kan AI:n omedelbart föreslå en ny tid. Ännu viktigare:
                  när nästa patient ringer och vill ha en akuttid, vet AI:n att det precis uppstått en ledig lucka
                  och kan boka in den direkt. Beläggningsgraden maximeras automatiskt.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Trygghet och Akutbedömning</h3>
                <p className="text-white/80">
                  AI:n kan tränas att ställa rätt kontrollfrågor. &quot;Har du tandvärk?&quot;, &quot;Hur länge har du haft ont?&quot;.
                  Vid akuta fall kan den markera bokningen som prioriterad eller skicka en direkt notis till jourhavande personal.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kostnadsjämförelse för en liten klinik</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Låt oss jämföra kostnaden för att hantera inkommande samtal och bokningar.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-white/80 border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 font-semibold text-white">Alternativ</th>
                    <th className="py-4 font-semibold text-white">Kostnad/månad</th>
                    <th className="py-4 font-semibold text-white">Tillgänglighet</th>
                    <th className="py-4 font-semibold text-white">Kan boka tider?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4 font-medium">Anställa receptionist</td>
                    <td className="py-4">~40 000 kr (inkl. avgifter)</td>
                    <td className="py-4">Vardagar 08-17</td>
                    <td className="py-4 text-green-400">Ja</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Traditionell svarsservice</td>
                    <td className="py-4">2 000 - 5 000 kr + rörligt</td>
                    <td className="py-4">Kontorstid (oftast)</td>
                    <td className="py-4 text-yellow-400">Sällan (bara meddelanden)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-brand-300">AI-Receptionist</td>
                    <td className="py-4 text-brand-200">Från 1 500 kr</td>
                    <td className="py-4 text-brand-200">24/7/365</td>
                    <td className="py-4 text-green-400 font-bold">Ja, direkt i systemet</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Men säkerheten då? (GDPR)</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Inom vården är patientintegritet A och O. Moderna AI-lösningar för kliniker är byggda med &quot;Privacy First&quot;.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Dataskydd:</strong> Samtal och data hanteras krypterat och i enlighet med GDPR.</li>
              <li><strong>Ingen lagring i onödan:</strong> Systemet kan konfigureras att radera känslig data automatiskt efter bokning.</li>
              <li><strong>Kontroll:</strong> Ni har full insyn i loggar och kan när som helst granska hur samtal har hanterats.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Så kommer ni igång</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att byta till AI-telefonpassning kräver inte att ni byter journalsystem eller telefonleverantör.
              Vi sätter upp en integration mot er kalender (t.ex. via webbokning) och ni vidarekopplar era samtal
              när ni inte kan svara. Det tar oftast mindre än en vecka att gå från idé till full drift.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Ge era patienter den service de förtjänar – svar direkt, dygnet runt – och ge er själva arbetsron tillbaka.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Testa AI för er klinik</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Vill du se hur en AI-receptionist kan hantera patientbokningar i praktiken? Boka en demo med oss.
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
                   Guide till AI-driven schemaläggning
                </h4>
                <p className="text-white/70 text-sm">
                  Låt kunderna boka möten när det passar dem.
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
                  Vi jämför kostnader och funktioner.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
