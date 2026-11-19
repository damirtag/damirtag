import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** The visitor's IP, for the boot screen's "connecting from" line. */
export function GET(req: NextRequest) {
  const ip =
    req.headers.get("x-remote-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    "unknown host";

  return NextResponse.json({ ip });
}
