import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Hero.css";
import video from "../../assets/extra/backgroundVideo.mp4"
import Button from "../../Components/Button/Button";

const Hero = () => {
    return (
        <>
            <div className="hero-main">
                <video autoPlay muted loop className="video-background">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="wrapper">
                    <div className="text-container">
                        <div className="heading">
                            <h1>
                                Empowering the <span className="highlight">Next Generation</span> of Innovators
                            </h1>
                        </div>

                        <div className="para">
                            <p>
                                "Transform Your Ideas into Reality at Our College’s Startup Incubation Center"
                            </p>
                        </div>
                        
                        <Button buttonLink={"#"} buttonText={"Explore!"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
