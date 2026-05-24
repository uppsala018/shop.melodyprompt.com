import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
    _stripe = new Stripe(key, {
      apiVersion: "2024-06-20",
      typescript: true,
    });
  }
  return _stripe;
}

// Named export used by webhook and thanks routes
export const stripe = {
  checkout: {
    sessions: {
      create: (...args: Parameters<Stripe["checkout"]["sessions"]["create"]>) =>
        getStripe().checkout.sessions.create(...args),
      retrieve: (...args: Parameters<Stripe["checkout"]["sessions"]["retrieve"]>) =>
        getStripe().checkout.sessions.retrieve(...args),
    },
  },
  webhooks: {
    constructEvent: (...args: Parameters<Stripe["webhooks"]["constructEvent"]>) =>
      getStripe().webhooks.constructEvent(...args),
  },
};

export const PRODUCTS: Record<string, { name: string; priceId: string }> = {
  "01": {
    name: "The Ultimate Sad Song Prompt Bible",
    priceId: process.env.STRIPE_PRICE_BOOK_01 ?? "",
  },
  "02": {
    name: "Cinematic AI Music Prompts",
    priceId: process.env.STRIPE_PRICE_BOOK_02 ?? "",
  },
  "03": {
    name: "The Hip-Hop Prompt Architect",
    priceId: process.env.STRIPE_PRICE_BOOK_03 ?? "",
  },
  "04": {
    name: "The Complete Lo-Fi Atmosphere Prompt Collection",
    priceId: process.env.STRIPE_PRICE_BOOK_04 ?? "",
  },
  "05": {
    name: "Pop Hit Formula",
    priceId: process.env.STRIPE_PRICE_BOOK_05 ?? "",
  },
  "06": {
    name: "Dark Ambient & Horror AI Music Prompts",
    priceId: process.env.STRIPE_PRICE_BOOK_06 ?? "",
  },
  "07": {
    name: "EDM Drop Architect",
    priceId: process.env.STRIPE_PRICE_BOOK_07 ?? "",
  },
  "08": {
    name: "Worship & Gospel AI Music Prompt Handbook",
    priceId: process.env.STRIPE_PRICE_BOOK_08 ?? "",
  },
  "09": {
    name: "Country & Folk Storytelling Prompt Vault",
    priceId: process.env.STRIPE_PRICE_BOOK_09 ?? "",
  },
  "10": {
    name: "The Ultimate Udio & Suno Prompt Mastery Guide",
    priceId: process.env.STRIPE_PRICE_BOOK_10 ?? "",
  },
  bundle: {
    name: "MelodyPrompt — All 10 Books",
    priceId: process.env.STRIPE_PRICE_BUNDLE ?? "",
  },
};
