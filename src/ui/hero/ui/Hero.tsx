"use client";

import React, {useState} from "react";
import { HiOutlineDownload, HiChevronDown } from "react-icons/hi";
import { TerminalPanel } from "./Terminal";
import { ParallaxSection } from "@/shared/components/parallax-section";

export const HeroSection: React.FC = () => {
    return (
        <ParallaxSection
            id="home"
            speed={0.18}
            aria-label="Hero section"
        >

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-4 px-4 md:px-1 pt-10 sm:pt-6 lg:pt-1 pb-1 max-w-7xl mx-auto">
                {/* Info */}
                <div className="flex-1 flex flex-col justify-center gap-8 px-2 lg:px-10">
                    <InfoBlock />
                </div>
                
                {/* Terminal */}
                <div className="flex-1 lg:max-w-[600px] flex items-center justify-center">
                    <TerminalPanel />
                </div>

                
            </div>
            {/* Scroll Down Indicator */}
            <a
            href="#about"
            aria-label="Scroll to about section"
            className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                flex flex-col items-center gap-2
                text-neutral-200 hover:text-orange-400
                transition-colors duration-300
                animate-bounce
            "
            >
            <span className="text-xs font-mono tracking-widest uppercase opacity-70">
                scroll
            </span>

            <HiChevronDown
                size={28}
                className="opacity-70"
            />
            </a>
        </ParallaxSection>
    );
};

const InfoBlock: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-mono tracking-[0.3em] uppercase text-orange-500/70 mb-3">
          00 / home
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
          <span className="bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent">
            Software
          </span>
          <br />
          <span className="text-neutral-100">Engineer</span>
        </h1>
      </div>

      <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
        Crafting fast, scalable, and creative digital experiences — one commit at a time.
      </p>

      <div className="flex flex-col gap-2 font-mono text-sm text-neutral-500">
        <StatusRow icon="◈" label="Status" value="Open to work" accent />
        <StatusRow icon="◉" label="Location" value="Almaty, Kazakhstan" />
        <StatusRow icon="◐" label="Stack" value="typescript golang python" />
      </div>

      {/* BUTTONS */}
      <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        
        {/* View projects */}
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-2xl
          bg-gradient-to-br from-orange-500 to-orange-700 text-white font-semibold tracking-wide
          shadow-lg shadow-orange-900/30 transition-all duration-300
          hover:scale-[1.03] hover:shadow-orange-900/50 active:scale-[0.98]"
        >
          <span className="relative z-10">View Projects</span>
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"/>
        </a>

        {/* Resume dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            onClick={() => setOpen(!open)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl
            border border-orange-500/40 text-orange-300 font-semibold
            hover:bg-orange-500/10 transition-all duration-300"
          >
            <HiOutlineDownload size={20} />
            Download CV
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute mt-2 w-full sm:w-48 rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl overflow-hidden z-20">
              <a
                href="/assets/cv/en/Damir_Tagilbayev_CV_EN.pdf"
                target="_blank"
                className="block px-4 py-3 text-sm text-neutral-300 hover:bg-neutral-800 transition"
              >
                🇬🇧 English version
              </a>
              <a
                href="/assets/cv/ru/Damir_Tagilbayev_CV.pdf"
                target="_blank"
                className="block px-4 py-3 text-sm text-neutral-300 hover:bg-neutral-800 transition"
              >
                🇷🇺 Русская версия
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

interface StatusRowProps {
    icon: string;
    label: string;
    value: string;
    accent?: boolean;
}

const StatusRow: React.FC<StatusRowProps> = ({ icon, label, value, accent }) => (
    <div className="flex items-center gap-3">
        <span className={accent ? "text-orange-400" : "text-neutral-600"}>{icon}</span>
        <span className="text-neutral-600 w-20">{label}</span>
        <span className={accent ? "text-orange-300" : "text-neutral-400"}>{value}</span>
        {accent && (
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        )}
    </div>
);