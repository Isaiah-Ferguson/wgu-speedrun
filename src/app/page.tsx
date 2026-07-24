import Link from "next/link";
import { courses, sources, stats } from "@/data/plan";

const sourceCardStyles: Record<string, string> = {
  sophia: "border-sky-200 dark:border-sky-900",
  studycom: "border-violet-200 dark:border-violet-900",
  saylor: "border-emerald-200 dark:border-emerald-900",
  clep: "border-amber-200 dark:border-amber-900",
  wgu: "border-rose-200 dark:border-rose-900",
};

export default function Home() {
  const transferCourses = courses.filter((c) => c.source !== "wgu").length;
  const totalCredits = stats.totalTransferCredits + stats.totalWguCredits;

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="pt-6 text-center">
        <p className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
          The WGU Bachelor&apos;s Speed-Run Playbook
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          Earn your bachelor&apos;s in{" "}
          <span className="text-indigo-600 dark:text-indigo-400">months, not years</span> — for a
          fraction of the cost
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600 dark:text-stone-300">
          WGU charges flat-rate tuition per 6-month term and accepts huge amounts of transfer
          credit. Stack cheap credits from Sophia, Study.com, Saylor, and CLEP first — then sprint
          the rest at WGU in as few terms as possible.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/roadmap"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            See the Roadmap
          </Link>
          <Link
            href="/calculator"
            className="rounded-full border border-stone-300 px-6 py-3 font-semibold transition hover:bg-stone-100 dark:border-stone-700 dark:hover:bg-stone-800"
          >
            Estimate Your Cost
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { value: `${totalCredits}`, label: "total credits in the plan" },
          { value: `${stats.totalTransferCredits}`, label: "credits earned cheaply before WGU" },
          { value: `${transferCourses}`, label: "courses you can transfer in" },
          { value: "1–2", label: "flat-rate WGU terms to finish" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-stone-200 bg-white p-6 text-center dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">{s.value}</div>
            <div className="mt-2 text-sm text-stone-500 dark:text-stone-400">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Why it works */}
      <section>
        <h2 className="text-center text-3xl font-bold tracking-tight">Why this works</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Flat-rate terms",
              body: "WGU charges one price per 6-month term no matter how many courses you complete. Finish 30 credits in a term and you pay the same as someone finishing 12.",
            },
            {
              title: "Generous transfer policy",
              body: "WGU publishes official transfer pathways with Sophia and Study.com and accepts many CLEP and ACE-recommended credits — often the majority of the lower-division degree.",
            },
            {
              title: "Competency-based pace",
              body: "You pass a course by proving competency — an exam or project — not by sitting through 16 weeks. If you already know the material, you can finish a course in days.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900"
            >
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-stone-600 dark:text-stone-300">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section>
        <h2 className="text-center text-3xl font-bold tracking-tight">Your five credit sources</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600 dark:text-stone-300">
          Each platform has a role. Use them in order of cost-efficiency.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sources.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border-2 bg-white p-6 transition hover:shadow-md dark:bg-stone-900 ${sourceCardStyles[s.id]}`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{s.name}</h3>
                <span className="text-xs text-stone-400">↗</span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {s.tagline}
              </p>
              <p className="mt-2 text-sm font-medium text-stone-500 dark:text-stone-400">{s.pricing}</p>
              <p className="mt-3 text-stone-600 dark:text-stone-300">{s.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-indigo-600 p-10 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to start the run?</h2>
        <p className="mx-auto mt-3 max-w-xl text-indigo-100">
          Follow the three-phase roadmap and track every course as you clear it.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/roadmap"
            className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            View Roadmap
          </Link>
          <Link
            href="/courses"
            className="rounded-full border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            Open Course Tracker
          </Link>
        </div>
      </section>
    </div>
  );
}
