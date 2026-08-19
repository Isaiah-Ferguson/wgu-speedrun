"use client";

import Link from "next/link";
import { sources, pricing } from "@/data/plan";
import { useProgram } from "@/components/ProgramProvider";
import SourceBadge from "@/components/SourceBadge";
import { money, pad2, plural } from "@/lib/format";
import { programStats } from "@/lib/program-stats";
import { usePace } from "@/components/PaceProvider";
import { HOURS_PER_TRANSFER_CREDIT, humanDuration, weeksForHours } from "@/lib/pace";
import ProgramWarnings from "@/components/ProgramWarnings";
import type { SourceId } from "@/data/types";

export default function RoadmapContent() {
  const { program } = useProgram();
  const { pace } = usePace();
  const {
    transferCUs,
    advancedStandingCUs,
    wguCUs,
    terms: wguTerms,
    wguCost,
    totalWeeks,
    wguWeeks,
    cusPerTerm: cusTerm,
  } = programStats(program, pace);

  // Phase durations come from the same pace model as everything else.
  const weeksFor = (list: { credits: number; source?: string }[]) =>
    weeksForHours(
      list.reduce(
        (sum, c) =>
          sum +
          c.credits *
            (c.source
              ? (HOURS_PER_TRANSFER_CREDIT[c.source as keyof typeof HOURS_PER_TRANSFER_CREDIT] ?? 9)
              : 26),
        0,
      ),
      pace,
    );

  const sophia = program.transferCourses.filter((c) => c.source === "sophia");
  const others = program.transferCourses.filter((c) => c.source !== "sophia");
  const wgu = program.wguCourses;
  const hasCourseData = program.transferCourses.length > 0 || wgu.length > 0;

  const cu = (list: { credits: number }[]) => list.reduce((s, c) => s + c.credits, 0);

  const phases = [
    {
      n: 1,
      title: "Clear the gen eds on Sophia",
      time: sophia.length ? humanDuration(weeksFor(sophia)) : "—",
      cost: sophia.length ? `${money(pricing.sophiaMonthly)}–$299` : "$0",
      description:
        "Before you even apply to WGU, grind through every general education course Sophia covers for your program. At $99 a month with unlimited courses (two active at a time) and zero proctored exams, a focused student can clear several courses a month. These are the cheapest credits you will ever earn.",
      steps: [
        "Pull your program's official Sophia transfer pathway page and confirm each course still maps.",
        "Subscribe to Sophia and queue the courses listed here — always keep two active.",
        "Watch for Touchstone assignments (papers and projects): they're manually graded and set your real pace.",
        "Send your Sophia transcript to WGU when done.",
      ],
      courses: sophia,
    },
    {
      n: 2,
      title: "Knock out the rest with Study.com, Saylor and CLEP",
      time: others.length ? humanDuration(weeksFor(others)) : "—",
      cost: others.length ? "$100–$700" : "$0",
      description:
        "Fill the gaps Sophia doesn't cover. Study.com finals are now open-book and unlimited per month, so you can batch courses into one subscription month. Saylor is free with $5 exams where its ACE recommendations are still current, and a single CLEP exam can be worth six credits.",
      steps: [
        "Cross-check every course against WGU's official pathway — since March 2026 only gen-ed and lower-division credit transfers.",
        "Batch Study.com courses into as few subscription months as possible; finals are unlimited now.",
        "Use Saylor's free courses where its ACE recommendation is still current — check expiration dates.",
        "Grab a Modern States voucher before booking any CLEP exam: it covers the $97 fee and reimburses the admin fee.",
      ],
      courses: others,
    },
    {
      n: 3,
      title: "Sprint the rest at WGU",
      time: `${humanDuration(wguWeeks)} · ${plural(wguTerms, "term")} billed`,
      cost: money(wguCost),
      creditsOverride: wguCUs,
      description:
        "Apply to WGU, transfer everything in, and what remains is the program core, upper-division work and the capstone. Flat-rate terms mean every extra course you finish inside a term is free.",
      steps: [
        "Apply, send all transcripts, and review your transfer evaluation before your start date.",
        "File the FAFSA — Pell disburses half the annual award per six-month term.",
        "Plan your term: schedule the hardest courses first, while motivation is highest.",
        "Accelerate: once you complete the term's 12-CU minimum, your mentor can approve more courses at no extra cost. That's where the savings compound.",
      ],
      courses: wgu,
    },
  ];

  return (
    <div>
      <header className="border-t border-ink pt-4 pb-12">
        <p className="label">/03 Roadmap</p>
        <h1 className="display mt-5 max-w-[13ch]">Your roadmap.</h1>
        <p className="mt-6 text-xl font-bold tracking-tight text-accent">{program.name}</p>
        <p className="mt-4 max-w-[68ch] text-lg text-muted">
          {hasCourseData
            ? `Cheapest credits first, WGU last. ${transferCUs + advancedStandingCUs} of ${program.totalCUs} CUs can be banked before you ever pay WGU tuition${advancedStandingCUs ? ` (including ${advancedStandingCUs} granted automatically for your RN licence)` : ""} — the remaining ${wguCUs} finish in about ${plural(wguTerms, "flat-rate term")}. At ${pace.hoursPerDay} hours a day, ${pace.daysPerWeek} days a week (roughly ${cusTerm} CUs a term), that is ${humanDuration(totalWeeks)} start to graduation.`
            : `Cheapest credits first, WGU last. The course-by-course transfer map for this program hasn't been published here yet — the phases below still describe the strategy, and the platform playbook applies to every WGU degree.`}
        </p>
      </header>

      <div className="mb-6">
        <ProgramWarnings program={program} />
      </div>

      <div className="mb-14 border-l-2 border-warn pl-5">
        <p className="label text-warn">2026 transfer-policy update</p>
        <p className="mt-2 max-w-[68ch] text-sm text-ink/80">
          As of March 2026, WGU only accepts general-education and lower-division transfer credit
          from Sophia and Study.com — upper-division courses must now be completed at WGU, and at
          least 25% of any degree is always WGU residency. Before paying for any outside course,
          pull the current official transfer pathway for your exact program and confirm it with an
          enrollment counselor.
        </p>
      </div>

      <div>
        {phases.map((phase) => (
          <section key={phase.n} className="grid gap-x-10 gap-y-6 border-t border-ink py-12 md:grid-cols-12">
            {/* Left rail: ghosted phase number + vitals */}
            <div className="md:col-span-3">
              <div className="flex items-start gap-4 md:block">
                <span
                  className="num block leading-none font-extrabold text-ink opacity-[0.14]"
                  style={{ fontSize: "clamp(3.5rem,7vw,6rem)" }}
                  aria-hidden="true"
                >
                  {pad2(phase.n)}
                </span>
                <dl className="md:mt-5">
                  <div className="border-t border-rule py-2">
                    <dt className="label">Time</dt>
                    <dd className="num text-sm">{phase.time}</dd>
                  </div>
                  <div className="border-t border-rule py-2">
                    <dt className="label">Cost</dt>
                    <dd className="num text-sm">{phase.cost}</dd>
                  </div>
                  <div className="border-t border-rule py-2">
                    <dt className="label">Credits</dt>
                    <dd className="num text-sm">
                      {`${"creditsOverride" in phase ? phase.creditsOverride : cu(phase.courses)} CU`}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Copy */}
            <div className="md:col-span-5">
              <h2 className="text-2xl font-extrabold tracking-tight">{phase.title}</h2>
              <p className="mt-3 max-w-[62ch] text-muted">{phase.description}</p>
              <ol className="mt-5">
                {phase.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 border-t border-rule py-2.5 text-sm">
                    <span className="label shrink-0 pt-0.5">{pad2(i + 1)}</span>
                    <span className="text-ink/85">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Course table */}
            <div className="md:col-span-4">
              <p className="label border-b border-ink pb-2">Courses in this phase</p>
              {phase.courses.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  {hasCourseData
                    ? `No courses fall in this phase for ${program.shortName}.`
                    : "Course list pending for this program."}
                </p>
              ) : (
                <ul className="max-h-[26rem] overflow-y-auto">
                  {phase.courses.map((c, i) => {
                    const source: SourceId = "source" in c ? c.source : "wgu";
                    const equivalent = "wguEquivalent" in c ? c.wguEquivalent : undefined;
                    const time = "time" in c ? c.time : undefined;
                    return (
                      <li key={`${c.name}-${i}`} className="border-b border-rule py-2.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium">{c.name}</span>
                          <span className="num shrink-0 text-xs whitespace-nowrap text-faint">
                            {`${c.credits} CU`}
                          </span>
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <SourceBadge source={source} />
                          {equivalent && (
                            <span className="truncate text-xs text-faint">→ {equivalent}</span>
                          )}
                          {!equivalent && time && (
                            <span className="num text-xs text-faint">{time}</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>

      {program.speedRunNotes && (
        <section className="grid gap-x-10 gap-y-4 border-t border-ink py-12 md:grid-cols-12">
          <p className="label md:col-span-3">{`/Notes · ${program.shortName}`}</p>
          <p className="max-w-[68ch] text-lg text-ink/85 md:col-span-9">{program.speedRunNotes}</p>
        </section>
      )}

      <section className="grid gap-x-10 gap-y-6 border-t border-ink py-12 md:grid-cols-12">
        <p className="label md:col-span-3">/Playbook</p>
        <div className="grid gap-x-10 gap-y-8 md:col-span-9 md:grid-cols-2">
          {sources.map((s, i) => (
            <div key={s.id} className="border-t border-rule pt-3">
              <div className="flex items-baseline gap-3">
                <span className="label">{pad2(i + 1)}</span>
                <h3 className="font-bold tracking-tight">{s.name}</h3>
              </div>
              <ul className="mt-2">
                {s.tips.map((tip, j) => (
                  <li key={j} className="border-t border-rule py-2 text-sm text-muted">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-4">
        <Link
          href="/courses"
          className="bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
        >
          Start tracking your courses →
        </Link>
      </div>
    </div>
  );
}
