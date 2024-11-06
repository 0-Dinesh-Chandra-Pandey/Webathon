import "./Slider.css";
import { sliderData } from "../../Data/slider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Slider = () => {
    const [showValue, setShowValue] = useState(0);
    const sliderContainer = useRef();

    const handlePrev = () => {
        if (showValue !== 0) {
            sliderContainer.current.style.animation = "none"; // Reset animation

            setTimeout(() => {
                sliderContainer.current.style.animation = `slide-left .3s linear`;
            }, 10); // Short delay to re-trigger the animation

            setTimeout(() => {
                setShowValue(showValue - 1);
            }, 300);
        }
    };

    const handleNext = () => {
        if (showValue !== sliderData.length - 1) {
            sliderContainer.current.style.animation = "none"; // Reset animation

            setTimeout(() => {
                sliderContainer.current.style.animation = `slide-right .3s linear`;
            }, 10); // Short delay to re-trigger the animation

            setTimeout(() => {
                setShowValue(showValue + 1);
            }, 300);
        }
    };

    return (
        <div className="sliderContainer">
            <div className="slider-data-container" ref={sliderContainer}>
                <div className="left-content">
                    <img src={sliderData[showValue].avatar} />
                </div>
                <div className="right-content">
                    <h4 className="slider-name">
                        {sliderData[showValue].name}
                    </h4>
                    <p className="slider-text">
                        {sliderData[showValue].description}
                    </p>
                </div>
            </div>

            <div id="slider-buttons">
                <div
                    className={`prev ${
                        showValue == 0 && "disabled-button-slider"
                    }`}
                    onClick={() => handlePrev()}
                >
                    <ChevronLeft />
                </div>
                <div
                    className={`nxt ${
                        showValue == sliderData.length - 1 &&
                        "disabled-button-slider"
                    }`}
                    onClick={() => handleNext()}
                >
                    <ChevronRight />
                </div>
            </div>
        </div>
    );
};

export default Slider;
