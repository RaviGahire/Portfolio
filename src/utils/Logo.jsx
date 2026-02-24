import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
    <div className="relative pointer-events-auto">
  <Link to="/" className="group block relative size-11">
    {/* The actual circle container */}
    <div className="relative w-full h-full rounded-full border border-[#3f3f3f] 
                    bg-linear-to-t from-[#141414] to-[#242424] 
                    shadow-[inset_0_4px_10px_black]
                    flex items-center justify-center 
                    /* The signature gray border-line */
                    after:absolute after:inset-[-3px] after:-z-10 after:block after:rounded-full 
                    after:bg-linear-to-b after:from-[#4a4a4a] after:to-[#212121] after:content-['']
                   
                    group-hover:border-green-500/50 transition-colors duration-300">
      
      <span className="text-white font-bold text-sm font-display tracking-tight">
        RG
      </span>
      
    </div>
  </Link>
</div>
    )
}
