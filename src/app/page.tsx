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

      <SectionTitle>Support & Troubleshooting</SectionTitle>
      <CardGrid>
        <NavCard href="/getting-started" {...FAQ_PAGES.gettingStarted} />
        <NavCard href="/multiplayer" {...FAQ_PAGES.multiplayer} />
        <NavCard href="/common-errors" {...FAQ_PAGES.commonErrors} />
        <NavCard href="/how-to-get-help" {...FAQ_PAGES.howToGetHelp} />
      </CardGrid>

      <SectionTitle>Tools & Mods</SectionTitle>
      <CardGrid>
        <NavCard href="/liberator" {...FAQ_PAGES.liberator} />
        <NavCard href="/heated-metal" {...FAQ_PAGES.heatedMetal} />
        <NavCard href="/cheat-engine" {...FAQ_PAGES.cheatEngine} />
      </CardGrid>

      <SectionTitle>Community</SectionTitle>
      <CardGrid>
        <NavCard href="/extended-rules" {...FAQ_PAGES.extendedRules} />
        <NavCard href="/credits" {...FAQ_PAGES.credits} />
      </CardGrid>
    </>
  );
}
