import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  type NavTab = {
    label: string;
    path: string;
  };

  const NavItems: NavTab[] = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Work",
      path: "/my-work",
    },
    {
      label: "About",
      path: "/about-me",
    },
    {
      label: "Contact",
      path: "/contact-me",
    },
  ];

  return (
    <motion.nav className="flex px-4 md:px-20 justify-between items-center h-12 md:h-16">
      {/* Logo Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Logo />
      </motion.div>

      {/* Navigatation tabs */}
      {/* Desktop */}
      <div className="hidden md:block">
        <div className=" flex items-center justify-center gap-4 md:gap-8">
          {NavItems.map((item, index) => (
            
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
            >
              <NavLink
                key={item.label}
                to={item.path}
                className="group flex items-center justify-center gap-0.5 text-primary-text font-SourceSans3 tracking-wide text-sm sm:text-md md:text-[18px]"
              >
                <span>[</span>
                <span className="transition-transform duration-300 group-hover:translate-x-[var(--x)]"
                style={{ "--x": `${item.label.length * 12}px` } as React.CSSProperties}
                >
                  ]
                </span>
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  {item.label}
                </span>
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Button  */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-primary-text"
          aria-label="Toggle menu"
        >
          <span className="text-xl ">
            {open ? <IconX stroke={2} /> : <IconMenu />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 w-full overflow-hidden border-t border-white/10 bg-bg-dark md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
              {NavItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.25 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-primary-text font-SourceSans3 text-base tracking-wide transition-colors hover:bg-white/5"
                  >
                    <span>[</span>
                    <span>{item.label}</span>
                    <span>]</span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
