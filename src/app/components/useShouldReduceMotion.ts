'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

const MOBILE_QUERY = '(max-width: 768px), (pointer: coarse)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function getPerformanceMode() {
  if (typeof window === 'undefined') return false

  const isMobileOrTouch = window.matchMedia(MOBILE_QUERY).matches
  const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches
  const lowMemory =
    typeof (navigator as Navigator & { deviceMemory?: number }).deviceMemory === 'number' &&
    ((navigator as Navigator & { deviceMemory?: number }).deviceMemory as number) <= 4
  const lowCpu = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4

  return isMobileOrTouch || prefersReducedMotion || lowMemory || lowCpu
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function useShouldReduceMotion(initialValue = false) {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(initialValue)

  useIsomorphicLayoutEffect(() => {
    setShouldReduceMotion(getPerformanceMode())
  }, [])

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY)
    const reducedMotionQuery = window.matchMedia(REDUCED_MOTION_QUERY)

    const update = () => setShouldReduceMotion(getPerformanceMode())
    update()

    const subscribe = (mediaQuery: MediaQueryList, cb: () => void) => {
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', cb)
        return () => mediaQuery.removeEventListener('change', cb)
      }
      mediaQuery.addListener(cb)
      return () => mediaQuery.removeListener(cb)
    }

    const unsubscribeMobile = subscribe(mobileQuery, update)
    const unsubscribeReduced = subscribe(reducedMotionQuery, update)
    window.addEventListener('resize', update, { passive: true })

    return () => {
      unsubscribeMobile()
      unsubscribeReduced()
      window.removeEventListener('resize', update)
    }
  }, [])

  return shouldReduceMotion
}
