type FaqPage = {
  title: string;
  description: string;
  tag: string;
  corner: string;
};

export const FAQ_PAGES = {
  gettingStarted: {
    title: "Getting Started",
    description:
      "A step-by-step guide to setting up and downloading an older season of Rainbow Six Siege.",
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
    description:
      "Cannot find an answer in the FAQ? Here is how to get support from the community and staff.",
    tag: "Support & Troubleshooting",
    corner: "HELP",
  },
  liberator: {
    title: "Liberator",
    description:
      "Unlock all cosmetics and play additional game modes in older Rainbow Six Siege seasons.",
    tag: "Tools & Mods",
    corner: "LIB",
  },
  heatedMetal: {
    title: "Heated Metal",
    description:
      "An SDK for Rainbow Six Siege — map editor, extended scripting, unlock all, and more.",
    tag: "Tools & Mods",
    corner: "HM",
  },
  cheatEngine: {
    title: "Cheat Engine",
    description: "How to use Cheat Engine to modify old Rainbow Six Siege.",
    tag: "Tools & Mods",
    corner: "CE",
  },
  extendedRules: {
    title: "Extended Rules",
    description: "The full Operation Throwback Discord server rules.",
    tag: "Community",
    corner: "RULES",
  },
  credits: {
    title: "Credits",
    description:
      "A big thank you to everyone who has contributed to making Operation Throwback possible.",
    tag: "Community",
    corner: "TY",
  },
} satisfies Record<string, FaqPage>;
