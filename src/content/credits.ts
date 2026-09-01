export type CreditRole =
  "admin" | "moderator" | "developer" | "seniorhelper" | "helper";

type CreditSection = "faqContributors" | "staff";

export type CreditUser = {
  name: string;
  roles: CreditRole[];
  tags?: string[];
  github?: string;
  dono?: string;
  avatar: string;
  sections: CreditSection[];
};

export const sectionOrder: { id: CreditSection; label: string }[] = [
  { id: "faqContributors", label: "FAQ Contributors" },
  { id: "staff", label: "Staff" },
];

export const users: CreditUser[] = [
  {
    name: "Astrea",
    roles: ["admin", "developer"],
    tags: ["Artemis"],
    github: "https://github.com/Astrea0014",
    avatar: "/media/pfp/astrea.webp",
    sections: ["staff"],
  },
  {
    name: "Puppetino",
    roles: ["admin"],
    tags: ["FAQ", "Legacy FAQ", "Discord Bot"],
    github: "https://github.com/Puppetino",
    dono: "https://buymeacoffee.com/Puppetino",
    avatar: "/media/pfp/puppetino.webp",
    sections: ["faqContributors"],
  },
  {
    name: "Midly",
    roles: ["admin", "moderator", "seniorhelper"],
    github: "https://github.com/midly202",
    avatar: "/media/pfp/midly.webp",
    sections: ["staff"],
  },
  {
    name: "Muhnkie",
    roles: ["moderator", "developer"],
    avatar: "/media/pfp/muhnkie.webp",
    sections: ["staff"],
  },
  {
    name: "Auralicy",
    roles: ["moderator", "seniorhelper", "helper"],
    avatar: "/media/pfp/auralicy.webp",
    sections: ["staff"],
  },
  {
    name: "Xera",
    roles: ["developer"],
    tags: ["FAQ", "Launcher", "Liberator", "ThrowbackLoader"],
    github: "https://github.com/xeralin",
    avatar: "/media/pfp/xeralin.webp",
    sections: ["staff", "faqContributors"],
  },
  {
    name: "AKrisz2",
    roles: ["moderator", "developer"],
    tags: ["R6S Downloader"],
    github: "https://github.com/AKrisz2",
    avatar: "/media/pfp/akrisz2.webp",
    sections: ["staff"],
  },
  {
    name: "Benjaminstrike",
    roles: ["developer"],
    tags: ["Discord AI"],
    github: "https://github.com/benjaminstrike",
    avatar: "/media/pfp/benjaminstrike.gif",
    sections: ["staff"],
  },
  {
    name: "Lordelias",
    roles: ["developer"],
    github: "https://github.com/LordEliasTM",
    avatar: "/media/pfp/lordelias.webp",
    sections: ["staff"],
  },
  {
    name: "0xLusion",
    roles: ["developer"],
    avatar: "/media/pfp/0xlusion.webp",
    sections: ["staff"],
  },
  {
    name: "Seopung",
    roles: ["moderator", "developer"],
    avatar: "/media/pfp/seopung.webp",
    sections: ["staff"],
  },
  {
    name: "JVAV",
    roles: ["developer", "seniorhelper"],
    tags: ["Legacy FAQ", "R6S Downloader"],
    github: "https://github.com/JOJOVAV",
    dono: "https://buymeacoffee.com/jvav",
    avatar: "/media/pfp/jvav.webp",
    sections: ["staff"],
  },
  {
    name: "Techtical",
    roles: ["seniorhelper", "helper"],
    avatar: "/media/pfp/techtical.webp",
    sections: ["staff"],
  },
  {
    name: "ConfusingFool93",
    roles: ["helper"],
    github: "https://github.com/AvacadoWizard120",
    avatar: "/media/pfp/confusingfool93.webp",
    sections: ["staff"],
  },
  {
    name: "Wntr",
    roles: ["helper"],
    avatar: "/media/pfp/wntr.webp",
    sections: ["staff"],
  },
  {
    name: "Celestarr",
    roles: ["helper"],
    avatar: "/media/pfp/celestarr.webp",
    sections: ["staff"],
  },
  {
    name: "xanax",
    roles: ["helper"],
    avatar: "/media/pfp/xanax.webp",
    sections: ["staff"],
  },
];
