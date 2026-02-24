import React, { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export const ImageCarousel = () => {
  const images = [
    { url: "https://res.cloudinary.com/dbdtzucwg/image/upload/v1771909628/IMG_20180715_131649_vek28f.jpg", title: "2018" },
    { url: "https://res.cloudinary.com/dbdtzucwg/image/upload/v1771909629/IMG_20180329_162444_1522407038870_bycvoc.png", title: "2019" },
    { url: "mypic.jpg", title: "2017" },
    { url: "https://res.cloudinary.com/dbdtzucwg/image/upload/v1771909627/PicsArt_05-12-12.11.12_1526107480301_lvqvgl.jpg", title: "2020 & Philosophy" },
  ];

 const loopImages = [...images, ...images];

  return (
    <div className="w-full md:py-20 overflow-hidden">
      
      {/* Container with Fade Masks */}
      <div className="relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 md:before:w-40 before:bg-linear-to-r before:from-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 md:after:w-40 after:bg-linear-to-l after:after:from-black after:to-transparent">
        
        {/* Scrolling Track */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {loopImages.map((img, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[350px] md:w-[450px] px-3 shrink-0"
            >
              <div className="relative aspect-16/10 group overflow-hidden rounded-2xl border border-white/5 bg-neutral-900">
                
                {/* Image with subtle hover zoom */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />

                {/* Glassmorphism Label */}
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="backdrop-blur-md bg-[#3f3f3f] border border-white/20 p-4 rounded-xl">
                    {/* <p className="text-xs text-indigo-400 font-black uppercase tracking-widest mb-1">Portfolio Item</p> */}
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