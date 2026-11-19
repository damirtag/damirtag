"use client";

import { useEffect, useRef, useState } from "react";
import {
  CoffeeIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react";
import { SilhouetteSvg } from "./Footer.silhouette";

const CONTACTS = [
  {
    icon: EnvelopeSimpleIcon,
    label: "Email",
    cmd: "sudo mail damir",
    href: "mailto:damirtagilbayev17@gmail.com",
  },
  {
    icon: TelegramLogoIcon,
    label: "Telegram",
    cmd: "ping @damirtag",
    href: "https://t.me/damirtag",
  },
  {
    icon: GithubLogoIcon,
    label: "GitHub",
    cmd: "git clone damir",
    href: "https://github.com/damirtag",
  },
  {
    icon: LinkedinLogoIcon,
    label: "LinkedIn",
    cmd: "connect --formally",
    href: "https://www.linkedin.com/in/damirtag",
  },
];

const MESSAGES = [
  "open to work and collaboration",
  "replies faster than a cold start",
  "200 OK, unlike your last deploy",
  "will refactor for coffee",
  "no microservices were harmed",
  "yes, the hiker below is me",
];

const pad = (n: number) => String(n).padStart(2, "0");

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [msg, setMsg] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const m = setInterval(() => setMsg((i) => (i + 1) % MESSAGES.length), 3200);
    const u = setInterval(() => setUptime((s) => s + 1), 1000);
    return () => {
      clearInterval(m);
      clearInterval(u);
    };
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="relative overflow-hidden">
      <div className="reveal max-w-3xl mx-auto px-6 pt-24 pb-12 flex flex-col items-center gap-8 text-center">
        <h2 className="text-xl md:text-3xl text-white">GET IN TOUCH</h2>
        <p
          key={msg}
          className="footer-msg min-h-16 sm:min-h-8 text-2xl text-neutral-400"
        >
          &gt; {MESSAGES[msg]}
          <span className="blink">_</span>
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {CONTACTS.map(({ icon: Icon, label, cmd, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-box group flex flex-col items-center gap-1 w-36 py-4 text-neutral-300 hover:text-phos-300"
            >
              <Icon
                size={28}
                weight="duotone"
                className="text-phos-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-6"
              />
              <span className="text-xl">{label}</span>
              <span className="text-base text-neutral-500 group-hover:text-phos-500">
                $ {cmd}
              </span>
            </a>
          ))}
        </div>

        <div className="w-full border-t-2 border-dashed border-ink-700 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-1 text-lg text-neutral-500">
          <span>© {new Date().getFullYear()} damirtag</span>
          <span className="inline-flex items-center gap-1.5">
            built with{" "}
            <CoffeeIcon size={18} weight="duotone" className="text-phos-500" />{" "}
            and stubbornness
          </span>
          <span>
            your uptime here: {pad(Math.floor(uptime / 60))}:{pad(uptime % 60)}
          </span>
        </div>
      </div>

      <SilhouetteSvg triggerRef={footerRef} />
    </footer>
  );
};

export default Footer;
