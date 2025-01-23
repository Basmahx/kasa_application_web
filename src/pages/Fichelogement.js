import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Rating from "../components/Rating";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import jsonData from "../data/logements.json";
import "../styles/carousel.css";
import "../styles/fichelogement.css";

const Fichelogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findLogementId = (id) => {
      return jsonData.find((item) => item.id === id);
    }; // pour rechercher un logement correspondant à l'ID récupéré et puis le stocké dans l'état logement

    const dataLogement = findLogementId(id);

    if (dataLogement) {
      setLogement(dataLogement);
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);
  // should add error handling in case the id is incorrect - redirect the user to the error page

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Carousel key={logement.id} objet={logement} />
      <div className="fichelogement">
        <div className="containerFL">
          <div className="titleAndLocation">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>

          <div className="tags">
            {logement.tags?.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
            ))}
          </div>
        </div>

        <div className="containerFL2">
          <div className="host">
            <p>{logement?.host?.name || "Unknown Host"}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-img"
            />
          </div>
          <div className="rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="collapseFicheLogement">
        <Collapse title="Description" description={logement.description} />
        <Collapse
          title="Equipments"
          description={
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Fichelogement;
