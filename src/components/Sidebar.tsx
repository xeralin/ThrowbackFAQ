"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { navSections, normalizePath } from "@/config/nav";
import { fetchMemberCount } from "@/lib/discord";
import { site } from "@/config/site";
import { withBasePath } from "@/lib/asset";
import { BlinkCursor, microLabel } from "@/components/ui";

export function Sidebar({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate?: () => void;
}) {
  const pathname = normalizePath(usePathname());
  const [members, setMembers] = useState<string | null>(null);
  const [membersShown, setMembersShown] = useState(false);
  const membersRequested = useRef(false);

  function showMembers() {
    setMembersShown(true);
    if (membersRequested.current) return;
    membersRequested.current = true;
    fetchMemberCount(site.discordInvite).then((count) => {
      if (count != null) setMembers(count.toLocaleString("en-DK"));
    });
  }

  return (
    <aside
      id="sidebar"
      className={`fixed inset-y-0 left-0 z-(--z-sidebar) flex w-(--sidebar-w) flex-col overflow-y-auto border-r border-border bg-surface max-nav:transition-[translate,visibility] max-nav:duration-(--duration-view) max-nav:ease-out-cubic ${
        open
          ? "max-nav:translate-x-0"
          : "max-nav:invisible max-nav:-translate-x-full"
      }`}
    >
      <div className="border-b border-border px-5 pb-4 pt-6 max-nav:pt-14">
        <div
          tabIndex={0}
          onMouseEnter={showMembers}
          onMouseLeave={() => setMembersShown(false)}
          onFocus={showMembers}
          onBlur={() => setMembersShown(false)}
          className={`mb-[0.3rem] w-fit ${microLabel} text-brand`}
        >
          {membersShown && members
            ? `// ${members} MEMBERS`
            : "// R6S COMMUNITY"}
          <BlinkCursor />
        </div>
        <div className="font-display text-[1.2rem] font-bold leading-[1.2] text-text">
          <span className="text-brand">Throwback</span> FAQ
        </div>
      </div>

      <nav>
        {navSections.map((section) => {
          const sectionActive = section.items.some(
            (item) => normalizePath(item.href) === pathname,
          );
          const sectionSlug = section.label
            .toLowerCase()
            .replace(/[^a-z]+/g, "-");
          return (
            <div key={section.label} className="px-3 pb-2 pt-[1.2rem]">
              <div
                style={{ viewTransitionName: `nav-sec-${sectionSlug}` }}
                className={`mb-[0.4rem] px-2 ${microLabel} ${
                  sectionActive ? "text-brand" : "text-text-muted"
                }`}
              >
                {section.label}
              </div>
              {section.items.map((item) => {
                const active = normalizePath(item.href) === pathname;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    style={{
                      viewTransitionName: `nav-${item.href.slice(1) || "home"}`,
                    }}
                    className={`nav-link flex items-center justify-between rounded-md px-3 py-[0.55rem] text-[0.9rem] font-medium no-underline transition-[background-color,color,translate] duration-200 ${
                      active
                        ? "border-l-2 border-brand bg-brand-dim text-text shadow-[inset_0_0_18px_-5px_var(--color-brand-glow-soft)]"
                        : "text-text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto p-3">
        <ExternalLink
          href={site.discordUrl}
          data-tone="muted"
          className="group card-glow-hover relative block h-12 overflow-hidden rounded-md border border-border no-underline transition-[border-color,box-shadow] duration-200 [--card-glow-blur:16px]"
        >
          <Image
            src={withBasePath("/media/others/discord-banner.webp")}
            alt=""
            fill
            sizes="280px"
            className="pointer-events-none select-none object-cover object-center"
          />
          <span className="absolute inset-0 bg-black/40" />
          <span className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 flex items-end p-2">
            <span className="font-display text-[0.8rem] font-bold leading-none text-text">
              Join the Discord
            </span>
          </span>
        </ExternalLink>
      </div>
    </aside>
  );
}
