import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
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
    };

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

  // star icon for ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`star-${i}`}
          icon={faStar}
          className="star-icon"
        />
      );
    }

    if (halfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half-star"
          icon={faStarHalfAlt}
          className="star-icon"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={`star-empty-${i}`}
          icon={faStar}
          className="star-icon empty-star"
        />
      );
    }
    return stars;
  };

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
          <div className="rating">{renderStars(logement.rating)}</div>
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
