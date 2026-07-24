import { IconMinus } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { type Project } from "../../data/AllData";

type Props = {
  project : Project;
  onClose : () => void ;
}

export const ProjectDetail = ({ project, onClose } : Props) => {
  return (
    <section
      aria-label="project-details"
      className="absolute left-0 right-0 top-0 min-h-screen p-4"
    >
      <div className="flex flex-col gap-y-3 md:gap-y-0 md:flex-row justify-center items-start bg-bg-dark p-3 md:p-4 rounded-md border border-dark-borders">
        {/* Image side  */}
        <div className=" w-full md:w-1/2 overflow-hidden">
          {/* project image  */}
          <Link to={project.url} target="_blank" >
            <img
              className="size-full aspect-square object-cover bg-cover rounded-sm"
              src={project.image}
              alt={project.name}
            />
          </Link>
        </div>

        {/* Project info side */}
        <div className="w-full md:w-1/2 md:pl-4 text-primary-text">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 ">
            {/* project name */}
            <div className="font-inter">
              <p className="uppercase font-medium text-sm md:text-xl tracking-wide">
                {project.name}
              </p>
              <span className="text-lavender text-[12px] md:text-base font-normal">
                {project.category}
              </span>
            </div>
            {/* close btn */}
            <button
              onClick={() => onClose()}
              className="size-8 flex justify-center items-center text-2xl cursor-pointer 
             text-white bg-gray-800 rounded-full"
            >
              <IconMinus stroke={2} size={12} />
            </button>
          </div>

          {/* info */}
          <div className="flex gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-inter">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">ID</span>
            <span className="font-bold text-lavender text-sm md:text-base">{project.id}</span>
          </div>

          <div className="flex  gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-inter">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">Year</span>
            <span className="font-normal text-secondary-text text-sm md:text-base">
              {project.year}
            </span>
          </div>

          <div className="flex  gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-inter">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">Design</span>
            <span className="font-normal text-secondary-text text-sm md:text-base">
              {project.design}
            </span>
          </div>

          <div className="flex  gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-inter">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">Role</span>
            <span className="font-normal text-secondary-text text-sm md:text-base">
              {project.role}
            </span>
          </div>

          <div className="flex  gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-inter">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">Stack</span>
            <div className="font-normal text-secondary-text text-sm md:text-base text-wrap">
              {project.stack}
            </div>
          </div>

          <div className="flex  gap-3 md:gap-0 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            <span className="w-auto md:w-1/2 font-medium capitalize text-sm md:text-base">URL</span>
            <Link
              to={project.url}
              target="_blank"
              className="font-normal text-secondary-text hover:text-lavender text-sm md:text-base transition-colors duration-300 ease-linear"
            >
              {project.url}
            </Link>
          </div>
          <div className="pt-4 border-t border-light-borders/10 hover:border-light-borders/40 transition-colors duration-300 ease-linear w-full py-1.5 font-elmsSans">
            {project.desc ? (
              <p className="w-full text-primary-text/50 leading-5 text-sm md:text-base font-inter font-normal text-pretty">
                <span className="text-lavender underline underline-green-500  underline-offset-3">
                  Description
                </span>{" "}
                {project.desc}
              </p>
            ) : (
              <p className="text-secondary-text">Description Not Available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
