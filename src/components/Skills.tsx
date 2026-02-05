import Languages from "@/components/Languages";
import FrameworksLibraries from "@/components/FrameworksLibraries";
import Databases from "@/components/Databases";
import ToolsPlatforms from "@/components/ToolsPlatforms";
import SectionTemplate from "./sections/SectionTemplate";

const Skills = () => {
  return (
    <SectionTemplate id="skills">
      <h2 className="text-3xl md:text-4xl font-bold pb-4">Tech Stack</h2>
      <Languages />
      <FrameworksLibraries />
      <Databases />
      <ToolsPlatforms />
    </SectionTemplate>
  );
};

export default Skills;
