import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MelodyPrompt Shop privacy policy.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-night text-white">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="font-serif text-white/70 space-y-4 leading-relaxed">
          <p>MelodyPrompt collects only the data necessary to process your purchase: email address and payment details (handled by Stripe — we never store card numbers).</p>
          <p>We use your email address to send your download link and receipt, and for purchase-related communications only.</p>
          <p>Analytics (Vercel Analytics and Google Analytics 4) are used to improve the site. These collect anonymized page view data.</p>
          <p>We do not sell your data. We do not share your data with third parties except Stripe (for payment processing) and Vercel (for hosting and analytics).</p>
          <p>For data deletion requests, contact support@melodyprompt.com.</p>
          <p className="text-white/40 text-sm">Last updated: May 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
