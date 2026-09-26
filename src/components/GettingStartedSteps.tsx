"use client";

import { Note } from "@/components/Note";
import { SectionTitle } from "@/components/SectionTitle";
import { Prose } from "@/components/Prose";
import { ContentImage } from "@/components/ContentImage";
import { ContentVideo } from "@/components/ContentVideo";
import { ExternalLink } from "@/components/ExternalLink";
import { ExclusionSteps } from "@/components/ExclusionSteps";
import { MethodSwitch } from "@/components/MethodSwitch";
import { site } from "@/config/site";
import { OnLinux, OnWindows } from "@/components/OnPlatform";
import { useMethod } from "@/lib/method";
import { usePlatform } from "@/lib/platform";

function LauncherSteps() {
  const platform = usePlatform();

  return (
    <>
      <OnWindows>
        <SectionTitle flush>Antivirus</SectionTitle>
        <Prose>
          <p>
            Windows Security may flag the Launcher as a false positive because
            it is not signed by a verified developer.
          </p>
          <ol>
            <li>
              Search for <strong>Virus & threat protection</strong> in the
              Windows start menu
            </li>
            <li>
              Click <strong>Manage settings</strong> under{" "}
              <em>Virus & threat protection settings</em>
            </li>
            <li>
              Turn off <strong>Real-time protection</strong>
            </li>
          </ol>
        </Prose>
      </OnWindows>

      <SectionTitle flush={platform === "linux"}>Download</SectionTitle>
      <Prose>
        <OnWindows>
          <p>
            Download <code>Installer.exe</code> from the{" "}
            <ExternalLink href={site.launcherDownloadUrl}>
              latest release
            </ExternalLink>{" "}
            and run it.
          </p>
          <Note variant="error" className="my-3">
            <a href="#browser-block">Follow these steps</a> if your browser
            blocks the download.
          </Note>
          <p>
            If Windows shows <em>Windows protected your PC</em>, click{" "}
            <strong>More info</strong> and then <strong>Run anyway</strong>.
          </p>
          <ContentImage
            src="/media/others/smartscreen-run-anyway.webp"
            alt="Windows SmartScreen blocking the installer, then More info and Run anyway"
            width={1451}
            height={1360}
            className="max-w-[300px] rounded-md"
          />
        </OnWindows>
        <OnLinux>
          <ol>
            <li>
              Download <code>ThrowbackLauncher.AppImage</code> from the{" "}
              <ExternalLink href={site.launcherDownloadUrl}>
                latest release
              </ExternalLink>
            </li>
            <li>
              Enable <strong>Allow executing file as program</strong> in the
              file properties to make it executable
            </li>
            <li>Open it</li>
          </ol>
        </OnLinux>
      </Prose>

      <OnWindows>
        <SectionTitle>Installation</SectionTitle>
        <Prose>
          <p>
            Press <strong>Install</strong> and follow the steps in the
            installer. Once the exclusion is added, turn{" "}
            <strong>Real-time protection</strong> back on and press{" "}
            <strong>Launch</strong>.
          </p>
          <ContentImage
            src="/media/others/installer.webp"
            alt="The Throwback Launcher installer with the exclusion steps and the Launcher folder"
            width={920}
            height={568}
            className="max-w-[460px] rounded-none border-0"
          />
        </Prose>
      </OnWindows>
    </>
  );
}

function JvavSteps() {
  return (
    <>
      <SectionTitle flush>Prepare an R6S Folder</SectionTitle>
      <Prose>
        <p>
          Create a dedicated folder for the game on whichever drive you want to
          store it. We recommend naming it <strong>R6S</strong>.
        </p>

        <ContentVideo
          src="/media/game-folder.webm"
          label="Creating an R6S folder"
          width={1920}
          height={1080}
        />

        <Note variant="error" className="my-3">
          Do not place the R6S folder inside OneDrive or any other cloud storage
          service.
        </Note>
      </Prose>

      <SectionTitle>Add a Windows Security Exclusion</SectionTitle>
      <Prose>
        <p>
          Before downloading the game, add your R6S folder as an exclusion in
          Windows Security so it does not interfere with game files.
        </p>
        <ExclusionSteps folder="your R6S folder" />
        <ContentVideo
          src="/media/antivirus-exclusion.webm"
          label="Adding an antivirus exclusion"
          width={1920}
          height={1080}
        />
        <p>
          If you use a different antivirus, add the same folder exclusion there.
        </p>
      </Prose>

      <SectionTitle>Download the Game</SectionTitle>
      <Prose>
        <Note className="my-3">Requires .NET 9.0 or newer.</Note>
        <ol>
          <li>
            Download the <code>.bat</code> file from the{" "}
            <ExternalLink href={site.jvavDownloaderUrl}>
              latest release
            </ExternalLink>{" "}
            and place it inside your R6S folder
          </li>
          <li>
            Run the <code>.bat</code> file — it will automatically download
            everything it needs
          </li>
          <li>Enter your Steam account name, not your profile name</li>
          <li>
            Select <strong>Game Downloader</strong> from the main menu
          </li>
          <li>
            Choose the <strong>year</strong>, then the <strong>season</strong>{" "}
            you want to download
          </li>
          <li>
            Log in to your Steam account and wait for the download to complete
          </li>
          <li>
            Navigate to your R6S folder &gt; <code>Downloads</code> &gt;{" "}
            <code>Season</code>
          </li>
          <li>
            Run <code>LaunchR6.bat</code> to launch the game
          </li>
        </ol>
      </Prose>
    </>
  );
}

export function GettingStartedSteps() {
  const method = useMethod();

  return (
    <>
      <MethodSwitch />
      {method === "launcher" ? <LauncherSteps /> : <JvavSteps />}
    </>
  );
}
