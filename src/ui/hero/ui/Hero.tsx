"use client";

import React from "react";
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
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-4 px-4 md:px-1 py-1 max-w-7xl mx-auto">
                {/* Info */}
                <div className="flex-1 flex flex-col justify-center gap-8 px-2 lg:px-10">
                    <InfoBlock />
                </div>
                
                {/* Terminal */}
                <div className="flex-1 lg:max-w-[600px] flex items-center justify-center">
                    <TerminalPanel />
                </div>

                
            </div>
        </ParallaxSection>
    );
};

const InfoBlock: React.FC = () => (
    <div className="flex flex-col gap-6">
        <div>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-orange-500/70 mb-3">
                01 / home
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
    </div>
);

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