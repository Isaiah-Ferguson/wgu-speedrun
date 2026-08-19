import type { SourceId } from "@/data/types";

const labels: Record<SourceId, string> = {
  sophia: "SOPHIA",
  studycom: "STUDY.COM",
  saylor: "SAYLOR",
  clep: "CLEP",
  wgu: "WGU",
};

/**
 * Sources are told apart by name in mono, not by hue — the palette keeps its
 * single accent so amber can mean "policy warning" and nothing else.
 */
export default function SourceBadge({ source }: { source: SourceId }) {
  const isWgu = source === "wgu";
  return (
    <span
      className={`label shrink-0 whitespace-nowrap ${isWgu ? "text-accent" : "text-faint"}`}
      style={{ letterSpacing: "0.12em" }}
    >
      {labels[source]}
    </span>
  );
}
