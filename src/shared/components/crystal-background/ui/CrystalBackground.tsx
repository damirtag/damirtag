"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const CRYSTAL_OPTIONS: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "attract" },
            resize: { enable: true },
        },
        modes: {
            attract: { distance: 180, duration: 0.4, speed: 3 },
        },
    },
    particles: {
        color: {
            value: ["#f97316", "#fb923c", "#fdba74", "#fcd34d", "#ffffff"],
        },
        shape: {
            type: "polygon",
            options: { polygon: { sides: 6 } },
        },
        opacity: {
            value: { min: 0.08, max: 0.45 },
            animation: { enable: true, speed: 0.6, sync: false },
        },
        size: {
            value: { min: 3, max: 16 },
            animation: { enable: true, speed: 1.5, sync: false },
        },
        move: {
            enable: true,
            speed: { min: 0.3, max: 1.8 },
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" },
            warp: true,
        },
        number: {
            value: 80,
            density: { enable: true },
        },
        rotate: {
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: { min: 1, max: 4 }, sync: false },
            direction: "random",
        },
        links: {
            enable: true,
            distance: 130,
            color: "#f97316",
            opacity: 0.1,
            width: 1,
        },
    },
    detectRetina: true,
};

/**
 * Fixed full-viewport crystal particle layer.
 * Rendered once in the root layout — sits behind all page content.
 */
export const CrystalBackground: React.FC = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setReady(true));
    }, []);

    if (!ready) return null;

    return (
        <div
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        >
            <Particles
                id="crystal-bg"
                className="w-full h-full"
                options={CRYSTAL_OPTIONS}
            />
        </div>
    );
};