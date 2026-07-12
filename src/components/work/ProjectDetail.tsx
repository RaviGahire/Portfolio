import { IconMinus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const ProjectDetail = ({project,onClose}) => {

  return (
    <section aria-label="project-details" className="absolute left-0 right-0 top-0 min-h-screen p-4">
      <div className="flex flex-col md:flex-row justify-center items-start bg-nickel p-4 rounded-md">
        {/* Image side  */}
        <div className="min-h-screen w-1/2 overflow-hidden">
          {/* project image  */}
        <Link to={project.url} target="_blank">
          <img
            className="size-full aspect-square object-cover bg-cover"
            src={project.image}
            alt={project.name}
          />
        </Link>
        </div>

        {/* Project info side */}
        <div className="w-1/2 pl-4 text-primary-text">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 ">
            {/* project name */}
            <div>
              <p className="font-semibold font-poppins md:text-xl tracking-wide">
                {project.name}
              </p>
              <span className="text-secondary-text font-elmsSans font-semibold">
                {project.category}
              </span>
            </div>
            {/* close btn */}
            <button
            onClick={()=>onClose()}
              className="size-8 flex justify-center items-center text-2xl cursor-pointer 
             text-white bg-gray-800 rounded-full"
            >
              <IconMinus stroke={2} size={12} />
            </button>
          </div>

          {/* info */}
          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 tracking-wider">ID</span>
            <span className="tracking-wide">{project.id}</span>
          </div>

          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 tracking-wider">Year</span>
            <span className="tracking-wide">{project.year}</span>
          </div>

          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 text-shadow-2xs tracking-wider">Design</span>
            <span className="tracking-wide">
              {project.design}
            </span>
          </div>

          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 tracking-wider">Role</span>
            <span className="tracking-wide">{project.role}</span>
          </div>

          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 tracking-wider">Stack</span>
            <div className="leading-5 tracking-wide">
           {project.stack}
            </div>
          </div>

          <div className="flex border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-1/2 tracking-wider">URL</span>
            <Link
              to={project.url}
              target="_blank"
              className="tracking-wide hover:text-lavender transition-colors duration-300 ease-linear"
            >
              {project.url}
            </Link>
          </div>
         </div>
      </div>
    </section>
  );
};
