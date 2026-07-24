import type { Metadata } from "next";
import Link from "next/link";
import { courses, sources } from "@/data/plan";
import SourceBadge from "@/components/SourceBadge";

export const metadata: Metadata = {
  title: "Roadmap — Degree SpeedRun",
  description: "The three-phase plan: Sophia gen eds, Study.com/Saylor/CLEP core credits, then finish at WGU.",
};

const phases = [
  {
    number: 1,
    title: "Clear the gen eds on Sophia",
    duration: "≈ 1–3 months",
    budget: "≈ $99–$300",
    description:
      "Before you even apply to WGU, grind through every general education course on Sophia Learning. At $99/month with unlimited courses (two active at a time) and zero proctored exams, a focused student can clear several courses a month — Sophia's average is ~28 days per course, but a course a week is realistic if you treat it like a job. These are the cheapest credits you will ever earn.",
    steps: [
      "Pick your target WGU program and pull its official Sophia transfer pathway page.",
      "Subscribe to Sophia and queue the courses below — always keep 2 active.",
      "Finish one course per week (many students do 2–3/week for the easy ones).",
      "Send your Sophia transcript to WGU when done (free).",
    ],
  },
  {
    number: 2,
    title: "Knock out transferable core courses",
    duration: "≈ 1–3 months",
    budget: "≈ $300–$700",
    description:
      "Next, use Study.com, Saylor Academy, and CLEP for the IT and CS courses WGU accepts in transfer. These cost more than Sophia, so only take what's on your program's official transfer list.",
    steps: [
      "Cross-check every course against WGU's Study.com pathway and transfer guidelines — since March 2026 only gen-ed/lower-division credit transfers.",
      "Study.com finals are now open-book, unproctored, and unlimited per month — batch courses to minimize subscription months (Pro allows 3 concurrent).",
      "Use Saylor's free courses ($5 finals) where its ACE recommendations are still current — its intro-CS courses lost credit eligibility in 2023–24, so check expiration dates.",
      "Book CLEP exams at a local test center (or online proctoring) — Modern States vouchers make the exam free and reimburse the admin fee.",
    ],
  },
  {
    number: 3,
    title: "Sprint the rest at WGU",
    duration: "1–2 six-month terms",
    budget: "≈ 1–2 × term tuition",
    description:
      "Apply to WGU, transfer everything in, and what remains is mostly upper-division program courses and the capstone. WGU's flat-rate, competency-based terms mean every extra course you finish in a term is free. Many accelerators finish the remainder in a single term.",
    steps: [
      "Apply, send all transcripts (Sophia, Study.com, Saylor/ACE, CLEP), and review your transfer evaluation before your start date.",
      "File the FAFSA — a Pell Grant can cover most of a term for eligible students.",
      "Plan your term: schedule the hardest courses first while motivation is highest.",
      "Accelerate: once you complete your term's 12-CU minimum, your mentor can approve adding more courses at no extra cost — that's where the savings compound.",
    ],
  },
] as const;

export default function Roadmap() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight">The three-phase roadmap</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Cheapest credits first, WGU last. Each phase below lists the exact courses from the plan
          and what they should cost.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
        <strong>⚠️ 2026 transfer-policy update:</strong> As of March 2026, WGU only accepts
        general-education and lower-division transfer credit from Sophia and Study.com —
        upper-division courses must now be completed at WGU (at least 25% of the degree is always
        WGU residency). Before paying for any outside course, pull the current official transfer
        pathway for your exact program and confirm with an enrollment counselor.
      </div>

      <div className="mt-14 space-y-14">
        {phases.map((phase) => {
          const phaseCourses = courses.filter((c) => c.phase === phase.number);
          const phaseCredits = phaseCourses.reduce((s, c) => s + c.credits, 0);
          return (
            <section key={phase.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-black text-white">
                  {phase.number}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{phase.title}</h2>
                  <div className="mt-1 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full bg-stone-100 px-3 py-0.5 font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      ⏱ {phase.duration}
                    </span>
                    <span className="rounded-full bg-stone-100 px-3 py-0.5 font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      💰 {phase.budget}
                    </span>
                    <span className="rounded-full bg-stone-100 px-3 py-0.5 font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                      🎓 {phaseCredits} credits
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-stone-600 dark:text-stone-300">{phase.description}</p>
                  <ol className="mt-4 space-y-2">
                    {phase.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-stone-600 dark:text-stone-300">
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
                  <h3 className="mb-3 text-sm font-bold tracking-wide text-stone-400 uppercase">
                    Courses in this phase
                  </h3>
                  <ul className="divide-y divide-stone-100 dark:divide-stone-800">
                    {phaseCourses.map((c) => (
                      <li key={c.id} className="flex items-center justify-between gap-3 py-2">
                        <div className="flex items-center gap-2">
                          <SourceBadge source={c.source} />
                          <span className="text-sm font-medium">{c.name}</span>
                        </div>
                        <span className="text-xs whitespace-nowrap text-stone-400">
                          {c.credits} cr · {c.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Platform tips */}
      <section className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Platform playbook</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sources.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
            >
              <h3 className="font-bold">{s.name}</h3>
              <ul className="mt-3 space-y-2 text-sm text-stone-600 dark:text-stone-300">
                {s.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-500">▸</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link
          href="/courses"
          className="inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Start tracking your courses →
        </Link>
      </div>
    </div>
  );
}
