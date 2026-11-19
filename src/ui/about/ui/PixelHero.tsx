import React from "react";
import { pixels } from "@/shared/lib/pixel";

const PALETTE: Record<string, string> = {
    H: "#2a1d14", // hair
    S: "#e8b48a", // skin
    s: "#b9784f", // mouth
    G: "#16bc62", // hoodie
    g: "#0e7841", // hoodie shade
    L: "#6be8a0", // hoodie stripe
    P: "#1b3527", // pants
    B: "#ededed", // sneakers
    E: "#050d08", // eyes
};

const BODY = [
    "................",
    ".....HHHHHH.....",
    "....HHHHHHHH....",
    "...HHHHHHHHHH...",
    "...HHSSSSSSHH...",
    "...HSSSSSSSSH...",
    "...HSSSSSSSSH...",
    "....SSSSSSSS....",
    "....SSSssSSS....",
    ".....SSSSSS.....",
    "....GGGGGGGG....",
    "...gGGGGGGGGG...",
    "..gGGGGLLGGGG...",
    "..gGGGGLLGGGG...",
    "..gGGGGGGGGGG...",
    "..SGGGGGGGGGG...",
    "....PPPPPPPP....",
    "....PPP..PPP....",
    "....PPP..PPP....",
    "...BBBB..BBBB...",
];

// Raised right arm, waves around the shoulder
const ARM = ["SS", "SS", "GG", "GG", "GG", "GG"];
const FLOATERS = ["{ }", "</>", "01", "λ"];

/** Waving pixel me with a speech bubble and drifting code glyphs. */
export const PixelHero: React.FC = () => (
    <div className="relative w-44 shrink-0 pt-16" aria-hidden>
        <div className="px-bubble px-box absolute top-0 left-24 whitespace-nowrap px-3 py-1 text-xl text-phos-300">
            hi, i&apos;m damir<span className="blink">_</span>
        </div>

        {FLOATERS.map((f, i) => (
            <span
                key={f}
                className="px-float absolute text-xl text-phos-500"
                style={{ left: `${[4, 78, 12, 70][i]}%`, top: `${[30, 40, 60, 70][i]}%`, animationDelay: `${i * 1}s` }}
            >
                {f}
            </span>
        ))}

        <svg viewBox="0 0 16 22" className="pixel relative w-full h-auto overflow-visible">
            <rect className="px-shadow px-part" x="4" y="20.4" width="8" height="1" fill="#34d77b" opacity=".3" />
            <g className="px-bob">
                {pixels(BODY, PALETTE)}
                <g className="px-blink px-part">
                    <rect x="6" y="6" width="1" height="1" fill={PALETTE.E} />
                    <rect x="9" y="6" width="1" height="1" fill={PALETTE.E} />
                </g>
                <g className="px-wave px-part">{pixels(ARM, PALETTE, 1, 12, 5)}</g>
            </g>
        </svg>
    </div>
);
