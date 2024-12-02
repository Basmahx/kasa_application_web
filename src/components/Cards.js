import React from "react";
import "../styles/cards.css";
// The NavLink component wraps the entire content of the card and acts as a clickable link to navigate to a specific route.
import { NavLink } from "react-router-dom";

// use styled compenant for card here

// const Cards = ({ logement }) => {
// Example of a conditional style for the background image
//   const backgroundStyle = logement.cover
//     ? {
//         backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }
//     : {
//         backgroundColor: "gray", // Fallback color if no cover image is provided
//       };

//   return (
//     <NavLink
//       className="fiche"
//       to={`/fichelogement/${logement.id}`}
//       key={logement.id}
//       state={{ logement }}
//     >
//       <div className="card">
//         <div
//           className="cardsContainer"
//           style={backgroundStyle}
//         >
//           <h3>{logement.title}</h3>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Cards;

const Cards = ({ logement }) => {
  return (
    <NavLink
      className="fiche"
      to={`/fichelogement/${logement.id}`}
      key={logement.id}
      state={{ logement }}>
      <div className="card">
        <div
          className="cardsContainer"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
          <h3>{logement.title}</h3>
        </div>
      </div>
    </NavLink>
  );
};

export default Cards;
