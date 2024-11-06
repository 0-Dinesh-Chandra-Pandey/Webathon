import "./AboutCard.css";
import img from "../../assets/extra/mission.png";

const AboutCard = ({leftAlign, image, heading, description}) => {
    return (
        <>
            <div className="about-card" style={{flexDirection: leftAlign ? "row" : "row-reverse"}}>
                <div className="image">
                    <img src={image} alt="" />
                </div>

                <div className="text">
                    <h1>{heading}</h1>

                    <p>
                       {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutCard;
