import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/hemsidor', destination: '/websites/', permanent: true },
      { source: '/blogg', destination: '/blog/', permanent: true },
      { source: '/blogg/ai-receptionist-for-kliniker', destination: '/blog/ai-receptionist-for-clinics/', permanent: true },
      { source: '/blogg/telefonpassning-for-hantverkare', destination: '/blog/ai-call-answering-for-contractors/', permanent: true },
      { source: '/blogg/hemsida-med-ai-integration', destination: '/blog/website-with-ai-integration/', permanent: true },
      { source: '/blogg/motesbokning-24-7-guide-till-ai-driven-schemalaggning', destination: '/blog/24-7-meeting-booking-guide-ai-scheduling/', permanent: true },
      { source: '/blogg/sa-automatiserar-du-telefonhantering-med-ai-agenter', destination: '/blog/how-to-automate-call-handling-with-ai-agents/', permanent: true },
      { source: '/blogg/ai-receptionist-vs-traditionell-receptionist', destination: '/blog/ai-receptionist-vs-traditional-receptionist/', permanent: true },
      { source: '/blogg/varfor-foretag-missar-samtal', destination: '/blog/why-businesses-miss-calls/', permanent: true },
      { source: '/blogg/ai-receptionist-2025-komplett-guide', destination: '/blog/ai-receptionist-2025-complete-guide/', permanent: true },
      { source: '/blogg/energieffektiv-renovering-2025-komplett-guide', destination: '/blog/ai-receptionist-2025-complete-guide/', permanent: true },
      { source: '/blogg/:path*', destination: '/blog/', permanent: true },
    ]
  },
}

export default nextConfig
