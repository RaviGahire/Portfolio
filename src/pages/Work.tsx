import { IconLayoutGrid } from "@tabler/icons-react";
import { Badge } from "../components/common/Badge";
import { Heading } from "../components/common/Heading";
import { ProjectDetail } from "../components/work/ProjectDetail";
import { ProjectsGrid } from "../components/work/ProjectsGrid";

export const Work = () => {
  return (
    <section aria-label="work-or-project-section" className="h-auto bg-bg-dark">
      <div>
        <Badge
          title="Portfolio"
          icon={<IconLayoutGrid stroke={2} size={18} />}
        />

        <div className="flex justify-center items-center ">
          {" "}
          <Heading
            title="Selected Work"
            subTitle="A collection of projects I've built and designed with care craft, and attention to detail."
          />
        </div>
      </div>
      <ProjectsGrid />
      {/* <ProjectDetail /> */}
    </section>
  );
};
