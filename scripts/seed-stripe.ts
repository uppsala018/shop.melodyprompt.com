/**
 * One-time script: creates Stripe Products + Prices for all 10 books + bundle.
 * Run: pnpm seed-stripe  (or: npx tsx scripts/seed-stripe.ts)
 * Requires STRIPE_SECRET_KEY in environment.
 *
 * After running, copy the printed price IDs to your .env / Vercel project settings.
 */

import Stripe from "stripe";
import { BOOKS, LIST_PRICE, SALE_PRICE, BUNDLE_SALE_PRICE } from "../lib/books";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
  typescript: true,
});

async function createBookProduct(book: (typeof BOOKS)[number]) {
  const product = await stripe.products.create({
    name: book.title,
    description: book.subtitle,
    metadata: {
      bookId: book.id,
      slug: book.slug,
      promptCount: String(book.promptCount),
    },
  });

  // Sale price (the one users pay)
  const salePrice = await stripe.prices.create({
    product: product.id,
    unit_amount: Math.round(SALE_PRICE * 100),
    currency: "usd",
    nickname: `${book.title} — Launch Sale`,
    metadata: { type: "sale", bookId: book.id },
  });

  // List price (for reference, not used in checkout)
  await stripe.prices.create({
    product: product.id,
    unit_amount: Math.round(LIST_PRICE * 100),
    currency: "usd",
    nickname: `${book.title} — List Price`,
    active: false,
    metadata: { type: "list", bookId: book.id },
  });

  console.log(`✓ ${book.title}`);
  console.log(`  Product: ${product.id}`);
  console.log(`  Sale price: ${salePrice.id}  ← use this as STRIPE_PRICE_BOOK_${book.id}`);
  console.log();

  return salePrice.id;
}

async function createBundleProduct() {
  const product = await stripe.products.create({
    name: "MelodyPrompt — All 10 Books Bundle",
    description: "Complete collection: 2,000 AI music prompts across 10 genres. PDF + EPUB.",
    metadata: { bookId: "bundle" },
  });

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: Math.round(BUNDLE_SALE_PRICE * 100),
    currency: "usd",
    nickname: "Bundle — Launch Sale",
    metadata: { type: "sale", bookId: "bundle" },
  });

  console.log("✓ Bundle");
  console.log(`  Product: ${product.id}`);
  console.log(`  Sale price: ${price.id}  ← use this as STRIPE_PRICE_BUNDLE`);
  console.log();

  return price.id;
}

async function main() {
  console.log("Creating Stripe products and prices…\n");

  for (const book of BOOKS) {
    await createBookProduct(book);
  }
  await createBundleProduct();

  console.log("Done. Copy the price IDs above to your .env or Vercel project settings.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
