import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BOOKS, getBookBySlug, getCrossSellBooks } from "@/lib/books";
import { BuyButton } from "@/components/BuyButton";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SamplePromptCard } from "@/components/SamplePromptCard";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BOOKS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const book = getBookBySlug(params.slug);
  if (!book) return {};

  const title = `${book.title} — ${book.promptCount} ${book.primaryKeyword} for Suno & Udio`;
  const description = `${book.subtitle}. ${book.promptCount} studio-ready AI music prompts built on the GMIV framework, tested on Suno v4 and Udio. $9.99 — instant PDF download.`;

  return {
    title,
    description,
    keywords: [book.primaryKeyword, ...book.secondaryKeywords],
    alternates: {
      canonical: `https://shop.melodyprompt.com/books/${book.slug}`,
      languages: { en: `https://shop.melodyprompt.com/books/${book.slug}` },
    },
    openGraph: {
      title,
      description,
      url: `https://shop.melodyprompt.com/books/${book.slug}`,
      images: [
        {
          url: `/og/${book.id}`,
          width: 1200,
          height: 630,
          alt: `${book.title} — ${book.primaryKeyword}`,
        },
      ],
    },
  };
}

function buildProductJsonLd(book: ReturnType<typeof getBookBySlug>) {
  if (!book) return null;
  const launchEnd =
    process.env.NEXT_PUBLIC_LAUNCH_END ??
    new Date(Date.now() + 30 * 86400 * 1000).toISOString().split("T")[0];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: book.title,
    description: book.subtitle,
    image: `https://shop.melodyprompt.com/covers/cover-${book.id}.png`,
    brand: { "@type": "Brand", name: "MelodyPrompt" },
    offers: {
      "@type": "Offer",
      price: book.salePrice.toFixed(2),
      priceCurrency: "USD",
      priceValidUntil: launchEnd,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: `https://shop.melodyprompt.com/books/${book.slug}`,
    },
  };
}

function buildBookJsonLd(book: ReturnType<typeof getBookBySlug>) {
  if (!book) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.subtitle,
    author: { "@type": "Organization", name: "MelodyPrompt" },
    publisher: { "@type": "Organization", name: "MelodyPrompt" },
    bookFormat: "https://schema.org/EBook",
    inLanguage: "en",
    numberOfPages: book.pages,
    genre: book.genre,
    keywords: [book.primaryKeyword, ...book.secondaryKeywords].join(", "),
  };
}

function buildFaqJsonLd(book: ReturnType<typeof getBookBySlug>) {
  if (!book) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: book.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function buildBreadcrumbJsonLd(book: ReturnType<typeof getBookBySlug>) {
  if (!book) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shop.melodyprompt.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Books",
        item: "https://shop.melodyprompt.com/#books-heading",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: book.title,
        item: `https://shop.melodyprompt.com/books/${book.slug}`,
      },
    ],
  };
}

export default function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = getBookBySlug(params.slug);
  if (!book) notFound();

  const crossSells = getCrossSellBooks(book);

  return (
    <>
      <JsonLd data={buildProductJsonLd(book)!} />
      <JsonLd data={buildBookJsonLd(book)!} />
      <JsonLd data={buildFaqJsonLd(book)!} />
      <JsonLd data={buildBreadcrumbJsonLd(book)!} />

      <div
        className="min-h-screen text-white"
        style={{ backgroundColor: book.bgColor }}
      >
        {/* Nav */}
        <nav className="sticky top-0 z-50 border-b border-white/[0.08] backdrop-blur"
          style={{ backgroundColor: `${book.bgColor}e0` }}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-display text-base font-bold text-white hover:text-accent transition-colors">
              ← MelodyPrompt Shop
            </Link>
          </div>
        </nav>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6">
          <ol className="flex items-center gap-2 font-mono text-xs text-white/40">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/#books-heading" className="hover:text-white transition-colors">Books</Link></li>
            <li aria-hidden>/</li>
            <li className="text-white/70 truncate">{book.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start lg:grid-cols-[340px_1fr]">
            {/* Cover */}
            <div className="relative mx-auto w-full max-w-xs md:max-w-none">
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  transform: "perspective(800px) rotateY(-6deg) rotateX(2deg)",
                  boxShadow: `0 40px 80px -20px ${book.accentColor}40`,
                }}
              >
                <Image
                  src={`/covers/cover-${book.id}.png`}
                  alt={`${book.title} — ${book.primaryKeyword} ebook cover`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 80vw, 340px"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <p
                className="eyebrow mb-2"
                style={{ color: book.accentColor }}
              >
                Volume {book.volume} — {book.genre}
              </p>
              <h1 className="font-display text-3xl font-extrabold text-white leading-tight mb-2 md:text-4xl lg:text-5xl text-balance">
                {book.title}
              </h1>
              <p className="font-serif text-lg italic text-white/60 mb-5 max-w-prose">
                {book.hookSentence}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-5">
                <span className="price-sale text-3xl">${book.salePrice.toFixed(2)}</span>
                <span className="price-list text-base">${book.listPrice.toFixed(2)}</span>
                <span className="font-mono text-sm bg-accent/20 text-accent px-2 py-0.5 rounded">
                  Save $20 · 67% off
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6 max-w-sm">
                <BuyButton bookId={book.id} className="btn-primary flex-1" />
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-4 font-mono text-xs text-white/50">
                {[
                  "Instant download",
                  "PDF download",
                  `${book.pages} pages`,
                  `${book.promptCount} prompts`,
                  "Lifetime updates",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <span style={{ color: book.accentColor }}>✓</span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* What's inside */}
        <section
          className="mx-auto max-w-4xl px-4 py-12 border-t border-white/[0.06]"
          aria-labelledby="contents-heading"
        >
          <h2
            id="contents-heading"
            className="font-display text-2xl font-bold text-white mb-6"
          >
            What&apos;s Inside
          </h2>
          <ol className="space-y-3">
            {book.chapters.map((ch) => (
              <li key={ch.number} className="flex gap-4 items-start">
                <span
                  className="font-mono text-sm shrink-0 mt-0.5"
                  style={{ color: book.accentColor }}
                >
                  {String(ch.number).padStart(2, "0")}
                </span>
                <div>
                  <strong className="font-display font-bold text-white">
                    {ch.title}
                  </strong>
                  <p className="font-serif text-sm text-white/60 mt-0.5">
                    {ch.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Long-form content */}
        <section
          className="mx-auto max-w-3xl px-4 py-12 border-t border-white/[0.06]"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="font-display text-2xl font-bold text-white mb-6"
          >
            About This Book
          </h2>
          <div
            className="prose prose-invert prose-lg max-w-none font-serif
              prose-headings:font-display prose-headings:font-bold
              prose-p:text-white/75 prose-p:leading-relaxed
              prose-h2:text-white prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-white/90 prose-h3:text-base
              prose-strong:text-white prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: book.longFormIntro }}
          />
        </section>

        {/* Sample prompts */}
        <section
          className="mx-auto max-w-4xl px-4 py-12 border-t border-white/[0.06]"
          aria-labelledby="samples-heading"
        >
          <h2
            id="samples-heading"
            className="font-display text-2xl font-bold text-white mb-3"
          >
            Sample Prompts
          </h2>
          <p className="font-serif text-sm text-white/50 mb-6">
            Sample — the full book has {book.promptCount} like these.
          </p>
          <div className="space-y-4">
            {book.samplePrompts.map((sp, i) => (
              <SamplePromptCard
                key={i}
                label={sp.label}
                prompt={sp.prompt}
                accentColor={book.accentColor}
              />
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section
          className="mx-auto max-w-4xl px-4 py-12 border-t border-white/[0.06]"
          aria-labelledby="audience-heading"
        >
          <h2
            id="audience-heading"
            className="font-display text-2xl font-bold text-white mb-6"
          >
            Who It&apos;s For
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Solo Producer",
                desc: `You're making ${book.genre} tracks in your home studio. You know AI can speed up your workflow but you're tired of trial-and-error prompting. This book gives you 200 tested starting points — just paste and generate.`,
              },
              {
                title: "Content Creator",
                desc: `You need ${book.genre.split("/")[0].trim().toLowerCase()} background music for YouTube, TikTok, or Reels. The prompts in this book are formatted for instant use and produce output that clears the quality bar for professional content.`,
              },
              {
                title: "Film / Game Composer",
                desc: `You're integrating AI into a professional composing workflow. The GMIV framework in this book gives you a systematic, repeatable approach to AI-assisted ${book.genre.toLowerCase()} scoring that produces usable reference material quickly.`,
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-5"
              >
                <h3
                  className="font-display font-bold text-white mb-2"
                  style={{ color: book.accentColor }}
                >
                  {p.title}
                </h3>
                <p className="font-serif text-sm text-white/65 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Value comparison */}
        <section
          className="mx-auto max-w-4xl px-4 py-12 border-t border-white/[0.06]"
          aria-labelledby="value-heading"
        >
          <h2
            id="value-heading"
            className="font-display text-2xl font-bold text-white mb-6"
          >
            Why $9.99 Is the Right Price
          </h2>
          <p className="font-serif text-white/70 mb-6 max-w-prose">
            One studio-ready prompt — built on the GMIV framework, tested in
            Suno and Udio — runs about{" "}
            <strong className="text-accent">5¢</strong> when you buy a book at
            the launch price. The same prompt from a freelance producer averages
            $30–80. A 6-hour Suno prompt-engineering course on the major
            platforms sits at $199. A single hour of session time with a working
            composer is $120 minimum. You&apos;re not buying inspiration.
            You&apos;re buying 200 prompts that work the first time.
          </p>
          <p className="font-mono text-xs text-white/30">
            Competitor and consult prices are approximate, based on publicly
            listed Q1 2026 prices on Skillshare, Udemy, and Fiverr.
          </p>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-4xl px-4 py-12 border-t border-white/[0.06]">
          <FAQ items={book.faqs} />
        </section>

        {/* Cross-sell */}
        {crossSells.length > 0 && (
          <section
            className="mx-auto max-w-6xl px-4 py-12 border-t border-white/[0.06]"
            aria-labelledby="related-heading"
          >
            <h2
              id="related-heading"
              className="font-display text-2xl font-bold text-white mb-6"
            >
              Related Books
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {crossSells.map((cs) => (
                <article
                  key={cs.id}
                  className="rounded-2xl border border-white/[0.08] p-5 transition-all hover:border-white/20"
                  style={{ background: `linear-gradient(160deg, ${cs.bgColor}cc, ${cs.bgColor}66)` }}
                >
                  <p className="eyebrow mb-1" style={{ color: cs.accentColor }}>
                    Volume {cs.volume}
                  </p>
                  <h3 className="font-display font-bold text-white mb-1">
                    {cs.title}
                  </h3>
                  <p className="font-serif text-xs text-white/50 italic mb-4">
                    {cs.subtitle}
                  </p>
                  <Link
                    href={`/books/${cs.slug}`}
                    className="btn-secondary text-xs py-2 px-4"
                  >
                    More info
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mx-auto max-w-2xl px-4 py-16 text-center border-t border-white/[0.06]">
          <h2 className="font-display text-2xl font-bold text-white mb-3">
            Ready to get started?
          </h2>
          <p className="font-serif text-white/60 mb-6">
            {book.promptCount} studio-ready {book.primaryKeyword} · Instant PDF download
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-6">
            <span className="price-sale text-3xl">${book.salePrice.toFixed(2)}</span>
            <span className="price-list">${book.listPrice.toFixed(2)}</span>
          </div>
          <BuyButton
            bookId={book.id}
            label={`Buy ${book.title} — $${book.salePrice.toFixed(2)}`}
            className="btn-primary px-10 py-4 text-base"
          />
        </section>

        <Footer />
      </div>
    </>
  );
}

