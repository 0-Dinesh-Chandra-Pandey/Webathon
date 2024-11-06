import "./Footer.css";
import logo from "../../assets/extra/logo.png";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-info">
                    <section className="foot-section-1">
                        <div className="logo">
                            <img src={logo} alt="startup-incubation-logo" />
                        </div>
                        <p>Startup Incubation Center</p>

                        <div className="social-media-icons-footer">
                            {/* Youtube */}
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-youtube"
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-facebook"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </a>

                            {/* Linkedin */}
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </section>

                    <section className="foot-section-2">
                        <h3>Contact Us</h3>

                        <div className="footer-add">
                            <h6>Address : </h6>
                            <p style={{lineHeight: "1.7"}}>
                                123 Innovation Avenue, Tech City, CA 12345{" "}
                                <br />
                                Email: info@companyname.com <br />
                                Phone: +1 (123) 456-7890 <br />
                            </p>
                        </div>
                    </section>
                </div>

                <p className="footer-copyright">
                    &copy; 2024 GEHU SIC. All rights reserved. | Privacy Policy
                    | Terms of Service
                </p>
            </div>
        </footer>
    );
};

export default Footer;
