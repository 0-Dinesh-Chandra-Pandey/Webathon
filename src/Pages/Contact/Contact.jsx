import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import contact from "../../assets/contact/contact.png";
import "./Contact.css";
import Footer from "../../Section/Footer/Footer";

const Contact = () => {
    return (
        <>
            <div className="container">
                <Navbar />

                <div style={{ margin: "60px 0" }}>
                    <Header
                        normalTitle="Share us our "
                        highlightedTitle="Feedback"
                    />
                </div>

                <div className="contact-form-container">
                    <div className="input-area">
                        <div className="input">
                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="input">
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className="input">
                            <textarea
                                name="message"
                                placeholder="Message"
                                cols={30}
                                rows={10}
                            ></textarea>
                        </div>

                        <div className="input-button">
                            <button>Send Feedback</button>
                        </div>
                    </div>

                    <div className="message-area">
                        <img src={contact} alt="contact image" />
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Contact;
