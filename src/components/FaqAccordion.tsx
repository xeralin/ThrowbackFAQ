"use client";

import { useEffect, useRef, useState } from "react";
import { StrokeIcon } from "@/components/StrokeIcon";
import type { ReactNode } from "react";
import { setMethod, useMethod, type Method } from "@/lib/method";
import { usePlatform, type Platform } from "@/lib/platform";

export type FaqItem = {
  id: string;
  q: ReactNode;
  a: ReactNode;
  platform?: Platform;
  method?: Method;
};

function Item({ item, query }: { item: FaqItem; query: string }) {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [copied, setCopied] = useState(0);
  const copyTimer = useRef(0);
  const answerId = `faq-${item.id}-answer`;
  const anchor = item.id;

  function copyLink() {
    const url = `${window.location.origin}${window.location.pathname}${query}#${anchor}`;
    navigator.clipboard.writeText(url).then(
      () => {
        setCopied((tick) => tick + 1);
        window.clearTimeout(copyTimer.current);
        copyTimer.current = window.setTimeout(() => setCopied(0), 1400);
      },
      () => {},
    );
  }

  useEffect(() => {
    function openFromHash() {
      if (window.location.hash.slice(1) !== anchor) return;
      window.history.replaceState(
        window.history.state,
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
          <span className="question-title">{item.q}</span>
          <StrokeIcon d="m6 9 6 6 6-6" className="question-chevron" />
        </button>
        <button
          type="button"
          className={copied > 0 ? "question-copy copied" : "question-copy"}
          aria-label={copied > 0 ? "Link copied" : "Copy link"}
          onClick={copyLink}
        >
          <StrokeIcon
            d="M11 9h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2ZM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            className="question-copy-icon"
          />
          {copied > 0 && (
            <StrokeIcon
              key={copied}
              d="M20 6 9 17 4 12"
              className="question-copy-check"
            />
          )}
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
  const query =
    method === "downloader" && items.some((item) => item.method) ? "?jvav" : "";
  const latest = useRef({ items, visible, platform });

  useEffect(() => {
    latest.current = { items, visible, platform };
  });

  useEffect(() => {
    function resolveHash() {
      const { items, visible, platform } = latest.current;
      const target = window.location.hash.slice(1);
      if (!target || platform === "linux") return;
      const shown = visible.some((item) => item.id === target);
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
        <Item key={item.id} item={item} query={query} />
      ))}
    </div>
  );
}
