import { servicesCardData } from "../../Data/services";
import "./Services.css";

const Services = () => {
    return (
        <>
            <div className="services-images-home">
                {servicesCardData.map((item, i) => {
                    return (
                        <div className="services-home-card" key={i}>
                            <div className="services-home-card-image">
                                <img src={item.imgSrc} />
                            </div>
                            <div className="overlay">
                                <p style={{ opacity: 1 }}>
                                    {item.heading}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Services;
