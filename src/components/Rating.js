import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/fichelogement.css";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon key={`star-${i}`} icon={faStar} className="star-icon" />
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

  return <div className="rating-stars">{stars}</div>;
};

export default Rating;
