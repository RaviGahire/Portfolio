import { IconMail } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export const ContactBtn = () => {



  return (
 <Link
  to="/contact" 
  className="relative group [isolation:isolate] active:scale-95 transition-transform no-underline"
>
  {/* The Outer Gray Line Container */}
  <div className="relative h-9 px-5 rounded-full border border-[#3f3f3f] 
                  bg-gradient-to-t from-[#141414] to-[#242424] 
                  shadow-[inset_0_2px_8px_black]
                  flex items-center justify-center cursor-pointer
                  /* The signature gray border-line */
                  after:absolute after:inset-[-3px] after:-z-10 after:block after:rounded-full 
                  after:bg-gradient-to-b after:from-[#4a4a4a] after:to-[#212121] after:content-['']
                  /* Subtle outer glow on hover */
                  hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300">
    
    <div className="flex items-center gap-2">
      {/* Tabler Icon */}
      <IconMail
       size={16} stroke={1.5} className="text-cyan-500 group-hover:scale-110 transition-transform" />
      
      {/* Button Text */}
      <span className="text-xs font-bold text-white tracking-tight">
        Contact
      </span>
    </div>

    {/* Inner Highlight (The "Catch-light") */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
  </div>
</Link>
  )
}
