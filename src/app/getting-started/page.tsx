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

const STEAM_STORE_URL = "https://store.steampowered.com/app/359550/";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.gettingStarted,
  path: "/getting-started",
});

const faqs: FaqItem[] = [
  {
    id: "ubisoft-epic-account",
    q: "I do not own R6S on Steam. Can I use my Ubisoft or Epic Games account?",
    method: "launcher",
    a: (
      <>
        <p>
          No. The Launcher uses the Steam depot service to download old game
          seasons. This requires a valid Steam account with a registered license
          for R6S.
        </p>
        <p>
          <strong>R6S is free on Steam</strong> — add it to your Steam library
          on its <ExternalLink href={STEAM_STORE_URL}>store page</ExternalLink>{" "}
          and the Launcher will work.
        </p>
      </>
    ),
  },
  {
    id: "ubisoft-epic-account",
    q: "I do not own R6S on Steam. Can I use my Ubisoft or Epic Games account?",
    method: "downloader",
    a: (
      <>
        <p>
          No. The downloader uses the Steam depot service to download old game
          seasons. This requires a valid Steam account with a registered license
          for R6S.
        </p>
        <p>
          <strong>R6S is free on Steam</strong> — add it to your Steam library
          on its <ExternalLink href={STEAM_STORE_URL}>store page</ExternalLink>{" "}
          and the downloader will work.
        </p>
      </>
    ),
  },
  {
    id: "trojan-malware",
    q: "Is the Launcher a trojan or malware?",
    method: "launcher",
    a: (
      <p>
        No. Your antivirus may flag it because it is not signed by a verified
        developer. If you have concerns, the source code is available in its{" "}
        <ExternalLink href={site.launcherRepoUrl}>repository</ExternalLink> for
        review.
      </p>
    ),
  },
  {
    id: "trojan-malware",
    q: "Is the downloader a trojan or malware?",
    method: "downloader",
    a: (
      <p>
        No. Your antivirus may flag it because it is not signed by a verified
        developer. If you have concerns, the source code is available in its{" "}
        <ExternalLink href={site.jvavRepoUrl}>repository</ExternalLink> for
        review.
      </p>
    ),
  },
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
            <strong>Chrome</strong> — Click the arrow next to the blocked
            download and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Edge</strong> — Click the three dots next to the blocked
            item and select <strong>Keep</strong>
          </li>
          <li>
            <strong>Firefox</strong> — Click the download in the toolbar and
            select <strong>Allow</strong>
          </li>
        </ul>
        <p>
          If that does not work, temporarily disable the enhanced security or
          download protection in your browser, download the file, then enable it
          again.
        </p>
        <Note className="my-3">
          Only download files from the official repositories.
        </Note>
      </>
    ),
  },
  {
    id: "antivirus-exclusion",
    q: "My antivirus is blocking the game. What should I do?",
    platform: "windows",
    method: "launcher",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives. The fix is
          to add your library folder as an exclusion.
        </p>
        <ExclusionSteps folder="choose your library folder">
          <li>Restart your computer and try launching the game again</li>
        </ExclusionSteps>
        <Note className="my-3">
          Use <strong>Verify</strong> in the <strong>Manage</strong> tab of the
          season to restore removed game files.
        </Note>
      </>
    ),
  },
  {
    id: "antivirus-exclusion",
    q: "My antivirus is blocking the game. What should I do?",
    platform: "windows",
    method: "downloader",
    a: (
      <>
        <p>
          Some antivirus programs flag game files as false positives. The fix is
          to add your R6S folder as an exclusion.
        </p>
        <ExclusionSteps folder="choose your R6S folder">
          <li>Restart your computer and try launching the game again</li>
        </ExclusionSteps>
        <Note className="my-3">
          Use <strong>Verify the game</strong> in the downloader to restore
          removed game files.
        </Note>
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
          Your credentials are required to access the Steam depot servers, where
          the old game files are stored. The Launcher uses{" "}
          <ExternalLink href={site.depotDownloaderRepoUrl}>
            DepotDownloader
          </ExternalLink>
          , an open-source tool.
        </p>
        <Note className="my-3">
          Your password is never stored — the Launcher keeps only an encrypted
          access token, just like the Steam client.
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
          Your credentials are required to access the Steam depot servers, where
          the old game files are stored. The downloader uses{" "}
          <ExternalLink href={site.depotDownloaderRepoUrl}>
            DepotDownloader
          </ExternalLink>
          , an open-source tool.
        </p>
        <Note className="my-3">
          Your password is never stored — DepotDownloader keeps only an
          encrypted access token, just like the Steam client.
        </Note>
      </>
    ),
  },
  {
    id: "username",
    q: "How do I change my username?",
    method: "launcher",
    a: (
      <>
        <p>
          Edit the <strong>Username</strong> field in the Launcher Settings (max
          16 characters).
        </p>
        <Note className="my-3">
          Set your username before launching the game so it applies in-game.
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
    id: "discord-presence",
    q: "How does the Discord presence work?",
    method: "launcher",
    a: (
      <>
        <p>
          The Launcher can show the season you are playing as a Discord
          activity. Open the Launcher Settings and enable{" "}
          <strong>Discord presence</strong>.
        </p>
        <Note className="my-3">
          <strong>Share my activity</strong> has to be enabled under{" "}
          <strong>Activity Privacy</strong> in your Discord settings.
        </Note>
      </>
    ),
  },
  {
    id: "verify",
    q: "What does Verify do?",
    method: "launcher",
    a: (
      <p>
        On an installed season the <strong>Manage</strong> tab shows a{" "}
        <strong>Verify</strong> button. It checks for missing or corrupted files
        and re-downloads them without deleting your existing files.
      </p>
    ),
  },
  {
    id: "verify",
    q: "What does Verify do?",
    method: "downloader",
    a: (
      <p>
        Select <strong>Verify the game</strong> in the downloader menu and
        choose the season. It checks for missing or corrupted files and
        re-downloads them without deleting your existing files.
      </p>
    ),
  },
  {
    id: "loader-files",
    q: "How do I replace the loader files?",
    method: "downloader",
    a: (
      <>
        <ol>
          <li>
            Download the latest loader <code>.zip</code> from the official{" "}
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
    id: "different-drive",
    q: "Can I install a season to a different drive?",
    method: "launcher",
    a: (
      <p>
        Yes. Open the Launcher Settings, press <strong>Add library</strong> to
        add a folder, and use the bookmark icon to make it the default. When
        more than one library exists, the Launcher asks which one to use before
        each download.
      </p>
    ),
  },
  {
    id: "different-drive",
    q: "Can I install a season to a different drive?",
    method: "downloader",
    a: (
      <>
        <p>
          Move the downloader to the desired location before downloading — the
          game files are stored next to it.
        </p>
        <Note className="my-3">
          Remember to update your antivirus exclusion to point to the new
          folder.
        </Note>
      </>
    ),
  },
  {
    id: "delete-season",
    q: "How do I delete a season?",
    method: "downloader",
    a: (
      <p>
        Delete the season folder. If the game is still running in the
        background, close it first.
      </p>
    ),
  },
  {
    id: "current-season",
    q: "Do I need the current season of R6S installed?",
    a: <p>No. Each downloaded season runs on its own, like a separate game.</p>,
  },
  {
    id: "proton-version",
    q: "Which Proton version does the Launcher use?",
    method: "launcher",
    platform: "linux",
    a: (
      <p>
        The Launcher picks a Proton version that you have installed. You can
        change it under <strong>Proton</strong> in the Launcher Settings.
      </p>
    ),
  },
  {
    id: "download-stuck",
    q: "My download is stuck at a certain percentage. Is it broken?",
    method: "downloader",
    a: (
      <p>
        Not necessarily. The progress bar only updates when an individual file
        is done downloading, and some files are very large. Open Task Manager
        and check whether the downloader or <strong>.NET Host</strong> is using
        network bandwidth. If so, the download is still active.
      </p>
    ),
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
