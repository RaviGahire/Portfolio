import React from 'react'
import { Navbar } from './Navbar'
import { Logo } from '../utils/Logo'
import { ContactBtn } from '../utils/ContactBtn'

export const Header = () => {
    return (
        <header aria-label='header' className='flex justify-around items-center max-w-7xl mx-auto md:my-2  rounded-2xl shadow-md '>
            <div className="hidden md:block mx-2"><Logo /></div>
            <Navbar />
            <div className="hidden md:block  mx-2"><ContactBtn /></div>
        </header>
    )
}
