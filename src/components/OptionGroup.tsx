"use client";

import { useLayoutEffect, useRef, useState } from "react";

export type Option<T extends string> = {
  id: T;
  label: string;
};

export function rovingStep(
  event: React.KeyboardEvent,
  vertical: boolean,
): number {
  const forward =
    event.key === "ArrowRight" || (vertical && event.key === "ArrowDown");
  const backward =
    event.key === "ArrowLeft" || (vertical && event.key === "ArrowUp");
  return forward ? 1 : backward ? -1 : 0;
}

export function OptionGroup<T extends string>({
  options,
  active,
  onSelect,
  label,
}: {
  options: Option<T>[];
  active: T;
  onSelect: (id: T) => void;
  label: string;
}) {
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    function remeasure() {
      const el = refs.current[active];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
    remeasure();
    window.addEventListener("resize", remeasure);
    document.fonts?.ready.then(remeasure);
    return () => window.removeEventListener("resize", remeasure);
  }, [active, options]);

  function onKeyDown(event: React.KeyboardEvent) {
    const step = rovingStep(event, true);
    if (!step) return;
    const index = options.findIndex((option) => option.id === active);
    if (index === -1) return;
    event.preventDefault();
    const next = options[(index + step + options.length) % options.length];
    onSelect(next.id);
    refs.current[next.id]?.focus();
  }

  return (
    <div className="border-b border-border">
      <div
        role="radiogroup"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="relative flex flex-wrap gap-1"
      >
        {options.map((option) => (
          <button
            key={option.id}
            ref={(el) => {
              refs.current[option.id] = el;
            }}
            type="button"
            role="radio"
            aria-checked={active === option.id}
            tabIndex={option.id === active ? 0 : -1}
            onClick={() => onSelect(option.id)}
            className={`px-4 py-2 font-mono text-label uppercase tracking-[0.12em] transition-colors ${
              active === option.id
                ? "text-text"
                : "text-text-muted hover:text-text"
            }`}
          >
            {option.label}
          </button>
        ))}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-px h-0.5 bg-brand transition-[left,width] duration-300 ease-out"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>
    </div>
  );
}
