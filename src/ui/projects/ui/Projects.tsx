import React from "react";

interface Project {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    tags: string[];
    type: "fulltime" | "freelance";
}

const PROJECTS: Project[] = [
    {
        title: "CRM / ERP Platform",
        company: "Avrora Holding",
        period: "Dec 2025 — May 2026",
        description:
            "Enterprise-grade CRM/ERP system built from the ground up. Designed and shipped core backend modules powering business operations across the holding.",
        highlights: [
            "10+ key modules shipped to production",
            "40+ GraphQL & REST endpoints implemented",
            "Event-driven architecture via Kafka/NATS",
            "SQL query optimization — up to 40% faster",
            "~30% codebase reduction after refactor",
        ],
        tags: ["NestJS", "GraphQL", "Kafka", "PostgreSQL", "NATS", "BPM"],
        type: "fulltime",
    },
    {
        title: "Fintech & Crypto Integrations",
        company: "Freelance",
        period: "Aug 2023 — Nov 2025",
        description:
            "End-to-end fintech backends for multiple clients — payment processing, crypto API integrations, and full-stack delivery with React + Next.js frontends.",
        highlights: [
            "Payment & crypto API integrations",
            "Full-stack delivery: backend + frontend",
            "Infrastructure optimization — costs down 50%",
            "Led projects from requirements to deployment",
        ],
        tags: ["Python", "Golang", "TypeScript", "React", "Next.js", "Redis"],
        type: "freelance",
    },
    {
        title: "Data Aggregation Pipeline",
        company: "Freelance",
        period: "Aug 2023 — Nov 2025",
        description:
            "High-throughput data aggregation and parsing system collecting and normalizing data from 10+ external sources with async task queues and ETL pipelines.",
        highlights: [
            "10+ external sources aggregated",
            "Task queues sped up processing by 3×",
            "ETL & async background job architecture",
            "REST APIs for downstream consumers",
        ],
        tags: ["Python", "Golang", "ETL", "Async", "Web Scraping", "REST API"],
        type: "freelance",
    },
];

const TAG_COLORS: Record<string, string> = {
    NestJS: "bg-red-500/15 text-red-400 border-red-500/20",
    GraphQL: "bg-pink-500/15 text-pink-400 border-pink-500/20",
    Kafka: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    PostgreSQL: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    NATS: "bg-green-500/15 text-green-400 border-green-500/20",
    BPM: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    Python: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    Golang: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
    TypeScript: "bg-blue-400/15 text-blue-300 border-blue-400/20",
    React: "bg-cyan-400/15 text-cyan-300 border-cyan-400/20",
    "Next.js": "bg-neutral-400/15 text-neutral-300 border-neutral-400/20",
    Redis: "bg-red-400/15 text-red-300 border-red-400/20",
    ETL: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    Async: "bg-violet-500/15 text-violet-400 border-violet-500/20",
    "Web Scraping": "bg-lime-500/15 text-lime-400 border-lime-500/20",
    "REST API": "bg-orange-400/15 text-orange-300 border-orange-400/20",
};

const defaultTag = "bg-gray-500/15 text-gray-400 border-gray-500/20";

const TypeBadge: React.FC<{ type: Project["type"] }> = ({ type }) =>
    type === "fulltime" ? (
        <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border border-orange-500/40 text-orange-400/80">
            Full-time
        </span>
    ) : (
        <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full border border-neutral-600/50 text-neutral-500">
            Freelance
        </span>
    );

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
    project,
    index,
}) => (
    <div className="group relative flex flex-col gap-5 p-6 rounded-2xl">
        {/* Index watermark */}
        <span className="absolute top-5 right-6 text-5xl font-extrabold text-white/[0.03] select-none pointer-events-none font-mono leading-none">
            {String(index + 1).padStart(2, "0")}
        </span>

        {/* Header */}
        <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                    {project.title}
                </h3>
                <TypeBadge type={project.type} />
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <span className="text-orange-500/70">{project.company}</span>
                <span>·</span>
                <span>{project.period}</span>
            </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5">
            {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-orange-500 mt-0.5 shrink-0">▸</span>
                    <span>{h}</span>
                </li>
            ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
                <span
                    key={tag}
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${TAG_COLORS[tag] ?? defaultTag}`}
                >
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const ProjectsSection: React.FC = () => (
    <section
    id="projects"
    className="w-full py-24 relative overflow-hidden"
    >

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">
            {/* Header */}
            <div className="mb-14">
                <p className="text-xs font-mono tracking-[0.3em] uppercase text-orange-500/60 mb-2">
                    02 / projects
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Work{" "}
                    <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="mt-3 text-gray-500 text-lg max-w-xl">
                    A snapshot of what I&apos;ve shipped — from enterprise CRM systems
                    to high-throughput data pipelines.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.title} project={project} index={i} />
                ))}
            </div>

            {/* Footer note */}
            <p className="mt-10 text-center text-sm text-gray-600 font-mono">
                More on{" "}
                <a
                    href="https://github.com/damirtag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500/70 hover:text-orange-400 transition-colors"
                >
                    github.com/damirtag
                </a>
            </p>
        </div>
    </section>
);

export default ProjectsSection;