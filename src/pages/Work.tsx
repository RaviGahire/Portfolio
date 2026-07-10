import { IconLayoutGrid } from "@tabler/icons-react";
import { Badge } from "../components/common/Badge";
import { Heading } from "../components/common/Heading";
import { ProjectsGrid } from "../components/common/work/ProjectsGrid";
import { div } from "motion/react-client";
import { ProjectDetail } from "../components/common/work/ProjectDetail";

export const Work = () => {
  return (
    <section aria-label="work-or-project-section" className="h-auto bg-bg-dark">
      <div >
        <Badge
          title="Portfolio"
          icon={<IconLayoutGrid stroke={2} size={18} />}
        />

        <Heading
          title="Selected Work"
          subTitle="A collection of projects I've built and designed with care craft, and attention to detail."
        />
      
      </div>
        {/* <ProjectsGrid /> */}
        <ProjectDetail/>
    </section>
  );
};
