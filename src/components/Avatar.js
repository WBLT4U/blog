import React from "react";
import "./index.css"
const Avatar = ({ image = "", alt = ""}, style = {}) => (
    <img className="card-image" src={image} alt={alt} style={style}
    />
);
export default Avatar;