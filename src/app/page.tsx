import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { CardGrid, NavCard } from "@/components/NavCard";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero
        tag="Operation Throwback"
        corner="R6S"
        title={
          <>
            Welcome to the <em>Throwback FAQ</em>
          </>
        }
        description={site.description}
      />

      <SectionTitle>Support</SectionTitle>
      <CardGrid>
        <NavCard href="/getting-started" {...FAQ_PAGES["getting-started"]} />
        <NavCard href="/common-errors" {...FAQ_PAGES["common-errors"]} />
        <NavCard href="/multiplayer" {...FAQ_PAGES.multiplayer} />
        <NavCard href="/how-to-get-help" {...FAQ_PAGES["how-to-get-help"]} />
      </CardGrid>

      <SectionTitle>Tools & Mods</SectionTitle>
      <CardGrid>
        <NavCard href="/liberator" {...FAQ_PAGES.liberator} />
        <NavCard href="/heated-metal" {...FAQ_PAGES["heated-metal"]} />
        <NavCard href="/cheat-engine" {...FAQ_PAGES["cheat-engine"]} />
      </CardGrid>

      <SectionTitle>Community</SectionTitle>
      <CardGrid>
        <NavCard href="/extended-rules" {...FAQ_PAGES["extended-rules"]} />
        <NavCard href="/staff" {...FAQ_PAGES.staff} />
      </CardGrid>
    </>
  );
}
