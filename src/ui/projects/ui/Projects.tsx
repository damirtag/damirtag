import React from "react";

interface Project {
    title: string;
    company: string;
    period: string;
    role: string;
    description: string;
    link?: { href: string; label: string };
    metrics: { value: string; label: string }[];
    highlights: string[];
    tags: string[];
    type: "fulltime" | "freelance" | "contract";
}

const PROJECTS: Project[] = [
    {
        title: "CRM / ERP Platform",
        company: "Avrora Holding",
        period: "Dec 2025 — May 2026",
        role: "Backend Developer",
        description:
            "Internal CRM/ERP platform running day-to-day operations across the holding. I built core backend modules as NestJS and Go (Gin) microservices on PostgreSQL, and moved inter-service communication onto events.",
        metrics: [
            { value: "500+", label: "daily users" },
            { value: "10+", label: "modules shipped" },
            { value: "40+", label: "GraphQL/REST endpoints" },
            { value: "−40%", label: "heaviest query time" },
        ],
        highlights: [
            "Migrated to Kafka/NATS events, removing 10 synchronous dependencies so services deploy independently",
            "gRPC APIs between services; GraphQL and REST at the edge",
            "Co-designed a BPM workflow engine (state transitions, task routing) automating 15+ business processes",
            "Indexing and query restructuring cut the heaviest SQL by 40%; background-job throughput doubled",
            "Unit and e2e coverage, then a refactor that shrank the codebase ~30% with no behavior change",
        ],
        tags: ["NestJS", "Go", "Gin", "GraphQL", "gRPC", "Kafka", "NATS", "PostgreSQL", "BPM"],
        type: "fulltime",
    },
    {
        title: "Web Platforms for Businesses",
        company: "Freelance",
        period: "Aug 2023 — Nov 2025",
        role: "Full-Stack Engineer",
        description:
            "Full-stack web apps for clients and small businesses, from design handoff to a running server: an exam-prep platform, e-commerce webshops and landing pages.",
        link: { href: "https://sad-academy.com", label: "sad-academy.com" },
        metrics: [
            { value: "4", label: "AP subjects on S&D" },
            { value: "E2E", label: "design → deploy" },
        ],
        highlights: [
            "S&D Academy: AP & SAT prep platform with practice tests, timed exams and progress tracking",
            "E-commerce webshops for small businesses",
            "Landing pages and admin panels, deployed with Docker and Nginx",
        ],
        tags: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
        type: "freelance",
    },
    {
        title: "Fintech & Crypto Backends",
        company: "Freelance",
        period: "Aug 2023 — Nov 2025",
        role: "Backend / Full-Stack Engineer",
        description:
            "Backend services for fintech and crypto clients: payment-gateway and wallet integrations, REST APIs and Telegram bots, deployed and run by me.",
        metrics: [
            { value: "−50%", label: "infra costs" },
            { value: "E2E", label: "requirements → prod" },
        ],
        highlights: [
            "Payment-gateway and crypto wallet integrations in Go and Python",
            "Telegram bots for client operations and notifications",
            "Deployments on Linux VPS with Docker, Nginx and CI/CD",
        ],
        tags: ["Go", "Python", "REST API", "Redis", "Docker", "Nginx"],
        type: "freelance",
    },
    {
        title: "Data Aggregation Pipeline",
        company: "Freelance",
        period: "Aug 2023 — Nov 2025",
        role: "Backend Engineer",
        description:
            "Aggregators that collect and normalize data from 10+ external sources and expose it to downstream consumers via REST.",
        metrics: [
            { value: "10+", label: "sources" },
            { value: "3×", label: "faster runtime" },
        ],
        highlights: [
            "Queue-based async processing replaced sequential scraping",
            "ETL stage normalizes heterogeneous source formats",
            "REST APIs for downstream consumers",
        ],
        tags: ["Python", "Go", "ETL", "Async", "Web Scraping"],
        type: "freelance",
    },
    {
        title: "Makkah Travel Platform",
        company: "Makkah Travel",
        period: "Jun 2023 — Aug 2023",
        role: "Full-Stack Developer",
        description:
            "Platform for a travel agency that runs Umrah and Hajj pilgrimages: a public landing page plus an admin panel for users, documents and visas.",
        metrics: [
            { value: "0 → 1", label: "concept to launch" },
        ],
        highlights: [
            "Client management and tracking with secure storage of personal data",
            "Admin workflows for documents and visa status",
            "Configured the production server and kept it running after launch",
        ],
        tags: ["Node.js", "TypeScript", "MongoDB", "React"],
        type: "contract",
    },
];

const TYPE_LABEL: Record<Project["type"], string> = {
    fulltime: "Full-time",
    freelance: "Freelance",
    contract: "Contract",
};

const ProjectCard: React.FC<{ project: Project; featured?: boolean }> = ({ project, featured }) => (
    <article
        className={`flex flex-col gap-5 p-6 md:p-7 rounded-xl border bg-ink-900/70 transition-colors duration-200 hover:border-phos-500/40 ${
            featured ? "md:col-span-2 border-phos-500/30" : "border-ink-700"
        }`}
    >
        {/* Header */}
        <div className="flex flex-col gap-1.5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
                <h3 className={`font-bold text-white ${featured ? "text-2xl" : "text-lg"}`}>
                    {project.title}
                </h3>
                <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border ${
                        project.type === "fulltime"
                            ? "border-phos-500/40 text-phos-300"
                            : "border-neutral-700 text-neutral-500"
                    }`}
                >
                    {TYPE_LABEL[project.type]}
                </span>
            </div>
            <p className="text-xs font-mono text-neutral-500">
                <span className="text-phos-400">{project.company}</span> · {project.role} · {project.period}
            </p>
            {project.link && (
                <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-xs font-mono text-phos-300 underline decoration-phos-500/40 underline-offset-4 hover:decoration-phos-300"
                >
                    {project.link.label} ↗
                </a>
            )}
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">{project.description}</p>

        {/* Metrics */}
        <dl className={`grid gap-4 ${featured ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2"}`}>
            {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse">
                    <dt className="text-xs text-neutral-500">{m.label}</dt>
                    <dd className="text-xl font-bold font-mono text-phos-400">{m.value}</dd>
                </div>
            ))}
        </dl>

        <ul className={`grid gap-2 ${featured ? "md:grid-cols-2 md:gap-x-8" : ""}`}>
            {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="text-phos-500 mt-0.5 shrink-0">▸</span>
                    <span>{h}</span>
                </li>
            ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
            {project.tags.map((tag) => (
                <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded border border-ink-700 bg-ink-800/60 text-neutral-300"
                >
                    {tag}
                </span>
            ))}
        </div>
    </article>
);

const ProjectsSection: React.FC = () => (
    <section id="projects" className="w-full py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center">
            <div className="mb-14">
                <p className="text-xs font-mono tracking-[0.3em] uppercase text-phos-500/70 mb-2">
                    02 / projects
                </p>
                <h2 className="text-4xl font-bold text-white">
                    Work <span className="text-phos-400">Experience</span>
                </h2>
                <p className="mt-3 text-neutral-500 text-lg max-w-xl">
                    What I&apos;ve shipped, from an enterprise CRM/ERP platform to payment
                    integrations and data pipelines, with the numbers behind it.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, i) => (
                    <ProjectCard key={project.title} project={project} featured={i === 0} />
                ))}
            </div>

            <p className="mt-10 text-center text-sm text-neutral-500 font-mono">
                More on{" "}
                <a
                    href="https://github.com/damirtag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-phos-400 hover:text-phos-300 transition-colors"
                >
                    github.com/damirtag
                </a>
            </p>
        </div>
    </section>
);

export default ProjectsSection;
