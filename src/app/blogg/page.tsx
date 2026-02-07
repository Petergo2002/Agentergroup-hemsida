'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'AI-receptionist för kliniker: Maximera patienttid',
    slug: 'ai-receptionist-for-kliniker',
    date: '24 jan 2025',
    category: 'Klinik',
    excerpt: 'Driver du klinik? Lär dig hur en AI-receptionist kan avlasta teamet och öka tillgängligheten för dina patienter.'
  },
  {
    title: 'Telefonpassning för hantverkare: Missa aldrig ett jobb',
    slug: 'telefonpassning-for-hantverkare',
    date: '23 jan 2025',
    category: 'Hantverkare',
    excerpt: 'Är du hantverkare? Lär dig varför en AI-receptionist är en bättre och mer kostnadseffektiv lösning än traditionell telefonpassning.'
  },
  {
    title: 'Hemsida med AI-integration: Framtidens kundservice',
    slug: 'hemsida-med-ai-integration',
    date: '22 jan 2025',
    category: 'Trend',
    excerpt: 'Din hemsida är ditt digitala skyltfönster. Lär dig hur du förvandlar den till en säljande assistent med AI.'
  },
  {
    title: 'Mötesbokning 24/7: Guide till AI-driven schemaläggning',
    slug: 'motesbokning-24-7-guide-till-ai-driven-schemalaggning',
    date: '22 jan 2025',
    category: 'Guide',
    excerpt: 'Låt kunderna boka möten när det passar dem. En guide till automatisk schemaläggning.'
  },
  {
    title: 'Så automatiserar du telefonhantering med AI-agenter',
    slug: 'sa-automatiserar-du-telefonhantering-med-ai-agenter',
    date: '22 jan 2025',
    category: 'Guide',
    excerpt: 'Steg för steg-guide: Från val av lösning till implementation och optimering.'
  },
  {
    title: 'AI-receptionist vs Traditionell receptionist',
    slug: 'ai-receptionist-vs-traditionell-receptionist',
    date: '22 jan 2025',
    category: 'Jämförelse',
    excerpt: 'Vi jämför kostnader, tillgänglighet och funktioner för att hjälpa dig välja rätt.'
  },
  {
    title: 'Varför Företag Missar 34% av Jobbmöjligheter',
    slug: 'varfor-foretag-missar-samtal',
    date: '21 jan 2025',
    category: 'Insikt',
    excerpt: 'Upptäck varför missade samtal kostar företag enorma summor och hur AI-receptionister kan lösa problemet.'
  },
  {
    title: 'AI‑receptionist 2025 – komplett guide',
    slug: 'ai-receptionist-2025-komplett-guide',
    date: '3 jan 2026',
    category: 'Guide',
    excerpt: 'Allt du behöver för att komma igång: implementation, systemkopplingar, säkerhet, GDPR och hur du mäter effekt.'
  }
]

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        {/* Header - Matching Hemsidor Style */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">

          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />

          <div className="container relative px-4 mx-auto z-20 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20 mb-6 uppercase tracking-widest">
                Kunskapsbank
              </span>
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter">
                Våra <span className="text-[#FF5D00]">Insikter.</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                Håll dig uppdaterad om framtidens kundservice, AI-automation och hur du skalar ditt företag med smart teknik.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-24 relative overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-full flex flex-col p-8 rounded-[32px] bg-[#0F0F0F] border border-white/5 hover:border-[#FF5D00]/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5D00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono text-[#FF5D00] uppercase tracking-wider">{post.category}</span>
                      <div className="flex items-center gap-2 text-white/40 text-xs">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF5D00] transition-colors leading-snug">
                      <Link href={`/blogg/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-white/50 mb-8 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/blogg/${post.slug}`}
                      className="inline-flex items-center gap-2 text-white font-bold group/link"
                    >
                      Läs mer
                      <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform text-[#FF5D00]" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Unified Booking CTA */}
        <section id="booking-cta" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-20" />
          <div className="container relative px-4 mx-auto text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Redo för <span className="text-[#FF5D00]">AI-revolutionen?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Prata med Maja så hjälper hon dig att boka in ett möte med oss.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).majaWidget) {
                    (window as any).majaWidget.open();
                  }
                }}
                className="px-10 py-5 bg-[#FF5D00] hover:bg-[#FF7A33] text-black text-xl font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,93,0,0.4)]"
              >
                Starta chatten med Maja
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
