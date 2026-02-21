import { motion } from "framer-motion";

export const GradientBorder = () => {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative h-px w-full overflow-hidden origin-left"
      >
        <div className="relative w-full h-px overflow-hidden bg-amber-50/20">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #6366f1 50%, transparent 100%)",
            }}
          />
        </div>
        <div className="absolute inset-0 border-b border-amber-50/20"></div>
      </motion.div>
    </div>
  );
};
