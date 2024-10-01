import React from "react";
import { resourcesData } from "../Data/resources.js";
import {sliderData} from "../Data/slider.js"

const Practice = () => {
    return (
        <div>
            {sliderData.map((item, index) => {
                return <img key={index} src={item.src} />;
            })}
        </div>
    );
};

export default Practice;
