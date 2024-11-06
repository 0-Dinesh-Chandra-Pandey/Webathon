import "./ServicesCard.css";
import { servicesCardData } from "../../Data/services.js";

const ServicesCard = ({ image, heading, para }) => {
    return (
        <div className="card-main-services" >
            <div className="image-services">
                <img src={image} alt="" />
            </div>

            <div className="text-services">
                <div className="heading-services-card">
                    <h2>{heading}</h2>

                    <span></span>
                </div>

                <p className="para-services">{para}</p>
            </div>
        </div>
    );
};

export default ServicesCard;
