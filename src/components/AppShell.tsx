"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { ScrollReveal } from "./ScrollReveal";
import { breadcrumbFor, normalizePath } from "@/config/nav";

const bar =
  "block h-0.5 w-4.5 rounded-sm bg-text transition-transform duration-200 ease-in-out";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function clean() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      requestAnimationFrame(() => {
        if (!document.getElementById(hash))
          window.history.replaceState(
            window.history.state,
            "",
            window.location.pathname + window.location.search,
          );
      });
    }
    clean();
    window.addEventListener("hashchange", clean);
    return () => window.removeEventListener("hashchange", clean);
  }, [pathname]);
  const router = useRouter();

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement
      )
        return;
      if (open) {
        setOpen(false);
        return;
      }
      const current = normalizePath(pathname);
      const crumbs = breadcrumbFor(current);
      const parent = crumbs.length > 1 ? crumbs[crumbs.length - 2].href : null;
      if (!parent || normalizePath(parent) === current) return;
      router.push(parent);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, router, open]);

  useEffect(() => {
    if (!open) return;
    const breakpoint = getComputedStyle(document.documentElement)
      .getPropertyValue("--breakpoint-nav")
      .trim();
    const media = window.matchMedia(`(max-width: ${breakpoint})`);
    const onChange = () => {
      if (!media.matches) setOpen(false);
    };
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onClick(event: MouseEvent) {
      const sidebar = document.getElementById("sidebar");
      const hamburger = document.getElementById("hamburger");
      const target = event.target as Node;
      if (
        sidebar &&
        !sidebar.contains(target) &&
        hamburger &&
        !hamburger.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <>
      <button
        id="hamburger"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="sidebar"
        onClick={() => setOpen((value) => !value)}
        className="fixed left-3 top-3 z-(--z-hamburger) hidden flex-col gap-1 px-2 py-2.5 max-nav:flex"
      >
        <span
          className={`${bar} ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`${bar} ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      <div className="flex min-h-screen">
        <Sidebar open={open} onNavigate={() => setOpen(false)} />
        <div className="ml-(--sidebar-w) flex min-h-screen min-w-0 flex-1 flex-col overflow-y-clip max-nav:ml-0">
          <Topbar />
          <main
            key={pathname}
            className="w-full animate-fade-up p-(--page-pad)"
          >
            {children}
          </main>
        </div>
      </div>

      <ScrollReveal />
    </>
  );
}
