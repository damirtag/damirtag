export interface TerminalCommand {
    name: string;
    description: string;
    output: string[];
}

export interface TerminalLine {
    type: "input" | "output" | "empty";
    content: string;
}

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
    help: {
        name: "help",
        description: "List available commands",
        output: [
            "Available commands:",
            "  about    — Who I am",
            "  skills   — Tech stack & expertise",
            "  projects — Featured work",
            "  contact  — How to reach me",
            "  clear    — Clear the terminal",
        ],
    },
    about: {
        name: "about",
        description: "About me",
        output: [
            "┌─ @damirtag ────────────────────────┐",
            "│ Backend Developer                   │",
            "│ Almaty, Kazakhstan                  │",
            "│                                     │",
            "│ 2+ years commercial experience      │",
            "│ building high-load distributed      │",
            "│ systems. Fintech, crypto, CRM/ERP.  │",
            "│                                     │",
            "│ Microservices · Event-driven arch   │",
            "│ Performance optimization · DevOps   │",
            "└─────────────────────────────────────┘",
        ],
    },
    skills: {
        name: "skills",
        description: "Tech stack",
        output: [
            "Backend",
            "  ▸ Node.js / NestJS",
            "  ▸ Python / Golang",
            "  ▸ PostgreSQL / Redis",
            "  ▸ GraphQL / REST / gRPC / WebSockets",
            "  ▸ Kafka / NATS / RabbitMQ",
            "  ▸ Microservices / BPM engines",
            "",
            "Frontend",
            "  ▸ TypeScript / React / Next.js",
            "  ▸ TailwindCSS / MUI / SCSS",
            "",
            "Data & Automation",
            "  ▸ ETL pipelines / web scraping",
            "  ▸ Async background jobs",
            "",
            "DevOps",
            "  ▸ Docker / CI-CD / Nginx / Linux",
            "  ▸ Git / GitLab / GitHub",
        ],
    },
    projects: {
        name: "projects",
        description: "Featured work",
        output: [
            "Featured work:",
            "",
            "  [1] CRM / ERP Platform",
            "       Avrora Holding · Dec 2025 — May 2026",
            "       NestJS · GraphQL · Kafka · PostgreSQL",
            "       10+ modules, 40+ endpoints shipped",
            "",
            "  [2] Fintech & Crypto Integrations",
            "       Freelance · 2023 — 2025",
            "       Python · Golang · React · Next.js",
            "       Payment & crypto APIs, full-stack",
            "",
            "  [3] Data Aggregation Pipeline",
            "       Freelance · 2023 — 2025",
            "       Python · Golang · ETL · Async",
            "       10+ sources, 3× faster processing",
        ],
    },
    contact: {
        name: "contact",
        description: "Contact info",
        output: [
            "Get in touch:",
            "",
            "  GitHub     github.com/damirtag",
            "  Email      damirtagilbayev17@gmail.com",
            "  Telegram   t.me/damirtag",
            "  LinkedIn   linkedin.com/in/damir-tagilbayev-32513b272",
            "",
            "Open to work and collaboration.",
        ],
    },
};

export const INITIAL_LINES: TerminalLine[] = [
    { type: "output", content: 'Type "help" to see available commands.' },
    { type: "empty", content: "" },
];

export const QUICK_COMMANDS = Object.keys(TERMINAL_COMMANDS);