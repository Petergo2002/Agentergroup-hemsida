export default function FAQ() {
  const faqs = [
    {
      q: 'Vad är en AI‑receptionist?',
      a: 'En AI‑receptionist tar emot samtal och chatt 24/7, svarar på vanliga frågor, kvalificerar leads och kan boka möten automatiskt – utan väntetid.'
    },
    {
      q: 'Hur fungerar bokningar med AI‑receptionist?',
      a: 'AI:n kopplas till din kalender och dina bokningsregler. Den föreslår lediga tider, bekräftar bokningen och skickar notiser – helt automatiskt.'
    },
    {
      q: 'Vad kostar en AI‑receptionist?',
      a: 'Priset beror på volym och behov. Vanligt är ett månadsabonnemang. Kontakta oss så tar vi fram en offert anpassad efter din verksamhet.'
    },
    {
      q: 'Kan AI‑receptionisten tala flera språk?',
      a: 'Ja. Svenska och engelska fungerar utmärkt. Fler språk kan aktiveras vid behov.'
    },
    {
      q: 'Passar AI‑receptionist för min bransch?',
      a: 'Ja, lösningen fungerar väl för bl.a. tandläkare, frisörer, bilverkstäder, kliniker och mäklare – där inkommande samtal och bokningar är viktiga.'
    }
  ]

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/10 text-brand-300 mb-4">
            VANLIGA FRÅGOR
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Vanliga frågor om AI‑receptionist</h2>
          <p className="mt-4 text-white/70">
            Svar på de vanligaste frågorna om hur vår AI‑receptionist fungerar.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="glass rounded-xl p-6 group">
              <summary className="list-none cursor-pointer text-left flex items-start justify-between gap-4">
                <span className="text-lg font-semibold">{item.q}</span>
                <span className="shrink-0 text-white/50 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
