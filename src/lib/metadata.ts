import type { Metadata } from "next";
import { site } from "@/config/site";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = `${opts.path}/`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      images: [{ url: site.ogImage }],
    },
  };
}
