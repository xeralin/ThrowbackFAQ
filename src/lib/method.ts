"use client";

import { createChoiceStore } from "@/lib/choice-store";
import { usePlatform } from "@/lib/platform";
import { applySwitch } from "@/lib/switching";

export type Method = "launcher" | "downloader";

const store = createChoiceStore<Method>(
  "method",
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
