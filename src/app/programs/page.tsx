import type { Metadata } from "next";
import ProgramsIndex from "@/components/ProgramsIndex";

export const metadata: Metadata = {
  title: "Programs — Degree SpeedRun",
  description:
    "Compare WGU's most popular bachelor's degrees: competency units, tuition per term, transferable credit, and realistic time to finish.",
};

export default function ProgramsPage() {
  return <ProgramsIndex />;
}
