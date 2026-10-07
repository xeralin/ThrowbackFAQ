"use client";

import { createChoiceStore } from "@/lib/choice-store";
import { usePlatform } from "@/lib/platform";

export type Method = "launcher" | "downloader";

const STORAGE_KEY = "method";

if (
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("jvav")
) {
  try {
    sessionStorage.setItem(STORAGE_KEY, "downloader");
    sessionStorage.setItem("platform", "windows");
  } catch {}
}

const store = createChoiceStore<Method>(
  STORAGE_KEY,
  ["launcher", "downloader"],
  () => "launcher",
  "launcher",
);

export const setMethod = store.set;

export const useStoredMethod = store.use;

export function useMethod(): Method {
  const platform = usePlatform();
  const method = useStoredMethod();
  return platform === "linux" ? "launcher" : method;
}
