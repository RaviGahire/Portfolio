import { useRef } from "react";

type ProjectProps = {
  id: number;
  name: string;
  link: string;
  category: string;
  image: string;
};

const projectData: ProjectProps[] = [
  {
    id: 1,
    name: "Hiruki",
    link: "https://harryjatkins.com/",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1783321284120-61d9a47c92a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    id: 1,
    name: "Aether Studio",
    link: "https://aetherstudio.com/",
    category: "Studio Website",
    image:
      "https://images.unsplash.com/photo-1783429742967-dad146c20897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    id: 1,
    name: "Nova Craft",
    link: "https://novacraft.design/",
    category: "E-com Website",
    image:"https://plus.unsplash.com/premium_photo-1705258076457-ce0048cc6591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 1,
    name: "Pixel Harbor",
    link: "https://pixelharbor.dev/",
    category: "Brand Website",
    image:"https://images.unsplash.com/photo-1783373315941-cbbceecff94c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 1,
    name: "Lumen Flow",
    link: "https://lumenflow.com/",
    category: "Website",
    image:"https://images.unsplash.com/photo-1783173561737-202300de9165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"  },
];

export const ProjectsGrid = () => {

    const proIdRef = useRef ('')

  const openProjectDetails = () => {
    alert("hello");
  };

  return (
    <section aria-label="project-section">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4 w-full mx-auto">
        {projectData.map((item, index) => (
          // cards
          <div
  
            key={index}
            className="w-full max-w-full border-t border-dark-borders flex flex-col"
          >
            {/* header  */}
            <div className="flex justify-between items-center py-5">
              <div>
                {/* name */}
                <h4 className="text-[16px] text-primary-text uppercase font-semibold">
                  {item.name}
                </h4>
                <p className="text-[14px] text-secondary-text font-medium leading-0 pt-2">
                  {item.category}
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
                  className="w-full h-full object-cover "
                  src={item.image}
                  alt={`${item.name} image`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
