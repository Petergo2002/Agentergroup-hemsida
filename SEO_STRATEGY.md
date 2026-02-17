# SEO Strategi 2026: Maja Chat Frontdesk

## Status
- Senast uppdaterad: 2026-02-17
- Scope: Endast Maja som chat-baserad frontdesk (inte telefoni-first)

---

## Strategiskt beslut
Vi fokuserar all SEO på att äga kategorin:
- AI chat för företag
- AI chattbot för företag
- AI chat frontdesk

Vi nedprioriterar ord där intent är ren telefoni/svarsservice.

---

## Keyword-clusters att targeta

## Måste (primärt)
1. ai chat för företag
2. ai chattbot för företag
3. ai chat frontdesk
4. chatbot för hemsida företag
5. ai kundservice chatt
6. chat support 24/7 ai
7. leadkvalificering i chatt
8. ai mötesbokning via chatt

## Bör (sekundärt)
1. chatwidget med ai
2. ai frontdesk widget
3. hemsida med ai chattbot
4. ai chat widget hemsida
5. konverterande chattbot företag

## Testa (innehåll/FAQ)
1. vad är ai chat frontdesk
2. ai chat frontdesk pris
3. ai chattbot vs livechatt
4. hur fungerar ai chattbot för företag
5. gdpr ai chatt företag

## Nedprioritera (endast stödinnehåll)
1. ai receptionist
2. telefonpassning
3. svarsservice
4. ai telefonist

Motivering: De termerna är ofta voice/telefoni-intent och riskerar dra fel trafik när erbjudandet är chat-first.

---

## URL till keyword-map

## `/`
- Primär: ai chat för företag
- Sekundär: ai chat frontdesk, ai chattbot för företag
- Mål: demo/chat-start

## `/hemsidor/`
- Primär: chatbot för hemsida företag
- Sekundär: hemsida med ai chattbot, ai chat widget hemsida
- Mål: konsultation/chat-start

## `/blogg/`
- Primär: ai chattbot för företag (informativ intent)
- Sekundär: ai kundservice chatt, leadkvalificering i chatt
- Mål: interntrafik till `/` och `/hemsidor/`

---

## Content-plan (30 dagar)
1. Publicera artikel: “Vad är AI chat frontdesk? (guide för företag)”
2. Publicera artikel: “AI chattbot vs livechatt: vad ger flest leads?”
3. Publicera artikel: “Leadkvalificering i chatt: process, script och KPI”
4. Publicera artikel: “AI mötesbokning via chatt: så gör du”
5. Lägg in FAQ-block med fråge-keywords på `/` och `/hemsidor/`

---

## On-page regler
1. Exakt en H1 per sida med primär keyword tidigt i rubriken.
2. Meta title 50-60 tecken, meta description 140-160 tecken.
3. Minst 3 interna länkar från varje bloggpost:
- 2 till relaterade artiklar.
- 1 till money page (`/` eller `/hemsidor/`).
4. Lägg källor vid statistikpåståenden (stärker GEO/citerbarhet).
5. Behåll schema: Organization + WebSite + Service + BlogPosting.

---

## KPI:er
1. Organiska klick till `/` och `/hemsidor/`.
2. CTR för query-kluster “ai chat för företag” och “ai chattbot för företag”.
3. Antal demo/chat-start från organisk trafik.
4. Andel nya artiklar som indexeras inom 7 dagar.
5. Position för topp-8 primära keywords.

---

## Vad som är implementerat i kod
1. Central keywordstrategi i `src/lib/keyword-strategy.ts`.
2. Uppdaterade metadata-keywords och copy för:
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/hemsidor/page.tsx`
- `src/app/blogg/page.tsx`
3. Chat-first structured data copy i `src/app/components/StructuredData.tsx`.
4. Chat-first `about`-entities i artikel-schema via `src/lib/seo.ts`.

