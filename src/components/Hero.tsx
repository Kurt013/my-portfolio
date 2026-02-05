import { cn } from "@/lib/utils";
import SectionTemplate from "@/components/sections/SectionTemplate";

const Hero = () => {
  return (
    <SectionTemplate
      id="home"
      className={cn(
        "min-h-screen min-h-dvh flex flex-col justify-center"
      )}
    >
      <div className="w-full max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold pb-2">
            Hi, I'm Kurt Vincent Almodovar
          </h1>
          <p className="text-base md:text-xl text-gray-500 pb-4">
            Software Developer & Data Engineer
          </p>
          <p className="text-lg">
            Creating web apps and analyzing data to solve real-world problems
            based in <strong>Santa Rosa City, Laguna.</strong>
          </p>
      </div>
    </SectionTemplate>
  );
};

export default Hero;
