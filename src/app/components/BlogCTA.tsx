'use client'

import { openMajaWidget } from '@/lib/maja-widget'

export default function BlogCTA() {
  return (
    <button
      onClick={openMajaWidget}
      className="px-12 py-5 bg-[#FF5D00] hover:bg-[#FF7A33] text-black font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,93,0,0.3)] active:scale-95"
    >
      Start chat with Maja
    </button>
  )
}
