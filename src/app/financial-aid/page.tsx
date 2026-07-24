import type { Metadata } from "next";
import { aidOptions } from "@/data/plan";

export const metadata: Metadata = {
  title: "Financial Aid — Degree SpeedRun",
  description: "Pell Grant, WGU scholarships, and other ways to cut the cost of your degree run.",
};

export default function FinancialAidPage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight">Financial aid</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          WGU is a nonprofit, accredited, Title IV university — federal aid and real scholarships
          apply. Stacked with the transfer-credit strategy, aid can bring your out-of-pocket cost
          near zero.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {aidOptions.map((a) => (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-indigo-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-indigo-700"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-lg font-bold">{a.name}</h2>
              <span className="rounded-full bg-emerald-100 px-3 py-0.5 text-sm font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                {a.amount}
              </span>
            </div>
            <p className="mt-2 text-stone-600 dark:text-stone-300">{a.description}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Learn more ↗
            </span>
          </a>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-800 dark:bg-amber-950/40">
        <h2 className="font-bold text-amber-800 dark:text-amber-200">
          Aid strategy for speed-runners
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-amber-800 dark:text-amber-200">
          <li>
            <strong>File the FAFSA early</strong> — WGU&apos;s school code is 033394. Pell disburses
            in two payments per academic year (one per 6-month term), so a max-Pell student gets
            ~$3,700 per term — most, but usually not all, of a flat-rate term. Finishing in one term
            means you only receive that term&apos;s half, not the full annual award.
          </li>
          <li>
            <strong>New for 2026–27:</strong> under the 2025 federal budget law, students with a
            Student Aid Index of $14,790 or higher are ineligible for Pell entirely — run your
            numbers on studentaid.gov before counting on it.
          </li>
          <li>
            <strong>Aid only applies to WGU</strong> — Sophia, Study.com, Saylor, and CLEP are paid
            out of pocket, but they&apos;re the cheap part (usually under $1,000 combined).
          </li>
          <li>
            <strong>Scholarships disburse per term</strong> — a &quot;$2,500 scholarship&quot; often
            pays out in installments across up to four terms. Finishing in one term may mean
            receiving only the first installment, so read each award&apos;s terms.
          </li>
          <li>
            <strong>Employer tuition benefits</strong> — Amazon&apos;s Career Choice includes WGU (up
            to $5,250/year), and Target&apos;s Dream to Be reaches WGU through the Guild network for
            some programs. Walmart&apos;s Live Better U does <em>not</em> currently include WGU. Check
            your employer&apos;s partner list before paying anything.
          </li>
        </ul>
      </div>
    </div>
  );
}
