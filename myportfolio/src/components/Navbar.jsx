import React from "react"
import "../custom-css-files/navbar.css"
// import gsap from 'gsap'
// import { useGSAP } from "@gsap/react"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// gsap.registerPlugin(useGSAP)

const Navbar = () => {
    // const tl = useRef()
    // const openMenu = () => {
    //     tl.current.play();
    // }
    // const closeMenu = () => {
    //     tl.current.reverse();
    // }

    // useGSAP(() => {
    //     tl.current = gsap.timeline()
    //         .to(".side-menu", {
    //             right: 0,
    //             duration: 0.2,

    //         })
    //         .from(".side-menu li", {
    //             x: 200,
    //             duration: 0.4,
    //             opacity: 0,
    //             stagger: 0.2
    //         })

    //     tl.current.pause()

    // });



    return (
        <>
            {/* <header className="container">
                <div className="nav">
                    <h1 className="logo"> Ravi Gahire <i className="ri-sun-fill"></i></h1>
                    <i className="ri-menu-line" onClick={openMenu}></i>
                </div>
                <div classNameName="side-menu">
                    <li><NavLink to="/" className="nav-links">Home</NavLink></li>
                    <li><NavLink to="./work" className="nav-links">My Work</NavLink></li>
                    <li><NavLink to="./about" className="nav-links">About </NavLink></li>
                    <li><NavLink to="./contact" className="nav-links">Contact</NavLink></li>
                    <i className="ri-close-line" onClick={closeMenu}></i>
                </div>

            </header> */}

            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark m-auto">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                            <NavLink to="/" className="nav-links">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="./work" className="nav-links">My Work</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                         
                        </ul>
                    </div>
                </div>
            </nav>






        </>
    )
}

export default Navbar;
