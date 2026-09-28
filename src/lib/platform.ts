"use client";

import { createChoiceStore } from "@/lib/choice-store";

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

export const setPlatform = store.set;

export const usePlatform = store.use;
