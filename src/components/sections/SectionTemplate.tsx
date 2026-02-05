import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTemplateProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const SectionTemplate = ({ id, className, children }: SectionTemplateProps) => {
  return (
    <section id={id} className={cn(className, "max-w-5xl mx-auto")}>
      {children}
    </section>
  );
};

export default SectionTemplate;
