import type { Metadata } from 'next'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'AI Front Desk Blog',
  description: 'Learn how AI front desk workflows increase availability, capture more leads, and improve customer experience.',
  alternates: { canonical: '/blog/' },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
