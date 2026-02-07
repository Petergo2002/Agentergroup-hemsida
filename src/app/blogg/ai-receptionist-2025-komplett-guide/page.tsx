import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCTA from '../../components/BlogCTA'


import { Calendar, Clock, ArrowLeft, ShieldCheck, Zap, Cog } from 'lucide-react'

const title = 'AI‑receptionist 2025 – komplett guide | Agenter Group'
const description =
  'En praktisk guide till hur du inför en AI‑receptionist: implementering, systemkopplingar (kalender/CRM/telefoni), säkerhet & GDPR, mätning och uppföljning.'
const url = '/blogg/ai-receptionist-2025-komplett-guide/'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'AI receptionist',
    'AI kundservice',
    'mötesbokning',
    'GDPR AI',
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

const PUBLISHED = '2025-01-03'
const UPDATED = '2025-01-03'

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
      '@id': url
    }
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  )
}

export default function ArticlePage() {
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
                Framtidens <span className="text-[#FF5D00]">Frontdesk.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Guide
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                2025
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF5D00]" />
                {PUBLISHED}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF5D00]" />
                12 min läsning
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            AI‑receptionist 2025 – komplett guide
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6">
            Allt du behöver för att komma igång – från behovsanalys och implementation till integrationer, säkerhet & GDPR
            samt hur du mäter effekten i verksamheten.
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">1. Varför 2025 är året för AI</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Tekniken för röstsyntes och naturlig språkförståelse har nått en mognadgrad där det är svårt att skilja en AI från en människa. Men det handlar inte bara om att svara. Det handlar om att förstå kontext, boka rätt möten och hantera data säkert.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Zap, title: "Snabbhet", text: "Svara på 0 sekunder, dygnet runt." },
                { icon: ShieldCheck, title: "Säkerhet", text: "GDPR-säkrad datahantering." },
                { icon: Cog, title: "Automation", text: "Boka möten direkt i kalendern." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 flex flex-col items-center text-center group hover:border-[#FF5D00]/20 transition-colors">
                  <item.icon className="text-[#FF5D00] mb-4 opacity-40 group-hover:opacity-100 transition-opacity" size={32} />
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">2. Implementeringsprocessen</h2>
            <p className="text-white/70 mb-8">
              Att gå från idé till live-system tar vanligtvis mindre än 10 arbetsdagar med Agenter Groups metodik.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-white/60 mb-12">
              <li><strong>Behovsanalys:</strong> Vilka samtal får ni mest av?</li>
              <li><strong>Kunskapsbas:</strong> Vi tränar Maja på er specifika affärslogik.</li>
              <li><strong>Integration:</strong> Koppling mot Google Calendar, Outlook och ert CRM.</li>
              <li><strong>Lansering:</strong> Vidarekoppling av ert nummer till Maja.</li>
            </ol>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Knowledge Base</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Vill du veta mer?</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Vi hjälper dig att bygga din egen AI Frontdesk. Prata med Maja direkt här på sidan för att boka in en introduktion.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Publicerad av</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group Engineering</span>
            </div>
            <div className="flex gap-4">
              <Link href="/blogg" className="text-white/40 hover:text-[#FF5D00] transition-colors text-sm font-mono uppercase tracking-widest">
                Se fler guider
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
