"use client";

import { projectsData } from "@/data";
import { SectionHeading, Project } from "@/components";
import { FC, ComponentPropsWithoutRef, Fragment } from "react";
import { useSectionInView } from "@/hooks";

interface ProjectsSectionProps extends ComponentPropsWithoutRef<"section"> {}

const ProjectsSection: FC<ProjectsSectionProps> = ({ ...props }) => {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-28 sm:scroll-mt-24"
      ref={ref}
      {...props}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export { ProjectsSection };
