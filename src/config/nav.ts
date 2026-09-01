type NavItem = { href: string; label: string };
type NavSection = { label: string; items: NavItem[] };
type Crumb = { label: string; href: string };

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
      { href: "/credits", label: "Credits" },
    ],
  },
];

export const allRoutes: string[] = navSections.flatMap((section) =>
  section.items.map((item) => item.href),
);

const HOME: Crumb = { label: "FAQ", href: "/" };

const breadcrumbs: Record<string, Crumb[]> = Object.fromEntries(
  navSections
    .flatMap((s) => s.items)
    .map((i) => [i.href, [HOME, { label: i.label, href: i.href }]]),
);

export function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function breadcrumbFor(path: string): Crumb[] {
  return breadcrumbs[normalizePath(path)] ?? [HOME];
}
