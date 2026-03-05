import { Hero } from "@/components/Hero";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <WorkExperience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Index;
