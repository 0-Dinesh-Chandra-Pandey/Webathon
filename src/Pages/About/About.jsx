import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import AboutCard from "../../Components/AboutCard/AboutCard";
import { aboutData } from "../../Data/about";
import "./About.css";
import presidentImage from "../../assets/extra/President.jpg";
import instagram from "../../assets/socialMedia3D/instagram.png";
import linkedin from "../../assets/socialMedia3D/linkedin.png";
import youtube from "../../assets/socialMedia3D/youtube.png";
import Footer from "../../Section/Footer/Footer";

const About = () => {
    return (
        <>
            <div className="container" style={{ marginBottom: "120px" }}>
                <Navbar />

                <div style={{ margin: "100px 0" }}>
                    <Header
                        normalTitle="Our "
                        highlightedTitle="Mission & Vision"
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                {/* About us Cards */}
                <div className="about-card-wrapper">
                    {aboutData.map((item, i) => {
                        return (
                            <AboutCard
                                heading={item.title}
                                description={item.description}
                                image={item.imgSrc}
                                leftAlign={item.imageAlignLeft}
                                key={i}
                            />
                        );
                    })}
                </div>

                {/* Message of the president */}

                <div
                    className="president-message-wrapper"
                    style={{ marginTop: "100px" }}
                >
                    <Header
                        normalTitle={"message by "}
                        highlightedTitle={"our president"}
                    />

                    <div className="p-m-container">
                        <div className="image">
                            <img src={presidentImage} alt="" />
                        </div>

                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus lacinia odio vitae
                                vestibulum vestibulum. Cras venenatis euismod
                                malesuada. Sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media Links */}
                <div
                    className="about-social-links"
                    style={{ marginTop: "100px" }}
                >
                    <div style={{ marginBottom: "60px" }}>
                        <Header
                            normalTitle={"Join us on "}
                            highlightedTitle={"social media"}
                        />
                    </div>

                    <div className="social-links">
                        <a href="https://www.instagram.com" target="_blank">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank">
                            <img src={youtube} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default About;
