import type { Metadata } from "next";
import { Note } from "@/components/Note";
import Link from "next/link";
import { FaqHero } from "@/components/FaqHero";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ContentImage } from "@/components/ContentImage";
import { ExternalLink } from "@/components/ExternalLink";
import { MethodSwitch } from "@/components/MethodSwitch";
import { OnDownloader, OnLauncher } from "@/components/OnMethod";
import { OnWindows } from "@/components/OnPlatform";
import { withBasePath } from "@/lib/asset";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("common-errors");

const faqs: FaqItem[] = [
  {
    id: "game-crash",
    q: "Why does my game keep crashing?",
    platform: "windows",
    a: (
      <>
        <p>
          If your game crashes or you get an <code>MSVCRXXX.dll</code> or{" "}
          <code>D3DCOMPILER_43.dll</code> error, follow these steps.
        </p>
        <ol>
          <li>
            Download{" "}
            <a href="https://github.com/abbodi1406/vcredist/releases/latest/download/VisualCppRedist_AIO_x86_x64.exe">
              <code>VisualCppRedist_AIO_x86_x64.exe</code>
            </a>{" "}
            and run it as administrator
          </li>
          <li>
            Download the{" "}
            <ExternalLink href="https://www.microsoft.com/en-US/download/details.aspx?id=35">
              DirectX End-User Runtime Web Installer
            </ExternalLink>{" "}
            from Microsoft and run <code>dxwebsetup.exe</code>
          </li>
          <li>
            Disable external overlays like Overwolf, since they may be
            incompatible with the old R6S build
          </li>
          <li>Restart your computer and try launching the game again</li>
        </ol>
        <Note className="my-3">
          If the problem persists, make sure Windows is fully up to date.
        </Note>
      </>
    ),
  },
  {
    id: "download-errors",
    q: "I am getting errors while downloading. What should I do?",
    method: "launcher",
    a: (
      <ul>
        <li>
          <strong>Could not connect to Steam</strong> — Check your internet
          connection and try again, since the Steam servers may be briefly
          unreachable
        </li>
        <li>
          <strong>Too many login attempts</strong> — Steam is blocking further
          logins, so wait a while before trying again
        </li>
        <li>
          <strong>Steam login failed</strong> — Check your password and Steam
          Guard code, then log in again
        </li>
        <li>
          <strong>You do not own R6S on Steam</strong> — You need a Steam
          account that owns R6S
        </li>
        <li>
          <strong>A file is already in use</strong> — Close any program that
          might be interfering, such as
          <OnWindows> your antivirus or</OnWindows> another game instance
        </li>
        <li>
          <strong>Not enough disk space</strong> — Free up storage space with
          Shears or pick a different library
        </li>
        <li>
          <strong>Download failed</strong> — Press <strong>Verify</strong> to
          continue the download
        </li>
      </ul>
    ),
  },
  {
    id: "download-errors",
    q: "I am getting errors while downloading. What should I do?",
    method: "downloader",
    a: (
      <ul>
        <li>
          <strong>Encountered error downloading chunk</strong> — Safe to ignore,
          since the Steam servers were briefly unreachable and the downloader
          retries automatically
        </li>
        <li>
          <strong>Depot is not available</strong> — You do not own R6S on Steam,
          or your account owns the regional SKU RUS version
        </li>
        <li>
          <strong>Failed to allocate file</strong> — Free up storage space or
          move the downloader to a different drive
        </li>
        <li>
          <strong>The process cannot access the file</strong> — Close any
          program that might be interfering, such as your antivirus or another
          game instance
        </li>
      </ul>
    ),
  },
  {
    id: "controller-input",
    q: "Why is my game stuck on controller input?",
    method: "downloader",
    a: (
      <ol>
        <li>
          <strong>Restart the game</strong> — This mostly happens on the first
          launch after a download and is gone for good afterwards
        </li>
        <li>
          <strong>Unplug your controller</strong> — If that did not help,
          restart without it and plug it back in afterwards
        </li>
      </ol>
    ),
  },
  {
    id: "no-proton",
    q: (
      <>
        Why do I get <em>No Proton found</em>?
      </>
    ),
    platform: "linux",
    a: (
      <>
        <p>The Launcher runs each season with Proton from Steam.</p>
        <ol>
          <li>
            Install Steam from your package manager, not as Flatpak or Snap
          </li>
          <li>
            Install <strong>Proton Experimental</strong> under{" "}
            <strong>Library</strong> &gt; <strong>Tools</strong> in Steam
          </li>
        </ol>
        <Note className="my-3">
          You can also place any Proton build in{" "}
          <code>~/.local/share/ThrowbackLauncher/bin/proton</code>.
        </Note>
      </>
    ),
  },
  {
    id: "missing-exe",
    q: (
      <>
        How do I fix the <em>Could not find any R6 executable</em> error?
      </>
    ),
    method: "downloader",
    a: (
      <ol>
        <li>
          Follow the instructions on{" "}
          <Link href="/getting-started/?jvav#antivirus-exclusion">
            Getting Started
          </Link>{" "}
          to add an exclusion for your R6S folder
        </li>
        <li>
          Use <strong>Verify the game</strong> in the downloader to restore the
          removed files
        </li>
      </ol>
    ),
  },
  {
    id: "corrupt-dll",
    q: "How do I fix missing or corrupt DLL files?",
    a: (
      <>
        <p>
          If you get an error mentioning any of the following files, the fix is
          the same.
        </p>
        <ul>
          <li>
            <code>amd_ags_x64.dll</code>
          </li>
          <li>
            <code>gfsdk_ssao_d3d11.win64.dll</code>
          </li>
          <li>
            <code>vivoxsdk_x64.dll</code>
          </li>
          <li>
            <code>bink2w64.dll</code>
          </li>
        </ul>
        <ol>
          <OnDownloader>
            <li>
              Delete the specified <code>.dll</code> file from your game folder
            </li>
            <li>
              Use <strong>Verify the game</strong> in the downloader to restore
              the missing files
            </li>
          </OnDownloader>
          <OnLauncher>
            <li>
              Delete the specified <code>.dll</code> file from the game folder
            </li>
            <li>
              Use <strong>Verify</strong> in the <strong>Manage</strong> tab of
              the season to restore missing files
            </li>
          </OnLauncher>
        </ol>
      </>
    ),
  },
  {
    id: "wrong-version",
    q: (
      <>
        My old R6S install opens the current season or gets stuck on{" "}
        <em>Preparing Content</em>. What should I do?
      </>
    ),
    method: "downloader",
    a: (
      <ol>
        <li>
          <strong>Restart the game</strong> — Close it completely via Task
          Manager and try again
        </li>
        <li>
          <strong>Check your antivirus</strong> — If files were removed, exclude
          your R6S folder (see{" "}
          <Link href="/getting-started/?jvav#antivirus-exclusion">
            Getting Started
          </Link>
          )
        </li>
        <li>
          <strong>Verify your files</strong> — Use{" "}
          <strong>Verify the game</strong> in the downloader to check for
          missing or corrupted files
        </li>
      </ol>
    ),
  },
  {
    id: "sku-rus",
    q: (
      <>
        Why do I get <em>Your R6S license is not supported</em>?
      </>
    ),
    method: "launcher",
    a: (
      <>
        <p>
          This error means your Steam account owns a regional version of the
          game called SKU RUS, which is only sold in the countries below. The
          Launcher does not support it, so you need a Steam account that owns
          the worldwide version.
        </p>
        <ContentImage
          src="/media/others/sku-rus.webp"
          width={744}
          height={90}
          className="rounded-none border-0"
        />
      </>
    ),
  },
  {
    id: "sku-rus",
    q: "My game is in Russian. How do I switch to English?",
    method: "downloader",
    a: (
      <>
        <p>
          Some Steam accounts own a regional version of the game called SKU RUS,
          which is in Russian by default. If yours is affected, switch the
          language with these steps.
        </p>
        <ol>
          <li>
            Download the{" "}
            <a
              href={withBasePath("/downloads/localization.lang")}
              download="localization.lang"
            >
              <code>localization.lang</code>
            </a>{" "}
            file
          </li>
          <li>Move it into the game folder and replace the existing file</li>
          <li>Launch the game</li>
        </ol>
        <ContentImage
          src="/media/others/sku-rus.webp"
          width={744}
          height={90}
          className="rounded-none border-0"
        />
      </>
    ),
  },
  {
    id: "user-profile",
    q: (
      <>
        Why do I get a <em>User profile loading failed</em> error?
      </>
    ),
    method: "downloader",
    a: (
      <p>
        This error is expected and does not affect gameplay. Click{" "}
        <strong>OK</strong>.
      </p>
    ),
  },
];

export default function CommonErrors() {
  return (
    <>
      <FaqHero page="common-errors" />
      <MethodSwitch />
      <FaqAccordion items={faqs} />
    </>
  );
}
