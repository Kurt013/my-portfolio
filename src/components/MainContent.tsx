import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

const MainContent = () => {
  return (
    <main className="px-4 py-4">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
};

export default MainContent;
