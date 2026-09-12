"use client";

import { Fragment, useRef } from "react";
import { rovingStep } from "@/components/OptionGroup";
import { setPlatform, usePlatform, type Platform } from "@/lib/platform";

const PLATFORMS: { id: Platform; label: string }[] = [
  { id: "windows", label: "Windows" },
  { id: "linux", label: "Linux" },
];

export function PlatformSwitch() {
  const platform = usePlatform();
  const refs = useRef<Partial<Record<Platform, HTMLButtonElement | null>>>({});

  function onKeyDown(event: React.KeyboardEvent) {
    const step = rovingStep(event, true);
    if (!step) return;
    const index = PLATFORMS.findIndex((entry) => entry.id === platform);
    if (index === -1) return;
    event.preventDefault();
    const next =
      PLATFORMS[(index + step + PLATFORMS.length) % PLATFORMS.length];
    setPlatform(next.id);
    refs.current[next.id]?.focus();
  }

  return (
    <div
      role="radiogroup"
      aria-label="Platform"
      onKeyDown={onKeyDown}
      className="flex items-center gap-1.5 font-mono text-label tracking-[0.04em] text-text-muted"
    >
      {PLATFORMS.map((entry, index) => (
        <Fragment key={entry.id}>
          {index > 0 && <span aria-hidden>/</span>}
          <button
            type="button"
            role="radio"
            aria-checked={platform === entry.id}
            tabIndex={platform === entry.id ? 0 : -1}
            ref={(el) => {
              refs.current[entry.id] = el;
            }}
            onClick={() => setPlatform(entry.id)}
            className={`cursor-pointer transition-colors ${
              platform === entry.id ? "text-text" : "hover:text-text"
            }`}
          >
            {entry.label}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
