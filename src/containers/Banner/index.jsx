import React from "react";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";

// elements
import Button from "../../elements/Button";

// assets
import "../../assets/styles/containers/banner.scss";

const Banner = ({ title, image, description }) => {
  const navigate = useNavigate();

  return (
    <section className="banner">
      <div className="banner__block">
        <h2 className="banner__title title">{title}</h2>
        <div className="divider"></div>
        <p className="banner__description">{description}</p>
        <Button
          type="secondary"
          onClick={() => navigate("/categories")}
          data-testid="view-details-button"
        >
          VIEW DETAILS
        </Button>
      </div>
      <img src={image} alt={title} className="banner__image" />
    </section>
  );
};

// BannerSell.propTypes = {
//   title: PropTypes.string.isRequired,
//   image: PropTypes.string,
//   price:  PropTypes.number,
//   description: PropTypes.string,
//   discount: PropTypes.number,
// };

export default Banner;
