import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer } from "@/widgets/footer";
import { CrystalBackground } from "@/shared/components/crystal-background";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "@damirtag's bio",
    description: "Experienced software engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
            >
                {/* Crystal layer — fixed, behind everything */}
                <CrystalBackground />

                {/* Page content sits above the crystal layer */}
                <div className="relative" style={{ zIndex: 1 }}>
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}