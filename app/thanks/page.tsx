import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { getBookById } from "@/lib/books";
import { Footer } from "@/components/Footer";
import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Thank You — Your Download Is Ready",
  description: "Your MelodyPrompt AI music prompt ebook is ready to download.",
  robots: { index: false, follow: false },
};

async function getDownloadLinks(bookIds: string[]): Promise<{ label: string; url: string }[]> {
  try {
    const blobs = await list({ prefix: "books/" });
    return bookIds.flatMap((id) => {
      const book = getBookById(id);
      if (!book) return [];
      const pdfBlob = blobs.blobs.find(
        (b) => b.pathname.includes(`book-${id}`) && b.pathname.endsWith(".pdf")
      );
      const links = [];
      if (pdfBlob) links.push({ label: `${book.title} — PDF`, url: pdfBlob.url });
      if (!pdfBlob) {
        links.push({
          label: `${book.title} — contact support@melodyprompt.com`,
          url: "#",
        });
      }
      return links;
    });
  } catch {
    return bookIds.map((id) => {
      const book = getBookById(id);
      return {
        label: `${book?.title ?? `Book ${id}`} — contact support@melodyprompt.com`,
        url: "#",
      };
    });
  }
}

export default async function ThanksPage({
  searchParams,
}: {
  searchParams: { session_id?: string; book?: string };
}) {
  const { session_id, book: bookParam } = searchParams;

  if (!session_id) redirect("/");

  let customerEmail: string | null = null;
  let bookIds: string[] = [];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(session_id);
    if (session.payment_status !== "paid") redirect("/?payment=failed");
    customerEmail = session.customer_details?.email ?? null;
    const bookId = session.metadata?.bookId ?? bookParam ?? "";
    bookIds =
      bookId === "bundle"
        ? ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"]
        : bookId ? [bookId] : [];
  } catch {
    redirect("/?payment=failed");
  }

  const downloads = await getDownloadLinks(bookIds);

  return (
    <div className="min-h-screen bg-night text-white">
      <div className="mx-auto max-w-2xl px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl font-extrabold text-white mt-4 mb-3">
            You&apos;re all set.
          </h1>
          {customerEmail && (
            <p className="font-serif text-white/60">
              Receipt sent to{" "}
              <strong className="text-white">{customerEmail}</strong>
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 mb-8">
          <h2 className="font-display font-bold text-white mb-4">
            Your downloads
          </h2>
          <p className="font-serif text-sm text-white/50 mb-5">
            Click each link to download. Links are permanent — they&apos;re also
            emailed to you. Issues? Email{" "}
            <a
              href="mailto:support@melodyprompt.com"
              className="text-accent hover:underline"
            >
              support@melodyprompt.com
            </a>
            .
          </p>
          <ul className="space-y-3">
            {downloads.map((d, i) => (
              <li key={i}>
                <a
                  href={d.url}
                  download
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 font-display text-sm font-bold transition-colors ${
                    d.url === "#"
                      ? "border-white/[0.08] text-white/40 cursor-not-allowed"
                      : "border-accent/30 bg-accent/10 text-accent hover:bg-accent/20"
                  }`}
                >
                  <span>↓</span>
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center space-y-4">
          <p className="font-serif text-white/50 text-sm">
            Need help using these prompts? Check out the free guides at{" "}
            <a
              href="https://melodyprompt.com/guides"
              className="text-accent hover:underline"
              rel="noopener"
            >
              melodyprompt.com/guides
            </a>
            .
          </p>
          <Link
            href="/"
            className="inline-block font-mono text-sm text-white/40 hover:text-white transition-colors"
          >
            ← Back to the shop
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
