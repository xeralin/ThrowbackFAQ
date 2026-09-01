"use client";

import { useEffect, useRef, useState } from "react";
import { StrokeIcon } from "@/components/StrokeIcon";
import type { ReactNode } from "react";
import { setMethod, useMethod } from "@/lib/method";
import { usePlatform } from "@/lib/platform";

export type FaqItem = {
  id: string;
  q: string;
  display?: ReactNode;
  a: ReactNode;
  platform?: "windows" | "linux";
  method?: "launcher" | "downloader";
};

function CopyIcon() {
  return (
    <svg
      className="question-copy-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="question-copy-check"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Item({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [copied, setCopied] = useState(0);
  const copyTimer = useRef(0);
  const answerId = `faq-${item.id}-answer`;
  const anchor = item.id;

  function copyLink() {
    const url = `${window.location.href.split("#")[0]}#${anchor}`;
    navigator.clipboard.writeText(url).catch(() => {});
    setCopied((tick) => tick + 1);
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopied(0), 1400);
  }

  useEffect(() => {
    function openFromHash() {
      if (window.location.hash.slice(1) !== anchor) return;
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
      setOpen(true);
      setPulse(true);
      requestAnimationFrame(() =>
        document.getElementById(anchor)?.scrollIntoView({ block: "start" }),
      );
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [anchor]);

  return (
    <div
      id={anchor}
      data-reveal
      onAnimationEnd={(event) => {
        if (event.animationName === "hashPulse") setPulse(false);
      }}
      className={`question${open ? " open" : ""}${pulse ? " hash-pulse" : ""}`}
    >
      <div className="question-row">
        <button
          type="button"
          className="question-header"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="question-title">{item.display ?? item.q}</span>
          <StrokeIcon d="m6 9 6 6 6-6" className="question-chevron" />
        </button>
        <button
          type="button"
          className={copied > 0 ? "question-copy copied" : "question-copy"}
          aria-label={copied > 0 ? "Link copied" : "Copy link"}
          onClick={copyLink}
        >
          <CopyIcon />
          {copied > 0 && <CheckIcon key={copied} />}
        </button>
      </div>
      <div id={answerId} className="answer" inert={!open}>
        <div className="answer-clip">
          <div className="answer-inner prose">{item.a}</div>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const platform = usePlatform();
  const method = useMethod();
  const visible = items.filter(
    (item) =>
      (!item.platform || item.platform === platform) &&
      (!item.method || item.method === method),
  );
  const latest = useRef({ items, method, platform });

  useEffect(() => {
    latest.current = { items, method, platform };
  });

  useEffect(() => {
    function resolveHash() {
      const { items, method, platform } = latest.current;
      const target = window.location.hash.slice(1);
      if (!target || platform === "linux") return;
      const shown = items.some(
        (item) =>
          item.id === target &&
          (!item.platform || item.platform === platform) &&
          (!item.method || item.method === method),
      );
      if (shown) return;
      const hidden = items.find(
        (item) =>
          item.id === target && (!item.platform || item.platform === platform),
      );
      if (hidden?.method) setMethod(hidden.method);
    }
    resolveHash();
    window.addEventListener("hashchange", resolveHash);
    return () => window.removeEventListener("hashchange", resolveHash);
  }, []);
  return (
    <div className="faq-list">
      {visible.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
