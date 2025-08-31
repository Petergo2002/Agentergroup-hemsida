import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blogg – ByggFutur',
  description:
    'Inspiration, guider och nyheter inom bygg. Läs vår blogg och lär dig mer om renovering, nyproduktion och smarta bygglösningar.',
  keywords: [
    'bygg blogg',
    'renovering tips',
    'energieffektiv renovering',
    'byggföretag Stockholm',
    'ROT-avdrag 2025',
    'solceller värmepump',
  ],
  alternates: { canonical: '/blogg' },
  openGraph: {
    title: 'Blogg – ByggFutur',
    description:
      'Inspiration, guider och nyheter inom bygg. Läs vår blogg och lär dig mer om renovering, nyproduktion och smarta bygglösningar.',
    url: '/blogg',
    type: 'website'
  }
}

export default function BlogIndexPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/70" />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="container py-24 md:py-32 relative">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300">
            Vår kunskapsbank
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold leading-[1.04] tracking-tight">
            Blogg
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Praktiska guider och tips för dig som vill renovera smart, energieffektivt och hållbart. Utforska{' '}
            <Link href="/#tjanster" className="underline decoration-white/30 hover:decoration-white">våra tjänster</Link>{' '}
            och lär dig hur du kan sänka energikostnaderna och höja värdet på din fastighet i Stockholm med rätt åtgärder.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/" className="btn btn-secondary">Hem</Link>
            <Link href="/#offert" className="btn btn-primary">Begär offert</Link>
          </div>
        </div>
      </section>

      {/* Posts list */}
      <section className="section">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First article card */}
          <article className="group glass rounded-2xl p-6 hover:bg-white/15 transition-colors border border-white/10">
            <div className="flex items-center gap-2 text-xs text-brand-300">
              <span className="px-2 py-1 rounded-full bg-brand-500/10">Guide</span>
              <span className="text-white/50">31 aug 2025</span>
            </div>
            <h2 className="mt-3 text-xl font-semibold group-hover:text-white">
              <Link href="/blogg/energieffektiv-renovering-2025-komplett-guide">
                Energieffektiv renovering 2025 – komplett guide
              </Link>
            </h2>
            <p className="mt-2 text-white/70">
              Lär dig hur du sänker energikostnaderna med rätt åtgärder: isolering, fönster, värmepump,
              solceller och smart styrning – samt vilka bidrag som gäller 2025.
            </p>
            <div className="mt-4">
              <Link href="/blogg/energieffektiv-renovering-2025-komplett-guide" className="btn btn-secondary">
                Läs artikeln
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
