import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

const title = 'Energieffektiv renovering 2025 – komplett guide | ByggFutur'
const description =
  'En praktisk guide till hur du renoverar energieffektivt 2025: isolering, fönster, värmepump, solceller och smart styrning – plus hur du planerar, budgeterar och maximerar avkastningen.'
const url = '/blogg/energieffektiv-renovering-2025-komplett-guide'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'energieffektiv renovering',
    'renovering 2025',
    'isolering',
    'fönsterbyte',
    'värmepump',
    'solceller',
    'smart hem',
    'ROT-avdrag',
    'bygg blogg',
    'ByggFutur',
    'energieffektivisering',
    'energirenovering',
    'byggföretag Stockholm',
    'renovera Stockholm',
    'byggentreprenör'
  ],
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    tags: ['Energieffektiv renovering', 'Guide 2025']
  }
}

export default function ArticlePage() {
  // Permanent redirect to the AI‑receptionist guide
  redirect('/blogg/ai-receptionist-2025-komplett-guide')
}
