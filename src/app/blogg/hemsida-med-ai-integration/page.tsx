import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Hemsida med AI-integration: Framtidens kundservice | Agenter Group'
const description =
  'Din hemsida är ditt digitala skyltfönster. Med AI-integration kan den också bli din bästa säljare och kundtjänstmedarbetare. Lär dig hur.'
const url = '/blogg/hemsida-med-ai-integration'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI integration hemsida',
    'smart kundservice',
    'chattbot AI',
    'konverteringsoptimering',
    'hemsida med ai',
    'Agenter Group',
    'webbutveckling AI'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Webbutveckling', 'AI-integration', 'Kundservice', 'Konvertering']
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
                Webbutveckling
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                AI-Integration
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
            Hemsida med AI-integration: Framtidens kundservice
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Din hemsida är öppen dygnet runt, men är din kundservice det?
            Med AI-integration förvandlar du din webbplats från en statisk broschyr till en interaktiv, säljande assistent.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              Besökare stannar i genomsnitt mindre än 15 sekunder på en hemsida. Om de inte hittar vad de söker, lämnar de. En statisk FAQ-sida räcker inte längre. Dagens konsumenter vill ha svar nu, och de vill ha det enkelt.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mer än bara en chattbot</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              När vi pratar om AI-integration på hemsidor menar vi inte de gamla, dumma chattbotarna som bara kunde svara &quot;Jag förstår inte&quot;. Vi pratar om avancerade LLM:er (Large Language Models) som tränats på just din företagsdata.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold mb-4 text-white">Vad kan en modern AI-assistent på hemsidan göra?</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">1.</span>
                  <span><strong>Produktrekommendationer:</strong> &quot;Jag letar efter en present till min pappa som gillar golf.&quot; -&gt; AI:n föreslår relevanta produkter från er katalog.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">2.</span>
                  <span><strong>Support dygnet runt:</strong> &quot;Hur returnerar jag en vara?&quot; -&gt; AI:n ger instruktioner och länkar till returformuläret.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">3.</span>
                  <span><strong>Leadgenerering:</strong> &quot;Vill du boka en demo för att se hur det funkar?&quot; -&gt; AI:n samlar in kontaktuppgifter direkt i chatten.</span>
                </li>
                 <li className="flex gap-3">
                  <span className="text-brand-400 font-bold">4.</span>
                  <span><strong>Flerspråkighet:</strong> Besökaren skriver på spanska? AI:n svarar på spanska, även om din hemsida är på svenska.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Varför konverteringen ökar</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Det handlar om att minska friktionen. Varje klick en användare måste göra ökar risken att de hoppar av. Med en AI-assistent kan besökaren ställa sin fråga direkt och få svaret serverat, istället för att leta igenom menyer.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Dessutom är AI:n proaktiv. Den kan &quot;poppa upp&quot; med ett erbjudande baserat på vilken sida besökaren tittar på, precis som en butikssäljare som frågar &quot;Kan jag hjälpa till med något?&quot; när du står och funderar.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Integrationen: Enklare än du tror</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att lägga till intelligens på din hemsida kräver inte att du bygger om den från grunden. Oftast handlar det om att lägga till ett litet script (några rader kod) som aktiverar AI-widgeten.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Datan är nyckeln</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              För att AI:n ska vara smart måste den veta allt om ditt företag. Vi &quot;matar&quot; den med:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li>Er befintliga hemsida (den läser in alla sidor).</li>
              <li>Produktkataloger och prislistor.</li>
              <li>Tidigare supportärenden och FAQ.</li>
              <li>PDF-dokument och manualer.</li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-6">
              När detta är gjort har du en expert som kan allt om företaget, aldrig sover och kan prata med tusentals kunder samtidigt.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Framtidens kundservice är proaktiv</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Vi går mot en framtid där hemsidor inte längre är statiska dokument, utan dynamiska konversationer. Företag som anammar detta tidigt får en enorm konkurrensfördel. Det handlar om att möta kunden där den är, på det sätt den vill bli bemött.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Gör din hemsida intelligent</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Vill du uppgradera din hemsida med en AI-assistent? Vi hjälper dig med integrationen från start till mål.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Kontakta oss för demo
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
                   Mötesbokning 24/7 med AI
                </h4>
                <p className="text-white/70 text-sm">
                  Så fyller du kalendern automatiskt.
                </p>
              </Link>

               <Link
                href="/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Automatisera telefonhantering
                </h4>
                <p className="text-white/70 text-sm">
                  Guide till röststyrd AI för telefon.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
