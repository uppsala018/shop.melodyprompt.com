/**
 * Purchase record schema.
 *
 * For production, replace this stub with your actual database client.
 * If using Supabase (already in the main app), add a `purchases` table:
 *
 *   CREATE TABLE purchases (
 *     id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 *     stripe_session_id text UNIQUE NOT NULL,
 *     customer_email  text,
 *     book_ids        text[] NOT NULL,   -- ['01', '02', …] or ['bundle']
 *     amount_total    integer,           -- in cents
 *     created_at      timestamptz DEFAULT now()
 *   );
 */

export interface PurchaseRecord {
  stripeSessionId: string;
  customerEmail: string | null;
  bookIds: string[];
  amountTotal: number | null;
}

export async function recordPurchase(record: PurchaseRecord): Promise<void> {
  // TODO: replace with real DB write
  console.log("[purchases] recording purchase", record);
}

export async function getPurchaseBySession(
  sessionId: string
): Promise<PurchaseRecord | null> {
  // TODO: replace with real DB read
  void sessionId;
  return null;
}
