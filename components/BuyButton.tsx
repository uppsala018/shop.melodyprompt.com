"use client";

import { useState } from "react";

interface BuyButtonProps {
  bookId: string;
  label?: string;
  className?: string;
}

export function BuyButton({ bookId, label = "Buy Now", className }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId }),
      });
      if (!res.ok) throw new Error("Checkout failed");
      const { url } = await res.json() as { url: string };
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className={className ?? "btn-primary w-full"}
      aria-label={`${label} — $9.99`}
    >
      {loading ? "Redirecting…" : label}
    </button>
  );
}
