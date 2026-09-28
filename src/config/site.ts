const discordInvite = "r6s-operation-throwback-1092820800203141130";

export const site = {
  name: "Throwback FAQ",
  description:
    "Your guide to downloading, setting up, and playing older Rainbow Six Siege seasons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://throwback-faq.example",
  heroImage: "/media/throwback.webp",
  ogImage: "/media/og.webp",
  themeColor: "#c0152a",
  discordInvite,
  discordUrl: `https://discord.gg/${discordInvite}`,
  launcherDownloadUrl:
    "https://github.com/xeralin/ThrowbackLauncher/releases/latest",
  jvavDownloaderUrl: "https://github.com/JOJOVAV/r6-downloader/releases/latest",
  indevReleasesUrl:
    "https://discord.com/channels/1321476389815324733/1498791837346037861",
  helpChannelUrl:
    "https://discord.com/channels/1092820800203141130/1106957787516379267",
  downloadsChannelUrl:
    "https://discord.com/channels/1092820800203141130/1546626232936824944",
  heatedMetalDiscordUrl: "https://discord.gg/7mR9VxBxWd",
  heatedMetalRepoUrl: "https://github.com/DataCluster0/HeatedMetal",
  depotDownloaderRepoUrl: "https://github.com/SteamRE/DepotDownloader",
  oldLoaderRepoUrl: "https://github.com/lungu19/ThrowbackLoader",
  radminVpnUrl: "https://radmin-vpn.com/",
} as const;
