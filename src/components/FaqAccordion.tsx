"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { StrokeIcon } from "@/components/StrokeIcon";
import {
  setMethod,
  useMethod,
  useStoredMethod,
  type Method,
} from "@/lib/method";
import { setPlatform, usePlatform, type Platform } from "@/lib/platform";

export type FaqItem = {
  id: string;
  q: ReactNode;
  a: ReactNode;
  platform?: Platform;
  method?: Method;
};

const subscribeNever = () => () => {};

function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );
}

function Item({ item, query }: { item: FaqItem; query: string }) {
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [copied, setCopied] = useState(0);
  const copyTimer = useRef(0);
  const answerId = `faq-${item.id}-answer`;

  function copyLink() {
    const url = `${window.location.origin}${window.location.pathname}${query}#${item.id}`;
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
    if (!hydrated) return;
    function openFromHash() {
      if (window.location.hash.slice(1) !== item.id) return;
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );
      setOpen(true);
      setPulse(true);
      requestAnimationFrame(() =>
        document.getElementById(item.id)?.scrollIntoView({ block: "start" }),
      );
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [item.id, hydrated]);

  return (
    <div
      id={item.id}
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
  const hydrated = useHydrated();
  const platform = usePlatform();
  const method = useMethod();
  const storedMethod = useStoredMethod();
  const visible = items.filter(
    (item) =>
      (!item.platform || item.platform === platform) &&
      (!item.method || item.method === method),
  );
  const query =
    method === "downloader" && items.some((item) => item.method) ? "?jvav" : "";
  const latest = useRef({ items, visible, platform, storedMethod });

  useEffect(() => {
    latest.current = { items, visible, platform, storedMethod };
  });

  useEffect(() => {
    if (!hydrated) return;
    function resolveHash() {
      const { items, visible, platform, storedMethod } = latest.current;
      const target = window.location.hash.slice(1);
      if (!target || visible.some((item) => item.id === target)) return;
      const matches = items.filter((item) => item.id === target);
      const hidden =
        matches.find((item) => !item.method || item.method === storedMethod) ??
        matches[0];
      if (!hidden) return;
      const needed =
        hidden.platform ??
        (hidden.method === "downloader" ? "windows" : platform);
      if (needed !== platform) setPlatform(needed);
      if (hidden.method) setMethod(hidden.method);
    }
    queueMicrotask(resolveHash);
    window.addEventListener("hashchange", resolveHash);
    return () => window.removeEventListener("hashchange", resolveHash);
  }, [hydrated]);
  return (
    <div className="faq-list">
      {visible.map((item) => (
        <Item key={item.id} item={item} query={query} />
      ))}
    </div>
  );
}
