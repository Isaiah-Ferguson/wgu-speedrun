export type SourceId = "sophia" | "studycom" | "saylor" | "clep" | "wgu";

/** A course taken outside WGU and transferred in. */
export interface TransferCourse {
  name: string;
  source: Exclude<SourceId, "wgu">;
  credits: number;
  /** The WGU course or requirement this satisfies. */
  wguEquivalent: string;
  time: string;
  notes?: string;
}

/** A course that must be completed at WGU. */
export interface WguCourse {
  name: string;
  credits: number;
  category: "gen-ed" | "core" | "upper-division" | "capstone";
  notes?: string;
}

export interface Program {
  id: string;
  name: string;
  shortName: string;
  college: string;
  url: string;
  tagline: string;
  description: string;
  totalCUs: number;
  courseCount: number;
  tuitionPerTerm: number;
  resourceFeePerTerm: number;
  certifications: string[];
  careers: string[];
  transferCourses: TransferCourse[];
  wguCourses: WguCourse[];
  speedRunNotes: string;

  /**
   * These three are deliberately separate: a program can be hard to get INTO,
   * hard to finish FAST, or fine on both but not qualify you for the job you
   * assumed. Collapsing them into one "blockers" flag misleads in both directions.
   */
  /** Prerequisites for admission — GPA, licence, certification. */
  admissionGate?: string;
  /** Structural reasons the degree cannot be accelerated (clinicals, student teaching). */
  paceBlockers?: string;
  /** What this degree does NOT qualify you to do. */
  careerCaveat?: string;

  /** Credit granted automatically for an existing licence (RN-to-BSN). */
  advancedStandingCUs?: number;

  sources: string[];
}

export interface CourseSource {
  id: SourceId;
  name: string;
  url: string;
  tagline: string;
  pricing: string;
  description: string;
  tips: string[];
}

export interface AidOption {
  name: string;
  amount: string;
  description: string;
  url: string;
}
