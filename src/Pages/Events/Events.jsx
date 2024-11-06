import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Gallery from "react-photo-gallery";
import { photoGallaryData } from "../../Data/photoGallery";
import "./Events.css";
import Footer from "../../Section/Footer/Footer";

const Events = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "80px 0" }}>
                    <Header
                        normalTitle="Be part of the "
                        highlightedTitle="Experience"
                        paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate dapibus nulla, vitae vehicula odio tincidunt sit amet. Nulla facilisi. Sed nec ornare libero. Cras sed odio at elit vehicula convallis."
                    />
                </div>

                {/* Image Gallery */}
                <div className="gallery-wrapper" style={{marginBottom: "80px"}} lazyLoad={true}>
                    <Gallery photos={photoGallaryData} />
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Events;
