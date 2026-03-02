export {}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }

  interface Window {
    majaWidget?: {
      open?: () => void
      on?: (eventName: string, callback: (payload: unknown) => void) => void
    }
    __majaDemoHookAttached?: boolean
  }
}
