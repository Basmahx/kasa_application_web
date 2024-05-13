import React from "react"; // necessary for writing React components.
import "../styles/cards.css";
// The NavLink component wraps the entire content of the card and acts as a clickable link to navigate to a specific route.
import { NavLink } from "react-router-dom";


const Cards = ({ logement }) => {
    return (
       <NavLink className="fiche"
        to={`/fichelogement/${logement.id}`}
        key={logement.id}>

            <div className="card">
                    <div className="cardsContainer" style={{
                        backgroundImage:`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${logement.cover})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        }}>
                        <h3>{logement.title}</h3>
                    </div> 
            </div>    
       </NavLink>
    );
};

export default Cards;