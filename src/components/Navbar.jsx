import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: 'Profile', path: '/' },
    { title: 'Work', path: '/work' },
    { title: 'About', path: '/aboutme' },
    // { title: 'Blogs', path: '/blogs' },

  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-1 left-0 w-full z-100 font-sans antialiased">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative flex items-center justify-center w-fit rounded-full border border-[#3f3f3f] 
                  bg-linear-to-t from-[#141414] to-[#242424] 
                  shadow-[inset_6px_0_10px_black]
                  after:absolute after:-inset-1 after:-z-10 after:block after:rounded-full 
                  after:bg-linear-to-b after:from-[#3f3f3f] after:to-[#212121] after:content-['']">

          <div className="absolute rounded-full transition-all duration-300 z-2 pointer-events-none
                      [position-anchor:--active] top-[anchor(top)] right-[anchor(right)] bottom-[anchor(bottom)] left-[anchor(left)]
                      bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3] 
                      shadow-[inset_0_1px_3px_white]">
          </div>

          <nav className="relative m-1.5 flex items-center [anchor-name:--nav] pointer-events-auto">
            {/* Active Bubble  */}
            <div className="absolute rounded-full transition-all duration-300 z-0 pointer-events-none
                  [position-anchor:--active] top-[anchor(top)] right-[anchor(right)] bottom-[anchor(bottom)] left-[anchor(left)]
                  bg-linear-to-b from-[#f2f2f2] to-[#b3b3b3] 
                  shadow-[inset_0_1px_3px_white]">
            </div>

            {/* Hover Bubble */}
            <div className="absolute rounded-full transition-all duration-200 z-0 pointer-events-none
                  [position-anchor:--nav] top-[anchor(top)] right-[anchor(right)] bottom-[anchor(bottom)] left-[anchor(left)]
                  bg-linear-to-b from-[#3f3f3f] to-[#212121] 
                  shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]">
            </div>

            <ul className="flex items-center relative z-10">
              {navItems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
            relative z-20 block text-center whitespace-nowrap px-8 py-3 
            text-sm font-medium no-underline transition-colors tracking-tight
            pointer-events-auto
            ${isActive ? 'text-black [anchor-name:--active]' : 'text-gray-400 hover:text-white'}
          `}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar Bar - Ensure pointer-events-auto here */}
      <div className="md:hidden w-full flex items-center justify-between px-6 h-16 border-b border-white/5 bg-[#141414]/90 backdrop-blur-xl relative pointer-events-auto">
        <div className="text-white font-bold text-lg tracking-tighter">RG</div>

        <button
          onClick={toggleMenu}
          className="relative z-110 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 overflow-hidden pointer-events-auto"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay  */}
      <div
        className={`fixed inset-0 bg-black/60 z-101 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <nav className={`fixed top-0 right-0 h-sceen w-72 bg-[#141414] border-l border-white/10 z-102 md:hidden transform transition-transform duration-300 ease-in-out pointer-events-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full bg-[#141414]">
          <div className="p-6 h-16 border-b border-white/5 flex items-center justify-between shrink-0">
            <span className="text-white font-bold">Menu</span>
            <button onClick={closeMenu} className="text-gray-400 text-xl p-2 hover:text-white transition-colors pointer-events-auto">✕</button>
          </div>

          <ul className="flex flex-col p-4 gap-2 overflow-y-auto grow">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => `
              block px-6 py-4 rounded-xl text-sm font-medium transition-all pointer-events-auto
              ${isActive ? 'bg-white text-black font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
            `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>

  );
};