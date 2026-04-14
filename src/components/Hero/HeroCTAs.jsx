import { Link } from "react-router-dom";

export default function HeroCTAs({
  secondaryLabel,
  secondaryHref
}) {
  return (
    <div className="flex items-center gap-8 mt-10" style={{ animation: "fadeInUp 0.9s cubic-bezier(.16,1,.3,1) 0.65s both" }}>
      <LetsTalkBtn />
      <WorkBtn />
    </div>
  )
}


//lets talk btn
export const LetsTalkBtn = () => {
  return (
    <button className="[all-unset] flex items-center overflow-hidden rounded-md relative py-[0.6em] px-[2em] 
    border border-green-500/50 text-white cursor-pointer transition-[border] hover:text-amber-50 
    after:content-[''] after:absolute after:w-[9em] after:aspect-[1] after:bg-[mediumspringgreen] 
    after:opacity-50 after:rounded-full after:transition-transform 
    before:content-[''] before:absolute before:w-[9em] before:aspect-[1] before:bg-[mediumspringgreen] 
    before:opacity-50 before:rounded-full before:transition-transform before:left-0 after:right-0  
    after:translate-x-[8em] before:-translate-x-[8em] 
    hover:after:translate-x-[1em] hover:before:-translate-x-[1em] 
    active:before:bg-green-700 active:after:bg-green-700">

      <span className="z-1 uppercase text-[13px]  font-bold tracking-wide ">Let's talk</span>
    </button>
  )
}


// work btn
export const WorkBtn = () => {
  return (
    <Link className="group inline-flex items-center gap-3 text-white/40 hover:text-white/75 font-bold text-[13px] tracking-[0.18em] uppercase transition-colors duration-200 no-underline">
      view Work
      <span className="block h-px w-9 group-hover:w-14 bg-current transition-all duration-300" />
    </Link>
  )
}
