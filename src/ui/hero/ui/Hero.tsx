"use client";

import React, { useState } from "react";
import { HiOutlineDownload, HiChevronDown } from "react-icons/hi";
import { TerminalPanel } from "./Terminal";

const METRICS = [
    { value: "500+", label: "daily users on systems I built" },
    { value: "40%", label: "faster heaviest SQL queries" },
    { value: "15+", label: "business processes automated" },
];

export const HeroSection: React.FC = () => {
    return (
        <section
            id="home"
            aria-label="Hero section"
            className="relative min-h-screen flex items-center"
        >
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 px-4 md:px-1 pt-24 pb-24 lg:py-16 max-w-7xl mx-auto">
                <div className="flex-1 flex flex-col justify-center px-2 lg:px-10">
                    <InfoBlock />
                </div>

                <div className="flex-1 w-full lg:max-w-[600px] flex items-center justify-center">
                    <TerminalPanel />
                </div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to about section"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400 hover:text-phos-400 transition-colors duration-300"
            >
                <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
                <HiChevronDown size={24} className="animate-bounce" />
            </a>
        </section>
    );
};

const InfoBlock: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-7">
            <div>
                <p className="font-mono text-sm text-phos-400 mb-4">
                    <span className="text-neutral-500">~/</span>damir
                    <span className="text-neutral-500"> $ whoami</span>
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.95] text-neutral-100">
                    Damir
                    <br />
                    Tagilbayev
                </h1>
                <p className="mt-4 font-mono text-base md:text-lg text-phos-300">
                    Backend engineer · NestJS · Python
                </p>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                I build backends that hold up in production, from microservices and APIs to
                data pipelines and full-stack web apps, and own them end to end: system design,
                databases, messaging, deployment and support.
            </p>

            {/* Metrics */}
            <dl className="grid grid-cols-3 max-w-lg border-y border-ink-700 divide-x divide-ink-700">
                {METRICS.map((m) => (
                    <div key={m.label} className="py-4 px-3 first:pl-0">
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-2xl md:text-3xl font-bold text-phos-400 font-mono">
                            {m.value}
                        </dd>
                        <dd className="mt-1 text-xs text-neutral-500 leading-snug">{m.label}</dd>
                    </div>
                ))}
            </dl>

            <div className="flex flex-col gap-2 font-mono text-sm">
                <StatusRow label="status" value="open to work" accent />
                <StatusRow label="location" value="Almaty, KZ · remote / relocation" />
                <StatusRow label="speaks" value="Kazakh · Russian · English (B2)" />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                    href="#projects"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-phos-400 text-ink-950 font-semibold transition-colors duration-200 hover:bg-phos-300"
                >
                    View work
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>

                <div className="relative w-full sm:w-auto">
                    <button
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-phos-500/40 text-phos-300 font-semibold hover:bg-phos-500/10 transition-colors duration-200"
                    >
                        <HiOutlineDownload size={20} />
                        Download CV
                    </button>

                    {open && (
                        <div className="absolute mt-2 w-full sm:w-48 rounded-lg border border-ink-700 bg-ink-900 shadow-xl overflow-hidden z-20">
                            <a
                                href="/assets/cv/en/Damir_Tagilbayev_CV_EN.pdf"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:bg-ink-800 transition"
                            >
                                <span className="font-mono text-xs text-phos-400">EN</span>
                                English
                            </a>
                            <a
                                href="/assets/cv/ru/Damir_Tagilbayev_CV_RU.pdf"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:bg-ink-800 transition"
                            >
                                <span className="font-mono text-xs text-phos-400">RU</span>
                                Русский
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

interface StatusRowProps {
    label: string;
    value: string;
    accent?: boolean;
}

const StatusRow: React.FC<StatusRowProps> = ({ label, value, accent }) => (
    <div className="flex items-center gap-3">
        <span className="text-neutral-600 w-20">{label}</span>
        <span className={accent ? "text-phos-300" : "text-neutral-400"}>{value}</span>
        {accent && <span className="w-1.5 h-1.5 rounded-full bg-phos-400 animate-pulse" />}
    </div>
);
