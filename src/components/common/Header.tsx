import { motion } from "motion/react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <motion.header className="sticky z-50 backdrop-blur-xl bg-bg-dark border-[#7f22fe]/15 border-t-0 border-r-0 border-b border-l-0 border-solid top-0 w-full" >
      <Navbar />
    </motion.header>
  );
};
