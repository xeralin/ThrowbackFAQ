type FaqPage = {
  title: string;
  description: string;
  tag: string;
  corner: string;
};

export const FAQ_PAGES = {
  gettingStarted: {
    title: "Getting Started",
    description: "How to get set up and download your first season.",
    tag: "Support & Troubleshooting",
    corner: "SETUP",
  },
  multiplayer: {
    title: "Multiplayer",
    description:
      "How to set up and play with others using Radmin VPN or ZeroTier.",
    tag: "Support & Troubleshooting",
    corner: "MP",
  },
  commonErrors: {
    title: "Common Errors",
    description: "Solutions to the most frequently encountered game issues.",
    tag: "Support & Troubleshooting",
    corner: "ERR",
  },
  howToGetHelp: {
    title: "How to Get Help",
    description: "What to include in a report so the staff can help you.",
    tag: "Support & Troubleshooting",
    corner: "HELP",
  },
  liberator: {
    title: "Liberator",
    description: "Unlock all cosmetics, add extra playlists and modifications.",
    tag: "Tools & Mods",
    corner: "LIB",
  },
  heatedMetal: {
    title: "Heated Metal",
    description: "An SDK with a map editor, scripting, unlock all and more.",
    tag: "Tools & Mods",
    corner: "HM",
  },
  cheatEngine: {
    title: "Cheat Engine",
    description: "How to set up Cheat Engine and use the cheat tables.",
    tag: "Tools & Mods",
    corner: "CE",
  },
  extendedRules: {
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
