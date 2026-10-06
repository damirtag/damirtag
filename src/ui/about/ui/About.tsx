import { technologies } from "./About.techs";
import { useMemo } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const AboutSection: React.FC = () => {
    const age = useMemo(() => {
        const birthDate = new Date(2006, 5, 19);
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        const hasBirthdayPassed =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() &&
                today.getDate() >= birthDate.getDate());
        if (!hasBirthdayPassed) years--;
        return years;
    }, []);

    function getYearsOfExperience(startYear: number): number {
        const now = new Date();
        return now.getFullYear() - startYear
    }

    const experience = getYearsOfExperience(2023)

    const codeSnippet = `type LifeTuple = [string[], number, string];

class Damir {
  hatred: boolean;

  constructor() {
    this.hatred = true;
  }
}

class Attributes extends Damir {
  constructor() {
    super();
  }

  get life(): LifeTuple {
    const interests: string[] = [
      "code",
      "mountains",
      "sport",
      "tech",
    ];

    const age: number = ${age}
    const location: string = "almaty, kz";

    return [interests, age, location];
  }

  get personality(): Record<string, boolean> {
    return {
      night_owl: true,
      coffee_addicted: true,
      hyperfix_addicted: true,
    };
  }
}`;

    return (
        <section
            id="about"
            className="w-full py-24"
        >
            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                {/* Section header */}
                <div className="mb-14">
                    <p className="text-xs font-mono tracking-[0.3em] uppercase text-phos-500/70 mb-2">
                        01 / about
                    </p>
                    <h2 className="text-4xl font-bold text-white">
                        Who I <span className="text-phos-400">am</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left: text + facts + stack */}
                    <div className="flex flex-col gap-10">
                        <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
                            <p>
                                I&apos;m a{" "}
                                <span className="text-phos-300 font-medium">
                                    {age}-year-old backend engineer
                                </span>{" "}
                                from Almaty with {experience}+ years of commercial experience. I build
                                event-driven microservices in NestJS and Go on PostgreSQL, wired
                                together with Kafka, NATS and gRPC.
                            </p>
                            <p>
                                Most recently at Avrora Holding I shipped 10+ modules of a CRM/ERP
                                platform used daily by 500+ people across 10+ departments, moved
                                inter-service calls onto events so teams could deploy independently,
                                and co-designed the BPM engine behind 15+ automated workflows.
                            </p>
                            <p>
                                Before that I freelanced for fintech, crypto and small businesses:
                                payment-gateway and wallet integrations, Telegram bots, data
                                aggregators and full-stack Next.js platforms, owned from requirements
                                to the Linux box they run on.
                            </p>
                            <p>
                                Off the keyboard I&apos;m usually in the mountains around Almaty,
                                hiking or mountaineering.
                            </p>
                        </div>

                        {/* Facts */}
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 font-mono text-sm">
                            {FACTS.map((f) => (
                                <div key={f.label} className="border-l-2 border-phos-500/40 pl-4">
                                    <dt className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                                        {f.label}
                                    </dt>
                                    <dd className="text-neutral-200">{f.value}</dd>
                                    {f.note && <dd className="text-neutral-500 text-xs mt-0.5">{f.note}</dd>}
                                </div>
                            ))}
                        </dl>

                        {/* Tech stack */}
                        <div>
                            <p className="text-xs font-mono tracking-widest uppercase text-phos-500/70 mb-4">
                                Tech Stack
                            </p>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                {technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="p-3 bg-ink-900/70 border border-ink-700 rounded-lg text-center hover:border-phos-500/50 transition-colors duration-200 cursor-default"
                                    >
                                        <div className="mb-1.5 flex justify-center">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-neutral-400">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: code block + skill groups */}
                    <div className="flex flex-col gap-8 lg:items-center">
                        <div className="hidden lg:block">
                            <SyntaxHighlighter
                                language="typescript"
                                style={oneDark}
                                customStyle={{
                                    background: "rgba(10, 22, 16, 0.92)",
                                    border: "1px solid rgba(52, 215, 123, 0.25)",
                                    borderRadius: "10px",
                                    padding: "28px",
                                    width: "420px",
                                    fontSize: "13px",
                                    fontFamily:
                                        "ui-monospace, SFMono-Regular, monospace",
                                    lineHeight: "1.65",
                                    margin: 0,
                                }}
                            >
                                {codeSnippet}
                            </SyntaxHighlighter>
                        </div>

                        <div className="w-full lg:w-[420px] flex flex-col gap-4">
                            {SKILL_GROUPS.map((g) => (
                                <div key={g.title} className="font-mono text-sm">
                                    <p className="text-phos-400 mb-1">{g.title}</p>
                                    <p className="text-neutral-400 leading-relaxed">{g.items.join(" · ")}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FACTS = [
    { label: "Languages", value: "Kazakh · Russian · English", note: "native · fluent · B2" },
    { label: "Work mode", value: "Remote or relocation", note: "based in Almaty, UTC+5" },
];

const SKILL_GROUPS = [
    { title: "// languages", items: ["Go", "TypeScript / Node.js", "Python", "SQL"] },
    { title: "// backend", items: ["NestJS", "Gin", "GraphQL", "REST", "gRPC", "WebSockets", "unit & e2e tests"] },
    { title: "// data & infra", items: ["PostgreSQL", "Redis", "MongoDB", "Kafka", "NATS", "Docker Compose", "Nginx", "GitHub Actions / GitLab CI"] },
    { title: "// frontend", items: ["React", "Next.js", "Tailwind"] },
];

export default AboutSection;
