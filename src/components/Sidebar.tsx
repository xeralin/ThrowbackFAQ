"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { navSections, normalizePath } from "@/config/nav";
import { fetchMemberCount } from "@/lib/discord";
import { site } from "@/config/site";
import { BlinkCursor, microLabel } from "@/components/ui";

export function Sidebar({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
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
          onMouseEnter={showMembers}
          onMouseLeave={() => setMembersShown(false)}
          className={`mb-[0.3rem] w-fit ${microLabel} text-micro text-brand`}
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
            (item) => item.href === pathname,
          );
          return (
            <div key={section.label} className="px-3 pb-2 pt-[1.2rem]">
              <div
                className={`mb-[0.4rem] px-2 ${microLabel} text-micro ${
                  sectionActive ? "text-brand" : "text-text-muted"
                }`}
              >
                {section.label}
              </div>
              {section.items.map((item) => {
                const active = item.href === pathname;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    data-current={active || undefined}
                    className={`nav-link block rounded-md px-3 py-[0.55rem] text-[0.9rem] font-medium transition-[background-color,color,translate] duration-200 ${
                      active
                        ? "border-l-2 border-brand bg-brand-dim text-text shadow-[inset_0_0_18px_-5px_var(--color-brand-glow-soft)]"
                        : "text-text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <div className="mt-auto px-5 pb-4 pt-3">
        <ExternalLink
          href={site.discordUrl}
          className="block w-fit opacity-60 transition-opacity duration-200 hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" className="block size-[1.15rem]" fill="#fff">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
          </svg>
        </ExternalLink>
      </div>
    </aside>
  );
}
