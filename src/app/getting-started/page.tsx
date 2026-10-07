import type { Metadata } from "next";
import { Note } from "@/components/Note";
import Link from "next/link";
import { FaqHero } from "@/components/FaqHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { GettingStartedSteps } from "@/components/GettingStartedSteps";
import { ExclusionSteps } from "@/components/ExclusionSteps";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ExternalLink } from "@/components/ExternalLink";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.gettingStarted,
  path: "/getting-started",
});

const faqs: FaqItem[] = [
  {
    id: "browser-block",
    q: "My browser is blocking the download. What should I do?",
    platform: "windows",
    a: (
      <>
        <p>
          Some browsers block downloads that contain executable files. To get
          around this, follow the steps for your browser.
        </p>
        <ul>
          <li>
            <strong>Chrome</strong> — Open <code>chrome://downloads</code>,
            click the three dots next to the blocked entry and select{" "}
            <strong>Keep dangerous file</strong>
          </li>
          <li>
            <strong>Edge</strong> — Click the three dots next to the blocked
            item and select <strong>Keep</strong>, and if another warning
            follows, click <strong>Show more</strong> and press{" "}
            <strong>Keep anyway</strong>
          </li>
          <li>
            <strong>Firefox</strong> — Open the downloads panel in the toolbar,
            click the blocked download and press <strong>Allow Download</strong>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "antivirus-exclusion",
    q: "How do I add an antivirus exclusion?",
    platform: "windows",
    method: "launcher",
    a: (
      <>
        <p>
          Windows Security may flag Heated Metal and the Liberator as false
          positives.
        </p>
        <ExclusionSteps folder="the Launcher folder and your library folders" />
      </>
    ),
  },
  {
    id: "antivirus-exclusion",
    q: "How do I add an antivirus exclusion?",
    platform: "windows",
    method: "downloader",
    a: (
      <>
        <p>Windows Security may flag game files as false positives.</p>
        <ExclusionSteps folder="your R6S folder" />
      </>
    ),
  },
  {
    id: "steam-login",
    q: "Why does the Launcher need my Steam login?",
    method: "launcher",
    a: (
      <>
        <p>
          Your login is required to access the Steam depot servers, where the
          old game files are stored. The Launcher uses{" "}
          <ExternalLink href={site.depotDownloaderRepoUrl}>
            DepotDownloader
          </ExternalLink>
          , an open-source tool.
        </p>
        <Note className="my-3">
          Your password is never stored. The Launcher keeps only an access
          token, just like the Steam client.
        </Note>
      </>
    ),
  },
  {
    id: "steam-login",
    q: "Why does the downloader need my Steam login?",
    method: "downloader",
    a: (
      <>
        <p>
          Your login is required to access the Steam depot servers, where the
          old game files are stored. The downloader uses{" "}
          <ExternalLink href={site.depotDownloaderRepoUrl}>
            DepotDownloader
          </ExternalLink>
          , an open-source tool.
        </p>
        <Note className="my-3">
          Your password is never stored. DepotDownloader keeps only an access
          token, just like the Steam client.
        </Note>
      </>
    ),
  },
  {
    id: "username",
    q: "How do I change my username?",
    method: "downloader",
    a: (
      <>
        <p>
          Your username is stored in <code>ThrowbackLoader.toml</code> in your
          season folder. Open it and edit the <code>username</code> field (max
          16 characters).
        </p>
        <Note className="my-3">
          Make sure to save the file before launching the game.
        </Note>
      </>
    ),
  },
  {
    id: "loader-files",
    q: "How do I replace the Loader files?",
    method: "downloader",
    a: (
      <>
        <ol>
          <li>
            Download the latest Loader <code>.zip</code> from the official{" "}
            <ExternalLink href={`${site.oldLoaderRepoUrl}/releases/latest`}>
              repository
            </ExternalLink>
          </li>
          <li>
            Extract the <code>.zip</code>
          </li>
          <li>
            Copy the contents into your season folder and replace any existing
            files when prompted
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "pause-download",
    q: "Can I pause a download and continue it later?",
    method: "downloader",
    a: (
      <p>
        Yes. Close the downloader at any point. When you reopen it and select
        the same season, it will verify existing files and continue from where
        it left off.
      </p>
    ),
  },
  {
    id: "download-broken",
    q: "Why is my download stuck at a certain percentage?",
    a: (
      <p>
        Some game files are very large, and the percentage only updates when a
        file is done. If there is network activity, it is still downloading.
      </p>
    ),
  },
  {
    id: "current-season",
    q: "Do I need the current season of R6S installed?",
    a: <p>No. Each downloaded season runs on its own, like a separate game.</p>,
  },
];

export default function GettingStarted() {
  return (
    <>
      <FaqHero page="gettingStarted" />

      <Note className="mb-8">
        This guide only works if you own R6S on Steam. Ubisoft Connect and Epic
        Games accounts are not supported.
      </Note>

      <GettingStartedSteps />

      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FaqAccordion items={faqs} />

      <SectionTitle>Need Help?</SectionTitle>
      <Prose>
        <p>
          If you run into issues, check the{" "}
          <Link href="/common-errors">Common Errors</Link> page or visit the{" "}
          <Link href="/how-to-get-help">How to Get Help</Link> page for guidance
          on reporting problems to staff.
        </p>
      </Prose>
    </>
  );
}
