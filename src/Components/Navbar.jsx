import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Profile', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Blogs', path: '/blogs' },
    
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full flex items-center justify-center isolate font-sans antialiased">
      
      {/* Desktop Navbar */}
      <div className="hidden md:relative md:flex md:items-center md:justify-center md:mx-auto md:max-w-full md:w-fit md:rounded-full md:border md:border-[#3f3f3f] 
                      md:bg-linear-to-t md:from-[#141414] md:to-[#242424] 
                      md:shadow-[inset_6px_0_10px_black]
                      md:after:absolute md:after:-inset-1 md:after:-z-10 md:after:block md:after:rounded-full 
                      md:after:bg-linear-to-b md:after:from-[#3f3f3f] md:after:to-[#212121] md:after:content-['']">

        {/* Active Bubble (Follows --active) */}
        <div className="absolute rounded-full transition-all duration-300 z-2 pointer-events-none
                        [position-anchor:--active] top-[anchor(top)] right-[anchor(right)] bottom-[anchor(bottom)] left-[anchor(left)]
                        bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3] 
                        shadow-[inset_0_1px_3px_white]">
        </div>

        {/* Hover Bubble (Follows --nav) */}
        <div className="absolute rounded-full transition-all duration-200 z-1 pointer-events-none
                        [position-anchor:--nav] top-[anchor(top)] right-[anchor(right)] bottom-[anchor(bottom)] left-[anchor(left)]
                        bg-linear-to-b from-[#3f3f3f] to-[#212121] 
                        shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]">
        </div>

        {/* .nav - Overflow handling for desktop */}
        <nav className="relative m-1.5 flex items-center [anchor-name:--nav]">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    relative z-10 block text-center whitespace-nowrap px-8 py-3 
                    text-sm font-medium no-underline transition-colors tracking-tight
                    before:absolute before:inset-0 before:block before:content-['']
                    hover:before:[anchor-name:--nav]
                    ${isActive 
                      ? 'text-black [anchor-name:--active]' 
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full flex items-center justify-between px-4 py-4 border-b border-[#3f3f3f]
                      bg-linear-to-t from-[#141414] to-[#242424]">
        
        {/* Mobile Menu Logo/Brand */}
        <div className="text-white font-medium text-sm">RG</div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 
                     focus:outline-none focus:ring-2 focus:ring-[#3f3f3f] rounded-lg
                     transition-all duration-300"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Top Line */}
          <span className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          
          {/* Middle Line */}
          <span className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          
          {/* Bottom Line */}
          <span className={`w-6 h-0.5 bg-gray-400 transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <nav className={`fixed top-0 right-0 h-screen w-72 bg-linear-to-t from-[#141414] to-[#242424]
                       border-l border-[#3f3f3f] shadow-[inset_-6px_0_10px_black]
                       transform transition-transform duration-300 z-41 md:hidden
                       overflow-y-auto
                       ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b border-[#3f3f3f]">
          <span className="text-white font-medium text-sm">Navigation</span>
          <button
            onClick={closeMenu}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `
                  relative block px-4 py-3 rounded-lg text-sm font-medium 
                  no-underline transition-all duration-200 tracking-tight
                  ${isActive 
                    ? 'text-black bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3] shadow-[inset_0_1px_3px_white]' 
                    : 'text-gray-400 hover:text-white hover:bg-linear-to-b hover:from-[#3f3f3f] hover:to-[#212121]'
                  }
                `}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @media (prefers-reduced-motion: no-preference) {
          html { interpolate-size: allow-keywords; }
        }
      `}} />
    </div>
    
  );
};