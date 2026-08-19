"use client";

import { createContext, useCallback, useContext, useMemo } from "react";
import { useStoredValue } from "@/lib/use-stored-state";
import { SPEEDRUN_PACE, type Pace } from "@/lib/pace";

const STORAGE_KEY = "speedrun-pace";

interface Ctx {
  pace: Pace;
  setPace: (p: Pace) => void;
  isDefault: boolean;
}

const PaceContext = createContext<Ctx | null>(null);

function parse(raw: string | null): Pace {
  if (!raw) return SPEEDRUN_PACE;
  try {
    const v = JSON.parse(raw);
    const hoursPerDay = Number(v?.hoursPerDay);
    const daysPerWeek = Number(v?.daysPerWeek);
    if (!Number.isFinite(hoursPerDay) || !Number.isFinite(daysPerWeek)) return SPEEDRUN_PACE;
    return {
      hoursPerDay: Math.min(16, Math.max(1, hoursPerDay)),
      daysPerWeek: Math.min(7, Math.max(1, daysPerWeek)),
    };
  } catch {
    return SPEEDRUN_PACE;
  }
}

export function PaceProvider({ children }: { children: React.ReactNode }) {
  const [raw, setRaw] = useStoredValue(STORAGE_KEY);
  const pace = useMemo(() => parse(raw), [raw]);
  const setPace = useCallback((p: Pace) => setRaw(JSON.stringify(p)), [setRaw]);

  const isDefault =
    pace.hoursPerDay === SPEEDRUN_PACE.hoursPerDay &&
    pace.daysPerWeek === SPEEDRUN_PACE.daysPerWeek;

  return (
    <PaceContext.Provider value={{ pace, setPace, isDefault }}>{children}</PaceContext.Provider>
  );
}

export function usePace() {
  const ctx = useContext(PaceContext);
  if (!ctx) throw new Error("usePace must be used inside PaceProvider");
  return ctx;
}
