import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const Routers = () => {
    return (
        <>
            <Router>
            <Navbar />
                <Routes>
                    <Route path='/work' element={<h1>Work component</h1>}></Route>

                    <Route path='/about' element={<h1>About component</h1>}></Route>

                    <Route path='/blog' element={<h1>Blog component</h1>}></Route>

                    <Route path='/contact' element={<h1>Contact component</h1>}></Route>

                </Routes>
            </Router>
        </>


    )
}

export default Routers;
