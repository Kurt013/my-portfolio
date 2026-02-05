import { Button } from "@/components/ui/Button";
import {
  Card,
  CardDescription,
  CardContent,
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
        <h2 className="sr-only">
          Resume
        </h2>
        <Card className="mx-auto w-full h-full max-w-md">
          <CardHeader>
            <CardTitle>Software Developer</CardTitle>
            <CardDescription>
              Student at Polytechnic University of the Philippines
            </CardDescription>
          </CardHeader>
          <CardContent>
            With hands-on experience building full-stack and backend web
            applications.
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <a
                href="https://drive.google.com/drive/folders/1o1dGH22KkmVKjPmAaL89Ova3y_s22hWg?usp=sharing"
                target="_blank"
              >
                View Resume
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
