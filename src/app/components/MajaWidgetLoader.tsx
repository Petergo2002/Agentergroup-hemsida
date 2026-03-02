'use client'

import { useEffect } from 'react'
import { getOrganicReferrerFlag, trackSeoEvent } from '@/lib/analytics'

const SCRIPT_ID = 'maja-widget-loader'
const SCRIPT_SRC = 'https://widget.agentergroup.com/loader.js'
const WIDGET_DATA_ID = 'c6cfe1ca-a018-4b03-86f7-c06093b9614d'
const ENABLE_WIDGET_INLINE = process.env.NEXT_PUBLIC_ENABLE_MAJA_WIDGET === 'true'

export default function MajaWidgetLoader() {
  useEffect(() => {
    if (typeof document === 'undefined') return

    const trackWidgetScriptStatus = (status: 'loaded' | 'failed') => {
      if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
      window.gtag('event', 'widget_script_status', {
        status,
        page_path: window.location.pathname,
      })
    }

    const attachDemoBookedTracking = () => {
      if (typeof window === 'undefined') return
      if (window.__majaDemoHookAttached) return
      if (!window.majaWidget?.on) return

      window.majaWidget.on('demo_booked', () => {
        trackSeoEvent('demo_booked', {
          source_page: window.location.pathname,
          source_section: 'maja_widget',
          cta_type: 'button',
          keyword_cluster: 'unknown',
          is_organic_referrer: getOrganicReferrerFlag(),
        })
      })

      window.__majaDemoHookAttached = true
    }

    if (!ENABLE_WIDGET_INLINE) {
      // Safety: strip leftover widget scripts from previous deploys/sessions.
      document
        .querySelectorAll<HTMLScriptElement>(`script[src*="${SCRIPT_SRC}"], script#${SCRIPT_ID}`)
        .forEach((node) => node.remove())
      return
    }

    if (document.getElementById(SCRIPT_ID)) return

    let idleId: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const loadScript = () => {
      if (document.getElementById(SCRIPT_ID)) return

      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.setAttribute('data-id', WIDGET_DATA_ID)
      script.onload = () => {
        trackWidgetScriptStatus('loaded')
        attachDemoBookedTracking()
      }
      script.onerror = () => {
        // Keep failure silent for users; CTA fallback handles this path.
        console.error('Failed to load Maja widget script')
        trackWidgetScriptStatus('failed')
      }

      document.body.appendChild(script)
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(loadScript, { timeout: 2500 })
    } else {
      timeoutId = setTimeout(loadScript, 1200)
    }

    return () => {
      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      }
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return null
}
