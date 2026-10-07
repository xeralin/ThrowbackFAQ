import type { Metadata } from "next";
import { FaqHero } from "@/components/FaqHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { ExternalLink } from "@/components/ExternalLink";
import { LinkButton } from "@/components/LinkButton";
import { OnLinux, OnWindows } from "@/components/OnPlatform";
import { PROTON, StrokeIcon } from "@/components/StrokeIcon";
import { heading, panel } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { withBasePath } from "@/lib/asset";
import { FAQ_PAGES } from "@/config/faq";

const CHEAT_ENGINE_URL = "https://cheatengine.org/downloads.php";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.cheatEngine,
  path: "/cheat-engine",
});

const tables = [
  {
    name: "Y3S1 Chimera",
    description: "Spawns far more enemies across all Terrorist Hunt modes.",
    file: "y3s1-chimera.ct",
    download: "Y3S1_Chimera.ct",
  },
  {
    name: "Y5S3 Shadow Legacy",
    description:
      "Adds mass spawns, health and ammo tweaks, near-unlimited survivability, longer defuse timers, and outside-zone access to Terrorist Hunt.",
    file: "y5s3-shadowlegacy.ct",
    download: "Y5S3_ShadowLegacy.ct",
  },
];

export default function CheatEngine() {
  return (
    <>
      <FaqHero page="cheatEngine" />

      <SectionTitle>Setup</SectionTitle>
      <Prose>
        <OnWindows>
          <ol>
            <li>
              Download{" "}
              <ExternalLink href={CHEAT_ENGINE_URL}>Cheat Engine</ExternalLink>{" "}
              for Windows and run the installer
            </li>
            <li>
              Click through the installer and{" "}
              <strong>deny any bundled offers</strong> to avoid adware
            </li>
          </ol>
        </OnWindows>
        <OnLinux>
          <ol>
            <li>
              Download{" "}
              <ExternalLink href={CHEAT_ENGINE_URL}>Cheat Engine</ExternalLink>{" "}
              for Windows
            </li>
            <li>
              Turn on <strong>Cheat Engine</strong> under{" "}
              <strong>
                <StrokeIcon
                  d={PROTON}
                  className="inline size-[1.15em] align-[-0.2em]"
                />{" "}
                Proton
              </strong>{" "}
              in the <strong>Manage</strong> tab of a season
            </li>
            <li>Pick the installer and click through it</li>
            <li>Cheat Engine opens alongside the game</li>
          </ol>
        </OnLinux>
      </Prose>

      <SectionTitle>How to Use It</SectionTitle>
      <Prose>
        <ol>
          <li>Dismiss the pop-ups the first time you open Cheat Engine</li>
          <li>
            Download a table below and load it in Cheat Engine via the{" "}
            <strong>folder icon</strong>
          </li>
          <li>
            Launch the game, then attach Cheat Engine by clicking the{" "}
            <strong>monitor icon</strong> and selecting the game process
          </li>
          <li>
            Tick the <strong>checkbox</strong> next to the table entry to
            activate it
          </li>
        </ol>
      </Prose>

      <SectionTitle>Cheat Tables</SectionTitle>
      <div className="flex flex-col gap-4">
        {tables.map((table) => (
          <div key={table.file} className={`${panel} p-5`}>
            <h3 className={heading}>{table.name}</h3>
            <p className="mb-3 mt-2 text-ui leading-[1.5] text-text-muted">
              {table.description}
            </p>
            <LinkButton
              href={withBasePath(`/ct/${table.file}`)}
              download={table.download}
            >
              Download
            </LinkButton>
          </div>
        ))}
      </div>
    </>
  );
}
