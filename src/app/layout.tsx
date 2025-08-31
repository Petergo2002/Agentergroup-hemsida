import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: 'ByggFutur – Byggföretag i Stockholm',
    template: '%s | ByggFutur',
  },
  description:
    'ByggFutur hjälper dig med renovering, nyproduktion och energieffektiva lösningar i Stockholm. Fast pris, certifierade hantverkare och hög kvalitet.',
  keywords: [
    'byggföretag Stockholm',
    'renovering',
    'nyproduktion',
    'energieffektiv renovering',
    'hantverkare',
    'ROT-avdrag',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'ByggFutur – Byggföretag i Stockholm',
    description:
      'ByggFutur hjälper dig med renovering, nyproduktion och energieffektiva lösningar i Stockholm. Fast pris, certifierade hantverkare och hög kvalitet.',
    url: '/',
    siteName: 'ByggFutur',
    locale: 'sv_SE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
