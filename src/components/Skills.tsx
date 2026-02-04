import Languages from "@/components/Languages";
import FrameworksLibraries from "@/components/FrameworksLibraries";
import Databases from "@/components/Databases";

const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto">
      {
        // • Languages: PHP, Python, JavaScript, HTML5, CSS3, SQL, Java, C++, R
        // • Frameworks & Libraries: Laravel, Flask, React, Tailwind CSS, Shiny
        // • Databases: MySQL, SQLite
        // • Tools & Platforms: Git, GitHub, Docker, Jira, Confluence, Figma, Google Search Console
      }

      <h2 className="text-3xl md:text-4xl font-bold pb-2 flex-">Tech Stack</h2>
        <Languages />
        <FrameworksLibraries />
        <Databases />

      
    </section>
  );
};

export default Skills;
