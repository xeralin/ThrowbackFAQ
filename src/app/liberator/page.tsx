import type { Metadata } from "next";
import { Note } from "@/components/Note";
import { FaqHero } from "@/components/FaqHero";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import {
  FULL_SUPPORT,
  FULL_SUPPORT_EVENTS,
  UNLOCK_ALL_SEASONS,
} from "@/config/liberator-builds";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.liberator,
  path: "/liberator",
});

export default function Liberator() {
  return (
    <>
      <FaqHero page="liberator" />

      <Note className="mb-6">
        If you do not use the Launcher, an older standalone version is available
        in the{" "}
        <ExternalLink href="https://github.com/JOJOVAV/r6-tools">
          r6-tools
        </ExternalLink>{" "}
        repository.
      </Note>

      <SectionTitle>How to Use It</SectionTitle>
      <Prose>
        <h3>Enabling it</h3>
        <ol>
          <li>Open the Liberator page in the Launcher</li>
          <li>Make sure Liberator is enabled</li>
          <li>Launch the game from the Launcher</li>
        </ol>

        <h3>Custom game</h3>
        <ol>
          <li>Create a local custom game</li>
          <li>
            Select the game mode in the <strong>Playlist</strong> tab on the
            Liberator page
          </li>
          <li>
            If you want to play Terrorist Hunt or the Outbreak event, make sure
            you are on the <strong>blue team</strong>, then start the match
          </li>
        </ol>
      </Prose>

      <SectionTitle>Support</SectionTitle>
      <Prose>
        <div className="flex flex-wrap items-start gap-x-6">
          <SeasonTable rows={FULL_SUPPORT} />
          <SeasonTable rows={FULL_SUPPORT_EVENTS} showEvent />
          <SeasonTable rows={UNLOCK_ALL_SEASONS} />
        </div>
      </Prose>
    </>
  );
}
