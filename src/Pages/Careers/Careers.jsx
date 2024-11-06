import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import CareersCard from "../../Components/CareersCard/CareersCard";
import volunteer from "../../assets/careers/volunteer.png";
import intern from "../../assets/careers/intern.png";
import Footer from "../../Section/Footer/Footer";

const Careers = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "80px 0" }}>
                    <Header
                        normalTitle="Join Our "
                        highlightedTitle="Journey"
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                <div
                    className="careers-card-wrapper"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        flexWrap: "wrap",
                        marginBottom: "80px",
                    }}
                >
                    <CareersCard
                        cardImg={volunteer}
                        buttonText={"Join as Volunteer"}
                    />
                    <CareersCard
                        cardImg={intern}
                        buttonText={"Join as intern"}
                    />
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Careers;
