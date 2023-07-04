import React, { useState } from "react";
import { Link } from "react-router-dom";

// elements
import Button from "../../elements/Button";

// assets
import "../../assets/styles/containers/banner.scss";

const Banner = ({ title, image, description }) => {
  const [isAnimated, setIsAnimated] = useState(true);

  const stopAnimation = () => {
    setIsAnimated(false);
  };

  const startAnimation = () => {
    setIsAnimated(true);
  };

  return (
    <section
      className={`banner ${isAnimated ? "animated" : ""}`}
      onFocus={stopAnimation}
      onBlur={startAnimation}
    >
      <div className="banner__block">
        <h2 className="banner__title title">{title}</h2>
        <div className="divider"></div>
        <p className="banner__description">{description}</p>
        <Link>
          <Button
            type="secondary"
            onClick={() => (window.location.href = "#form")}
          >
            VIEW DETAILS
          </Button>
        </Link>
      </div>
      <img src={image} alt={title} className="banner__image" />
    </section>
  );
};

export default Banner;
