import React, { useState } from "react";
import Heading from "../../Components/Heading/Heading";
import "./Services.css";

const Services = () => {
    const [overlay, setOverlay] = useState(false);
    const handleEnter = () => {
        setOverlay(true);
    };

    const handleOut = () => {
        setOverlay(false);
    };
    return (
        <div className="services-container">
            <div className="service-top">
                <div>
                    <Heading first="what we " high="offer" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent vulputate dapibus nulla, vitae vehicula odio
                    tincidunt sit amet. Nulla facilisi. Sed nec ornare libero.
                    Cras sed odio at elit vehicula convallis.
                </p>
            </div>
            <div className="services-bottom">
                <div className="images-container">
                    <div
                        className="image-container img1"
                        onMouseEnter={handleEnter}
                        onMouseDown={handleOut}
                    >
                        <div
                            className="overlay"
                            style={{ dislay: overlay ? `flex` : "none" }}
                        >
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div
                        className="image-container img2"
                        onMouseEnter={handleEnter}
                        onMouseDown={handleOut}
                    >
                        <div
                            className="overlay"
                            style={{ dislay: overlay ? `flex` : "none" }}
                        >
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div
                        className="image-container img3"
                        onMouseEnter={handleEnter}
                        onMouseDown={handleOut}
                    >
                        <div
                            className="overlay"
                            style={{ dislay: overlay ? `flex` : "none" }}
                        >
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                    </div>
                </div>

                <div className="button">
                    <div className="CTA">
                        <a href="#">Explore!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
