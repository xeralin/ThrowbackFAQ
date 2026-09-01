import type { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

const base =
  "mb-[0.4rem] mr-2 inline-flex items-center rounded-md px-[1.1rem] font-mono text-label indent-[0.08em] tracking-[0.08em] no-underline shadow-[0_2px_14px_transparent] transition duration-200";

const variants = {
  primary:
    "bg-brand py-[0.55rem] text-white hover:bg-brand-deep hover:shadow-[0_2px_14px_var(--color-brand-glow)]",
  secondary:
    "border border-border bg-surface-2 py-[calc(0.55rem-1px)] text-text-muted hover:bg-border hover:text-text hover:shadow-[0_2px_14px_var(--color-brand-glow)]",
};

export function LinkButton({
  href,
  variant = "primary",
  download,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  download?: string;
  children: ReactNode;
}) {
  const className = `${base} ${variants[variant]}`;
  if (download) {
    return (
      <a href={href} download={download} className={className}>
        {children}
      </a>
    );
  }
  return (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  );
}
