"use client";

import { useState } from "react";
import { pricing } from "@/data/plan";
import { useProgram } from "@/components/ProgramProvider";
import { money, plural } from "@/lib/format";
import { programStats } from "@/lib/program-stats";
import type { Program } from "@/data/types";

function Slider({
  label,
  hint,
  value,
  min,
  max,
  step = 1,
  format,
  onChange,
}: {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="border-t border-rule py-4">
      <div className="flex items-baseline justify-between gap-4">
        <label className="label text-ink">{label}</label>
        <span className="num text-lg font-bold text-accent">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--accent)]"
        aria-label={label}
      />
      <p className="mt-2 max-w-[58ch] text-xs text-muted">{hint}</p>
    </div>
  );
}

export default function CostCalculator() {
  const { program } = useProgram();
  // Remounting on program change reseeds every slider from that program's own
  // numbers, without an effect that fights the user's edits.
  return <Calculator key={program.id} program={program} />;
}

function Calculator({ program }: { program: Program }) {
  const sophiaCount = program.transferCourses.filter((c) => c.source === "sophia").length;
  const studycomCount = program.transferCourses.filter((c) => c.source === "studycom").length;
  const saylorCount = program.transferCourses.filter((c) => c.source === "saylor").length;
  const clepCount = program.transferCourses.filter((c) => c.source === "clep").length;
  const { wguCUs, terms: suggestedTerms, hasCourseData } = programStats(program);

  const [sophiaMonths, setSophiaMonths] = useState(
    sophiaCount ? Math.max(1, Math.ceil(sophiaCount / 6)) : 0,
  );
  const [studycomMonths, setStudycomMonths] = useState(
    studycomCount ? Math.max(1, Math.ceil(studycomCount / 5)) : 0,
  );
  const [saylorExams, setSaylorExams] = useState(saylorCount);
  const [clepExams, setClepExams] = useState(clepCount);
  const [wguTerms, setWguTerms] = useState(suggestedTerms);
  const [pellPerYear, setPellPerYear] = useState(0);

  const sophiaCost = sophiaMonths * pricing.sophiaMonthly;
  const studycomCost = studycomMonths * pricing.studycomMonthly;
  const saylorCost = saylorExams * pricing.saylorExam;
  const clepCost = clepExams * (pricing.clepExam + pricing.clepAdminFee);
  const wguCost =
    wguTerms * (program.tuitionPerTerm + program.resourceFeePerTerm) + pricing.wguAppFee;
  const gross = sophiaCost + studycomCost + saylorCost + clepCost + wguCost;
  // Pell disburses half the annual award per six-month term (two terms = one academic year).
  const pellApplied = Math.min((pellPerYear / 2) * wguTerms, wguCost);
  const net = gross - pellApplied;
  const monthsTotal = sophiaMonths + studycomMonths + wguTerms * 6;

  const rows = [
    { label: `Sophia · ${plural(sophiaMonths, "month")}`, value: sophiaCost },
    { label: `Study.com · ${plural(studycomMonths, "month")}`, value: studycomCost },
    { label: `Saylor · ${plural(saylorExams, "exam")}`, value: saylorCost },
    { label: `CLEP · ${plural(clepExams, "exam")}`, value: clepCost },
    {
      label: `WGU · ${plural(wguTerms, "term")} (incl. fees)`,
      value: wguCost,
    },
  ].filter((r) => r.value > 0);

  return (
    <div>
      <header className="border-t border-ink pt-4 pb-10">
        <p className="label">/05 Calculator</p>
        <h1 className="display mt-5 max-w-[13ch]">What it costs.</h1>
        <p className="mt-6 text-xl font-bold tracking-tight text-accent">{program.name}</p>
        <p className="mt-4 max-w-[64ch] text-lg text-muted">
          {hasCourseData
            ? "Sliders start pre-filled from this program's actual course counts. Drag them to match your pace."
            : "Course-level data for this program is pending, so the sliders start from its total competency units. Drag them to match your pace."}
        </p>
      </header>

      <div className="grid gap-x-14 gap-y-10 border-t border-ink pt-8 lg:grid-cols-2">
        <div>
          <p className="label pb-2">Your pace</p>
          <Slider
            label="Months on Sophia"
            hint={`$${pricing.sophiaMonthly} a month · ${plural(sophiaCount, "Sophia course")} in this plan, two active at a time.`}
            value={sophiaMonths}
            min={0}
            max={8}
            format={(v) => `${v} mo`}
            onChange={setSophiaMonths}
          />
          <Slider
            label="Months on Study.com"
            hint={`$${pricing.studycomMonthly} a month for College Saver Pro · ${plural(studycomCount, "Study.com course")} in this plan. Finals are unlimited, so batch them.`}
            value={studycomMonths}
            min={0}
            max={8}
            format={(v) => `${v} mo`}
            onChange={setStudycomMonths}
          />
          <Slider
            label="Saylor exams"
            hint={`Courses are free; $${pricing.saylorExam} per proctored final via SmarterProctoring.`}
            value={saylorExams}
            min={0}
            max={8}
            format={(v) => `${v}`}
            onChange={setSaylorExams}
          />
          <Slider
            label="CLEP exams"
            hint={`$${pricing.clepExam} per exam plus roughly $${pricing.clepAdminFee} in test-center admin fees. Modern States vouchers can make these free.`}
            value={clepExams}
            min={0}
            max={8}
            format={(v) => `${v}`}
            onChange={setClepExams}
          />
          <Slider
            label="WGU terms"
            hint={`$${program.tuitionPerTerm.toLocaleString()} tuition plus a $${program.resourceFeePerTerm} resource fee per six-month term. ${wguCUs} CUs remain at WGU, so roughly ${plural(suggestedTerms, "term")} at an accelerated pace.`}
            value={wguTerms}
            min={1}
            max={6}
            format={(v) => `${v}`}
            onChange={setWguTerms}
          />
          <Slider
            label="Expected Pell Grant per year"
            hint={`Up to $${pricing.pellMax.toLocaleString()} per award year (2026–27 maximum) if eligible. WGU disburses half per six-month term, and it applies to WGU tuition only.`}
            value={pellPerYear}
            min={0}
            max={pricing.pellMax}
            step={185}
            format={money}
            onChange={setPellPerYear}
          />
        </div>

        <div>
          <p className="label border-b border-ink pb-2">Out-of-pocket total</p>
          <p className="stat mt-5">{money(net)}</p>
          <p className="mt-2 text-sm text-muted">
            {`for ${program.shortName}, over roughly ${plural(monthsTotal, "month")} of study`}
          </p>

          <ul className="mt-8">
            {rows.map((r) => (
              <li key={r.label} className="flex justify-between gap-4 border-t border-rule py-2.5">
                <span className="text-sm text-muted">{r.label}</span>
                <span className="num text-sm font-semibold whitespace-nowrap">{money(r.value)}</span>
              </li>
            ))}
            {pellApplied > 0 && (
              <li className="flex justify-between gap-4 border-t border-rule py-2.5 text-accent">
                <span className="text-sm">Pell Grant applied</span>
                <span className="num text-sm font-semibold">−{money(pellApplied)}</span>
              </li>
            )}
            <li className="flex justify-between gap-4 border-t-2 border-ink py-2.5">
              <span className="label text-ink">Total</span>
              <span className="num text-sm font-bold">{money(net)}</span>
            </li>
          </ul>

          <div className="mt-10 border-t border-rule pt-4">
            <p className="label">Versus a four-year path</p>
            <p className="mt-2 max-w-[60ch] text-sm text-muted">
              {`Average published in-state tuition and fees at a public four-year university run about ${money(pricing.traditionalFourYear / 4)} a year — roughly ${money(pricing.traditionalFourYear)} over four years. This plan saves an estimated ${money(Math.max(pricing.traditionalFourYear - net, 0))} and two to three years of your life.`}
            </p>
          </div>

          <p className="mt-8 text-xs text-faint">
            Estimates only. Tuition, subscription rates and transfer pathways change every year —
            verify current prices with each provider before committing.
          </p>
        </div>
      </div>
    </div>
  );
}
