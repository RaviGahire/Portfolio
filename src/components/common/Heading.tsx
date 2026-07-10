type HeadingProps = {
  title: string;
  subTitle?: string; // optional
};

export const Heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <div className="max-w-xl space-y-4 text-center">
      {/* Heading */}
      <div className="space-y-2">
        <h2 className="font-poppins text-3xl font-bold uppercase tracking-[0.15em] text-white">
          {title}
        </h2>
        {/* glow line */}
        <div className="h-1 w-20 rounded-full mx-auto bg-(image:--vite-gradient)" />
      </div>

      {/* Description */}
      {subTitle && (
        <p className="max-w-xl font-elmsSans md:text-xl tracking-wide leading-6 text-secondary-text">
          {subTitle}
        </p>
      )}
    </div>
  );
};
