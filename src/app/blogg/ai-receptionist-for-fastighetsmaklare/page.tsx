import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för fastighetsmäklare: Boka fler visningar 24/7 | Agenter Group'
const description =
  'Missa aldrig en potentiell köpare. Lär dig hur en AI-receptionist kan avlasta dig genom att svara på frågor om objekt och boka visningar dygnet runt.'
const url = '/blogg/ai-receptionist-for-fastighetsmaklare'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist fastighetsmäklare',
    'telefonpassning mäklare',
    'boka visning automatiskt',
    'AI kundtjänst fastighet',
    'Agenter Group',
    'effektivisering mäklare'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Fastighetsmäklare', 'Försäljning', 'Effektivisering', 'AI-lösningar']
  }
}

const PUBLISHED = '2025-05-15'
const UPDATED = '2025-05-15'

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}

export default function BlogPost() {
  return (
    <main>
      <JsonLd />

      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container py-20 md:py-28 relative">
          <div className="text-sm text-white/60 flex items-center gap-2">
            <Link href="/blogg" className="hover:text-white">Blogg</Link>
            <span>›</span>
            <span className="text-white/80">AI-receptionist för fastighetsmäklare</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mt-4">
            Fastighet
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            AI-receptionist för fastighetsmäklare: Boka fler visningar 24/7
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Som mäklare är du ständigt på språng. Låt en AI hantera samtalen när du sitter i möte eller håller visning.
            Svara på frågor om objekt och boka in spekulanter automatiskt.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-secondary">Hem</Link>
            <Link href="/#demo" className="btn btn-primary">Boka demo</Link>
          </div>
          <div className="mt-4 text-xs text-white/50">
            Publicerad {new Date(PUBLISHED).toLocaleDateString('sv-SE')} · Uppdaterad {new Date(UPDATED).toLocaleDateString('sv-SE')}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_320px] gap-10">
          {/* Article body */}
          <article className="prose prose-invert max-w-none">
            {/* Lead paragraph */}
            <p className="lead text-xl text-white/90">
              Telefonen ringer. Igen. Du står mitt i en visning av en sekelskifteslägenhet på Östermalm eller en villa i förorten.
              Du kan inte svara. Den som ringer är kanske en spekulant på ett annat objekt, eller ännu bättre – en potentiell säljare som vill ha en värdering.
            </p>

            <p className="text-white/80">
              För fastighetsmäklare är tillgänglighet allt. Men verkligheten med visningar, kundmöten och kontraktsskrivning gör det omöjligt att svara på alla samtal.
              Traditionell telefonpassning är ofta dyrt och saknar branschkunskap. Lösningen? En AI-receptionist specialiserad på att hantera dina objekt och din kalender.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Problemet: Varje missat samtal är en missad affär</h2>
            <p className="text-white/80">
              Bostadsmarknaden rör sig snabbt. Spekulanter som ringer på en annons har ofta enkla frågor: &quot;När är visningen?&quot;, &quot;Vad är driftkostnaden?&quot; eller &quot;Finns det hiss?&quot;.
              Om de inte får svar direkt ringer de ofta vidare till nästa objekt eller tappar intresset.
            </p>
            <p className="text-white/80">
              Att lyssna av röstbrevlådan och ringa tillbaka senare är tidskrävande, och ofta har kunden redan gått vidare.
              Dessutom ringer många spekulanter på kvällar och helger när kontoret är obemannat.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Lösningen: En AI som kan dina objekt</h2>
            <p className="text-white/80">
              En modern AI-receptionist kan kopplas direkt till ditt fastighetssystem eller din hemsida.
              Den kan svara på specifika frågor om alla dina aktiva objekt dygnet runt.
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li><strong>Objektinfo:</strong> AI:n svarar på frågor om yta, avgift, byggår och kommande visningar.</li>
              <li><strong>Boka visning:</strong> Spekulanten kan boka in sig på en visning direkt via samtalet. AI:n uppdaterar din lista i realtid.</li>
              <li><strong>Boka värdering:</strong> Om en säljare ringer, kan AI:n boka in ett intagsmöte direkt i din kalender.</li>
              <li><strong>Screening:</strong> AI:n kan sålla bort säljsamtal och spam, och bara skicka vidare de viktiga affärerna till dig.</li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Jämförelse: AI vs Traditionell Svarsservice</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-white/80 border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 font-semibold text-white">Funktion</th>
                    <th className="py-3 pr-4 font-semibold text-white">Traditionell Svarsservice</th>
                    <th className="py-3 font-semibold text-brand-300">AI-Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Objektkännedom</td>
                    <td className="py-3 pr-4">Låg (generella svar)</td>
                    <td className="py-3 text-brand-200">Hög (kan alla dina objekt)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Bokning av visning</td>
                    <td className="py-3 pr-4">Ofta manuellt/svårt</td>
                    <td className="py-3 text-brand-200">Direkt i systemet</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Tillgänglighet</td>
                    <td className="py-3 pr-4">Kontorstid/Begränsad</td>
                    <td className="py-3 text-brand-200">Dygnet runt (24/7)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Kostnad</td>
                    <td className="py-3 pr-4">Per minut/samtal (dyrt)</td>
                    <td className="py-3 text-brand-200">Fast låg månadskostnad</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Scenario: Söndag kväll kl 20:30</h2>
            <p className="text-white/80">
              Du har precis avslutat veckans visningar och tar en ledig kväll. Men för spekulanterna är det nu letandet börjar på allvar.
            </p>

            <div className="glass rounded-xl p-6 border border-brand-500/30 bg-brand-500/5 my-6 space-y-4">
              <h3 className="font-bold text-lg text-brand-300">Samtalet:</h3>
              <p className="text-white/70 italic">
                En spekulant ringer på objektet på Storgatan 5.
                <br/>
                <strong>AI:</strong> &quot;Välkommen till Mäklarhuset X. Jag är en AI-assistent. Ringer du gällande en specifik bostad?&quot;
                <br/>
                <strong>Kund:</strong> &quot;Ja, trean på Storgatan.&quot;
                <br/>
                <strong>AI:</strong> &quot;Just det, den fina trean med balkong. Visningen är på tisdag klockan 17:30. Vill du att jag bokar in dig?&quot;
                <br/>
                <strong>Kund:</strong> &quot;Ja gärna. Vad är avgiften förresten?&quot;
                <br/>
                <strong>AI:</strong> &quot;Månadsavgiften är 3 450 kr och då ingår värme och vatten. Ska jag boka in dig på tisdag?&quot;
                <br/>
                <span className="text-green-400 font-semibold not-italic block mt-2">Resultat: En anmäld spekulant och en nöjd kund, medan du är ledig.</span>
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Konkurrensfördel</h2>
            <p className="text-white/80">
              I en marknad där objekt kan ligga ute länge är service en viktig differentiator. Att alltid vara nåbar ger ett proffsigt intryck.
              Säljare (dina uppdragsgivare) uppskattar också att veta att ingen spekulant någonsin möts av en upptaget-ton när de ringer om deras bostad.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Säkerhet och GDPR</h2>
            <p className="text-white/80">
              All data hanteras krypterat och enligt GDPR. Vi tränar AI:n specifikt för din verksamhet, vilket innebär att den aldrig hittar på fakta (&quot;hallucinerar&quot;) om dina objekt.
              Om den inte vet svaret, tar den ett meddelande och ber dig återkomma.
            </p>

            <div className="glass rounded-2xl p-6 mt-10 border border-white/10">
              <div className="font-semibold text-lg">Vill du effektivisera din mäklarvardag?</div>
              <p className="text-white/80 mt-1">
                Boka en demo så visar vi hur vi kan koppla en AI-receptionist till ditt flöde och dina objekt.
              </p>
              <Link href="/#demo" className="btn btn-primary mt-4">Boka demo</Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Snabbfakta</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>Passar:</span>
                  <span className="text-white">Mäklare & Byråer</span>
                </li>
                <li className="flex justify-between">
                  <span>Funktioner:</span>
                  <span className="text-white">Bokning, Objektinfo</span>
                </li>
                <li className="flex justify-between">
                  <span>Tillgänglighet:</span>
                  <span className="text-white">24/7</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 border border-white/10">
              <div className="font-semibold">Relaterat</div>
              <ul className="mt-3 text-white/70 space-y-2 text-sm">
                <li>
                  <Link href="/blogg/ai-receptionist-vs-traditionell-receptionist" className="hover:text-white flex items-center gap-2">
                    <span>→</span> AI vs Traditionell
                  </Link>
                </li>
                <li>
                  <Link href="/blogg/varfor-foretag-missar-samtal" className="hover:text-white flex items-center gap-2">
                    <span>→</span> Missade samtal
                  </Link>
                </li>
                <li>
                  <Link href="/#demo" className="hover:text-white flex items-center gap-2">
                    <span>→</span> Boka demo
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
