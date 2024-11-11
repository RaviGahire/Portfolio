import React, { useRef } from "react"
import "../custom-css-files/navbar.css"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

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
                <nav className="navbar navbar-expand-lg p-2  bg-body-tertiary-custom-class">
                    <div className="container rounded bg-dark border">
                        <NavLink to="./" className="navbar-brand text-light mx-2 ">Ravi Gahire</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path d="M2 3h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                                    <path d="M2 7h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                                    <path d="M2 11h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                                </svg>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto m-3 fs-light ">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active text-light">Home  </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='./about' className="nav-link text-light">About  </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='./work' className="nav-link text-light">Work  </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='./contact' className="nav-link text-light">Contact  </NavLink>
                                </li>
                            </ul>
                        </div>
                       <span className="text-light fs-2"><i class="ri-contrast-2-line"></i></span>
                       <span className="text-light fs-2"> <i class="ri-sun-fill"></i></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
