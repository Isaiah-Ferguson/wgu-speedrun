"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { programs } from "@/data/programs";
import { useProgram } from "@/components/ProgramProvider";
import { pad2 } from "@/lib/format";

const collegeOrder = [
  "School of Technology",
  "School of Business",
  "Leavitt School of Health",
  "School of Education",
];

function collegeRank(college: string) {
  const i = collegeOrder.indexOf(college);
  return i === -1 ? collegeOrder.length : i;
}

export default function ProgramPicker({ compact = false }: { compact?: boolean }) {
  const { program, setProgramId } = useProgram();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const grouped = useMemo(() => {
    const byCollege = new Map<string, typeof programs>();
    for (const p of [...programs].sort(
      (a, b) =>
        collegeRank(a.college) - collegeRank(b.college) ||
        a.shortName.localeCompare(b.shortName),
    )) {
      const list = byCollege.get(p.college) ?? [];
      list.push(p);
      byCollege.set(p.college, list);
    }
    return [...byCollege.entries()];
  }, []);

  let index = 0;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 border-b-2 border-ink/25 text-left transition-colors hover:border-accent ${
          compact ? "pb-1" : "pb-2"
        }`}
      >
        <span className="min-w-0">
          {!compact && <span className="label block">Your program</span>}
          <span
            className={`block font-bold tracking-tight ${
              compact ? "truncate text-sm" : "mt-1 text-2xl leading-tight sm:text-3xl"
            }`}
          >
            {program.shortName}
          </span>
        </span>
        <span className="label shrink-0" aria-hidden="true">
          {open ? "▲" : "CHANGE ▾"}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-1 max-h-[26rem] w-full overflow-y-auto border border-rule bg-paper shadow-2xl"
        >
          {grouped.map(([college, list]) => (
            <div key={college}>
              <div className="label sticky top-0 border-b border-rule bg-paper px-3 py-2">
                {college}
              </div>
              {list.map((p) => {
                const selected = p.id === program.id;
                index += 1;
                return (
                  <button
                    key={p.id}
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setProgramId(p.id);
                      setOpen(false);
                    }}
                    className={`flex w-full items-baseline gap-3 border-b border-rule px-3 py-2.5 text-left transition-colors ${
                      selected ? "bg-accent text-accent-ink" : "hover:bg-ink/5"
                    }`}
                  >
                    <span
                      className={`label shrink-0 ${selected ? "text-accent-ink/70" : ""}`}
                    >
                      {pad2(index)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold">{p.shortName}</span>
                      <span
                        className={`num block truncate text-xs ${
                          selected ? "text-accent-ink/80" : "text-faint"
                        }`}
                      >
                        {`${p.totalCUs} CU · $${p.tuitionPerTerm.toLocaleString()}/term`}
                        {p.paceBlockers ? " · can't be rushed" : ""}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
