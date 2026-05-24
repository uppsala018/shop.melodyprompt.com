"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  heading?: string;
}

export function FAQ({ items, heading = "Frequently asked" }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-display text-2xl font-bold text-white mb-6"
      >
        {heading}
      </h2>
      <dl className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.08] bg-white/[0.04]"
          >
            <dt>
              <button
                type="button"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display font-bold text-white hover:text-accent transition-colors"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              hidden={open !== i}
              className="px-5 pb-4 font-serif text-sm text-white/70 leading-relaxed"
            >
              {item.a}
              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-accent underline-offset-2 hover:underline transition-colors"
                >
                  {item.link.label} →
                </a>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
