import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="hero-main">
                <Navbar />

                <div className="wrapper">
                    <div className="text-container">
                        <div className="heading">
                            <h1>
                                Empowering the <span className="highlight">
                                Next Generation</span> of Innovators
                            </h1>
                        </div>

                        <div className="para">
                            <p>
                                "Transform Your Ideas into Reality at Our
                                College’s Startup Incubation Center"
                            </p>
                        </div>
                        
                        <div className="CTA">
                            <a href="#">Explore!</a>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Hero;
