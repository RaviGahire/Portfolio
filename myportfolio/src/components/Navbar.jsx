import React, { useRef } from "react"
import "../Css/navbar.css"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { NavLink ,Link } from "react-router-dom"



gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const tl = useRef()


    const openMenu = () => {
        tl.current.play();
    }
    const closeMenu = () => {
        tl.current.reverse();
    }

    useGSAP(() => {
        tl.current = gsap.timeline()
            .to(".side-menu", {
                right: 0,
                duration: 0.2,

            })
            .from(".side-menu li", {
                x: 200,
                duration: 0.4,
                opacity: 0,
                stagger: 0.2
            })
    
        tl.current.pause()

    });



    return (
        <>
            <header>
                <div className="nav">
                    <h1 className="logo"> Ravi Gahire <i class="ri-sun-fill"></i></h1>

                    <i class="ri-menu-line" onClick={openMenu}></i>
                </div>
                <div className="side-menu">
                    <li><NavLink to="/" className="nav-links">Home</NavLink></li>
                    <li><NavLink to="./work" className="nav-links">My Work</NavLink></li>
                    <li><NavLink to="./about" className="nav-links">About </NavLink></li>
                   <li><NavLink to="./contact" className="nav-links">Contact</NavLink></li>
                    <i class="ri-close-line" onClick={closeMenu}></i>

                    <div className="down-buttons">
                        <Link to="/about">
                        <button className="button-89" role="button">Hire Me</button>
                        </Link>
                        <Link to="/about">
                        <button className="button-89" role="button">Contact</button>
                        </Link>
                    </div>
                </div>



            </header>
        </>
    )
}

export default Navbar;
