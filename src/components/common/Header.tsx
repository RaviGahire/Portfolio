import { motion } from "motion/react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <motion.header>
      <Navbar />
    </motion.header>
  );
};
