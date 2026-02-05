import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";

const MainContent = () => {
  return (
    <main className="px-4 py-4">
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
    </main>
  );
};

export default MainContent;
