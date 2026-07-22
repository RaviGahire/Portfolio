import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  type NavTab = {
    id: string;
    label: string;
    path: string;
  };

  const NavItems: NavTab[] = [
    {
      id: "home",
      label: "Home",
      path: "/",
    },
    {
      id: "work",
      label: "Work",
      path: "/#work",
    },
    {
      id: "about",
      label: "About",
      path: "/#about",
    },
    {
      id: "contact",
      label: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <motion.nav className="relative flex h-12 items-center justify-between px-4 md:h-16 md:px-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Logo />
      </motion.div>

      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {NavItems.map((item, index) => {
            let xVal: number;
            if (item.label.length <= 4) {
              xVal = 50;
            } else if (item.label.length === 5) {
              xVal = 52;
            } else {
              xVal = 69;
            }

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
              >
                <a
                  href={item.path}
                  className="group font-inter font-medium capitalize flex items-center justify-center 
                gap-0.5 text-sm text-primary-text sm:text-md md:text-[14px]"
                >
                  <span>[</span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-(--x)"
                    style={{ "--x": `${xVal}px` } as React.CSSProperties}
                  >
                    ]
                  </span>

                  <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                    {item.label}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-primary-text"
          aria-label="Toggle menu"
        >
          <span className="text-xl">
            {open ? <IconX stroke={2} /> : <IconMenu />}
          </span>
        </button>
      </div>

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
                  <a
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-md px-3 py-2 font-inter text-[14px] font-medium  text-primary-text text-shadow-2xs"
                  >
                    <span>[</span>
                    <span>{item.label}</span>
                    <span>]</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
