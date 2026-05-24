function getLaunchEndDate(): Date {
  const envDate = process.env.NEXT_PUBLIC_LAUNCH_END;
  if (envDate) return new Date(envDate);
  // Default: 30 days from build time
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d;
}

export function SaleBanner() {
  const endDate = getLaunchEndDate();
  const endIso = endDate.toISOString().split("T")[0];
  const formatted = endDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-accent/10 border-y border-accent/20 py-3 text-center">
      <p className="font-mono text-sm text-white">
        <span className="font-bold text-accent">LAUNCH OFFER · ENDS SOON</span>
        {" — "}
        Save $20 on every book until{" "}
        <time dateTime={endIso} className="font-semibold">
          {formatted}
        </time>
        {" · "}
        <span className="line-through opacity-60">Was $29.99</span>
        {"  "}
        <span className="text-accent font-bold">Now $9.99</span>
        {" · "}
        <span className="text-white/70">67% off</span>
      </p>
    </div>
  );
}
