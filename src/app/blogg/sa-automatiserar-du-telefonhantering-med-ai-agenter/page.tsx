import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCTA from '../../components/BlogCTA'


import { Calendar, Clock, ArrowLeft, PhoneForwarded, Settings2, UserPlus, Headphones } from 'lucide-react'

const title = 'Så automatiserar du telefonhantering med AI-agenter | Agenter Group'
const description =
  'Lär dig hur du steg för steg automatiserar din telefonhantering med AI-agenter. Från val av lösning till implementation och optimering.'
const url = '/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter/'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'automatisk telefonhantering',
    'AI agenter',
    'telefonpassning',
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
                Lämna luren <span className="text-[#FF5D00]">till</span> AI.
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Automatisering
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                AI-Agenter
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF5D00]" />
                {PUBLISHED}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF5D00]" />
                9 min läsning
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            Så automatiserar du telefonhantering med AI-agenter
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6 italic">
            "Att sitta i telefonkö eller trycka '1 för sälj' är ett minne blott. Med moderna AI-agenter kan du automatisera hela din telefonhantering och ge kunderna svar direkt."
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Vad är en AI-agent för telefon?</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Till skillnad från gamla tiders knappvalssystem, är en AI-agent en röststyrd lösning som förstår naturligt tal. Du pratar med den precis som med en människa. Den förstår sammanhang, kan hämta information från dina system och utföra uppgifter i realtid.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-12">
              {[
                { icon: PhoneForwarded, title: "Svara på FAQ", text: "Låt AI:n hantera alla repetitiva frågor direkt." },
                { icon: Settings2, title: "CRM Integration", text: "Logga samtal och skicka leads direkt till HubSpot." },
                { icon: UserPlus, title: "Lead Qualify", text: "Kvalificera inkommande leads innan de når säljaren." },
                { icon: Headphones, title: "Skalbarhet", text: "Svara på 100 samtal samtidigt utan väntetid." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-[#0F0F0F] border border-white/5 hover:border-[#FF5D00]/20 transition-all group">
                  <div className="p-3 bg-[#FF5D00]/10 rounded-2xl w-fit mb-6 text-[#FF5D00] group-hover:bg-[#FF5D00]/20 transition-colors">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Steg-för-steg: Så automatiserar du</h2>
            <div className="space-y-12 my-12">
              <div className="relative pl-12 border-l border-white/10">
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-[#FF5D00] rounded-full shadow-[0_0_15px_#FF5D00]" />
                <h3 className="text-xl font-bold text-white mb-2">1. Kartlägg dina samtal</h3>
                <p className="text-white/50 leading-relaxed">Analysera dina inkommande samtal. Vilka frågor är vanligast? Hur många handlar om orders, och hur många handlar om enkla öppettider?</p>
              </div>
              <div className="relative pl-12 border-l border-white/10">
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-[#FF5D00] rounded-full shadow-[0_0_15px_#FF5D00]" />
                <h3 className="text-xl font-bold text-white mb-2">2. Definiera rösten</h3>
                <p className="text-white/50 leading-relaxed">Din AI är en del av ditt team. Ska den låta formell eller mer avslappnad? Vi hjälper dig att välja rätt tonfall för ditt varumärke.</p>
              </div>
              <div className="relative pl-12 border-l border-white/10">
                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-[#FF5D00] rounded-full shadow-[0_0_15px_#FF5D00]" />
                <h3 className="text-xl font-bold text-white mb-2">3. Träna Kunskaper</h3>
                <p className="text-white/50 leading-relaxed">Vi matar AI:n med era dokument, manualer och FAQ så att hon kan svara på allt era kunder undrar över.</p>
              </div>
            </div>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Call Handling 2.0</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Vill du automatisera din telefon?</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Låt oss visa hur vi kan implementera Maja i din verksamhet på mindre än en vecka. Prata med henne direkt genom chatten för att se hur hon låter.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-1">Skribent</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group Automation</span>
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
