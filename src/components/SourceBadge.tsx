import { SourceId } from "@/data/plan";

const styles: Record<SourceId, string> = {
  sophia: "bg-sky-100 text-sky-700 dark:bg-sky-950 dark:text-sky-300",
  studycom: "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  saylor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  clep: "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  wgu: "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
};

const labels: Record<SourceId, string> = {
  sophia: "Sophia",
  studycom: "Study.com",
  saylor: "Saylor",
  clep: "CLEP",
  wgu: "WGU",
};

export default function SourceBadge({ source }: { source: SourceId }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap ${styles[source]}`}
    >
      {labels[source]}
    </span>
  );
}
