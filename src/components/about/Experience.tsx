import { motion } from "motion/react";

export const Experience = ({expData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none"
      >
        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 md:aspect-4/5">
          <img
            src="my-pic.jpg"
            alt="mypic"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-green-500/30 rounded-tl-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-green-500/10 blur-[80px] md:blur-[100px] rounded-full"></div>
      </motion.div>

      <div className="md:col-span-7 flex flex-col justify-center mt-8 md:mt-0">
        <div className="space-y-4 md:space-y-12">
          {expData.map((item:any, index:number) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex gap-4 md:gap-6 items-start border-b border-white/5 pb-6 md:pb-8"
            >
              <span className="text-green-500 font-mono text-sm pt-1 md:pt-2">
                0{index + 1} —
              </span>
              <div>
                <h3 className="text-white text-md md:text-3xl font-bold group-hover:text-green-400 transition-colors">
                  {item.org}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg mt-1 font-medium italic">
                  {item.role}
                </p>
                {/* <p className="text-neutral-600 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-2">
                      {item.fromTo}
                    </p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
