import { SiteHeader } from "@/components/site-header";
import { HeroSlider } from "@/components/hero-slider";
import { SatellitePackages } from "@/components/satellite-packages";
import { MatchSchedule } from "@/components/match-schedule";
import { FaqSection } from "@/components/faq-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="page-canvas" aria-label="Anasayfa">
        <HeroSlider />
        <SatellitePackages />
        <MatchSchedule />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
