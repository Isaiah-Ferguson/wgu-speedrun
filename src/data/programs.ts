import type { Program } from "./types";

// GENERATED DATA — researched from official WGU program pages and program
// guidebooks, plus the current Sophia / Study.com / Saylor / CLEP transfer
// pathways, and cross-checked by separate verification passes. July 2026.
//
// Programs are ordered by WGU bachelor's completions (IPEDS 2023-24).
//
// Two rules govern every figure here:
//   1. Since March 2026 WGU accepts outside credit for general-education and
//      lower-division requirements only. Upper-division coursework must be
//      completed at WGU, and at least 25% of any degree is earned in residency.
//   2. Tuition is the rate for terms beginning on or after 1 January 2026.
//      WGU has published increases for later terms — always re-check.

export const programs: Program[] = [
  {
    "id": "nursing-rn-to-bsn",
    "name": "Nursing (RN-to-BSN Online) – B.S.",
    "shortName": "RN-to-BSN",
    "college": "Leavitt School of Health",
    "url": "https://www.wgu.edu/online-nursing-health-degrees/rn-to-bsn-nursing-bachelors-program.html",
    "tagline": "For licensed RNs who already hold an ADN or diploma — the fastest degree on this site to finish, and the only one gated by real clinical hours you must arrange yourself.",
    "description": "A 120-CU degree completion program for nurses who already hold an active, unencumbered RN license plus an ADN or nursing diploma. WGU awards 50 CUs of \"Advanced Standing for RN License\" automatically and typically clears the 40-CU general education block from your associate degree transcript, leaving a 30-CU nursing core to complete in residency. The program is genuinely accelerable on the coursework side, but 35 preceptored clinical field-experience hours and a placement process that WGU says to begin six months in advance set a hard floor on calendar time.",
    "totalCUs": 120,
    "courseCount": 23,
    "tuitionPerTerm": 5325,
    "resourceFeePerTerm": 200,
    "certifications": [
      "Genetics and Genomics",
      "Palliative Care",
      "Evidence-Based Practice",
      "Protection of Human Subjects in Research",
      "Cultural Competence",
      "One elective certificate: Quality and Safety, Wellness, Sexual Orientation and Gender Identity Nursing, or Nephrology"
    ],
    "careers": [
      "Staff nurse",
      "Public health nurse",
      "Nurse case manager",
      "Flight nurse",
      "Forensic nurse"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Writing with a Strategy (3 CU)",
        "time": "1-2 weeks",
        "notes": "Formally articulated on the WGU College of Health Professions Sophia pathway (SOPH-0015). Only worth doing if your ADN did not include English Comp."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Communication: Connecting with Others (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0024. Business Communication (SOPH-0059) and Workplace Communication (SOPH-0034) are listed as satisfying the same WGU course — pick whichever you prefer."
      },
      {
        "name": "Introduction to Psychology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Psychology (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0048. Direct one-to-one articulation. Nearly always already covered by an ADN."
      },
      {
        "name": "Introduction to Sociology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Sociology (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0051. Direct one-to-one articulation. Nearly always already covered by an ADN."
      },
      {
        "name": "Introduction to Ethics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Global Arts and Humanities (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0020. Art History I (SOPH-0006), Art History II (SOPH-0029), Ancient Greek Philosophers (SOPH-0027), Approaches to Studying Religions (SOPH-0008) and Visual Communications (SOPH-0009) all map to the same slot. This is the single most likely real gap for an ADN holder."
      },
      {
        "name": "U.S. History I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "World History: Diverse Cultures and Global Connections (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0022. The published pathway also maps U.S. History II (SOPH-0025), Macroeconomics (SOPH-0012) and Microeconomics (SOPH-0011) into this same WGU course — an unintuitive but currently published articulation. The second most likely real gap for an ADN holder."
      }
    ],
    "wguCourses": [
      {
        "name": "Interprofessional Communication and Leadership in Healthcare",
        "credits": 2,
        "category": "core",
        "notes": "First course in the sequence. Onboarding-style reflective assignments — commonly finished in a few days."
      },
      {
        "name": "Intrapersonal Leadership and Professional Growth",
        "credits": 3,
        "category": "upper-division",
        "notes": "Performance assessment: personal development plan. Fast for working nurses."
      },
      {
        "name": "Scholarship in Nursing Practice",
        "credits": 3,
        "category": "upper-division",
        "notes": "Evidence-based practice and literature review. One of the more writing-heavy PAs; expect evaluator revision cycles on APA and evidence-appraisal rigor."
      },
      {
        "name": "Information Technology in Nursing Practice",
        "credits": 3,
        "category": "upper-division",
        "notes": "Nursing informatics. All prior courses in the sequence are prerequisites."
      },
      {
        "name": "Organizational Systems and Healthcare Transformation",
        "credits": 3,
        "category": "upper-division",
        "notes": "Patient safety, quality science, systems redesign. Historically the successor to the old OSQL course and a common sticking point."
      },
      {
        "name": "Comprehensive Health Assessment",
        "credits": 3,
        "category": "upper-division",
        "notes": "Head-to-toe assessment. Includes a recorded/demonstrated assessment component — build in time for filming and re-submission."
      },
      {
        "name": "Healthcare Policy and Economics",
        "credits": 3,
        "category": "upper-division",
        "notes": "Value-based care, financial models, organizational ethics."
      },
      {
        "name": "Emerging Professional Practice",
        "credits": 3,
        "category": "upper-division",
        "notes": "Course code L225. Carries the genetics/genomics, palliative care and 5-year professional development plan competencies. Adds 90 further preceptored direct-care hours ONLY for students pursuing the California Public Health Nurse certificate."
      },
      {
        "name": "Global and Population Health",
        "credits": 4,
        "category": "upper-division",
        "notes": "Course code E224. THIS IS THE CLINICAL COURSE — 35 direct patient-care hours with an approved preceptor. Explicitly eligible for an 'In Progress' grade, meaning WGU expects it to span terms. Plan the placement from day one."
      },
      {
        "name": "BSNU Capstone",
        "credits": 3,
        "category": "capstone",
        "notes": "Evidence-based change proposal in a healthcare setting. Multi-task performance assessment, evaluator-scored, revision cycles are normal."
      },
      {
        "name": "Applied Healthcare Statistics",
        "credits": 4,
        "category": "gen-ed",
        "notes": "NOT on the current Sophia health-college articulation list — Sophia's Introduction to Statistics maps to 'Applied Probability and Statistics', a different WGU course. Normally cleared by your ADN transcript."
      },
      {
        "name": "Anatomy and Physiology I with Lab",
        "credits": 4,
        "category": "gen-ed",
        "notes": "Sophia sells A&P I + A&P I Lab, but they sit on the 'WGU College of Health Professions has not formally confirmed credit transfer for these courses' list. Normally cleared by your ADN."
      },
      {
        "name": "Anatomy and Physiology II with Lab",
        "credits": 4,
        "category": "gen-ed",
        "notes": "Same as A&P I — Sophia offers it, WGU's health college has not formally confirmed it. Normally cleared by your ADN."
      },
      {
        "name": "Microbiology with Lab: A Fundamental Approach",
        "credits": 4,
        "category": "gen-ed",
        "notes": "Sophia offers Microbiology + Microbiology Lab but they are on the unconfirmed list. Normally cleared by your ADN."
      },
      {
        "name": "Human Growth and Development",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Sophia's Lifespan Development is the obvious candidate but is on the unconfirmed list for this college. Normally cleared by your ADN."
      },
      {
        "name": "Pathophysiology",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Listed under General Education in the official guidebook. Sophia has no equivalent at all. Some ADNs cover it; if yours did not, this is a real WGU course you will sit."
      }
    ],
    "speedRunNotes": "The economics here are unusual: this is the most expensive per-term program on the site ($5,325 + $200 = $5,525/term), but you only ever need to complete 30 CUs in residency, so a two-term finish at ~$11,050 is realistic and a one-term finish at $5,525 is theoretically possible on coursework alone.\n\nWHAT IS GENUINELY FAST. The 30-CU nursing core is ten courses, and for a practicing RN most of the content is a restatement of what you already do. Interprofessional Communication and Leadership (2 CU) is an onboarding course people routinely clear in days. Intrapersonal Leadership, Healthcare Policy and Economics, Emerging Professional Practice and Information Technology in Nursing Practice are all single- or few-task written performance assessments with no exam. WGU itself says most RN-to-BSN students finish in 18 months or less and markets a one-year path.\n\nWHAT IS ACTUALLY HARD. Scholarship in Nursing Practice (evidence appraisal and literature review) and the BSNU Capstone (an evidence-based change proposal) are the two writing-heavy, evaluator-scored bottlenecks; budget for at least one revision cycle on each, since WGU evaluators return tasks for APA and rubric-alignment issues that have nothing to do with your nursing knowledge. Organizational Systems and Healthcare Transformation is the other traditional wall. Comprehensive Health Assessment requires a demonstrated head-to-toe assessment, so leave room for recording and resubmission.\n\nPROCTORING. Every WGU objective assessment is remotely proctored with a government photo ID, a room scan and a locked-down browser, and must be connected with a proctor before 11:59 p.m. Mountain on the last day of your term. Most of the BSNU core is performance assessments rather than OAs, which helps, but do not assume zero proctored exams — confirm your specific degree plan with your mentor.\n\nTHE TRANSFER STRATEGY IS DIFFERENT HERE. Do not plan a Sophia/Study.com grind for this program. WGU grants 80 transfer credits at application to any RN from an accredited program and evaluates for up to 10 more, hitting the 90-credit (75%) ceiling. That 80 is 50 CUs of \"Advanced Standing for RN License\" plus the general education block your ADN already covers. Alternative credit is only useful to plug a specific hole your associate degree left — most often Global Arts and Humanities or World History. Buy one month of Sophia ($99), knock out the one or two courses you actually need in a week or two, and stop. Anything you transfer must be posted BEFORE you enroll; once you start at WGU you cannot add transfer credit.\n\nSEQUENCING IS THE REAL GAME. Every course from Information Technology in Nursing Practice onward lists \"all prior courses in the sequence\" as prerequisites, so you cannot fan out and take the core in parallel — it is a chain. Combine that with a clinical placement that WGU wants started six months early, and the winning move is: submit your Preplacement Application and Placement Details on day one of term one, then race the coursework chain while the placement paperwork clears in the background. Treat two terms (~$11,050) as the honest target and one term as a stretch that depends entirely on how fast your clinical site signs an affiliation agreement.",
    "admissionGate": "You must already hold an active, unencumbered RN licence plus an ADN or nursing diploma. This is a degree-completion program — non-nurses cannot enrol.",
    "paceBlockers": "Two preceptored field-experience courses totalling roughly 100 clinical hours (including 35 direct precepted hours), and both sit behind every other course in the program. WGU advises starting placement paperwork about six months ahead, so the clinical tail sets a floor on calendar time that no amount of coursework speed removes.",
    "advancedStandingCUs": 50,
    "sources": [
      "https://www.wgu.edu/online-nursing-health-degrees/rn-to-bsn-nursing-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/health-professions/BSNU.pdf",
      "https://www.wgu.edu/financial-aid-tuition/tuition-nursing-health-degrees.html",
      "https://www.wgu.edu/admissions/nursing-health-requirements.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/health-nursing/E224-L225-Clinical-Information-Session.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/health-nursing/BSNU-Preceptor-Orientation.pdf",
      "https://wgucollegeofhealthprofessions.sophia.org/",
      "https://www.sophia.org/online-courses/course-pathways/nursing-pathway/",
      "https://study.com/college/western-governors-university/degrees/wgu-online-rn-to-bachelor-of-science-in-nursing.html",
      "https://www.mohave.edu/assets/WGU-Nursing-Pathway.pdf",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Assessment-Policies/ta-p/133"
    ]
  },
  {
    "id": "business-management",
    "name": "Business Management – B.S.",
    "shortName": "Business Management",
    "college": "School of Business",
    "url": "https://www.wgu.edu/online-business-degrees/business-management-bachelors-program.html",
    "tagline": "The cleanest speed-run at WGU: 110 CUs, zero clinicals or licensure, and an official Sophia pathway that clears 60 of them before you ever enroll.",
    "description": "WGU's B.S. Business Management is a 36-course, 110-CU competency-based degree covering management, HR, marketing, accounting, finance, economics, and operations, ending in a written business-plan capstone. It is the least gated bachelor's WGU offers — no clinical hours, no practicum, no student teaching, no state licensure, and no cohort-scheduled courses. Because WGU publishes a live per-program transfer pathway for Sophia, Study.com, and Saylor, you can pre-clear roughly two-thirds of the degree for a few hundred dollars and finish the rest in a single six-month term.",
    "totalCUs": 110,
    "courseCount": 36,
    "tuitionPerTerm": 3830,
    "resourceFeePerTerm": 200,
    "certifications": [],
    "careers": [
      "Operations Manager",
      "Human Resources Manager",
      "Project Manager",
      "Business Analyst",
      "Sales Manager"
    ],
    "transferCourses": [
      {
        "name": "English Composition I (ENG1001, SOPH-0015)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D270 Composition: Successful Self-Expression (3 CU, gen ed)",
        "time": "1-2 weeks",
        "notes": "WGU-recommended (starred) on the official BSMGT pathway. English Composition II (SOPH-0030) also works. Written assignments, no proctoring."
      },
      {
        "name": "Public Speaking (COMM1002, SOPH-0024)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D268 Introduction to Communication: Connecting with Others (3 CU, gen ed)",
        "time": "1-2 weeks",
        "notes": "WGU-recommended. Requires recording short speeches, so budget a little more than a pure quiz course."
      },
      {
        "name": "U.S. History I (HIST1001, SOPH-0022)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D266 World History: Diverse Cultures and Global Connections (3 CU, gen ed)",
        "time": "1 week",
        "notes": "WGU-recommended. U.S. History II, U.S. Government, Macroeconomics or Microeconomics also satisfy this slot — but do not double-dip with the economics slot."
      },
      {
        "name": "Introduction to Sociology (SOCI1010, SOPH-0051)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C273 Introduction to Sociology (3 CU, gen ed)",
        "time": "4-6 days",
        "notes": "WGU-recommended. One of the fastest courses in the stack."
      },
      {
        "name": "Critical Thinking (PHIL1005, SOPH-0065)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D265 Critical Thinking: Reason and Evidence (3 CU, gen ed)",
        "time": "4-6 days",
        "notes": "WGU-recommended. Saylor PHIL102 also maps here for free if you prefer."
      },
      {
        "name": "Introduction to Statistics (STAT1001, SOPH-0005)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C955 Applied Probability and Statistics (3 CU, gen ed)",
        "time": "1.5-2 weeks",
        "notes": "WGU-recommended. Slowest of the Sophia gen eds; clears a WGU course that otherwise has a proctored objective assessment."
      },
      {
        "name": "Health, Fitness, and Wellness (HLTH1011, SOPH-0080)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C458 Health, Fitness, and Wellness (4 CU, gen ed)",
        "time": "4-6 days",
        "notes": "WGU-recommended. 3 Sophia credits clear a 4-CU WGU course — best CU-per-hour trade in the program. Introduction to Nutrition (SOPH-0063) also works."
      },
      {
        "name": "Environmental Science (SCIE1005, SOPH-0016)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C165 Integrated Physical Sciences (3 CU, gen ed)",
        "time": "1 week",
        "notes": "WGU-recommended. Human Biology (SOPH-0002) or Introduction to Chemistry (SOPH-0056) also map."
      },
      {
        "name": "Macroeconomics (ECON1001, SOPH-0012)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D089 Principles of Economics (3 CU, business core)",
        "time": "1-1.5 weeks",
        "notes": "WGU-recommended. Microeconomics (SOPH-0011) is interchangeable. Saylor ECON101/102 also map for free."
      },
      {
        "name": "Principles of Management (BUSI1013, SOPH-0054)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C483 Principles of Management (4 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended. 3 credits clear a 4-CU WGU course. Sophia's newer Principles of Leadership (SOPH-0096) is an accepted alternative."
      },
      {
        "name": "Business Law (BUSI1050, SOPH-0032)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D078 Business Environment Applications I: Business Structures and Legal Environment (2 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended. Saylor BUS205 also maps for free."
      },
      {
        "name": "Operations Management (BUSI2030, SOPH-0086)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D079 Business Environment Applications II: Process, Logistics, and Operations (2 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended. Newer Sophia course — it appears on WGU's Aug 2026 pathway but is still listed under 'not formally confirmed' on Sophia's own marketing chart. Trust the WGU pathway."
      },
      {
        "name": "Principles of Marketing (BUSI2020, SOPH-0085)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D077 Concepts in Marketing, Sales, and Customer Contact (3 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended. Saylor BUS203 also maps for free."
      },
      {
        "name": "Organizational Behavior (BUSI2015, SOPH-0083)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C715 Organizational Behavior (3 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended, but C715 carries WGU's upper-division common course number MGMT 3000 — do this one FIRST, it is the articulation most exposed to another level-review cut. Saylor BUS209 also maps."
      },
      {
        "name": "Business Communication (BUSI1025, SOPH-0059)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C716 Business Communication (3 CU, business core)",
        "time": "1 week",
        "notes": "WGU-recommended. Workplace Communication (SOPH-0034) is the accepted alternative."
      },
      {
        "name": "Business Data Analytics (BUSI2090, SOPH-0091)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C723 Quantitative Analysis For Business (3 CU, business core)",
        "time": "1.5 weeks",
        "notes": "WGU-recommended. C723 is WGU's BUS 3100 (upper-division number) — front-load it. Clears one of the harder WGU objective assessments."
      },
      {
        "name": "Managerial Accounting (BUSI1011, SOPH-0079)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D774 Introduction to Business Accounting (3 CU, business core)",
        "time": "2 weeks",
        "notes": "WGU-recommended. WGU explicitly states this requirement cannot be satisfied by an associate or bachelor's degree — you must present the course. Saylor BUS105 also maps."
      },
      {
        "name": "Principles of Finance (BUSI1015, SOPH-0033)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D775 Introduction to Business Finance (3 CU, business core)",
        "time": "2 weeks",
        "notes": "WGU-recommended. Cannot be satisfied by a personal-finance course or by holding a degree. Hardest Sophia course in this stack."
      },
      {
        "name": "Human Resource Management (BUSI1080, SOPH-0089)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D351 Functions of Human Resource Management (3 CU, HR)",
        "time": "1 week",
        "notes": "WGU-recommended. Also clearable with a valid HRCI aPHR/PHR/SPHR/GPHR or SHRM-CP/SCP earned or renewed in the last 5 years."
      },
      {
        "name": "Project Management (BUSI1023, SOPH-0013)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C722 Project Management (3 CU, additional)",
        "time": "1 week",
        "notes": "WGU-recommended, but must have been completed within the past 5 years. C722 is WGU's MGMT 3400 (upper-division number) — front-load it. CompTIA Project+, PMI CAPM or PMP also clear it."
      },
      {
        "name": "Communications 301: Diversity and Intercultural Communication (SDCM-0187)",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "D082 Emotional and Cultural Intelligence (3 CU, business core)",
        "time": "1-2 weeks",
        "notes": "WGU-recommended on the official pathway. Sophia has no equivalent. This is a 300-level Study.com course, so it needs College Saver Pro ($235/mo), not the $95 plan."
      },
      {
        "name": "Business 120: International Business (SDCM-0115)",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "D080 Managing in a Global Business Environment (3 CU, business core)",
        "time": "1-2 weeks",
        "notes": "WGU-recommended. Cannot be satisfied by holding a degree. Business 308: Globalization and International Management (SDCM-0054) is the accepted alternative. Sophia and Saylor have no equivalent."
      },
      {
        "name": "Philosophy 104 (SDCM-0265)",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "D333 Ethics in Technology (3 CU, gen ed)",
        "time": "1-2 weeks",
        "notes": "Listed on WGU's official pathway but WITHOUT the 'recommended for transfer credit' asterisk — the only unstarred entry in this stack. Confirm with an enrollment counselor before paying. Sophia and Saylor have no equivalent."
      }
    ],
    "wguCourses": [
      {
        "name": "QGT1 Business Management Capstone Written Project",
        "credits": 4,
        "category": "capstone",
        "notes": "BUS 4840. Full written business plan with market analysis, financial statements and strategic actions. Multi-part performance assessment with evaluator revision cycles — the single biggest schedule risk in the program. Start it the week your term opens, not at the end."
      },
      {
        "name": "D361 Business Simulation",
        "credits": 4,
        "category": "core",
        "notes": "BUS 2111. Externally hosted business simulation run over multiple decision rounds. Non-transferable and inherently paced — you cannot brute-force it in a weekend. Start it in parallel with the capstone."
      },
      {
        "name": "QHT1 Business Management Tasks",
        "credits": 3,
        "category": "upper-division",
        "notes": "BUS 4400. Task-based performance assessment covering cost-quality relationships, operations charts and innovation management. Non-transferable by WGU policy."
      },
      {
        "name": "C721 Change Management",
        "credits": 3,
        "category": "upper-division",
        "notes": "MGMT 4400. Non-transferable. Written performance assessment on diagnosing, implementing and sustaining organizational change."
      },
      {
        "name": "C717 Business Ethics",
        "credits": 3,
        "category": "upper-division",
        "notes": "BUS 3000. Non-transferable — WGU pulled this articulation, and Sophia's Business Ethics course will NOT clear it. Scenario-based ethics assessment."
      },
      {
        "name": "D175 Consumer Behavior",
        "credits": 3,
        "category": "upper-division",
        "notes": "MKTG 3850. Non-transferable. Consumer decision-making theory across psychology, sociology and economics."
      },
      {
        "name": "D099 Sales Management",
        "credits": 3,
        "category": "upper-division",
        "notes": "BUS 3130. Non-transferable. Sales process, CRM and B2B/B2C sales management functions."
      },
      {
        "name": "D354 Talent Acquisition",
        "credits": 3,
        "category": "upper-division",
        "notes": "HRM 3520. WGU accepts transfer here in principle, but no Sophia, Study.com or Saylor course maps to it. Only outside route is a valid HRCI GPHR certification."
      },
      {
        "name": "D353 Strategic Training and Development",
        "credits": 3,
        "category": "upper-division",
        "notes": "HRM 3510. Transferable in principle, but no Sophia, Study.com or Saylor equivalent exists on the current pathway. Plan to take it at WGU."
      },
      {
        "name": "D253 Values-Based Leadership",
        "credits": 3,
        "category": "core",
        "notes": "MGMT 2700. Lower-division but explicitly non-transferable. WGU notes it can be completed at WGU BEFORE enrolling in the degree program (via WGU Academy / single course) — a legitimate way to shave your first term."
      },
      {
        "name": "D388 Fundamentals of Spreadsheets and Data Presentations",
        "credits": 3,
        "category": "core",
        "notes": "BUS 2250. Transferable in principle but no provider on the current pathway maps to it, and it must have been taken within the past 5 years. Excel-based; fast if you already use spreadsheets at work."
      },
      {
        "name": "D081 Innovative and Strategic Thinking",
        "credits": 3,
        "category": "core",
        "notes": "BUS 2080. No Sophia/Study.com/Saylor equivalent. Only outside route is a valid HRCI PHR/SPHR or SHRM-CP/SCP earned or renewed in the last 5 years."
      },
      {
        "name": "D428 Design Thinking for Business",
        "credits": 3,
        "category": "gen-ed",
        "notes": "PHIL 1110. A general-education course with NO provider equivalent on any current WGU pathway — the one gen ed you cannot pre-clear. Feeds the Solutions Design Thinking embedded certificate."
      }
    ],
    "speedRunNotes": "TARGET: 69 CU pre-cleared outside WGU, 41 CU (13 courses) finished in a single six-month term. All-in cost roughly $4,030 tuition+fees (one term) + ~$300 Sophia + ~$235 Study.com + $65 application = under $4,700.\n\nTHE ONE RULE THAT BREAKS EVERYTHING: WGU does not award transfer credit after your initial term start date. Every Sophia/Study.com/Saylor course must be finished AND transcripted to WGU before you start — transcripts must arrive by the 5th of the month prior to your start date. Finish outside coursework, order transcripts, then apply.\n\nSEQUENCE: Do the three highest-risk articulations first — Sophia Organizational Behavior (C715/MGMT 3000), Business Data Analytics (C723/BUS 3100) and Project Management (C722/MGMT 3400). All three clear WGU courses that carry upper-division common course numbers, which is exactly the category WGU has been pruning. If they get pulled, you lose 9 CU. Everything else in the Sophia stack maps to a 1000/2000-level WGU course and is stable.\n\nWHAT'S GENUINELY FAST: Sophia runs $99/mo with two courses active at a time and zero proctoring — Sociology, Critical Thinking and Health/Wellness are 4-6 day courses. A focused person clears all 20 Sophia courses in 8-10 weeks on the $299 four-month plan. Health, Fitness and Wellness (3 Sophia credits → 4 WGU CU) and Principles of Management (3 → 4 CU) are the best value in the whole degree.\n\nWHAT'S SLOW: Sophia Principles of Finance and Managerial Accounting are the real work (~2 weeks each). At WGU, the bottleneck is not the objective assessments — it's D361 Business Simulation (multi-round simulation you cannot compress) and QGT1, the 4-CU capstone business plan with market analysis and financial statements that goes through evaluator revision cycles. Open both on day one of your term and run them in the background while you knock out the ten 3-CU courses.\n\nPROCTORING: WGU objective assessments are remotely proctored through Examity — 24/7 availability, but you must book at least 24 hours ahead, and on the last day of your term you must connect with a proctor before 11:59 p.m. Utah time. There are no in-person or externally scheduled exams. Sophia has no proctored finals at all; Study.com finals are open-book and unproctored.\n\nCERT SHORTCUTS: If you already hold HRCI aPHR/PHR/SPHR/GPHR or SHRM-CP/SCP (earned or renewed within 5 years), you can clear D351 Functions of HR Management, D081 Innovative and Strategic Thinking, and D354 Talent Acquisition — that's up to 9 more CU and it's the only route to D081 and D354. CompTIA Project+, PMI CAPM or PMP clears C722.\n\nPRE-ENROLLMENT TRICK: WGU explicitly notes D253 Values-Based Leadership can be completed at WGU before enrolling in the degree program. Doing it as a standalone drops your first-term load from 41 to 38 CU.\n\nMATH TO KNOW: The degree is 110 CU, not 120 — so the 75% transfer cap is 82.5 CU and the 25% residency floor is 27.5 CU. WGU's non-transferable block is 26 CU (23.6%), just under the residency floor, so even a maximal transfer still leaves you at least one extra course to take in residence. At 69 CU transferred you're at 62.7% — comfortably legal with room to spare if an articulation gets pulled.\n\nADMISSIONS: No GRE/GMAT, no entrance exam. You need a high school diploma plus one of: college coursework with a 2.0+ cumulative GPA, an associate's or bachelor's degree, or a high school transcript with a 2.0+ GPA. Starts are on the 1st of every month. $65 non-refundable application fee.",
    "sources": [
      "https://www.wgu.edu/online-business-degrees/business-management-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/business/BSMGT.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2026/catalog-august-2026.pdf",
      "https://www.wgu.edu/financial-aid-tuition/tuition-business-degrees.html",
      "https://www.wgu.edu/financial-aid-tuition/2026-2027-tuition.html",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSMGT7112&collegeCode=BU&instId=796&programId=240",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSMGT4429&collegeCode=BU&instId=678&programId=240",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSMGT668&collegeCode=BU&instId=186&programId=240",
      "https://partners.wgu.edu/general-transfer-guideline-bachelor-dynamic?collegeCode=BU&programId=240",
      "https://wgucollegeofbusiness.sophia.org/",
      "https://study.com/college/western-governors-university/degrees/wgu-bachelor-of-science-in-business-management.html",
      "https://www.wgu.edu/admissions/business-requirements.html",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Transfer-Credit-for-CLEP-DANTES-AP-and-IB-Examinations/ta-p/28",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Assessment-Scheduling-and-Rescheduling-Information/ta-p/193"
    ]
  },
  {
    "id": "educational-studies",
    "name": "Educational Studies – B.A.",
    "shortName": "Educational Studies",
    "college": "School of Education",
    "url": "https://www.wgu.edu/online-teaching-degrees/educational-studies-bachelors-program.html",
    "tagline": "The one education degree you can actually speed-run — no student teaching, no licensure exams, no capstone.",
    "description": "A non-licensure bachelor's in education for people who want the academic content of teaching without the clinical placement. WGU offers it in eight emphasis tracks; all of them share the same 32 CU general-education block and 21 CU Professional Core, and differ only in the emphasis coursework. Because it is explicitly not a state-approved educator preparation program, it carries none of the cohort scheduling, demonstration teaching, or state licensure machinery that makes WGU's other teaching degrees impossible to accelerate.",
    "totalCUs": 98,
    "courseCount": 33,
    "tuitionPerTerm": 3825,
    "resourceFeePerTerm": 200,
    "certifications": [
      "Innovative Technology for Inclusive P–12 Classrooms (WGU-issued certificate, not a third-party industry certification)"
    ],
    "careers": [
      "Instructional support specialist / paraprofessional",
      "Corporate or workplace trainer",
      "Tutor or learning center instructor",
      "Community outreach coordinator",
      "Museum and learning center education staff"
    ],
    "transferCourses": [
      {
        "name": "Workplace Writing II",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Successful Self-Expression",
        "time": "3-5 days",
        "notes": "Highest-confidence Sophia mapping — listed by its current WGU course name directly on the official Sophia WGU Teachers College chart."
      },
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Writing with a Strategy",
        "time": "3-5 days",
        "notes": "Sophia's Teachers College chart still shows the retired name 'English Composition I'. The current mapping is confirmed on Sophia's WGU College of Business chart and on Study.com's Teachers College guide (English 104 -> Composition: Writing With a Strategy). Study.com's English 104 is the safer route if your counselor balks."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Communication: Connecting with Others",
        "time": "3-5 days",
        "notes": "Sophia's Teachers College chart shows the short legacy name 'Introduction to Communication'; the Business chart and Study.com both confirm the full current name. Business Communication or Workplace Communication also map to the same requirement."
      },
      {
        "name": "Environmental Science",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Integrated Physical Sciences",
        "time": "1 week",
        "notes": "Explicit on the Sophia Teachers College chart. A transfer course may satisfy only one WGU requirement, so do not also try to spend this one on Introduction to Biology."
      },
      {
        "name": "Introduction to Chemistry Lab",
        "source": "sophia",
        "credits": 1,
        "wguEquivalent": "Natural Science Lab",
        "time": "2-3 days",
        "notes": "Explicit on the Sophia Teachers College chart (Human Biology Lab works identically). Caveat: this is a 1-credit course against a 2 CU WGU requirement, and WGU policy requires transfer to 'meet the competency unit' — if it is rejected on credit shortfall, use Study.com Biology 101L instead."
      },
      {
        "name": "Biology 101: Intro to Biology",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Introduction to Biology",
        "time": "1 week",
        "notes": "Explicit on Study.com's WGU Teachers College guide, marked lower division. Sophia has no confirmed route to this requirement on the Teachers College chart."
      },
      {
        "name": "Biology 101L: Intro to Biology with Lab",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Natural Science Lab",
        "time": "1-2 weeks",
        "notes": "Explicit on Study.com's Teachers College guide. Safer alternative to the 1-credit Sophia lab because it carries full credit. Do not use the same course for both this and Introduction to Biology."
      },
      {
        "name": "Math 107: Quantitative Literacy",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Quantitative Literacy",
        "time": "1 week",
        "notes": "Exact-name match on Study.com's Teachers College guide, marked lower division. This is the ONLY confirmed outside route — no Sophia course maps to Quantitative Literacy on any WGU pathway page."
      },
      {
        "name": "Statistics 101: Principles of Statistics",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Statistical Data Literacy",
        "time": "1 week",
        "notes": "Explicit on Study.com's Teachers College guide (Business 212 Business Statistics also maps). Sophia's Introduction to Statistics maps only to the retired 'Applied Probability and Statistics', not to this course."
      },
      {
        "name": "Political Science 102: American Government",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "American Politics and the US Constitution",
        "time": "1 week",
        "notes": "Explicit on Study.com's Teachers College guide, marked lower division. Only confirmed outside route; Sophia has none. CLEP American Government is a plausible alternative but WGU publishes no exam-to-course chart, so confirm before paying."
      },
      {
        "name": "Education 103: Classroom Management",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Creating Positive Learning Environments (Professional Core)",
        "time": "1-2 weeks",
        "notes": "Professional Core course with an explicit Study.com articulation. Likely requires College Saver Pro ($235/mo), not the $95 tier. See confidenceNotes on upper-division risk."
      },
      {
        "name": "Education 104: Differentiated Instruction",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Planning Instructional Strategies for Meaningful Learning (Professional Core)",
        "time": "1-2 weeks",
        "notes": "Education 107 (Intro to Curriculum, Instruction, and Assessment) maps to the same WGU course."
      },
      {
        "name": "Education 105: Special Education History & Law",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Personalized Learning for Inclusive Classrooms (Professional Core)",
        "time": "1-2 weeks",
        "notes": "Explicit on Study.com's Teachers College guide."
      },
      {
        "name": "Education 210: Technology in the Classroom",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Instructional Technology and Online Pedagogy (Professional Core)",
        "time": "1-2 weeks",
        "notes": "Explicit on Study.com's Teachers College guide. Note this WGU course is part of what earns the Innovative Technology for Inclusive P-12 Classrooms certificate — transferring it out may forfeit the badge."
      },
      {
        "name": "Education 211: Teaching Elementary Math",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Elementary Mathematics Curriculum (emphasis)",
        "time": "1-2 weeks",
        "notes": "LOWER CONFIDENCE. Traceable to Study.com's current Teachers College guide, but this is emphasis coursework and is the most likely of all listed articulations to be denied under the post-March-2026 upper-division rule. Excluded from my 38 CU estimate."
      },
      {
        "name": "Education 301: Elementary Literacy Curriculum",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Elementary Literacy Curriculum (emphasis)",
        "time": "1-2 weeks",
        "notes": "LOWER CONFIDENCE — same upper-division caveat as Education 211. Excluded from my 38 CU estimate."
      },
      {
        "name": "Education 306: Elementary Social Studies Curriculum",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Elementary Social Studies Curriculum (emphasis)",
        "time": "1-2 weeks",
        "notes": "LOWER CONFIDENCE — same upper-division caveat as Education 211. Excluded from my 38 CU estimate."
      }
    ],
    "wguCourses": [
      {
        "name": "Technology and Ethics: Emerging Trends and Society",
        "credits": 3,
        "category": "gen-ed",
        "notes": "No outside articulation exists on any Sophia or Study.com WGU pathway. WGU-authored course, unproctored performance assessment — fast."
      },
      {
        "name": "Introduction to Systems Thinking and Applications",
        "credits": 3,
        "category": "gen-ed",
        "notes": "No outside articulation exists on any WGU pathway. WGU-authored; guide says 30-40 hours if the material is new to you."
      },
      {
        "name": "The Professional Educator",
        "credits": 3,
        "category": "core",
        "notes": "The guidebook states outright: 'This is not a transferable course.' Must be done at WGU, no exceptions."
      },
      {
        "name": "Learners and Learning Science",
        "credits": 3,
        "category": "core",
        "notes": "No confirmed outside articulation."
      },
      {
        "name": "Assessing and Monitoring Student Learning",
        "credits": 3,
        "category": "core",
        "notes": "No confirmed outside articulation. Performance assessment built around designing and interpreting assessments."
      },
      {
        "name": "Early Literacy Methods",
        "credits": 3,
        "category": "upper-division",
        "notes": "Methods course — performance assessment."
      },
      {
        "name": "Elementary Literacy Methods",
        "credits": 3,
        "category": "upper-division",
        "notes": "Methods course — performance assessment."
      },
      {
        "name": "Foundations of Literacy Through Literature",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Literacy Assessment and Interventions",
        "credits": 3,
        "category": "upper-division",
        "notes": "One of the hardest in the program — MTSS Tier 1/2/3 diagnostic interpretation plus intervention design, tightly rubric-bound."
      },
      {
        "name": "Early Mathematics Methods and Interventions",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Elementary Mathematics Methods and Interventions",
        "credits": 3,
        "category": "upper-division",
        "notes": "Dense performance assessment; expect at least one revision cycle."
      },
      {
        "name": "Elementary Science Curriculum",
        "credits": 3,
        "category": "upper-division",
        "notes": "Content-heavy across earth, life and physical science — goes quickly if you already know the material."
      },
      {
        "name": "Elementary Science and Engineering Methods",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Elementary Social Studies Methods",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Elementary Health and Physical Education Methods",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Elementary Fine Arts Methods",
        "credits": 3,
        "category": "upper-division",
        "notes": "One of the lightest courses in the emphasis block."
      },
      {
        "name": "Elementary Disciplinary Literacy",
        "credits": 3,
        "category": "upper-division",
        "notes": "Writing-heavy; plan buffer for evaluator revisions."
      },
      {
        "name": "Elementary Mathematics Curriculum",
        "credits": 3,
        "category": "upper-division",
        "notes": "A Study.com articulation (Education 211) exists but is at risk under the upper-division rule — budget to take it at WGU."
      },
      {
        "name": "Elementary Literacy Curriculum",
        "credits": 3,
        "category": "upper-division",
        "notes": "A Study.com articulation (Education 301) exists but is at risk under the upper-division rule — budget to take it at WGU."
      },
      {
        "name": "Elementary Social Studies Curriculum",
        "credits": 3,
        "category": "upper-division",
        "notes": "A Study.com articulation (Education 306) exists but is at risk under the upper-division rule — budget to take it at WGU."
      }
    ],
    "speedRunNotes": "STRUCTURE: 98 CU / 33 courses = 32 CU general education (11 courses) + 21 CU Professional Core (7) + 45 CU Elementary Education emphasis (15). The gen-ed and Professional Core blocks are identical across all eight BAES emphases; only the 45 CU emphasis block changes. There is NO capstone — unusual for a WGU bachelor's and a genuine accelerator.\n\nUSE STUDY.COM, NOT SOPHIA, AS YOUR PRIMARY. This is the single most important finding. Sophia's WGU Teachers College chart is stale — it still lists retired WGU course names (English Composition I, Introduction to Humanities, Survey of United States History, Mathematics for Elementary Educators) that do not exist in the current 202603 catalog. Study.com's WGU Teachers College equivalency guide uses the current names and is the ONLY confirmed outside route for four gen-eds: Quantitative Literacy (Math 107), Statistical Data Literacy (Statistics 101), American Politics and the US Constitution (Political Science 102), and Introduction to Biology (Biology 101). Sophia is still worth $99 for the handful it explicitly confirms (Workplace Writing II, Environmental Science, the science lab) because it is cheaper and has no proctoring.\n\nTWO COURSES HAVE NO OUTSIDE PATH AT ALL: Technology and Ethics: Emerging Trends and Society and Introduction to Systems Thinking and Applications. Both are WGU-authored gen-eds with no articulation on any Sophia or Study.com WGU pathway. Plan to do them at WGU; both are short and unproctored.\n\nTHE TIMING RULE THAT KILLS SPEED-RUNS: WGU does not award transfer credit after your initial term start date. Finish all outside coursework, order transcripts, and let them land BEFORE you lock a start date. Start dates are the 1st of every month, so there is no reason to rush the enrollment ahead of the transcripts.\n\nEDUCATION-SPECIFIC TRANSFER TRAP: for \"Requirement Satisfied by degree,\" School of Education programs require your associate's or bachelor's to be from a WGU PARTNER institution — stricter than every other WGU college. If your AA is not from a partner, you get a course-by-course evaluation instead of a blanket gen-ed clear, which is exactly why the Sophia/Study.com route matters here.\n\nWHAT IS ACTUALLY FAST: the four Curriculum courses (Literacy, Mathematics, Science, Social Studies) are content-survey courses — if you know the material they move quickly. The gen-ed block is trivially accelerable off-platform.\n\nWHAT IS SLOW: the emphasis block is almost entirely performance assessments — lesson plans, unit designs, intervention plans, analysis papers — submitted to WGU evaluators with a typical 2-5 business day turnaround per submission, and first-attempt revision requests are common. The evaluator queue, not your study speed, is the rate limiter. Keep 2-3 performance assessments in flight at all times rather than working serially. Hardest: Literacy Assessment and Interventions, Elementary Mathematics Methods and Interventions, Elementary Disciplinary Literacy.\n\nPROCTORING: WGU objective assessments are proctored online from home and you schedule them yourself, 24/7 — nothing is externally scheduled or cohort-gated. There are no proctored performance assessments in this program.\n\nREALISTIC PLAN: transfer ~38 CU, leaving 60 CU at WGU = 2 terms at ~30 CU/term. Cost roughly $8,050 WGU (2 x $4,025) + ~$200 Sophia + ~$285 Study.com College Saver Pro (3 months) = about $8,535 and 12 months. A one-term finish means ~20 writing-heavy courses in 26 weeks — possible but brutal. Note the 75% transfer cap (73.5 CU) and 25% residency floor (24.5 CU) are NOT the binding constraints here; the binding constraint is that only about half the degree has any outside pathway at all.",
    "careerCaveat": "This is a NON-LICENSURE degree. WGU's own guidebook states it \"does not include supervised clinical experiences in a real classroom and does not meet the requirements for initial teacher licensure\" and \"will not, in any state, lead to an institutional recommendation for licensure.\" It is fast precisely because it omits student teaching. If your goal is to be a licensed classroom teacher, you need Elementary Education instead — do not pick this one to route around student teaching.",
    "sources": [
      "https://www.wgu.edu/online-teaching-degrees/educational-studies-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/teaching/BAESELED.pdf",
      "https://www.wgu.edu/online-teaching-degrees/education-bachelors-degrees.html",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/BAES-MAES-Bachelor-of-Arts-or-Master-s-Degree-in-Education/ta-p/97",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Undergraduate-Transfer-Credit/ta-p/49140",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Transfer-Credit-for-CLEP-DANTES-AP-and-IB-Examinations/ta-p/28",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Residency-Requirements-and-Credentialing/ta-p/23797",
      "https://study.com/college/school/western-governors-university.html (Teachers College equivalency tab)",
      "https://wguteacherscollege.sophia.org/",
      "https://wgucollegeofbusiness.sophia.org/",
      "https://wgucollegeofhealthprofessions.sophia.org/",
      "https://www.wgu.edu/financial-aid-tuition.html"
    ]
  },
  {
    "id": "cybersecurity-information-assurance",
    "name": "Cybersecurity and Information Assurance – B.S.",
    "shortName": "Cybersecurity",
    "college": "School of Technology",
    "url": "https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-bachelors-program.html",
    "tagline": "For the person who wants a stack of CompTIA certs and an ABET-accredited security degree out of the same tuition payment — as long as they can stomach a rigidly sequenced course order.",
    "description": "WGU's BSCSIA is a 37-course, 122-CU security degree that bundles up to 16 industry certifications (CompTIA A+ through PenTest+, Linux Essentials, ITIL 4, ISC2 SSCP/CCSP) into tuition at no extra cost, with exam vouchers included. It is ABET-accredited and carries an NSA/DHS National Center of Academic Excellence in Cyber Defense designation. It is the most expensive School of Technology bachelor's at $4,425 per six-month term, and its curriculum is bound by seven mandatory prerequisite groups that force a largely sequential path.",
    "totalCUs": 122,
    "courseCount": 37,
    "tuitionPerTerm": 4425,
    "resourceFeePerTerm": 200,
    "certifications": [
      "CompTIA A+ (Core 1 & Core 2)",
      "CompTIA Network+",
      "CompTIA Security+",
      "CompTIA Project+",
      "CompTIA Data+",
      "CompTIA CySA+",
      "CompTIA PenTest+",
      "LPI Linux Essentials",
      "ITIL 4 Foundation",
      "ISC2 SSCP (Systems Security Certified Practitioner)",
      "ISC2 CCSP (Certified Cloud Security Professional) - optional voucher",
      "CompTIA IT Operations Specialist (stackable)",
      "CompTIA Secure Infrastructure Specialist (stackable)",
      "CompTIA Security Analytics Professional (stackable)",
      "CompTIA Network Vulnerability Assessment Professional (stackable)",
      "CompTIA Network Security Professional (stackable)"
    ],
    "careers": [
      "Cybersecurity Analyst",
      "Cybersecurity Engineer",
      "Vulnerability Assessment Analyst",
      "Cybersecurity Architect",
      "Penetration Tester"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Successful Self-Expression (D270)",
        "time": "1 week",
        "notes": "ENG1001 / SOPH-0015. ENG1002, ENG1010, or ENG1020 also clear it."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Communication: Connecting with Others (D268)",
        "time": "1 week",
        "notes": "COMM1002 / SOPH-0024. Workplace Communication (SOPH-0034) or Business Communication (SOPH-0059) also work. Note: D268 carries an upper-division CCN (COMM 3015) yet WGU still lists it as transferable gen-ed on the official Catalog 10-2026 agreement."
      },
      {
        "name": "U.S. Government",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "American Politics and the US Constitution (C963)",
        "time": "1 week",
        "notes": "HIST1020 / SOPH-0071. Confirmed on the BSCSIA-specific agreement even though Sophia's generic IT landing page lists it as unconfirmed."
      },
      {
        "name": "Critical Thinking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Critical Thinking: Reason and Evidence (D265)",
        "time": "4-5 days",
        "notes": "PHIL1005 / SOPH-0065. Saylor PHIL102 also clears it for free."
      },
      {
        "name": "College Algebra",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Algebra (C957)",
        "time": "1-2 weeks",
        "notes": "MATH1001 / SOPH-0001. Precalculus or Calculus I also clear it."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Probability and Statistics (C955)",
        "time": "1-2 weeks",
        "notes": "STAT1001 / SOPH-0005. Saylor BUS204 also clears it for free."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Health, Fitness, and Wellness (C458)",
        "time": "4-5 days",
        "notes": "HLTH1010 / SOPH-0063. Sophia's own Health, Fitness, and Wellness (SOPH-0080) also clears it. Clears a 4-CU WGU course with 3 credits."
      },
      {
        "name": "Human Biology Lab",
        "source": "sophia",
        "credits": 1,
        "wguEquivalent": "Natural Science Lab (C683)",
        "time": "3-5 days",
        "notes": "SCIE1021 / SOPH-0067. Chemistry Lab, Microbiology Lab, or A&P I/II Lab also clear it. One of the cheapest CU-per-hour wins in the program."
      },
      {
        "name": "Introduction to Information Technology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to IT (E004)",
        "time": "4-5 days",
        "notes": "CS1001 / SOPH-0023."
      },
      {
        "name": "Introduction to Relational Databases",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Data Management - Foundations (D426)",
        "time": "1-2 weeks",
        "notes": "CS1011 / SOPH-0047. SQL-heavy; slowest of the Sophia IT courses."
      },
      {
        "name": "Introduction to Networking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Network and Security - Foundations (D315)",
        "time": "1 week",
        "notes": "CS1015 / SOPH-0068. High-value: D315 is a gate for the whole Group 1 to Group 2 prerequisite chain. Saylor CS402 also clears it for free."
      },
      {
        "name": "Project Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business of IT - Project Management (D324)",
        "time": "1 week",
        "notes": "BUSI1023 / SOPH-0013. Clears a 4-CU WGU course and skips the CompTIA Project+ exam. Saylor BUS402 also clears it for free."
      },
      {
        "name": "Philosophy 104",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Ethics in Technology (D333)",
        "time": "1-2 weeks",
        "notes": "SDCM-0265. Study.com ONLY - Sophia has no articulation for D333. One of three reasons to buy a Study.com month."
      },
      {
        "name": "Computer Science 202: Network and System Security",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Fundamentals of Information Security (D827)",
        "time": "2 weeks",
        "notes": "SDCM-0200. Study.com ONLY. Computer Science 110 (SDCM-0215) also clears it."
      },
      {
        "name": "Computer Science 336: Network Forensics",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Digital Forensics in Cybersecurity (D829)",
        "time": "2-3 weeks",
        "notes": "SDCM-0234. Study.com ONLY, and the single biggest win on the list - it clears a 4-CU upper-division (ITAS 3140) course. Requires College Saver Pro ($235/mo) since it is a 300-level course."
      }
    ],
    "wguCourses": [
      {
        "name": "Practical Applications of Prompt (D685)",
        "credits": 2,
        "category": "core",
        "notes": "ICSC 2212. No outside articulation exists. Fast AI/prompt-engineering course."
      },
      {
        "name": "IT Foundations (D316)",
        "credits": 4,
        "category": "core",
        "notes": "ITEC 2013. Aligned to CompTIA A+ Core 1. First link in the mandatory Group 1 chain."
      },
      {
        "name": "IT Applications (D317)",
        "credits": 4,
        "category": "core",
        "notes": "ITEC 2023. Aligned to CompTIA A+ Core 2. Must follow D316."
      },
      {
        "name": "Applied Discrete Mathematics (E071)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "MATH 2850. The ONLY gen-ed with no Sophia, Study.com, Saylor, or CLEP equivalent - you must take it at WGU."
      },
      {
        "name": "Business of IT - Applications (D336)",
        "credits": 4,
        "category": "core",
        "notes": "ITEC 2113. Aligned to ITIL 4 Foundation. Lower division but no articulation from any partner."
      },
      {
        "name": "Network and Security - Applications (D329)",
        "credits": 4,
        "category": "core",
        "notes": "ITEC 2112. Aligned to CompTIA Security+. Gates Group 4."
      },
      {
        "name": "Introduction to Cryptography (D830)",
        "credits": 4,
        "category": "core",
        "notes": "ITAS 2142. Group 4. Math-heavy; commonly a slow course."
      },
      {
        "name": "Version Control (D197)",
        "credits": 1,
        "category": "core",
        "notes": "ITSW 2110. Git basics; often finished in a day or two."
      },
      {
        "name": "Introduction to AI and Security (D831)",
        "credits": 2,
        "category": "core",
        "notes": "ITAS 2143. Group 4. Short course."
      },
      {
        "name": "Software Security and Testing (D385)",
        "credits": 3,
        "category": "core",
        "notes": "ITEC 2034. Group 4."
      },
      {
        "name": "Networks (D325)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITEC 3602. Aligned to CompTIA Network+. Sole member of prerequisite Group 2 - a hard serialization point."
      },
      {
        "name": "Legal Issues in Information Security (D828)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITAS 3011. Reading-heavy but no proctored vendor exam; a good accelerator."
      },
      {
        "name": "Information Systems Security (C845)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITAS 3050. Aligned to ISC2 SSCP. Group 4."
      },
      {
        "name": "Foundations of Programming (Python) (E010)",
        "credits": 3,
        "category": "upper-division",
        "notes": "ITEC 3102. First course in the ordered Group 5 programming chain."
      },
      {
        "name": "Python for IT Automation (D522)",
        "credits": 3,
        "category": "upper-division",
        "notes": "ITEC 3100. Explicitly listed by WGU as non-transferable from every partner. Third in the Group 5 chain."
      },
      {
        "name": "Linux Foundations (D281)",
        "credits": 3,
        "category": "upper-division",
        "notes": "ITEC 3004. Aligned to LPI Linux Essentials."
      },
      {
        "name": "Data Analytics - Applications (D492)",
        "credits": 4,
        "category": "upper-division",
        "notes": "DTAN 3200. Aligned to CompTIA Data+."
      },
      {
        "name": "Managing Information Security (D832)",
        "credits": 3,
        "category": "upper-division",
        "notes": "ITAS 3032. Group 4."
      },
      {
        "name": "Cyber Defense and Countermeasures (D340)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITAS 3021. Aligned to CompTIA CySA+. Group 6; widely considered one of the two hardest courses."
      },
      {
        "name": "Managing Cloud Security (D320)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITCL 3202. Aligned to ISC2 CCSP. Group 6."
      },
      {
        "name": "Penetration Testing and Vulnerability Analysis (D332)",
        "credits": 4,
        "category": "upper-division",
        "notes": "ITAS 3080. Aligned to CompTIA PenTest+. Sole member of Group 7 - must be finished before the capstone unlocks."
      },
      {
        "name": "Cybersecurity and Information Assurance Capstone (D833)",
        "credits": 4,
        "category": "capstone",
        "notes": "ITAS 4200. Explicitly non-transferable. Multi-part written project with evaluator review cycles; budget several weeks."
      }
    ],
    "speedRunNotes": "CEILING: 47 of 122 CUs (38%) can come from outside, leaving 75 CUs at WGU. That is well under the 75% transfer cap and comfortably above the 25% residency floor (30.5 CUs), so neither cap binds — the real limit is simply that WGU has articulations for only 15 of the 37 courses.\n\nBUY STUDY.COM, NOT JUST SOPHIA. Sophia clears 37 CUs; Study.com clears all 37 of those plus three more courses Sophia cannot touch — Ethics in Technology (D333), Fundamentals of Information Security (D827), and Digital Forensics in Cybersecurity (D829). That last one is a 4-CU upper-division course, the single most valuable transfer in the program. Optimal play: run Sophia at $99/mo for the twelve cheap gen-ed and lower-division courses, then buy one or two months of Study.com College Saver Pro ($235/mo, needed for the 300-level CS 336) to sweep the remaining three. Saylor is free and clears four of these (Critical Thinking, Applied Probability and Statistics, Network and Security - Foundations, Business of IT - Project Management) at $5 per proctored exam if you want to shave the Sophia bill.\n\nWHAT IS GENUINELY FAST AT WGU: Version Control (D197, 1 CU) is often a one-day course. Practical Applications of Prompt (D685, 2 CU) and Introduction to AI and Security (D831, 2 CU) are short. Legal Issues in Information Security (D828, 4 CU) is reading-heavy but has no vendor exam, making it a reliable accelerator.\n\nWHAT IS SLOW: Introduction to Cryptography (D830) is math-dense. Cyber Defense and Countermeasures (D340, CySA+) and Penetration Testing (D332, PenTest+) are the two hardest and both terminate in demanding vendor exams. Applied Discrete Mathematics (E071) has no transfer path at all and must be ground out at WGU.\n\nPROCTORING: WGU objective assessments are online-proctored and must be scheduled. Separately, the certification-aligned courses route through third-party vendor exams (Pearson VUE/CompTIA), which are scheduled externally and are the main source of calendar drag. The capstone (D833) is a written performance assessment reviewed by evaluators, with revision cycles that routinely add weeks.\n\nSEQUENCING IS THE REAL CONSTRAINT. Transfer credit only helps if it breaks the prerequisite chain. Clearing D315 Network and Security - Foundations via Sophia's Introduction to Networking is disproportionately valuable because it is the last link of Group 1. Everything after it — Networks, then Network and Security - Applications, then the six-course Group 4, then Group 6, then Group 7, then capstone — is strictly gated, so a realistic aggressive plan is two to three terms ($9,250-$13,875 all-in), not one.",
    "admissionGate": "WGU's IT bachelor's programs require more than a high school diploma. You must show one of: college coursework with a 2.25+ GPA; an existing associate or bachelor's degree; a transferable IT certification; a 2.75+ high school GPA; or prior IT coursework at the 300 level or above.",
    "paceBlockers": "The guidebook enforces seven sequential prerequisite groups that must be completed in order, and the program embeds a large stack of third-party CompTIA and ISC2 certification exams that are scheduled and proctored by the vendors rather than by WGU. Both add calendar time you cannot compress, making this materially less accelerable than IT or Software Engineering.",
    "sources": [
      "https://www.wgu.edu/online-it-degrees/cybersecurity-information-assurance-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/information-technology/BSCSIA.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2026/catalog-august-2026.pdf",
      "https://www.wgu.edu/financial-aid-tuition/tuition-it-degrees.html",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSCSIA7110&collegeCode=IT&instId=796&programId=253",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSCSIA4424&collegeCode=IT&instId=678&programId=253",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSCSIA671&collegeCode=IT&instId=186&programId=253",
      "https://wgucollegeofinformationtechnology.sophia.org/",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Undergraduate-Transfer-Credit/ta-p/49140",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Transfer-Credit-for-CLEP-DANTES-AP-and-IB-Examinations/ta-p/28",
      "https://www.wgu.edu/online-it-degrees/it-certifications/comptia-certifications.html"
    ]
  },
  {
    "id": "accounting",
    "name": "Accounting – B.S.",
    "shortName": "Accounting",
    "college": "School of Business",
    "url": "https://www.wgu.edu/online-business-degrees/accounting-bachelors-program.html",
    "tagline": "The cheapest accredited on-ramp to a staff-accountant job — but WGU walls off every accounting course behind a 46-CU residency requirement, so there's a hard floor on how fast you can finish.",
    "description": "WGU's B.S. in Accounting is a 121-CU, 40-course ACBSP-accredited program that pairs a broad business core with a nine-course technical accounting sequence (Financial Accounting through Intermediate Accounting III, Auditing, Taxation, and AIS). It is one of the most transfer-friendly business degrees at WGU on paper — 75 of 121 CUs have official outside articulations — but every course with the word \"Accounting\" in it is explicitly designated non-transferable and must be earned in residency. The degree is designed as step one toward the CPA, not as a CPA-qualifying credential on its own.",
    "totalCUs": 121,
    "courseCount": 40,
    "tuitionPerTerm": 3830,
    "resourceFeePerTerm": 200,
    "certifications": [],
    "careers": [
      "Staff Accountant",
      "Tax Accountant",
      "Auditor",
      "Accounting Manager",
      "Controller"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Successful Self-Expression (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia ENG1001 / SOPH-0015. Sophia's Workplace Writing II (SOPH-0049) is an alternate on other pathways but SOPH-0015 is the one named on the BSACC agreement."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Communication: Connecting with Others (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia COMM1002 / SOPH-0024. Requires recording short speeches — budget a little extra time if you hate being on camera."
      },
      {
        "name": "U.S. History I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "US History: Stories of American Democracy (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia HIST1001 / SOPH-0022. U.S. History II (SOPH-0025) also works — either one alone clears the slot."
      },
      {
        "name": "Art History I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Global Arts and Humanities (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia ArtHist1001 / SOPH-0006. Widest-choice slot on the agreement: Art History II, Ancient Greek Philosophers, Introduction to Ethics, Approaches to Studying Religions, Visual Communications, or Business Ethics (SOPH-0076) all clear it. Introduction to Ethics is generally the fastest."
      },
      {
        "name": "Introduction to Sociology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Sociology (3 CU)",
        "time": "1 week",
        "notes": "Sophia SOCI1010 / SOPH-0051. One of the fastest courses in the whole plan."
      },
      {
        "name": "Critical Thinking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Critical Thinking: Reason and Evidence (3 CU)",
        "time": "1 week",
        "notes": "Sophia PHIL1005 / SOPH-0065."
      },
      {
        "name": "College Algebra",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Algebra (3 CU)",
        "time": "2-3 weeks",
        "notes": "Sophia MATH1001 / SOPH-0001. Precalculus (SOPH-0069) or Calculus I (SOPH-0060) also clear it, but College Algebra is by far the least work. This is the slowest gen ed for most people."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Probability and Statistics (3 CU)",
        "time": "2-3 weeks",
        "notes": "Sophia STAT1001 / SOPH-0005. Second-slowest gen ed; heavy on milestone problems."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Health, Fitness, and Wellness (4 CU)",
        "time": "1 week",
        "notes": "Sophia HLTH1010 / SOPH-0063. Best CU arbitrage in the program: a 3-credit Sophia course clears a 4-CU WGU requirement. Sophia's own Health, Fitness, and Wellness (SOPH-0080) also works."
      },
      {
        "name": "Environmental Science",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Integrated Physical Sciences (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia SCIE1005 / SOPH-0016. Eight Sophia science courses clear this slot (Human Biology, Intro to Chemistry, Microbiology, Intro to Physics, A&P I/II and others); Environmental Science is the shortest with no lab component."
      },
      {
        "name": "Macroeconomics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Principles of Economics (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia ECON1001 / SOPH-0012. Microeconomics (SOPH-0011) is interchangeable here — you only need one."
      },
      {
        "name": "Introduction to Business",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Fundamentals for Success in Business (3 CU)",
        "time": "1 week",
        "notes": "Sophia BUS1001 / SOPH-0014."
      },
      {
        "name": "Principles of Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Principles of Management (4 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI1013 / SOPH-0054. Another 3-credit-for-4-CU win. Sophia's newer Principles of Leadership (SOPH-0096) also clears it."
      },
      {
        "name": "Business Law",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business Environment Applications I: Business Structures and Legal Environment (2 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI1050 / SOPH-0032. Note the WGU slot is only 2 CU, so this is a slight CU loss — still worth it to avoid the WGU course."
      },
      {
        "name": "Operations Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business Environment Applications II: Process, Logistics, and Operations (2 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI2030 / SOPH-0086. Study.com Business 312 is the alternative."
      },
      {
        "name": "Principles of Marketing",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Concepts in Marketing, Sales, and Customer Contact (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI2020 / SOPH-0085."
      },
      {
        "name": "Organizational Behavior",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Organizational Behavior (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI2015 / SOPH-0083. Still listed in Sophia's own 'not formally confirmed' bucket, but WGU's official BSACC pathway agreement names it explicitly — trust WGU's page."
      },
      {
        "name": "Workplace Communication",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business Communication (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia COMM1010 / SOPH-0034. Sophia's Business Communication (BUSI1025 / SOPH-0059) is the other accepted option."
      },
      {
        "name": "Business Data Analytics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Quantitative Analysis For Business (3 CU)",
        "time": "2 weeks",
        "notes": "Sophia BUSI2090 / SOPH-0091. This articulation is NEW since May 2025 — the older agreement had no Sophia option for this slot. Study.com Business 212 or 350 also work."
      },
      {
        "name": "Financial Accounting + Managerial Accounting (both required)",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Principles of Financial and Managerial Accounting (3 CU)",
        "time": "3-4 weeks for the pair",
        "notes": "Sophia BUSI1010 (SOPH-0010) AND BUSI1011 (SOPH-0079) — you must complete BOTH Sophia courses to clear this single 3-CU WGU slot. Worst credit-for-effort trade in the plan, but still far cheaper than a WGU term. Do NOT confuse this with WGU's separate 'Financial Accounting' course, which is non-transferable."
      },
      {
        "name": "Principles of Finance",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Finance Skills for Managers (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI1015 / SOPH-0033."
      },
      {
        "name": "Project Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Project Management (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia BUSI1023 / SOPH-0013. RECENCY RULE: WGU requires this to have been completed within the past 5 years. Study.com Business 311 or 112 also work."
      },
      {
        "name": "Business 308: Globalization & International Management (or Business 120)",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Managing in a Global Business Environment (3 CU)",
        "time": "1-2 weeks",
        "notes": "SDCM-0054 (Business 308) or SDCM-0115 (Business 120). SOPHIA CANNOT COVER THIS — Study.com only. This is one of three slots that force you onto a Study.com subscription."
      },
      {
        "name": "Communications 301: Diversity and Intercultural Communication",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Emotional and Cultural Intelligence (3 CU)",
        "time": "1-2 weeks",
        "notes": "SDCM-0187. SOPHIA CANNOT COVER THIS — Study.com only."
      },
      {
        "name": "Business 315: Logistics & Supply Chain Management",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Operations and Supply Chain Management (3 CU)",
        "time": "1-2 weeks",
        "notes": "SDCM-0086. SOPHIA CANNOT COVER THIS — Study.com only."
      }
    ],
    "wguCourses": [
      {
        "name": "Fundamentals of Spreadsheets and Data Presentations",
        "credits": 3,
        "category": "core",
        "notes": "No Sophia or Study.com articulation exists for this slot on either official agreement — it must be done at WGU despite being a core course. Excel-heavy performance assessment; fast if you already use Excel. WGU also imposes a 5-year recency rule on this requirement if you ever try to transfer it."
      },
      {
        "name": "Innovative and Strategic Thinking",
        "credits": 3,
        "category": "core",
        "notes": "No outside articulation on either agreement. Performance-assessment based; generally one of the quicker WGU courses."
      },
      {
        "name": "Financial Accounting",
        "credits": 3,
        "category": "upper-division",
        "notes": "Explicitly on WGU's 'Non-Transferable Courses to be completed at WGU' list. Gateway to the whole accounting sequence — Principles of Financial and Managerial Accounting is its prerequisite. Do this first once you enroll."
      },
      {
        "name": "Cost and Managerial Accounting",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Moderate difficulty; objective assessment."
      },
      {
        "name": "Intermediate Accounting I",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Start of the three-course sequence that is the real pacing wall of this degree. Budget 3-5 weeks even if you are accelerating hard."
      },
      {
        "name": "Intermediate Accounting II",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Builds directly on Intermediate I — cannot be run in parallel."
      },
      {
        "name": "Intermediate Accounting III",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Builds on Intermediate II. Historically the highest-failure course in the program."
      },
      {
        "name": "Taxation I",
        "credits": 3,
        "category": "upper-division",
        "notes": "Listed under WGU Additional Courses, but neither Sophia nor Study.com has an articulation for it, so in practice it must be completed at WGU. Dense memorization of tax code."
      },
      {
        "name": "Auditing",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Covers audit process, risk assessment, audit strategy and assurance data analysis. Second-hardest course after the Intermediate chain."
      },
      {
        "name": "Accounting Information Systems",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Systems, internal controls and compliance; usually quicker than the Intermediate sequence."
      },
      {
        "name": "Business Law for Accountants",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Distinct from Business Environment Applications I — a Sophia Business Law transfer does NOT clear this."
      },
      {
        "name": "Business Ethics",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable at WGU even though Sophia's Business Ethics (SOPH-0076) exists — that course can only be used to clear the Global Arts and Humanities gen-ed slot instead."
      },
      {
        "name": "Change Management",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Performance-assessment based; one of the faster residency courses."
      },
      {
        "name": "Values-Based Leadership",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable. Performance-assessment based; reflective writing, generally quick."
      },
      {
        "name": "Business Simulation",
        "credits": 4,
        "category": "capstone",
        "notes": "The capstone-equivalent (4 CU, scheduled last on WGU's standard path). A simulated business environment where you apply the entire business core; gated behind completing that core, so it cannot be front-loaded. Performance assessment only."
      }
    ],
    "speedRunNotes": "THE ONE RULE THAT MATTERS: \"Once a student starts their initial term at WGU, transfer credit will not be accepted.\" Both official pathway agreements say this verbatim. Bank every outside credit and get official transcripts delivered BEFORE your start date, or you forfeit it permanently. This is the single most expensive mistake in this program.\n\nTHE MATH: 75 of 121 CUs (62%) transfer; 46 CUs (38%) must be earned at WGU. That is comfortably inside both guardrails (75% transfer ceiling = 90.75 CU; 25% residency floor = 30.25 CU), so the binding constraint is not policy — it is WGU's explicit 37-CU \"Non-Transferable Courses\" block plus three more slots no provider covers.\n\nYOU CANNOT DO THIS WITH SOPHIA ALONE. Sophia maxes out at 66 CUs. Three slots have Study.com-only articulations: Managing in a Global Business Environment (Business 308/120), Emotional and Cultural Intelligence (Communications 301), and Operations and Supply Chain Management (Business 315). Optimal stack: run Sophia at $99/mo for ~22 of the 25 transfer slots, then buy a single month of Study.com to burn down the three 300-level business courses. Those are 300-level, so budget for College Saver Pro ($235) rather than the $95 tier.\n\nFASTEST GEN-ED ORDER: Sophia allows two active courses at a time, so pair a slow one with a fast one. Slowest: College Algebra and Introduction to Statistics (2-3 weeks each). Fastest: Introduction to Sociology, Critical Thinking, Introduction to Nutrition, Introduction to Business (about a week each). Two CU arbitrage wins worth taking deliberately: Introduction to Nutrition (3 Sophia credits clears a 4-CU WGU requirement) and Principles of Management (same trade).\n\nTHE ONE UGLY TRADE: Principles of Financial and Managerial Accounting is a single 3-CU WGU slot that requires TWO complete Sophia courses (Financial Accounting SOPH-0010 AND Managerial Accounting SOPH-0079). Still worth it — three to four weeks of Sophia beats carrying the course into a paid term.\n\nWHAT'S ACTUALLY HARD AT WGU: The Intermediate Accounting I → II → III chain is the wall, and it is strictly sequential — you cannot parallelize it. Budget 3-5 weeks per course even as an accelerator; Intermediate III is historically the highest-failure course in the degree. Auditing and Taxation I are the next tier down. Financial Accounting is the gateway (Principles is its prerequisite), so schedule it first the day your term opens. The quick wins to clear early for momentum: Change Management, Values-Based Leadership, Innovative and Strategic Thinking, and Fundamentals of Spreadsheets if you already know Excel.\n\nPROCTORING: Objective assessments are remotely proctored on demand, 24/7 — there are no externally fixed exam dates anywhere in this program. The real end-game bottleneck is performance-assessment evaluator turnaround (roughly 72 hours per submission, longer at term boundaries). Stagger PA submissions so you always have something in the queue; near the end, grader latency — not your study speed — sets your pace.\n\nREALISTIC TIMELINE AND COST: 3-6 months of Sophia/Study.com pre-enrollment (about $400-700 total) to bank 75 CUs, then 1-2 WGU terms for the remaining 46 CUs. One term is genuinely possible for a disciplined full-time accelerator but the sequential Intermediate chain makes it tight; two terms is the honest plan. Two terms = $7,660 tuition + $400 fees at current rates, so roughly $8,500-9,000 all-in.\n\nCLEP IS USUALLY THE WRONG TOOL HERE. WGU's official policy awards CLEP/DSST/AP/IB credit only \"toward completing general education requirements\" — it cannot touch the business core. Sophia already clears all ten gen eds for $99/mo with zero proctoring, so CLEP only makes sense if you already know the material cold and want to skip a Sophia month. Modern States vouchers make it free, but you still have to schedule a proctored test-center seat.\n\nSAYLOR DOES NOT APPLY. Saylor has no articulations on WGU's BSACC pathway agreement — skip it for this program entirely.\n\nCPA REALITY CHECK: 121 CUs is not 150 semester hours. This degree alone will not make you CPA-exam eligible in most states; WGU explicitly positions its Master of Accounting as the bridge. Speed-run this for the job title and the transcript, not for the CPA license.",
    "careerCaveat": "A bachelor's alone does not make you a CPA. Licensure has historically required 150 semester hours, well beyond this degree. As of 2025-26 NASBA and the AICPA approved a model alternative and more than 27 jurisdictions have enacted a bachelor's-plus-experience pathway — check your own state board before assuming either way.",
    "sources": [
      "https://www.wgu.edu/online-business-degrees/accounting-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/business/BSACC.pdf",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSACC7112&collegeCode=BU&instId=796&programId=191",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSACC4429&collegeCode=BU&instId=678",
      "https://www.wgu.edu/financial-aid-tuition/tuition-business-degrees.html",
      "https://www.wgu.edu/financial-aid-tuition/2026-2027-tuition.html",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Transfer-Credit-for-CLEP-DANTES-AP-and-IB-Examinations/ta-p/28",
      "https://wgucollegeofbusiness.sophia.org/",
      "https://storage.ghost.io/c/0a/73/0a73264c-83de-4b54-9fc9-06cd3932f2ba/content/files/2025/05/SophiaWGUAccounting-1.pdf"
    ]
  },
  {
    "id": "elementary-education",
    "name": "Elementary Education – B.A.",
    "shortName": "Elementary Ed",
    "college": "School of Education",
    "url": "https://www.wgu.edu/online-teaching-degrees/elementary-education-bachelors-program.html",
    "tagline": "The one degree on this site you cannot actually speed-run — a real classroom, a real school calendar, and a real state license stand between you and the diploma.",
    "description": "WGU's B.A. in Elementary Education is a 37-course, 120-CU initial teacher-licensure program that takes you from general education through a seven-course professional core, fifteen elementary methods and curriculum courses, two in-person clinical placements, and a full term of supervised student teaching. Coursework is online and competency-based, but the program is gated by in-classroom hours, a state basic-skills exam, a state content exam, background checks, and district-calendar placements. Graduates receive an institutional recommendation for elementary teaching licensure in their state.",
    "totalCUs": 120,
    "courseCount": 37,
    "tuitionPerTerm": 3825,
    "resourceFeePerTerm": 200,
    "certifications": [
      "Innovative Technology for Inclusive P–12 Classrooms (WGU microcredential, included in the program)"
    ],
    "careers": [
      "Licensed Elementary School Teacher (grade range set by your state's license)",
      "Kindergarten Teacher",
      "Upper-Elementary / Middle-Grades Teacher (state-dependent)",
      "Private or Charter School Classroom Teacher",
      "Instructional Coach or Curriculum Support Specialist (with classroom experience)"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D269 Composition: Writing with a Strategy (3 CU, General Education)",
        "time": "1–2 weeks",
        "notes": "On Sophia's confirmed WGU Teachers College chart (SOPH-0015). WGU's BAELED guideline for D269 reads 'one course, equivalent to 3 units, in english composition. Excluding business writing and technical writing' — so do NOT substitute Workplace Writing."
      },
      {
        "name": "English Composition II",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D270 Composition: Successful Self-Expression (3 CU, General Education)",
        "time": "1–2 weeks",
        "notes": "Confirmed chart (SOPH-0030). WGU guideline: 'english composition II,' business/technical writing excluded. Sophia also lists Workplace Writing II against this course, but that conflicts with the exclusion — use Comp II."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D268 Introduction to Communication: Connecting with Others (3 CU, General Education)",
        "time": "~1 week",
        "notes": "Confirmed chart (SOPH-0024). Business Communication (SOPH-0059) and Workplace Communication (SOPH-0034) are also confirmed against the same WGU course. WGU guideline: 'one course, equivalent to 3 units, in communications.'"
      },
      {
        "name": "College Algebra",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D771 Quantitative Literacy (3 CU, General Education)",
        "time": "~2 weeks",
        "notes": "Confirmed chart (SOPH-0001). WGU's D771 guideline accepts 'mathematics for elementary educators I or a college-level math course.' One of the two heavier Sophia courses — budget more time than a gen-ed writing course."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D772 Statistical Data Literacy (3 CU, General Education)",
        "time": "~2 weeks",
        "notes": "Confirmed chart (SOPH-0005). WGU's D772 guideline accepts 'mathematics for elementary educators II or statistics.'"
      },
      {
        "name": "Human Biology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C165 Integrated Physical Sciences (3 CU, General Education)",
        "time": "~2 weeks",
        "notes": "Sophia's confirmed WGU Teachers College chart explicitly maps Human Biology (SOPH-0002) to Integrated Physical Sciences. Counter-intuitive but that is the published articulation. WGU's C165 guideline accepts any 3-unit physical or life science."
      },
      {
        "name": "Introduction to Chemistry Lab",
        "source": "sophia",
        "credits": 1,
        "wguEquivalent": "C683 Natural Science Lab (2 CU, General Education)",
        "time": "3–5 days",
        "notes": "Confirmed chart (SOPH-0070). Human Biology Lab (SOPH-0067) is also confirmed for this slot — but a transfer course cannot satisfy two WGU requirements, so if you use Human Biology for C165, take the Chemistry Lab here."
      },
      {
        "name": "U.S. Government",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C963 American Politics and the US Constitution (3 CU, General Education)",
        "time": "1–2 weeks",
        "notes": "VERIFY FIRST. WGU's own BAELED guideline for C963 accepts 'one course, equivalent to 3 units, in U.S. government,' but Sophia's U.S. Government (SOPH-0071) sits in the 'not formally confirmed for WGU Teachers College' section of Sophia's chart. Also: WGU states this requirement cannot be satisfied by a degree for students residing/licensing in California."
      },
      {
        "name": "CLEP Biology",
        "source": "clep",
        "credits": 3,
        "wguEquivalent": "C190 Introduction to Biology (3 CU, General Education)",
        "time": "3–4 weeks of prep + one test-center appointment",
        "notes": "VERIFY FIRST — lowest-confidence item on this list. WGU's BAELED guideline for C190 accepts 'general biology or any life science,' and WGU accepts CLEP at the ACE-recommended minimum score, but I could not open WGU's current CLEP equivalency chart to confirm the specific exam-to-course mapping. Modern States covers the $97 exam fee and reimburses the test-center admin fee. There is no confirmed Sophia articulation for C190 once Human Biology is spent on C165."
      }
    ],
    "wguCourses": [
      {
        "name": "D459 Introduction to Systems Thinking and Applications",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Transferable in principle ('one course in systems thinking') but no Sophia, Study.com, Saylor, or CLEP equivalent exists. Plan to take it at WGU — it is a fast, self-paced PA course."
      },
      {
        "name": "D773 Technology and Ethics: Emerging Trends and Society",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Same situation: WGU will accept 'one course in technology and ethics,' but no alt-credit provider currently offers a matching course. Fast at WGU."
      },
      {
        "name": "D663 The Professional Educator",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE. The guidebook states outright: 'This is not a transferable course.' Covers SOE professional dispositions and ethics; first course on the standard path."
      },
      {
        "name": "D664 Learners and Learning Science",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE, but WGU notes it 'can be completed at WGU prior to enrolling in a degree program' — worth asking your enrollment counselor about pre-enrollment completion."
      },
      {
        "name": "D662 Personalized Learning for Inclusive Classrooms",
        "credits": 3,
        "category": "core",
        "notes": "WGU will transfer 'one or more courses, equivalent to 3 units, in personalized learning in special education and exceptional learners' — but only from an accredited college; no confirmed Sophia/Study.com course."
      },
      {
        "name": "D661 Creating Positive Learning Environments",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'one course, equivalent to 3 units, in classroom management.' No alt-credit provider confirmed."
      },
      {
        "name": "D658 Planning Instructional Strategies for Meaningful Learning",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'one course in planning instructional strategies.' No alt-credit provider confirmed."
      },
      {
        "name": "D659 Assessing and Monitoring Student Learning",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'one course in educational assessment.' No alt-credit provider confirmed."
      },
      {
        "name": "D660 Instructional Technology and Online Pedagogy",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'one course in instructional technology in education.' This is the course tied to the Innovative Technology for Inclusive P–12 Classrooms microcredential."
      },
      {
        "name": "D668 Elementary Literacy Curriculum",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot ('elementary literacy curriculum') but no alt-credit source. Start of the heavy science-of-reading block."
      },
      {
        "name": "D669 Early Literacy Methods",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE. Performance assessment; PK–3 phonemic awareness, dyslexia, MTSS Tier 1."
      },
      {
        "name": "D670 Elementary Literacy Methods",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE. Grades 4–6 literacy planning PA."
      },
      {
        "name": "D688 Foundations of Literacy Through Literature",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'one course, equivalent to 3 units, in children's literature.' A community-college children's-lit course is the only realistic outside route."
      },
      {
        "name": "D689 Literacy Assessment and Interventions",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE. Diagnostic assessment + Tier 1/2/3 intervention design PA."
      },
      {
        "name": "D690 Elementary Disciplinary Literacy",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE."
      },
      {
        "name": "D691 Elementary Mathematics Curriculum",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'elementary mathematics curriculum' OR two 3-unit courses, one in mathematics and one in teaching fundamentals/methods."
      },
      {
        "name": "D692 Early Mathematics Methods and Interventions",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE."
      },
      {
        "name": "D693 Elementary Mathematics Methods and Interventions",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE."
      },
      {
        "name": "D671 Elementary Science Curriculum",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'elementary science curriculum' OR two 3-unit courses, one in science and one in teaching fundamentals/methods."
      },
      {
        "name": "D672 Elementary Science and Engineering Methods",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE."
      },
      {
        "name": "D673 Elementary Social Studies Curriculum",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'elementary social studies curriculum' OR two 3-unit courses, one in social studies and one in teaching fundamentals/methods."
      },
      {
        "name": "D674 Elementary Social Studies Methods",
        "credits": 3,
        "category": "core",
        "notes": "Officially NON-TRANSFERABLE."
      },
      {
        "name": "D694 Elementary Health and Physical Education Methods",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'elementary health & physical education methods' OR two 3-unit courses, one in health & PE and one in teaching fundamentals/methods."
      },
      {
        "name": "D695 Elementary Fine Arts Methods",
        "credits": 3,
        "category": "core",
        "notes": "Transferable slot: 'elementary fine arts methods' OR two 3-unit courses, one in fine arts and one in teaching fundamentals/methods."
      },
      {
        "name": "D706 Early Clinical in Elementary Education",
        "credits": 3,
        "category": "core",
        "notes": "HARD GATE. Officially NON-TRANSFERABLE. In-person placement in a real elementary classroom; requires provisional acceptance via a clinical application, cleared background check, and a WGU Placement Specialist arranging the school."
      },
      {
        "name": "D708 Advanced Clinical in Elementary Education",
        "credits": 3,
        "category": "core",
        "notes": "HARD GATE. Officially NON-TRANSFERABLE. Includes an externally evaluated pedagogical performance assessment and is taken immediately before Student Teaching I."
      },
      {
        "name": "D717 Student Teaching I in Elementary Education",
        "credits": 8,
        "category": "capstone",
        "notes": "HARD GATE. Officially NON-TRANSFERABLE. Full-time supervised classroom placement with a qualified Mentor Teacher, plus REQUIRED SYNCHRONOUS sessions you must attend. Mandatory for initial licensure."
      },
      {
        "name": "D718 Student Teaching II in Elementary Education",
        "credits": 8,
        "category": "capstone",
        "notes": "HARD GATE. Officially NON-TRANSFERABLE. The culminating experience — final evaluation here determines licensure eligibility. Also carries required synchronous sessions."
      }
    ],
    "speedRunNotes": "WHAT IS ACTUALLY FAST: only the front third. Of 120 CU, WGU's own Partners Portal guideline for BAELED (program 223, catalog 03-2026) marks 32 CU of general education and 36 CU of \"Core\" education coursework as transferable, and 52 CU as flat-out non-transferable. But of that 68 CU ceiling, only about 23–26 CU are reachable through Sophia/Study.com/CLEP, because the 36 CU of Core slots are education-methods subjects (children's literature, classroom management, educational assessment, elementary math/science/social-studies curriculum, fine arts and health/PE methods) that no alt-credit provider currently articulates. If you already hold community-college education coursework or an education-focused A.A., that is by far the biggest lever in this program — worth up to 36 additional CU.\n\nDO ALL OUTSIDE CREDIT BEFORE YOU ENROLL. WGU will not award transfer credit after your program begins, and official transcripts must reach WGU by the 5th of the month prior to your start date. A realistic Sophia sprint (Comp I, Comp II, Public Speaking, College Algebra, Intro to Statistics, Human Biology, Intro to Chemistry Lab, U.S. Government) is one to two months at $99/mo with two courses active at a time — roughly $99–$200 total to erase ~23–26 CU, versus $4,025 per term inside WGU.\n\nWATCH FOR STALE PATHWAY DATA. Sophia's WGU Teachers College chart still names WGU courses that no longer exist in catalog 03-2026 — \"Introduction to Humanities,\" \"Survey of United States History,\" \"Mathematics for Elementary Educators I/II/III.\" The current BAELED has no humanities requirement and no U.S. history requirement, so the six Sophia humanities courses and both U.S. History courses on that chart have nothing to land on. Check the Partners Portal for BAELED specifically before buying a Sophia month. Study.com has removed its per-course WGU tables entirely and now redirects to the Partners Portal.\n\nTWO GEN EDS HAVE NO OUTSIDE ROUTE: D459 Introduction to Systems Thinking and D773 Technology and Ethics. Both are self-paced WGU courses with no prerequisites; knock them out in week one of term 1.\n\nINSIDE WGU, THE BOTTLENECK IS EVALUATOR TURNAROUND, NOT LEARNING. Almost every course in the elementary block is a performance assessment — lesson plans, unit plans, assessment analyses, written reflections — submitted to human evaluators who send work back for revision. There are very few objective exams to blitz. Budget at least one revision cycle per PA. The slowest cluster is the five-course science-of-reading literacy block (D668, D669, D670, D688, D689) and the Advanced Clinical pedagogical performance assessment.\n\nTHE REAL CRITICAL PATH IS PAPERWORK, NOT COURSEWORK. Start these on day one, in parallel with classes: (1) the state-specific basic skills exam, which is a hard prerequisite to Student Teaching and which you register and pay for yourself; (2) the criminal background check — some states require more than one; (3) the clinical experience application for provisional acceptance to Early and Advanced Clinical; (4) your state's content exam(s), which you must pass to graduate. WGU applies for clinical and student-teaching placements on a rolling monthly basis, but actual start dates are dictated by school-district calendars.\n\nREALISTIC TIMELINE AND COST. Term 1: transfer credit already posted, then clear every remaining non-clinical course — about 26 courses of 3 CU each, which a strong, full-time writer can compress but most people cannot. Term 2: Early Clinical, Advanced Clinical, Student Teaching I and II. That is a two-term / 12-month absolute floor, and 12 months is a wall — Student Teaching alone consumes a term and must line up with a K-12 school year. Two terms = $8,050; three terms = $12,075 (tuition plus the $200/term resource fee), on top of basic-skills and content-exam fees and background-check costs paid out of pocket. WGU's own published figure: 68% of students finish within 36 months. Treat anything under 18 months as an aggressive outlier, not a plan.\n\nTIMING TRAP: do not pick a start month that lands your student-teaching term in the summer. You cannot student-teach when schools are closed, and a mistimed start can cost you an entire extra $4,025 term of waiting.\n\nIF YOU DO NOT ACTUALLY NEED A LICENSE, look at WGU's B.A. Educational Studies instead — WGU links it directly from the BAELED transfer page. It removes student teaching and licensure and is genuinely speed-runnable.",
    "paceBlockers": "Requires 75+ hours of in-classroom observation plus a full-time supervised demonstration-teaching term of roughly 12 to 20 weeks that cannot be compressed, accelerated, or done alongside a job. State licensure requirements follow. This is a genuinely slow degree by design.",
    "sources": [
      "https://www.wgu.edu/online-teaching-degrees/elementary-education-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/teaching/BAELED.pdf",
      "https://www.wgu.edu/financial-aid-tuition/tuition-teaching-education-degrees.html",
      "https://partners.wgu.edu/home",
      "https://marketing-api-gateway.wgu.edu/partner/v1/public/program-data?pamsCodes=BAELED",
      "https://marketing-api-gateway.wgu.edu/partner/v1/public/transfer-guidelines",
      "https://marketing-api-gateway.wgu.edu/partner/v1/public/program/college/TC",
      "https://wguteacherscollege.sophia.org/",
      "https://study.com/college/western-governors-university/degrees/wgu-bachelors-of-arts-in-elementary-education.html",
      "https://study.com/college/school/western-governors-university/studycom-courses-that-transfer-to-wgu.html",
      "https://www.wgu.edu/admissions/student-teaching.html",
      "https://www.wgu.edu/online-teaching-degrees/becoming-licensed-teacher-accredited.html",
      "https://www.wgu.edu/admissions/teaching-requirements.html",
      "https://www.wgu.edu/admissions/transfers.html"
    ]
  },
  {
    "id": "computer-science",
    "name": "Computer Science – B.S.",
    "shortName": "Computer Science",
    "college": "School of Technology",
    "url": "https://www.wgu.edu/online-it-degrees/computer-science.html",
    "tagline": "The most academically demanding and least transfer-friendly degree WGU offers — a real CS curriculum you mostly cannot test out of.",
    "description": "WGU's BSCS is a 117-CU, 37-course program covering programming, discrete math, calculus, computer architecture, operating systems, data structures and algorithms, Java, and a heavy AI/ML block. Unlike BSIT or Cybersecurity, its curriculum is built almost entirely from WGU-proprietary courses with no third-party equivalents, so only about 24 CUs realistically transfer in. It is the one WGU tech degree where the speed-run is won inside WGU, not before it.",
    "totalCUs": 117,
    "courseCount": 37,
    "tuitionPerTerm": 4125,
    "resourceFeePerTerm": 200,
    "certifications": [
      "Linux Essentials",
      "ITIL 4 Foundation",
      "WGU Java Developer (WGU-issued)",
      "WGU Back-End Developer (WGU-issued)",
      "WGU Artificial Intelligence Optimization Developer (WGU-issued)"
    ],
    "careers": [
      "Software Engineer",
      "Software Developer",
      "Computer & Information Systems Manager",
      "Business Intelligence Analyst",
      "Machine Learning Specialist"
    ],
    "transferCourses": [
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C955 / MATH 1101 Applied Probability and Statistics (3 CU)",
        "time": "1-2 weeks",
        "notes": "Listed on the current Sophia WGU College of IT pathway page (SOPH-0005). Lower-division gen-ed, safe under the post-March-2026 rule."
      },
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D270 / ENGL 1712 Composition: Successful Self-Expression (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0015. Sophia's English Composition II (SOPH-0030) also maps here but carries program restrictions — use Comp I."
      },
      {
        "name": "Introduction to Java Programming",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D278 / ITSW 2113 Scripting and Programming - Foundations (3 CU)",
        "time": "2-3 weeks",
        "notes": "SOPH-0062. The single highest-value non-gen-ed transfer available for this degree, and useful prep for the Java block later."
      },
      {
        "name": "Introduction to Relational Databases",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D426 / ITEC 2116 Data Management - Foundations (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0047. Does NOT cover D427 Data Management - Applications, which has no outside equivalent."
      },
      {
        "name": "Introduction to Web Development",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D276 / ITSW 2120 Web Development Foundations (3 CU)",
        "time": "1-2 weeks",
        "notes": "SOPH-0043. Lower-division (ITSW 2120), safe to transfer."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C458 / HLTH 1010 Health, Fitness, and Wellness (4 CU)",
        "time": "1 week",
        "notes": "SOPH-0063. Clears a 4-CU WGU course for 3 Sophia credits — best CU-per-hour trade in the whole plan."
      },
      {
        "name": "Introduction to Chemistry Lab",
        "source": "sophia",
        "credits": 1,
        "wguEquivalent": "C683 / SCIE 1001 Natural Science Lab (2 CU)",
        "time": "3-5 days",
        "notes": "SOPH-0070. Human Biology Lab (SOPH-0067) is an equivalent alternative. Sophia generally expects the paired lecture course (Introduction to Chemistry / Human Biology) alongside the lab — budget for both if Sophia gates enrollment."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D268 / COMM 3015 Introduction to Communication: Connecting with Others (3 CU)",
        "time": "1-2 weeks",
        "notes": "RISK: SOPH-0024, still listed on Sophia's current WGU IT page, but WGU numbers D268 as COMM 3015 — an UPPER-division CCN despite being a gen-ed requirement. The post-March-2026 rule says upper-division must be done at WGU. Business Communication (SOPH-0059) and Workplace Communication (SOPH-0034) map here too. Confirm in writing with a WGU enrollment counselor BEFORE paying for this one."
      }
    ],
    "wguCourses": [
      {
        "name": "Calculus I (C958 / MATH 2100)",
        "credits": 4,
        "category": "gen-ed",
        "notes": "Lower-division, but NO third-party pathway exists. Sophia's own Calculus I maps to Applied Algebra, not to WGU Calculus I — a common and expensive mistake. Hardest gen-ed in the program."
      },
      {
        "name": "Discrete Mathematics I (C959 / MATH 2800)",
        "credits": 4,
        "category": "gen-ed",
        "notes": "No current Sophia equivalent. Proctored objective assessment. Budget 3-5 weeks."
      },
      {
        "name": "Discrete Mathematics II (C960 / MATH 2810)",
        "credits": 4,
        "category": "gen-ed",
        "notes": "No current Sophia equivalent. Widely considered the hardest course in the BSCS. Budget 4-8 weeks; many students take longer."
      },
      {
        "name": "American Politics and the US Constitution (C963 / POLS 1030)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Lower-division but absent from Sophia's WGU IT pathway. A CLEP American Government exam may cover it — verify with WGU first, as I could not confirm it on an official WGU equivalency chart."
      },
      {
        "name": "Introduction to Systems Thinking and Applications (D459 / PHIL 1032)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "WGU-proprietary, no outside equivalent. Fast performance-assessment course."
      },
      {
        "name": "Ethics in Technology (D333 / HUMN 1101)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Lower-division but WGU-specific; Sophia's Introduction to Ethics maps to Introduction to Humanities, not this. Easy, fast write-up course."
      },
      {
        "name": "Introduction to Computer Science (D684 / ICSC 2211)",
        "credits": 4,
        "category": "core"
      },
      {
        "name": "Network and Security - Foundations (D315 / ITEC 2112)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "Data Management - Applications (D427 / ITEC 2117)",
        "credits": 4,
        "category": "core",
        "notes": "SQL-heavy performance assessment; no outside equivalent."
      },
      {
        "name": "Version Control (D197 / ITSW 2110)",
        "credits": 1,
        "category": "core",
        "notes": "1 CU, Git basics. Realistically a 1-2 day course — knock it out first for momentum."
      },
      {
        "name": "Practical Applications of Prompt (D685 / ICSC 2212)",
        "credits": 2,
        "category": "core",
        "notes": "2 CU prompt-engineering course. Very fast, often a weekend."
      },
      {
        "name": "Scripting and Programming - Applications (C867 / ITSW 2130)",
        "credits": 4,
        "category": "core",
        "notes": "C++ performance assessment."
      },
      {
        "name": "Fundamentals of Information Security (D430 / ITAS 2110)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "Operating Systems for Computer Scientists (D686 / ITEC 2212)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "Data Structures and Algorithms I (C949 / ICSC 2100)",
        "credits": 4,
        "category": "core",
        "notes": "Python. Lower-division CCN, but no verified current outside pathway."
      },
      {
        "name": "Business of IT - Applications (D336 / ITEC 2113)",
        "credits": 4,
        "category": "core",
        "notes": "Includes the ITIL 4 Foundation certification exam — externally scheduled with a third-party vendor."
      },
      {
        "name": "Software Engineering (D284 / ITSW 2226)",
        "credits": 4,
        "category": "core"
      },
      {
        "name": "Computer Architecture (C952 / ICSC 3120)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Java Fundamentals (D286 / ITSW 3172)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Start of the four-course Java sequence; must all be done at WGU."
      },
      {
        "name": "Java Frameworks (D287 / ITSW 3173)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Back-End Programming (D288 / ITSW 3175)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Advanced Java (D387 / ITSW 3024)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Linux Foundations (D281 / ITEC 3004)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Includes the Linux Essentials certification exam — externally scheduled."
      },
      {
        "name": "Data Structures and Algorithms II (C950 / ICSC 3100)",
        "credits": 4,
        "category": "upper-division",
        "notes": "Notorious WGUPS routing performance assessment. Plan 3-6 weeks; evaluator revisions are common."
      },
      {
        "name": "Software Design and Quality Assurance (D480 / ITSW 3151)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Introduction to AI for Computer Scientists (D429 / ICSC 3111)",
        "credits": 2,
        "category": "upper-division"
      },
      {
        "name": "Artificial Intelligence Optimization for Computer Scientists (D682 / ICSC 3112)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Advanced AI and ML (D683 / ICSC 3113)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Computer Science Project Development with a Team (D687 / ICSC 3131)",
        "credits": 3,
        "category": "capstone",
        "notes": "Capstone. Builds on a prior course's coding project; three artifacts including a business proposal and technical report. Artifacts are peer-reviewed by team members before submission — the one place in the degree where your pace depends on other people."
      }
    ],
    "speedRunNotes": "Do the transfer work BEFORE you enroll. WGU's own transfer page states it \"will not award transfer credit after a student has begun their program.\" Every Sophia course must be finished and the official transcript delivered before your start date, or those CUs are gone permanently. One Sophia month ($99) comfortably covers 3-4 of the eight listed courses; two months clears all eight for ~$200 and roughly 24 CUs.\n\nGenuinely fast at WGU: Version Control (D197, 1 CU, a day or two), Practical Applications of Prompt (D685, 2 CU, a weekend), Ethics in Technology (D333), Introduction to Systems Thinking (D459), and Introduction to AI for Computer Scientists (D429, 2 CU). Front-load these to bank CUs early and satisfy the 12-CU/term minimum fast.\n\nThe real cost centers are math and algorithms. Discrete Mathematics II (C960) is the program's most notorious course; Discrete Mathematics I (C959), Calculus I (C958), and Data Structures and Algorithms II (C950) are close behind. Budget 4-8 weeks for C960 alone. If you have not done proof-based math recently, pre-study calculus and discrete math on Khan Academy or OpenStax during your Sophia months — it costs nothing and it is where the timeline actually gets decided.\n\nAssessment mechanics matter for pacing. Objective assessments (multiple choice, drag-and-drop, case study) are taken online with a live remote proctor and must be scheduled — book them early, since slots are not always same-day. Performance assessments (C867 C++, D427 SQL, C950 WGUPS routing, D687 capstone) go to a human evaluator queue; turnaround is typically 24-72 hours and revision requests are routine. Submit PAs before weekends and always have a second course in flight so you are never idle waiting on an evaluator.\n\nThe Java block (D286 → D287 → D288 → D387) is four sequential upper-division courses that must all be done at WGU. Doing Sophia's Introduction to Java Programming first (which also clears D278) gives you a running start on the whole sequence.\n\nTwo certification exams — ITIL 4 Foundation (inside D336) and Linux Essentials (inside D281) — are scheduled with outside vendors. They are not blockers, but they are calendar items you cannot complete on impulse at 2am like a WGU assessment.\n\nCost math: at 24 CUs transferred you owe 93 CUs at WGU. A very aggressive student clearing ~30 CUs per term finishes in about 3 terms (~$12,975 tuition + $600 fees); a realistic strong pace is 4 terms (~$17,300). Because tuition is flat per term, every extra course you finish in a term is free — the entire strategy is maximizing throughput inside each 6-month window, not minimizing courses.",
    "admissionGate": "Beyond a high school diploma you must show either college coursework with a 2.25+ GPA plus verifiable completion of precalculus with a C or better, or a 2.75+ high school GPA plus precalculus (or higher) with a B or better. WGU Academy offers a precalculus course for about $25 if you need it.",
    "sources": [
      "https://www.wgu.edu/online-it-degrees/computer-science.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/information-technology/BSCS.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2025/catalog-january2025.pdf",
      "https://www.wgu.edu/online-it-degrees.html",
      "https://www.wgu.edu/admissions/transfers/transfer-to-wgu.html",
      "https://wgucollegeofinformationtechnology.sophia.org/",
      "https://www.wgu.edu/online-it-degrees/computer-science/program-guide.html",
      "https://www.wgu.edu/financial-aid-tuition.html"
    ]
  },
  {
    "id": "information-technology",
    "name": "Information Technology – B.S.",
    "shortName": "IT",
    "college": "School of Technology",
    "url": "https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program.html",
    "tagline": "The cert-stacking generalist degree — cheapest tuition in the School of Technology and twelve industry certifications baked into the coursework.",
    "description": "WGU's broadest entry-level IT degree, built for people with little or no technical background who want to break into the field. The 35-course, 110-CU path covers IT fundamentals, networking, security, cloud, data management, Python automation, project management, and AI prompting — and embeds twelve industry certifications (CompTIA A+, Network+, Security+, Project+, Cloud+, AWS Cloud Practitioner, ITIL 4 Foundation, LPI Linux Essentials, plus four CompTIA stackables) whose exam costs are included in tuition. Notably, the current catalog version has no capstone course, which removes the single slowest requirement most WGU bachelor's programs carry.",
    "totalCUs": 110,
    "courseCount": 35,
    "tuitionPerTerm": 3835,
    "resourceFeePerTerm": 200,
    "certifications": [
      "CompTIA A+",
      "CompTIA Network+",
      "CompTIA Security+",
      "CompTIA Project+",
      "CompTIA Cloud+",
      "CompTIA IT Operations Specialist (stackable)",
      "CompTIA Secure Infrastructure Specialist (stackable)",
      "CompTIA Cloud Administration Professional (stackable)",
      "CompTIA Secure Cloud Professional (stackable)",
      "AWS Certified Cloud Practitioner",
      "ITIL 4 Foundation",
      "LPI Linux Essentials"
    ],
    "careers": [
      "IT Project Manager",
      "Systems Analyst",
      "Information Security Analyst",
      "Technical Business Analyst",
      "DevOps Associate"
    ],
    "transferCourses": [
      {
        "name": "Introduction to Information Technology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to IT (E004 / ITEC 2012, 3 CU)",
        "time": "1 week",
        "notes": "Sophia SOPH-0023. Listed on the official WGU College of IT Sophia pathway. Lower division, so unaffected by the March 2026 rule."
      },
      {
        "name": "Introduction to Relational Databases",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Data Management - Foundations (D426 / ITEC 2116, 3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0047. Does NOT cover Data Management - Applications (D427) — that one must be done at WGU."
      },
      {
        "name": "Project Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business of IT - Project Management (D324 / ITEC 2109, 4 CU)",
        "time": "1 week",
        "notes": "Sophia SOPH-0013. Waives a 4-CU WGU course for a 3-credit Sophia course. Skipping it also skips the CompTIA Project+ voucher, so take it at WGU if you want that cert."
      },
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Successful Self-Expression (D270 / ENGL 1712, 3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0015. Critical: English Composition II (SOPH-0030) is explicitly EXCLUDED for BS Information Technology on the official pathway — take Composition I, not II."
      },
      {
        "name": "Critical Thinking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Critical Thinking: Reason and Evidence (D265 / PHIL 1020, 3 CU)",
        "time": "1 week",
        "notes": "Sophia SOPH-0065. One of the fastest courses in the Sophia catalog."
      },
      {
        "name": "College Algebra",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Algebra (C957 / MATH 1200, 3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0001. Precalculus (SOPH-0069) also maps here if you prefer."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Probability and Statistics (C955 / MATH 1101, 3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0005. Study.com also publishes an official MATH 1101 equivalency guide if you prefer video lessons."
      },
      {
        "name": "Introduction to Ethics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Global Arts and Humanities (D198 / HUMN 1020, 3 CU)",
        "time": "1 week",
        "notes": "Sophia SOPH-0020. Art History I (SOPH-0006), Visual Communications (SOPH-0009), Art History II, Approaches to Studying Religions, and Ancient Greek Philosophers all map here too — pick whichever you'll finish fastest."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Health, Fitness, and Wellness (C458 / HLTH 1010, 4 CU)",
        "time": "1 week",
        "notes": "Sophia SOPH-0063. Excellent value — a 3-credit Sophia course waives a 4-CU WGU course."
      },
      {
        "name": "Introduction to Chemistry Lab",
        "source": "sophia",
        "credits": 1,
        "wguEquivalent": "Natural Science Lab (C683 / SCIE 1001, 2 CU)",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0070. Human Biology Lab (SOPH-0067) works identically. BSIT has no science lecture requirement, so the 1-credit lab alone clears the 2-CU WGU course — the single best credit-per-hour trade in the whole plan."
      }
    ],
    "wguCourses": [
      {
        "name": "Influential Communication through Visual Design and Storytelling (D246 / COMM 1721)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "New-catalog gen ed with no published Sophia or Study.com equivalency."
      },
      {
        "name": "Technology and Ethics: Emerging Trends and Society (D773 / HUMN 1110)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "New-catalog gen ed, no outside equivalency published."
      },
      {
        "name": "Introduction to Systems Thinking and Applications (D459 / PHIL 1032)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "No published outside equivalency."
      },
      {
        "name": "American Politics and the US Constitution (C963 / POLS 1030)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "No Sophia equivalency on either the IT or Business pathway. CLEP American Government is the likely route but is unverified — see confidence notes."
      },
      {
        "name": "Technical Communication (D339 / COMM 1115)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "Writing-heavy performance assessment."
      },
      {
        "name": "Business Productivity Software (E005 / ITEC 2106)",
        "credits": 3,
        "category": "core",
        "notes": "New course code; no outside equivalency."
      },
      {
        "name": "Business of IT - Applications (D336 / ITEC 2113)",
        "credits": 4,
        "category": "core",
        "notes": "ITIL 4 Foundation exam is embedded here."
      },
      {
        "name": "Practical Applications of Prompt (D685 / ICSC 2212)",
        "credits": 2,
        "category": "core",
        "notes": "Smallest course in the program. WGU's own guidelines accept any 2-unit general AI / prompt engineering course for this code, but no Sophia or Study.com course is on the published IT pathway."
      },
      {
        "name": "IT Foundations (D316 / ITEC 2013)",
        "credits": 4,
        "category": "core",
        "notes": "CompTIA A+ Core 1. Third-party proctored exam."
      },
      {
        "name": "Digital Transformation in the Enterprise (E006 / ITEC 2030)",
        "credits": 2,
        "category": "core"
      },
      {
        "name": "Fundamentals of Spreadsheets and Data Presentations (D388 / BUS 2250)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "Agile Methodology (E007 / ITEC 2201)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "IT Applications (D317 / ITEC 2023)",
        "credits": 4,
        "category": "core",
        "notes": "CompTIA A+ Core 2. Third-party proctored exam."
      },
      {
        "name": "Network and Security - Foundations (D315 / ITEC 2112)",
        "credits": 3,
        "category": "core",
        "notes": "Prerequisite for Networks (D325)."
      },
      {
        "name": "Network and Security - Applications (D329 / ITEC 2112)",
        "credits": 4,
        "category": "core",
        "notes": "CompTIA Security+. Third-party proctored exam and one of the two hardest courses in the program."
      },
      {
        "name": "Data Management - Applications (D427 / ITEC 2117)",
        "credits": 4,
        "category": "core",
        "notes": "Hands-on SQL; builds on D426. Not transferable even though it is lower division — no published equivalency."
      },
      {
        "name": "Cloud Foundations (D282 / ITEC 2119)",
        "credits": 3,
        "category": "core",
        "notes": "AWS Certified Cloud Practitioner exam."
      },
      {
        "name": "Linux Foundations (D281 / ITEC 3004)",
        "credits": 3,
        "category": "upper-division",
        "notes": "LPI Linux Essentials. Upper division — must be earned at WGU under the March 2026 rule."
      },
      {
        "name": "Technology Management (E008 / BUIT 3010)",
        "credits": 3,
        "category": "upper-division"
      },
      {
        "name": "Web Design Fundamentals (E009 / ITEC 3121)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Do not confuse with WGU's Web Development Foundations (D276), which is the course Sophia's Introduction to Web Development actually maps to — that is a different program's course."
      },
      {
        "name": "Cloud Applications (D318 / ITEC 3601)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CompTIA Cloud+. Third-party proctored exam."
      },
      {
        "name": "Networks (D325 / ITEC 3602)",
        "credits": 4,
        "category": "upper-division",
        "notes": "CompTIA Network+. Third-party proctored exam; commonly the slowest single course in the degree."
      },
      {
        "name": "Foundations of Programming (Python) (E010 / ITEC 3102)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Upper division. Sophia's Introduction to Python Programming maps to a different WGU course (D335) used by CS/SE programs, not this one."
      },
      {
        "name": "Technology Governance (D822 / ITEC 3011)",
        "credits": 3,
        "category": "upper-division",
        "notes": "COBIT/ITIL/CMMI/ISO frameworks; performance-assessment based."
      },
      {
        "name": "Python for IT Automation (D522 / ITEC 3100)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Final course on the standard path."
      }
    ],
    "speedRunNotes": "NO CAPSTONE. The current catalog (BSIT 202604, published 11/20/2025) lists 35 courses and zero capstone — verified by summing the standard path myself (110 CUs exactly, matching the advertised total). This is the single biggest structural advantage BSIT has over almost every other WGU bachelor's: no multi-month capstone project gating graduation.\n\nWHAT'S GENUINELY FAST. The ten Sophia courses above clear 31 CUs (28% of the degree) for roughly $200-300 total and 5-8 weeks of real work at Sophia's two-active-courses-at-a-time limit. Sophia has no proctored exams at all, so the only pacing constraint is the manually-graded Touchstone assignments in English Composition I. Best individual trades: Introduction to Chemistry Lab (1 Sophia credit clears a 2-CU WGU course in under a week, and BSIT has no science lecture requirement to pair with it), Introduction to Nutrition (3 credits clears 4 CUs), and Project Management (3 credits clears 4 CUs).\n\nTHE CERTIFICATION LEVER — the real accelerator for this degree. WGU's own published transfer guidelines map industry certifications directly onto BSIT course codes: CompTIA A+ satisfies both IT Foundations (D316, 4 CU) and IT Applications (D317, 4 CU); Security+/PenTest+/CySA+/SecurityX/CEH/CCNA satisfies Network and Security - Foundations (D315, 3 CU) and Network and Security - Applications (D329, 4 CU). All four are lower division, so they survive the March 2026 restriction. If you already hold A+ and Security+, you can walk in with 15 additional CUs waived on top of the Sophia 31 — a 46-CU head start, leaving only 64 CUs to complete. Anyone already working a help-desk or NOC job should price out taking A+ and Security+ before enrolling; it is the highest-leverage move available in this program. Note that Linux Foundations (D281) and Networks (D325) are upper division, so Linux+ and Network+ will NOT transfer in for BSIT even though WGU accepts them for its associate program.\n\nTHE HARD COURSES. Networks (D325, Network+) and Network and Security - Applications (D329, Security+) are the two that break schedules — both are real vendor certification exams, not WGU-authored tests, and both routinely take motivated students 4-8 weeks each from a cold start. Cloud Applications (D318, Cloud+) is a close third. Data Management - Applications (D427) is hands-on SQL and is slower than its 4 CUs suggest. By contrast, Digital Transformation in the Enterprise (2 CU), Practical Applications of Prompt (2 CU), and Agile Methodology (3 CU) are days, not weeks.\n\nSEQUENCING. Network and Security - Foundations (D315) is a stated prerequisite for Networks (D325) — start D315 in week one of your first term so the Network+ attempt isn't stuck behind it.\n\nREALISTIC MATH. After the Sophia 31, you have 79 CUs left at WGU. Two 6-month terms ($3,835 + $200 each = $8,070) is the aggressive but achievable target for a focused full-time student, and it is the plan most accelerators should aim at; three terms ($12,105) is comfortable. One term is not realistic here — eight separate third-party certification exams cannot be compressed that far. Add ~$200-300 of Sophia and a $65 application fee (routinely waived) and an aggressive run lands near $8,300 all-in.\n\nTIMING RULE THAT KILLS RUNS. WGU does not award transfer credit after your initial term start date — the cutoff is the term start, not the application date. Finish every Sophia course and get the official transcript delivered BEFORE your term begins, or the credit is simply lost. WGU starts a new term on the first of every month, so you can time enrollment tightly around your transcript delivery.\n\nSAYLOR IS NOT USEFUL HERE. Saylor's surviving credit-bearing CS courses (CS302 Software Engineering, CS402 Computer Communications & Networks) have no published WGU pathway into BSIT, and the nearest WGU course (Networks, D325) is upper division and therefore off-limits. Skip Saylor for this program.",
    "admissionGate": "WGU's IT bachelor's programs require more than a high school diploma. You must show one of: college coursework with a 2.25+ GPA; an existing associate or bachelor's degree; a transferable IT certification; a 2.75+ high school GPA; or prior IT coursework at the 300 level or above.",
    "sources": [
      "https://www.wgu.edu/online-it-degrees/information-technology-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/information-technology/BSIT.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2026/catalog-august-2026.pdf",
      "https://wgucollegeofinformationtechnology.sophia.org/",
      "https://wgucollegeofbusiness.sophia.org/",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/military/ASCSIATransferGuidelines.pdf",
      "https://study.com/college/western-governors-university/degrees/wgu-bachelor-of-science-in-information-technology.html",
      "https://study.com/college/school/western-governors-university/studycom-courses-that-transfer-to-wgu.html",
      "https://partners.wgu.edu/general-transfer-guidelines",
      "https://www.wgu.edu/about/institutional-catalog.html"
    ]
  },
  {
    "id": "healthcare-administration",
    "name": "Healthcare Administration – B.S.",
    "shortName": "Healthcare Administration",
    "college": "School of Business",
    "url": "https://www.wgu.edu/online-business-degrees/healthcare-administration-bachelors-program.html",
    "tagline": "The cheapest, cleanest health-sector speed-run at WGU — zero clinicals, zero licensure, and 60% of it can be bought outside for the price of a couple of Sophia months.",
    "description": "WGU's B.S. in Healthcare Administration is a 110-CU, 34-course business degree aimed at non-clinical management roles in hospitals, clinics, skilled nursing facilities, insurers, and community health organizations. It pairs a standard WGU business core (management, accounting, finance, marketing, operations) with six healthcare-specific courses covering policy and governance, evidence-based administration, emergency planning, and emerging industry trends, capped by a project-based capstone. Because it lives in the School of Business rather than the Leavitt School of Health, it costs $3,830/term instead of the $4,210/term charged for B.S. Health Science, Public Health, or Health Information Management — and unlike those, it carries no clinical or licensure requirement. Students also earn three internal WGU certificates along the way (Healthcare Administration, Strategic Thinking &amp; Innovation, Leadership).",
    "totalCUs": 110,
    "courseCount": 34,
    "tuitionPerTerm": 3830,
    "resourceFeePerTerm": 200,
    "certifications": [],
    "careers": [
      "Medical and Health Services Manager",
      "Clinic Manager",
      "Hospital Administrator",
      "Quality Improvement Coordinator",
      "Healthcare Consultant"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Composition: Writing with a Strategy (ENGL 1711 / D269) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0015. Touchstone-graded writing assignments; grading turnaround is the bottleneck, not the content. Study.com English 104 (SDCM-0057) or English 204 also works."
      },
      {
        "name": "Public Speaking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Communication: Connecting with Others (COMM 3015 / D268) — 3 CU",
        "time": "5-8 days",
        "notes": "Sophia SOPH-0024. Requires recorded speech submissions, so it is the slowest Sophia gen-ed here. Alt: Study.com Communications 101 (SDCM-0055). Note this clears a 3000-level WGU course — the official BSHA pathway explicitly permits it, so do NOT assume CCN level predicts transferability."
      },
      {
        "name": "U.S. Government",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "American Politics and the US Constitution (POLS 1030 / C963) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0071. Alt: Study.com Political Science 102 (SDCM-0042)."
      },
      {
        "name": "Lifespan Development",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Human Growth and Development (PSYC 1020 / D202) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0078. Alt: Study.com Psychology 103 (SDCM-0019) or Psychology 107 (SDCM-0044)."
      },
      {
        "name": "Introduction to Sociology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Sociology (SOCG 1010 / C273) — 3 CU",
        "time": "2-4 days",
        "notes": "Sophia SOPH-0051. One of the fastest courses in the whole plan. Alt: Study.com Sociology 101 (SDCM-0048)."
      },
      {
        "name": "Critical Thinking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Critical Thinking: Reason and Evidence (PHIL 1020 / D265) — 3 CU",
        "time": "2-4 days",
        "notes": "Sophia SOPH-0065. Free alternative: Saylor PHIL102 (SAYA-0045), $5 proctored exam. Also Study.com Humanities 201 (SDCM-0243)."
      },
      {
        "name": "College Algebra",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Algebra (MATH 1200 / C957) — 3 CU",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0001. Sophia also accepts Calculus I (SOPH-0060) or Precalculus (SOPH-0069) for this slot. Study.com alts: Math 101, 103, 104, 105, or 301."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Applied Healthcare Statistics (MATH 1100 / C784) — 4 CU",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0005. High-value trade: a 3-credit outside course clears a 4-CU WGU course, and C784 is one of the harder proctored objective assessments in the program. Alt: Study.com Statistics 101 (SDCM-0068)."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Health, Fitness, and Wellness (HLTH 1010 / C458) — 4 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0063. Second 3-for-4 CU trade. Sophia's own Health, Fitness, and Wellness (SOPH-0080) also maps. Alt: Study.com Health 101 or Nutrition 101."
      },
      {
        "name": "Environmental Science",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Integrated Physical Sciences (SCIE 1020 / C165) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0016. Widest alt list of any slot: Human Biology, Intro to Chemistry, Microbiology, A&P I/II, Intro to Physics all map. Free alternative: Saylor BIO101 (SAYA-0019) or CHEM101 (SAYA-0028)."
      },
      {
        "name": "Macroeconomics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Principles of Economics (ECON 2000 / D089) — 3 CU",
        "time": "4-7 days",
        "notes": "Sophia SOPH-0012; Microeconomics (SOPH-0011) works equally. Free alternative: Saylor ECON101/ECON102."
      },
      {
        "name": "Introduction to Business",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Fundamentals for Success in Business (BUS 2010 / D072) — 3 CU",
        "time": "2-4 days",
        "notes": "Sophia SOPH-0014. Free alternative: Saylor BUS101 (SAYA-0020). Study.com Business 100 or 121."
      },
      {
        "name": "Principles of Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Principles of Management (BUS 2301 / C483) — 4 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0054. Third 3-for-4 CU trade. Sophia Principles of Leadership (SOPH-0096) also maps. Free alternative: Saylor BUS208."
      },
      {
        "name": "Principles of Marketing",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Concepts in Marketing, Sales, and Customer Contact (BUS 2050 / D077) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0085. Free alternative: Saylor BUS203. Study.com Business 102."
      },
      {
        "name": "Organizational Behavior",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Organizational Behavior (MGMT 3000 / C715) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0083. Another 3000-level WGU course that the official pathway still allows to transfer. Free alternative: Saylor BUS209."
      },
      {
        "name": "Workplace Communication",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Business Communication (BUS 2600 / C716) — 3 CU",
        "time": "3-5 days",
        "notes": "Sophia SOPH-0034; Sophia Business Communication (SOPH-0059) also maps. Free alternative: Saylor BUS210."
      },
      {
        "name": "Managerial Accounting",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Business Accounting (ACCT 2350 / D774) — 3 CU",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0079 — note it is Managerial, not Financial, Accounting that WGU maps here. Free alternative: Saylor BUS105. Study.com Accounting 102, 301, or 303."
      },
      {
        "name": "Principles of Finance",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Introduction to Business Finance (FINC 2010 / D775) — 3 CU",
        "time": "1-2 weeks",
        "notes": "Sophia SOPH-0033. Not available on the Saylor BSHA pathway. Study.com alts: Finance 101, 104, or 301."
      },
      {
        "name": "Project Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "Project Management (MGMT 3400 / C722) — 3 CU",
        "time": "4-7 days",
        "notes": "Sophia SOPH-0013. WGU requires this one to have been completed within the past 5 years. Free alternative: Saylor BUS402. Study.com Business 311 or 112."
      },
      {
        "name": "Business 315: Logistics & Supply Chain Management",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Operations and Supply Chain Management (MGMT 4100 / C720) — 3 CU",
        "time": "2-3 weeks",
        "notes": "Study.com SDCM-0086. No Sophia equivalent exists. This is a 300-level Study.com course, so it needs College Saver Pro ($235/mo) rather than the $95 plan. Free alternative: Saylor BUS300 (SAYA-0038) — take the Saylor route unless you also need Communications 301."
      },
      {
        "name": "Communications 301: Diversity and Intercultural Communication",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "Emotional and Cultural Intelligence (BUS 2090 / D082) — 3 CU",
        "time": "2-3 weeks",
        "notes": "Study.com SDCM-0187. This is the ONLY outside course on any current WGU pathway that clears D082 — Sophia and Saylor both have blanks here. Requires College Saver Pro ($235/mo). If you don't want to pay for Pro, just do D082 at WGU; it's a light 3-CU course with no proctored exam."
      }
    ],
    "wguCourses": [
      {
        "name": "Values-Based Leadership (MGMT 2700 / D253)",
        "credits": 3,
        "category": "core",
        "notes": "Listed as explicitly non-transferable on all three official pathway agreements despite being a 2000-level course. Reflection-and-scenario performance assessment; fast (2-4 days) but must be done in residence."
      },
      {
        "name": "Fundamentals of Spreadsheets and Data Presentations (BUS 2250 / D388)",
        "credits": 3,
        "category": "core",
        "notes": "Blank on every provider's pathway — no outside articulation exists. Excel-based performance assessment. Trivial if you already use Excel; budget 1-3 days."
      },
      {
        "name": "Innovative and Strategic Thinking (BUS 2080 / D081)",
        "credits": 3,
        "category": "core",
        "notes": "Blank on all three pathways. Written performance assessment. Feeds the Strategic Thinking & Innovation certificate."
      },
      {
        "name": "Healthcare Administration Evolution, Systems, and Leadership (HCA 2100 / D545)",
        "credits": 3,
        "category": "core",
        "notes": "First of the six healthcare-specific courses. Lower-division by CCN but on the non-transferable list — WGU reserves all HCA-prefixed content. Good first WGU course; it front-loads vocabulary the later HCA courses assume."
      },
      {
        "name": "Healthcare Leadership and Community Engagement (HCA 3130 / D776)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Performance assessment on community needs analysis and strategic partnerships. Non-transferable."
      },
      {
        "name": "Healthcare Policy and Governance (HCA 3100 / D546)",
        "credits": 4,
        "category": "upper-division",
        "notes": "One of the four heavier 4-CU HCA courses. Regulatory/legal framework analysis plus a compliant-solution proposal. Non-transferable."
      },
      {
        "name": "Evidence-Based Healthcare Administration (HCA 3110 / D547)",
        "credits": 4,
        "category": "upper-division",
        "notes": "Data analytics, research paradigms, and EBP decision-making. Widely reported as the most demanding of the HCA block for students without a stats background — another reason not to skip actually learning the statistics you transferred in."
      },
      {
        "name": "Emergency Management and Planning in Healthcare (HCA 3120 / D548)",
        "credits": 4,
        "category": "upper-division",
        "notes": "Emergency response plan development performance assessment. Non-transferable."
      },
      {
        "name": "Exploring Emerging Trends in Healthcare Administration (HCA 5100 / D549)",
        "credits": 4,
        "category": "upper-division",
        "notes": "Trend analysis plus an implementation plan. Effectively a pre-capstone; doing it immediately before D580 lets you reuse research."
      },
      {
        "name": "Professional Practice Experience I: Technical (HLTH 4905 / D255)",
        "credits": 3,
        "category": "upper-division",
        "notes": "42 structured EHRGo electronic-health-record activities logging 40 PPE hours. Fully virtual — no clinical site, no preceptor, no external scheduling — but it is clock-time work you cannot test out of, and the catalog flags it as eligible for an In Progress grade, meaning WGU expects it to spill across terms. Start it in week one of your first term."
      },
      {
        "name": "Change Management (MGMT 4400 / C721)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Non-transferable on all three pathways. Written performance assessment on change theory and implementation."
      },
      {
        "name": "Strategic Training and Development (HRM 3510 / D353)",
        "credits": 3,
        "category": "upper-division",
        "notes": "Blank on all three pathways. Training-needs analysis performance assessment."
      },
      {
        "name": "Healthcare Administration Capstone (HCA 5110 / D580)",
        "credits": 4,
        "category": "capstone",
        "notes": "Multi-task, gated project: Task 1 topic/project approval by your instructor, then Task 2 proposal, then Task 3 implementation plan. Each gate has evaluator turnaround, so this is the single hardest course to compress — plan 3-6 weeks even if you write fast."
      }
    ],
    "speedRunNotes": "THE MATH. 110 CU total. The official Study.com pathway agreement (Catalog 09-2025) clears 66 CU across 21 outside courses; Sophia's clears 60 CU across 19; Saylor's clears 34 CU across 11 for essentially free. 66 CU is the hard ceiling — 44 CU (13 courses) are marked non-transferable on every agreement. Neither cap binds: 75% max transfer would be 82.5 CU, and 25% residency is only 27.5 CU, so you are limited purely by what articulations exist.\n\nTHE CHEAPEST OPTIMAL STACK. Sophia ($99/mo, 2 active at a time, zero proctoring) covers 19 of the 21 transferable courses = 60 CU. A focused person clears that in 6-10 weeks; aggressive accelerators do it in 4. That leaves exactly two courses Sophia cannot touch: Operations and Supply Chain Management and Emotional and Cultural Intelligence. Take Saylor BUS300 (free + $5 proctored exam) for the first. For the second, Study.com Communications 301 is the only articulation in existence and it sits behind College Saver Pro at $235/mo — so unless you're batching other Study.com courses that month, just do D082 at WGU and transfer 63 CU instead of 66. Realistic outside spend: $200-400 total.\n\nTHEN THE WGU TERM. 44 CU remaining. WGU's minimum is 12 CU/term, but flat-rate tuition means a determined full-timer can finish all 44 in one 6-month term for $4,030 ($3,830 + $200 resource fee), plus a one-time $65 application fee. Two terms ($8,060) is the safe plan. Either way this is one of the cheapest legitimate bachelor's degrees in the country.\n\nWHAT'S GENUINELY FAST. The gen-ed block is trivial outside. Three slots are asymmetric wins where a 3-credit outside course clears a 4-CU WGU course: Sophia Intro to Statistics → Applied Healthcare Statistics (4 CU), Sophia Intro to Nutrition → Health, Fitness, and Wellness (4 CU), Sophia Principles of Management → Principles of Management (4 CU). That's 3 free CU. Inside WGU, D253, D388, D081 and D545 are light 3-CU performance assessments you can stack four-deep.\n\nWHAT'S ACTUALLY HARD. The six HCA courses are 22 CU of writing-heavy performance assessments, and D547 Evidence-Based Healthcare Administration (analytics + research methods) is the usual wall. D255 PPE I is 40 logged hours of EHRGo activities that cannot be accelerated by knowing the material — start it day one. D580 Capstone is gated: instructor must approve your project topic before you can start the proposal, and the proposal before the implementation plan, so evaluator turnaround serializes 3-6 weeks you cannot parallelize.\n\nPROCTORING. WGU objective assessments are remotely proctored 24/7 through WGU's online proctoring service — you schedule them yourself, no test center, no fixed windows. Most of the remaining 13 WGU courses are evaluator-graded performance assessments (papers, plans, projects) rather than proctored exams, so evaluator turnaround (typically 1-3 days per submission, longer at term boundaries) is your real throughput limiter. Submit early and often; a revision request costs you a full turnaround cycle.\n\nTWO TRAPS. (1) Transfer credit is accepted ONLY before your first WGU term starts. Finish every outside course and get transcripts delivered before your start date or you eat the tuition. (2) Do not infer transferability from WGU course numbering. Organizational Behavior (MGMT 3000), Project Management (MGMT 3400), Intro to Communication (COMM 3015) and Operations & Supply Chain (MGMT 4100) are all 3000/4000-level yet still transfer under the current BSHA agreement, while Values-Based Leadership (MGMT 2700) and Fundamentals of Spreadsheets (BUS 2250) are 2000-level and do not. Only the program-specific pathway agreement is authoritative.\n\nPRICING QUIRK WORTH KNOWING. This degree is billed at School of Business rates ($3,830/term), not Leavitt School of Health rates ($4,210/term for B.S. Health Science, Public Health, or Health Information Management). Same industry, $380 less per term, and none of the health-school clinical baggage.\n\nCAREER CAVEAT. The degree itself requires no license, but two of the careers WGU markets do: Nursing Home Administrator requires state licensure (NAB exam plus a state-specific Administrator-in-Training program) that this degree does not confer. Plan for that separately if it's your target role.",
    "sources": [
      "https://www.wgu.edu/online-business-degrees/healthcare-administration-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/business/BSHA.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2026/catalog-august-2026.pdf",
      "https://www.wgu.edu/financial-aid-tuition/tuition-business-degrees.html",
      "https://www.wgu.edu/financial-aid-tuition.html",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSHA7112&collegeCode=BU&instId=796&programId=212",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSHA4429&collegeCode=BU&instId=678&programId=212",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSHA668&collegeCode=BU&instId=186&programId=212",
      "https://wgucollegeofbusiness.sophia.org/",
      "https://study.com/college/western-governors-university/degrees/healthcare-administration-bs-degree-plan-online-studycom-transfer-credits.html",
      "https://cm.wgu.edu/t5/WGU-Student-Policy-Handbook/Transfer-Credit-for-CLEP-DANTES-AP-and-IB-Examinations/ta-p/28"
    ]
  },
  {
    "id": "software-engineering",
    "name": "Software Engineering – B.S.",
    "shortName": "Software Engineering",
    "college": "School of Technology",
    "url": "https://www.wgu.edu/online-it-degrees/software-engineering-bachelors-program.html",
    "tagline": "The best speed-run in WGU's tech lineup if you can already code — but the new 10-2026 catalog bolted on calculus, chemistry and physics, so bring a math brain.",
    "description": "WGU's B.S. Software Engineering is a 120-CU, 39-course Java-focused degree covering full-stack development, data structures, software design and QA, security, Agile, and cloud. As of the October 2026 catalog it is noticeably more engineering-flavored than its predecessor, adding Calculus I, Applied Discrete Mathematics, Linear Algebra, General Chemistry I, and General Physics I. Roughly 57 CUs can be cleared outside WGU through Sophia, Study.com and Saylor before you ever start a term, leaving 63 CUs to finish in residency.",
    "totalCUs": 119,
    "courseCount": 39,
    "tuitionPerTerm": 4125,
    "resourceFeePerTerm": 200,
    "certifications": [
      "AWS Certified Cloud Practitioner",
      "CompTIA Project+",
      "ITIL 4 Foundation"
    ],
    "careers": [
      "Software Engineer",
      "Full-Stack Developer",
      "Application Developer",
      "QA Engineer",
      "DevOps Engineer"
    ],
    "transferCourses": [
      {
        "name": "English Composition I",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D270 Composition: Successful Self-Expression (3 CU)",
        "time": "1 week",
        "notes": "Sophia ENG1001 / SOPH-0015. ENG1002, ENG1010 and ENG1020 also work per the official pathway."
      },
      {
        "name": "Business Communication",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D339 Technical Communication (3 CU)",
        "time": "1 week",
        "notes": "Sophia BUSI1025 / SOPH-0059. Free alternative: Saylor BUS210 (SAYA-0027)."
      },
      {
        "name": "U.S. Government",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C963 American Politics and the US Constitution (3 CU)",
        "time": "1 week",
        "notes": "Sophia HIST1020 / SOPH-0071. Note this course sits in Sophia's 'not formally confirmed' table on the College of IT page but IS listed on WGU's official BSSWE pathway — trust the WGU pathway."
      },
      {
        "name": "Introduction to Psychology",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D199 Introduction to Physical and Human Geography (3 CU)",
        "time": "1 week",
        "notes": "Sophia PSYC1010 / SOPH-0048. Any of Criminal Justice, Macro/Microeconomics, US History I or II, or Sociology also satisfies it. Free alternative: Saylor GEOG101, PSYCH101, ECON101 or ECON102."
      },
      {
        "name": "Introduction to Statistics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C955 Applied Probability and Statistics (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia STAT1001 / SOPH-0005. Free alternative: Saylor BUS204 (SAYA-0037)."
      },
      {
        "name": "Calculus I",
        "source": "sophia",
        "credits": 4,
        "wguEquivalent": "E067 Calculus I (4 CU)",
        "time": "3-4 weeks",
        "notes": "Sophia MATH1040 / SOPH-0060. The single longest outside course. WGU requires it be completed within the past 5 years and it CANNOT be cleared by holding an associate/bachelor's degree."
      },
      {
        "name": "Introduction to Nutrition",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "C458 Health, Fitness, and Wellness (4 CU)",
        "time": "1 week",
        "notes": "Sophia HLTH1010 / SOPH-0063. Sophia's own Health, Fitness and Wellness course (HLTH1011 / SOPH-0080) also works. Clears a 4 CU course with a 3-credit transfer — best CU-per-hour trade in the whole plan."
      },
      {
        "name": "Introduction to Chemistry",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D843 General Chemistry I (3 CU)",
        "time": "2 weeks",
        "notes": "Sophia CHEM1001 / SOPH-0056. Free alternative: Saylor CHEM101 (SAYA-0028). New requirement in the 10-2026 catalog."
      },
      {
        "name": "Introduction to Physics",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D845 General Physics I (3 CU)",
        "time": "2 weeks",
        "notes": "Sophia SCIE1060 / SOPH-0095. Also on Sophia's 'not formally confirmed' table but explicitly listed on WGU's official BSSWE pathway. Does NOT clear the separate Physics I Lab for Programmers."
      },
      {
        "name": "Introduction to Relational Databases",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D426 Data Management - Foundations (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia CS1011 / SOPH-0047. IT coursework must be completed within 5 years of your start date."
      },
      {
        "name": "Introduction to Networking",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D315 Network and Security - Foundations (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia CS1015 / SOPH-0068. Free alternative: Saylor CS402 (SAYA-0016). Also clearable by an existing CompTIA Network+/Security+ or Cisco CCNA."
      },
      {
        "name": "Introduction to Python Programming",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "E066 Object Oriented Programming in Python (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia CS1100 / SOPH-0058. Sophia-ONLY — Study.com and Saylor have no articulation for this course, so do not skip Sophia."
      },
      {
        "name": "Introduction to Web Development",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D276 Web Development Foundations (3 CU)",
        "time": "1-2 weeks",
        "notes": "Sophia CS1005 / SOPH-0043. Also clearable by CIW Site Development Associate."
      },
      {
        "name": "Introduction to Java Programming",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D287 Java Frameworks (3 CU)",
        "time": "2 weeks",
        "notes": "Sophia CS1101 / SOPH-0062. HIGHEST-RISK ITEM: D287 carries CCN ITSW 3173, a 3000-level (upper-division) number, which is in tension with WGU's post-March-2026 rule that upper-division courses be completed at WGU. It is currently listed on all three official pathways, but treat it as the one most likely to be pulled. Study.com CS 115 is the backup."
      },
      {
        "name": "Principles of Management",
        "source": "sophia",
        "credits": 3,
        "wguEquivalent": "D370 IT Leadership Foundations (3 CU)",
        "time": "1 week",
        "notes": "Sophia BUSI1013 / SOPH-0054. Organizational Behavior (SOPH-0083) or Principles of Leadership (SOPH-0096) also work. Free alternative: Saylor BUS208 or BUS209. Also clearable by an existing PMI CAPM or PMP."
      },
      {
        "name": "Philosophy 104: Ethics",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "E068 Ethical Engineering (3 CU)",
        "time": "1-2 weeks",
        "notes": "Study.com SDCM-0265. Study.com-ONLY — Sophia and Saylor have no articulation for Ethical Engineering."
      },
      {
        "name": "Math 301: Linear Algebra",
        "source": "studycom",
        "credits": 3,
        "wguEquivalent": "E082 Linear Algebra for Engineers (3 CU)",
        "time": "3-4 weeks",
        "notes": "Study.com SDCM-0253. Study.com-ONLY. As a 300-level course it likely requires the College Saver Pro tier ($235/mo) rather than standard College Saver. Must be completed within the past 5 years."
      },
      {
        "name": "CS302: Software Engineering",
        "source": "saylor",
        "credits": 3,
        "wguEquivalent": "D284 Software Engineering (4 CU)",
        "time": "3-4 weeks",
        "notes": "Saylor SAYA-0018 — free coursework plus a $5 SmarterProctoring exam, and one of only two Saylor CS courses that kept its ACE recommendation. Clears a 4 CU WGU course with a 3-credit transfer. Backup: Study.com Computer Science 307 (SDCM-0220). Can alternatively be cleared by an existing Scrum.org PSM I, Scrum Alliance CSM, or PMI-ACP certification."
      }
    ],
    "wguCourses": [
      {
        "name": "Introduction to Systems Thinking and Applications (D459)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "No Sophia, Study.com or Saylor articulation exists. Self-paced; WGU estimates 30-40 hours of content."
      },
      {
        "name": "Applied Discrete Mathematics (E071)",
        "credits": 3,
        "category": "gen-ed",
        "notes": "New in the 10-2026 catalog. No provider articulation. Cannot be satisfied by holding a degree."
      },
      {
        "name": "Physics I Lab for Programmers (E073)",
        "credits": 1,
        "category": "gen-ed",
        "notes": "1 CU. No provider articulation — the Sophia/Saylor physics lecture course does not clear it."
      },
      {
        "name": "Introduction to Software Engineering (E063)",
        "credits": 3,
        "category": "core",
        "notes": "New course, term 1 of the standard path. No provider articulation."
      },
      {
        "name": "Mathematics for Programmers (E064)",
        "credits": 3,
        "category": "core",
        "notes": "Explicitly on WGU's NON-TRANSFERABLE list — cannot be cleared by transfer credit or by degree."
      },
      {
        "name": "Version Control (D197)",
        "credits": 1,
        "category": "core",
        "notes": "1 CU freebie. Git basics — often finished in a single day."
      },
      {
        "name": "JavaScript Programming (E065)",
        "credits": 3,
        "category": "core",
        "notes": "Renumbered to a 2000-level CCN in this catalog. Clearable by CIW JavaScript Specialist (1D0-735) if you already hold it."
      },
      {
        "name": "Front End Development (E070)",
        "credits": 3,
        "category": "core",
        "notes": "Carries the WGU Front-End Developer certificate. Clearable by CIW Advanced HTML5 and CSS3 Specialist."
      },
      {
        "name": "Foundations of UI/UX (E069)",
        "credits": 4,
        "category": "core",
        "notes": "Merges the old separate UI Design and UX Design courses. Performance-assessment heavy (wireframes, prototypes, usability testing)."
      },
      {
        "name": "Data Structures and Algorithms I (C949)",
        "credits": 4,
        "category": "core",
        "notes": "The hardest objective assessment in the WGU IT catalog. Big-O, trees, hash tables. Budget real time even if you are an experienced developer."
      },
      {
        "name": "Operating Systems for Computer Scientists (D686)",
        "credits": 3,
        "category": "core",
        "notes": "No provider articulation."
      },
      {
        "name": "Software Security and Testing (D385)",
        "credits": 3,
        "category": "core"
      },
      {
        "name": "Agile for Software Engineering (E074)",
        "credits": 3,
        "category": "core",
        "notes": "New in the 10-2026 catalog."
      },
      {
        "name": "Data for AI (E072)",
        "credits": 3,
        "category": "core",
        "notes": "New in the 10-2026 catalog. No provider articulation."
      },
      {
        "name": "Business of IT - Applications (D336)",
        "credits": 4,
        "category": "core",
        "notes": "Carries the ITIL 4 Foundation certification — a third-party PeopleCert exam. Instantly cleared if you already hold an active ITIL Foundations cert."
      },
      {
        "name": "Software Design and Quality Assurance (D480)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CCN ITSW 3151. Must be completed at WGU under the post-March-2026 rule."
      },
      {
        "name": "Back-End Programming (D288)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CCN ITSW 3175. Carries the WGU Back-End Developer certificate. Second Java course."
      },
      {
        "name": "Advanced Java (E155)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CCN ITSW 3327. Third Java course; combined with Java Frameworks and Back-End Programming this is where the degree actually gets hard."
      },
      {
        "name": "AWS Developer (D321)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CCN ITCL 3203. Carries the AWS Certified Developer – Associate credential, a genuine externally-proctored vendor exam."
      },
      {
        "name": "Special Topics in Software Engineering and AI (E075)",
        "credits": 3,
        "category": "upper-division",
        "notes": "CCN ITSW 3326. Explicitly on WGU's NON-TRANSFERABLE list."
      },
      {
        "name": "Applied Software Engineering (E076)",
        "credits": 4,
        "category": "capstone",
        "notes": "CCN ITSW 4327. Explicitly non-transferable. The capstone is excluded from the 25% residency calculation but still must be completed and evaluator-approved."
      }
    ],
    "speedRunNotes": "CLEAR 57 OF 120 CUs BEFORE YOU START. WGU states plainly that it \"does not award transfer credit after the student's initial term start date.\" Every Sophia/Study.com/Saylor course must be finished AND officially transcripted to WGU before day one of term one. This is the single highest-leverage rule in the whole plan.\n\nOPTIMAL OUTSIDE STACK (~$550, 2-3 months). Sophia ($99/mo, 2 courses active at a time, zero proctoring) does the heavy lifting with 15 courses / 47 CUs. Add Study.com for the two courses only it has — Philosophy 104 (Ethical Engineering) and Math 301 (Linear Algebra for Engineers); Math 301 being 300-level likely needs College Saver Pro at $235/mo, so plan one Pro month and knock out both. Use Saylor's free CS302 for Software Engineering (4 CU for $5). If you want to trim Sophia months, Saylor also covers Technical Communication (BUS210), the social-science slot (GEOG101/PSYCH101/ECON101), Applied Probability and Statistics (BUS204), General Chemistry I (CHEM101), Network and Security - Foundations (CS402) and IT Leadership Foundations (BUS208/209) for free — at the cost of a $5 proctored exam each and slower self-study pacing.\n\nSEQUENCE SOPHIA AROUND CALCULUS. Calculus I (4 CU) is the long pole at 3-4 weeks. Start it in your first Sophia slot and rotate the 1-week gen-eds (English Comp I, U.S. Government, Intro Psych, Principles of Management, Nutrition) through the second slot alongside it.\n\nCERTIFICATIONS YOU MAY ALREADY OWN ARE FREE CUs. WGU's transfer guidelines let active certs clear whole courses: ITIL Foundations clears Business of IT - Applications (4 CU); CompTIA Network+/Security+/CySA+/PenTest+ or Cisco CCNA clears Network and Security - Foundations (3 CU); Scrum.org PSM I, Scrum Alliance CSM or PMI-ACP clears Software Engineering (4 CU); PMI CAPM/PMP clears IT Leadership Foundations (3 CU); Oracle Certified Professional Java SE 8 clears Java Frameworks (3 CU); CIW JavaScript Specialist clears JavaScript Programming (3 CU). PSM I is a ~$200 online exam with no prerequisites and is by far the cheapest 4 CU on this list.\n\nWHAT'S GENUINELY FAST AT WGU. Version Control is 1 CU of Git basics — many finish it in an afternoon. Software Security and Testing, Agile for Software Engineering, and Introduction to Software Engineering are light. If you already write code professionally, the Java sequence and Front End Development move quickly.\n\nWHAT'S ACTUALLY HARD. Data Structures and Algorithms I (C949) is the notorious wall — a proctored objective assessment on big-O, trees and hash tables that humbles experienced developers. Applied Discrete Mathematics and Mathematics for Programmers are both non-transferable-in-practice math courses new to this catalog. The three-course Java chain (Java Frameworks, Back-End Programming, Advanced Java) plus AWS Developer is the real workload center of the degree.\n\nASSESSMENT MECHANICS. Objective assessments are remotely proctored but student-scheduled and available around the clock, so they rarely bottleneck. Performance assessments are human-evaluated with roughly 1-3 business-day turnaround that stretches at term boundaries — submit early and batch them so you are never idle waiting on an evaluator. Foundations of UI/UX, Software Design and Quality Assurance, and the capstone are all PA-heavy.\n\nREALISTIC TARGET. With 57 CUs transferred, 63 CUs remain. Two 6-month terms is the achievable aggressive target ($8,250 tuition + $400 fees). Total all-in roughly $9,200 and about 14-15 months including the pre-enrollment transfer sprint. One term is theoretically possible but the DSA/Java/AWS/capstone concentration in the back half makes it a stretch for anyone who is not already a working software engineer.",
    "admissionGate": "WGU's IT bachelor's programs require more than a high school diploma. You must show one of: college coursework with a 2.25+ GPA; an existing associate or bachelor's degree; a transferable IT certification; a 2.75+ high school GPA; or prior IT coursework at the 300 level or above.",
    "paceBlockers": "Two embedded vendor certifications are scheduled and proctored outside WGU, so they carry booking lead time, seat availability, and vendor-controlled retake waiting periods. Plan them early in the term rather than last.",
    "sources": [
      "https://www.wgu.edu/online-it-degrees/software-engineering-bachelors-program.html",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/institutional-catalog/2026/catalog-august-2026.pdf",
      "https://partners.wgu.edu/general-transfer-guideline-bachelor-dynamic?collegeCode=IT&programId=254",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSSWE7110&collegeCode=IT&instId=796&programId=254",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSSWE4424&collegeCode=IT&instId=678&programId=254",
      "https://partners.wgu.edu/transfer-pathway-agreement?uniqueId=BSSWE671&collegeCode=IT&instId=186&programId=254",
      "https://partners.wgu.edu/general-transfer-guidelines",
      "https://wgucollegeofinformationtechnology.sophia.org/",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/information-technology/BSSWE.pdf",
      "https://www.wgu.edu/content/dam/wgu-65-assets/western-governors/documents/program-guides/information-technology/BSSWE_C.pdf",
      "https://study.com/college/western-governors-university/degrees/wgu-bachelor-of-science-in-software-engineering-c-sharp-track.html"
    ]
  }
];

export function getProgram(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}
