import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Work from './Work';



const Routers = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                <Route path='/' element={<Home/>}></Route>
                
                    <Route path='/work' element={<Work/>}></Route>

                    <Route path='/about' element={<h1>About component</h1>}></Route>

                    <Route path='/blog' element={<h1>Blog component</h1>}></Route>

                    <Route path='/contact' element={<h1>Contact component</h1>}></Route>

                </Routes>
            </Router>
        </>


    )
}

export default Routers;
