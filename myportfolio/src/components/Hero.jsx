import React from 'react'
import { Link } from 'react-router-dom'
import '../custom-css-files/hero.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Hero = () => {
    return (
        <>
           <section className="hero-section d-flex justify-content-center align-items-center">
                <div className="container text-center">
                    <div className="hero-content">
                        <h1 className="display-1">Welcome to my portfolio</h1>
                        <p className="lead"><span className='text-info'>I am</span> <span className='typing'>Web dev</span></p>
                        <Link href="#" className="btn btn-primary btn-lg mt-3 ">Resume</Link>
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
