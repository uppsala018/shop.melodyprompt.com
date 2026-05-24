import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Sale",
  description: "MelodyPrompt Shop terms of sale and purchase policy.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-night text-white">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-3xl font-bold text-white mb-6">Terms of Sale</h1>
        <div className="font-serif text-white/70 space-y-4 leading-relaxed">
          <p>All sales are final. Ebooks are digital products delivered by download link immediately after purchase.</p>
          <p>You receive a personal, non-transferable license to use the prompts for commercial music production. Resale or redistribution of the prompt text is not permitted.</p>
          <p>Updates to the ebook content are provided at no additional charge and delivered to your original download link.</p>
          <p>For support, contact support@melodyprompt.com.</p>
          <p className="text-white/40 text-sm">Last updated: May 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
