export const panel = "rounded-lg border border-border bg-surface";

export const microLabel = "font-mono uppercase tracking-[0.2em]";

export const heading = "font-display text-[1.05rem] font-bold text-text";

export const stepBox =
  "rounded-lg border border-border px-[0.6rem] py-[0.45rem]";

export const stepList =
  "mb-0 pl-[1.15rem] text-[0.78rem] leading-[1.45] [&>li:last-child]:mb-0";

export function BlinkCursor() {
  return (
    <span aria-hidden className="ml-px inline-block animate-blink">
      _
    </span>
  );
}
