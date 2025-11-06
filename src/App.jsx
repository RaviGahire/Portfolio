import { useEffect, useState } from "react"
import { motion } from "motion/react";
import { Sidebar } from "./Components/Sidebar";
import { VerticalNavbar } from "./Components/VerticalNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './Components/Pages/Home';
import { About } from './Components/Pages/About';
import { Projects } from './Components/Pages/Projects';
import { Contact } from './Components/Pages/Contact';



export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    // Aside scroll
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])

  //Router 
  const navItems = [
    { path: '/', element: <Home/> },
    { path: '/about', element: <About/> },
    { path: '/projects', element: <Projects/> },
    { path: '/contact', element: <Contact/>},
    // Fallback route
    { path: '*', element: <Home/>},
  ];




  return (
    <>
   {/* ===== Mobile / Tablet UI ===== */}
      <div className="lg:hidden">
        <h1 className="dark:text-white text-center mt-10">
          Hello, I am mobile and tablet
        </h1>
      </div>

      {/* ===== Desktop UI ===== */}
      <div className="hidden lg:block">
        <Router>
          {/*Sidebar toggle on scroll */}
          {isScrolled ? <VerticalNavbar /> : <Sidebar />}

          {/*Page routing */}
     
            <div>
              <Routes>
                {navItems.map((item, index) => (
                  <Route key={index} path={item.path} element={item.element} />
                ))}
              </Routes>
            </div>
         
        </Router>
      </div>

    </>
  )





}
