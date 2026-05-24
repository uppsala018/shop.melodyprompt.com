"use client";

import { useState } from "react";

interface SamplePromptCardProps {
  label: string;
  prompt: string;
  accentColor: string;
}

export function SamplePromptCard({ label, prompt, accentColor }: SamplePromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-xl border border-white/[0.08] bg-black/40">
      <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-2">
        <span className="font-mono text-xs text-white/50">{label}</span>
        <button
          onClick={handleCopy}
          className="font-mono text-xs px-2 py-1 rounded transition-colors hover:text-white"
          style={{ color: accentColor }}
          aria-label="Copy prompt to clipboard"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-xs text-white/80 whitespace-pre-wrap leading-relaxed">
        {prompt}
      </pre>
    </div>
  );
}
