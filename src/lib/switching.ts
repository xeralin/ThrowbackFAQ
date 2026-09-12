"use client";

import { flushSync } from "react-dom";

let switching = false;

export function isSwitching(): boolean {
  return switching;
}

export function applySwitch(apply: () => void): void {
  switching = true;
  flushSync(apply);
  queueMicrotask(() => {
    switching = false;
  });
}
