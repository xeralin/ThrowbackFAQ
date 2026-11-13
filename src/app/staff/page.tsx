import type { Metadata } from "next";
import { FaqHero } from "@/components/FaqHero";
import { StaffGrid } from "@/components/StaffGrid";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("staff");

export default function Staff() {
  return (
    <>
      <FaqHero page="staff" />
      <StaffGrid />
    </>
  );
}
