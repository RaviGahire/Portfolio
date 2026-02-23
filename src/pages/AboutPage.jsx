import { Footer } from "../components/Footer"
import { TechStack } from "../components/TechStack"
import { GradientBorder } from "../utils/GradientBorder"
import { ImageCarousel } from "../utils/ImageCarousel"
import { TypWritterText } from "../utils/TypWritterText"
import { motion } from "motion/react"


export const AboutPage = () => {

  const expData = [
    { sr_no: '1 -', org: 'SELF-DIRECTED LEARNING', role: 'Mern stack', fromTo: 'Oct 2025 — Present' },
    { sr_no: '2 -', org: 'Rego Digital Solution', role: 'React Js intern', fromTo: 'May 2025 - Oct 2025' },
    { sr_no: '3 -', org: 'Mphasis Ltd', role: 'Trn Processing Officer', fromTo: 'May 2022 - May 2025' },
  ]

  return (
    <>
      <section aria-label="about-me" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        <div className="text-white">
          <div className="mb-4">
            <TypWritterText
              titleOne='Journey so far'
              titleSecond='A journey exploring new horizons'
            />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl tracking-wide font-bold uppercase leading-tight"
          >
            I’m a frontend developer and a builder
            <span className="text-green-500"> — </span>
            always seeking new adventures.
          </motion.h2>
        </div>

        <div className="mt-6 md:mt-10">
          <GradientBorder />
        </div>

        <div className="my-12 md:my-24">
          <h2 className="text-2xl md:text-4xl uppercase font-bold text-white">Journey</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-green-500 mt-2"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 relative group w-full max-w-md mx-auto md:max-w-none"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img
                src="mypic.jpg"
                alt="mypic"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 border-green-500/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-green-500/10 blur-[80px] md:blur-[100px] rounded-full"></div>
          </motion.div>

          <div className="md:col-span-7 flex flex-col justify-center mt-8 md:mt-0">
            <div className="space-y-8 md:space-y-12">
              {expData.map((item, index) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 md:gap-6 items-start border-b border-white/5 pb-6 md:pb-8"
                >
                  <span className="text-green-500 font-mono text-sm pt-1 md:pt-2">0{index + 1} —</span>
                  <div>
                    <h3 className="text-white text-xl md:text-3xl font-bold group-hover:text-green-400 transition-colors">
                      {item.org}
                    </h3>
                    <p className="text-neutral-400 text-base md:text-lg mt-1 font-medium italic">
                      {item.role}
                    </p>
                    <p className="text-neutral-600 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-2">
                      {item.fromTo}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mt-20 md:mt-32">
          <div className="md:col-span-7 text-white order-2 md:order-1">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl uppercase font-bold">Bit about me</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-green-500 mt-2"
              ></motion.div>
            </div>

            <div className="space-y-6 text-neutral-400 text-base md:text-xl leading-relaxed">
              <p>
                I specialize in bridging the gap between <span className="text-white font-medium">design and code</span>.
                My approach is rooted in creating digital experiences that aren't just functional,
                but feel alive through motion and interaction.
              </p>
              <p>
                When I'm not pushing pixels or debugging states, I'm usually exploring new
                technologies like 3D web environments or optimizing performance for
                next-generation web apps.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2">
            <div className="relative group p-6 md:p-8 rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden">
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div>
                  <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-xl md:text-2xl font-bold">Pune, Maharashtra, India</p>
                </div>
                <div>
                  <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">Philosophy</p>
                  <p className="text-white text-xl md:text-2xl font-bold italic">"Build to inspire, not just to solve."</p>
                </div>
                <div className="flex gap-8 md:gap-10 pt-2">
                  <div>
                    <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">Projects</p>
                    <p className="text-white text-3xl md:text-4xl font-bold">2+</p>
                  </div>
                  <div>
                    <p className="text-green-500 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-white text-3xl md:text-4xl font-bold whitespace-nowrap">3.5 Yrs</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/5 blur-[60px] rounded-full group-hover:bg-green-500/10 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>
      <ImageCarousel />
      <Footer />
    </>
  )
}
