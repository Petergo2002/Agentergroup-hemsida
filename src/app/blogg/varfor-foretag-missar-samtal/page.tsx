import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'Varför Företag Missar 34% av Jobbmöjligheter – och Hur AI Kan Hjälpa | Agenter Group'
const description =
  'Upptäck varför 34% av jobbmöjligheter försvinner när kandidater missar första samtalet. Lär dig hur AI-receptionister säkerställer att ditt företag aldrig missar ett viktigt samtal igen.'
const url = '/blogg/varfor-foretag-missar-samtal'

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
    'virtuell receptionist',
    'förlora kunder missade samtal',
    'Agenter Group'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['AI-receptionist', 'Missade samtal', 'Kundservice', 'Företagsautomation']
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
    <>
      <JsonLd />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Tillbaka till startsidan
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
          {/* Meta info */}
          <div className="mb-8">
            <Link 
              href="/blogg" 
              className="inline-block text-sm text-brand-400 hover:text-brand-300 mb-4 transition-colors"
            >
              ← Alla artiklar
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                AI-Receptionist
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Kundservice
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20">
                Företagsautomation
              </span>
            </div>
            <time className="text-sm text-white/50" dateTime={PUBLISHED}>
              Publicerad: {new Date(PUBLISHED).toLocaleDateString('sv-SE', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Varför Företag Missar 34% av Jobbmöjligheter – och Hur AI Kan Hjälpa
          </h1>

          {/* Lead */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed border-l-4 border-brand-500 pl-6">
            Visste du att 34% av jobbmöjligheter försvinner när kandidater missar första samtalet? 
            Detta är inte bara en statistik – det är en varningssignal för alla företag som förlitar sig på telefonkommunikation.
          </p>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Den Dolda Kostnaden av Missade Samtal</h2>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Varje missat samtal är inte bara en förlorad konversation – det är en potentiell förlorad kund, 
              ett missat affärstillfälle, eller en kandidat som väljer en konkurrent istället. I dagens snabba 
              affärsvärld har människor inte tid att vänta. Om de inte får svar direkt, går de vidare.
            </p>

            <div className="bg-gradient-to-br from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-6 md:p-8 my-8">
              <h3 className="text-2xl font-semibold mb-4 text-brand-300">Statistiken Talar Sitt Tydliga Språk</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 text-xl">•</span>
                  <span><strong>34%</strong> av jobbmöjligheter går förlorade när första samtalet missas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 text-xl">•</span>
                  <span><strong>80%</strong> av uppringare lämnar inget meddelande på telefonsvarare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 text-xl">•</span>
                  <span><strong>67%</strong> av potentiella kunder kontaktar en konkurrent om de inte får svar direkt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-400 text-xl">•</span>
                  <span><strong>90%</strong> av kunderna förväntar sig omedelbar respons (inom 10 minuter)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Varför Missar Företag Samtal?</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Begränsade Öppettider</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              De flesta företag har öppettider mellan 9-17, men kunderna ringer när det passar dem – 
              ofta på kvällar och helger. Detta skapar en stor diskrepans mellan när kunder vill ha hjälp 
              och när företaget faktiskt är tillgängligt.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Överbelastad Personal</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              När receptionisten eller säljteamet är upptagna med andra uppgifter, går samtal obemärkt förbi. 
              Under högtrafik kan det vara omöjligt att hantera alla inkommande samtal, vilket leder till 
              frustrerade kunder och förlorade affärer.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Sjukdom och Semester</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              När nyckelpersoner är borta, saknar många företag en backup-plan. Detta kan leda till 
              flera dagars missade samtal och förlorad verksamhet.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Höga Kostnader för Bemanning</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Att anställa en heltidsreceptionist kostar i genomsnitt 25 000-35 000 kr per månad 
              (inklusive lön, sociala avgifter och förmåner). För mindre företag är detta ofta inte ekonomiskt försvarbart.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Lösningen: AI-Receptionister</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist är en intelligent virtuell assistent som hanterar inkommande samtal 
              24 timmar om dygnet, 7 dagar i veckan. Den kan svara på vanliga frågor, boka möten, 
              och dirigera samtal till rätt person – allt utan mänsklig inblandning.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-white">Fördelar med AI-Receptionister</h3>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">🕐 Tillgänglig 24/7</h4>
                <p className="text-white/70">
                  Aldrig mer missade samtal på kvällar, helger eller helgdagar. Din AI-receptionist 
                  är alltid redo att ta emot samtal.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">💰 Kostnadseffektivt</h4>
                <p className="text-white/70">
                  En bråkdel av kostnaden för en heltidsanställd receptionist, utan kompromisser 
                  på kvalitet eller tillgänglighet.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">📅 Automatisk Mötesbokning</h4>
                <p className="text-white/70">
                  Integrerar med din kalender och bokar möten automatiskt baserat på din tillgänglighet, 
                  utan dubbelbokning.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">🌍 Flerspråkig Support</h4>
                <p className="text-white/70">
                  Kan hantera samtal på flera språk, vilket öppnar upp för internationella kunder 
                  utan extra kostnad.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">📊 Insikter och Analys</h4>
                <p className="text-white/70">
                  Få detaljerad statistik över samtalsvolym, vanliga frågor och kundtrender för 
                  att förbättra din verksamhet.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-brand-300">🔄 Skalbar Lösning</h4>
                <p className="text-white/70">
                  Hanterar ett obegränsat antal samtidiga samtal utan att behöva anställa mer personal 
                  när verksamheten växer.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Verkliga Resultat från Företag</h2>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 my-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Case Study: Rekryteringsföretag</h3>
              <p className="text-white/80 mb-4">
                Ett medelstort rekryteringsföretag implementerade en AI-receptionist och såg följande resultat 
                efter 3 månader:
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>95%</strong> av alla inkommande samtal besvarades (upp från 62%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>40%</strong> ökning av bokade intervjuer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>60%</strong> minskning av administrativa uppgifter för HR-teamet</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span><strong>ROI på 320%</strong> inom första året</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Hur Kommer Man Igång?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Att implementera en AI-receptionist är enklare än du tror. Här är stegen:
            </p>

            <ol className="space-y-4 text-white/80 mb-8">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">1</span>
                <div>
                  <strong className="text-white">Konsultation:</strong> Boka ett kostnadsfritt möte för att diskutera 
                  dina behov och hur en AI-receptionist kan hjälpa just ditt företag.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">2</span>
                <div>
                  <strong className="text-white">Anpassning:</strong> Vi konfigurerar AI-receptionisten efter dina 
                  specifika krav, inklusive integration med befintliga system (CRM, kalender, etc.).
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">3</span>
                <div>
                  <strong className="text-white">Testning:</strong> Du får testa systemet och göra justeringar 
                  innan det går live.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">4</span>
                <div>
                  <strong className="text-white">Lansering:</strong> Din AI-receptionist går live och börjar 
                  hantera samtal omedelbart.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500/20 text-brand-300 flex items-center justify-center font-semibold">5</span>
                <div>
                  <strong className="text-white">Uppföljning:</strong> Vi följer upp regelbundet och optimerar 
                  systemet baserat på data och feedback.
                </div>
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Sammanfattning</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Missade samtal kostar företag enorma summor varje år – både i direkta förlorade affärer 
              och i förlorad goodwill. Med 34% av jobbmöjligheter som försvinner när första samtalet missas, 
              har företag inte längre råd att ignorera detta problem.
            </p>

            <p className="text-white/80 leading-relaxed mb-6">
              En AI-receptionist är inte bara en teknisk lösning – det är en strategisk investering som 
              säkerställer att ditt företag aldrig missar ett viktigt samtal igen. Med 24/7 tillgänglighet, 
              automatisk mötesbokning och intelligent samtalshantering, kan du fokusera på det som verkligen 
              betyder något: att växa din verksamhet.
            </p>

            <div className="bg-gradient-to-r from-brand-500/10 to-brand-600/10 border border-brand-500/20 rounded-2xl p-8 my-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Redo att Aldrig Missa Ett Samtal Igen?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Boka en kostnadsfri demo och se hur vår AI-receptionist kan transformera din kundservice 
                och säkerställa att varje samtal blir besvarat.
              </p>
              <Link 
                href="/#demo" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Boka Demo Nu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Author & Date */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-white/50">Författare</p>
                <p className="text-white font-medium">Agenter Group AB</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/50">Senast uppdaterad</p>
                <time className="text-white font-medium" dateTime={UPDATED}>
                  {new Date(UPDATED).toLocaleDateString('sv-SE', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">Relaterade Artiklar</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blogg/ai-receptionist-2025-komplett-guide"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                  AI-receptionist 2025 – Komplett Guide
                </h4>
                <p className="text-white/70 text-sm">
                  En praktisk guide till hur du inför en AI-receptionist i ditt företag.
                </p>
              </Link>
              
              <Link 
                href="/#funktioner"
                className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:border-brand-500/30 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-brand-300 transition-colors">
                  Se Alla Funktioner
                </h4>
                <p className="text-white/70 text-sm">
                  Utforska alla funktioner som vår AI-receptionist erbjuder.
                </p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}
