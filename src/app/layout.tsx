import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const brandFavicon = '/favicon/favicon-192x192%202.png';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: 'AI-Receptionist Sverige | Missa Aldrig Ett Samtal | Agenter Group',
    template: '%s | Agenter Group',
  },
  icons: {
    icon: brandFavicon,
    apple: brandFavicon,
  },
  description:
    'AI-receptionist som aldrig missar ett samtal. Intelligenta AI-agenter för automatisk telefonhantering, mötesbokning 24/7 och kundservice. Perfekt för företag som vill öka tillgängligheten och aldrig missa viktiga samtal.',
  keywords: [
    'AI-receptionist',
    'AI-receptionist Sverige',
    'AI agenter',
    'missa aldrig ett samtal',
    'aldrig missa samtal',
    'automatisk telefonhantering',
    'AI telefonist',
    'virtuell receptionist',
    'intelligent receptionist',
    'mötesbokning AI',
    'kundservice 24/7',
    'företagsautomation',
    'AI-assistent företag',
    'automatisk kundservice',
    'AI samtalshantering',
    'digital receptionist',
    'smart telefonhantering',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AI-Receptionist Sverige | Missa Aldrig Ett Samtal | Agenter Group',
    description:
      'AI-receptionist som aldrig missar ett samtal. Intelligenta AI-agenter för automatisk telefonhantering, mötesbokning 24/7 och kundservice. Perfekt för företag som vill öka tillgängligheten.',
    url: '/',
    siteName: 'Agenter Group',
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
