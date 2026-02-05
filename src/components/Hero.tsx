import { cn } from "@/lib/utils";
import SectionTemplate from "@/components/sections/SectionTemplate";

const Hero = () => {
  return (
    <SectionTemplate
      id="home"
      className={cn("min-h-screen min-h-dvh flex flex-col justify-center")}
    >
      <div className="w-full max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold pb-2">
          Hi, I'm Kurt Vincent Almodovar
        </h1>
        <p className="text-base md:text-xl pb-4">
          <em>Software Developer</em>
        </p>
        <p className="text-lg">
          Building reliable applications across
          backend and frontend, based in{" "}
          <strong>Santa Rosa City, Laguna</strong>.
        </p>
      </div>
    </SectionTemplate>
  );
};

export default Hero;
