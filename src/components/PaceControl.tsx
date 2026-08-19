"use client";

import { useEffect, useRef, useState } from "react";
import { usePace } from "@/components/PaceProvider";
import { cusPerTerm, hoursPerWeek, SPEEDRUN_PACE } from "@/lib/pace";

const HOUR_OPTIONS = [2, 4, 6, 8, 10, 12];
const DAY_OPTIONS = [5, 6, 7];

/**
 * The pace is the single biggest lever on every number the site shows, so it
 * is stated openly and left adjustable rather than buried as a constant.
 */
export default function PaceControl({ compact = false }: { compact?: boolean }) {
  const { pace, setPace, isDefault } = usePace();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const summary = `${pace.hoursPerDay} hrs/day · ${pace.daysPerWeek} days`;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`num flex items-center gap-2 border-b-2 border-ink/25 text-left transition-colors hover:border-accent ${
          compact ? "pb-1 text-xs" : "pb-2 text-sm"
        }`}
      >
        <span>{summary}</span>
        <span className="label shrink-0" aria-hidden="true">
          {open ? "▲" : "▾"}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-1 w-[19rem] border border-rule bg-paper p-4 shadow-2xl">
          <p className="label">Study pace</p>
          <p className="mt-2 text-xs text-muted">
            Every duration on this site is derived from this. The default is a full-time speed run.
          </p>

          <p className="label mt-4">Hours per day</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {HOUR_OPTIONS.map((h) => (
              <button
                key={h}
                onClick={() => setPace({ ...pace, hoursPerDay: h })}
                className={`num border px-2.5 py-1 text-xs transition-colors ${
                  pace.hoursPerDay === h
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-rule hover:border-ink"
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          <p className="label mt-4">Days per week</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {DAY_OPTIONS.map((d) => (
              <button
                key={d}
                onClick={() => setPace({ ...pace, daysPerWeek: d })}
                className={`num border px-2.5 py-1 text-xs transition-colors ${
                  pace.daysPerWeek === d
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-rule hover:border-ink"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <p className="num mt-4 border-t border-rule pt-3 text-xs text-muted">
            {`${hoursPerWeek(pace)} hrs/week → about ${cusPerTerm(pace)} CUs per 6-month term`}
          </p>

          {!isDefault && (
            <button
              onClick={() => setPace(SPEEDRUN_PACE)}
              className="label mt-3 text-accent underline underline-offset-4"
            >
              Reset to speed-run default
            </button>
          )}
        </div>
      )}
    </div>
  );
}
