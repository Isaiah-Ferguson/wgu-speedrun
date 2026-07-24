"use client";

import { useState } from "react";
import { stats } from "@/data/plan";

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
    <div>
      <div className="flex items-baseline justify-between">
        <label className="font-semibold">{label}</label>
        <span className="font-bold text-indigo-600 dark:text-indigo-400">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-indigo-600"
      />
      <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">{hint}</p>
    </div>
  );
}

export default function CostCalculator() {
  const [sophiaMonths, setSophiaMonths] = useState(2);
  const [studycomMonths, setStudycomMonths] = useState(2);
  const [saylorExams, setSaylorExams] = useState(3);
  const [clepExams, setClepExams] = useState(2);
  const [wguTerms, setWguTerms] = useState(1);
  const [pellPerYear, setPellPerYear] = useState(0);

  const sophiaCost = sophiaMonths * stats.sophiaMonthly;
  const studycomCost = studycomMonths * stats.studycomMonthly;
  const saylorCost = saylorExams * stats.saylorExam;
  const clepCost = clepExams * (stats.clepExam + 25); // exam + typical admin fee
  const wguCost = wguTerms * (stats.wguTermTuition + stats.wguResourceFee) + stats.wguAppFee;
  const gross = sophiaCost + studycomCost + saylorCost + clepCost + wguCost;
  // Pell disburses half the annual award per 6-month term (two terms = one academic year)
  const pellApplied = Math.min((pellPerYear / 2) * wguTerms, wguCost);
  const net = gross - pellApplied;

  // ~$11,950/yr average published in-state tuition & fees (College Board Trends 2025) × 4
  const traditionalCost = 47800;
  const monthsTotal = sophiaMonths + studycomMonths + wguTerms * 6;

  const rows = [
    { label: `Sophia (${sophiaMonths} mo)`, value: sophiaCost },
    { label: `Study.com (${studycomMonths} mo)`, value: studycomCost },
    { label: `Saylor (${saylorExams} exams)`, value: saylorCost },
    { label: `CLEP (${clepExams} exams)`, value: clepCost },
    { label: `WGU (${wguTerms} term${wguTerms > 1 ? "s" : ""} incl. $200/term resource fee + $65 app fee)`, value: wguCost },
  ];

  const fmt = (n: number) => `$${n.toLocaleString()}`;

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight">Cost calculator</h1>
        <p className="mt-4 text-lg text-stone-600 dark:text-stone-300">
          Drag the sliders to match your pace and see what the whole degree should cost.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6 rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <Slider
            label="Months on Sophia"
            hint={`$${stats.sophiaMonthly}/month — most students clear all gen eds in 1–3 months`}
            value={sophiaMonths}
            min={0}
            max={6}
            format={(v) => `${v} mo`}
            onChange={setSophiaMonths}
          />
          <Slider
            label="Months on Study.com"
            hint={`$${stats.studycomMonthly}/month for College Saver Pro (full catalog) — the $95 Saver tier is gen-ed only`}
            value={studycomMonths}
            min={0}
            max={6}
            format={(v) => `${v} mo`}
            onChange={setStudycomMonths}
          />
          <Slider
            label="Saylor exams"
            hint="Courses are free; $5 per proctored final via SmarterProctoring"
            value={saylorExams}
            min={0}
            max={6}
            format={(v) => `${v}`}
            onChange={setSaylorExams}
          />
          <Slider
            label="CLEP exams"
            hint={`$${stats.clepExam} per exam (as of July 2025) plus ~$25 test-center admin fee — Modern States vouchers can make these free`}
            value={clepExams}
            min={0}
            max={6}
            format={(v) => `${v}`}
            onChange={setClepExams}
          />
          <Slider
            label="WGU terms"
            hint={`$${stats.wguTermTuition.toLocaleString()} tuition + $${stats.wguResourceFee} resource fee per 6-month term (B.S. Software Engineering rate) — heavy transfer credit makes 1–2 terms realistic`}
            value={wguTerms}
            min={1}
            max={4}
            format={(v) => `${v}`}
            onChange={setWguTerms}
          />
          <Slider
            label="Expected Pell Grant / year"
            hint="Up to $7,395/award year (2026–27 max) if eligible — WGU disburses half per 6-month term, and it applies to WGU tuition only"
            value={pellPerYear}
            min={0}
            max={7395}
            step={500}
            format={fmt}
            onChange={setPellPerYear}
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
            <h2 className="text-sm font-bold tracking-wide text-stone-400 uppercase">Breakdown</h2>
            <ul className="mt-3 divide-y divide-stone-100 dark:divide-stone-800">
              {rows.map((r) => (
                <li key={r.label} className="flex justify-between py-2 text-sm">
                  <span className="text-stone-600 dark:text-stone-300">{r.label}</span>
                  <span className="font-semibold">{fmt(r.value)}</span>
                </li>
              ))}
              {pellApplied > 0 && (
                <li className="flex justify-between py-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <span>Pell Grant applied</span>
                  <span className="font-semibold">−{fmt(pellApplied)}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="rounded-2xl bg-indigo-600 p-6 text-white">
            <div className="text-sm font-semibold text-indigo-200 uppercase">
              Estimated out-of-pocket total
            </div>
            <div className="mt-1 text-5xl font-black">{fmt(net)}</div>
            <div className="mt-2 text-sm text-indigo-100">
              over roughly {monthsTotal} months of study
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-950/40">
            <div className="text-sm font-semibold text-emerald-700 uppercase dark:text-emerald-300">
              vs. a typical 4-year path
            </div>
            <p className="mt-2 text-sm text-emerald-800 dark:text-emerald-200">
              Average in-state public university tuition runs ~{fmt(traditionalCost)} over four
              years. This plan saves an estimated{" "}
              <strong>{fmt(Math.max(traditionalCost - net, 0))}</strong> — and 2–3 years of your
              life.
            </p>
          </div>

          <p className="text-xs text-stone-400">
            Estimates only. Verify current prices with each provider — tuition and subscription
            rates change every year.
          </p>
        </div>
      </div>
    </div>
  );
}
