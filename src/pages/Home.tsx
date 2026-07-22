import { IconChevronDown, IconLayoutGrid, IconPhoneCall } from "@tabler/icons-react";
import { Work } from "./Work";
import { About } from "./About";
import { Badge } from "../components/common/Badge";
import { IconVignette } from "../components/svgs/IconVignette";
import { Underline } from "../components/common/Underline";

export const Home = () => {
  return (
    <section id="home">
      <div className="relative bg-zinc-950 text-neutral-50 h-fit min-h-dvh max-w-screen overflow-hidden">
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl pointer-events-none rounded-full absolute -right-32 -top-32" />
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl  pointer-events-none rounded-full absolute -left-40 -bottom-40" />
        <div className="bg-[radial-gradient(oklch(1_0_0/.04)_1px,transparent_1px)] pointer-events-none absolute inset-0" />
        <section className="relative text-center flex p-12 flex-col justify-center items-center">
          <div className="max-w-3xl min-h-150 flex mx-auto flex-col justify-center items-center gap-8">
            {/* Badge */}
            <Badge
              title="Available for new projects"
              icon={<IconVignette height={24} width={24} stroke={2} />}
            />
            {/* Name */}
            <div className="flex flex-col items-center gap-4">
              <h1
                className="text-[40px] md:text-[96px] font-inter 
              text-primary-text font-normal uppercase lg:leading-24"
              >
                Hello I'm
                 Ravi
                gahire
              </h1>
              {/* custom underline */}
              <Underline />
            </div>
            {/* info */}
            <p className="text-[18px] md:text-[20px] text-secondary-text font-inter font-medium tracking-tight leading-7 max-w-xl">
              {`Full-Stack Developer & Creative Technologist building polished, modern digital experiences.`}
            </p>
            {/* buttons */}
            <div className="flex flex-col md:flex-row mt-2 items-center gap-4 font-inter font-medium">
              <a href="/work" id="work" role="button"
              className="flex cursor-pointer items-center 
              justify-center gap-3 bg-(image:--vite-gradient) 
              active:scale-96 transition-transform duration-300 ease-linear
              rounded-xl text-white text-[14px] md:text-base md:leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                <IconLayoutGrid className="size-4 md:size-5" />
                View My Work
              </a>
              <a href="/contact" id="contact" role="button"
                className=" flex items-center gap-3 cursor-pointer border border-dark-borders bg-transparent 
                active:scale-96 transition-transform duration-300 ease-linear
                rounded-xl text-neutral-50 text-[14px] md:text-base leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                <IconPhoneCall  className="size-4 md:size-5" />
                Get In Touch
              </a>
            </div>
            {/* social media */}
            <div className="flex mt-4 items-center gap-8 font-inter font-medium">
              <a href="#" role="link" target="_blank"  className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                GitHub
              </a>
              <a href="#" role="link" target="_blank" className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                LinkedIn
              </a>
              <a href="#" role="link" target="_blank" className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2">
                Twitter
              </a>
            </div>
          </div>
          <div className="left-1/2 -translate-x-1/2 flex absolute bottom-0  flex-col items-center gap-2">
            <span className="font-inter font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-widest">
              Scroll
            </span>
            <IconChevronDown className="size-5 animate-bounce text-[#7f22fe]" />
          </div>
        </section>
      </div>
      {/* Work */}
      <Work />
      {/* About */}
      {/* <About /> */}
    </section>
  );
};
