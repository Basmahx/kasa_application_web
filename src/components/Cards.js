import React from "react";
import "../styles/cards.css";
import { NavLink } from "react-router-dom";

const Cards = ({ logement }) => {
  const backgroundStyle = logement.cover
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }
    : {
        backgroundColor: "#FF6060", // if no cover image is provided
      };

  return (
    <NavLink
      className="fiche"
      to={`/fichelogement/${logement.id}`}
      key={logement.id}
      state={{ logement }}>
      <div className="card">
        <div className="cardsContainer" style={backgroundStyle}>
          <h3>{logement.title}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Cards;
