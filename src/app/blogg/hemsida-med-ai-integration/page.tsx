import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Layout, Sparkles, Target, Globe } from 'lucide-react'
import BlogCTA from '../../components/BlogCTA'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleJsonLd, createArticleMetadata } from '@/lib/seo'

const post = blogPostsBySlug['hemsida-med-ai-integration']
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
                Din hemsida <span className="text-[#FF5D00]">är</span> din frontdesk.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Webbutveckling
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Integration
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#FF5D00]" />
                {post.published}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#FF5D00]" />
                7 min läsning
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6">
            Din hemsida är öppen dygnet runt, men är din kundservice det?
            Med AI-integration förvandlar du din webbplats från en statisk broschyr till en interaktiv, säljande assistent.
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Mer än bara en chattbot</h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              När vi pratar om AI-integration på hemsidor menar vi inte de gamla, dumma chattbotarna som bara kunde svara "Jag förstår inte". Vi pratar om avancerade modeller som tränats på just din företagsdata för att ge korrekta, mänskliga svar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 my-12">
              {[
                { icon: Sparkles, title: "Produktval", text: "Hjälp kunder att hitta rätt produkt genom smart guidning." },
                { icon: Globe, title: "Flerspråkig", text: "Kommunicera på över 50 språk helt sömlöst." },
                { icon: Target, title: "Leadgen", text: "Samla in prospekt direkt genom konversationer." },
                { icon: Layout, title: "Anpassning", text: "Design som smälter in i er varumärkesprofil." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 rounded-[32px] bg-[#0F0F0F] border border-white/5 hover:border-[#FF5D00]/20 transition-all group">
                    <Icon className="text-[#FF5D00] mb-4 opacity-40 group-hover:opacity-100 transition-opacity" size={28} />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white tracking-tight">Varför konverteringen ökar</h2>
            <p className="text-white/70 mb-8 leading-relaxed text-lg">
              Det handlar om att minska friktionen. Varje klick en användare måste göra ökar risken att de hoppar av. Med en AI-assistent kan besökaren ställa sin fråga direkt och få svaret serverat, istället för att leta igenom menyer eller FAQ-sidor.
            </p>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Hemsidor 2.0</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Gör din hemsida intelligent</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Vill du uppgradera din hemsida med Maja? Vi hjälper dig med integrationen från start till mål så att du kan börja konvertera fler besökare idag.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Skriven av</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group Digital Design</span>
            </div>
            <div className="flex gap-4">
              <Link href="/blogg" className="text-white/40 hover:text-[#FF5D00] transition-colors text-sm font-mono uppercase tracking-widest">
                Tillbaka till insikter
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </div>
  )
}
