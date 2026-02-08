import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleJsonLd, createArticleMetadata } from '@/lib/seo'

const post = blogPostsBySlug['telefonpassning-for-hantverkare']
export const metadata: Metadata = createArticleMetadata(post)

function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createArticleJsonLd(post)) }} />
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
                Hantverkare
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Telefonpassning
              </span>
            </div>
            <time className="text-sm text-white/50" dateTime={post.published}>
              Publicerad: {new Date(post.published).toLocaleDateString('sv-SE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Du står på en stege med händerna fulla eller ligger under en diskbänk när telefonen ringer.
            Svarar du? Om inte, riskerar du att kunden ringer konkurrenten. Om du svarar, tappar du fokus på jobbet.
            Detta är vardagen för tusentals hantverkare. Men det finns en lösning som varken är dyr eller krånglig.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <p className="text-white/80 leading-relaxed mb-6">
              För många småföretagare inom bygg, el, VVS och service är telefonen livlinan för nya affärer.
              Men den är också en ständig källa till stress. Varje missat samtal är potentiellt en förlorad inkomst.
              Samtidigt är det orimligt att vara tillgänglig jämt när man faktiskt måste utföra arbetet man säljer.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Problemet: Traditionell svarsservice är dyrt</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Länge har alternativet varit att anlita en traditionell telefonpassningstjänst (svarsservice).
              Det fungerar så att en extern telefonist svarar &quot;Hej, välkommen till [Ditt Företag]&quot;,
              tar ett meddelande och skickar det till dig via SMS eller mail.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              Det är bättre än inget, men det har två stora nackdelar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Kostnaden:</strong> Du betalar ofta en månadsavgift plus en kostnad per minut eller samtal. Det drar snabbt iväg.</li>
              <li><strong>Passiviteten:</strong> Telefonisten kan oftast inte svara på frågor om priser eller boka in jobb i din kalender. De är bara budbärare.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Lösningen: AI-receptionisten</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Tekniken har kommit ikapp. Idag kan en AI-agent hantera din telefonpassning med en precision och
              snabbhet som överträffar mänskliga telefonister – till en bråkdel av priset.
            </p>

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
                    <td className="py-4 font-medium">Kostnad</td>
                    <td className="py-4">Dyrt (avgift + minuttaxa)</td>
                    <td className="py-4 text-brand-200">Låg fast månadskostnad</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Tillgänglighet</td>
                    <td className="py-4">Ofta kontorstid (helg kostar extra)</td>
                    <td className="py-4 text-brand-200">Dygnet runt, året om</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Boka jobb</td>
                    <td className="py-4">Sällan</td>
                    <td className="py-4 text-brand-200">Ja, direkt i din kalender</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium">Svarstid</td>
                    <td className="py-4">Risk för kö</td>
                    <td className="py-4 text-brand-200">Omedelbart</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Scenario: Elektriker-Erik</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Låt oss titta på ett exempel. Erik är elektriker och driver eget. Han står och drar kabel i ett nybygge
              när telefonen ringer. Det är en potentiell kund som behöver hjälp med en jordfelsbrytare.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-400 mb-2">Utan AI</h3>
                <p className="text-white/70 text-sm">
                  Erik kan inte svara. Kunden ringer vidare till nästa elektriker på Google.
                  <br /><br />
                  <strong>Resultat:</strong> Erik missar ett jobb värt 4 000 kr.
                </p>
              </div>
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">Med AI</h3>
                <p className="text-white/70 text-sm">
                  AI:n svarar direkt: &quot;Hej, Eriks El! Jag kan hjälpa dig boka tid.&quot;
                  Den kollar Eriks kalender, hittar en tid på torsdag, bokar in det och skickar en bekräftelse till kunden.
                  <br /><br />
                  <strong>Resultat:</strong> Erik får en notis: &quot;Nytt jobb bokat torsdag kl 13:00&quot;. Jobbet säkrat.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Mer än bara telefonsvarare</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En modern AI-lösning kan integreras direkt med dina system. Använder du Fortnox, Visma eller
              ett specifikt branschsystem för dina arbetsordrar? I många fall kan AI:n lägga in jobbet direkt där.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-white/80 mb-6">
              <li><strong>Filtrera samtal:</strong> AI:n kan skilja på säljare (som den vänligt avvisar) och kunder (som den hjälper).</li>
              <li><strong>Akuta ärenden:</strong> Om en kund ringer om en vattenläcka, kan AI:n programmeras att skicka ett &quot;AKUT&quot;-SMS till dig direkt, så du kan ringa upp omedelbart.</li>
              <li><strong>Svara på frågor:</strong> &quot;Vad kostar en framkörning?&quot;, &quot;Har ni ROT-avdrag?&quot; – AI:n svarar på allt detta utan att störa dig.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kom igång på 15 minuter</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att skaffa telefonpassning via AI kräver ingen krånglig installation. Du vidarekopplar bara ditt nummer
              (eller sätter det på &quot;vid ej svar&quot;) till det nummer du får av oss.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              För hantverkare som vill växa, eller bara vill ha mer fritid på kvällarna utan att oroa sig för
              missade affärer, är detta den mest kostnadseffektiva investeringen man kan göra 2025.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Prova telefonpassning med AI</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Vill du slippa jaga telefonen och fokusera på hantverket? Boka en demo så visar vi hur vi kan hjälpa just ditt företag.
              </p>
              <Link
                href="/#booking-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Starta chatten
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
                <time className="text-white font-medium" dateTime={post.updated}>
                  {new Date(post.updated).toLocaleDateString('sv-SE', {
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
                   AI vs Traditionell Receptionist
                </h4>
                <p className="text-white/70 text-sm">
                  En djupdykning i kostnader och skillnader.
                </p>
              </Link>

               <Link
                href="/blogg/varfor-foretag-missar-samtal"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                   Därför missar företag samtal
                </h4>
                <p className="text-white/70 text-sm">
                  Statistik och konsekvenser av onåbarhet.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
