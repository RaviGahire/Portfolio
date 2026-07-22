import { IconLayoutGrid } from "@tabler/icons-react";
import { Badge } from "../components/common/Badge";
import { Heading } from "../components/common/Heading";
import { ProjectsGrid } from "../components/work/ProjectsGrid";
import { projectData } from "../data/AllData";
import { useState } from "react";
import { ProjectDetail } from "../components/work/ProjectDetail";

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      aria-label="work-or-project-section"
      className="relative min-h-auto bg-zinc-950 py-8 border-t border-dark-borders"
    >
      <div className="flex flex-col justify-center items-center">
        {/* Badge */}
        <div className="my-4">
          <Badge
            title="My work"
            icon={<IconLayoutGrid className="text-white" stroke={2} size={18} />}
          />
        </div>
        {/* Heading */}
        <div className="mb-4">
          <Heading
            title="Selected Work"
            subTitle="A collection of projects I've built and designed with care craft, and attention to detail."
          />
        </div>     
      </div>
      
      {/* Project card grid */}
      <ProjectsGrid
        projects={projectData}
        onProjectClick={setSelectedProject}
      />

      {/* Project details */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
