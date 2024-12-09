import React, { useState } from "react";
import flecheRight from "../assets/fleche-right.png";
import flecheLeft from "../assets/fleche-left.png";
import "../styles/carousel.css";

const Carousel = ({ objet }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const picturesArray = objet?.pictures || [];
  console.log("Pictures array in Carousel:", picturesArray);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picturesArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === picturesArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (picturesArray.length === 0) {
    return <div>No pictures available</div>;
  }


  // add conditional rendring
  return (
    <div className="carousel">
      <div className="carousel-container">
        {picturesArray.length > 1 && (
          <button className="left-arrow" onClick={goToPrevious}>
            <img src={flecheLeft} alt="Previous" />
          </button>
        )}

        <div className="carousel-slide">
          <img
            src={picturesArray[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          {picturesArray.length > 1 && (
            <div className="carousel-number">
              {currentIndex + 1}/{picturesArray.length}
            </div>
          )}
        </div>

        {picturesArray.length > 1 && (
          <button className="right-arrow" onClick={goToNext}>
            <img src={flecheRight} alt="Next" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
