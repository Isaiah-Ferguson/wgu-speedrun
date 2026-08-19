"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProgramPicker from "@/components/ProgramPicker";
import { useProgram } from "@/components/ProgramProvider";
import { topWarning } from "@/lib/program-stats";

/** Slim rail under the nav making it obvious every page is scoped to one program. */
export default function ProgramBar() {
  const { program } = useProgram();
  const pathname = usePathname();
  const warning = topWarning(program);

  // The programs index is its own picker — no need to double up.
  if (pathname === "/programs") return null;

  return (
    <div className="border-b border-rule bg-ink/[0.03]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-5 gap-y-2 px-4 py-2">
        <span className="label shrink-0">Planning for</span>
        <div className="min-w-[8rem] flex-1 sm:max-w-[16rem]">
          <ProgramPicker compact />
        </div>
        {/* On phones this wraps to its own row so the program name keeps its width. */}
        <div className="flex w-full items-center gap-4 sm:w-auto">
          <span className="num hidden text-xs text-muted sm:inline">
            {`${program.totalCUs} CU · $${program.tuitionPerTerm.toLocaleString()}/term`}
          </span>
          {warning && (
            <span className="label border border-warn-rule bg-warn-bg px-2 py-0.5 text-warn">
              {warning.kind}
            </span>
          )}
          <Link href="/programs" className="label text-accent hover:underline">
            Compare all →
          </Link>
        </div>
      </div>
    </div>
  );
}
