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
  yearPairs,
} from "@/config/liberator-builds";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.liberator,
  path: "/liberator",
});

export default function Liberator() {
  return (
    <>
      <FaqHero page="liberator" />

      <Note className="mb-6">
        The Liberator for{" "}
        <ExternalLink href={site.jvavDownloaderUrl}>
          JVAV&apos;s Downloader
        </ExternalLink>{" "}
        is available in{" "}
        <ExternalLink href={site.downloadsChannelUrl}>
          <code>#downloads</code>
        </ExternalLink>
        , but this version is no longer maintained.
      </Note>

      <SectionTitle>How to Use It</SectionTitle>
      <Prose>
        <ol>
          <li>Create a local custom game</li>
          <li>
            Select the game mode in the <strong>Playlist</strong> tab on the
            Liberator page
          </li>
          <li>
            For any PvE mode, make sure all players are on the{" "}
            <strong>blue team</strong>, then start the match
          </li>
        </ol>
      </Prose>

      <SectionTitle>Support</SectionTitle>
      <Prose>
        <div className="flex flex-wrap items-start gap-x-4">
          <SeasonTable rows={FULL_SUPPORT} />
          <SeasonTable rows={FULL_SUPPORT_EVENTS} showEvent />
          {yearPairs(UNLOCK_ALL_SEASONS).map((rows) => (
            <SeasonTable key={rows[0].build} rows={rows} />
          ))}
        </div>
      </Prose>
    </>
  );
}
