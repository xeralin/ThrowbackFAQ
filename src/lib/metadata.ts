import type { Metadata } from "next";
import { site } from "@/config/site";

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `${site.name} | %s`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    title: site.name,
    description: site.description,
    url: "/",
    images: [{ url: site.ogImage }],
  },
  twitter: {
    card: "summary",
    images: [{ url: site.ogImage }],
  },
};

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
      title: `${site.name} | ${opts.title}`,
      description: opts.description,
      url: canonical,
      images: [{ url: site.ogImage }],
    },
  };
}
