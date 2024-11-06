import React from "react";
import "./Header.css";

const Header = ({ paraText, highlightedTitle, normalTitle }) => {
    return (
        <div id="comm-header">
            <h1>
                {normalTitle}<span className="highlight">{highlightedTitle}</span>
            </h1>

            <p>{paraText}</p>
        </div>
    );
};

export default Header;
