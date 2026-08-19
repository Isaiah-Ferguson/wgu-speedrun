import type { Program } from "@/data/types";
import {
  HOURS_PER_CU,
  HOURS_PER_TRANSFER_CREDIT,
  Pace,
  SPEEDRUN_PACE,
  WEEKS_PER_TERM,
  cusPerTerm,
  hoursPerWeek,
  weeksForHours,
  weeksToMonths,
} from "@/lib/pace";

/**
 * Every credit and duration figure on the site comes from here, so the
 * headline numbers always reconcile against the program's official total.
 *
 * `wguCUs` is derived rather than summed from the course list — the researched
 * course lists are accurate but not always exhaustive, and a derived remainder
 * can never contradict the official total the way two independent sums can.
 *
 * Terms are billing units, not calendar units: WGU charges per six-month term
 * but lets you graduate the moment the last course is passed, so `wguWeeks`
 * (calendar) and `terms` (what you pay for) are tracked separately.
 */
export function programStats(p: Program, pace: Pace = SPEEDRUN_PACE) {
  const transferCUs = p.transferCourses.reduce((s, c) => s + c.credits, 0);
  const advancedStandingCUs = p.advancedStandingCUs ?? 0;
  const wguCUs = Math.max(0, p.totalCUs - transferCUs - advancedStandingCUs);

  const transferHours = p.transferCourses.reduce(
    (s, c) => s + c.credits * (HOURS_PER_TRANSFER_CREDIT[c.source] ?? 9),
    0,
  );
  const transferWeeks = weeksForHours(transferHours, pace);

  const wguHours = wguCUs * HOURS_PER_CU;
  const wguWeeks = weeksForHours(wguHours, pace);

  // Programs with a structural blocker (clinical placement, a full-time
  // student-teaching term) cannot finish in fewer terms however fast you study.
  const pacedTerms = Math.max(1, Math.ceil(wguWeeks / WEEKS_PER_TERM));
  const terms = Math.max(p.minTerms ?? 1, pacedTerms);
  const termFloorApplies = (p.minTerms ?? 1) > pacedTerms;

  const totalWeeks = transferWeeks + Math.max(wguWeeks, termFloorApplies ? terms * WEEKS_PER_TERM : 0);

  return {
    transferCUs,
    advancedStandingCUs,
    wguCUs,
    terms,
    termFloorApplies,
    wguCost: terms * (p.tuitionPerTerm + p.resourceFeePerTerm),
    hasCourseData: p.transferCourses.length > 0 || p.wguCourses.length > 0,
    /** Percentage of the degree you can bank before ever paying WGU tuition. */
    preBankedPct: Math.round(((transferCUs + advancedStandingCUs) / p.totalCUs) * 100),

    // Timing, all at the caller's pace.
    transferHours,
    transferWeeks,
    wguHours,
    wguWeeks,
    totalWeeks,
    totalMonths: weeksToMonths(totalWeeks),
    cusPerTerm: cusPerTerm(pace),
    hoursPerWeek: hoursPerWeek(pace),
  };
}

/** The most consequential warning on a program, for compact UI. */
export function topWarning(p: Program): { kind: string; text: string } | null {
  if (p.paceBlockers) return { kind: "Can't be rushed", text: p.paceBlockers };
  if (p.careerCaveat) return { kind: "Career caveat", text: p.careerCaveat };
  if (p.admissionGate) return { kind: "Entry requirements", text: p.admissionGate };
  return null;
}
