import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Section/Footer/Footer";
import Header from "../../Components/Header/Header";
import ServicesCard from "../../Components/ServicesCard/ServicesCard";
import { servicesCardData } from "../../Data/services.js";

const Services = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "80px 0" }}>
                    <Header
                        normalTitle="What we "
                        highlightedTitle="Offer"
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                <div className="services-section-main">
                    {servicesCardData.map((item, i) => {
                        return (
                            <ServicesCard
                                key={i}
                                image={item.imgSrc}
                                heading={item.heading}
                                para={item.description}
                            />
                        );
                    })}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Services;
