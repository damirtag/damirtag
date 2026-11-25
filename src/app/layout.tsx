import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

import { SITE_URL } from "@/shared/site";

// Pixel display font for headings, pixel terminal font for body text.
const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});
const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

const TITLE = "Damir Tagilbayev — Backend Engineer";
const DESCRIPTION =
  "Backend engineer from Almaty building microservices, APIs, data pipelines and full-stack web apps with NestJS, Python and PostgreSQL. Open to remote work and relocation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Damir Tagilbayev" },
  description: DESCRIPTION,
  applicationName: "damir.top",
  authors: [{ name: "Damir Tagilbayev", url: SITE_URL }],
  creator: "Damir Tagilbayev",
  keywords: [
    "Damir Tagilbayev",
    "damirtag",
    "backend engineer",
    "backend developer Almaty",
    "NestJS",
    "Python",
    "Go",
    "PostgreSQL",
    "Kafka",
    "microservices",
    "Kazakhstan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "damir.top",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    firstName: "Damir",
    lastName: "Tagilbayev",
    username: "damirtag",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050d08",
  colorScheme: "dark",
};

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Damir Tagilbayev",
  alternateName: "damirtag",
  url: SITE_URL,
  jobTitle: "Backend Engineer",
  email: "mailto:damirtagilbayev17@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Almaty",
    addressCountry: "KZ",
  },
  knowsAbout: [
    "Backend development",
    "Microservices",
    "NestJS",
    "Python",
    "Go",
    "PostgreSQL",
    "Kafka",
    "Next.js",
  ],
  knowsLanguage: ["kk", "ru", "en"],
  sameAs: [
    "https://github.com/damirtag",
    "https://t.me/damirtag",
    "https://www.linkedin.com/in/damirtag",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart.variable} ${vt323.variable} text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
        {/* Page content sits above the fixed dot grid (body::before) */}
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
