import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <>
            <div>
                <nav className='flex gap-5'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/aboutme'}>About me</NavLink>
                </nav>
            </div>

        </>
    )
}
