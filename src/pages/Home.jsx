import AiSection from "../components/home/AiSection.jsx";
import CtaBand from "../components/home/CtaBand.jsx";
import ExperienceTimeline from "../components/home/ExperienceTimeline.jsx";
import HomeHero from "../components/home/HomeHero.jsx";
import ProofStrip from "../components/home/ProofStrip.jsx";
import SelectedWork from "../components/home/SelectedWork.jsx";
import ServicesTeaser from "../components/home/ServicesTeaser.jsx";
import StackByDepth from "../components/home/StackByDepth.jsx";
import Seo from "../seo/Seo.jsx";

/**
 * Home (/ and /en/), sections in master plan §B.2 order: hero + Now card, proof strip, selected work, how I work
 * with AI (ink band), what I build, experience, stack by depth, dual CTA band. Copy: src/content/home.js.
 */
export default function Home() {
  return (
    <>
      <Seo page="home" />
      <HomeHero />
      <ProofStrip />
      <SelectedWork />
      <AiSection />
      <ServicesTeaser />
      <ExperienceTimeline />
      <StackByDepth />
      <CtaBand />
    </>
  );
}
