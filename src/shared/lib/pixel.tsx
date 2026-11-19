/** Pixel-art sprites as SVG rects: one string per row, one char per pixel, "." = empty. */
export const pixels = (rows: string[], palette: Record<string, string>, size = 1, x0 = 0, y0 = 0) =>
    rows.flatMap((row, y) =>
        [...row].map((c, x) =>
            palette[c] ? (
                <rect key={`${x}-${y}`} x={x0 + x * size} y={y0 + y * size} width={size} height={size} fill={palette[c]} />
            ) : null
        )
    );
