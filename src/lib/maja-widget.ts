const WIDGET_URL = 'https://widget.agentergroup.com/'

export function openMajaWidget() {
  if (typeof window === 'undefined') return

  if (window.majaWidget?.open) {
    window.majaWidget.open()
    return
  }

  window.open(WIDGET_URL, '_blank', 'noopener,noreferrer')
}
