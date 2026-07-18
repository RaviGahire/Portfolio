import { motion, number } from "motion/react";

export const Experience = ({ expData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-center px-4">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none"
      >
        <div className="relative cursor-pointer p-3 rounded-[20px] overflow-hidden border border-white/10 md:aspect-4/5">
          <img
            src="my-pic.jpg"
            alt="mypic"
            className="w-full h-full mask-b-from-10% transform hover:scale-110 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 rounded-xl"
          />
          <div className="absolute left-0 right-0 bottom-0 p-8">
            <p className="uppercase text-base tracking-[5px] text-lavender mb-1 font-semibold font-elmsSans">
              based in
            </p>
            <p className="text-sm text-secondary-text font-poppins tracking-wider flex items-center gap-2">
              Pune, India
              <span className="size-2 bg-lavender rounded-full animate-ping"></span>
            </p>
          </div>
        </div>

        {/*  */}
      </motion.div>
      {/* EXPERIENCE */}
      <div className="md:col-span-7 flex flex-col justify-center mt-8 md:mt-0">
        <div className="space-y-3 md:space-y-8">
          {expData.map((item: any, index: number ) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group flex gap-4 md:gap-3 items-start border-b border-white/5 pb-3 md:pb-4"
            >
              <span className="text-green-500 font-mono text-sm pt-1 md:pt-2">
                0{expData.length - index} 
              </span>
              <div>
              <h3 className="text-white text-md md:text-xl font-semibold group-hover:text-lavender transition-colors font-poppins tracking-wide">
                  {item.org}
                </h3>
                <p className="text-neutral-400 text-base md:text-lg mt-1 font-medium italic font-elmsSans">
                  {item.role}
                </p>
                <p className="text-neutral-600 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-elmsSans">
                  {item.fromTo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
