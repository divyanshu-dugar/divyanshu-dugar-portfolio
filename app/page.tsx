import Navbar from "@/app/components/navbar";
import HomeHero from "@/app/components/homeHero";
import SkillsToolbox from "./components/skillsToolBox";

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