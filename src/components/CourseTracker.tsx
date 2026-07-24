"use client";

import { useEffect, useMemo, useState } from "react";
import { courses, SourceId } from "@/data/plan";
import SourceBadge from "@/components/SourceBadge";

const STORAGE_KEY = "speedrun-completed-courses";

const filters: { id: SourceId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sophia", label: "Sophia" },
  { id: "studycom", label: "Study.com" },
  { id: "saylor", label: "Saylor" },
  { id: "clep", label: "CLEP" },
  { id: "wgu", label: "WGU" },
];

export default function CourseTracker() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<SourceId | "all">("all");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted(new Set(JSON.parse(raw)));
    } catch {
      // corrupted storage — start fresh
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]));
  }, [completed, loaded]);

  const toggle = (id: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const visible = useMemo(
    () => (filter === "all" ? courses : courses.filter((c) => c.source === filter)),
    [filter],
  );

  const totalCredits = courses.reduce((s, c) => s + c.credits, 0);
  const doneCredits = courses
    .filter((c) => completed.has(c.id))
    .reduce((s, c) => s + c.credits, 0);
  const pct = Math.round((doneCredits / totalCredits) * 100);

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight">Course tracker</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Check off courses as you clear them. Progress is saved in your browser.
        </p>
      </div>

      {/* Progress bar */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
        <div className="flex items-baseline justify-between">
          <span className="font-bold">
            {doneCredits} / {totalCredits} credits
          </span>
          <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{pct}%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
          {completed.size} of {courses.length} courses complete
          {pct === 100 && " — 🎉 degree run finished!"}
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              filter === f.id
                ? "bg-indigo-600 text-white"
                : "border border-stone-300 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Course list */}
      <ul className="mx-auto mt-8 max-w-3xl space-y-2">
        {visible.map((c) => {
          const done = completed.has(c.id);
          return (
            <li key={c.id}>
              <button
                onClick={() => toggle(c.id)}
                className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                  done
                    ? "border-emerald-300 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40"
                    : "border-stone-200 bg-white hover:border-indigo-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-indigo-700"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    done
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-stone-300 dark:border-stone-600"
                  }`}
                >
                  {done && "✓"}
                </span>
                <div className="min-w-0 flex-1">
                  <div className={`font-semibold ${done ? "text-stone-400 line-through" : ""}`}>
                    {c.name}
                  </div>
                  {c.notes && (
                    <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">{c.notes}</div>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <SourceBadge source={c.source} />
                  <span className="hidden text-xs text-stone-400 sm:block">
                    {c.credits} cr · {c.time}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
