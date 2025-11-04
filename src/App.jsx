import { useEffect, useState } from "react"
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandX, IconCode, IconWorld } from '@tabler/icons-react';

export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const [codeLineIndex, setCodeLineIndex] = useState(0);


  // Animated code snippet
  const codeLines = [
    "const bit_about_me = {",
    "name: 'Ravi Gahire',",
    "role: 'Front-end developer',",
    "love: ['Code','Music','Coffee'],",
    "status: 'Always Learning'",
    "};"
  ];




  useEffect(() => {

    // Aside scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile UI */}
      <div className="lg:hidden">
        <h1 className="dark:text-white">Hello i am mobile and tablet</h1>
      </div>



      {/* Desktop UI */}
      <div className="hidden lg:block">
        <aside className={`text-white bg-white dark:bg-gray-950 hidden lg:block w-[330px] min-h-screen fixed left-0 top-0 transition-transform duration-300 ${isScrolled ? '-translate-x-full' : 'translate-x-0'
          }`}>

          {/* My Intro section */}
          <div className="text-center py-2 2xl:py-5 3xl:py-10">
            {/* Small Label */}


            {/* Profile Image */}
            <div className="w-24 h-24 mx-auto mt-6 rounded-full overflow-hidden ring-2 ring-gray-700 dark:ring-gray-300 ring-offset-4 ring-offset-gray-900 dark:ring-offset-white">
              <img
                className="w-full h-full object-cover"
                src="/mypic.jpg"
                alt="Ravi Gahire"
              />
            </div>
            {/* Animated Code Snippet */}
            <div className=" p-6 shadow-lg overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <IconCode  className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-gray-400 dark:text-gray-200">Code Philosophy</h3>
                </div>
              <div className="font-mono text-start text-sm space-y-1">
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${index === codeLineIndex
                        ? 'text-green-400 translate-x-2 font-bold'
                        : 'text-gray-400'
                      }`}
                  >
                    <span className="text-gray-600 mr-4">{index + 1}</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>





            {/* Divider */}
            <div className="w-14 h-1 bg-amber-500 dark:bg-amber-600 mx-auto my-2 rounded-full"></div>
          </div>
          {/* Divider */}
          <div className="w-80 mx-auto h-px bg-amber-500 dark:bg-slate-600 rounded-full"></div>

          {/* Personal Info */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2 text-center">
              Connect With Me
            </h3>

            <div className="flex flex-col">
              {/* Email address */}
              <a
                href="mailto:ravigahire3@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 shadow dark:shadow-amber-500/50 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  <IconBrandGmail className="text-slate-800 dark:text-slate-200" stroke={1.5} />
                </div>
                <span className="text-gray-700 text-sm tracking-wide dark:text-gray-300 flex-1">
                  demo@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ravigahire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 shadow dark:shadow-amber-500/50 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  <IconBrandGithub className="text-slate-800 dark:text-slate-200" stroke={1.5} />
                </div>
                <span className="text-gray-700 text-sm tracking-wide dark:text-gray-300 flex-1">
                  github
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ravigahire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 shadow dark:shadow-amber-500/50 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  <IconBrandLinkedin className="text-slate-800 dark:text-slate-200" stroke={1.5} />
                </div>
                <span className="text-gray-700 text-sm tracking-wide dark:text-gray-300 flex-1">
                  linkedin
                </span>
              </a>

              {/* Twitter/X */}
              <a
                href="https://twitter.com/ravigahire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 shadow dark:shadow-amber-500/50 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  <IconBrandX className="text-slate-800 dark:text-slate-200" stroke={1.5} />
                </div>
                <span className="text-gray-700 text-sm tracking-wide dark:text-gray-300 flex-1">
                  @ravigahire
                </span>
              </a>

              {/* Portfolio Website */}
              <a
                href="https://ravigahire.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 shadow dark:shadow-amber-500/50 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                  <IconWorld className="text-slate-800 dark:text-slate-200" stroke={1.5} />
                </div>
                <span className="text-gray-700 text-sm tracking-wide dark:text-gray-300 flex-1">
                  ravigahire
                </span>
              </a>
            </div>
          </div>
        </aside>
        {/* main content */}
        <main className={` h-[120vh] p-5 transition-all duration-300 ${isScrolled ? 'max-w-7xl mx-auto' : 'lg:ml-[330px]'
          }`}>




        </main>
      </div>

    </>
  )





}
