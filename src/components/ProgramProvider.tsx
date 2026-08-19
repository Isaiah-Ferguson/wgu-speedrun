"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from "react";
import { programs } from "@/data/programs";
import { emit, subscribe } from "@/lib/use-stored-state";
import type { Program } from "@/data/types";

const STORAGE_KEY = "speedrun-program";
const PARAM = "program";

interface Ctx {
  program: Program;
  setProgramId: (id: string) => void;
}

const ProgramContext = createContext<Ctx | null>(null);

const isKnown = (id: string | null | undefined): id is string =>
  !!id && programs.some((p) => p.id === id);

/**
 * A ?program= link wins over the stored choice, so plans are shareable.
 * Both live behind useSyncExternalStore rather than being read during render:
 * the server has neither, and reading them directly would make the hydration
 * render disagree with the server HTML.
 */
function getSnapshot(): string | null {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get(PARAM);
    if (isKnown(fromUrl)) return fromUrl;
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function write(id: string) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Private mode — the URL param still carries the choice for this session.
  }
  emit();
}

export function ProgramProvider({ children }: { children: React.ReactNode }) {
  const storedId = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const program = programs.find((p) => p.id === storedId) ?? programs[0];

  // Persist a program that arrived via ?program=, so it survives the next
  // in-app navigation (which drops the query string).
  useEffect(() => {
    if (isKnown(storedId) && localStorage.getItem(STORAGE_KEY) !== storedId) write(storedId);
  }, [storedId]);

  const setProgramId = useCallback((id: string) => {
    if (!isKnown(id)) return;
    write(id);
    const url = new URL(window.location.href);
    url.searchParams.set(PARAM, id);
    window.history.replaceState(null, "", url);
  }, []);

  return (
    <ProgramContext.Provider value={{ program, setProgramId }}>{children}</ProgramContext.Provider>
  );
}

export function useProgram() {
  const ctx = useContext(ProgramContext);
  if (!ctx) throw new Error("useProgram must be used inside ProgramProvider");
  return ctx;
}
