import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { recordPurchase } from "@/lib/db";
import type Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("[webhook] STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const stripe = getStripe();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("[webhook] signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const bookId = session.metadata?.bookId ?? "";
    const bookIds = bookId === "bundle"
      ? ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
      : [bookId];

    await recordPurchase({
      stripeSessionId: session.id,
      customerEmail: session.customer_details?.email ?? null,
      bookIds,
      amountTotal: session.amount_total,
    });

    // TODO: send download email via your email service
    // e.g. await sendDownloadEmail(session.customer_details?.email, bookIds);
  }

  return NextResponse.json({ received: true });
}
