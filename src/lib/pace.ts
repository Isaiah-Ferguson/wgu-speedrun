import type { SourceId } from "@/data/types";

/**
 * This site models a speed run, not a normal enrolment: someone treating the
 * degree as a full-time job. Every duration on the site is derived from these
 * numbers rather than from a fixed "courses per term" guess, so changing the
 * pace changes the whole plan consistently.
 */
export interface Pace {
  hoursPerDay: number;
  daysPerWeek: number;
}

/** The default assumption: eight hours a day, six days a week. */
export const SPEEDRUN_PACE: Pace = { hoursPerDay: 8, daysPerWeek: 6 };

/** WGU terms are six months. */
export const WEEKS_PER_TERM = 26;

/**
 * Hours of focused study per WGU competency unit. WGU's own guidance for an
 * average student works out nearer 40; speed runners consistently beat that
 * because competency-based assessment rewards prior knowledge and lets you
 * skip straight to the exam. 26 is the aggressive-but-documented figure —
 * at 48 hours a week it clears 48 CUs in a six-month term.
 */
export const HOURS_PER_CU = 26;

/**
 * Outside providers are lighter per credit than WGU competency units.
 * Sophia is the lightest (open-book, unproctored, no final exam to sit);
 * CLEP is the heaviest per credit because it is pure exam preparation,
 * though a single 6-credit exam still pays for itself in time.
 */
export const HOURS_PER_TRANSFER_CREDIT: Record<Exclude<SourceId, "wgu">, number> = {
  sophia: 6,
  studycom: 9,
  saylor: 12,
  clep: 15,
};

export function hoursPerWeek(pace: Pace): number {
  return pace.hoursPerDay * pace.daysPerWeek;
}

/** Competency units a term at this pace, the number that drives everything else. */
export function cusPerTerm(pace: Pace): number {
  return Math.max(1, Math.floor((hoursPerWeek(pace) * WEEKS_PER_TERM) / HOURS_PER_CU));
}

export function weeksForHours(hours: number, pace: Pace): number {
  return hours / hoursPerWeek(pace);
}

export function weeksToMonths(weeks: number): number {
  return weeks / 4.345;
}

/** "3 weeks" under a month, "4 months" beyond — whichever reads more usefully. */
export function humanDuration(weeks: number): string {
  if (weeks <= 0) return "—";
  if (weeks < 1) return "under a week";
  if (weeks < 9) {
    const w = Math.round(weeks);
    return `${w} week${w === 1 ? "" : "s"}`;
  }
  const m = Math.round(weeksToMonths(weeks));
  return `${m} month${m === 1 ? "" : "s"}`;
}
