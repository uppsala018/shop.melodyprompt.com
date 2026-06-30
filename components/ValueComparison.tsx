export function ValueComparison() {
  return (
    <section className="section-dark py-16" aria-labelledby="value-heading">
      <div className="mx-auto max-w-4xl px-4">
        <h2
          id="value-heading"
          className="font-display text-2xl font-bold text-white text-center mb-3"
        >
          The $4.99 Math
        </h2>
        <p className="text-center text-white/60 font-serif mb-10 max-w-xl mx-auto">
          One studio-ready prompt — built on the GMIV framework, tested in Suno
          and Udio — runs about <strong className="text-accent">2.5¢</strong> when
          you buy a book at the closing offer price.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.04]">
                <th className="px-4 py-3 text-left font-display font-bold text-white/80">
                  Option
                </th>
                <th className="px-4 py-3 text-right font-display font-bold text-white/80">
                  Cost
                </th>
                <th className="px-4 py-3 text-right font-display font-bold text-white/80">
                  Prompts
                </th>
                <th className="px-4 py-3 text-right font-display font-bold text-white/80">
                  Per prompt
                </th>
              </tr>
            </thead>
            <tbody className="font-serif divide-y divide-white/[0.05]">
              <tr className="bg-accent/10">
                <td className="px-4 py-3 text-white font-bold">
                  MelodyPrompt book (closing offer)
                </td>
                <td className="px-4 py-3 text-right text-accent font-bold">
                  $4.99
                </td>
                <td className="px-4 py-3 text-right text-white/80">200</td>
                <td className="px-4 py-3 text-right text-accent font-bold">
                  ~2.5¢
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white/70">
                  Competitor prompt pack
                </td>
                <td className="px-4 py-3 text-right text-white/70">
                  $49–79
                </td>
                <td className="px-4 py-3 text-right text-white/70">~50</td>
                <td className="px-4 py-3 text-right text-white/70">
                  $1.00–$1.58
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white/70">
                  Suno prompt-engineering course
                </td>
                <td className="px-4 py-3 text-right text-white/70">$199</td>
                <td className="px-4 py-3 text-right text-white/70">~20–30</td>
                <td className="px-4 py-3 text-right text-white/70">
                  $7–10
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white/70">
                  Freelance producer (per prompt)
                </td>
                <td className="px-4 py-3 text-right text-white/70">$30–80</td>
                <td className="px-4 py-3 text-right text-white/70">1</td>
                <td className="px-4 py-3 text-right text-white/70">
                  $30–80
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-white/70">
                  Session composer (per hour)
                </td>
                <td className="px-4 py-3 text-right text-white/70">$120+</td>
                <td className="px-4 py-3 text-right text-white/70">varies</td>
                <td className="px-4 py-3 text-right text-white/70">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-xs text-white/30">
          Competitor and consult prices are approximate, based on publicly
          listed Q1 2026 prices on Skillshare, Udemy, and Fiverr.
        </p>
      </div>
    </section>
  );
}
