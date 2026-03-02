'use client'

export type SeoEventName = 'widget_open' | 'demo_booked' | 'internal_cta_click'

function hasGtag() {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

export function getOrganicReferrerFlag(): boolean {
  if (typeof document === 'undefined') return false

  const ref = document.referrer.toLowerCase()
  if (!ref) return false

  return ['google.', 'bing.com', 'duckduckgo.com', 'search.yahoo.com'].some((source) => ref.includes(source))
}

export function trackSeoEvent(name: SeoEventName, params: Record<string, string | number | boolean>) {
  if (!hasGtag()) return
  window.gtag?.('event', name, params)
}
