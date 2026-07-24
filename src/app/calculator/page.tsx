import type { Metadata } from "next";
import CostCalculator from "@/components/CostCalculator";

export const metadata: Metadata = {
  title: "Cost Calculator — Degree SpeedRun",
  description: "Estimate the total cost of your WGU speed-run based on your pace.",
};

export default function CalculatorPage() {
  return <CostCalculator />;
}
