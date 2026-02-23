import React from 'react';
import { motion } from 'framer-motion';

export const TechStack = () => {
  const technologies = [
    { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend / DB", tools: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools / Design", tools: ["Git", "Figma", "Docker", "GSAP", "Three.js"] }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
      <div className="mb-12 md:mb-20">
        <p className="text-green-500 font-mono text-xs uppercase tracking-[0.4em] mb-2">// Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-bold uppercase text-white">Technical Toolkit</h2>
        <div className="h-1 bg-green-500 w-20 mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-green-500/30 transition-all duration-500 group"
          >
            <h3 className="text-neutral-500 font-mono text-xs uppercase tracking-widest mb-6 group-hover:text-green-500 transition-colors">
              {tech.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {tech.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-white text-sm font-medium hover:bg-green-500/10 hover:border-green-500/20 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-8 rounded-[2.5rem] bg-linear-to-r from-green-500/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-neutral-400 text-lg">
          Currently exploring <span className="text-white font-semibold">WebGPU</span> and <span className="text-white font-semibold">AI Integration</span>.
        </p>
        <div className="flex -space-x-3">
            {/* You can map small icons here for a "trusted by" or "active tools" look */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800"></div>
            ))}
        </div>
      </div>
    </section>
  );
};