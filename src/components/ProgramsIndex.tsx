"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { programs } from "@/data/programs";
import { useProgram } from "@/components/ProgramProvider";
import { pricing } from "@/data/plan";
import { money, pad2, plural } from "@/lib/format";
import { programStats } from "@/lib/program-stats";
import ProgramWarnings from "@/components/ProgramWarnings";

const collegeOrder = [
  "School of Technology",
  "School of Business",
  "Leavitt School of Health",
  "School of Education",
];

const shortCollege = (c: string) => c.replace("School of ", "").replace("Leavitt ", "");

export default function ProgramsIndex() {
  const { program: selected, setProgramId } = useProgram();
  const router = useRouter();
  const [view, setView] = useState<"list" | "table">("list");
  const [college, setCollege] = useState<string>("all");

  const colleges = useMemo(
    () =>
      [...new Set(programs.map((p) => p.college))].sort(
        (a, b) => collegeOrder.indexOf(a) - collegeOrder.indexOf(b),
      ),
    [],
  );

  // Data-file order is IPEDS popularity rank, and the numbered index shows it —
  // so don't re-sort, or "01" starts implying something untrue.
  const visible = useMemo(
    () => (college === "all" ? programs : programs.filter((p) => p.college === college)),
    [college],
  );

  const choose = (id: string) => {
    setProgramId(id);
    router.push("/roadmap");
  };

  const filterBtn = (active: boolean) =>
    `label px-3 py-1.5 transition-colors ${
      active ? "bg-accent text-accent-ink" : "border border-rule hover:border-ink"
    }`;

  return (
    <div>
      <header className="border-t border-ink pt-4 pb-12">
        <p className="label">/02 Programs</p>
        <h1 className="display mt-5 max-w-[14ch]">Choose your degree.</h1>
        <p className="mt-7 max-w-[64ch] text-lg text-muted">
          {`WGU's ${plural(programs.length, "most popular bachelor's program")}, ranked by degrees actually awarded. Pick one and every page — roadmap, tracker, calculator — rebuilds around it.`}
        </p>
      </header>

      <div className="flex flex-wrap items-center gap-2 border-y border-rule py-3">
        <button onClick={() => setCollege("all")} className={filterBtn(college === "all")}>
          All
        </button>
        {colleges.map((c) => (
          <button key={c} onClick={() => setCollege(c)} className={filterBtn(college === c)}>
            {shortCollege(c)}
          </button>
        ))}
        <button
          onClick={() => setView(view === "list" ? "table" : "list")}
          className="label ml-auto text-accent underline underline-offset-4"
        >
          {view === "list" ? "Compare in a table →" : "← Back to list"}
        </button>
      </div>

      {view === "list" ? (
        <ul>
          {visible.map((p) => {
            const s = programStats(p);
            const isSelected = p.id === selected.id;
            return (
              <li
                key={p.id}
                className={`grid gap-x-10 gap-y-5 border-b border-rule py-9 md:grid-cols-12 ${
                  isSelected ? "border-l-2 border-l-accent pl-5" : ""
                }`}
              >
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <span className="label" title="Rank by WGU bachelor's degrees awarded">
                      {pad2(programs.indexOf(p) + 1)}
                    </span>
                    <span className="label">{shortCollege(p.college)}</span>
                    {isSelected && <span className="label text-accent">Selected</span>}
                  </div>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{p.shortName}</h2>
                  <p className="mt-1 text-sm text-faint">{p.name}</p>
                  <p className="mt-3 max-w-[46ch] text-muted">{p.tagline}</p>
                </div>

                <div className="md:col-span-5">
                  <dl className="grid grid-cols-3 gap-4">
                    {[
                      { k: "Total CU", v: `${p.totalCUs}` },
                      {
                        k: p.advancedStandingCUs ? "Before WGU" : "Transfer in",
                        v: `${s.transferCUs + s.advancedStandingCUs}`,
                      },
                      { k: "Per term", v: money(p.tuitionPerTerm) },
                    ].map((x) => (
                      <div key={x.k}>
                        <dd className="num text-2xl font-bold">{x.v}</dd>
                        <dt className="label mt-1">{x.k}</dt>
                      </div>
                    ))}
                  </dl>
                  <p className="num mt-4 text-sm text-muted">
                    {`Finish ${plural(s.terms, "WGU term")} · ${s.wguCUs} CU at WGU · est. ${money(s.wguCost)}`}
                  </p>
                  {p.certifications.length > 0 && (
                    <p className="label mt-3 text-ink/70">
                      {`Includes: ${p.certifications.slice(0, 4).join(" · ")}${p.certifications.length > 4 ? ` · +${p.certifications.length - 4} more` : ""}`}
                    </p>
                  )}
                  <div className="mt-4">
                    <ProgramWarnings program={p} compact />
                  </div>
                </div>

                <div className="flex flex-wrap content-start gap-2 md:col-span-3 md:justify-end">
                  <button
                    onClick={() => choose(p.id)}
                    className="bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
                  >
                    {isSelected ? "View my roadmap" : "Plan this degree"}
                  </button>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-ink/25 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink"
                  >
                    WGU page ↗
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[54rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-ink">
                {[
                  "Program",
                  "College",
                  "Total CU",
                  "Transfer",
                  "At WGU",
                  "Per term",
                  "Terms",
                  "Est. WGU cost",
                  "Caveats",
                ].map((h) => (
                  <th key={h} className="label py-3 pr-4 text-left align-bottom whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visible.map((p) => {
                const s = programStats(p);
                return (
                  <tr
                    key={p.id}
                    onClick={() => setProgramId(p.id)}
                    className={`cursor-pointer border-b border-rule transition-colors hover:bg-ink/5 ${
                      p.id === selected.id ? "bg-accent/10" : ""
                    }`}
                  >
                    <td className="py-3 pr-4 font-semibold">{p.shortName}</td>
                    <td className="py-3 pr-4 whitespace-nowrap text-muted">
                      {shortCollege(p.college)}
                    </td>
                    <td className="num py-3 pr-4">{p.totalCUs}</td>
                    <td className="num py-3 pr-4 text-accent">
                      {s.transferCUs + s.advancedStandingCUs}
                    </td>
                    <td className="num py-3 pr-4">{s.wguCUs}</td>
                    <td className="num py-3 pr-4 whitespace-nowrap">{money(p.tuitionPerTerm)}</td>
                    <td className="num py-3 pr-4">{s.terms}</td>
                    <td className="num py-3 pr-4 font-semibold whitespace-nowrap">
                      {money(s.wguCost)}
                    </td>
                    <td className="py-3 pr-4">
                      <span className={`label ${p.paceBlockers ? "text-warn" : ""}`}>
                        {p.paceBlockers
                          ? "Can't rush"
                          : p.careerCaveat
                            ? "Career"
                            : p.admissionGate
                              ? "Entry req."
                              : "None"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-10 grid gap-6 border-t border-rule pt-5 md:grid-cols-12">
        <p className="label md:col-span-3">Method</p>
        <div className="max-w-[68ch] text-sm text-muted md:col-span-9">
          <p>
            Programs are ranked by WGU bachelor&apos;s degrees awarded (IPEDS completions, 2023–24).
            Competency units, tuition and course lists come from WGU&apos;s official program pages
            and program guidebooks; transferable courses come from the current Sophia, Study.com,
            Saylor and CLEP pathways.
          </p>
          <p className="mt-3">
            {`Estimated terms assume roughly 30 CUs completed per six-month term — an aggressive but documented accelerator pace. "Transfer in" counts only courses with a named, currently published articulation, so treat it as a floor rather than a cap. Tuition is the rate for terms beginning on or after 1 January 2026 and excludes the $${pricing.wguAppFee} application fee (routinely waived) and outside-provider subscriptions. Verify every figure on WGU's site before enrolling.`}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/calculator"
          className="border border-ink/25 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink"
        >
          Estimate the full cost →
        </Link>
      </div>
    </div>
  );
}
