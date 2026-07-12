import { skillImages } from "../../data/AllData";

export const MyStack = () => {
  return (
    <div className="flex justify-center items-center w-full py-4 bg-bg-dark text-white mt-10">
      <div className="w-1/5 flex justify-end">
        <h4 className="text-2xl font-semibold uppercase font-poppins mr-4">
          My Stack
        </h4>
      </div>
      <div className="border border-dark-borders w-full"/>
      {/* skills iamges */}
      <div className="w-full flex justify-around items-center gap-4">
        {skillImages.map((skill) => (
          <div
            key={skill.name}
            className="size-10 shrink-0 rounded-full overflow-hidden"
            title={skill.name}
          >
            <img
              className="size-full object-cover"
              loading="lazy"
              src={skill.img}
              alt={`${skill.name} icon`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
