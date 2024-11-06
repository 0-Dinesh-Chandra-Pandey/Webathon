import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { resourcesData } from "../../Data/resources.js";
import ResourcesCard from "../../Components/ResourcesCard/ResourcesCard";
import Footer from "../../Section/Footer/Footer.jsx";

const Resources = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "80px 0" }}>
                    <Header
                        normalTitle="Explore all of our "
                        highlightedTitle="Resources"
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                <div
                    className="resources-main-wrapper"
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "60px"
                    }}
                >
                    {resourcesData.map((item, i) => {
                        return (
                            <ResourcesCard
                                key={i}
                                image={item.imgSrc}
                                heading={item.title}
                                description={item.text}
                            />
                        );
                    })}
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Resources;
