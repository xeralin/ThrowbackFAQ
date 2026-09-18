import type { ReactNode } from "react";

const variants = {
  notice:
    "border-l-notice-edge bg-notice-bg text-notice-text [&_code:not(pre_code)]:border-notice-border [&_code:not(pre_code)]:bg-notice-bg-strong [&_code:not(pre_code)]:text-notice-code [&_:is(a,button)]:text-notice-link [&_:is(a,button):hover]:text-notice-link-hover",
  error:
    "border-l-brand bg-error-bg text-error-text [&_code:not(pre_code)]:border-error-border [&_code:not(pre_code)]:bg-error-bg-strong [&_code:not(pre_code)]:text-error-code [&_:is(a,button)]:text-error-link [&_:is(a,button):hover]:text-error-link-hover",
};

export function Note({
  children,
  variant = "notice",
  className = "",
}: {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <div
      className={`w-fit select-text rounded-r-sm border-l-[3px] px-[0.4rem] py-[0.35rem] text-ui leading-[1.5] ${variants[variant]} [&_:is(a,button)]:underline [&_strong]:font-semibold [&_strong]:text-inherit ${className}`}
    >
      {children}
    </div>
  );
}
