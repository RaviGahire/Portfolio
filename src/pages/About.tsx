import { Experience } from "../components/about/Experience";
import { ExperienceData } from "../data/AllData";
import { Heading } from "../components/common/Heading";
import { Badge } from "../components/common/Badge";



export const About = () => {
  return (
    <section
      id="about"
      aria-label="about-me-section"
      className="bg-zinc-950 h-auto py-8 border-t border-dark-borders min-h-screen"
    >
      <div>
        {/* Heading */}
        <div className=" flex flex-col justify-center items-center">
          <div className="mb-4">
            <Badge title="A bit about me " />
          </div>
          <div className="mb-4">
            <Heading title="About me" />
          </div>
        </div>
        {/* Experience */}
        <div>
          <Experience expData={ExperienceData} />
        </div>
      </div>
    </section>
  );
};
