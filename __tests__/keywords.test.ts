/**
 * Keyword presence tests.
 *
 * For each book, verifies that its primary keyword appears in the longFormIntro
 * or in one of its FAQ answers, sample prompts, chapter titles, or subtitle.
 *
 * Run: pnpm test (from shop/ directory)
 */

import { describe, it, expect } from "vitest";
import { BOOKS } from "../lib/books";

const GLOBAL_KEYWORDS = [
  "sad song prompts",
  "suno ai epic cinematic trailer music prompts",
  "hip hop suno prompts",
  "lo-fi suno prompts",
  "pop suno prompts",
  "dark ambient suno prompts",
  "EDM suno prompts",
  "worship suno prompts",
  "country suno prompts",
  "how to use suno ai music generator step by step",
  "GMIV framework",
  "udio prompts",
  "best udio prompts",
  "ai music prompt library",
  "copy paste suno prompts",
  "studio-ready ai music prompts",
  "suno v4 prompts",
  "prompt engineering for ai music",
  "can i release ai music on spotify",
  "does distrokid allow ai music",
  "how to use custom prompt in suno ai",
];

function bookFullText(book: (typeof BOOKS)[number]): string {
  return [
    book.title,
    book.subtitle,
    book.hookSentence,
    book.primaryKeyword,
    ...book.secondaryKeywords,
    book.longFormIntro,
    ...book.chapters.map((c) => `${c.title} ${c.description}`),
    ...book.samplePrompts.map((s) => `${s.label} ${s.prompt}`),
    ...book.faqs.map((f) => `${f.q} ${f.a}`),
  ]
    .join(" ")
    .toLowerCase();
}

describe("Book primary keyword presence", () => {
  for (const book of BOOKS) {
    it(`Book ${book.id} contains its primary keyword: "${book.primaryKeyword}"`, () => {
      const text = bookFullText(book);
      expect(text).toContain(book.primaryKeyword.toLowerCase());
    });
  }
});

describe("Book secondary keyword presence", () => {
  for (const book of BOOKS) {
    for (const kw of book.secondaryKeywords) {
      it(`Book ${book.id} contains secondary keyword: "${kw}"`, () => {
        const text = bookFullText(book);
        expect(text).toContain(kw.toLowerCase());
      });
    }
  }
});

describe("Cross-site global keyword coverage", () => {
  const allText = BOOKS.map(bookFullText).join(" ");

  for (const kw of GLOBAL_KEYWORDS) {
    it(`At least one book contains global keyword: "${kw}"`, () => {
      expect(allText).toContain(kw.toLowerCase());
    });
  }
});

describe("Book data integrity", () => {
  for (const book of BOOKS) {
    it(`Book ${book.id} has at least 3 sample prompts`, () => {
      expect(book.samplePrompts.length).toBeGreaterThanOrEqual(3);
    });
    it(`Book ${book.id} has at least 8 FAQs`, () => {
      expect(book.faqs.length).toBeGreaterThanOrEqual(8);
    });
    it(`Book ${book.id} has at least 7 chapters`, () => {
      expect(book.chapters.length).toBeGreaterThanOrEqual(7);
    });
    it(`Book ${book.id} has exactly 3 cross-sells`, () => {
      expect(book.crossSellIds.length).toBe(3);
    });
    it(`Book ${book.id} long-form intro is at least 600 chars`, () => {
      const stripped = book.longFormIntro.replace(/<[^>]+>/g, "");
      expect(stripped.length).toBeGreaterThanOrEqual(600);
    });
  }
});
