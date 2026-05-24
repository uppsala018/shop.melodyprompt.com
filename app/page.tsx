import type { Metadata } from "next";
import Link from "next/link";
import { BOOKS, BUNDLE_LIST_PRICE, BUNDLE_SALE_PRICE } from "@/lib/books";
import { BookCard } from "@/components/BookCard";
import { SaleBanner } from "@/components/SaleBanner";
import { ValueComparison } from "@/components/ValueComparison";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { BuyButton } from "@/components/BuyButton";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Studio-Ready AI Music Prompts — 2,000 Tested Prompts for Suno & Udio",
  description:
    "200 studio-ready AI music prompts per book. Sad song prompts, cinematic trailer music, hip-hop, lo-fi, pop, EDM, horror, worship, country, and prompt mastery. $9.99 each — tested on Suno v4 and Udio.",
  alternates: {
    canonical: "https://shop.melodyprompt.com",
    languages: { "en": "https://shop.melodyprompt.com" },
  },
  openGraph: {
    title: "Studio-Ready AI Music Prompts — MelodyPrompt Shop",
    description:
      "2,000 AI music prompts across 10 genres. Sad song prompts, suno ai epic cinematic trailer music prompts, hip hop suno prompts, and more. $9.99 per book.",
    url: "https://shop.melodyprompt.com",
    images: [
      {
        url: "/og/landing.png",
        width: 1200,
        height: 630,
        alt: "MelodyPrompt Shop — Studio-Ready AI Music Prompts",
      },
    ],
  },
};

const LANDING_FAQS = [
  {
    q: "Can I release AI music on Spotify?",
    a: "Yes. Spotify accepts AI-generated music through approved distributors like DistroKid, TuneCore, and CD Baby. You need to declare AI involvement during upload — all three platforms have AI disclosure fields as of 2026. Your track lands in normal catalog search and is eligible for editorial playlist consideration.",
  },
  {
    q: "Does DistroKid allow AI music?",
    a: "DistroKid allows both AI-assisted and AI-generated music, provided you select the correct option during upload. They've had dedicated AI music support since 2024. Check their current TOS before releasing, as this area is actively updated.",
  },
  {
    q: "How do I use a custom prompt in Suno AI in 2026?",
    a: "In Suno v4, click 'Custom Mode' in the creation interface, paste your GMIV-formatted prompt into the Style field, and click Create. You can optionally add a title and lyrics, or leave lyrics blank for an instrumental. The prompts in every MelodyPrompt book are formatted for direct copy-paste into this field.",
  },
  {
    q: "Are these prompts for Suno or Udio?",
    a: "Both. Every prompt in every book was tested on Suno v4 and Udio before publication. The GMIV framework works on both platforms — minor platform-specific adjustments are covered in each book.",
  },
  {
    q: "What's the GMIV framework?",
    a: "GMIV stands for Genre, Mood, Instrumentation, Vibe — the four-part prompt structure used across all 10 books. Genre anchors the AI's reference pool. Mood specifies emotional output. Instrumentation describes the sonic palette. Vibe is the visual or cinematic anchor that ties the three together. Together they eliminate vagueness and dramatically improve prompt-to-output accuracy.",
  },
  {
    q: "Do I get future updates?",
    a: "Yes — every book includes lifetime access to all future updates. When we add new prompts or revise for new Suno or Udio model versions, you receive the update at no additional charge.",
  },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MelodyPrompt",
  url: "https://shop.melodyprompt.com",
  logo: "https://shop.melodyprompt.com/favicon.ico",
  description:
    "Studio-ready AI music prompts for Suno and Udio. 10 genre ebooks, 200 prompts each.",
  sameAs: ["https://melodyprompt.com"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MelodyPrompt Shop",
  url: "https://shop.melodyprompt.com",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://shop.melodyprompt.com" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "MelodyPrompt AI Music Prompt Books",
  description: "10 genre-specific AI music prompt books for Suno and Udio",
  itemListElement: BOOKS.map((book, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: book.title,
    url: `https://shop.melodyprompt.com/books/${book.slug}`,
    item: {
      "@type": "Product",
      name: book.title,
      description: book.subtitle,
      offers: {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={orgJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListJsonLd} />

      <div className="min-h-screen bg-night">
        {/* Nav */}
        <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-night/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-display text-lg font-bold text-white">
              Melody·Prompt <span className="text-accent">· The Shop</span>
            </Link>
            <a
              href="https://melodyprompt.com"
              className="font-mono text-xs text-white/50 hover:text-white transition-colors"
            >
              Free Prompt Doctor →
            </a>
          </div>
        </nav>

        <SaleBanner />

        {/* Hero */}
        <header className="mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="eyebrow mb-4">Melody·Prompt · The Shop</p>
          <h1 className="font-display text-4xl font-extrabold text-white md:text-6xl leading-[1.05] mb-5 text-balance">
            Studio-ready AI music prompts.{" "}
            <em className="italic text-accent not-italic">Two thousand of them.</em>
          </h1>
          <p className="font-serif text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Ten genre books packed with sad song prompts, suno ai epic cinematic
            trailer music prompts, hip-hop, lo-fi, EDM, and more — every prompt
            tested on Suno + Udio and formatted for direct copy-paste.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-6 font-mono text-sm text-white/50">
            {[
              "2,000 prompts",
              "70 chapters",
              "10 genres",
              "6×9\" PDF",
              "Lifetime updates",
            ].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="text-accent">✓</span> {t}
              </span>
            ))}
          </div>
        </header>

        {/* Book grid */}
        <section
          className="mx-auto max-w-6xl px-4 pb-16"
          aria-labelledby="books-heading"
        >
          <h2
            id="books-heading"
            className="font-display text-2xl font-bold text-white mb-8 text-center"
          >
            10 Books · 10 Genres
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {BOOKS.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Bundle upsell */}
        <section
          className="mx-auto max-w-6xl px-4 pb-20"
          aria-labelledby="bundle-heading"
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-accent/20 p-8 md:p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, #1a0f2e 0%, #0c0a14 60%, #070e1f 100%)",
            }}
          >
            <p className="eyebrow mb-3">Best Value</p>
            <h2
              id="bundle-heading"
              className="font-display text-3xl md:text-4xl font-extrabold text-white mb-3"
            >
              All 10 Books Bundle
            </h2>
            <p className="font-serif text-lg text-white/70 max-w-xl mx-auto mb-6">
              Every genre, every prompt, one purchase. Save another 87% compared
              to buying individually — 2,000 prompts, all 10 ebooks.
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="font-mono text-4xl font-bold text-accent">
                ${BUNDLE_SALE_PRICE.toFixed(2)}
              </span>
              <span className="font-mono text-lg text-white/40 line-through">
                ${BUNDLE_LIST_PRICE.toFixed(2)}
              </span>
              <span className="font-mono text-sm bg-accent/20 text-accent px-2 py-0.5 rounded">
                Save $260 · 87% off
              </span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto">
              <BuyButton
                bookId="bundle"
                label="Buy All 10 Books — $39"
                className="btn-primary w-full sm:w-auto px-8"
              />
            </div>
            <p className="mt-4 font-mono text-xs text-white/30">
              Instant PDF download · All 10 genres · Lifetime updates
            </p>
          </div>
        </section>

        <ValueComparison />

        {/* Social proof */}
        <section className="section-dark py-16" aria-labelledby="proof-heading">
          <div className="mx-auto max-w-4xl px-4">
            <h2
              id="proof-heading"
              className="font-display text-2xl font-bold text-white text-center mb-6"
            >
              Compatible with every major AI music platform
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {["Suno v4+", "Udio", "DistroKid", "Spotify", "Apple Music"].map(
                (p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-sm text-white/60"
                  >
                    {p}
                  </span>
                )
              )}
            </div>
            <p className="text-center font-serif text-sm text-white/40 mb-2">
              Every prompt tested on Suno v4+ and Udio · AI music disclosure
              guide included · Compatible with DistroKid releases
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-dark py-16 border-t border-white/[0.05]">
          <div className="mx-auto max-w-3xl px-4">
            <FAQ items={LANDING_FAQS} heading="Common questions" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
