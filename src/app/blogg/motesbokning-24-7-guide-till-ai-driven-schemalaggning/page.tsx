import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, CalendarDays, MousePointer2, Timer } from 'lucide-react'
import BlogCTA from '../../components/BlogCTA'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleJsonLd, createArticleMetadata } from '@/lib/seo'

const post = blogPostsBySlug['motesbokning-24-7-guide-till-ai-driven-schemalaggning']
export const metadata: Metadata = createArticleMetadata(post)

function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createArticleJsonLd(post)) }} />
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
              <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter max-w-4xl">
                Boka möten <span className="text-[#FF5D00]">medan</span> du sover.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Mötesbokning
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Effektivitet
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF5D00]" />
                {post.published}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF5D00]" />
                8 min läsning
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6 italic">
            "Hur många mail krävs det för att boka ett möte? Vi skippar det administrativa bollandet och låter tekniken göra jobbet."
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Varför AI-bokning är framtiden</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Mötesbokning är hjärtat i många verksamheter. Men administrationen kring det är en tidstjuv. Dagens konsumenter vill ha kontroll – de vill boka när impulsen faller på, oavsett om klockan är 10.00 eller 23.30.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5 text-center">
                <div className="text-4xl font-bold text-[#FF5D00] mb-2 font-mono">40%</div>
                <div className="text-sm text-white/50">av bokningar sker utanför kontorstid.</div>
              </div>
              <div className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5 text-center">
                <div className="text-4xl font-bold text-[#FF5D00] mb-2 font-mono">5h+</div>
                <div className="text-sm text-white/50">sparad admintid per vecka per anställd.</div>
              </div>
              <div className="bg-[#0F0F0F] p-8 rounded-[32px] border border-white/5 text-center">
                <div className="text-4xl font-bold text-[#FF5D00] mb-2 font-mono">25%</div>
                <div className="text-sm text-white/50">minskning av "no-shows" via automation.</div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Inga fler dubbelbokningar</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              En integrerad AI som Maja läser din kalender i realtid. Hon ser när du är upptagen och erbjuder endast de luckor som faktiskt är lediga. Hon kan även boka in förberedelsetid och pauser så att du aldrig blir överbelastad.
            </p>

            <div className="space-y-6 my-12">
              {[
                { icon: CalendarDays, title: "Kalendersync", desc: "Full koppling till Google, Outlook och iCloud." },
                { icon: Timer, title: "Smarta Buffertar", desc: "Automatiska pauser mellan dina möten." },
                { icon: MousePointer2, title: "1-Klick Bokning", desc: "Kunden bokar direkt i chatten eller på telefon." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 items-start">
                  <div className="p-3 bg-[#FF5D00]/10 rounded-xl text-[#FF5D00]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Automate Your Life</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Fyll din kalender automatiskt</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Vill du uppleva hur smidigt det är? Prata med Maja i chatten. Hon kan boka in en live-demo direkt i vår kalender så att du ser hur systemet fungerar.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest block mb-1">Publicerad av</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group Automation</span>
            </div>
            <div className="flex gap-4">
              <Link href="/blogg" className="text-white/40 hover:text-[#FF5D00] transition-colors text-sm font-mono uppercase tracking-widest">
                Se fler insikter
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
