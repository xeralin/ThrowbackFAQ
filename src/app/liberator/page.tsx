import type { Metadata } from "next";
import { Note } from "@/components/Note";
import { FaqHero } from "@/components/FaqHero";
import { ExternalLink } from "@/components/ExternalLink";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { SupportedSeasons } from "@/components/SupportedSeasons";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { StrokeIcon } from "@/components/StrokeIcon";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.liberator,
  path: "/liberator",
});

function AppliedIcon() {
  return (
    <span
      role="img"
      aria-label="Unlock All has been applied"
      className="inline-flex align-[-0.2em]"
    >
      <StrokeIcon className="size-[1.22em] text-success">
        <rect
          x="3"
          y="11"
          width="13"
          height="10"
          rx="1.5"
          fill="currentColor"
        />
        <path d="M12.5 10V6a3.75 3.75 0 0 1 7.5 0v2" strokeWidth={2.5} />
      </StrokeIcon>
    </span>
  );
}

const faqs: FaqItem[] = [
  {
    id: "operators-locked",
    q: "Why are my operators locked?",
    a: (
      <p>
        Since Y8S3 Heavy Mettle, operators are locked by default. Wait until the
        Liberator page in the Launcher shows <AppliedIcon /> next to the{" "}
        <strong>Liberator</strong> switch.
      </p>
    ),
  },
  {
    id: "unsupported-build",
    q: "Why is there a warning next to the Liberator switch?",
    a: (
      <p>
        Your game build is not supported. The Liberator only supports specific
        game builds. The <strong>Support</strong> and{" "}
        <strong>Unlock All</strong> tabs above list every supported build.
      </p>
    ),
  },
];

export default function Liberator() {
  return (
    <>
      <FaqHero page="liberator" />

      <Note>
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
