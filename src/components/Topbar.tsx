"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlatformSwitch } from "@/components/PlatformSwitch";
import { breadcrumbFor } from "@/config/nav";
import { BlinkCursor } from "@/components/ui";

export function Topbar() {
  const crumbs = breadcrumbFor(usePathname());
  const lastIndex = crumbs.length - 1;

  return (
    <div className="sticky top-0 z-(--z-topbar) flex h-(--topbar-h) items-center border-b border-border bg-surface px-(--page-pad) max-nav:pl-14 max-nav:pr-4">
      <div className="min-w-0 font-mono text-label tracking-[0.04em] text-text-muted">
        {crumbs.map((crumb, index) =>
          index === lastIndex ? (
            <span key={index} className="text-text">
              {crumb.label}
            </span>
          ) : (
            <span key={index}>
              <Link
                href={crumb.href}
                className="cursor-pointer no-underline transition-colors hover:text-text"
              >
                {crumb.label}
              </Link>
              {" / "}
            </span>
          ),
        )}
        <BlinkCursor />
      </div>
      <div className="ml-auto">
        <PlatformSwitch />
      </div>
    </div>
  );
}
