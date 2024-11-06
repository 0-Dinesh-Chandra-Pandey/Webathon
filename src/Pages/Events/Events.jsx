import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import "./Events.css";
import Footer from "../../Section/Footer/Footer";

// const formattedGalleryData = photoGallaryData.map(photo => ({
//     original: photo.src,
//     thumbnail: photo.src,
// }));

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
                {/* <div className="gallery-wrapper" style={{ marginBottom: "80px" }}>
                    <ImageGallery items={formattedGalleryData} lazyLoad={true} />
                </div> */}

                <h1
                    style={{
                        textAlign: "center",
                        color: "white",
                        marginBottom: "48px",
                        fontWeight: 500,
                    }}
                >
                    Comming Soon...
                </h1>
            </div>

            <Footer />
        </>
    );
};

export default Events;
