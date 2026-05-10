"use client";

import React from "react";
import { HeroSection } from "@/ui/hero";
import { About as AboutSection } from "@/ui/about";
import ProjectsSection from "@/ui/projects/ui/Projects";
import { ParallaxSection } from "@/shared/components/parallax-section";

const Portfolio: React.FC = () => {
    return (
        <div className="text-white min-h-screen overflow-x-hidden">
            <main>
                {/* Hero has its own parallax speed tuned for the viewport entry */}
                <HeroSection />

                {/* About — slower parallax, heavier content */}
                <ParallaxSection
                    id="about-wrapper"
                    speed={0.08}
                >
                    <AboutSection />
                </ParallaxSection>

                {/* Projects — medium speed */}
                <ParallaxSection
                    id="projects-wrapper"
                    speed={0.1}
                >
                    <ProjectsSection />
                </ParallaxSection>
            </main>

            <style jsx global>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #1a1a1a; }
                ::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, #f97316, #fb923c);
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, #ea580c, #f97316);
                }
                .scrollbar-thin::-webkit-scrollbar { width: 4px; }
                .scrollbar-thumb-orange-500\/20::-webkit-scrollbar-thumb {
                    background: rgba(249, 115, 22, 0.2);
                    border-radius: 9999px;
                }
                .scrollbar-track-transparent::-webkit-scrollbar-track {
                    background: transparent;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;