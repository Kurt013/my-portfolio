import type { ReactNode } from "react";

interface SectionTemplateProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const SectionTemplate = ({ id, className, children }: SectionTemplateProps) => {
  return (
    <section id={id} className={className + " max-w-5xl mx-auto pb-4"}>
      {children}
    </section>
  );
};

export default SectionTemplate;
