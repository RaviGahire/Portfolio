import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './Navbar'
import { Logo } from '../utils/Logo'
import { ResumeBtn } from '../utils/ResumeBtn'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            aria-label='header'
            className="fixed top-0 left-0 z-100 w-full md:px-4 md:pt-4 transition-all duration-300"
        >
            <motion.div
                initial={false}
                animate={{
                    // Only shrink width on desktop (md), keep 100% on mobile for stability
                    width: isScrolled ? "95%" : "100%",
                    backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.8)" : "rgba(10, 10, 10, 0)",
                    borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.4 }}
                className={`
                    flex justify-between items-center max-w-7xl mx-auto 
                    rounded-3xl backdrop-blur-md border px-4 py-3
                    ${isScrolled ? 'shadow-xl' : ''}
                `}
            >
                {/* Logo Area */}
                <div className="shrink-0">
                    <Logo />
                </div>

                {/* Navbar Area - This remains centered */}
                <div className="grow flex justify-center">
                    <Navbar />
                </div>

                {/* Resume Area */}
                <div className="hidden md:block shrink-0">
                    <ResumeBtn />
                </div>
            </motion.div>
        </header>
    );
};