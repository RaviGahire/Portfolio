import { skillImages } from "../../data/AllData";

export const MyStack = () => {
  return (
<div className="w-full overflow-hidden bg-bg-dark text-white [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
  <div className="flex w-max animate-scroll items-center gap-4">
    {[...skillImages, ...skillImages].map((skill, index) => (
      <div
        key={`${skill.name}-${index}`}
        className="size-10 shrink-0 overflow-hidden rounded-full"
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
