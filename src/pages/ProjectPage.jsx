import React, { useState } from "react";
import { motion } from "motion/react";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const ProjectPage = () => {
const [hoverText , setHoverText] = useState('Transforming Design into Code')

  const projects = [
    {
      title: "MasterTrack",
      tech: "React / node / github/ mongodb",
      size: "md:col-span-8",
      liveliks: '',
      github: "",
      img: 'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_user_personalization&w=740&q=80',
      subtitle: 'Learning Management System'
    },
    {
      title: "Weather 24",
      tech: "React / Tailwind / REST API",
      size: "md:col-span-4",
      liveliks: "",
      github: "",
      img: 'https://www.invensislearning.com/blog/wp-content/uploads/2019/07/banner-image-All-You-Wanted-to-Know-About-Project-Management-Basics.jpg',
      subtitle: 'Weather forcaste App'
    },
    {
      title: "Logic Gate",
      tech: "TypeScript",
      size: "md:col-span-4",
      liveliks: "",
      github: "",
      img: 'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_user_personalization&w=740&q=80',
      subtitle: ''
    },
    {
      title: "Ethereal",
      tech: "Next.js / GSAP",
      size: "md:col-span-8",
      liveliks: "",
      github: "",
      img: 'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_user_personalization&w=740&q=80',
      subtitle: ''
    },
    {
      title: "Ethereal",
      tech: "Next.js / GSAP",
      size: "md:col-span-4",
      liveliks: "",
      github: "",
      img: 'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_user_personalization&w=740&q=80',
      subtitle: ''
    },
    {
      title: "Ethereal",
      tech: "Next.js / GSAP",
      size: "md:col-span-8",
      liveliks: "",
      github: "",
      img: 'https://img.freepik.com/free-photo/document-marketing-strategy-business-concept_53876-132231.jpg?semt=ais_user_personalization&w=740&q=80',
      dis: ''
    },
  ];

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
      <section
        aria-label="work-section"
        className="text-white py-20 max-w-7xl mx-auto px-2 md:px-0"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-8 pb-6"
        >

          {/* Hover text */}
          <div  onMouseOver={() => setHoverText("Transforming design into code")}
              onMouseOut={() => setHoverText("Development turning coffee into code then magic")} >
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
            <h2 className="text-3xl md:text-6xl font-bold uppercase">
              Selected Work
            </h2>
          </div>
          <p className="hidden md:block text-green-500 font-mono text-xs uppercase tracking-widest pb-2">
            [ 004 Projects ]
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${project.size} group cursor-pointer relative min-h-[300px] md:min-h-[400px] rounded-md bg-neutral-900/40 border border-white/20 overflow-hidden p-4 hover:border-green-500/30 transition-all duration-500 hover:shadow-[0_-20px_50px_-20px_rgba(34,197,94,0.2)]`}
            >
              {/* Content Container */}
              <div className="flex flex-col justify-between h-full relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight font-secondary">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 font-mono text-xs mt-1 uppercase tracking-wider">
                      {project.tech}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link to={project.github}>
                      <IconBrandGithub
                        size={20}
                        className="text-neutral-600 hover:text-white cursor-pointer transition-colors"
                      />
                    </Link>
                    <Link tp={project.liveliks}>
                      <IconArrowUpRight
                        size={20}
                        className="text-neutral-600 group-hover:text-green-500 rotate-45 group-hover:rotate-0 transition-all"
                      />
                    </Link>
                  </div>
                </div>
                {/* Project Image Container */}
                <div className="mt-6 w-full h-64 md:h-80 relative rounded-md border border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* subtitle overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" >
                    <div className="w-full h-full flex justify-center items-center">
                      <p className="text-md text-center font-secondary">{project.subtitle}</p>
                    </div>
                  </div>

                </div>
              </div>
              {/* Subtitle Background Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full group-hover:bg-green-500/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />

    </>
  );
};
