
import { motion } from "framer-motion";
import { TypWritterText } from "../utils/TypWritterText";


export const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      tools: [    
        "HTML",
        "CSS",
        "JavaScript",
           "React.js",
           "Bootstrap",
        "Tailwind",
        
      ],
    },
    {
      category: "Backend / DB",
      tools: ["Node.js", "Express", "MongoDB","RESTfull APIs"],
    },
    {
      category: "Tools / Design / Animation",
      tools: ["Git","GitHub", "Figma",  "GSAP", "Motion" , "VS Code" ,"Postman"],
    },
  ];

const technologiesImages = [
  {imgUrl:'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png' ,title:'Node js'},
  {imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s' ,title:'Recat js'},
  {imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTvKkYl6oBVPdL1xXw4ohTPuLVLh7F7EZhA&s' ,title:'js'},
  {imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8kjY-UjPOXB3LXoMIK9VjWYt3GXabhFaIQ&s' ,title:'Mongo'},
  {imgUrl:'https://s3.eu-west-1.amazonaws.com/images.tutorialedge.net/images/node.png' ,title:'Node js'}
]

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-6 py-12 md:py-24">
      <div className=" mb-8 md:mb-20">
        <TypWritterText titleOne="Skills" titleSecond="Capabilities" />
        <h2 className="text-xl md:text-5xl font-bold uppercase text-white">
          Technical Toolkit
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "5rem" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-green-500 mt-2"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className=" p-4 md:p-8 rounded-md bg-neutral-900/40 border border-white/5 hover:border-green-500/30 transition-all duration-500 group"
          >
            <h3 className="text-green-500 font-mono text-xs uppercase tracking-widest mb-6 group-hover:text-green-500 transition-colors">
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

      <div className="mt-8 md:mt-16 p-4 md:p-8 rounded-md bg-linear-to-r from-green-500/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-neutral-400 text-lg">
          Currently exploring{" "}
          <span className="text-white font-semibold">Node</span> and{" "}
          <span className="text-white font-semibold">AI Integration</span>.
        </p>
        <div className="flex -space-x-3">
          {/* You can map small icons here*/}
          {technologiesImages.map((items , i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border-2 border-neutral-900 bg-neutral-800 cursor-pointer overflow-hidden"
            >
              <img className="w-full object-cover" src={items.imgUrl} alt={items.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
