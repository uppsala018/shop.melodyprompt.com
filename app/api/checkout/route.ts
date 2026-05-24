import { NextRequest, NextResponse } from "next/server";
import { getStripe, PRODUCTS } from "@/lib/stripe";
import { slugForBookId } from "@/lib/books";

export async function POST(req: NextRequest) {
  try {
    const { bookId } = (await req.json()) as { bookId: string };

    const product = PRODUCTS[bookId];
    if (!product) {
      return NextResponse.json({ error: "Invalid bookId" }, { status: 400 });
    }

    if (!product.priceId) {
      return NextResponse.json(
        { error: `Price not configured for bookId: ${bookId}` },
        { status: 500 }
      );
    }

    const origin =
      req.headers.get("origin") ?? "https://shop.melodyprompt.com";

    const cancelSlug = slugForBookId(bookId);
    const cancelUrl =
      bookId === "bundle" ? `${origin}/` : `${origin}/books/${cancelSlug}?canceled=1`;

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: product.priceId, quantity: 1 }],
      success_url: `${origin}/thanks?session_id={CHECKOUT_SESSION_ID}&book=${bookId}`,
      cancel_url: cancelUrl,
      metadata: { bookId },
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      automatic_tax: { enabled: true },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
