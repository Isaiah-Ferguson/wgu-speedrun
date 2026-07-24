import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Degree SpeedRun",
  description: "Common questions about speed-running a WGU bachelor's degree.",
};

const faqs = [
  {
    q: "Is this legit? Will the degree be respected?",
    a: "Yes. WGU is a nonprofit university institutionally accredited by NWCCU (the accreditor formerly called 'regional' — it also accredits schools like the University of Washington). Your diploma shows no GPA, no pace, no asterisk. Transcripts are organized by term, so a careful reader could infer you finished fast — but there's no 'accelerated' flag and nothing negative about it. Sophia, Study.com, and Saylor credits are ACE-recommended and transfer through WGU's own published pathways. One nuance: the B.S. Software Engineering program itself isn't ABET-accredited (WGU's Computer Science and Cybersecurity programs are).",
  },
  {
    q: "How many credits can I actually transfer into WGU?",
    a: "WGU evaluates transfer credit per program. For most bachelor's degrees, the entire lower-division portion can be satisfied by transfer — often 60–75+ competency units. Upper-division program courses and the capstone must be completed at WGU. Always request an unofficial evaluation from an enrollment counselor before your start date.",
  },
  {
    q: "Do I have to use every platform?",
    a: "No. Sophia alone covers most gen eds and is the best value. Add Study.com only for courses on your program's pathway that Sophia doesn't offer, and use CLEP/Saylor opportunistically where they're cheaper or faster for you.",
  },
  {
    q: "How fast can I realistically finish?",
    a: "A motivated student with free time can clear the transfer credits in 2–4 months, then finish the remaining WGU courses in one or two 6-month terms. Total: roughly 8–16 months. People with jobs and families take longer — the plan still saves money at any pace because WGU terms are flat-rate.",
  },
  {
    q: "What order should I do things in?",
    a: "Finish ALL transfer credit before starting at WGU. Your transfer evaluation must be completed before your first term begins, and once you're an enrolled WGU student, new outside credits generally can't be applied to your program. The order is: Sophia → Study.com/Saylor/CLEP → apply to WGU → transfer evaluation → enroll → sprint. Note: WGU updated its transfer articulations in 2026 — some courses that used to transfer must now be taken at WGU, so check the current pathway sheet before buying any subscription.",
  },
  {
    q: "Does financial aid cover the transfer platforms?",
    a: "No — federal aid only applies to WGU itself. But the platforms are the cheap part: a typical run spends $500–$1,000 total before WGU. Pell Grants and scholarships then apply to WGU's flat-rate terms.",
  },
  {
    q: "What's the catch?",
    a: "Discipline. Self-paced means nobody is chasing you. The strategy only saves money if you actually finish courses quickly — a Sophia subscription you ignore for six months costs more than a semester's worth of focused effort. Treat it like a job: schedule study blocks and hit weekly course-completion targets.",
  },
  {
    q: "Do these numbers change?",
    a: "Yes — subscription prices, WGU tuition, transfer pathways, and scholarship offerings all change regularly. Use this site as the playbook, but confirm every price and every course against the provider's site and WGU's official transfer pathway documents before spending money.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-black tracking-tight">Frequently asked questions</h1>
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-4">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
          >
            <summary className="cursor-pointer list-none font-bold marker:hidden">
              <span className="mr-2 text-indigo-600 transition-transform group-open:rotate-90 dark:text-indigo-400">
                ▸
              </span>
              {f.q}
            </summary>
            <p className="mt-3 pl-6 text-stone-600 dark:text-stone-300">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
