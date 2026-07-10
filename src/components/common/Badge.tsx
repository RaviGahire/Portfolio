import type { ReactNode } from "react";

type Badgeprops = {
  title: string;
  icon: ReactNode;
};

export const Badge = ({ title, icon }: Badgeprops) => {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-lavender/40 hover:shadow-lavender/20">
      <div className="rounded-full bg-linear-to-br from-lavender/20 to-purple-500/20 p-1 text-lavender">
        {icon}
      </div>
      <span className="font-poppins text-sm font-extralight tracking-[0.08em] text-white">
        {title || "Provide title!"}
      </span>
    </div>
  );
};
