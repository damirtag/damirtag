"use client";

import React from "react";
import { HeroSection } from "@/ui/hero";
import { About as AboutSection } from "@/ui/about";
import ProjectsSection from "@/ui/projects/ui/Projects";
import { ParallaxSection } from "@/shared/components/parallax-section";

const Portfolio: React.FC = () => {
    return (
        <div className="text-white min-h-screen overflow-x-hidden">
            <div>
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
            </div>

            <style jsx global>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #0a1610; }
                ::-webkit-scrollbar-thumb {
                    background: #16bc62;
                    border-radius: 4px;
                }
                ::-webkit-scrollbar-thumb:hover {
                    background: #34d77b;
                }
                .scrollbar-thin::-webkit-scrollbar { width: 4px; }
                .scrollbar-thumb-phos-500\/20::-webkit-scrollbar-thumb {
                    background: rgba(52, 215, 123, 0.2);
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