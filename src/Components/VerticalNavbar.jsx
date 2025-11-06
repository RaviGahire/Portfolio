import React, { useEffect, useState } from "react";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

export const VerticalNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ Use only title and path here — "element" is handled in App.jsx routes
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
      className={`fixed left-0 top-0 w-[330px] bg-gray-900 text-white transition-transform duration-300 shadow-lg ${
        isScrolled ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav className="p-6">
        <ul className="flex flex-col gap-6 text-lg font-medium">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "hover:text-yellow-300"
                  }`
                }
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
