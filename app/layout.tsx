import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import BlurTransition from "@/components/BlurTransition";
import Smoothscroll from "@/lib/SmoothScroll";
import Cursor from "@/components/Cursor";
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: "Betha Architecture",
  description: "Betha Architecture - Premier architectural design studio in Morocco. Specializing in modern, sustainable architecture, luxury residential designs, and commercial projects across Casablanca, Rabat, and beyond.",
  keywords: [
    "Morocco architecture firm",
    "Moroccan architects",
    "luxury residential design",
    "sustainable architecture Morocco",
    "commercial architecture Casablanca",
    "modern architecture design",
    "architectural services Rabat",
    "Betha Architecture",
    "best architects Morocco",
    "contemporary building design"
  ],
  authors: [{ name: "Betha Architecture" }],
  creator: "Betha Architecture",
  publisher: "Betha Architecture",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://betha-architecture.com",
    siteName: "Betha Architecture",
    title: "Betha Architecture | Leading Architecture Firm in Morocco",
    description: "Premier architectural design studio specializing in modern, sustainable architecture and luxury designs across Morocco.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Betha Architecture Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Betha Architecture | Leading Architecture Firm in Morocco",
    description: "Premier architectural design studio specializing in modern, sustainable architecture and luxury designs across Morocco.",
    images: ["/twitter-image.jpg"], // You'll need to add this image to your public folder
  },
  alternates: {
    canonical: "https://betha-architecture.com",
    languages: {
      'en-US': 'https://betha-architecture.com/en',
      'fr-FR': 'https://betha-architecture.com/fr',
      'ar-MA': 'https://betha-architecture.com/ar',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="relative">
        <Cursor />
        <div className="relative z-[1]">
          <BlurTransition />
          <Header />
          <main>
            <Smoothscroll>
              {children}
            </Smoothscroll>
          </main>
          <WhatsAppButton /> {/* Add this line */}
        </div>
      </body>
    </html>
  );
}
