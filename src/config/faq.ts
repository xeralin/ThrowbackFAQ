type FaqPage = {
  title: string;
  description: string;
  tag: string;
  corner: string;
};

export const FAQ_PAGES = {
  "getting-started": {
    title: "Getting Started",
    description: "How to set up and download Operation Throwback.",
    tag: "Support",
    corner: "SETUP",
  },
  "common-errors": {
    title: "Common Errors",
    description: "Solutions to the most encountered game issues.",
    tag: "Support",
    corner: "ERR",
  },
  multiplayer: {
    title: "Multiplayer",
    description: "How to set up and play with others using Radmin VPN.",
    tag: "Support",
    corner: "MP",
  },
  "how-to-get-help": {
    title: "How to Get Help",
    description: "What to include in a report so the staff can help you.",
    tag: "Support",
    corner: "HELP",
  },
  liberator: {
    title: "Liberator",
    description: "Unlock all cosmetics, playlists and modifications.",
    tag: "Tools & Mods",
    corner: "LIB",
  },
  "heated-metal": {
    title: "Heated Metal",
    description: "An SDK with a map editor, scripting, unlock all and more.",
    tag: "Tools & Mods",
    corner: "HM",
  },
  "cheat-engine": {
    title: "Cheat Engine",
    description: "How to set up Cheat Engine and use the cheat tables.",
    tag: "Tools & Mods",
    corner: "CE",
  },
  "extended-rules": {
    title: "Extended Rules",
    description: "The rules of the Operation Throwback Discord server.",
    tag: "Community",
    corner: "RULES",
  },
  staff: {
    title: "Staff",
    description: "The staff and contributors behind Operation Throwback.",
    tag: "Community",
    corner: "TEAM",
  },
} satisfies Record<string, FaqPage>;
