import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconSun,
  IconMoon,
  IconDeviceIpadHorizontalCog,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //  routes
  const navItems = [
    { title: "Home", path: "/", icon: <IconHome size={20} /> },
    { title: "About", path: "/about", icon: <IconUser size={20} /> },
    { title: "Projects", path: "/projects", icon: <IconBriefcase size={20} /> },
    { title: "Contact", path: "/contact", icon: <IconMail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      className={`fixed left-0 top-0 w-[330px] h-screen text-white shadow-lg
  transition-transform duration-300 ease-in-out
 overflow-x-hidden
    [&::-webkit-scrollbar]:w-1.5 
    [&::-webkit-scrollbar-track]:bg-transparent 
    [&::-webkit-scrollbar-thumb]:bg-gray-700 
    dark:[&::-webkit-scrollbar-thumb]:bg-gray-600"
  ${isScrolled ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="w-full min-h-screen flex flex-col justify-around items-center bg-white dark:bg-linear-to-b from-gray-950 to-gray-900 text-white px-4 py-10">

        {/* Header Section */}
        <div className="text-center shrink-0">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide drop-shadow-sm">
            Ravi Gahire
          </h1>
          <h2 className="text-md my-5 sm:text-xl font-medium dark:text-gray-400 tracking-wide">
            Front-End Developer
          </h2>
          <div className="h-1 w-20 mx-auto bg-amber-400 rounded-full mt-4 shadow-[rgba(240,46,170,0.4)_0px_5px,rgba(240,46,170,0.3)_0px_10px,rgba(240,46,170,0.2)_0px_15px,rgba(240,46,170,0.1)_0px_20px,rgba(240,46,170,0.05)_0px_25px]"></div>
        </div>

        {/* Divider */}
        <div className="w-80 my-8 h-px bg-amber-500 dark:bg-slate-700 rounded-full shrink-0"></div>

        {/* Navbar */}
        <nav className="w-full max-w-xl shrink-0">
          <ul className="flex flex-col items-center gap-6 text-base sm:text-lg font-medium text-gray-300">
            {navItems.map((item, index) => (
              <li key={index} className="w-full">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                      ? "bg-amber-400 text-gray-900 font-semibold shadow-md"
                      : "hover:bg-gray-800 hover:text-amber-300"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-80 my-8 h-px bg-amber-500 dark:bg-slate-700 rounded-full shrink-0"></div>

        {/* Theme Section */}
        <div className="w-full shrink-0 mb-6">
          <h3 className="text-xl ml-4 font-semibold text-gray-200">Set Theme</h3>
          <div className="flex items-center ml-4 gap-6 mt-6">
            {/* Dark Mode */}
            <button
              className="p-3 cursor-pointer rounded-full bg-gray-800/70 text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 shadow-inner hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              title="Dark Mode"
            >
              <IconMoon stroke={2} size={22} />
            </button>

            {/* Light Mode */}
            <button
              className="p-3 cursor-pointer rounded-full bg-gray-800/70 text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 shadow-inner hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              title="Light Mode"
            >
              <IconSun stroke={2} size={22} />
            </button>

            {/* System Mode */}
            <button
              className="p-3 cursor-pointer rounded-full bg-gray-800/70 text-gray-300 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 shadow-inner hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
              title="System Mode"
            >
              <IconDeviceIpadHorizontalCog stroke={2} size={22} />
            </button>
          </div>
        </div>
      </div>
    </aside>

  );
};
