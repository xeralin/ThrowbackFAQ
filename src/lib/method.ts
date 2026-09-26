"use client";

import { createChoiceStore } from "@/lib/choice-store";
import { usePlatform } from "@/lib/platform";
import { applySwitch } from "@/lib/switching";

export type Method = "launcher" | "downloader";

const STORAGE_KEY = "method";

if (
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("jvav")
) {
  try {
    localStorage.setItem(STORAGE_KEY, "downloader");
  } catch {}
}

const store = createChoiceStore<Method>(
  STORAGE_KEY,
  ["launcher", "downloader"],
  () => "launcher",
  "launcher",
);

export function setMethod(next: Method) {
  store.set(next, applySwitch);
}

export const useStoredMethod = store.use;

export function useMethod(): Method {
  const platform = usePlatform();
  const method = useStoredMethod();
  return platform === "linux" ? "launcher" : method;
}
