// Central data model for the WGU bachelor's speed-run plan.
// Course list originates from the "Bach Degree Speed Run" spreadsheet;
// prices and policies verified against provider sites (see verifiedNote fields).

export type SourceId = "sophia" | "studycom" | "saylor" | "clep" | "wgu";

export interface CourseSource {
  id: SourceId;
  name: string;
  url: string;
  tagline: string;
  pricing: string;
  description: string;
  color: string; // tailwind color token base, e.g. "sky"
  tips: string[];
}

export interface Course {
  id: string;
  name: string;
  source: SourceId;
  credits: number;
  cost: string;
  time: string; // estimated completion, aggressive pace
  phase: 1 | 2 | 3;
  category: "gen-ed" | "it-core" | "cs-core" | "capstone";
  notes?: string;
}

export interface AidOption {
  name: string;
  amount: string;
  description: string;
  url: string;
}

export const sources: CourseSource[] = [
  {
    id: "sophia",
    name: "Sophia Learning",
    url: "https://www.sophia.org",
    tagline: "Cheapest way to clear gen eds",
    pricing: "$99/month, $299/4 months, or $799/year — unlimited courses, 2 active at a time",
    description:
      "Self-paced courses with no proctored exams at all — every milestone (including finals) is open-book and unproctored. Some courses add manually-graded Touchstone assignments (papers/projects), which are the real pacing bottleneck. 80+ course catalog; the go-to for knocking out general education requirements fast. WGU publishes an official Sophia transfer pathway per college.",
    color: "sky",
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
    tagline: "Video lessons + proctored exams for harder courses",
    pricing: "College Saver $95/mo (~80 gen-ed/prereq courses) · College Saver Pro $235/mo (all 225+ courses)",
    description:
      "Video-based courses with chapter quizzes and a final exam. As of 2026, finals are open-book and unproctored, with unlimited exam attempts per month on both plans — the old webcam proctoring and 2-exams-per-month limits are gone. Covers some IT/CS courses Sophia doesn't, and WGU publishes an official Study.com transfer pathway.",
    color: "violet",
    tips: [
      "The $95 College Saver tier is mostly gen-ed/prereq courses — IT/CS courses need College Saver Pro ($235/mo).",
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
    color: "emerald",
    tips: [
      "Every Saylor course's ACE recommendation has an expiration date — verify it's current AND on WGU's transfer guidelines before investing time.",
      "The old Saylor intro-CS route to WGU is dead — use Sophia (Intro to Java/Python) or Study.com for programming credits instead.",
      "Great budget option for gen-ed and business courses it still covers.",
    ],
  },
  {
    id: "clep",
    name: "CLEP Exams",
    url: "https://clep.collegeboard.org",
    tagline: "Test out of whole subjects in one sitting",
    pricing: "$97 per exam (as of July 2025) + testing center admin fee",
    description:
      "College Board standardized exams. Pass one exam, earn 3–6 credits instantly. WGU accepts many CLEP exams for gen-ed requirements. Free for military via DANTES.",
    color: "amber",
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
    pricing: "B.S. Software Engineering: $4,125 per 6-month term + $200 resource fee ($65 application fee, routinely waived with promo codes)",
    description:
      "Nonprofit, institutionally accredited (NWCCU), competency-based online university. Tuition is charged per 6-month term, not per credit — so the faster you move, the less you pay. The B.S. Software Engineering program is 119 competency units (38 courses on the Java track, ~36 on C#) and includes AWS Cloud Practitioner, CompTIA Project+, and ITIL Foundation certifications. Transfer in the maximum credits, then sprint the remaining courses.",
    color: "rose",
    tips: [
      "The entire strategy hinges on this: one flat-rate term costs the same whether you finish 12 CUs or 40.",
      "You can transfer in up to 75% of the degree (~90 credits) — front-load transfer credit so only upper-division and program-specific courses remain.",
      "WGU updated transfer articulations in 2026 — some courses must now be completed at WGU. Confirm the current pathway sheet with an enrollment counselor before paying for any outside course.",
      "Transfer evaluation must be finished before your first term starts — send every transcript early.",
    ],
  },
];

export const courses: Course[] = [
  // Phase 1 — Sophia Learning (gen eds + intro courses)
  { id: "soph-algebra", name: "College Algebra", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-stats", name: "Introduction to Statistics", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-eng1", name: "English Composition I", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-eng2", name: "English Composition II", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-webdev", name: "Introduction to Web Development", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "it-core" },
  { id: "soph-it", name: "Introduction to Information Technology", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "it-core" },
  { id: "soph-env", name: "Environmental Science", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-psych", name: "Introduction to Psychology", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-hist", name: "US History I", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-viscom", name: "Visual Communications", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1 week", phase: 1, category: "gen-ed" },
  { id: "soph-java", name: "Introduction to Java Programming", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1–2 weeks", phase: 1, category: "cs-core", notes: "On Sophia's current WGU College of IT pathway." },
  { id: "soph-python", name: "Introduction to Python Programming", source: "sophia", credits: 3, cost: "Sophia subscription", time: "1–2 weeks", phase: 1, category: "cs-core", notes: "On Sophia's current WGU College of IT pathway." },

  // Phase 2 — Study.com / Saylor / CLEP (IT + CS core transferables)
  { id: "study-prog", name: "Introduction to Programming", source: "studycom", credits: 3, cost: "Study.com subscription", time: "1–2 weeks", phase: 2, category: "cs-core" },
  { id: "study-db", name: "Database Management", source: "studycom", credits: 3, cost: "Study.com subscription", time: "1–2 weeks", phase: 2, category: "cs-core" },
  { id: "study-dsa", name: "Data Structures & Algorithms", source: "studycom", credits: 3, cost: "Study.com subscription", time: "1–2 weeks", phase: 2, category: "cs-core" },
  { id: "study-se", name: "Software Engineering", source: "studycom", credits: 3, cost: "Study.com subscription", time: "1–2 weeks", phase: 2, category: "cs-core" },
  { id: "study-pm", name: "Project Management", source: "studycom", credits: 3, cost: "Study.com subscription", time: "1–2 weeks", phase: 2, category: "it-core" },
  { id: "saylor-cs302", name: "Software Engineering (CS302)", source: "saylor", credits: 3, cost: "$5 exam fee", time: "1–2 weeks", phase: 2, category: "cs-core", notes: "One of only two Saylor CS courses with a current ACE recommendation (through Jan 2027) — budget alternative to Study.com's Software Engineering." },
  { id: "saylor-cs402", name: "Computer Communications & Networks (CS402)", source: "saylor", credits: 3, cost: "$5 exam fee", time: "1–2 weeks", phase: 2, category: "it-core", notes: "The other credit-eligible Saylor CS course. Saylor's old intro-CS courses lost ACE credit in 2023–24 — don't take those." },
  { id: "clep-calc", name: "Calculus", source: "clep", credits: 4, cost: "$97 + admin fee", time: "1 week prep", phase: 2, category: "gen-ed", notes: "ACE recommends 4 semester hours at a score of 50." },
  { id: "clep-ssh", name: "Social Sciences and History", source: "clep", credits: 6, cost: "$97 + admin fee", time: "1 week prep", phase: 2, category: "gen-ed", notes: "6 credits from a single exam — best value on the board." },

  // Phase 3 — WGU (courses that must be completed at WGU)
  { id: "wgu-pl", name: "Programming Languages", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-sqa", name: "Software Quality Assurance", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-os", name: "Operating Systems", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-arch", name: "Computer Architecture", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-adm", name: "Advanced Data Management", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-web", name: "Web Development", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-net", name: "Network and Security Foundations", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-tc", name: "Technical Communication", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-bit", name: "Business of IT", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-cloud", name: "Cloud Foundations", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-sdd", name: "Software Design and Development", source: "wgu", credits: 4, cost: "Term tuition", time: "3–4 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-ethics", name: "IT Ethics", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-mobile", name: "Mobile Application Development", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-script", name: "Scripting and Programming", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-ux", name: "User Experience Design", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "cs-core" },
  { id: "wgu-lead", name: "IT Leadership", source: "wgu", credits: 3, cost: "Term tuition", time: "2–3 weeks", phase: 3, category: "it-core" },
  { id: "wgu-cap", name: "Software Development Capstone", source: "wgu", credits: 6, cost: "Term tuition", time: "4–6 weeks", phase: 3, category: "capstone", notes: "Final project — plan, build, and document a complete application." },
];

export const aidOptions: AidOption[] = [
  {
    name: "Federal Pell Grant (via FAFSA)",
    amount: "Up to $7,395 per award year (2026–27)",
    description:
      "Need-based federal grant that never has to be repaid. WGU is Title IV eligible — file the FAFSA with WGU's school code (033394). A single flat-rate WGU term can be largely or fully covered for eligible students.",
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
      "WGU runs rotating scholarships for new enrollees — as of July 2026 the live list includes Back to School ($3,000), Rise Above ($4,000), Leadership ($5,000), University of You ($10,000), and Military Appreciation ($3,000). Offers open and close throughout the year (e.g., the New Year Scholarship has closed), so always check the live list.",
    url: "https://www.wgu.edu/financial-aid-tuition/scholarships.html",
  },
  {
    name: "WGU Technology / IT Scholarships",
    amount: "Typically $3,000–$6,000",
    description:
      "School-of-Technology awards rotate too — currently live: Tech is Everywhere ($3,000), AI Edge ($5,000), Cybersecurity ($6,000), and Finish Line for near-finishers. Apply from 90 days before to 30 days after your program start; applications are free.",
    url: "https://www.wgu.edu/financial-aid-tuition/scholarships.html",
  },
];

// Headline numbers used across the site (single source of truth).
export const stats = {
  totalTransferCredits: courses.filter((c) => c.source !== "wgu").reduce((s, c) => s + c.credits, 0),
  totalWguCredits: courses.filter((c) => c.source === "wgu").reduce((s, c) => s + c.credits, 0),
  // Verified July 2026 against provider sites:
  wguTermTuition: 4125, // B.S. Software Engineering tuition per 6-month term (wgu.edu)
  wguResourceFee: 200, // per-term e-books/learning resource fee
  wguAppFee: 65,
  sophiaMonthly: 99, // also $299/4mo, $799/12mo
  studycomMonthly: 235, // College Saver Pro (full catalog); gen-ed-only Saver tier is $95
  saylorExam: 5, // SmarterProctoring fee per attempt
  clepExam: 97, // as of July 2025
  pellMax: 7395, // 2026–27 award year maximum
};
