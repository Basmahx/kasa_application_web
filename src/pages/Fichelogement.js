import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

import Collapse from "../components/Collapse";
import jsonData from "../data/logements.json";
import "../styles/carousel.css";

const Fichelogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findLogementId = (id) => {
      return jsonData.find((item) => item.id === id);
    };

    const dataLogement = findLogementId(id);

    if (dataLogement) {
      console.log("Logement found:");
      setLogement(dataLogement);
    } else {
      console.log(`Logement with ID ${id} not found.`);
      navigate("/not-found");
    }
  }, [id, navigate]);
  // should add error handling in case the id is incorrect - redirect the user to the error page


  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fichelogement">
      <Carousel key={logement.id} objet={logement} />

      <div className="titleAndLocation">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>

      <div className="host">
        <img
          src={logement.host.picture}
          alt={logement.host.name}
          className="host-img"
        />
        <p>{logement?.host?.name || "Unknown Host"}</p>
      </div>

      <div className="tags">
        {logement.tags?.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>

      {/* <p>{logement.rating}</p> */}
      <div className="collapseFicheLogement">
        <Collapse title="Description" description={logement.description} />
        <Collapse
          title="Equipments"
          description={logement.equipments.join(", ")}
        />
      </div>
    </div>
  );
};

export default Fichelogement;
