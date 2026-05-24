import type { Metadata } from "next";
import { Footer } from "@/components/Footer";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "License",
  description: "MelodyPrompt ebook license terms.",
  robots: { index: false, follow: false },
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-night text-white">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-3xl font-bold text-white mb-6">License</h1>
        <div className="font-serif text-white/70 space-y-4 leading-relaxed">
          <p><strong className="text-white">Personal Commercial License</strong></p>
          <p>Each MelodyPrompt ebook grants the purchaser a personal, non-exclusive, non-transferable license to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the prompts to generate AI music for personal and commercial projects</li>
            <li>Release AI music generated using these prompts on streaming platforms</li>
            <li>Use AI music generated using these prompts in commercial media (YouTube, film, advertising)</li>
          </ul>
          <p>The following are not permitted:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reselling or redistributing the prompt text, in whole or in part</li>
            <li>Creating competing prompt products based on the content of these books</li>
            <li>Sharing login credentials or download links with third parties</li>
          </ul>
          <p className="text-white/40 text-sm">Last updated: May 2026</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
