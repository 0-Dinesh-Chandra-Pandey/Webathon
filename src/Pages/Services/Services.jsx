import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./services.css";
import image from "../../assets/services/Service-1.png";
import { servicesCardData } from "../../Data/services.js";

const Services = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="content-container">
                {servicesCardData.map((item) => {
                    return (
                        <div className="content-wrapper">
                            <div className="left-section">
                                <img src={item.imgSrc} alt="" srcset="" />
                            </div>

                            <div className="right-section">
                                <div className="heading">
                                    <h1>{item.heading}</h1>
                                    <span className="bar"></span>
                                </div>

                                <p>
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

export default Services;
