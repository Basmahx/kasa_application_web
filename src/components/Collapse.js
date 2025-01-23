import React, { useState } from "react";
import "../styles/collapse.css";
import flecheBas from "../assets/fleche-bas.png";
import flecheHaut from "../assets/fleche-haut.png";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="valeurs">
      <button
        className="collapse-title"
        style={{ border: "none", outline: "none" }}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title}`}>
        {title}
        {isOpen ? ( // opérateur ternaire pour alterner entre flecheHaut et flecheBas
          <img src={flecheHaut} alt="up-arrow" />
        ) : (
          <img src={flecheBas} alt="down-arrow" />
        )}
      </button>
      {isOpen && (
        <div id={`collapse-content-${title}`} className="collapse-paragraph">
          {description}
        </div>
      )}
    </div>
  );
};

export default Collapse;
