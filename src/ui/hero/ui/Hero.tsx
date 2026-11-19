import React from "react";
import { CaretDownIcon, CircleIcon, MapPinIcon, TranslateIcon } from "@phosphor-icons/react/ssr";
import { TerminalPanel } from "./Terminal";

const INFO = [
    { icon: CircleIcon, label: "status", value: "open to work", accent: true },
    { icon: MapPinIcon, label: "base", value: "Almaty, KZ · remote / relocation" },
    { icon: TranslateIcon, label: "speaks", value: "Kazakh · Russian · English" },
];

export const HeroSection: React.FC = () => (
    <section id="home" aria-label="Hero section" className="relative min-h-screen flex items-center">
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-10 px-6 pt-24 pb-24 lg:py-16 max-w-7xl mx-auto">
            <div className="flex-1 flex flex-col gap-8">
                <p className="text-2xl text-phos-400">
                    <span className="text-neutral-500">~/</span>damir
                    <span className="text-neutral-500"> $ whoami</span>
                </p>

                <h1 className="text-2xl sm:text-4xl md:text-5xl text-neutral-100 [text-shadow:4px_4px_0_var(--color-phos-700)]">
                    DAMIR
                    <br />
                    TAGILBAYEV
                </h1>

                <p className="text-3xl text-phos-300">
                    software engineer<span className="blink">_</span>
                </p>

                <p className="text-2xl text-neutral-400 max-w-lg">
                    I build backends that hold up in production and own them end to end: design,
                    databases, messaging, deploys.
                </p>

                <ul className="flex flex-col gap-2 text-xl">
                    {INFO.map(({ icon: Icon, label, value, accent }) => (
                        <li key={label} className="flex items-center gap-3">
                            <Icon
                                size={20}
                                weight={accent ? "fill" : "duotone"}
                                className={accent ? "text-phos-400 blink" : "text-phos-500"}
                            />
                            <span className="text-neutral-500 w-16">{label}</span>
                            <span className={accent ? "text-phos-300" : "text-neutral-300"}>{value}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-4 pt-2">
                    <a href="#about" className="px-box px-5 py-2 text-2xl text-phos-300">[ about ]</a>
                    <a href="#stack" className="px-box px-5 py-2 text-2xl text-phos-300">[ stack ]</a>
                </div>
            </div>

            <div className="flex-1 w-full lg:max-w-[600px]">
                <TerminalPanel />
            </div>
        </div>

        <a
            href="#about"
            aria-label="Scroll to about section"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-500 hover:text-phos-400 transition-colors"
        >
            <span className="font-pixel text-[10px]">SCROLL</span>
            <CaretDownIcon size={24} weight="bold" className="animate-bounce" />
        </a>
    </section>
);
