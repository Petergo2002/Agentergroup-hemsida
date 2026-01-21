import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Mötesbokning 24/7: Guide till AI-driven schemaläggning | Agenter Group'
const description =
  'Låt kunderna boka möten när det passar dem, dygnet runt. En guide till hur AI-driven schemaläggning fyller din kalender automatiskt och minskar administrationen.'
const url = '/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'mötesbokning AI',
    'automatisk mötesbokning',
    'schemaläggning online',
    'kalenderbokning företag',
    'Agenter Group',
    'effektivisera bokningar'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Mötesbokning', 'AI', 'Produktivitet', 'Försäljning']
  }
}

const PUBLISHED = '2025-01-22'
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
                Mötesbokning
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Produktivitet
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
            Mötesbokning 24/7: Guide till AI-driven schemaläggning
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Hur många mail krävs det för att boka ett möte? &quot;Kan du tisdag?&quot;, &quot;Nej, onsdag?&quot;, &quot;Förmiddag?&quot;.
            Detta ineffektiva bollande dödar säljtempo. Med AI-driven schemaläggning bokar kunderna sig själva, dygnet runt.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Mötesbokning är hjärtat i många verksamheter, från tandläkare och frisörer till säljorganisationer och konsulter. Men administrationen kring det är en tidstjuv. Samtidigt visar studier att moderna kunder vill ha kontroll – de vill boka när impulsen faller på, oavsett om klockan är 10.00 eller 23.30.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Varför AI-bokning är framtiden</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Traditionella bokningsformulär (&quot;Lämna intresse här&quot;) är passiva. AI-bokning är proaktiv. En AI-agent kan prata med kunden (via chatt eller röst), kolla din kalender i realtid, föreslå tider och låsa bokningen direkt. Inget &quot;vi återkommer&quot;.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
               <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">40%</div>
                <div className="text-white/70">Av bokningar sker utanför kontorstid</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">25%</div>
                <div className="text-white/70">Minskning av &quot;no-shows&quot; med automatiska påminnelser</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-brand-400 mb-2">5h+</div>
                <div className="text-white/70">Sparad admintid per vecka och anställd</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Hur det fungerar i praktiken</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Scenario: Säljsamtalet</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              En potentiell kund ringer ditt nummer kl 18.30. Ingen är på kontoret.
            </p>
            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-brand-500 space-y-4">
              <p className="text-white/90"><strong>AI:</strong> &quot;Hej! Du har kommit till Agenter Group. Jag är en virtuell assistent. Vad kan jag hjälpa dig med?&quot;</p>
              <p className="text-white/70 italic">Kunden: &quot;Jag skulle vilja veta mer om era tjänster och kanske boka en demo.&quot;</p>
              <p className="text-white/90"><strong>AI:</strong> &quot;Absolut, det ordnar jag. Jag ser att vår säljare Anna har lediga tider imorgon kl 10.00 eller 14.30. Passar någon av dem?&quot;</p>
              <p className="text-white/70 italic">Kunden: &quot;14.30 fungerar bra.&quot;</p>
              <p className="text-white/90"><strong>AI:</strong> &quot;Toppen! Jag bokar in det. Vad har du för mailadress så skickar jag en inbjudan?&quot;</p>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Resultat: Ett bokat möte i kalendern, en inbjudan skickad till kunden, och säljaren Anna startar sin morgondag med en fullbokad eftermiddag.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Fördelarna med en integrerad lösning</h2>

            <ul className="list-disc pl-6 space-y-4 text-white/80 mb-6">
              <li>
                <strong>Inga dubbelbokningar:</strong> AI:n läser din kalender i realtid (Google, Outlook, iCloud) och bokar bara lediga slots.
              </li>
              <li>
                <strong>Kvalificering av leads:</strong> AI:n kan ställa kontrollfrågor innan bokning (&quot;Hur många anställda har ni?&quot;, &quot;Vilken budget har ni?&quot;) för att säkerställa att mötet är relevant.
              </li>
              <li>
                <strong>Automatisk uppföljning:</strong> Om kunden avbokar, kan AI:n omedelbart kontakta andra kunder på väntelistan eller öppna tiden för nya bokningar.
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kom igång med AI-bokning</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att implementera detta är enklare än många tror. Du behöver inte byta ut hela ditt IT-system. Moderna AI-agenter fungerar som ett lager ovanpå dina befintliga verktyg.
            </p>

            <ol className="space-y-4 text-white/80 mb-8">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">1</span>
                <div>
                  <strong className="text-white">Koppla din kalender:</strong> Ge AI:n tillgång till att läsa och skriva i din kalender.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">2</span>
                <div>
                  <strong className="text-white">Sätt regler:</strong> &quot;Boka max 4 möten per dag&quot;, &quot;Minst 15 minuter paus mellan möten&quot;, &quot;Inga möten på fredag eftermiddag&quot;.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">3</span>
                <div>
                  <strong className="text-white">Aktivera AI-rösten:</strong> Koppla AI:n till ditt telefonnummer eller lägg in den som en chatt-widget på hemsidan.
                </div>
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Sluta jaga, börja mötas</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Genom att ta bort friktionen i bokningsprocessen ökar du konverteringen drastiskt. Gör det enkelt för kunden att säga &quot;ja&quot; till ett möte med dig. Med AI-driven schemaläggning är din verksamhet öppen för affärer 24/7.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Fyll din kalender automatiskt</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Vill du se hur vi fyller våra egna säljares kalendrar med hjälp av AI? Boka en demo (såklart via vår AI) och upplev smidigheten.
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
                   Så automatiserar du telefonhantering
                </h4>
                <p className="text-white/70 text-sm">
                  Guide för att komma igång med AI-agenter.
                </p>
              </Link>

               <Link
                href="/blogg/varfor-foretag-missar-samtal"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Varför Företag Missar 34% av Jobbmöjligheter
                </h4>
                <p className="text-white/70 text-sm">
                  Statistik och lösningar på missade samtal.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
