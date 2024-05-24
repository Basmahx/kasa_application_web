import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import jsonData from "../data/logements.json";
import "../styles/carousel.css";

const Fichelogement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ID from params:", id); 
    const foundLogement = jsonData.find((item) => {
      console.log("Comparing:", item.id, id); 
      return item.id === id;
    });
    console.log("Found Logement:", foundLogement); 
    if (foundLogement) {
      setLogement(foundLogement);
    } else {
      navigate("/not-found");
    }
  }, [id, navigate]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fichelogement">
      <div className="carousel">
        <Carousel key={logement.id} objet={logement} />
      </div>
    </div>
  );
};

export default Fichelogement;
