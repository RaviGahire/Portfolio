import { Underline } from "./Underline";

type HeadingProps = {
  title: string;
  subTitle?: string; // optional
};

export const Heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <div className="max-w-xl space-y-4 text-center">
      {/* Heading */}
      <div className="space-y-2">
        <h2 className="font-inter text-3xl font-bold uppercase tracking-[0.15em] text-white">
          {title}
        </h2>
        {/* glow line */}
        <div className="flex justify-center items-center mt-3">
          <Underline/>
        </div>
      </div>

      {/* subtitle */}
      {subTitle && (
        <p className="max-w-xl font-inter md:text-xl tracking-tight font-medium leading-6 text-secondary-text">
          {subTitle}
        </p>
      )}
    </div>
  );
};
