# MelodyPrompt Shop — `shop.melodyprompt.com`

A standalone Next.js 14 App Router storefront for the 10 MelodyPrompt AI music prompt ebooks.

---

## Quick start

```bash
cd shop
npm install
cp .env.example .env.local   # fill in your keys
npm run dev                   # runs on http://localhost:3001
```

---

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe secret key (reuse from main melodyprompt.com project) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | Webhook secret from Stripe Dashboard |
| `STRIPE_PRICE_BOOK_01` … `STRIPE_PRICE_BOOK_10` | Stripe Price IDs for each book |
| `STRIPE_PRICE_BUNDLE` | Stripe Price ID for the all-10 bundle |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (optional) |
| `NEXT_PUBLIC_LAUNCH_END` | ISO date when launch sale ends, e.g. `2026-06-30` |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token for download file hosting |

---

## Setting up Stripe products

**Option A — Script (recommended):**
```bash
STRIPE_SECRET_KEY=sk_live_... npm run seed-stripe
```
The script creates a Product + sale Price for each book, and prints the Price IDs. Copy them to your `.env.local` and Vercel project settings.

**Option B — Stripe Dashboard:**
1. Go to Stripe Dashboard → Products → Add Product
2. For each book: name = book title, price = $9.99 one-time
3. Copy the Price ID (starts with `price_`) to the matching env var

---

## Uploading PDFs to Vercel Blob

1. Enable Blob Storage in your Vercel project (Storage tab → Blob)
2. Copy the `BLOB_READ_WRITE_TOKEN` to your environment variables
3. Upload each ebook file using the Vercel CLI or Dashboard:
   ```bash
   npx vercel blob upload books/book-01.pdf --store your-store-id
   npx vercel blob upload books/book-01.epub --store your-store-id
   # repeat for books 02–10
   ```
4. The `/thanks` page automatically finds files matching `books/book-{id}.pdf` and `books/book-{id}.epub`

---

## Updating prices or copy

- **Sale price / list price:** `lib/books.ts` — `SALE_PRICE`, `LIST_PRICE`, `BUNDLE_SALE_PRICE`, `BUNDLE_LIST_PRICE` constants. Also update the corresponding Stripe prices.
- **Book titles / subtitles / FAQs / sample prompts:** `lib/books.ts` → the `BOOKS` array.
- **Launch end date:** `NEXT_PUBLIC_LAUNCH_END` env var in Vercel project settings.
- **Cover images:** Drop PNG files as `public/covers/cover-01.png` … `cover-10.png`. Recommended: the `Cover_A_NN_<slug>.png` files from your ebook packages.

---

## Adding book cover images

The site expects covers at:
```
shop/public/covers/cover-01.png
shop/public/covers/cover-02.png
…
shop/public/covers/cover-10.png
```

Copy them from your ebook packages:
```bash
cp "MelodyPrompt_ALL_10_Ebooks_Complete/MelodyPrompt_01_sad-song-prompts/pkg_book1/Cover_A_01_sad-song-prompts.png" shop/public/covers/cover-01.png
# … repeat for 02–10
```

Until covers are added, the site still works — Next.js `<Image>` will show a broken image placeholder.

---

## Deploying to Vercel

1. Create a new Vercel project
2. Import this `shop/` directory as the project root
3. Framework preset: **Next.js**
4. Build command: `npm run build`
5. Output directory: `.next`
6. Add all environment variables from `.env.example`
7. Add domain `shop.melodyprompt.com` in Project Settings → Domains
8. Add a CNAME record in your DNS: `shop` → `cname.vercel-dns.com`

### Stripe webhook
After deploying, create a webhook in Stripe Dashboard → Webhooks:
- URL: `https://shop.melodyprompt.com/api/webhook`
- Events: `checkout.session.completed`
- Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`

---

## Running tests

```bash
npm test
```

Tests verify:
- Every book's primary keyword appears in its content
- Every book's secondary keywords appear in its content  
- Global keywords are present across the catalog
- Data integrity (prompt counts, FAQ counts, chapter counts)

---

## Project structure

```
shop/
├── app/
│   ├── layout.tsx          Root layout (fonts, analytics, GA4)
│   ├── page.tsx            Landing page
│   ├── books/[slug]/       Book info pages (10 static pages)
│   ├── thanks/             Purchase success + download
│   ├── og/[bookId]/        OG image generation (edge)
│   └── api/
│       ├── checkout/       Stripe checkout session creation
│       └── webhook/        Stripe webhook handler
├── components/             Shared components
├── lib/
│   ├── books.ts            Single source of truth for all book data
│   ├── stripe.ts           Stripe client + product map
│   └── db.ts               Purchase record schema (stub — wire to your DB)
├── scripts/
│   └── seed-stripe.ts      One-time Stripe product creation
├── __tests__/
│   └── keywords.test.ts    Keyword presence assertions
└── public/covers/          Book cover images (add your PNGs here)
```
