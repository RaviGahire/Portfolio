import type { ReactNode } from "react";

type Badgeprops = {
  title: string;
  icon?: ReactNode;
};

export const Badge = ({ title, icon }: Badgeprops) => {
  return (
      <div className="inline-flex rounded-full bg-[#7f22fe]/10 border-[#7f22fe]/30 border border-solid px-4 py-1.5 items-center gap-2">
              {icon ? (<>
              <div>{icon}</div>
              </>) : (
                <span className="size-1.5 rounded-full bg-(image:--secondary-gradient) animate-pulse" />
              )

              }
              <span className="font-semibold  font-poppins text-secondary-text text-sm ">
                {title}
                </span>
            </div>
  );
};
