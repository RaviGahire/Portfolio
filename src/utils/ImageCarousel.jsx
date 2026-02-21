import React, { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export const ImageCarousel = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200", title: "Coding Sessions" },
    { url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200", title: "Retro Tech" },
    { url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200", title: "Gaming Setup" },
    { url: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200", title: "Architecture & Philosophy" },
  ];

 const loopImages = [...images, ...images];

  return (
    <div className="w-full py-20 overflow-hidden">
      
      {/* Container with Fade Masks */}
      <div className="relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 md:before:w-40 before:bg-linear-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 md:after:w-40 after:bg-linear-to-l after:after:from-black after:to-transparent">
        
        {/* Scrolling Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {loopImages.map((img, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[350px] md:w-[450px] px-3 shrink-0"
            >
              <div className="relative aspect-[16/10] group overflow-hidden rounded-2xl border border-white/5 bg-neutral-900">
                
                {/* Image with subtle hover zoom */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Glassmorphism Label */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-xl">
                    <p className="text-xs text-indigo-400 font-black uppercase tracking-widest mb-1">Portfolio Item</p>
                    <h3 className="text-xl font-bold text-white">{img.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Animation Definition */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50%)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />
    </div>
  );
};