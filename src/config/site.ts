const discordInvite = "r6s-operation-throwback-2-0-1092820800203141130";
const launcherRepoUrl = "https://github.com/xeralin/ThrowbackLauncher";
const jvavRepoUrl = "https://github.com/JOJOVAV/r6-downloader";

export const site = {
  name: "Throwback FAQ",
  description:
    "Your guide to downloading, setting up, and playing older Rainbow Six Siege seasons.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://throwback-faq.example",
  heroImage: "/media/throwback.webp",
  ogImage: "/media/og.jpg",
  themeColor: "#c0152a",
  discordInvite,
  discordUrl: `https://discord.gg/${discordInvite}`,
  launcherRepoUrl,
  launcherDownloadUrl: `${launcherRepoUrl}/releases/latest`,
  jvavRepoUrl,
  jvavDownloaderUrl: `${jvavRepoUrl}/releases/latest`,
  indevReleasesUrl:
    "https://discord.com/channels/1321476389815324733/1498791837346037861",
  helpChannelUrl:
    "https://discord.com/channels/1092820800203141130/1106957787516379267",
  heatedMetalDiscordUrl: "https://discord.gg/7mR9VxBxWd",
  heatedMetalRepoUrl: "https://github.com/DataCluster0/HeatedMetal",
  depotDownloaderRepoUrl: "https://github.com/SteamRE/DepotDownloader",
  oldLoaderRepoUrl: "https://github.com/lungu19/ThrowbackLoader",
  radminVpnUrl: "https://radmin-vpn.com/",
} as const;
