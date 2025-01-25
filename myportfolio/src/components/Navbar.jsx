import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

 
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Handle scroll to change navbar background
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add or remove dark mode class on body when darkMode state changes
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-primary" : "bg-transparent"
            } navbar-${darkMode ? "dark" : "light"}`}
        >
          <div className="container rounded">
            <NavLink to="./" className="navbar-brand mx-2">
           
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 3h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                  <path d="M2 7h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                  <path d="M2 11h12a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2z" />
                </svg>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto m-3 ">
                <li className="nav-item ">
                  <NavLink to="/" className="nav-link active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="./about" className="nav-link ">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="./work" className="nav-link ">
                    Work
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="./contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                   </ul>
                   <button
              className="btn border-0 fs-4 theme-btn"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <i className="ri-sun-fill"></i> // Light Mode Icon (Sun)
              ) : (
                <i className="ri-moon-line"></i> // Dark Mode Icon (Moon)
              )}
            </button>


            </div>

            {/* Dark Mode Button */}
           
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
