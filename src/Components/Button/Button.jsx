import "./Button.css";
const Button = ({ buttonLink, buttonText }) => {
    return (
        <div className="CTA">
            <a href={buttonLink}>{buttonText}</a>
        </div>
    );
};
    
export default Button;
