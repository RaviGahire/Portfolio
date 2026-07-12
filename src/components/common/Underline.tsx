import { motion } from "framer-motion";

type Underline ={
    style?:string
}

export const Underline = ({style}:Underline) => {
  return (
    <motion.div
      className={`bg-(image:--vite-gradient) rounded-full w-16 md:w-32 h-1 origin-center ${style}`}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
};
