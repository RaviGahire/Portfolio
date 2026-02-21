import { motion } from 'motion/react';


export const MotivationSection = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <section aria-label='motivation-section' className="py-30 overflow-hidden">
      <motion.div 
        // SCROLL TRIGGER 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        variants={containerVariants}
        className="flex flex-col md:flex-row justify-center gap-10 text-white font-secondary min-h-[50vh] mx-auto"
      >
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
          <motion.div variants={itemVariants} className="space-y-1">
            <h2 className='text-3xl md:text-6xl font-bold'>
              MOTIVATION
            </h2>
            <h3 className='text-xl md:text-2xl font-light tracking-widest text-neutral-400 uppercase'>
              The Journey of Creative Inspiration
            </h3>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className='text-right font-mono text-xs uppercase tracking-[0.4em] text-green-500 mt-10 md:mt-0'
          >
            [Moto]
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-evenly gap-8 md:gap-0">
          
          <motion.div variants={itemVariants} className='flex justify-end'>
            <img 
              className='w-[150px] md:w-[200px]' 
              src="signature.png" 
              alt="Signature"/>
          </motion.div>

          <motion.p variants={itemVariants} className="text-sm md:text-base leading-relaxed"> 
            <span className="text-white font-bold ">Ravi Gahire — </span> 
            Creativity is the heartbeat of design. Every pixel you place and every concept you bring to life reflects your unique vision. 
            Julia Cameron in <span className="italic text-neutral-500 underline decoration-neutral-600 underline-offset-4">The Artist’s Way</span> reminds me that creativity is a force within us, something to discover and nurture. 
            Embrace the process, trust your instincts, and let your passion guide you. Keep pushing boundaries and stay true to your artistic journey.
          </motion.p>

          <motion.h3 
            variants={itemVariants}
            className="text-lg md:text-xl font-medium leading-snug border-l-2 border-green-600 pl-6 py-1 italic text-neutral-200"
          >
            “We spend a lot of time designing the bridge, but not enough time thinking about the people who are crossing it.”
            <span className="block not-italic text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600 mt-3">
              — Dr Prabhjot Singh.
            </span>
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
};