import "./CareersCard.css";
import image from "../../assets/careers/volunteer.png";

const CareersCard = ({ cardImg, buttonText }) => {
    return (
        <div className="careers-card">
            <div className="image">
                <img src={cardImg} />
            </div>

            <div className="button">
                <a href="#">{buttonText}</a>
            </div>
        </div>
    );
};

export default CareersCard;
