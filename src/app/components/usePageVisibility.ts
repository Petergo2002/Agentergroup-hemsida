'use client'

import { useEffect, useState } from 'react'

export default function usePageVisibility() {
  const [isPageVisible, setIsPageVisible] = useState(true)

  useEffect(() => {
    const update = () => {
      setIsPageVisible(document.visibilityState === 'visible')
    }

    update()
    document.addEventListener('visibilitychange', update)

    return () => {
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  return isPageVisible
}
