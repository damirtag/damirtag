import type { Metadata } from "next";
import { Resume } from "../Resume";

export const metadata: Metadata = {
    title: { absolute: "Резюме · Дамир Тагильбаев" },
    alternates: { canonical: "/cv/ru", languages: { en: "/cv", ru: "/cv/ru" } },
};

export default function RussianCV() {
    return <Resume lang="ru" />;
}
