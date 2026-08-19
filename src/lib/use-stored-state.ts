"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

export function emit() {
  for (const l of listeners) l();
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  // Keep tabs in sync when localStorage changes elsewhere.
  window.addEventListener("storage", emit);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) window.removeEventListener("storage", emit);
  };
}

/**
 * localStorage as an external store. Using useSyncExternalStore instead of
 * "read in an effect, then setState" keeps the server and hydrated client
 * snapshots explicit, and avoids the cascading render that pattern causes.
 *
 * The snapshot is the raw string so React can compare it by value; parsing
 * happens in a memo, since a fresh object each call would loop forever.
 */
export function useStoredValue(key: string): [string | null, (next: string | null) => void] {
  const getSnapshot = useCallback(() => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }, [key]);

  const raw = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const set = useCallback(
    (next: string | null) => {
      try {
        if (next === null) localStorage.removeItem(key);
        else localStorage.setItem(key, next);
      } catch {
        // Private mode or storage full — fall through; UI still updates.
      }
      emit();
    },
    [key],
  );

  return [raw, set];
}

function parseSet(raw: string | null): Set<string> {
  if (!raw) return new Set<string>();
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set<string>(parsed) : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

/**
 * JSON-array flavour, for the per-program completed-course sets.
 *
 * The updater takes a callback and re-reads storage at write time rather than
 * closing over the rendered value. Two toggles fired in the same tick would
 * otherwise both start from the pre-render set and the second would clobber
 * the first — the functional-update guarantee plain useState gives you free.
 */
export function useStoredSet(
  key: string,
): [Set<string>, (update: (prev: Set<string>) => Set<string>) => void] {
  const [raw, setRaw] = useStoredValue(key);

  const value = useMemo(() => parseSet(raw), [raw]);

  const apply = useCallback(
    (update: (prev: Set<string>) => Set<string>) => {
      let current: Set<string>;
      try {
        current = parseSet(localStorage.getItem(key));
      } catch {
        current = new Set<string>();
      }
      setRaw(JSON.stringify([...update(current)]));
    },
    [key, setRaw],
  );

  return [value, apply];
}
