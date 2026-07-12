import { Experience } from "../components/about/Experience";
import { ExperienceData } from "../data/AllData";
import { Heading } from "../components/common/Heading";

export const About = () => {
  return (
    <section aria-label="about-me-section" className="bg-bg-dark">
      <div>
        {/* Heading */}
        <div>
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
