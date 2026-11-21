"use client";

import { useEffect, useState } from "react";

const STEP_MS = 360; // between boot lines
const BAR_MS = 1400; // progress bar fill, keep in sync with .boot-bar in globals.css
const HOLD_MS = 900; // pause on "welcome" before powering off
const OFF_MS = 900; // CRT off + overlay fade, keep in sync with globals.css
const IP_LINE = 1; // boot waits here until /api/ip answers (or 2s pass)

const bootLines = (ip?: string): [string, string | null][] => [
  ["booting damir.top", "ok"],
  ["resolving client", ip ?? "..."],
  [`connecting from ${ip}`, "ok"],
  ["handshake", "ok"],
  ["mounting ~/damir", "ok"],
  ["loading stack", null], // null = progress bar
];

/** Full-screen terminal boot shown on every page load, then a CRT power-off. */
export function BootScreen() {
  const [ip, setIp] = useState<string>();
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState<"boot" | "off" | "done">("boot");
  const lines = bootLines(ip);
  const total = lines.length + 1; // + the welcome line

  useEffect(() => {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 2000);
    fetch("/api/ip", { signal: ctrl.signal })
      .then((r) => r.json())
      .then((d: { ip: string }) => setIp(d.ip))
      .catch(() => setIp("unknown host"))
      .finally(() => clearTimeout(timeout));
    return () => ctrl.abort();
  }, []);

  useEffect(() => {
    if (phase !== "boot") return;
    if (shown === IP_LINE && !ip) return;
    const delay =
      shown === total ? HOLD_MS : shown === lines.length ? BAR_MS : STEP_MS;
    const t = setTimeout(
      () => (shown === total ? setPhase("off") : setShown(shown + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [shown, ip, phase, total, lines.length]);

  useEffect(() => {
    if (phase === "off") {
      const t = setTimeout(() => setPhase("done"), OFF_MS);
      return () => clearTimeout(t);
    }
    if (phase !== "boot") return;
    const skip = () => setPhase("off");
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`boot fixed inset-0 z-50 bg-ink-950 flex items-center justify-center p-6 ${phase === "off" ? "boot-fade" : ""}`}
    >
      <noscript>
        <style>{`.boot{display:none}`}</style>
      </noscript>
      <div
        className={`boot-in w-full max-w-xl text-xl md:text-2xl text-phos-300 ${phase === "off" ? "boot-off" : ""}`}
      >
        <p className="font-pixel text-xs md:text-sm text-phos-400 mb-6">
          DAMIR.TOP // TTY1
        </p>
        {lines.slice(0, shown).map(([label, status]) => (
          <div
            key={label}
            className="boot-line flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-phos-600">&gt;</span>
            <span className="text-neutral-300 truncate">{label}</span>
            <span
              aria-hidden
              className="flex-1 min-w-4 self-end border-b-2 border-dotted border-ink-700 mb-2"
            />
            {status ? (
              <span className="text-phos-400">{status}</span>
            ) : (
              <span className="w-28 h-3.5 border-2 border-phos-600 p-px">
                <span className="boot-bar block h-full bg-phos-400" />
              </span>
            )}
          </div>
        ))}
        {shown === total && (
          <p className="boot-line mt-4 text-phos-400">
            welcome, visitor<span className="blink">_</span>
          </p>
        )}
        {shown < total && <span className="blink text-phos-400">█</span>}
      </div>
    </div>
  );
}
