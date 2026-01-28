import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AI-receptionist för kliniker: Maximera patienttid och minimera admin | Agenter Group'
const description =
  'Driver du klinik? Lär dig hur en AI-receptionist kan hantera tidsbokning, avbokningar och frågor dygnet runt – så att du kan fokusera 100% på patienterna.'
const url = '/blogg/ai-receptionist-for-kliniker'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist tandläkare',
    'telefonpassning klinik',
    'bokningssystem vård',
    'AI kundtjänst sjukvård',
    'automatisk tidsbokning',
    'Agenter Group',
    'effektivisering klinik'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Klinik', 'Hälso- och sjukvård', 'Effektivisering', 'AI-lösningar']
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
            <span className="text-white/80">AI-receptionist för kliniker</span>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mt-4">
            Klinik & Hälsa
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            AI-receptionist för kliniker: Maximera patienttid och minimera admin
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Slipp avbryta behandlingar för att svara i telefon. Låt AI hantera bokningar och frågor dygnet runt, säkert och GDPR-anpassat.
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
              Du står mitt i en behandling. Handskarna är på, patienten gapar eller ligger på britsen. Då ringer telefonen.
              Det är en klassisk stressfaktor för tandläkare, fysioterapeuter och andra vårdgivare.
              Svarar du inte, riskerar du att missa en ny patient. Svarar du, störs vårdögonblicket.
            </p>

            <p className="text-white/80">
              Många kliniker löser detta genom att ha en receptionist på hel- eller deltid, eller genom att anlita extern telefonpassning.
              Men personal är dyrt, och traditionell telefonpassning kan sällan boka tider direkt i ditt system.
              Här kommer AI-receptionisten in i bilden som en &quot;game changer&quot; för kliniker.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Problemet: Admin äter upp vårdtid</h2>
            <p className="text-white/80">
              För en mindre klinik är administrationen ofta en tung börda. Samtal om tidsbokning, ombokningar
              och enkla frågor som &quot;var ligger ni?&quot; eller &quot;vad kostar en undersökning?&quot; tar tid från det som faktiskt genererar intäkter: vården.
            </p>
            <p className="text-white/80">
              Dessutom ringer många patienter utanför kontorstid – på kvällar eller helger när de själva är lediga.
              Om ingen svarar då, går de ofta vidare till nästa klinik på Google.
            </p>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Lösningen: En AI som kan ditt bokningssystem</h2>
            <p className="text-white/80">
              En modern AI-receptionist är inte en enkel röstbrevlåda. Det är en intelligent röstagent som integreras med din kalender eller ditt bokningssystem.
              Den kan föra naturliga samtal på svenska och hantera komplexa ärenden.
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-1">
              <li><strong>Boka tider:</strong> AI:n ser lediga tider i realtid och bokar in patienten direkt.</li>
              <li><strong>Hantera avbokningar:</strong> Patienten ringer och säger &quot;jag kan inte komma imorgon&quot;. AI:n tar bort tiden och gör den ledig för andra.</li>
              <li><strong>Svara på frågor:</strong> Prislistor, öppettider, vägbeskrivning och information om högkostnadsskydd.</li>
              <li><strong>Prioritera akutfall:</strong> Om en patient ringer om akut tandvärk kan AI:n identifiera detta och antingen boka en akuttid eller skicka ett SMS direkt till tandläkaren.</li>
            </ul>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Jämförelse: Alternativen för din klinik</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-white/80 border-collapse text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-4 font-semibold text-white">Funktion</th>
                    <th className="py-3 pr-4 font-semibold text-white">Receptionist (Människa)</th>
                    <th className="py-3 pr-4 font-semibold text-white">Traditionell Svarsservice</th>
                    <th className="py-3 font-semibold text-brand-300">AI-Receptionist</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Kostnad/mån</td>
                    <td className="py-3 pr-4">Hög (Lön + Soc)</td>
                    <td className="py-3 pr-4">Medel (Start + minutpris)</td>
                    <td className="py-3 text-brand-200">Låg (Fast pris)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Öppettider</td>
                    <td className="py-3 pr-4">Kontorstid (8-17)</td>
                    <td className="py-3 pr-4">Kontorstid (oftast)</td>
                    <td className="py-3 text-brand-200">Dygnet runt (24/7)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Direktbokning</td>
                    <td className="py-3 pr-4">Ja</td>
                    <td className="py-3 pr-4">Sällan/Aldrig</td>
                    <td className="py-3 text-brand-200">Ja, full integration</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Svarstid</td>
                    <td className="py-3 pr-4">Kan vara upptagen</td>
                    <td className="py-3 pr-4">Kan vara kö</td>
                    <td className="py-3 text-brand-200">Omedelbar</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Scenario: Tandläkare Tove</h2>
            <p className="text-white/80">
              Låt oss titta på hur det fungerar i praktiken. Tove driver en liten privatklinik. Hon har ingen anställd receptionist utan sköter allt själv.
            </p>

            <div className="glass rounded-xl p-6 border border-white/10 my-6 space-y-4">
              <h3 className="font-bold text-lg text-white">Utan AI:</h3>
              <p className="text-white/70 italic">
                Tove behandlar en patient kl 14:30. Telefonen ringer. Hon låter det ringa.
                Den som ringer är en nyinflyttad person med ilningar i tänderna. När ingen svarar ringer personen nästa klinik på listan och får en tid där.
                <br/>
                <span className="text-red-400 font-semibold not-italic block mt-2">Förlust: En potentiell livstidspatient.</span>
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-brand-500/30 bg-brand-500/5 my-6 space-y-4">
              <h3 className="font-bold text-lg text-brand-300">Med AI:</h3>
              <p className="text-white/70 italic">
                Telefonen ringer kl 14:30. Toves AI-receptionist svarar efter en signal.
                <br/>
                &quot;Hej och välkommen till Toves Tandvård. Hur kan jag hjälpa dig?&quot;
                <br/>
                Patienten förklarar problemet. AI:n kollar Toves tidbok och hittar en tid kl 10:00 dagen efter.
                &quot;Jag har en tid imorgon klockan 10:00, fungerar det?&quot;
                <br/>
                Patienten tackar ja. AI:n bokar tiden och skickar en SMS-bekräftelse.
                <br/>
                <span className="text-green-400 font-semibold not-italic block mt-2">Vinst: Ny patient bokad utan att Tove lyft ett finger.</span>
              </p>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mt-10">Säkerhet och Patientdata (GDPR)</h2>
            <p className="text-white/80">
              Inom vården är integritet A och O. Våra AI-lösningar är byggda med &quot;privacy by design&quot;.
              Ingen känslig patientdata sparas i öppna modeller, och all kommunikation är krypterad.
              AI:n agerar strikt efter de instruktioner ni sätter upp och kan programmeras att aldrig ge ut viss information via telefon.
            </p>
            <p className="text-white/80 mt-2">
              Läs mer om hur vi arbetar med säkerhet i vår <Link href="/blogg/ai-receptionist-2025-komplett-guide" className="text-brand-400 hover:text-brand-300 underline">kompletta guide</Link>.
            </p>

            <div className="glass rounded-2xl p-6 mt-10 border border-white/10">
              <div className="font-semibold text-lg">Vill du modernisera din klinik?</div>
              <p className="text-white/80 mt-1">
                Boka en kostnadsfri demo så visar vi hur vi kan koppla en AI-receptionist till just ditt bokningssystem.
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
                  <span className="text-white">Tandläkare, Fysio, Skönhet</span>
                </li>
                <li className="flex justify-between">
                  <span>Tillgänglighet:</span>
                  <span className="text-white">24/7</span>
                </li>
                <li className="flex justify-between">
                  <span>Integration:</span>
                  <span className="text-white">Bokningssystem</span>
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
