"use client";

import { useSyncExternalStore } from "react";

export type ChoiceStore<T extends string> = {
  get: () => T;
  set: (next: T, apply: (update: () => void) => void) => void;
  use: () => T;
};

export function createChoiceStore<T extends string>(
  storageKey: string,
  values: readonly T[],
  fallback: () => T,
  serverValue: T,
): ChoiceStore<T> {
  let cached: T | null = null;
  const listeners = new Set<() => void>();

  function getSnapshot(): T {
    if (cached === null) {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(storageKey);
      } catch {}
      cached = values.includes(stored as T) ? (stored as T) : fallback();
    }
    return cached;
  }

  function subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    get: getSnapshot,
    set(next, apply) {
      if (cached === next) return;
      cached = next;
      try {
        localStorage.setItem(storageKey, next);
      } catch {}
      apply(() => listeners.forEach((listener) => listener()));
    },
    use: () => useSyncExternalStore(subscribe, getSnapshot, () => serverValue),
  };
}
