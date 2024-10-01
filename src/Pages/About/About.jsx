import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./About.css";
import { aboutData } from "../../Data/about.js";

const About = () => {
    return (
        <div className="container">
            <Navbar />

            <div>
                {aboutData.map((item) => {
                    return (
                        <div className="main">
                            <div className="Image">
                                <img className="img" src={item.imgSrc} />
                            </div>
                            <div className="Content">
                                <h2 className="Heading">{item.title}</h2>
                                <p className="text-about">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
};

export default About;
