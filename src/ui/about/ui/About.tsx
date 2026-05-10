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

    const codeSnippet = `from typing import Tuple, List, Dict

class damirTAG:
    def __init__(self):
        self.hatred     = True
        self.narciss    = False
        self.lazy       = False

class Attributes(damirTAG):
    def __init__(self):
        super().__init__()

    @property
    def life(self) -> Tuple[List[str], int, str]:
        interests   = [
            'code', 'mountains', 'sport', 'tech'
        ]
        age         = ${age}
        location    = "almaty, kz"
        return interests, age, location

    @property
    def personality(self) -> Dict[str, bool]:
        return {
            "spontaneous"       : False,
            "night_owl"         : True,
            "coffee_addicted"   : False,
            "hyperfix_addicted" : True
        }`;

    return (
        <section
            id="about"
            className="w-full py-24"
        >

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                {/* Section header */}
                <div className="mb-14">
                    <p className="text-xs font-mono tracking-[0.3em] uppercase text-orange-500/60 mb-2">
                        02 / about
                    </p>
                    <h2 className="text-4xl font-bold text-white">
                        Who I{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                            am
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
                    {/* Left: text + stats + stack */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I&apos;m a{" "}
                                <span className="text-orange-400 font-medium">
                                    {age}-year-old backend developer
                                </span>{" "}
                                from Almaty with 2+ years of commercial experience building
                                high-load distributed systems. Specialized in microservice
                                architecture, event-driven systems, and performance optimization.
                            </p>
                            <p>
                                Full dev-cycle experience — from architecture design to deployment
                                and production support. Worked across fintech, crypto, and
                                enterprise CRM/ERP domains.
                            </p>
                            <p>
                                When I&apos;m not shipping features, you&apos;ll find me in the
                                mountains — hiking or mountaineering around Almaty.
                            </p>
                        </div>

                        {/* Tech stack */}
                        <div>
                            <p className="text-xs font-mono tracking-widest uppercase text-orange-500/50 mb-4">
                                Tech Stack
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="p-3 bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-orange-500/20 rounded-xl text-center hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
                                    >
                                        <div className="mb-1.5 flex justify-center">
                                            {tech.icon}
                                        </div>
                                        <span className="text-xs text-gray-400">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: code block */}
                    <div className="hidden lg:flex items-start justify-center relative">
                        <div className="relative">
                            <SyntaxHighlighter
                                language="python"
                                style={oneDark}
                                customStyle={{
                                    background: "rgba(18, 18, 18, 0.9)",
                                    border: "1px solid rgba(249, 115, 22, 0.25)",
                                    borderRadius: "14px",
                                    padding: "28px",
                                    width: "420px",
                                    fontSize: "13px",
                                    fontFamily:
                                        "ui-monospace, SFMono-Regular, monospace",
                                    lineHeight: "1.65",
                                }}
                            >
                                {codeSnippet}
                            </SyntaxHighlighter>
                            {/* glow behind code block */}
                            <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
                                <div className="w-[460px] h-[460px] bg-orange-500/8 rounded-full blur-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;