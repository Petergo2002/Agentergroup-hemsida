import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import BlogCTA from '../../components/BlogCTA'
import { blogPostsBySlug } from '@/content/blog-posts'
import { createArticleJsonLd, createArticleMetadata } from '@/lib/seo'

const post = blogPostsBySlug['ai-receptionist-vs-traditionell-receptionist']
export const metadata: Metadata = createArticleMetadata(post)

function JsonLd() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createArticleJsonLd(post)) }} />
  )
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
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
                AI-receptionist <span className="text-[#FF5D00]">vs</span> Mänsklig service.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                AI Frontdesk
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-[#FF5D00]/10 text-[#FF5D00] rounded-full border border-[#FF5D00]/20">
                Jämförelse
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

          <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed border-l-4 border-[#FF5D00] pl-6">
            Ska du anställa en receptionist eller investera i en AI-lösning? Svaret är inte alltid självklart.
            I denna guide går vi igenom allt du behöver veta för att fatta rätt beslut för ditt företag.
          </p>

          <div className="prose prose-invert prose-orange max-w-none">
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Rollerna på arbetsplatsen förändras i takt med teknologin. Receptionisten har länge varit företagets ansikte utåt – den första rösten en kund hör. Men med framväxten av avancerad AI, står många företagsledare inför ett vägskäl: Ska man hålla fast vid det traditionella eller omfamna det nya?
            </p>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white">Kostnadsjämförelse: Vad skiljer sig?</h2>

            <p className="text-white/70 mb-8">
              En av de mest påtagliga skillnaderna är kostnaden. Låt oss bryta ner siffrorna för en genomsnittlig receptionist jämfört med en AI Frontdesk-lösning.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="p-8 rounded-[32px] bg-[#0F0F0F] border border-white/5 relative group hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  Mänsklig Receptionist
                </h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Månadslön:</span>
                    <span className="text-white font-mono">28 000 kr</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Sociala avgifter:</span>
                    <span className="text-white font-mono">~8 800 kr</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Övriga admin:</span>
                    <span className="text-white font-mono">~3 300 kr</span>
                  </li>
                  <li className="flex justify-between pt-4">
                    <span className="font-bold text-white">Totalt per mån:</span>
                    <span className="text-xl font-bold text-white font-mono">~40 100 kr</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 rounded-2xl bg-white/5 text-xs text-white/40 italic">
                  * Exklusive semester, sjuklön, utbildning och kontorsplats.
                </div>
              </div>

              <div className="p-8 rounded-[32px] bg-[#0F0F0F] border border-[#FF5D00]/20 relative group overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FF5D00] text-black text-[10px] font-bold uppercase tracking-widest rounded-bl-2xl">
                  Rekommenderas
                </div>
                <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5D00]" />
                  AI Frontdesk Maja
                </h3>
                <ul className="space-y-4 text-white/60">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Månadslicens:</span>
                    <span className="text-white font-mono">Från 1 500 kr</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Startavgift:</span>
                    <span className="text-white font-mono">Engångskostnad</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Uppdateringar:</span>
                    <span className="text-white font-mono">Ingår alltid</span>
                  </li>
                  <li className="flex justify-between pt-4">
                    <span className="font-bold text-[#FF5D00]">Totalt per mån:</span>
                    <span className="text-xl font-bold text-[#FF5D00] font-mono">~1 500 kr</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 rounded-2xl bg-[#FF5D00]/5 text-xs text-[#FF5D00]/60 italic">
                  * Inkluderar drift 24/7, inga dolda avgifter.
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white">Tillgänglighet: När svarar ni?</h2>

            <div className="overflow-x-auto my-12">
              <table className="w-full text-left border-collapse border border-white/5 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#0F0F0F]">
                    <th className="p-6 font-bold text-white/40 uppercase text-xs tracking-widest">Egenskap</th>
                    <th className="p-6 font-bold text-white/40 uppercase text-xs tracking-widest">Människa</th>
                    <th className="p-6 font-bold text-[#FF5D00] uppercase text-xs tracking-widest">AI Frontdesk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-6 font-medium text-white">Öppettider</td>
                    <td className="p-6 text-white/50">Vardagar 08-17</td>
                    <td className="p-6 text-[#FF5D00] font-bold">24/7/365</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Svarstid</td>
                    <td className="p-6 text-white/50">Beror på belastning</td>
                    <td className="p-6 text-[#FF5D00] font-bold">Direkt (0 sek)</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Samtida samtal</td>
                    <td className="p-6 text-white/50">Ett i taget</td>
                    <td className="p-6 text-[#FF5D00] font-bold">Obegränsat</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium text-white">Raster/Sjukdom</td>
                    <td className="p-6 text-white/50">Ja, kräver backup</td>
                    <td className="p-6 text-[#FF5D00] font-bold">Aldrig borta</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-16 mb-8 text-white">Slutsats</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              För moderna företag som vill sänka sina fasta kostnader utan att tumma på kvaliteten är valet ofta enkelt. Maja ger dina kunder service på högsta nivå, dygnet runt, till en bråkdel av kostnaden för en traditionell lösning.
            </p>

            <div className="bg-[#0F0F0F] border border-white/5 rounded-[32px] p-8 md:p-12 my-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF5D00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-[#FF5D00] font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Interactive Demo</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">Testa Maja live nu</h3>
                <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Är du nyfiken på hur framtidens kundservice låter? Prata med Maja direkt här på sidan genom chatten. Hon kan svara på dina frågor och boka in en live-demo för ditt team.
                </p>
                <BlogCTA />
              </div>
            </div>
          </div>

          <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Publicerad av</span>
              <span className="text-white font-bold tracking-tight text-lg">Agenter Group Editorial Team</span>
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
