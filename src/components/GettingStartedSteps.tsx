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

function LauncherSteps() {
  return (
    <>
      <SectionTitle flush>Download</SectionTitle>
      <Prose>
        <OnWindows>
          <ol>
            <li>
              Download <code>Installer.exe</code> from the{" "}
              <ExternalLink href={site.launcherDownloadUrl}>
                latest release
              </ExternalLink>{" "}
              and run it
            </li>
            <li>
              If Windows Security removes the installer, allow it under{" "}
              <strong>Protection history</strong> and run it again
            </li>
            <li>
              If SmartScreen shows <strong>Windows protected your PC</strong>,
              click <strong>More info</strong> and then{" "}
              <strong>Run anyway</strong>
            </li>
          </ol>
          <div className="flex flex-wrap gap-3">
            <ContentImage
              src="/media/others/smartscreen-blocked.webp"
              alt="Windows SmartScreen blocking the installer"
              width={530}
              height={497}
              className="max-w-[300px] rounded-md border border-border"
            />
            <ContentImage
              src="/media/others/smartscreen-run-anyway.webp"
              alt="SmartScreen after clicking More info, showing Run anyway"
              width={530}
              height={497}
              className="max-w-[300px] rounded-md border border-border"
            />
          </div>
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
          <ol>
            <li>
              Keep the default folder for your installation or choose a
              different drive
            </li>
            <li>
              Press <strong>Install</strong> and wait until the installation is
              done
            </li>
          </ol>
          <ContentImage
            src="/media/others/installer.webp"
            alt="The Throwback Launcher installer after the installation is done"
            width={440}
            height={168}
            className="max-w-[440px] rounded-none border-0"
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
        <ExclusionSteps folder="choose your R6S folder" />
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
