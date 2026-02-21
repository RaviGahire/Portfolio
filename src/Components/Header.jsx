import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './Navbar'
import { Logo } from '../utils/Logo'
import { ResumeBtn } from '../utils/ResumeBtn'

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            aria-label='header'
            className="sticky top-0 z-50 w-full px-4 "
        >
            <motion.div
                initial={false}
                animate={{

                    paddingTop: isScrolled ? "10px" : "16px",
                    paddingBottom: isScrolled ? "10px" : "16px",
                    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
                    borderColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
                    width: isScrolled ? "95%" : "100%"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`
                    flex justify-between items-center max-w-7xl mx-auto 
                    rounded-2xl backdrop-blur-md border 
                    ${isScrolled ? 'shadow-2xl shadow-indigo-500/10' : ''}
                `}
            >
                <div className="hidden md:block mx-2">
                    <Logo />
                </div>

                <div className="">
                    <Navbar />
                </div>

                <div className="hidden md:block mx-2">
                    <ResumeBtn />
                </div>
            </motion.div>
        </header>
    )
}