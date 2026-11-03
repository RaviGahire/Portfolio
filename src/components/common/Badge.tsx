import type { ReactNode } from 'react';
import { motion } from '../../utils/motion';

type Badgeprops = {
  title: string;
  icon?: ReactNode;
  duration: number;
};

export const Badge = ({ title, icon, duration }: Badgeprops) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 8, // Adds a subtle slide-up effect
        filter: 'blur(4px)',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
      }}
      // Prevents the animation from re-triggering constantly when scrolling up and down
      viewport={{ once: true, margin: '-20px' }}
      whileHover={{
        scale: 1.05,
        y: -1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: duration,
        ease: 'linear',
      }}
      className="inline-flex rounded-full bg-(image:--radial-purple-glow) border border-solid border-dark-borders/40 px-4 py-1.5 items-center gap-2 cursor-default"
    >
      {icon ? (
        <div className="text-white">{icon}</div>
      ) : (
        <span className="size-1.5 rounded-full bg-(image:--secondary-gradient) animate-pulse" />
      )}
      <span className="font-light md:font-medium font-inter tracking-wider text-primary-text/80 text-[10px] md:text-[12px]">
        {title}
      </span>
    </motion.div>
  );
};
