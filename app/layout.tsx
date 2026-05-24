import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://shop.melodyprompt.com"),
  title: {
    default: "MelodyPrompt Shop — Studio-Ready AI Music Prompts",
    template: "%s | MelodyPrompt Shop",
  },
  description:
    "200 studio-ready AI music prompts per book. Built on the GMIV framework, tested on Suno v4 and Udio. 10 genres, $9.99 each.",
  keywords: [
    "sad song prompts",
    "suno ai prompts",
    "udio prompts",
    "ai music prompt library",
    "suno cinematic trailer music prompts",
    "how to use suno ai music generator",
    "GMIV framework",
    "studio-ready ai music prompts",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shop.melodyprompt.com",
    siteName: "MelodyPrompt Shop",
  },
  twitter: {
    card: "summary_large_image",
    site: "@melodyprompt",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://shop.melodyprompt.com",
    languages: { "en": "https://shop.melodyprompt.com" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="canonical" href="https://shop.melodyprompt.com" />
        <link rel="icon" href="/favicon.ico" />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
