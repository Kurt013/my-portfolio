import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import SectionTemplate from "@/components/sections/SectionTemplate";
import projects from "@/data/projects";

const Projects = () => {
  return (
    <SectionTemplate id="projects">
      <h2 className="text-3xl text-center md:text-4xl font-bold pb-2">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((item, index) => {
            return (
              <Card
                key={item + "-" + index}
                className="relative overflow-hidden w-full pt-0"
              >
                <img
                  src={item.githubThumbnail}
                  alt={item.projectName + " Github Repository Thumbnail"}
                  className="relative z-20 aspect-video w-full p-4 object-contain bg-black/30 "
                />
                <CardHeader>
                  <CardTitle>{item.projectName}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-col justify-start gap-2">
                  <div className="flex gap-2 flex-wrap text-start">
                    {item.techStack.map((stack, indexStack) => {
                      return (
                        <Badge key={indexStack} variant="secondary">
                          {stack}
                        </Badge>
                      );
                    })}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </SectionTemplate>
  );
};

export default Projects;
