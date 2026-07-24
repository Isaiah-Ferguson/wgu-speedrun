import type { Metadata } from "next";
import CourseTracker from "@/components/CourseTracker";

export const metadata: Metadata = {
  title: "Course Tracker — Degree SpeedRun",
  description: "Track your progress through every course in the WGU speed-run plan.",
};

export default function CoursesPage() {
  return <CourseTracker />;
}
