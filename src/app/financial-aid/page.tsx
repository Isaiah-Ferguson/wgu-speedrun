import type { Metadata } from "next";
import { aidOptions } from "@/data/plan";
import { pad2 } from "@/lib/format";

export const metadata: Metadata = {
  title: "Financial Aid — Degree SpeedRun",
  description: "Pell Grant, WGU scholarships, and other ways to cut the cost of your degree run.",
};

const strategy = [
  {
    t: "File the FAFSA early",
    b: "WGU's federal school code is 033394. Pell disburses in two payments per academic year, one per six-month term, so a maximum-Pell student receives about $3,700 per term — most, but usually not all, of a flat-rate term. Finishing in one term means you only receive that term's half, not the full annual award.",
  },
  {
    t: "New for 2026–27",
    b: "Under the 2025 federal budget law, students with a Student Aid Index of $14,790 or higher are ineligible for Pell entirely. Run your numbers on studentaid.gov before counting on it.",
  },
  {
    t: "Aid only applies to WGU",
    b: "Sophia, Study.com, Saylor and CLEP are paid out of pocket — none of them are Title IV institutions. They're the cheap part, though: a typical run spends under $1,000 across all four.",
  },
  {
    t: "Scholarships disburse in installments",
    b: "A $3,000 scholarship usually pays out as $750 per term across four terms. Finishing in one term may mean receiving only the first installment, so read each award's terms before you bank on the headline number.",
  },
  {
    t: "Check employer benefits first",
    b: "Amazon's Career Choice includes WGU (up to $5,250 a year), and Target's Dream to Be reaches WGU through the Guild network for some programs. Walmart's Live Better U does not currently include WGU. Check your employer's partner list before paying anything.",
  },
];

export default function FinancialAidPage() {
  return (
    <div>
      <header className="border-t border-ink pt-4 pb-12">
        <p className="label">/06 Financial aid</p>
        <h1 className="display mt-5 max-w-[12ch]">Free money first.</h1>
        <p className="mt-7 max-w-[66ch] text-lg text-muted">
          WGU is a nonprofit, institutionally accredited, Title IV university — federal aid and real
          scholarships apply. Stacked with the transfer-credit strategy, aid can bring your
          out-of-pocket cost close to zero.
        </p>
      </header>

      <section className="grid gap-x-10 gap-y-6 border-t border-ink py-10 md:grid-cols-12">
        <p className="label md:col-span-3">/01 Sources of aid</p>
        <ul className="md:col-span-9">
          {aidOptions.map((a, i) => (
            <li key={a.name} className="grid gap-x-8 gap-y-2 border-t border-rule py-6 sm:grid-cols-12">
              <div className="sm:col-span-5">
                <div className="flex items-baseline gap-3">
                  <span className="label">{pad2(i + 1)}</span>
                  <h2 className="text-lg font-bold tracking-tight">{a.name}</h2>
                </div>
                <p className="num mt-1 text-sm font-semibold text-accent">{a.amount}</p>
                <a
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-2 inline-block text-accent underline underline-offset-4"
                >
                  Official page ↗
                </a>
              </div>
              <p className="max-w-[62ch] text-muted sm:col-span-7">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-x-10 gap-y-6 border-t border-ink py-10 md:grid-cols-12">
        <p className="label md:col-span-3">/02 Strategy for speed-runners</p>
        <ul className="md:col-span-9">
          {strategy.map((s, i) => (
            <li key={s.t} className="border-t border-rule py-5">
              <div className="flex items-baseline gap-3">
                <span className="label">{pad2(i + 1)}</span>
                <h3 className="font-bold tracking-tight">{s.t}</h3>
              </div>
              <p className="mt-2 max-w-[68ch] text-muted">{s.b}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
