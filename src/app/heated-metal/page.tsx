import type { Metadata } from "next";
import { Note } from "@/components/Note";
import { FaqHero } from "@/components/FaqHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable, type SeasonRow } from "@/components/SeasonTable";
import { ExternalLink } from "@/components/ExternalLink";
import { LinkButton } from "@/components/LinkButton";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnDownloader, OnLauncher } from "@/components/OnMethod";
import { OnLinux, OnWindows } from "@/components/OnPlatform";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";
import { stepBox, stepList } from "@/components/ui";
import { PROTON, StrokeIcon } from "@/components/StrokeIcon";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.heatedMetal,
  path: "/heated-metal",
});

const heatedMetalSeasons: SeasonRow[] = [
  {
    season: "Y5S3",
    operation: "Shadow Legacy",
    version: "v0.2.3",
    build: "15018155",
  },
  {
    season: "Y5S4",
    operation: "Neon Dawn",
    version: "Latest",
    build: "15241382",
  },
  {
    season: "Y9S2",
    operation: "New Blood",
    version: "Unstable",
    build: "72730050",
  },
];

const faqs: FaqItem[] = [
  {
    id: "crossplay",
    q: "Can I play with people who do not have Heated Metal?",
    a: (
      <p>
        No. Heated Metal changes the game itself, so everyone in a match needs
        the same Heated Metal build. Your Throwback install stays untouched.
      </p>
    ),
  },
  {
    id: "keep-both",
    q: "Can I keep Throwback and Heated Metal installed at the same time?",
    method: "launcher",
    a: (
      <p>
        Yes, but each install takes the full size of the season. If you only
        want Heated Metal, use <strong>Switch to HM</strong> in the{" "}
        <strong>Manage</strong> tab instead of downloading it twice.
      </p>
    ),
  },
];

export default function HeatedMetal() {
  return (
    <>
      <FaqHero page="heatedMetal" />

      <MethodSwitch />

      <SectionTitle flush>Support</SectionTitle>
      <Prose>
        <p>
          Heated Metal is an SDK (Software Development Kit) for R6S by{" "}
          <ExternalLink href={site.heatedMetalRepoUrl}>
            DataCluster0
          </ExternalLink>{" "}
          that adds extended capabilities to the following seasons.
        </p>
        <SeasonTable rows={heatedMetalSeasons} showVersion />
      </Prose>

      <div>
        <LinkButton href={site.heatedMetalRepoUrl}>Repository</LinkButton>
        <LinkButton href={site.heatedMetalDiscordUrl} variant="secondary">
          Discord
        </LinkButton>
      </div>

      <SectionTitle>Requirements</SectionTitle>
      <Prose>
        <ul>
          <OnWindows>
            <li>
              Latest <a href={site.vcRedistUrl}>Visual C++ Redistributable</a>
            </li>
          </OnWindows>
          <li>Medium or above in-game textures on Y5S3 Shadow Legacy</li>
          <OnWindows>
            <li>External overlays like Overwolf disabled</li>
          </OnWindows>
          <OnLinux>
            <li>External overlays disabled</li>
          </OnLinux>
        </ul>
      </Prose>

      <SectionTitle>Installation</SectionTitle>
      <Prose>
        <OnLauncher>
          <ol>
            <li>
              Navigate to one of the supported seasons above and switch to the{" "}
              <strong>Heated Metal</strong> tab
            </li>
            <li>
              Press <strong>Download</strong>
            </li>
          </ol>
          <OnLinux>
            <div className={`mb-4 w-fit max-w-[720px] ${stepBox}`}>
              <p className="mb-[0.3rem] text-[0.78rem] leading-[1.45]">
                <strong>Y9S2 Heated Metal</strong> only runs on a specific
                Proton build.
              </p>
              <ol className={stepList}>
                <li>
                  Download the Proton build from{" "}
                  <ExternalLink
                    href={site.heatedMetalDiscordUrl}
                    className="whitespace-nowrap"
                  >
                    <code>#indev-releases</code>
                  </ExternalLink>
                </li>
                <li>
                  Extract it into{" "}
                  <code>~/.local/share/ThrowbackLauncher/bin/proton</code>
                </li>
                <li>
                  Pick it under{" "}
                  <strong>
                    <StrokeIcon
                      d={PROTON}
                      className="inline size-[1.15em] align-[-0.2em]"
                    />{" "}
                    Proton
                  </strong>{" "}
                  in the <strong>Manage</strong> tab
                </li>
              </ol>
            </div>
          </OnLinux>
        </OnLauncher>
        <OnDownloader>
          <ol>
            <li>
              Run the downloader and select <strong>Heated Metal</strong> from
              the main menu
            </li>
            <li>
              Select <strong>Download Heated Metal</strong> and pick a season
            </li>
            <li>
              Launch the game with <code>LaunchR6.bat</code>
            </li>
          </ol>
        </OnDownloader>
        <Note>
          <strong>Y9S2 Heated Metal</strong> is only available on the{" "}
          <ExternalLink href={site.heatedMetalDiscordUrl}>
            Heated Metal Discord
          </ExternalLink>
          . Download the latest <code>Unstable.7z</code> from{" "}
          <ExternalLink
            href={site.heatedMetalDiscordUrl}
            className="whitespace-nowrap"
          >
            <code>#indev-releases</code>
          </ExternalLink>
          <OnDownloader> and copy the files into your game folder</OnDownloader>
          .
        </Note>
      </Prose>

      <SectionTitle>Usage</SectionTitle>
      <Prose>
        <ul>
          <li>
            Press <strong>F1</strong> to open the context menu (console,
            inventory, and more)
          </li>
          <li>
            Press <strong>F3</strong> to open the map editor
          </li>
          <li>
            Run the <code>Setup</code> command in the console to customize your
            keybinds
          </li>
          <li>
            The host can grant admin permissions in the console under{" "}
            <strong>Network</strong> and then <strong>Connections</strong>,
            unlocking the editor and additional features
          </li>
        </ul>
      </Prose>

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
