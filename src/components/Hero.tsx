import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/config/site";
import { withBasePath } from "@/lib/asset";
import { microLabel } from "@/components/ui";

type HeroProps = {
  tag: string;
  corner: string;
  title: ReactNode;
  description: string;
};

export function Hero({ tag, corner, title, description }: HeroProps) {
  return (
    <div className="relative mb-8 flex min-h-[160px] overflow-hidden rounded-lg border border-border-brand bg-[linear-gradient(135deg,var(--color-bg)_0%,var(--color-brand-veil)_50%,var(--color-bg)_100%)] before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.06)_2px,rgba(0,0,0,0.06)_4px)] before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:z-[3] after:animate-scan-move after:bg-[linear-gradient(transparent,color-mix(in_srgb,var(--color-brand)_2.5%,transparent)_50%,transparent)] after:bg-[length:100%_60px] after:bg-no-repeat after:content-['']">
      <Image
        src={withBasePath(site.heroImage)}
        alt=""
        fill
        sizes="100vw"
        priority
        className="pointer-events-none select-none object-cover object-center opacity-[0.28]"
      />
      <div className="absolute inset-0 animate-hero-glow bg-[radial-gradient(ellipse_at_70%_50%,var(--color-brand-glow)_0%,transparent_65%)]" />
      <div className="relative z-[2] flex flex-1 flex-col justify-center p-7 max-content:p-5">
        <div
          className={`mb-[0.6rem] flex items-center gap-2 ${microLabel} text-brand before:h-px before:w-5 before:bg-brand before:content-['']`}
        >
          {tag}
        </div>
        <h1 className="mb-2 font-display text-[2.4rem] font-bold leading-none text-text max-content:text-[1.9rem] max-narrow:text-[1.6rem] wide:text-[2.8rem] [&_em]:not-italic [&_em]:text-brand">
          {title}
        </h1>
        <p className="text-body leading-[1.6] text-text">{description}</p>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 animate-flicker select-none font-display text-[7rem] font-bold leading-none text-[color-mix(in_srgb,var(--color-brand)_22%,transparent)] max-content:hidden"
      >
        {corner}
      </div>
    </div>
  );
}
