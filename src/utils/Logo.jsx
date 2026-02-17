import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <div className="relative group [isolation:isolate]">
            {/* The Outer Gray Line (Pseudo-element) */}
            <div className="relative size-11 rounded-full border border-[#3f3f3f] 
                  bg-gradient-to-t from-[#141414] to-[#242424] 
                  shadow-[inset_0_4px_10px_black]
                  flex items-center justify-center cursor-pointer
                  /* The signature gray border-line */
                  after:absolute after:inset-[-3px] after:-z-10 after:block after:rounded-full 
                  after:bg-gradient-to-b after:from-[#4a4a4a] after:to-[#212121] after:content-['']
                  /* Hover Effect */
                  hover:after:from-[#666666] transition-all duration-300">

                <Link
                    to={'/'}
                    className="relative z-10 text-white font-bold text-xs tracking-tighter no-underline"
                >
                  RG
                </Link>

                {/* Subtle Inner Glow Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            </div>
        </div>
    )
}
