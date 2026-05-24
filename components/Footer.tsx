import Link from "next/link";
import { BOOKS } from "@/lib/books";

export function Footer() {
  return (
    <footer className="bg-night border-t border-white/[0.08] text-white/60">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-lg font-bold text-white">
              Melody·Prompt
            </Link>
            <p className="mt-2 text-sm leading-relaxed">
              Studio-ready AI music prompts for Suno and Udio. 2,000 prompts
              across 10 genres.
            </p>
          </div>

          {/* Books column 1 */}
          <nav aria-label="Books 1–5">
            <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-white/40">
              Books Vol 1–5
            </h4>
            <ul className="space-y-2 text-sm">
              {BOOKS.slice(0, 5).map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/books/${b.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Books column 2 */}
          <nav aria-label="Books 6–10">
            <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-white/40">
              Books Vol 6–10
            </h4>
            <ul className="space-y-2 text-sm">
              {BOOKS.slice(5).map((b) => (
                <li key={b.id}>
                  <Link
                    href={`/books/${b.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources + Legal */}
          <div className="space-y-6">
            <nav aria-label="Resources">
              <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-white/40">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://melodyprompt.com"
                    className="hover:text-white transition-colors"
                    rel="noopener"
                  >
                    Free Prompt Doctor
                  </a>
                </li>
                <li>
                  <a
                    href="https://melodyprompt.com/guides"
                    className="hover:text-white transition-colors"
                    rel="noopener"
                  >
                    Blog & Guides
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@melodyprompt.com"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Legal">
              <h4 className="mb-3 font-display text-xs font-bold uppercase tracking-widest text-white/40">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/license" className="hover:text-white transition-colors">
                    License
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-10 border-t border-white/[0.08] pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} MelodyPrompt ·{" "}
          <a href="https://melodyprompt.com" className="hover:text-white/60">
            melodyprompt.com
          </a>
        </p>
      </div>
    </footer>
  );
}
