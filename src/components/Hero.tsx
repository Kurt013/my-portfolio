import { twMerge } from "tailwind-merge";
import SectionTemplate from "@/components/sections/SectionTemplate";

const Hero = () => {
  return (
    <SectionTemplate
      id="home"
      className={twMerge(
        "min-h-screen min-h-dvh max-w-5xl mx-auto flex flex-col justify-center",
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
