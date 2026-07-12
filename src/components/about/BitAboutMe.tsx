import { motion } from "motion/react";

export const BitAboutMe = () => {
  return (
       <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-10 md:mt-30">
          <div className=" md:col-span-7 text-white order-2 md:order-1">
            <div className="mb-6">
              <h2 className="text-xl md:text-5xl uppercase font-bold text-white">
                Bit about me
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-green-500 mt-2"
              ></motion.div>
            </div>

            <div className="space-y-6 text-neutral-400 text-base md:text-xl leading-relaxed">
              <p>
                I specialize in bridging the gap between{" "}
                <span className="text-white font-medium">design and code</span>.
                My approach is rooted in creating digital experiences that
                aren't just functional, but feel alive through motion and
                interaction.
              </p>
              <p>
                When I'm not pushing pixels or debugging states, I'm usually
                exploring new technologies like 3D web environments or
                optimizing performance for next-generation web apps.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative group p-6 md:p-8 rounded-md bg-neutral-900/40 border border-white/5 overflow-hidden">
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div>
                  <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">
                    Location
                  </p>
                  <p className="text-white text-xl md:text-2xl font-bold">
                    Pune, Maharashtra, India
                  </p>
                </div>
                <div>
                  <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">
                    Philosophy
                  </p>
                  <p className="text-white text-xl md:text-2xl font-bold italic">
                    "Build to inspire, not just to solve."
                  </p>
                </div>
                <div className="flex gap-8 md:gap-10 pt-2">
                  <div>
                    <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">
                      Projects
                    </p>
                    <p className="text-white text-xl md:text-4xl font-bold">
                      2+
                    </p>
                  </div>
                  <div>
                    <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">
                      Experience
                    </p>
                    <p className="text-white text-xl md:text-4xl font-bold whitespace-nowrap">
                      3.5 Yrs
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 blur-[60px] rounded-full group-hover:bg-green-500/10 transition-colors"></div>
            </div>
          </div>
        </div>
  )
}
