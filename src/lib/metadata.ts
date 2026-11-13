import type { Metadata } from "next";
import { FAQ_PAGES } from "@/config/faq";
import { site } from "@/config/site";

export function pageMetadata(page: keyof typeof FAQ_PAGES): Metadata {
  const { title, description } = FAQ_PAGES[page];
  const canonical = `/${page}/`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      images: [{ url: site.ogImage }],
    },
  };
}
