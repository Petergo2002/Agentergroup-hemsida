import { getOrganicReferrerFlag, trackSeoEvent } from './analytics'

const WIDGET_URL = 'https://widget.agentergroup.com/'

type WidgetOpenContext = {
  sourcePage: string
  sourceSection: string
  ctaType: 'button' | 'link' | 'floating'
  keywordCluster?: string
}

export function openMajaWidget(context?: WidgetOpenContext): void {
  if (typeof window === 'undefined') return

  const trackingContext = {
    source_page: context?.sourcePage ?? 'unknown',
    source_section: context?.sourceSection ?? 'unknown',
    cta_type: context?.ctaType ?? 'button',
    keyword_cluster: context?.keywordCluster ?? 'unknown',
    is_organic_referrer: getOrganicReferrerFlag(),
  }

  trackSeoEvent('internal_cta_click', trackingContext)
  trackSeoEvent('widget_open', trackingContext)

  if (window.majaWidget?.open) {
    window.majaWidget.open()
    return
  }

  window.open(WIDGET_URL, '_blank', 'noopener,noreferrer')
}
