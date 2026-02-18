'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, ArrowDownRight } from 'lucide-react'
import { useState } from 'react'

import { indexableBlogPosts } from '@/content/blog-posts'
import useShouldReduceMotion from '../components/useShouldReduceMotion'
import { openMajaWidget } from '@/lib/maja-widget'

const posts = [...indexableBlogPosts]
  .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
  .map((post) => ({
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    date: new Date(post.published).toLocaleDateString('sv-SE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  }))

export default function BlogIndexClient() {
  const shouldReduceMotion = useShouldReduceMotion()
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <section className="relative h-[60vh] flex items-center overflow-hidden">
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
                      <Link href={`/blogg/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-white/50 mb-8 flex-grow leading-relaxed">{post.excerpt}</p>

                    <Link href={`/blogg/${post.slug}`} className="inline-flex items-center gap-2 text-white font-bold group/link">
                      Läs mer
                      <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform text-[#FF5D00]" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking-cta" className="py-24 md:py-32 bg-black relative overflow-hidden border-t border-white/5">
          {/* Viewport Detection for Popup */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            onViewportEnter={() => !shouldReduceMotion && setShowPopup(true)}
            onViewportLeave={() => !shouldReduceMotion && setShowPopup(false)}
            viewport={{ amount: 0.3 }}
          />

          <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-20" />
          <div className="container relative px-4 mx-auto text-center max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Redo för <span className="text-[#FF5D00]">AI-revolutionen?</span>
            </h2>
            <p className="text-xl text-white/60">
              Tryck på vår widget nere i hörnet så hjälper Maja dig att boka in ett möte med oss.
            </p>
          </div>

          {/* Contextual Popup */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={showPopup ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`fixed bottom-24 right-4 md:right-8 z-50 cursor-pointer ${showPopup ? 'pointer-events-auto' : 'pointer-events-none'}`}
              onClick={openMajaWidget}
            >
              <div className="bg-white text-black px-6 py-4 rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex items-center gap-4 relative group hover:scale-105 transition-transform">
                <div className="absolute -bottom-6 -right-2 transform rotate-12">
                  <ArrowDownRight className="w-8 h-8 text-[#FF5D00] animate-bounce" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight">Prata med Maja här!</span>
                  <span className="text-xs text-black/60 font-medium">Vi svarar direkt</span>
                </div>
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C455] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C455]"></span>
                </div>
              </div>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  )
}
