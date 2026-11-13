type NavItem = { href: string; label: string };
type NavSection = { label: string; items: NavItem[] };

export const navSections: NavSection[] = [
  {
    label: "General",
    items: [
      { href: "/", label: "Home" },
      { href: "/getting-started", label: "Getting Started" },
    ],
  },
  {
    label: "Support",
    items: [
      { href: "/common-errors", label: "Common Errors" },
      { href: "/multiplayer", label: "Multiplayer" },
      { href: "/how-to-get-help", label: "How to Get Help" },
    ],
  },
  {
    label: "Tools & Mods",
    items: [
      { href: "/liberator", label: "Liberator" },
      { href: "/heated-metal", label: "Heated Metal" },
      { href: "/cheat-engine", label: "Cheat Engine" },
    ],
  },
  {
    label: "Community",
    items: [
      { href: "/extended-rules", label: "Extended Rules" },
      { href: "/staff", label: "Staff" },
    ],
  },
];

const navItems = navSections.flatMap((section) => section.items);

export const allRoutes = navItems.map((item) => item.href);

const HOME: NavItem = { label: "FAQ", href: "/" };

const breadcrumbs: Record<string, NavItem[]> = Object.fromEntries(
  navItems.map((item) => [item.href, [HOME, item]]),
);

export function normalizePath(path: string): string {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function breadcrumbFor(path: string): NavItem[] {
  return breadcrumbs[normalizePath(path)] ?? [HOME];
}
