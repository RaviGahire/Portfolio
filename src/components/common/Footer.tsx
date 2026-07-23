
import { 
  IconBrandLinkedin, 
  IconMail, 
  IconBrandX, 
  IconBrandGithub, 
  IconCode, 
  IconCodePlus
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';


export const Footer = () => {
  return (
    <footer className="py-2 px-6 bg-zinc-950">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
         {/* Credits */}
        <div className="flex items-center gap-2 group ">
          <IconCodePlus size={18} className="text-lavender" />
          <p className="font-inter text-[10px] flex justify-center gap-1.5 items-center md:text-xs uppercase tracking-[0.3em] text-secondary-text">
            Designed <IconCode size={18} className='text-lavender'/> Coded by 
            <span className="text-white hover:text-indigo-400 transition-colors">Ravi</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link 
            to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" 
            target='_blank'
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandLinkedin size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Linkedin</span>
          </Link>

          <Link 
            to="mailto:ravigahire3@gmail.com" 
            target='_blank'
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconMail size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Email</span>
          </Link>

          <Link 
            to="https://x.com/RaviGahire" 
            target='_blank'
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandX size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">X</span>
          </Link>

          <Link 
            to="https://github.com/RaviGahire" 
            target='_blank'
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandGithub size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Github</span>
          </Link>
        </div>
      </div>
            
      <div className="text-center mt-8 opacity-50">
        <p className="text-[12px] text-lavender uppercase tracking-[0.5em] underline underline-offset-4">Ravi Gahire 2026</p>
      </div>
    </footer>
  );
};
