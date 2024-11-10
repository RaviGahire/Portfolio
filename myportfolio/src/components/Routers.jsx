import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';

const Routers = () => {
    return (
        <>
            <Router>
                <Navbar />
               
                <Routes>
                    <Route path='/' element={<Hero />}></Route>

                    <Route path='/work' element={<Work />}></Route>

                    <Route path='/about' element={<About />}></Route>

                    <Route path='/contact' element={<Contact />}></Route>

                </Routes>
            </Router>
        </>
    )
}
export default Routers;
