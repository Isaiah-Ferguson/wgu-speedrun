"use client";

import { useMemo, useState } from "react";
import { useProgram } from "@/components/ProgramProvider";
import { useStoredSet } from "@/lib/use-stored-state";
import SourceBadge from "@/components/SourceBadge";
import { pad2, plural } from "@/lib/format";
import type { SourceId } from "@/data/types";

const STORAGE_PREFIX = "speedrun-completed:";

interface Row {
  key: string;
  name: string;
  source: SourceId;
  credits: number;
  detail?: string;
  meta?: string;
}

const filters: { id: SourceId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sophia", label: "Sophia" },
  { id: "studycom", label: "Study.com" },
  { id: "saylor", label: "Saylor" },
  { id: "clep", label: "CLEP" },
  { id: "wgu", label: "WGU" },
];

export default function CourseTracker() {
  const { program } = useProgram();
  const [filter, setFilter] = useState<SourceId | "all">("all");

  // Progress is stored per program, so switching degrees doesn't clobber your work.
  const [completed, setCompleted] = useStoredSet(`${STORAGE_PREFIX}${program.id}`);

  const rows: Row[] = useMemo(() => {
    const transfer = program.transferCourses.map((c) => ({
      key: `t:${c.source}:${c.name}`,
      name: c.name,
      source: c.source as SourceId,
      credits: c.credits,
      detail: `→ ${c.wguEquivalent}`,
      meta: c.time,
    }));
    const wgu = program.wguCourses.map((c) => ({
      key: `w:${c.name}`,
      name: c.name,
      source: "wgu" as SourceId,
      credits: c.credits,
      detail: c.notes,
      meta: c.category.replace("-", " "),
    }));
    return [...transfer, ...wgu];
  }, [program]);

  const visible = filter === "all" ? rows : rows.filter((r) => r.source === filter);

  const totalCredits = rows.reduce((s, r) => s + r.credits, 0);
  const doneCredits = rows.filter((r) => completed.has(r.key)).reduce((s, r) => s + r.credits, 0);
  const pct = totalCredits ? Math.round((doneCredits / totalCredits) * 100) : 0;

  const toggle = (key: string) =>
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <div>
      <header className="border-t border-ink pt-4 pb-10">
        <p className="label">/04 Tracker</p>
        <h1 className="display mt-5 max-w-[13ch]">Course tracker.</h1>
        <p className="mt-6 text-xl font-bold tracking-tight text-accent">{program.name}</p>
        <p className="mt-4 max-w-[64ch] text-lg text-muted">
          Check off courses as you clear them. Progress is saved in your browser, separately for each
          program.
        </p>
      </header>

      {rows.length === 0 ? (
        <div className="border-l-2 border-warn pl-5">
          <p className="label text-warn">Course list pending</p>
          <p className="mt-2 max-w-[68ch] text-sm text-ink/80">
            {`The course-by-course map for ${program.shortName} hasn't been published here yet, so there's nothing to check off. Pick another program from the bar above, or use WGU's official program guide for the full course list.`}
          </p>
        </div>
      ) : (
        <>
          <section className="grid gap-x-10 gap-y-5 border-t border-ink py-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="stat">{`${pct}%`}</p>
              <p className="label mt-2">complete</p>
            </div>
            <div className="md:col-span-9">
              <div className="flex items-baseline justify-between">
                <span className="num text-sm">{`${doneCredits} / ${totalCredits} CU`}</span>
                <span className="num text-sm text-muted">
                  {`${completed.size} / ${rows.length} courses`}
                </span>
              </div>
              <div className="mt-3 h-2 bg-ink/10">
                <div
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {pct === 100 && (
                <p className="label mt-3 text-accent">Degree run finished — go graduate.</p>
              )}
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-2 border-y border-rule py-3">
            {filters.map((f) => {
              const count =
                f.id === "all" ? rows.length : rows.filter((r) => r.source === f.id).length;
              if (count === 0 && f.id !== "all") return null;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`label px-3 py-1.5 transition-colors ${
                    filter === f.id
                      ? "bg-accent text-accent-ink"
                      : "border border-rule hover:border-ink"
                  }`}
                >
                  {`${f.label} ${count}`}
                </button>
              );
            })}
          </div>

          <ul>
            {visible.map((r, i) => {
              const done = completed.has(r.key);
              return (
                <li key={r.key}>
                  <button
                    onClick={() => toggle(r.key)}
                    aria-pressed={done}
                    className="flex w-full items-baseline gap-4 border-b border-rule py-3 text-left transition-colors hover:bg-ink/5"
                  >
                    <span className="label shrink-0 pt-0.5">{pad2(i + 1)}</span>
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border text-[0.6rem] leading-none ${
                        done
                          ? "border-accent bg-accent text-accent-ink"
                          : "border-ink/35"
                      }`}
                    >
                      {done ? "✓" : ""}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-medium ${done ? "text-faint line-through" : ""}`}
                      >
                        {r.name}
                      </span>
                      {r.detail && (
                        <span className="mt-0.5 block text-xs text-faint">{r.detail}</span>
                      )}
                    </span>
                    <span className="flex shrink-0 items-baseline gap-4">
                      <SourceBadge source={r.source} />
                      <span className="num hidden text-xs whitespace-nowrap text-faint sm:inline">
                        {`${r.credits} CU`}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-6 text-sm text-muted">
            {`Showing ${plural(visible.length, "course")}${filter === "all" ? "" : ` from ${filters.find((f) => f.id === filter)?.label}`}.`}
          </p>
        </>
      )}
    </div>
  );
}
