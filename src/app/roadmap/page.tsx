import type { Metadata } from "next";
import RoadmapContent from "@/components/RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap — Degree SpeedRun",
  description:
    "The three-phase plan for your WGU degree: Sophia gen eds, Study.com/Saylor/CLEP credits, then finish at WGU.",
};

export default function Roadmap() {
  return <RoadmapContent />;
}
