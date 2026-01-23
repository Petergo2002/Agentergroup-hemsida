import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-telefonist vs Knappval: Varför det är dags att skrota "Tryck 1" | Agenter Group'
const description =
  'Trött på att dina kunder fastnar i krångliga knappval? Upptäck hur en AI-telefonist ger snabbare hjälp, nöjdare kunder och moderniserar din företagsväxel.'
const url = '/blogg/ai-telefonist-vs-knappval'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI telefonist',
    'knappval',
    'IVR system',
    'röststyrd växel',
    'smart företagsväxel',
    'Agenter Group',
    'kundupplevelse',
    'telefonpassning'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['AI-telefonist', 'Knappval', 'Kundservice', 'Teknikskifte']
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
                AI-Telefonist
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
            AI-telefonist vs Knappval: Varför det är dags att skrota &quot;Tryck 1&quot;
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Vi har alla varit där: &quot;Tryck 1 för faktura, tryck 2 för support, tryck 3 om du vill slita ditt hår&quot;.
            Knappvalssystem (IVR) var en gång toppen av modern teknik. Idag är de mest ett irritationsmoment.
            Möt ersättaren: AI-telefonisten.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              För företag handlar det om effektivitet. Man vill dirigera kunden rätt så snabbt som möjligt. Men för kunden är knappval ofta en labyrint av frustration. Man lyssnar på fem alternativ, inser att inget passar, och trycker desperat på 0 för att nå en människa.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Men tekniken har sprungit ifrån de gamla menyerna. Med Natural Language Understanding (NLU) kan datorer nu förstå vad vi säger, inte bara vilken knapp vi trycker på. Det är dags att uppgradera.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vad är en AI-telefonist?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-telefonist är inte bara en röst som läser upp alternativ. Det är en intelligent assistent som svarar i telefonen och frågar: &quot;Hej, vad kan jag hjälpa dig med?&quot;.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Kunden svarar med egna ord, till exempel &quot;Jag undrar var min leverans är&quot;. AI:n förstår avsikten (intent), kopplar samtalet till logistikavdelningen, eller ännu bättre – slår upp ordernumret direkt och ger svaret. Utan att någon människa behöver lyfta luren.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Varför traditionellt knappval (IVR) misslyckas</h2>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Stelbenthet</h3>
                <p className="text-white/70 text-sm">
                  Om kundens ärende inte passar exakt in i menyval 1-5, blir det stopp. Det finns inget utrymme för nyanser.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Tidskrävande</h3>
                <p className="text-white/70 text-sm">
                  Kunden måste lyssna igenom hela menyn innan de kan agera. Det slösar tid och skapar irritation innan samtalet ens börjat.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Opersonligt</h3>
                <p className="text-white/70 text-sm">
                  Att bli reducerad till en siffra (ett knapptryck) får ingen att känna sig sedd eller hörd.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Därför är AI-telefonisten överlägsen</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Skillnaden ligger i upplevelsen. Istället för att tvinga kunden att anpassa sig till systemet (&quot;Lyssna noga då våra alternativ har ändrats&quot;), anpassar sig systemet till kunden.
            </p>

            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-white/80 border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 font-semibold text-white w-1/3">Funktion</th>
                    <th className="py-4 font-semibold text-white w-1/3">Traditionellt Knappval (IVR)</th>
                    <th className="py-4 font-semibold text-brand-300 w-1/3">AI-Telefonist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-4 font-medium">Interaktion</td>
                    <td className="py-4">Tryck på knappar (DTMF)</td>
                    <td className="py-4 text-brand-200">Naturligt tal</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Flexibilitet</td>
                    <td className="py-4">Låst till förprogrammerade vägar</td>
                    <td className="py-4 text-brand-200">Kan hantera oändliga variationer av frågor</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Problemlösning</td>
                    <td className="py-4">Kan endast koppla samtal</td>
                    <td className="py-4 text-brand-200">Kan svara på frågor och utföra uppgifter (boka, kolla status)</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Upplevelse</td>
                    <td className="py-4">Robotisk och långsam</td>
                    <td className="py-4 text-brand-200">Konversationell och direkt</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mer än bara samtalsdirigering</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Det som verkligen skiljer en modern AI-telefonist från ett IVR-system är förmågan att faktiskt <em>lösa</em> problemet.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Ett IVR-system kan bara skicka kunden vidare till en kö. En AI-telefonist kan integreras med ditt bokningssystem eller CRM. Om kunden säger &quot;Jag vill boka en tid på tisdag&quot;, kan AI:n svara &quot;Det finns en tid kl 14:00, fungerar det?&quot; och genomföra bokningen. Kunden får sitt ärende löst utan att någonsin sitta i kö.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Framtiden är röststyrd</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Vi använder Siri och Alexa i hemmet. Vi förväntar oss att kunna prata med teknik. Att mötas av ett &quot;Tryck 1&quot;-system år 2025 känns föråldrat och signalerar att företaget inte hänger med.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Genom att byta till en AI-telefonist visar du att du värdesätter kundens tid. Du erbjuder en modern, smidig ingång till ditt företag som är tillgänglig dygnet runt, året runt.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Vill du skrota knappvalet?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Låt dina kunder prata med oss istället för att trycka på knappar. Boka en demo och hör skillnaden själv.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Uppgradera din växel nu
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
                href="/blogg/ai-receptionist-vs-traditionell-receptionist"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   AI-receptionist vs Traditionell receptionist
                </h4>
                <p className="text-white/70 text-sm">
                  Jämförelse av AI och mänsklig personal.
                </p>
              </Link>

               <Link
                href="/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                  Så automatiserar du telefonhantering
                </h4>
                <p className="text-white/70 text-sm">
                  Guide till att komma igång med automatisering.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
