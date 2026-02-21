import { ImageCarousel } from "../utils/ImageCarousel"


export const AboutPage = () => {
  return (
    <>
<div className="text-white py-20 px-4 md:px-0 selection:bg-indigo-500 selection:text-white">
  {/* Heading with Gradient & Motion */}
  <div className="max-w-6xl mb-12 group">
    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
                   font-black leading-[1.1] tracking-tighter text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
      I'm a <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 hover:to-indigo-500 transition-all duration-500 cursor-default">
        frontend developer
      </span>, 
      a builder, and a gamer with a deep interest in 
      <span className="relative inline-block ml-2 group-hover:rotate-1 transition-transform">
        <span className="text-indigo-500 italic">philosophy</span>
        <div className="absolute -bottom-2 left-0 w-0 h-1 bg-indigo-500 transition-all duration-500 group-hover:w-full"></div>
      </span>.
    </h2>
  </div>

  {/* Paragraph & CTA Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <div className="max-w-xl">
      <p className="text-gray-400 text-xl leading-relaxed text-left mb-6 font-medium">
        Accusantium accusamus nobis sapiente expedita repellat ipsam. 
        I craft digital experiences that balance <span className="text-white">logic with aesthetics</span>.
      </p>
      
      <div className="space-y-4 text-gray-400 border-l-2 border-indigo-500/30 pl-6 py-2">
        <p>
          Open to contract and freelance opportunities. If you're working on something cool, 
          <span className="text-indigo-400 font-bold hover:underline cursor-pointer ml-1">let's chat!</span>
        </p>
        <p className="text-sm uppercase tracking-widest font-bold text-gray-500">
          Reach out on: 
          <span className="text-white hover:text-indigo-400 transition-colors cursor-pointer ml-2">LinkedIn</span> • 
          <span className="text-white hover:text-indigo-400 transition-colors cursor-pointer ml-2">X</span> • 
          <span className="text-white hover:text-indigo-400 transition-colors cursor-pointer ml-2">Email</span>
        </p>
      </div>
    </div>

    {/* Modernized List / Skill Tags */}
    <div className="flex flex-wrap gap-3">
      {[
        "Creative Problem Solver",
        "React & Tailwind Expert",
        "Lifelong Learner",
        "Passionate Gamer"
      ].map((item, i) => (
        <div key={i} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-300 group">
          <span className="text-indigo-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">#</span>
          <span className="text-gray-200 font-medium tracking-tight">{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>


<ImageCarousel/>



    </>
  )
}
