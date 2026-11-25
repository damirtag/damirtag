import type { Metadata } from "next";
import { Resume } from "./Resume";

export const metadata: Metadata = {
    title: "CV",
    alternates: { canonical: "/cv", languages: { en: "/cv", ru: "/cv/ru" } },
};

export default function CV() {
    return <Resume lang="en" />;
}
