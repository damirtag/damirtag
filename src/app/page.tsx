import { HeroSection } from "@/ui/hero";
import { About as AboutSection } from "@/ui/about";
import { StackSection } from "@/ui/stack";
import { BootScreen } from "@/widgets/boot";
import { Footer } from "@/widgets/footer";

// Static page; rebuilt daily so the age/experience in About stay current.
export const revalidate = 86400;

export default function Portfolio() {
    return (
        <>
            <BootScreen />
            <main className="text-white min-h-screen overflow-x-hidden">
                <HeroSection />
                <AboutSection />
                <StackSection />
            </main>
            <Footer />
        </>
    );
}
