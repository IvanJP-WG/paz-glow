import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Inter, IBM_Plex_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cinzel",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Paz Glow | Ritual-First Skincare",
    template: "%s | Paz Glow",
  },
  description: "Paz Glow offers ritual-first, cruelty-free skincare rooted in earth and nature.",
  keywords: ["skincare", "natural skincare", "ritual skincare", "Paz Glow"],
  authors: [{ name: "Paz Glow" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pazglow.com",
    title: "Paz Glow | Ritual-First Skincare",
    description: "Clean. Cruelty-Free. Rituals for radiant skin.",
    siteName: "Paz Glow",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pazglow",
    creator: "@pazglow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${inter.variable} ${plexMono.variable} font-sans bg-sand text-soil`}>
          <SiteHeader />
          <main className="pt-20">{children}</main>
          <SiteFooter />
      </body>
    </html>
  );
}
