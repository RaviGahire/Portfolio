import { motion } from 'motion/react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GradientBorder } from '../utils/GradientBorder';
import { Footer } from '../components/Footer';
import { MotivationSection } from '../components/MotivationSection';
import { AnimatedMouse } from '../utils/AnimatedMouse';

const OWNER_DATA = {
  name: "I'm Ravi Gahire",
  role: "Frontend Architect",
};

export const ProfilePage = () => {
  const [hoverText, setHoverText] = useState("Frontend Developer");
  const clipVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 20, opacity: 0 },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <>
      {/* Hero section */}
      <section className=" text-white overflow-hidden" aria-label='hero-section'>
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="md:min-h-[70vh] flex flex-col justify-center items-start pb-10">
            <div className="space-y-4 mb-6 md:mb-12"
              onMouseOver={() => setHoverText("Available for Hire")}
              onMouseOut={() => setHoverText("Frontend Developer")}>
              <motion.div
                key={hoverText}
                variants={sentence}
                initial="hidden"
                animate="visible"
                className="text-green-500 font-mono text-xs uppercase tracking-[0.4em] min-h-4"
              >
                {hoverText.split("").map((char, index) => (
                  <motion.span key={index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-green-500 ml-1 translate-y-1"
                />
              </motion.div>
              {/* main heading */}
              <div className="overflow-hidden">
                <motion.h1
                  variants={clipVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-6xl sm:text-8xl lg:text-[12rem] font-display leading-none tracking-tighter">
                  {OWNER_DATA.name}
                </motion.h1>
              </div>
            </div>
            {/* intro para */}
            <div className="w-full flex justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="max-w-lg">
                <p className="  text-[14px] md:text-lg leading-relaxed font-light tracking-tight italic font-secondary border-l-2 border-green-500 pl-4">
                  I write maintainable code with a minimalist design approach while continuously learning and improving to deliver better software solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* AnimatedMouse */}
      <AnimatedMouse />
      {/* motivation section */}
      <MotivationSection />
      {/* Footer */}
      <Footer />
    </>
  );
};