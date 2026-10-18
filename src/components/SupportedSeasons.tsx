"use client";

import { useState } from "react";
import { Prose } from "@/components/Prose";
import { SeasonTable } from "@/components/SeasonTable";
import { SectionTitle } from "@/components/SectionTitle";
import { CHEVRON_RIGHT, StrokeIcon } from "@/components/StrokeIcon";
import {
  columnItem,
  columnItemActive,
  columnItemIdle,
  panel,
} from "@/components/ui";
import { SUPPORT, seasonYear, yearGroups } from "@/config/liberator-builds";

export function SupportedSeasons() {
  const [year, setYear] = useState(0);
  const groups = yearGroups(SUPPORT);
  return (
    <>
      <SectionTitle>Support</SectionTitle>
      <div className="flex flex-wrap items-start gap-x-4">
        <ul className={`mb-5 w-[150px] p-2 ${panel}`}>
          {groups.map((rows, index) => (
            <li key={rows[0].build}>
              <button
                type="button"
                onClick={() => setYear(index)}
                className={`${columnItem} ${index === year ? columnItemActive : columnItemIdle}`}
              >
                <span className="min-w-0 flex-1">
                  Year {seasonYear(rows[0])}
                </span>
                <StrokeIcon d={CHEVRON_RIGHT} className="size-3.5 shrink-0" />
              </button>
            </li>
          ))}
        </ul>
        <Prose>
          <div className="grid">
            {groups.map((rows, index) => (
              <div
                key={rows[0].build}
                className={`[grid-area:1/1] ${index === year ? "" : "invisible"}`}
              >
                <SeasonTable
                  rows={rows}
                  showEvent={rows.some((row) => row.event)}
                />
              </div>
            ))}
          </div>
        </Prose>
      </div>
    </>
  );
}
