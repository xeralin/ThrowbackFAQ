export const panel = "rounded-lg border border-border bg-surface";

export const microLabel = "font-mono uppercase tracking-[0.2em]";

export const heading = "font-display text-[1.05rem] font-bold text-text";

export function BlinkCursor() {
  return (
    <span aria-hidden className="ml-px inline-block animate-blink">
      _
    </span>
  );
}
