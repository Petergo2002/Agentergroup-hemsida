import type { Metadata } from 'next'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
    title: 'AI Frontdesk Blogg',
    description:
        'Lär dig hur AI chat frontdesk kan öka tillgänglighet, boka fler möten och skapa bättre kundupplevelser.',
    alternates: { canonical: '/blogg/' },
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
