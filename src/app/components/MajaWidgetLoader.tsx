'use client'

import { useEffect } from 'react'

const SCRIPT_ID = 'maja-widget-loader'
const SCRIPT_SRC = 'https://widget.agentergroup.com/loader.js'
const WIDGET_DATA_ID = 'c6cfe1ca-a018-4b03-86f7-c06093b9614d'
const ENABLE_WIDGET_INLINE = process.env.NEXT_PUBLIC_ENABLE_MAJA_WIDGET === 'true'

function isIOSDevice() {
  if (typeof navigator === 'undefined') return false

  const iosByUA = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const ipadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1

  return iosByUA || ipadOS
}

export default function MajaWidgetLoader() {
  useEffect(() => {
    if (typeof document === 'undefined') return

    if (!ENABLE_WIDGET_INLINE) {
      // Safety: strip leftover widget scripts from previous deploys/sessions.
      document
        .querySelectorAll<HTMLScriptElement>(`script[src*="${SCRIPT_SRC}"], script#${SCRIPT_ID}`)
        .forEach((node) => node.remove())
      return
    }

    // iOS Safari has shown runtime instability with this external loader.
    // We skip inline widget loading there and rely on CTA fallback URLs.
    if (isIOSDevice()) return

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
      script.onerror = () => {
        // Keep failure silent for users; CTA fallback handles this path.
        console.error('Failed to load Maja widget script')
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
