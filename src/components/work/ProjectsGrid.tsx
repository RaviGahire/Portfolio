

type ProjectTypes = {
  id: number;
  name: string;
  link: string;
  category: string;
  image: string;
};



export const ProjectsGrid = ({ projects, onProjectClick }) => {


  return (
    <section aria-label="project-section">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 w-full mx-auto">
        {projects.map((project:any, index:number) => (
          // cards
          <div
              onClick={() => onProjectClick(project)}
            key={project.name}
            className="w-full max-w-full border-t border-dark-borders flex flex-col"
          >
            {/* header  */}
            <div className="flex justify-between items-center py-5">
              <div>
                {/* name */}
                <h4 className="text-[16px] text-primary-text uppercase font-semibold">
                  {project.name}
                </h4>
                <p className="text-[14px] text-secondary-text font-medium leading-0 pt-2">
                  {project.category}
                </p>
              </div>
              {/* Numbers */}
              <div>
                <span className="text-lavender">0{index + 1}</span>
              </div>
            </div>

            {/* inner card */}
            <div className="bg-nickel hover:bg-hover-nickel transition-colors duration-150 ease-in-out pt-12 rounded-md flex-1 flex items-baseline justify-center cursor-pointer">
              {/* Image Wrapper */}
              <div className="w-full aspect-3/4 max-w-82">
                <img
                  className="w-full h-full object-cover"
                  loading="lazy"
                  src={project.image}
                  alt={`${project.name} image`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
       </section>
  );
};
