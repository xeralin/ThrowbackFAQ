import type { ReactNode } from "react";

const linkClasses =
  "[&_a]:text-notice-link [&_a]:underline [&_a:hover]:text-notice-link-hover";

const noticeTone =
  "bg-notice-bg text-notice-text [&_code]:border-notice-border [&_code]:bg-notice-bg-strong [&_code]:text-notice-code";

const VARIANTS = {
  notice: `border-l-notice-edge ${noticeTone}`,
  error:
    "border-l-brand bg-error-bg text-error-text [&_code]:border-error-border [&_code]:bg-error-bg-strong [&_code]:text-error-code",
};

export function Note({
  children,
  variant = "notice",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
}) {
  return (
    <div
      className={`w-fit select-text rounded-r-sm border-l-[3px] px-[0.4rem] py-[0.35rem] text-ui leading-[1.5] ${VARIANTS[variant]} ${linkClasses} [&_strong]:font-semibold [&_strong]:text-inherit ${className}`}
    >
      {children}
    </div>
  );
}
