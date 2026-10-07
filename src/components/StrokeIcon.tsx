import type { ReactNode } from "react";

export const PROTON = "m4 17 6-6-6-6M12 19h8";

export function StrokeIcon({
  d,
  className,
  children,
}: {
  d?: string;
  className: string;
  children?: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
}
