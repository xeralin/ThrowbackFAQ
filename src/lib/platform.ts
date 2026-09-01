"use client";

import { createChoiceStore } from "@/lib/choice-store";
import { withViewTransition } from "@/lib/view-transition";

export type Platform = "windows" | "linux";

function detectPlatform(): Platform {
  const agent = navigator.userAgent;
  return /linux/i.test(agent) && !/android/i.test(agent) ? "linux" : "windows";
}

const store = createChoiceStore<Platform>(
  "platform",
  ["windows", "linux"],
  detectPlatform,
  "windows",
);

export function setPlatform(next: Platform) {
  store.set(next, withViewTransition);
}

export const usePlatform = store.use;
