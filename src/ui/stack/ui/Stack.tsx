import React from "react";
import {
    ArrowsLeftRightIcon, AtomIcon, BroadcastIcon, CodeIcon, CubeIcon, DatabaseIcon,
    FileJsIcon, FilePyIcon, FileSqlIcon, FileTsIcon, GitBranchIcon, GraphIcon,
    LeafIcon, LightningIcon, PackageIcon, PaperPlaneTiltIcon, PlugsIcon, QueueIcon,
    StackIcon, SwapIcon, TerminalWindowIcon, TriangleIcon, WindIcon,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";

const GROUPS: { title: string; items: [string, Icon][] }[] = [
    { title: "languages", items: [["Go", CodeIcon], ["TypeScript", FileTsIcon], ["Python", FilePyIcon], ["SQL", FileSqlIcon]] },
    { title: "backend", items: [["NestJS", CubeIcon], ["Node.js", FileJsIcon], ["Gin", LightningIcon], ["GraphQL", GraphIcon], ["gRPC", ArrowsLeftRightIcon], ["REST", PlugsIcon], ["WebSockets", BroadcastIcon]] },
    { title: "data & messaging", items: [["PostgreSQL", DatabaseIcon], ["Redis", StackIcon], ["MongoDB", LeafIcon], ["Kafka", QueueIcon], ["NATS", PaperPlaneTiltIcon]] },
    { title: "infra", items: [["Docker", PackageIcon], ["Nginx", SwapIcon], ["Linux", TerminalWindowIcon], ["CI/CD", GitBranchIcon]] },
    { title: "frontend", items: [["React", AtomIcon], ["Next.js", TriangleIcon], ["Tailwind", WindIcon]] },
];

export const StackSection: React.FC = () => (
    <section id="stack" className="w-full py-24">
        <div className="max-w-5xl mx-auto px-6 w-full">
            <p className="text-xl text-phos-500 mb-3">02 // stack</p>
            <h2 className="text-xl md:text-3xl text-white mb-12">TECH I USE</h2>

            <div className="flex flex-col gap-10">
                {GROUPS.map((g) => (
                    <div key={g.title} className="reveal">
                        <h3 className="text-sm md:text-base text-phos-300 mb-4">&gt; {g.title}</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {g.items.map(([name, Icon]) => (
                                <li key={name} className="px-box px-hover group flex items-center gap-3 px-4 py-3">
                                    <Icon
                                        size={26}
                                        weight="duotone"
                                        className="shrink-0 text-phos-400 transition-transform duration-200 group-hover:scale-110"
                                    />
                                    <span className="text-xl text-neutral-200 truncate">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
