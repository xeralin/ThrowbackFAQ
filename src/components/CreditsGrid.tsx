"use client";

import Image from "next/image";
import { useState } from "react";
import {
  sectionOrder,
  users,
  type CreditRole,
  type CreditUser,
} from "@/content/credits";
import { ExternalLink } from "./ExternalLink";
import { SectionTitle } from "./SectionTitle";
import { withBasePath } from "@/lib/asset";

const ON_ERROR_AVATAR = "https://cdn.discordapp.com/embed/avatars/0.png";

const iconLink =
  "block opacity-60 transition-[opacity,transform] duration-200 hover:[transform:scale(1.15)] hover:opacity-100";

const roleColor: Record<CreditRole, string> = {
  admin: "#c4190a",
  moderator: "#fff75f",
  developer: "#2986bd",
  seniorhelper: "#00f365",
  helper: "#31cb71",
};

const roleRank: Record<CreditRole, number> = {
  admin: 0,
  moderator: 1,
  developer: 2,
  seniorhelper: 3,
  helper: 4,
};

const roleTitle: Record<CreditRole, string> = {
  admin: "Administrator",
  moderator: "Moderator",
  developer: "Developer",
  seniorhelper: "Senior Helper",
  helper: "Helper",
};

function topRank(user: CreditUser) {
  return Math.min(...user.roles.map((role) => roleRank[role]));
}

function Avatar({ user }: { user: CreditUser }) {
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

function UserCard({ user }: { user: CreditUser }) {
  const hasLinks = Boolean(user.github || user.dono);
  return (
    <div
      data-reveal
      className="card-glow-hover flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-[border-color,box-shadow] duration-200"
    >
      <Avatar user={user} />
      <div className="flex flex-col border-t border-border p-3">
        <div className="mb-0.5 flex items-center justify-between gap-2">
          <span className="font-display text-base font-bold text-text">
            {user.name}
          </span>
          {hasLinks && (
            <span className="flex shrink-0 gap-1.5">
              {user.github && (
                <ExternalLink
                  href={user.github}
                  aria-label="GitHub"
                  className={iconLink}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="block size-4"
                    fill="#fff"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </ExternalLink>
              )}
              {user.dono && (
                <ExternalLink
                  href={user.dono}
                  aria-label="Donate"
                  className={iconLink}
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="block size-4.5"
                    fill="#fff"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.138-1.496A6.6 6.6 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.6 7.6 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962" />
                    <path
                      fillRule="evenodd"
                      d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069q0-.218-.02-.431c.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a1 1 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.74.74 0 0 0-.375.562c-.024.243.082.48.32.654a2 2 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595M2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.6 6.6 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.65 4.65 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393m12.621-.857a.6.6 0 0 1-.098.21l-.044-.025c-.146-.09-.157-.175-.152-.223a.24.24 0 0 1 .117-.173c.049-.027.08-.021.113.012a.2.2 0 0 1 .064.199"
                    />
                  </svg>
                </ExternalLink>
              )}
            </span>
          )}
        </div>
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
        {!!user.tags?.length && (
          <div className="mt-[0.4rem] flex flex-wrap content-start gap-[0.3rem]">
            {user.tags.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap rounded-md border border-border bg-surface-2 px-[3px] pb-[1px] pt-[2px] font-mono text-[10px] leading-none text-text-muted"
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

export function CreditsGrid() {
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
