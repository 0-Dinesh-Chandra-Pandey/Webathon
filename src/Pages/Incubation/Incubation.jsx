import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import "./Incubation.css";
import Footer from "../../Section/Footer/Footer";

const Incubation = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "80px 0" }}>
                    <Header
                        normalTitle="Helping ideas "
                        highlightedTitle="Take off "
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                <Slider />

                {/* Further features */}
                {/* <div className="slider-incubation" style={{margin: "50px 0"}}>
                <Header
                    normalTitle="Our "
                    highlightedTitle="Startups"
                />
                
                <div className="startups-slider-container">
                    <div className="box1">Box 1</div>
                    <div className="box2">Box 2</div>
                    <div className="box3">Box 3</div>
                </div>
            </div> */}
            </div>
            
            <Footer />
        </>
    );
};

export default Incubation;
