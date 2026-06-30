function getLaunchEndDate(): Date {
  const envDate = process.env.NEXT_PUBLIC_LAUNCH_END;
  if (envDate) return new Date(envDate);
  return new Date("2026-08-30");
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
        <span className="font-bold text-accent">LAST MINUTE CLOSING OFFER · ENDS SOON</span>
        {" — "}
        Save $25 on every book until{" "}
        <time dateTime={endIso} className="font-semibold">
          {formatted}
        </time>
        {" · "}
        <span className="line-through opacity-60">Was $29.99</span>
        {"  "}
        <span className="text-accent font-bold">Now $4.99</span>
        {" · "}
        <span className="text-white/70">83% off</span>
      </p>
    </div>
  );
}
