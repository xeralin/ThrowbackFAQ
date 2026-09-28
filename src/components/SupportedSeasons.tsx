"use client";

import { useState } from "react";
import { OptionGroup, type Option } from "@/components/OptionGroup";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import {
  FULL_SUPPORT,
  FULL_SUPPORT_EVENTS,
  UNLOCK_ALL_SEASONS,
  yearPairs,
} from "@/config/liberator-builds";

type SupportView = "full" | "unlock";

const VIEWS: Option<SupportView>[] = [
  { id: "full", label: "Support" },
  { id: "unlock", label: "Unlock All" },
];

export function SupportedSeasons() {
  const [view, setView] = useState<SupportView>("full");
  return (
    <>
      <div className="mb-4 mt-8">
        <OptionGroup
          options={VIEWS}
          active={view}
          onSelect={setView}
          label="Support"
        />
      </div>
      <Prose>
        <div className="flex flex-wrap items-start gap-x-4">
          {view === "full" ? (
            <>
              <SeasonTable rows={FULL_SUPPORT} />
              <SeasonTable rows={FULL_SUPPORT_EVENTS} showEvent />
            </>
          ) : (
            yearPairs(UNLOCK_ALL_SEASONS).map((rows) => (
              <SeasonTable key={rows[0].build} rows={rows} />
            ))
          )}
        </div>
      </Prose>
    </>
  );
}
