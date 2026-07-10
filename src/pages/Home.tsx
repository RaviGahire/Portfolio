import { IconChevronDown, IconLayoutGrid } from "@tabler/icons-react";

export const Home = () => {
  return (
    <div>
      <div className="relative bg-zinc-950 text-neutral-50 h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-hidden">
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl pointer-events-none rounded-full absolute -right-32 -top-32" />
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl  pointer-events-none rounded-full absolute -left-40 -bottom-40" />
        <div className="bg-[radial-gradient(oklch(1_0_0/.04)_1px,transparent_1px)] pointer-events-none absolute inset-0" />
        <section className="relative text-center flex p-12 flex-col justify-center items-center">
          <div className="max-w-3xl min-h-150 flex mx-auto flex-col justify-center items-center gap-8">
            <div className="inline-flex rounded-full bg-[#7f22fe]/10 border-[#7f22fe]/30 border border-solid px-4 py-1.5 items-center gap-2">
              <span className="size-1.5 rounded-full bg-(image:--secondary-gradient) animate-pulse" />
              <span className="font-bold tracking-wider font-elmsSans text-secondary-text text-xs ">
                Available for new projects
              </span>
            </div>
            {/* Name */}
            <div className="flex flex-col items-center gap-4">
              <h1
                className="text-[60px] md:text-[88px] leading-none font-poppins 
              text-transparent bg-clip-text bg-(image:--vite-gradient) font-light tracking-wide uppercase"
              >
                Ravi
                <br />
                gahire
              </h1>
              {/* custom underline */}
              <div className="bg-(image:--vite-gradient) rounded-full w-16 md:w-32 h-1" />
            </div>
            {/* info */}
            <p className="text-[18px] md:text-[22px] text-secondary-text font-elmsSans max-w-xl tracking-wide">
              {`Full-Stack Developer & Creative Technologist building polished, modern digital experiences.`}
            </p>
            {/* buttons */}
            <div className="flex flex-col md:flex-row mt-2 items-center gap-4 font-elmsSans">
              <button
                className="flex cursor-pointer items-center 
              justify-center gap-1 bg-(image:--vite-gradient) 
               font-bold rounded-xl text-violet-50 text-[14px] md:text-base md:leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                <IconLayoutGrid className="size-4 md:size-5" />
                View My Work
              </button>
              <button
                className="cursor-pointer border border-light-borders/50 bg-transparent 
                font-semibold rounded-xl text-neutral-50 text-[14px] md:text-base leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                {/* <send className="size-5" />/ */}
                Get In Touch
              </button>
            </div>
            {/* social media */}
            <div className="flex mt-4 items-center gap-8">
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                GitHub
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                LinkedIn
              </a>
              <a className="transition-colors text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                Twitter
              </a>
            </div>
          </div>
          <div className="left-1/2 -translate-x-1/2 flex absolute bottom-0  flex-col items-center gap-2">
            <span className="font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-widest">
              Scroll
            </span>
            <IconChevronDown className="size-5 animate-bounce text-[#7f22fe]" />
          </div>
        </section>
      </div>
    </div>
  );
};
