"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Returns current window.scrollY, updated on rAF-throttled scroll events.
 * Single shared listener — safe to call in multiple components.
 */
export function useScrollY(): number {
    const [scrollY, setScrollY] = useState(0);
    const rafRef = useRef<number>(0);

    const onScroll = useCallback(() => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            setScrollY(window.scrollY);
        });
    }, []);

    useEffect(() => {
        setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, [onScroll]);

    return scrollY;
}

/**
 * Returns a translateY value (px) for an element based on how far it is
 * from the viewport centre. `speed` ∈ [0, 1] — 0 = no parallax, 0.2 = subtle.
 */
export function useParallax(
    ref: React.RefObject<HTMLElement | null>,
    speed = 0.15
): number {
    const scrollY = useScrollY();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elCenterY = rect.top + window.scrollY + rect.height / 2;
        const viewportCenterY = window.scrollY + window.innerHeight / 2;
        const delta = (viewportCenterY - elCenterY) * speed;
        setOffset(delta);
    }, [scrollY, ref, speed]);

    return offset;
}