import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconBrandLinkedin, 
  IconMail, 
  IconBrandX, 
  IconBrandGithub, 
  IconCode, 
  IconCodePlus
} from '@tabler/icons-react';
import { GradientBorder } from '../utils/GradientBorder';

export const Footer = () => {
  return (
    <footer className="py-2 px-6">
      <div className='mb-4'>
        <GradientBorder/>
      </div>
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Credits */}
        <div className="flex items-center gap-2 group ">
          <IconCode size={18} className="text-green-500 group-hover:rotate-12 transition-transform" />
          <p className="text-[10px] flex justify-center gap-1.5 items-center  md:text-xs  uppercase tracking-[0.3em] text-neutral-400">
            Designed <IconCodePlus size={18} className='text-green-400'/> Coded by <span className="text-white hover:text-indigo-400 transition-colors">Ravi</span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link 
            to="#" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandLinkedin size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Linkedin</span>
          </Link>

          <Link 
            to="#" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconMail size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Email</span>
          </Link>

          <Link 
            to="#" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandX size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">X</span>
          </Link>

          <Link 
            to="#" 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-all group"
          >
            <IconBrandGithub size={18} className="group-hover:-translate-y-1 transition-transform" />
            <span className="hidden sm:inline">Github</span>
          </Link>
        </div>
      </div>
            
      <div className="text-center mt-8 opacity-50">
        <p className="text-[9px] text-green-500 uppercase tracking-[0.5em]">Ravi Gahire 2026</p>
      </div>
    </footer>
  );
};