import { motion } from 'motion/react';

export const AnimatedMouse = () => {
  // Animation for the mouse body
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={40}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-tabler-mouse"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      
        <motion.path
          d="M6 7a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4l0 -10"
          variants={draw}
          initial="hidden"
          animate="visible"
          stroke="currentColor"
          style={{ stroke: "#22c55e" }} 
          transition={{ delay: 0.5 }}
        />

        {/* SCROLL WHEEL */}
        <motion.path
          d="M12 7l0 4"
          stroke="#22c55e"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            y: [0, 3, 0]
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5, 
            },
            pathLength: { duration: 0.5, delay: 1.5 },
            opacity: { duration: 0.5, delay: 1.5 }
          }}
        />
      </svg>
    </div>
  );
};