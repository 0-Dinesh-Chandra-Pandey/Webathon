import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/extra/logo.png";
import { CircleX, Menu } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="links-container">
                <div className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/resources">Resources</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                    <NavLink to="/services">services</NavLink>
                </div>

                <div id="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="nav-links">
                    <NavLink to="/events">Events</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                    <NavLink to="/incubation">Incubation</NavLink>
                </div>

                <div className="menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? "" : <Menu color="#fff" />}
                </div>
            </div>

            {/* Mobile menu, visible when isMobileMenuOpen is true */}
            <div className={`navForMobile ${isMobileMenuOpen ? "active" : ""}`}>
                <div className="menu-close" onClick={toggleMobileMenu}>
                    <CircleX color="#fff" />
                </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/resources">Resources</NavLink>
                <NavLink to="/careers">Careers</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/incubation">Incubation</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
