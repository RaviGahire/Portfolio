import { IconFileDots} from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export const ResumeBtn = () => {

  return (
    <Link
      to="https://collection.cloudinary.com/dbdtzucwg/bbde0d66e4aeb90a185908e6950c4ef3"
      target='_blank'
      className="relative group block active:scale-95 transition-transform no-underline pointer-events-auto"
    >
      {/* The Outer Gray Line Container */}
      <div className="relative h-9 px-5 rounded-full border border-[#3f3f3f] 
                  bg-linear-to-t from-[#141414] to-[#242424] 
                  shadow-[inset_0_2px_8px_black]
                  flex items-center justify-center
                  /* The signature gray border-line */
                  after:absolute after:-inset-0.5 after:-z-10 after:block after:rounded-full 
                  after:bg-linear-to-b after:from-[#4a4a4a] after:to-[#212121] after:content-['']
                  /* Glow and Border on hover */
                  group-hover:after:from-cyan-500/50 group-hover:border-cyan-500/30
                  group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] 
                  transition-all duration-300">

        <div className="flex items-center gap-2 relative z-10">
          {/* Icon */}
          <IconFileDots
            size={16}
            stroke={1.5}
            className="text-cyan-500 group-hover:scale-110 transition-transform duration-300"
          />

          {/* Button Text */}
          <span className="text-xs font-bold text-white tracking-tight uppercase">
            Resume
          </span>
        </div>

        {/* Inner Highlight  */}
        <div className="absolute inset-0 rounded-full bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>
      </div>
    </Link>
  )
}
