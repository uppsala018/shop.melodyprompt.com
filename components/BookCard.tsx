import Image from "next/image";
import Link from "next/link";
import { BuyButton } from "./BuyButton";
import type { Book } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-5 transition-all hover:border-white/20 hover:bg-white/[0.07]"
      style={{
        background: `linear-gradient(160deg, ${book.bgColor}cc, ${book.bgColor}88)`,
      }}
    >
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-xl shadow-xl">
        <Image
          src={`/covers/cover-${book.id}.png`}
          alt={`${book.title} — ${book.primaryKeyword} ebook cover`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 22vw"
        />
        <div
          className="absolute inset-0 rounded-xl opacity-0 ring-1 ring-inset transition-opacity group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 1px ${book.accentColor}40` }}
          aria-hidden="true"
        />
      </div>

      <p className="eyebrow mb-1" style={{ color: book.accentColor }}>
        Volume {book.volume}
      </p>
      <h3 className="font-display text-base font-bold text-white leading-tight mb-1">
        {book.title}
      </h3>
      <p className="font-serif text-sm italic text-white/60 mb-4 leading-snug">
        {book.subtitle}
      </p>

      <div className="mb-4 flex items-baseline gap-2">
        <span className="price-sale">${book.salePrice.toFixed(2)}</span>
        <span className="price-list">${book.listPrice.toFixed(2)}</span>
        <span className="font-mono text-xs text-accent/70">−67%</span>
      </div>

      <div className="flex gap-2">
        <BuyButton bookId={book.id} className="btn-primary flex-1 text-xs py-2 px-3" />
        <Link
          href={`/books/${book.slug}`}
          className="btn-secondary flex-1 text-center text-xs py-2 px-3"
          aria-label={`More info about ${book.title}`}
        >
          More info
        </Link>
      </div>
    </article>
  );
}
