import React, { useEffect } from 'react'
import gsap from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(TextPlugin, useGSAP);
const Hero = () => {



    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
        tl.to(".typewriter span", { duration: 4, text: " Web Developer, Freelancer", })


        
    });
    return (
        <>
            <section className="hero-section d-flex justify-content-center align-items-center  ">
                <div className="container text-center">
                    <div className="hero-content">
                        <h1 className="display-1 main-heading fw-semibold custom-font-1 ">
                            
                        <span>R</span>
                        <span>A</span>
                        <span>V</span>
                        <span>I</span>
                    
                        <span>G</span>
                        <span>A</span>
                        <span>H</span>
                        <span>I</span>
                        <span>R</span>
                        <span>E</span>             
                             </h1>
                        <div className="row  justify-content-center">
                            <div className=" col-md-4  m-2 typewriter ">
                                <p className='fw-semibold text-info fs-5'> Hello..! I am a <span className='text-light'></span></p>
                            </div>
                        </div>
                        <Link href="#" className="btn  btn-lg mt-3 glow-box">Resume</Link>
                        <div className="social-icons mt-5">
                            <Link to="https://www.facebook.com/ravi.gahire" target='/' className='icon' aria-label="Facebook"><i class="ri-facebook-circle-line"></i></Link>
                            <Link to="https://x.com/RaviGahire" target='/' className='icon' aria-label="Twitter"><i class="ri-twitter-x-line"></i></Link>
                            <Link to="" target='/' className='icon' aria-label="Instagram"><i class="ri-instagram-line"></i></Link>
                            <Link to="https://www.linkedin.com/in/ravi-gahire-7855b110a/" target='/' className='icon' aria-label="LinkedIn"><i class="ri-linkedin-box-line"></i></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;
