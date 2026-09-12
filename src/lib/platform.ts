"use client";

import { createChoiceStore } from "@/lib/choice-store";
import { applySwitch } from "@/lib/switching";

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
  store.set(next, applySwitch);
}

export const usePlatform = store.use;
