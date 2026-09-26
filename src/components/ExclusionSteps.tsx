import type { ReactNode } from "react";

export function ExclusionSteps({ folder }: { folder: ReactNode }) {
  return (
    <ol>
      <li>
        Search for <strong>Virus & threat protection</strong> in the Windows
        start menu
      </li>
      <li>
        Click <strong>Manage settings</strong> under{" "}
        <em>Virus & threat protection settings</em>
      </li>
      <li>
        Scroll down to <em>Exclusions</em> and click{" "}
        <strong>Add or remove exclusions</strong>
      </li>
      <li>
        Click <strong>Add an exclusion</strong> &gt; <strong>Folder</strong> and
        select {folder}
      </li>
    </ol>
  );
}
