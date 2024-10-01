import React from "react";
import Hero from "../../Section/Hero/Hero";
import Services from "../../Section/Services/Services";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
    return (
        <>
            <div className="container">
                <div className="home-container">
                    <Hero />
                    
                    {/* service */}
                    <Services />
                    
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;
