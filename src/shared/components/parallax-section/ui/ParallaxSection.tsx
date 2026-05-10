"use client";

import React, { useRef } from "react";
import { useParallax } from "@/shared/hooks/useParallax";

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
    id?: string;
    as?: React.ElementType;
}

/**
 * Wraps any section with a subtle scroll-driven parallax.
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    className = "",
    speed = 0.1,
    id,
    as: Tag = "section",
}) => {
    const ref = useRef<HTMLElement>(null);
    const offset = useParallax(ref as React.RefObject<HTMLElement | null>, speed);

    return (
        <Tag
            ref={ref}
            id={id}
            className={`relative overflow-hidden ${className}`}
        >
            <div
                style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
                className="min-h-screen flex items-center"
            >
                {children}
            </div>
        </Tag>
    );
};