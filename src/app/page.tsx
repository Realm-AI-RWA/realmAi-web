import ContactSection from "@/components/common/ContactSection";
import Hero from "@/components/common/Hero";
import Footer from "@/components/sections/Footer";
import RoadMapSection from "@/components/sections/RoadMapSection";
import TechnologySection from "@/components/sections/TechnologySection";
import WallSection from "@/components/sections/WallSection";
import TokenSection from "@/components/sections/TokenSection";
import NetworksSection from "@/components/sections/NetworksSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <NetworksSection />
      <TokenSection />
      <TechnologySection />
      <WallSection />
      <RoadMapSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
