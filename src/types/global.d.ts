export {}

declare global {
  interface Window {
    majaWidget?: {
      open?: () => void
    }
  }
}
