import { HeroSection } from "@/ui/hero";
import { About as AboutSection } from "@/ui/about";
import { StackSection } from "@/ui/stack";

// Static page; rebuilt daily so the age/experience in About stay current.
export const revalidate = 86400;

export default function Portfolio() {
    return (
        <div className="text-white min-h-screen overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <StackSection />
        </div>
    );
}
