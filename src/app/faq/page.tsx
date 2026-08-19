import type { Metadata } from "next";
import { pad2 } from "@/lib/format";

export const metadata: Metadata = {
  title: "FAQ — Degree SpeedRun",
  description: "Common questions about speed-running a WGU bachelor's degree.",
};

const faqs = [
  {
    q: "Which WGU degree should I pick?",
    a: "Start with what you actually want to do for work, then check the speed-run math second. The Programs page compares all of them on total competency units, tuition per term, how much credit you can transfer in, and realistic time to finish. Technology and Business degrees are the most speed-runnable because they're pure coursework. Nursing and Education degrees are popular and excellent, but they carry structural blockers — clinical hours, supervised demonstration teaching, state licensure — that no amount of transfer credit removes. Each program flags those explicitly.",
  },
  {
    q: "Can I switch programs later on this site?",
    a: "Yes — use the picker in the bar at the top of any page. The roadmap, course tracker and cost calculator all rebuild around your selection, and your checked-off courses are saved separately for each program, so exploring a second degree won't wipe your progress on the first.",
  },
  {
    q: "Is this legit? Will the degree be respected?",
    a: "Yes. WGU is a nonprofit university institutionally accredited by NWCCU (the accreditor formerly called 'regional' — it also accredits schools like the University of Washington). Your diploma shows no GPA, no pace, no asterisk. Transcripts are organized by term, so a careful reader could infer you finished fast, but there's no 'accelerated' flag and nothing negative about it. Sophia, Study.com and Saylor credits are ACE-recommended and transfer through WGU's own published pathways. One nuance: the B.S. Software Engineering program itself isn't ABET-accredited, though WGU's Computer Science and Cybersecurity programs are.",
  },
  {
    q: "How many credits can I actually transfer into WGU?",
    a: "Up to 75% of a bachelor's degree, roughly 90 of 120 credits — but at least 25% must always be earned at WGU. Since March 2026 the transferable portion is limited to general-education and lower-division requirements; upper-division coursework must be completed at WGU. Always request an unofficial evaluation from an enrollment counselor before your start date.",
  },
  {
    q: "Do I have to use every platform?",
    a: "No. Sophia alone covers most gen eds and is the best value. Add Study.com only for courses on your program's pathway that Sophia doesn't offer, and use CLEP or Saylor opportunistically where they're cheaper or faster for you.",
  },
  {
    q: "How fast can I realistically finish?",
    a: "For a coursework-only degree in technology or business, a motivated student with free time can clear the transfer credits in two to four months, then finish the remaining WGU courses in one or two six-month terms — roughly eight to sixteen months total. People with jobs and families take longer, and the plan still saves money at any pace because WGU terms are flat-rate. Programs with clinicals, practicums or student teaching have a hard floor no amount of hustle gets under.",
  },
  {
    q: "What order should I do things in?",
    a: "Finish ALL transfer credit before starting at WGU. Your transfer evaluation must be completed before your first term begins, and once you're an enrolled WGU student, new outside credits generally can't be applied to your program. The order is: Sophia, then Study.com/Saylor/CLEP, then apply to WGU, then transfer evaluation, then enroll and sprint. Note that WGU updated its transfer articulations in 2026, so check the current pathway sheet before buying any subscription.",
  },
  {
    q: "Does financial aid cover the transfer platforms?",
    a: "No — federal aid only applies to WGU itself. But the platforms are the cheap part: a typical run spends $500 to $1,000 total before WGU. Pell Grants and scholarships then apply to WGU's flat-rate terms.",
  },
  {
    q: "What's the catch?",
    a: "Discipline. Self-paced means nobody is chasing you. The strategy only saves money if you actually finish courses quickly — a Sophia subscription you ignore for six months costs more than a semester's worth of focused effort. Treat it like a job: schedule study blocks and hit weekly course-completion targets.",
  },
  {
    q: "Do these numbers change?",
    a: "Yes — subscription prices, WGU tuition, transfer pathways and scholarship offerings all change regularly. CLEP reprices each July and WGU adjusts tuition periodically. Use this site as the playbook, but confirm every price and every course against the provider's site and WGU's official transfer pathway documents before spending money.",
  },
];

export default function FaqPage() {
  return (
    <div>
      <header className="border-t border-ink pt-4 pb-12">
        <p className="label">/07 FAQ</p>
        <h1 className="display mt-5 max-w-[14ch]">Questions.</h1>
      </header>

      <dl className="border-t border-ink">
        {faqs.map((f, i) => (
          <div key={f.q} className="grid gap-x-10 gap-y-3 border-b border-rule py-7 md:grid-cols-12">
            <dt className="md:col-span-5">
              <div className="flex gap-3">
                <span className="label shrink-0 pt-1">{pad2(i + 1)}</span>
                <h2 className="text-lg font-bold tracking-tight">{f.q}</h2>
              </div>
            </dt>
            <dd className="max-w-[68ch] text-muted md:col-span-7">{f.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
