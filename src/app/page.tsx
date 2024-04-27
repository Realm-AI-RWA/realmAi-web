import ContactSection from "@/components/common/ContactSection";
import Hero from "@/components/common/Hero";
import Footer from "@/components/sections/Footer";
import RoadMapSection from "@/components/sections/RoadMapSection";
import TechnologySection from "@/components/sections/TechnologySection";
import WallSection from "@/components/sections/WallSection";
import TokenSection from "@/components/sections/TokenSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <TokenSection />
      <TechnologySection />
      <WallSection />
      <RoadMapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
