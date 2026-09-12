import type { Metadata } from "next";
import { FaqHero } from "@/components/FaqHero";
import { CreditsGrid } from "@/components/CreditsGrid";
import { pageMetadata } from "@/lib/metadata";
import { FAQ_PAGES } from "@/config/faq";

export const metadata: Metadata = pageMetadata({
  ...FAQ_PAGES.staff,
  path: "/staff",
});

export default function Staff() {
  return (
    <>
      <FaqHero page="staff" />
      <CreditsGrid />
    </>
  );
}
