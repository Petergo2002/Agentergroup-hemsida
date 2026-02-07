import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCTA from '../../components/BlogCTA'


import { Calendar, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react'

const title = 'Varför Företag Missar 34% av Jobbmöjligheter – och Hur AI Kan Hjälpa | Agenter Group'
const description =
  'Upptäck varför 34% av jobbmöjligheter försvinner när kandidater missar första samtalet. Lär dig hur AI-receptionister säkerställer att ditt företag aldrig missar ett viktigt samtal igen.'
const url = '/blogg/varfor-foretag-missar-samtal/'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'missa aldrig ett samtal',
    'AI receptionist',
    'missade samtal företag',
    'automatisk telefonhantering',
    'AI agenter',
    'kundservice 24/7',
    'Agenter Group'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url
  }
}

const PUBLISHED = '2025-01-21'
const UPDATED = '2025-01-21'

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
    <div className="min-h-screen bg-black text-white font-sans">
      <JsonLd />

      <main>
        {/* Hero Header Section */}
        <section className="relative h-[40vh] min-h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />

          <div className="container relative px-4 mx-auto z-20 pb-12">
            <div>
              <Link
                href="/blogg"
                className="inline-flex items-center gap-2 text-[#FF5D00] hover:text-white transition-colors mb-6 text-sm font-mono uppercase tracking-widest"
              >
                <ArrowLeft size={16} />
                Tillbaka till bloggen
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter max-w-4xl">
                Missade samtal <span className="text-[#FF5D00]">är</span> förlorade affärer.
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Insikt
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Data
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF5D00]" />
                {PUBLISHED}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF5D00]" />
                6 min läsning
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Varför Företag Missar 34% av Jobbmöjligheter – och Hur AI Kan Hjälpa
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6 italic">
            "Visste du att 34% av jobbmöjligheter försvinner när kandidater missar första samtalet?
            Detta är inte bara en statistik – det är en varningssignal för alla företag som förlitar sig på telefonkommunikation."
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Den Dolda Kostnaden av Missade Samtal</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Varje missat samtal är inte bara en förlorad konversation – det är en potentiell förlorad kund, ett missat affärstillfälle, eller en kandidat som väljer en konkurrent istället. I dagens snabba affärsvärld har människor inte tid att vänta. Om de inte får svar direkt, går de vidare till nästa alternativ på Google.
            </p>

            <div className="p-8 md:p-12 rounded-[32px] bg-[#0F0F0F] border border-[#FF5D00]/10 my-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FF5D00" strokeWidth="1">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <div className="w-2 h-8 bg-[#FF5D00] rounded-full" />
                Statistiken som förändrar allt
              </h3>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FF5D00] font-mono">34%</div>
                  <div className="text-sm text-white/60 leading-relaxed">av jobbmöjligheter går förlorade vid första missade samtalet.</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FF5D00] font-mono">80%</div>
                  <div className="text-sm text-white/60 leading-relaxed">av alla uppringare lämnar inget meddelande på telefonsvararen.</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FF5D00] font-mono">67%</div>
                  <div className="text-sm text-white/60 leading-relaxed">kontaktar en konkurrent direkt om de inte får svar.</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#FF5D00] font-mono">90%</div>
                  <div className="text-sm text-white/60 leading-relaxed">förväntar sig svar inom 10 minuter.</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Varför Missar Företag Samtal?</h2>
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-bold text-white mb-2">1. Begränsade Öppettider</h3>
                <p className="text-white/60 leading-relaxed">
                  De flesta företag har öppet 08-17, men kunderna ringer när det passar dem – ofta sent på kvällen eller tidigt på morgonen.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-white mb-2">2. Överbelastad Personal</h3>
                <p className="text-white/60 leading-relaxed">
                  När teamet är upptaget med kunder på plats eller andra uppgifter prioriteras ofta inte telefonen, vilket leder till tappade leads.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-bold text-white mb-2">3. Sjukdom och Semester</h3>
                <p className="text-white/60 leading-relaxed">
                  En enda sjukdag utan backup kan kosta företaget tio- eller hundratusentals kronor i förlorade uppdrag.
                </p>
              </section>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Lösningen: AI Frontdesk Maja</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              En AI-receptionist som Maja är inte bara en svara-maskin. Det är en intelligent assistent som kan hantera samtal dygnet runt, boka möten direkt i din kalender och hämta information från ditt CRM.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              {[
                { title: "Tillgänglig 24/7", desc: "Aldrig mer en stängd dörr. Maja svarar alltid, oavsett tid på dygnet." },
                { title: "Smart Bokning", desc: "Maja bokar in möten direkt i din Google eller Outlook-kalender." },
                { title: "Massiv Skalbarhet", desc: "Hanterar 100 samtal samtidigt lika enkelt som ett." },
                { title: "Ingen Sjuklön", desc: "En fast låg månadskostnad utan sociala avgifter eller semesterersättning." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-[#FF5D00]/20 transition-colors group">
                  <CheckCircle2 className="text-[#FF5D00] mb-4 opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Bli Oerhörd</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Svara på varje samtal</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Låt inte nästa stora affär gå till en konkurrent bara för att ni satt i möte. Aktivera Maja och se hur din konvertering skjuter i höjden.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Publicerad av</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group AB</span>
            </div>
            <div className="flex gap-4">
              <Link href="/blogg" className="text-white/40 hover:text-[#FF5D00] transition-colors text-sm font-mono uppercase tracking-widest">
                Fler Artiklar
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
