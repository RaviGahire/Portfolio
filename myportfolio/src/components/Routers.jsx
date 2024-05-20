import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Work from './Work';
import About from './About';




const Routers = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                <Route path='/' element={<Home/>}></Route>
                
                    <Route path='/work' element={<Work/>}></Route>

                    <Route path='/about' element={<About/>}></Route>

                    

                    <Route path='/contact' element={<h1>Contact component</h1>}></Route>

                </Routes>
            </Router>
        </>


    )
}

export default Routers;
