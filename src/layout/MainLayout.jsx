import { motion } from 'motion/react'
import { Header } from '../components/Header'
import React, { useMemo ,useState, useRef } from 'react';


export const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main aria-label='ravi-gahire-portfolio' className=' mx-auto max-w-7xl z-100 min-h-screen'>
                            
                {children}
            </main>
        </>
    )
}





