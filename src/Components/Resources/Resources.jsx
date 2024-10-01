import React from "react";
import resourceone from "../../assets/Resources/Resource-1.png";
import "./Resources.css";

const ResourceCard = ({ img, heading, description }) => {
    return (
        <div className="resource-container">
            <div className="resource-image">
                <img src={img} />
            </div>

            <div className="resource-text">
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ResourceCard;
