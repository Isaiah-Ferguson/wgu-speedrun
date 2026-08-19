"use client";

import Link from "next/link";
import { sources } from "@/data/plan";
import { programs } from "@/data/programs";
import { useProgram } from "@/components/ProgramProvider";
import ProgramPicker from "@/components/ProgramPicker";
import Section from "@/components/Section";
import ProgramWarnings from "@/components/ProgramWarnings";
import { money, pad2, plural } from "@/lib/format";
import { programStats } from "@/lib/program-stats";

export default function HomeContent() {
  const { program } = useProgram();
  const {
    transferCUs,
    advancedStandingCUs,
    wguCUs,
    terms: termsNeeded,
    wguCost,
    hasCourseData,
  } = programStats(program);

  return (
    <div>
      {/* Hero */}
      <section className="pt-4 pb-16">
        <p className="label border-t border-ink pt-2">The WGU bachelor&apos;s speed-run playbook</p>
        <h1 className="display mt-6 max-w-[15ch]">
          Months, <br className="hidden sm:block" />
          not years.
        </h1>
        <p className="mt-8 max-w-[62ch] text-lg text-muted sm:text-xl">
          WGU charges flat-rate tuition per six-month term and accepts large amounts of transfer
          credit. Stack cheap credits from Sophia, Study.com, Saylor and CLEP first — then sprint the
          rest at WGU in as few terms as possible.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-[minmax(0,22rem)_1fr] md:items-end">
          <div>
            <ProgramPicker />
            <p className="mt-3 text-sm text-muted">
              {`Pick your degree and every page rebuilds around it — ${plural(programs.length, "program")} across all four WGU colleges.`}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/roadmap"
              className="bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
            >
              See my roadmap
            </Link>
            <Link
              href="/programs"
              className="border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
            >
              Compare all programs
            </Link>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <Section index={1} title="Your plan" kicker={program.shortName}>
        {hasCourseData ? (
          <>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
              {[
                { v: `${program.totalCUs}`, k: "total competency units" },
                {
                  v: `${transferCUs + advancedStandingCUs}`,
                  k: advancedStandingCUs
                    ? `CUs before WGU (incl. ${advancedStandingCUs} for your RN licence)`
                    : "CUs transferable before WGU",
                },
                { v: `${wguCUs}`, k: "CUs completed at WGU" },
                {
                  v: money(wguCost),
                  k: `WGU tuition · ${plural(termsNeeded, "term")}`,
                },
              ].map((s) => (
                <div key={s.k}>
                  <dd className="stat">{s.v}</dd>
                  <dt className="label mt-2">{s.k}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-8 max-w-[68ch] text-sm text-muted">
              Assumes an accelerated pace of roughly 30 CUs per six-month term. Outside-provider
              subscriptions are extra, but usually total under $1,000. Tuition is the rate for terms
              beginning on or after 1 January 2026.
            </p>
          </>
        ) : (
          <div className="border border-warn-rule bg-warn-bg p-5 text-sm text-warn">
            <p className="label text-warn">Course-level data pending</p>
            <p className="mt-2 max-w-[68ch]">
              {`${program.shortName} is ${program.totalCUs} competency units at $${program.tuitionPerTerm.toLocaleString()} per six-month term, but the course-by-course transfer map for it hasn't been published here yet. Use the WGU program page and an enrollment counselor for the exact requirements.`}
            </p>
          </div>
        )}

        <div className="mt-8">
          <ProgramWarnings program={program} />
        </div>
      </Section>

      {/* Why it works */}
      <Section index={2} title="Why this works">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
          {[
            {
              t: "Flat-rate terms",
              b: "WGU charges one price per six-month term no matter how many courses you complete. Finish 30 credits in a term and you pay the same as someone finishing 12.",
            },
            {
              t: "Generous transfer policy",
              b: "WGU publishes official transfer pathways with Sophia and Study.com and accepts many CLEP and ACE-recommended credits — up to 75% of the degree, though only gen-ed and lower-division since March 2026.",
            },
            {
              t: "Competency-based pace",
              b: "You pass a course by proving competency — an exam or project — not by sitting through sixteen weeks. If you already know the material, a course can take days.",
            },
          ].map((f, i) => (
            <div key={f.t} className="border-t border-rule pt-4">
              <span className="label">{pad2(i + 1)}</span>
              <h3 className="mt-2 text-xl font-bold tracking-tight">{f.t}</h3>
              <p className="mt-2 text-muted">{f.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sources */}
      <Section
        index={3}
        title="Five credit sources"
        lede="Each platform has a role. Use them in order of cost-efficiency."
      >
        <ul>
          {sources.map((s, i) => (
            <li key={s.id} className="grid gap-x-8 gap-y-3 border-t border-rule py-7 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-3">
                  <span className="label">{pad2(i + 1)}</span>
                  <h3 className="text-xl font-bold tracking-tight">{s.name}</h3>
                </div>
                <p className="mt-1 text-sm font-semibold text-accent">{s.tagline}</p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-3 inline-block text-accent underline underline-offset-4"
                >
                  Visit {s.name} ↗
                </a>
              </div>
              <div className="md:col-span-8">
                <p className="num text-sm text-ink">{s.pricing}</p>
                <p className="mt-2 max-w-[68ch] text-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* CTA */}
      <section className="mt-8 border-t border-ink py-14">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Ready to start the run?
        </h2>
        <p className="mt-4 max-w-[62ch] text-lg text-muted">
          {`Follow the three-phase roadmap for ${program.shortName} and check off every course as you clear it.`}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/roadmap"
            className="bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            View roadmap
          </Link>
          <Link
            href="/courses"
            className="border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
          >
            Open course tracker
          </Link>
        </div>
      </section>
    </div>
  );
}
