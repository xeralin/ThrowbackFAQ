import type { Metadata } from "next";
import { Note } from "@/components/Note";
import { FaqHero } from "@/components/FaqHero";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SupportedSeasons } from "@/components/SupportedSeasons";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.liberator,
  path: "/liberator",
});

const faqs: FaqItem[] = [
  {
    id: "operators-locked",
    q: "Why are my operators locked?",
    a: (
      <p>
        Operators stay locked until the Liberator has finished loading. Check
        the status next to the <strong>Liberator</strong> switch on the
        Liberator page in the Launcher and wait until it shows{" "}
        <strong>Idle</strong> or <strong>Unlock All has been applied</strong>.
      </p>
    ),
  },
];

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

      <SupportedSeasons />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />
    </>
  );
}
