import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import SectionTemplate from "@/components/sections/SectionTemplate";
import { SquareArrowOutUpRight } from "lucide-react";

const Resume = () => {
  return (
    <SectionTemplate
      id="resume"
      className="text-center min-h-screen flex justify-center items-center"
    >
      <div className="">
        <h2 className="text-3xl text-center md:text-4xl font-bold pb-6">
          Resume
        </h2>
        <Card className="mx-auto w-full h-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl">Software Developer</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            With hands-on experience building full-stack and backend web
            applications. Focused on writing clean, scalable code and delivering
            solutions that solve real-world problems.
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://drive.google.com/drive/folders/1o1dGH22KkmVKjPmAaL89Ova3y_s22hWg?usp=sharing"
                target="_blank"
              >
                View
                <SquareArrowOutUpRight />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SectionTemplate>
  );
};

export default Resume;
