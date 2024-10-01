import React from "react";
import logo from "../../assets/extra/logo.png";
import "./Footer.css";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <div className="container-logo">
                <div className="image-foot">
                    <img src={logo} alt="" />
                </div>
                <p>Startup Incubation Service (SIC)</p>
                <div className="icons">
                    <Youtube color="#fff" />
                    <Linkedin color="#fff" />
                    <Instagram color="#fff" />
                </div>
            </div>

            <div className="container-text">
                <h4>Contact Us</h4>

                <p>
                    Address:123 Innovation Avenue, Tech City, CA 12345
                    <br />
                    Email:
                    info@companyname.com Phone: +1 (123) 456-7890
                </p>
            </div>
        </footer>
    );
};

export default Footer;
