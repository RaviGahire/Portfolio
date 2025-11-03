import { useEffect, useState } from "react"
import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandX, IconWorld } from '@tabler/icons-react';

export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false);



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
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Chitti_%28character%29.jpg/250px-Chitti_%28character%29.jpg"
                alt="Ravi Gahire"
              />
            </div>

            {/* Name - Large Typography */}
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-50 mt-4 uppercase tracking-wide">
              Ravi Gahire
            </h1>

            {/* Title */}
            <p className="text-md text-gray-300 dark:text-slate-300 font-light tracking-wide my-2">
              front-end developer
            </p>

            {/* Location/Detail */}
            <p className="text-sm text-gray-400 dark:text-slate-400 tracking-wider">
               India 
            </p>

            {/* Divider */}
            <div className="w-14 h-1 bg-amber-500 dark:bg-amber-600 mx-auto my-2 rounded-full"></div>
          </div>

          {/* Personal Info */}
          <div className="w-80 mx-auto h-px bg-amber-500 dark:bg-slate-600 rounded-full"></div>

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
