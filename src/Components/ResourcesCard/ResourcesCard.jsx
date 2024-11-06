import "./ResourcesCard.css";
import { resourcesData } from "../../Data/resources.js";

const ResourcesCard = ({ image, description, heading }) => {
    return (
        <div className="resources-card">
            <div className="image">
                <img src={image} alt="" />
            </div>

            <div className="text">
                <h4>{heading}</h4>

                <p>{description}</p>
            </div>
        </div>
    );
};

export default ResourcesCard;
