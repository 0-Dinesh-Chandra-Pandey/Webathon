import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./About.css"
import {aboutData} from "../../Data/about.js"

const About = () => {
    return (
        <div className="container">
            <Navbar />

            <div>
                {
                  aboutData.map((item) => {
                    return (
                      <div className="main">
                    <div className="Image">
                        <img className="img" src={item.imgSrc} />
                    </div>
                    <div className="Content">
                        <h2 className="Heading">Our Mission</h2>
                        <p className="text-about">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Similique culpa laudantium reiciendis, neque
                            minima asperiores eaque fugit totam unde sunt
                            laboriosam veniam consequuntur eius debitis alias
                            reprehenderit! Iste ullam optio nesciunt beatae
                            aliquid soluta enim tenetur delectus suscipit!
                            Rerum, ab. Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Officiis temporibus doloribus
                            quasi voluptatem dolorum, at nisi dicta tenetur
                            similique. Nostrum, minus! Esse perferendis commodi
                            est itaque, eaque dignissimos non aliquid. Deleniti
                            ipsum, illum quae excepturi debitis explicabo,
                            magnam exercitationem molestiae
                        </p>
                    </div>
                </div>
                    ) 
                  })
                }
            </div>
            <Footer />
        </div>
    );
};

export default About;
