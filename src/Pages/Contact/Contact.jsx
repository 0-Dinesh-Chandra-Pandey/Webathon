import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import image from "../../assets/contact/contact.png";

const Contact = () => {
    return (
        <div className="container">
            <Navbar />

            <div className="main-contact-container">
                <div className="contact-left">
                    <input type="text" placeholder="Name" class="text-input" />
                    <input type="text" placeholder="Email" class="text-input" />
                    <textarea
                        rows={10}
                        placeholder="Your Message"
                        cols={20}
                    ></textarea>
                </div>
                <div className="right-section">
                    <img src={image} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
