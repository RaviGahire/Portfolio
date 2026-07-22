import type { ReactNode } from "react";

type Badgeprops = {
  title: string;
  icon?: ReactNode;
};

export const Badge = ({ title, icon }: Badgeprops) => {
  return (
      <div className="inline-flex rounded-full bg-(image:--radial-purple-glow) border border-solid border-dark-borders/40 px-4 py-1.5 items-center gap-2">
              {icon ? (<>
              <div>{icon}</div>
              </>) : (
                <span className="size-1.5 rounded-full bg-(image:--secondary-gradient) animate-pulse" />
              )

              }
              <span className=" font-light md:font-medium font-inter tracking-wider text-primary-text/80 text-[10px] md:text-[12px] ">
                {title}
                </span>
            </div>
  );
};
