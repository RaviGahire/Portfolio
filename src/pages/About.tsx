import { Experience } from "../components/about/Experience";
import { ExperienceData } from "../data/AllData";
import { Heading } from "../components/common/Heading";
import { Badge } from "../components/common/Badge";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="about-me-section"
      className="bg-bg-dark h-auto py-10"
    >
      <div>
        {/* Heading */}
        <div className="py-10 flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Badge title="bit about me " />
          </div>

          <Heading title="About me" subTitle="hello " />
        </div>
        {/* Experience */}
        <div>
          <Experience expData={ExperienceData} />
        </div>
      </div>
    </section>
  );
};
