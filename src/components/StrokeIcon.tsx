export function StrokeIcon({
  d,
  className = "size-4",
  fill = "none",
}: {
  d: string;
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
