import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Så automatiserar du telefonhantering med AI-agenter | Agenter Group'
const description =
  'Lär dig hur du steg för steg automatiserar din telefonhantering med AI-agenter. Från val av lösning till implementation och optimering för bättre kundservice.'
const url = '/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'automatisk telefonhantering',
    'AI agenter',
    'telefonpassning',
    'automatisera kundtjänst',
    'röststyrd AI',
    'Agenter Group',
    'effektivisera företag'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Automatisering', 'AI-agenter', 'Telefonhantering', 'Guide']
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
                Automatisering
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                AI-Agenter
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
            Så automatiserar du telefonhantering med AI-agenter
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Att sitta i telefonkö eller trycka &quot;1 för sälj&quot; är ett minne blott.
            Med moderna AI-agenter kan du automatisera hela din telefonhantering och ge kunderna svar direkt.
            Här är din guide till hur du gör det.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Telefonen är fortfarande en av de viktigaste kanalerna för kundkontakt. Men att manuellt hantera samtal är tidskrävande, dyrt och ineffektivt. Kunder vill inte vänta, och personalen vill inte svara på samma enkla frågor om och om igen. Lösningen? Automatisering med AI.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vad är en AI-agent för telefon?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Till skillnad från gamla tiders knappvalssystem (&quot;Tryck 1 för...&quot;), är en AI-agent en röststyrd robot som förstår naturligt tal. Du pratar med den precis som med en människa. Den förstår sammanhang, kan hämta information från dina system och utföra uppgifter.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold mb-4 text-white">Vad kan en AI-agent göra?</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-white/80">
                <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Svara på vanliga frågor (FAQ)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Boka och omboka tider i kalendern
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Ta emot beställningar
                </li>
                 <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Koppla samtal till rätt specialist
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Samla in kontaktuppgifter (leads)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-400 text-xl">✓</span>
                  Skicka SMS-bekräftelser
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Steg-för-steg: Så automatiserar du</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Kartlägg dina samtal</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Innan du kopplar in en AI måste du veta vad den ska lösa. Analysera dina inkommande samtal under en vecka.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li>Vilka är de vanligaste frågorna? (Öppettider, priser, status på order?)</li>
              <li>Hur många samtal handlar om bokningar?</li>
              <li>Vilka samtal kräver faktiskt en människa?</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Definiera ton och personlighet</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Din AI-agent är en förlängning av ditt varumärke. Ska den vara formell och professionell (&quot;Välkommen till Advokatbyrån X&quot;) eller avslappnad och vänlig (&quot;Hej och välkommen till oss!&quot;)? Detta sätter tonen för hela kundupplevelsen.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Integration med system</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              För att AI:n ska göra nytta på riktigt måste den kunna &quot;prata&quot; med dina andra system.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Kalender:</strong> (Google Calendar, Outlook) för bokningar.</li>
              <li><strong>CRM:</strong> (Salesforce, HubSpot, Pipedrive) för att logga samtal och skapa leads.</li>
              <li><strong>Mail/SMS:</strong> För att skicka bekräftelser.</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Bygg flödet (Scripting)</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Även om AI:n är smart, behöver den instruktioner. Du sätter upp ett &quot;Knowledge Base&quot; – en databas med information om ditt företag som AI:n använder för att svara. Du sätter också upp regler: &quot;Om kunden frågar om X, gör Y&quot;.
            </p>
            <div className="bg-brand-500/10 p-4 rounded-lg border-l-4 border-brand-500 text-white/80 italic mb-6">
              &quot;Om kunden vill boka tid, kolla kalendern. Om det finns tid, boka och skicka SMS. Om inte, föreslå nästa lediga tid.&quot;
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Test och lansering</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Börja smått. Låt AI:n hantera samtal utanför ordinarie öppettider först. Lyssna på inspelningarna. Förstod den kunden? Var svaret bra? Justera instruktionerna och utöka gradvis till att hantera alla samtal.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Vanliga fallgropar att undvika</h2>

            <div className="grid gap-6 my-8">
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500/50">
                <h4 className="text-lg font-bold text-white mb-2">För krångliga menyer</h4>
                <p className="text-white/70">Tvinga inte kunden igenom långa haranger. Låt dem säga sitt ärende direkt.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500/50">
                <h4 className="text-lg font-bold text-white mb-2">Ingen &quot;Exit&quot;-knapp</h4>
                <p className="text-white/70">Det måste alltid finnas en väg att nå en människa om AI:n går bet. &quot;Vill du prata med en kollega istället?&quot;</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500/50">
                <h4 className="text-lg font-bold text-white mb-2">Glömma uppföljningen</h4>
                <p className="text-white/70">En AI som lovar att &quot;någon ringer upp&quot; måste generera en notis till personalen som faktiskt följs upp.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Framtiden är här</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Automatisering av telefonhantering handlar inte om att ta bort den personliga kontakten, utan om att förfina den. Genom att låta AI hantera rutinärenden (boka tid, öppettider, adress), frigör du tid för din personal att hantera de samtal som verkligen kräver empati och expertis.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Resultatet? Nöjdare kunder som får hjälp direkt, dygnet runt. Och nöjdare personal som slipper vara telefonväxel.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Vill du automatisera din telefon?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Vi på Agenter Group är experter på AI-agenter. Vi hjälper dig att sätta upp en skräddarsydd lösning som passar just din verksamhet.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Starta din automatisering
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
                  Jämförelse av kostnader och funktioner.
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
                  Allt du behöver för att komma igång.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
