import type { ReactNode } from "react";
import { microLabel } from "@/components/ui";

export function SectionTitle({
  children,
  flush = false,
}: {
  children: ReactNode;
  flush?: boolean;
}) {
  return (
    <h2
      className={`mb-4 ${flush ? "" : "mt-8"} flex items-center gap-3 ${microLabel} text-text-muted after:h-px after:flex-1 after:bg-border after:content-['']`}
    >
      {children}
    </h2>
  );
}
