export interface TerminalCommand {
    output: string[];
}

export interface TerminalLine {
    type: "input" | "output" | "empty";
    content: string;
}

export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
    help: {
        output: [
            "Available commands:",
            "  about    — Who I am",
            "  skills   — Tech stack & expertise",
            "  contact  — How to reach me",
            "  clear    — Clear the terminal",
        ],
    },
    about: {
        output: [
            "┌─ @damirtag ────────────────────────┐",
            "│ Backend Engineer · Go/NestJS/Python │",
            "│ Almaty, Kazakhstan                  │",
            "│                                     │",
            "│ 3+ years commercial experience      │",
            "│ building high-load distributed      │",
            "│ systems, APIs and data pipelines.   │",
            "│                                     │",
            "│ Microservices · Event-driven arch   │",
            "│ Performance optimization · DevOps   │",
            "└─────────────────────────────────────┘",
        ],
    },
    skills: {
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
    contact: {
        output: [
            "Get in touch:",
            "",
            "  GitHub     github.com/damirtag",
            "  Email      damirtagilbayev17@gmail.com",
            "  Telegram   t.me/damirtag",
            "  LinkedIn   linkedin.com/in/damirtag",
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