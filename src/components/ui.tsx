export const panel = "rounded-lg border border-border bg-surface";

export const microLabel = "font-mono uppercase tracking-[0.2em]";

export const columnItem =
  "flex w-full items-center gap-1.5 rounded-md border-l-2 border-transparent px-2 py-1 text-left text-ui font-semibold transition-colors";

export const columnItemActive = "bg-surface-2 text-text";

export const columnItemIdle =
  "text-text-muted hover:bg-surface-2 hover:text-text";

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
