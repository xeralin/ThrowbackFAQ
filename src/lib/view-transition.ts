"use client";

import { flushSync } from "react-dom";

let switching = false;

export function isSwitching(): boolean {
  return switching;
}

function applySwitch(apply: () => void): void {
  switching = true;
  flushSync(apply);
  queueMicrotask(() => {
    switching = false;
  });
}

export function withViewTransition(apply: () => void): void {
  const update = () => applySwitch(apply);
  if (typeof document.startViewTransition !== "function") {
    update();
    return;
  }
  document.startViewTransition(update);
}
