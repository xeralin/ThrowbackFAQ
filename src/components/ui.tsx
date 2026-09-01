export const microLabel = "font-mono text-micro uppercase tracking-[0.2em]";

export function BlinkCursor() {
  return (
    <span aria-hidden className="ml-px inline-block animate-blink">
      _
    </span>
  );
}
