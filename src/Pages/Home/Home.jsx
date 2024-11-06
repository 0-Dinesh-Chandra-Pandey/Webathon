import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Section/Hero/Hero";
import Header from "../../Components/Header/Header";
import Services from "../../Section/Services/Services";
import Button from "../../Components/Button/Button";
import Slider from "../../Components/Slider/Slider";
import Footer from "../../Section/Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="container">
                <Navbar />
            </div>
            <Hero />

            <div className="container">
                <div className="home-services">
                    <Header
                        normalTitle={"What we "}
                        highlightedTitle={"Offer"}
                        paraText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                        }
                    />
                    <Services />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button buttonLink={"#"} buttonText={"Know More!"} />
                    </div>
                </div>

                <div className="homeSlider" style={{margin: "50px 0"}}>
                    <Header normalTitle={"Sucess "} highlightedTitle={"Stories"}/>
                    <Slider/>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Home;
