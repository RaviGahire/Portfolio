import { IconChevronDown, IconLayoutGrid, IconPhoneCall } from '@tabler/icons-react'
import { Badge } from '../common/Badge'
import { IconVignette } from '../svgs/IconVignette'
import { Underline } from '../common/Underline'

export const Hero = () => {
  return (       
        <section
          id="home"
          aria-label="hero-section"
          className="relative min-h-dvh md:min-h-[90vh] text-center flex flex-col justify-center items-center"
        >
          <div className="max-w-3xl flex mx-auto flex-col justify-center items-center gap-6">
            {/* Badge */}
            <Badge
              title="Available for new projects"
              icon={<IconVignette height={24} width={24} stroke={2} />}
            />
            {/* Name */}
            <div className="flex flex-col items-center gap-4">
              <h1
                className="text-[40px] md:text-[80px] font-inter 
              text-primary-text font-normal uppercase lg:leading-24"
              >
                Hello I'm Ravi gahire
              </h1>
              {/* custom underline */}
              <Underline/>
            </div>
            {/* info */}
            <p className="max-w-xl text-[18px] md:text-[20px] text-secondary-text font-inter font-normal tracking-tight leading-7 px-3 
              md:px-0 text-pretty ">
              Full-Stack Developer & Creative Technologist building polished, modern digital experiences.
            </p>
            {/* buttons */}
            <div className="flex flex-col md:flex-row mt-2 items-center gap-4 font-inter font-medium">
              <a
                href="#work"
                role="link"
                className="flex cursor-pointer items-center 
                justify-center gap-3 bg-(image:--vite-gradient) 
                active:scale-96 transition-transform duration-300 ease-linear
                rounded-xl text-white text-[14px] md:text-base md:leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                <IconLayoutGrid className="size-4 md:size-5" />
                View My Work
              </a>
              <a
                href="#contact"
                role="link"
                className=" flex items-center gap-3 cursor-pointer border border-dark-borders bg-transparent 
                active:scale-96 transition-transform duration-300 ease-linear
                rounded-xl text-neutral-50 text-[14px] md:text-base leading-6 px-4 h-10 md:px-8 md:h-12"
              >
                <IconPhoneCall className="size-4 md:size-5" />
                Get In Touch
              </a>
            </div>
            {/* social media */}
            <div className="flex mt-4 items-center gap-8 font-inter font-medium">
              <a
                href="https://github.com/RaviGahire"
                role="link"
                target="_blank"
                className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-gahire-7855b110a"
                role="link"
                target="_blank"
                className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/RaviGahire"
                role="link"
                target="_blank"
                className="transition-colors duration-300 hover:text-secondary-text text-[#9f9fa9] text-sm leading-5 flex items-center gap-2"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="left-1/2 -translate-x-1/2 flex absolute bottom-1  flex-col items-center gap-2">
            <span className="font-inter font-medium uppercase text-[#9f9fa9] text-xs leading-4 tracking-widest">
              Scroll
            </span>
            <IconChevronDown className="size-5 animate-bounce text-[#7f22fe]" />
          </div>
        </section>
  )
}
