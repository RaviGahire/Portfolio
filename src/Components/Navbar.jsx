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

      <nav className="relative m-1.5 flex items-center [anchor-name:--nav]">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  relative z-10 block text-center whitespace-nowrap px-8 py-3 
                  text-sm font-medium no-underline transition-colors tracking-tight
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

  {/* Mobile Navbar Bar  */}
  <div className="md:hidden w-full flex items-center justify-between px-6 h-16 border-b border-white/5 bg-[#141414]/90 backdrop-blur-xl relative">
    <div className="text-white font-bold text-lg tracking-tighter">RG</div>

    <button
      onClick={toggleMenu}
      className="relative z-110 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 overflow-hidden"
      aria-label="Toggle menu"
    >
      {/*  Hamburger  */}
      <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`w-5 h-0.5 bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  </div>

  {/* Mobile Menu Overlay - Ensured standard fixed behavior */}
  <div 
    className={`fixed inset-0 bg-black/60  z-101 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
    onClick={closeMenu} 
  />
  
  {/* Mobile Menu Panel */}
  <nav className={`fixed top-0 right-0 h-full w-72 bg-[#141414] border-l border-white/10 z-102 md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    <div className="flex flex-col h-screen bg-[#141414]">
      <div className="p-6 h-16 border-b border-white/5 flex items-center justify-between">
        <span className="text-white font-bold">Menu</span>
        <button onClick={closeMenu} className="text-gray-400 text-xl p-2 hover:text-white transition-colors">✕</button>
      </div>
      
      <ul className="flex flex-col p-4 gap-2 overflow-y-auto">
        {navItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => `
                block px-6 py-4 rounded-xl text-sm font-medium transition-all
                ${isActive ? 'bg-white text-black font-bold' : 'text-gray-400 hover:bg-white/5'}
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