import { Experience } from "../components/about/Experience";
import { ExperienceData } from "../data/AllData";
import { Heading } from "../components/common/Heading";

export const About = () => {
  return (
    <section aria-label="about-me-section" className="bg-bg-dark h-auto py-10">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <div className="py-10 ">
          <Heading title="About me" />
        </div>
        {/* Experience */}
        <div>
          <Experience expData={ExperienceData} />
        </div>
      </div>
    </section>
  );
};
