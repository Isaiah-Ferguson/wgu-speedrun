import type { Program } from "@/data/types";

/**
 * Every credit figure on the site comes from here, so the headline numbers
 * always reconcile against the program's official total. `wguCUs` is derived
 * rather than summed from the course list — the researched course lists are
 * accurate but not always exhaustive, and a derived remainder can never
 * contradict the official total the way two independent sums can.
 */
export function programStats(p: Program) {
  const transferCUs = p.transferCourses.reduce((s, c) => s + c.credits, 0);
  const advancedStandingCUs = p.advancedStandingCUs ?? 0;
  const wguCUs = Math.max(0, p.totalCUs - transferCUs - advancedStandingCUs);
  const terms = Math.max(1, Math.ceil(wguCUs / 30));
  return {
    transferCUs,
    advancedStandingCUs,
    wguCUs,
    terms,
    wguCost: terms * (p.tuitionPerTerm + p.resourceFeePerTerm),
    hasCourseData: p.transferCourses.length > 0 || p.wguCourses.length > 0,
    /** Percentage of the degree you can bank before ever paying WGU tuition. */
    preBankedPct: Math.round(((transferCUs + advancedStandingCUs) / p.totalCUs) * 100),
  };
}

/** The most consequential warning on a program, for compact UI. */
export function topWarning(p: Program): { kind: string; text: string } | null {
  if (p.paceBlockers) return { kind: "Can't be rushed", text: p.paceBlockers };
  if (p.careerCaveat) return { kind: "Career caveat", text: p.careerCaveat };
  if (p.admissionGate) return { kind: "Entry requirements", text: p.admissionGate };
  return null;
}
