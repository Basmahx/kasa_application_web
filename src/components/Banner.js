import React from "react";
import "../styles/index.css";

const Banner = ({ className, title }) => {
  return (
    <div className="Banner_container">
      <div className={`Banner ${className}`}>{title && <h1>{title}</h1>}</div>
    </div>
  );
};

export default Banner;
