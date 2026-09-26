"use client";

import Image from "next/image";
import { useState } from "react";
import {
  sectionOrder,
  users,
  type StaffRole,
  type StaffUser,
} from "@/content/staff";
import { ExternalLink } from "./ExternalLink";
import { SectionTitle } from "./SectionTitle";
import { panel } from "@/components/ui";
import { withBasePath } from "@/lib/asset";

const ON_ERROR_AVATAR = "https://cdn.discordapp.com/embed/avatars/0.png";

const roleColor: Record<StaffRole, string> = {
  admin: "#c4190a",
  moderator: "#fff75f",
  developer: "#2986bd",
  seniorhelper: "#00f365",
  helper: "#31cb71",
};

const roleRank: Record<StaffRole, number> = {
  admin: 0,
  moderator: 1,
  developer: 2,
  seniorhelper: 3,
  helper: 4,
};

const roleTitle: Record<StaffRole, string> = {
  admin: "Administrator",
  moderator: "Moderator",
  developer: "Developer",
  seniorhelper: "Senior Helper",
  helper: "Helper",
};

function topRank(user: StaffUser) {
  return Math.min(...(user.roles ?? []).map((role) => roleRank[role]));
}

function Avatar({ user }: { user: StaffUser }) {
  const [src, setSrc] = useState(user.avatar);
  return (
    <Image
      src={withBasePath(src)}
      alt={user.name}
      width={400}
      height={400}
      className="block aspect-square w-full object-cover"
      onError={() => {
        if (src !== ON_ERROR_AVATAR) setSrc(ON_ERROR_AVATAR);
      }}
    />
  );
}

function UserCard({ user }: { user: StaffUser }) {
  return (
    <div
      data-reveal
      className={`card-glow-hover flex flex-col overflow-hidden ${panel} transition-[border-color,box-shadow] duration-200`}
    >
      <Avatar user={user} />
      <div className="flex flex-col border-t border-border p-3">
        <div className="mb-0.5 flex items-center justify-between gap-2">
          <span className="font-display text-base font-bold text-text">
            {user.name}
          </span>
          {user.github && (
            <ExternalLink
              href={user.github}
              aria-label="GitHub"
              className="block shrink-0 opacity-60 transition-opacity duration-200 hover:opacity-100"
            >
              <svg
                viewBox="0 0 24 24"
                className="block size-[1.15rem]"
                fill="#fff"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </ExternalLink>
          )}
        </div>
        {!!user.roles?.length && (
          <div className="mb-2 flex flex-wrap gap-[0.3rem]">
            {[...user.roles]
              .sort((a, b) => roleRank[a] - roleRank[b])
              .map((role) => (
                <span
                  key={role}
                  style={{
                    color: roleColor[role],
                    backgroundColor: `color-mix(in srgb, ${roleColor[role]} 14%, transparent)`,
                  }}
                  className="whitespace-nowrap rounded-md p-[0.2rem] font-body text-micro font-semibold leading-[1.35]"
                >
                  @{roleTitle[role]}
                </span>
              ))}
          </div>
        )}
        {!!user.tags?.length && (
          <div className="mt-[0.4rem] flex flex-wrap content-start gap-[0.3rem]">
            {[...user.tags]
              .sort((a, b) =>
                a.localeCompare(b, undefined, { sensitivity: "base" }),
              )
              .map((tag) => (
                <span
                  key={tag}
                  className="whitespace-nowrap rounded-md border border-border bg-surface-2 px-[3px] pb-[2px] pt-[3px] font-mono text-[11px] leading-none text-text-muted"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function StaffGrid() {
  return (
    <div className="flex flex-col gap-10">
      {sectionOrder.map(({ id, label }) => {
        const sectionUsers = users
          .filter((user) => user.sections.includes(id))
          .sort(
            (a, b) =>
              topRank(a) - topRank(b) ||
              a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
          );
        if (sectionUsers.length === 0) return null;
        return (
          <div key={id}>
            <SectionTitle flush>{label}</SectionTitle>
            <div className="grid items-start grid-cols-[repeat(auto-fill,minmax(min(200px,100%),1fr))] gap-4 max-narrow:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
              {sectionUsers.map((user) => (
                <UserCard key={user.name} user={user} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
