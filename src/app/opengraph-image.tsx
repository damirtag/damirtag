import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Damir Tagilbayev — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#050d08";
const PHOS = "#34d77b";

// Satori needs raw TTF; Google serves one when asked for a text subset.
async function loadFont(weight: number, text: string): Promise<ArrayBuffer | null> {
    try {
        const css = await (
            await fetch(
                `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@${weight}&text=${encodeURIComponent(text)}`
            )
        ).text();
        const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
        return url ? await (await fetch(url)).arrayBuffer() : null;
    } catch {
        return null; // offline build: falls back to the default font
    }
}

export default async function OpengraphImage() {
    // Same contours as the site, with the lines turned up for a small thumbnail.
    const topo = (await readFile(join(process.cwd(), "public/topo.svg"), "utf8"))
        .replaceAll('stroke-opacity="0.1"', 'stroke-opacity="0.28"')
        .replaceAll('stroke-opacity="0.2"', 'stroke-opacity="0.55"');

    const lines = {
        prompt: "~/damir $ whoami",
        name: "Damir Tagilbayev",
        role: "Backend engineer · NestJS · Python",
        meta: "Almaty, KZ · open to work · damir.top",
    };
    const all = Object.values(lines).join("");
    const [regular, bold] = await Promise.all([loadFont(400, all), loadFont(800, all)]);
    const fonts = [
        regular && { name: "JetBrains Mono", data: regular, weight: 400 as const },
        bold && { name: "JetBrains Mono", data: bold, weight: 800 as const },
    ].filter((f) => !!f);

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background: INK,
                    fontFamily: "JetBrains Mono",
                    color: "#ededed",
                }}
            >
                <img
                    src={`data:image/svg+xml;base64,${Buffer.from(topo).toString("base64")}`}
                    width={1200}
                    height={750}
                    style={{ position: "absolute", top: -60, left: 0 }}
                    alt=""
                />
                {/* Darken the left so the text sits on calm ground */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        background: `linear-gradient(90deg, ${INK} 0%, rgba(5,13,8,0.85) 45%, rgba(5,13,8,0) 100%)`,
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "0 80px",
                        width: "100%",
                    }}
                >
                    <div style={{ display: "flex", fontSize: 28, color: PHOS }}>{lines.prompt}</div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 24,
                            fontSize: 96,
                            fontWeight: 800,
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                        }}
                    >
                        {lines.name}
                    </div>
                    <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#6be8a0" }}>
                        {lines.role}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 56,
                            paddingTop: 24,
                            borderTop: "2px solid #1b3527",
                            fontSize: 26,
                            color: "#8a9a90",
                            width: 760,
                        }}
                    >
                        {lines.meta}
                    </div>
                </div>
            </div>
        ),
        { ...size, fonts }
    );
}
