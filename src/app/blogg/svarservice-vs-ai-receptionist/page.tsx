import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Svarservice vs AI-receptionist: Vad är bäst för ditt företag? | Agenter Group'
const description =
  'Svarservice (callcenter) eller AI-receptionist? Vi jämför kostnad, svarstider och funktioner för att hjälpa dig välja rätt lösning för din telefonpassning.'
const url = '/blogg/svarservice-vs-ai-receptionist'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'svarservice',
    'telefonpassning',
    'AI receptionist',
    'callcenter företag',
    'svarstjänst pris',
    'Agenter Group',
    'automatisk telefonist'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Svarservice', 'Jämförelse', 'Telefonpassning', 'AI-receptionist']
  }
}

const PUBLISHED = '2025-01-23'
const UPDATED = '2025-01-23'

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
                Svarservice
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Jämförelse
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
            Svarservice vs AI-receptionist: Vad är bäst för ditt företag?
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Att missa samtal är att missa affärer. Många företag vänder sig till en traditionell svarservice för att hantera telefonpassningen. Men med framväxten av AI-receptionister finns nu ett snabbare, smartare och mer kostnadseffektivt alternativ.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              För många företagare är telefonen en ständig källa till stress. Det ringer när du sitter i möte, när du äter lunch, eller när du försöker fokusera på kärnverksamheten. Historiskt sett har lösningen varit att antingen anställa en receptionist (dyrt) eller anlita en extern svarservice (ofta varierande kvalitet och kostnad).
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Idag har spelplanen ritats om helt. AI-receptionister erbjuder en nivå av tillgänglighet och integration som tidigare var omöjlig. Men hur står de sig egentligen mot en klassisk svarservice?
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vad är en traditionell svarservice?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En traditionell svarservice är i grunden ett externt callcenter. När du inte kan svara, kopplas samtalet vidare till en pool av telefonister som svarar i ditt företags namn.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Hur det fungerar:</strong> Mänskliga agenter tar emot samtal, noterar ärendet och skickar ett meddelande till dig (ofta via e-post eller SMS).</li>
              <li><strong>Prismodell:</strong> Ofta en fast månadsavgift plus en rörlig kostnad per samtal eller per minut.</li>
              <li><strong>Huvudsyfte:</strong> Att agera &quot;mänsklig röstbrevlåda&quot; och filtrera samtal.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vad är en AI-receptionist?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist är en digital röstassistent som använder avancerad språkteknologi för att föra naturliga konversationer med dina inringare. Det är inte en enkel &quot;tryck 1 för sälj&quot;-meny, utan en intelligent agent.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Hur det fungerar:</strong> AI:n svarar omedelbart, förstår vad uppringaren säger, svarar på frågor, och kan utföra handlingar som att boka möten direkt i din kalender.</li>
              <li><strong>Prismodell:</strong> Oftast en fast månadskostnad för obegränsad eller mycket hög tillgänglighet.</li>
              <li><strong>Huvudsyfte:</strong> Att lösa ärendet direkt, inte bara ta emot ett meddelande.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Jämförelse: 5 avgörande faktorer</h2>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">1. Kostnad & Prismodell</h3>
                <p className="text-white/80 mb-4">
                  <strong>Svarservice:</strong> Kan bli dyrt snabbt. Du betalar ofta per samtal. Om du har en kampanj och det ringer mycket, skjuter kostnaden i höjden. Kvällar och helger har ofta högre taxa.
                </p>
                <p className="text-brand-300 font-semibold">
                  <strong>AI-receptionist:</strong> Förutsägbar kostnad. Du betalar en fast avgift och behöver inte oroa dig för att fakturan skenar iväg bara för att det ringer mycket.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">2. Svarstider & Köer</h3>
                <p className="text-white/80 mb-4">
                  <strong>Svarservice:</strong> Eftersom det är människor som svarar kan det uppstå köer. Om många ringer samtidigt till callcentret (inte bara till dig) får din kund vänta.
                </p>
                <p className="text-brand-300 font-semibold">
                  <strong>AI-receptionist:</strong> Noll väntetid. AI:n har oändlig kapacitet och kan hantera 10 eller 1000 samtal samtidigt utan att någon behöver vänta.
                </p>
              </div>

               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">3. Integration & Handling</h3>
                <p className="text-white/80 mb-4">
                  <strong>Svarservice:</strong> Agenten har sällan tillgång till dina interna system. De kan oftast bara ta ett namn och nummer och be dig ringa upp. Det skapar merarbete för dig.
                </p>
                <p className="text-brand-300 font-semibold">
                  <strong>AI-receptionist:</strong> Kan integreras direkt med din kalender (Google/Outlook) och CRM. Den kan boka in möten, kolla lediga tider och registrera nya leads direkt.
                </p>
              </div>

               <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">4. Kunskap & Konsistens</h3>
                <p className="text-white/80 mb-4">
                  <strong>Svarservice:</strong> Personalomsättningen på callcenters är ofta hög. Agenten som svarar kanske aldrig har hört talas om ditt företag förut och läser bara från ett enkelt manus.
                </p>
                <p className="text-brand-300 font-semibold">
                  <strong>AI-receptionist:</strong> Tränas specifikt på ditt företag. Den glömmer aldrig information, har alltid rätt tonläge och ger konsekventa svar varje gång.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">När ska man välja vad?</h2>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border-l-4 border-white/30">
                <h4 className="text-lg font-bold text-white mb-2">Välj en traditionell svarservice om:</h4>
                <p className="text-white/70">
                  Dina samtal kräver extremt hög grad av empati (t.ex. jourhavande präst eller krisstöd) eller om uppgiften kräver komplexa manuella bedömningar som inte följer någon logik.
                </p>
              </div>

              <div className="bg-brand-500/10 p-6 rounded-xl border-l-4 border-brand-500">
                <h4 className="text-lg font-bold text-white mb-2">Välj en AI-receptionist om:</h4>
                <p className="text-white/70">
                  Du vill att dina kunder ska kunna boka tid direkt, få svar på vanliga frågor dygnet runt, och du vill sänka dina kostnader samtidigt som du ökar servicenivån. Det är det optimala valet för hantverkare, konsulter, kliniker och tjänsteföretag.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Slutsats: Framtiden är automatiserad</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Traditionell svarservice har fyllt en viktig funktion i decennier, men teknologin har nu sprungit om. Att betala per minut för att någon ska ta ett meddelande är ineffektivt när en AI kan lösa hela ärendet direkt – till en bråkdel av kostnaden.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Genom att byta till en AI-receptionist går du från att bara &quot;ta emot samtal&quot; till att faktiskt hantera affärer automatiskt. Du sparar tid, dina kunder får snabbare hjälp, och du missar aldrig en möjlighet.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Jämför oss med din nuvarande lösning</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Nyfiken på hur mycket smartare en AI-receptionist är jämfört med en vanlig svarservice? Boka en demo så visar vi skillnaden live.
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
                href="/blogg/ai-receptionist-vs-traditionell-receptionist"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   AI-receptionist vs Traditionell receptionist
                </h4>
                <p className="text-white/70 text-sm">
                  En djupdykning i skillnaderna mellan att anställa och att använda AI.
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
                  Om den dolda kostnaden av missade samtal.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
