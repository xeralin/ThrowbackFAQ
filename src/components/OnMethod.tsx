"use client";

import type { ReactNode } from "react";
import { useMethod } from "@/lib/method";

export function OnDownloader({ children }: { children: ReactNode }) {
  return useMethod() === "downloader" ? <>{children}</> : null;
}

export function OnLauncher({ children }: { children: ReactNode }) {
  return useMethod() === "launcher" ? <>{children}</> : null;
}
