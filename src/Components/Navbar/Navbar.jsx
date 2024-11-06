import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/extra/logo.png";
import { CircleX, Menu } from "lucide-react";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="nav-container">
            {/* Links */}
            <div className="start">
                <div className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        home
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/careers"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        careers
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/resources"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        resources
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        services
                    </NavLink>
                </div>
            </div>

            {/* Logo */}
            <div className="middle">
                <NavLink to="/">
                    <img src={Logo} />
                </NavLink>
            </div>

            {/* Links */}
            <div className="last">
                <div className="nav-links">
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        events
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        about
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        contact us
                    </NavLink>
                </div>
                <div className="nav-links">
                    <NavLink
                        to="/incubation"
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                    >
                        incubation
                    </NavLink>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className="mobile-links"
                style={{ display: showMenu ? "flex" : "none" }}
            >
                <div className="links-container">
                    {[
                        "/",
                        "/services",
                        "/resources",
                        "/careers",
                        "/events",
                        "/about",
                        "/contact",
                        "/incubation",
                    ].map((path) => (
                        <div className="nav-links" key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "is-active" : ""
                                }
                            >
                                {path === "/" ? "home" : path.substring(1)}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="close-icon" onClick={() => setShowMenu(false)}>
                    <CircleX style={{ color: "var(--text-primary)" }} />
                </div>
            </div>

            <div className="menu-icon" onClick={() => setShowMenu(true)}>
                <Menu
                    style={{ color: "var(--text-primary)", fontSize: "24px" }}
                />
            </div>
        </nav>
    );
};

export default Navbar;
