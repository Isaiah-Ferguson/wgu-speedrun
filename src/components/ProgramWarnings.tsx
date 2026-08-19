import type { Program } from "@/data/types";

/**
 * Admission gates, pace blockers and career caveats are shown separately —
 * "you might not get in", "you can't finish fast" and "this won't qualify you"
 * are different problems and a reader needs to know which one they're facing.
 */
export default function ProgramWarnings({
  program,
  compact = false,
}: {
  program: Program;
  compact?: boolean;
}) {
  const items = [
    { kind: "Cannot be rushed", text: program.paceBlockers },
    { kind: "Career caveat", text: program.careerCaveat },
    { kind: "Entry requirements", text: program.admissionGate },
  ].filter((i): i is { kind: string; text: string } => Boolean(i.text));

  if (items.length === 0) return null;

  return (
    <div className={compact ? "space-y-3" : "space-y-5"}>
      {items.map((i) => (
        <div key={i.kind} className="border-l-2 border-warn pl-4 sm:pl-5">
          <p className="label text-warn">{i.kind}</p>
          <p
            className={`mt-1.5 max-w-[68ch] text-ink/80 ${compact ? "text-xs" : "text-sm"}`}
          >
            {i.text}
          </p>
        </div>
      ))}
    </div>
  );
}
