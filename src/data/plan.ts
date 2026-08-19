import type { AidOption, CourseSource } from "./types";

export type { SourceId, TransferCourse, WguCourse, Program } from "./types";

// Program-agnostic data: the credit providers, financial aid, and headline pricing.
// Per-program course lists live in ./programs.ts.

export const sources: CourseSource[] = [
  {
    id: "sophia",
    name: "Sophia Learning",
    url: "https://www.sophia.org",
    tagline: "Cheapest way to clear gen eds",
    pricing: "$99/month, $299/4 months, or $799/year — unlimited courses, 2 active at a time",
    description:
      "Self-paced courses with no proctored exams at all — every milestone (including finals) is open-book and unproctored. Some courses add manually-graded Touchstone assignments (papers/projects), which are the real pacing bottleneck. 80+ course catalog; the go-to for knocking out general education requirements fast. WGU publishes an official Sophia transfer pathway per college.",
    tips: [
      "You can have 2 courses active at once — finish one, start the next immediately.",
      "Check the official WGU transfer pathway for your program before starting any course — as of March 2026, only gen-ed and lower-division Sophia courses transfer.",
      "A course a week is a realistic motivated pace (Sophia's average is ~28 days/course; grinders have done 6 in a week on easy no-Touchstone courses like Visual Communications and Intro to IT).",
    ],
  },
  {
    id: "studycom",
    name: "Study.com",
    url: "https://study.com",
    tagline: "Video lessons for courses Sophia doesn't cover",
    pricing:
      "College Saver $95/mo (~80 gen-ed/prereq courses) · College Saver Pro $235/mo (all 225+ courses)",
    description:
      "Video-based courses with chapter quizzes and a final exam. As of 2026, finals are open-book and unproctored, with unlimited exam attempts per month on both plans — the old webcam proctoring and 2-exams-per-month limits are gone. Covers courses Sophia doesn't, and WGU publishes an official Study.com transfer pathway.",
    tips: [
      "The $95 College Saver tier is mostly gen-ed/prereq courses — broader catalog needs College Saver Pro ($235/mo).",
      "Finals are now unlimited and open-book, so you can batch-finish courses in a single subscription month; Saver allows 2 concurrent courses, Pro allows 3.",
      "Since March 2026, WGU only accepts gen-ed/lower-division Study.com transfer — don't pay for upper-division courses expecting them to count.",
    ],
  },
  {
    id: "saylor",
    name: "Saylor University",
    url: "https://www.saylor.org",
    tagline: "Free courses, $5 proctored finals — but check ACE expiration dates",
    pricing: "Free courses + $5 proctored final exam (SmarterProctoring, up to 3 attempts)",
    description:
      "Completely free, self-paced courses (recently rebranded from Saylor Academy). You only pay a $5 proctoring fee for the credit-bearing final exam. Credit is awarded via ACE recommendation — but heads up: Saylor's intro CS courses (CS101/CS102, data structures) lost their ACE recommendations in 2023–24 and can no longer transfer. Its current credit catalog is mostly business and gen-ed, plus CS302 Software Engineering and CS402 Computer Communications and Networks.",
    tips: [
      "Every Saylor course's ACE recommendation has an expiration date — verify it's current AND on WGU's transfer guidelines before investing time.",
      "The old Saylor intro-CS route to WGU is dead — use Sophia (Intro to Java/Python) or Study.com for programming credits instead.",
      "Great budget option for the gen-ed and business courses it still covers.",
    ],
  },
  {
    id: "clep",
    name: "CLEP Exams",
    url: "https://clep.collegeboard.org",
    tagline: "Test out of whole subjects in one sitting",
    pricing: "$97 per exam (as of July 2025) + testing center admin fee",
    description:
      "College Board standardized exams. Pass one exam, earn 3–6 credits instantly. WGU accepts many CLEP exams for gen-ed requirements when your score meets the ACE recommendation. Free first attempts for military via DANTES.",
    tips: [
      "Modern States offers free CLEP prep, vouchers covering the full $97 exam fee, and even reimburses the test-center admin fee afterward.",
      "Some CLEP exams award 6 credits in one sitting (Social Sciences and History, Biology, Chemistry, College Composition) — best value per dollar anywhere.",
      "Military: DANTES funds the first attempt of every CLEP exam free.",
    ],
  },
  {
    id: "wgu",
    name: "Western Governors University",
    url: "https://www.wgu.edu",
    tagline: "Finish the degree — flat-rate, all-you-can-learn terms",
    pricing:
      "Flat tuition per 6-month term (varies by program) + $200 resource fee · $65 application fee, routinely waived",
    description:
      "Nonprofit, institutionally accredited (NWCCU), competency-based online university. Tuition is charged per 6-month term, not per credit — so the faster you move, the less you pay. Transfer in the maximum credits, then sprint the remaining courses.",
    tips: [
      "The entire strategy hinges on this: one flat-rate term costs the same whether you finish 12 CUs or 40.",
      "You can transfer in up to 75% of the degree — but at least 25% must always be earned at WGU.",
      "As of March 2026, only gen-ed and lower-division credit transfers in. Confirm the current pathway sheet with an enrollment counselor before paying for any outside course.",
      "Transfer evaluation must be finished before your first term starts — send every transcript early.",
    ],
  },
];

export const aidOptions: AidOption[] = [
  {
    name: "Federal Pell Grant (via FAFSA)",
    amount: "Up to $7,395 per award year (2026–27)",
    description:
      "Need-based federal grant that never has to be repaid. WGU is Title IV eligible — file the FAFSA with WGU's school code (033394). Disburses in two payments per academic year, one per 6-month term.",
    url: "https://studentaid.gov/understand-aid/types/grants/pell",
  },
  {
    name: "WGU Opportunity Scholarship",
    amount: "Up to $10,000 ($2,500/term × 4 terms)",
    description:
      "WGU's Equitable Access award for new undergrads who are INELIGIBLE for FAFSA/federal aid (you must provide a verified explanation). It is an alternative to Pell, not stackable with it — if you qualify for federal aid, use the FAFSA route instead. Open for the 2026–27 year.",
    url: "https://www.wgu.edu/financial-aid-tuition/scholarships/general/equitable-access.html",
  },
  {
    name: "WGU New Student Scholarships (rotating)",
    amount: "Commonly $3,000–$10,000",
    description:
      "WGU runs rotating scholarships for new enrollees — as of July 2026 the live list includes Back to School ($3,000), Rise Above ($4,000), Leadership ($5,000), University of You ($10,000), and Military Appreciation ($3,000). Offers open and close throughout the year, so always check the live list.",
    url: "https://www.wgu.edu/financial-aid-tuition/scholarships.html",
  },
  {
    name: "WGU Program-Specific Scholarships",
    amount: "Typically $3,000–$6,000",
    description:
      "College-specific awards rotate too — recent technology examples include Tech is Everywhere ($3,000), AI Edge ($5,000), and Cybersecurity ($6,000), plus Finish Line for near-finishers. Apply from 90 days before to 30 days after your program start; applications are free.",
    url: "https://www.wgu.edu/financial-aid-tuition/scholarships.html",
  },
];

// Verified July 2026 against provider sites.
export const pricing = {
  wguResourceFee: 200, // per-term e-books/learning resource fee
  wguAppFee: 65, // routinely waived with a promo code
  sophiaMonthly: 99, // also $299/4mo, $799/12mo
  studycomMonthly: 235, // College Saver Pro; gen-ed-only Saver tier is $95
  saylorExam: 5, // SmarterProctoring fee per attempt
  clepExam: 97, // as of July 2025
  clepAdminFee: 25, // test-center admin fee, varies ~$10–35
  pellMax: 7395, // 2026–27 award year maximum
  /** Average published in-state tuition & fees, public four-year (College Board Trends 2025) × 4 years. */
  traditionalFourYear: 47800,
};
