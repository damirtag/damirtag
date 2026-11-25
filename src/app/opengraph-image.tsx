import { ImageResponse } from "next/og";

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
