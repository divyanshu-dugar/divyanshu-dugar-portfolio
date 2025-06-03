import Navbar from "@/components/navbar";
import HomeHero from "@/components/homeHero";
import SkillsToolbox from "@/components/skillsToolbox";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HomeHero />
        <SkillsToolbox/>
      </div>
    </>
  );
}