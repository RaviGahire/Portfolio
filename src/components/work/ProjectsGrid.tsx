

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
                <h4 className="text-[14px] text-primary-text uppercase font-inter tracking-wide font-semibold">
                  {project.name}
                </h4>
                <p className="text-[14px] text-secondary-text font-medium font-inter leading-0 pt-3">
                  {project.category}
                </p>
              </div>
              {/* Numbers */}
              <div>
                <span className="text-lavender font-inter font-bold">0{index + 1}</span>
              </div>
            </div>

            {/* inner card */}
            <div className=" bg-bg-dark border-t border-l border-r border-dark-borders  hover:bg-hover-nickel 
            transition-colors duration-300 ease-in-out pt-3 rounded-md flex-1 flex items-baseline justify-center cursor-pointer">
              {/* Image Wrapper */}
              <div className="w-full aspect-3/4 max-w-82 mask-b-from-50 hover:mask-none transition-all duration-300 ease-linear overflow-hidden rounded-sm">
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
